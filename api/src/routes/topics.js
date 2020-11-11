import express from 'express'
import Topic from '../models/topics.js'
import authJwtMiddleware from '../middleware/authJwt.js'

const router = express.Router()



// Get all topics
router.get('/', authJwtMiddleware, async (req, res) => {
    console.log('Requesting topics')
    try {
        const topics = await Topic.find()
        res.json(topics)
    } catch (err) {
        console.log('Error : ' + err.message)
        res.status(500).json({ message: err.message })
    }
})



// Get one topic
router.get('/:id', authJwtMiddleware, getTopic, async (req, res) => {
    console.log('Requesting topic by id')

    res.json(res.topic)
})



// Create one topic
router.post('/', authJwtMiddleware, async (req, res) => {
    console.log('Requesting topic creation')

    try {
        const topic = new Topic({
            title: req.body.title,
            summary: req.body.summary,
            description: req.body.description,
        })

        const newTopic = await topic.save()
        res.status(201).json(newTopic)
    } catch (err) {
        console.log('Error : ' + err.message)
        res.status(400).json({ message: err.message })
    }
})



// Delete one topic
router.delete('/:id', authJwtMiddleware, getTopic, async (req, res) => {
    console.log('Requesting topic deletion')

    try {
        await res.topic.remove()
        res.json({ message: 'Topic deleted' })
    } catch (err) {
        console.log('Error : ' + err.message)
        res.status(500).json({ message: err.message })
    }
})



// Update one topic
router.patch('/:id', authJwtMiddleware, getTopic, async (req, res) => {
    console.log('Requesting topic update')

    if (req.body.title != null) {
        res.topic.title = req.body.title
    }
    if (req.body.summary != null) {
        res.topic.summary = req.body.summary
    }
    if (req.body.description != null) {
        res.topic.description = req.body.description
    }

    try {
        const updatedTopic = await res.topic.save()
        res.json(updatedTopic)
    } catch (err) {
        console.log('Error : ' + err.message)
        res.status(400).json({ message: err.message })
    }

})



async function getTopic(req, res, next) {
    console.log("Search topic by id : " + req.params.id)
    try {
        const topic = await Topic.findById(req.params.id)
        if (topic == null) {
            return res.status(404).json({ message: 'Cant find topic' })
        } else {
            res.topic = topic
            console.log("Topic found")
            console.log(topic)
            next()
        }
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}



export default router
