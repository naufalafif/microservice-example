import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_BASE_API ? process.env.VUE_BASE_API : 'http://localhost:3000',
    timeout: 5000,
    auth: {
        username: 'admin',
        password: 'R2G1iN*$@0m1VUjex7*z0'
    }
})

service.interceptors.request.use(config => {
        // TODO: Config Token Here
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    })

service.interceptors.response.use(
    response => {
        // TODO: handle reset token
        return response
    },
    error => {
        console.log('err' + error) // for debug
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service