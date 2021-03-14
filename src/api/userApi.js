import axiosClient from './axiosClient'

const userApi = {
    get: (id) => {
        const url = `/users/${id}`
        return axiosClient.get(url)
    },
    add: (data) => {
        const url = `/users`
        return axiosClient.post(url, data)
    }
}

export default userApi