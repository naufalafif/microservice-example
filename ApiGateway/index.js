const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const basicAuth = require('express-basic-auth')
const bodyParser = require('body-parser')
// Get the quotes api from the environment(refer docker-compose.yml)
const TASK_API_GATEWAY = process.env.TASK_API ? process.env.TASK_API :  'http://127.0.0.1:5000'
const BASCI_AUTH_PASS = process.env.BASIC_AUTH_PASS ? process.env.BASIC_AUTH_PASS : 'R2G1iN*$@0m1VUjex7*z0'



// Use CORS to prevent Cross-Origin Requets issue
app.use(cors())
app.use(bodyParser.json())
app.use(basicAuth({
    users: {
        'admin': BASCI_AUTH_PASS
    },
    challenge: true 
}))
// Get the status of the API
app.get('/', (req, res) => {
    return res.json({
        status: 'ok'
    })
})

// Returns a random quote from the quote api
app.get('/task', async (req, res) => {
    try {
        const url = TASK_API_GATEWAY + '/task'
        const tasks = await axios.get(url)
        return res.json({
            time: Date.now(),
            data: tasks.data.data
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        return res.json({
            message: "Internal server error",
        })
    }
})

app.post('/task', async (req, res) => {
    try {
        const url = TASK_API_GATEWAY + '/task'
        const { name, description } = req.body
        const tasks = await axios.post(url, {
            name,
            description
        })
        return res.json({
            time: Date.now(),
            data: tasks.data.data
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        return res.json({
            message: "Internal server error",
        })
    }
})

app.delete('/task', async (req, res) => {
    try {
        const url = TASK_API_GATEWAY + `/task/${req.id}`
        const tasks = await axios.delete(url)
        return res.json({
            time: Date.now(),
            data: tasks.data.data
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        return res.json({
            message: "Internal server error",
        })
    }
})

// Handle any unknown route
app.get('*', (req, res) => {
    res.status(404)
    return res.json({
        message: 'Resource not found'
    })
});

// starts the app
app.listen(3000, () => {
    console.log('API Gateway is listening on port 3000!')
})