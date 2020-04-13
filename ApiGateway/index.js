const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

// Get the quotes api from the environment(refer docker-compose.yml)
const TASK_API_GATEWAY = process.env.TASK_API ? process.env.TASK_API :  'http://127.0.0.1:5000'

// Use CORS to prevent Cross-Origin Requets issue
app.use(cors())

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