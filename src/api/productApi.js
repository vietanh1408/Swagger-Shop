import axiosClient from "./axiosClient";

const productApi = {
  getAll: () => {
    const url = "/products";
    return axiosClient.get(url);
  },

  // get: (id) => {
  //     const url = `/products/${id}`
  //     return axiosClient.get(url)
  // },

  // getProductsByCategory: (slug) => {
  //     const url = `products/category/${slug}`
  //     return axiosClient.get(url)
  // },

  // getCategoryList: () => {
  //     const url = '/products/categories'
  //     return axiosClient.get(url)
  // },

  // add(data) {
  //     const url = '/products'
  //     return axiosClient.post(url, data)
  // },

  // update(data) {
  //     const url = `/products/${data.id}`
  //     return axiosClient.patch(url, data)
  // },

  // remove(id) {
  //     const url = `/products/${id}`
  //     return axiosClient.delete(url)
  // },

  /* getAll(params) {
        const url = '/products/get-product'
        return axiosClient.get(url, { params })
    },
    get(id) {
        const url = `products/get-one-product?id=${id}`
        return axiosClient.get(url)
    },
    getCategoryList: () => {
        const url = '/products/type'
        return axiosClient.get(url)
    },
    getProductsByCategory: (slug) => {
        const url = `products/category/${slug}`
        return axiosClient.get(url)
    }, */
};

export default productApi;
