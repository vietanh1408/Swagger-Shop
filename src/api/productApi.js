import axiosClient from './axiosClient'

const productApi = {
    getAll: (params) => {
        const url = '/products'
        return axiosClient.get(url, { params })
    },

    get: (id) => {
        const url = `/products/${id}`
        return axiosClient.get(url)
    },

    getProductByCategory: (slug) => {
        const url = `products/category/${slug}`
        return axiosClient.get(url)
    },

    add(data) {
        const url = '/products'
        return axiosClient.post(url, data)
    },

    update(data) {
        const url = `/products/${data.id}`
        return axiosClient.patch(url, data)
    },

    remove(id) {
        const url = `/products/${id}`
        return axiosClient.delete(url)
    },

    sort(type) {
        const url = `/products/?sort=${type}`
        return axiosClient.get(url)
    }
}

export default productApi