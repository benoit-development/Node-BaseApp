import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import AppUser from '../models/user.js'
import env from './../env.js'

const router = express.Router()

router.post('/token', getUser, (req, res) => {
    // Read username and password from request body
    const { password } = req.body;

    if (res.user) {
        bcrypt.compare(password, res.user.password, function (err, result) {
            if (result) {
                // Generate an access token
                const generatedToken = jwt.sign(
                    {
                        login: res.user.login,
                        name: res.user.name
                    },
                    env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: '900s'
                    }
                );

                console.log('Login succeeded')
                res.json({
                    access_token: generatedToken
                });
            } else {
                // Passwords don't match
                res.status(401).send('Username or password incorrect');
            }
        });
    } else {
        console.log('Login failed')
        res.status(401).send('Username or password incorrect');
    }
})


/*
router.get('/users/:login', getUser, (req, res) => {
    res.send(res.user)
})
*/


async function getUser(req, res, next) {

    const { login } = req.body

    console.log("Search user by login : " + login)
    try {
        const user = await AppUser.findOne({ login });
        if (user == null) {
            return res.status(401).json({ message: 'Cant find user' })
        } else {
            res.user = user
            console.log("User found : " + user.name)
            next()
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

/*
// Create one user
router.post('/users', async (req, res) => {
    console.log('Requesting app user creation')

    try {
        await bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, encrypted) => {
                const user = new AppUser({
                    login: req.body.login,
                    name: req.body.name,
                    password: encrypted,
                    salt: salt
                })
                user.save((er, savedUser) => {
                    res.status(201).json(savedUser)
                })
            })
        })

    } catch (err) {
        console.log('Error : ' + err.message)
        res.status(400).json({ message: err.message })
    }
})
*/

export default router
