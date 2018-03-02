import { axios } from '../core'

// console.log(axios.interceptors)
axios.interceptors.response.use(function (response) {
    // console.log(response.data)
    return response.data
}, function (error) {
    return Promise.reject(error)
})
