import express from 'express'
import jwt from 'jsonwebtoken'
import env from './../env.js'

const router = express.Router()

const users = [
    {
        username: 'john',
        password: '123',
    }, {
        username: 'anna',
        password: '456',
    }
];

router.post('/login', (req, res) => {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const generatedToken = jwt.sign(
            {
                username: user.username
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
        console.log('Login failed')
        res.status(401).send('Username or password incorrect');
    }
});


export default router
