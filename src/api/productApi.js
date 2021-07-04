import axiosClient from "./axiosClient";

const productApi = {
  getProducts: (value) => {
    const url = `/products?pageIndex=${value.pageIndex || 1}&pageSize=${
      value.pageSize || 12
    }&sortBy=${value.sortBy || 200}`;
    return axiosClient.get(url);
  },
  getProductById: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getProductSlide: () => {
    const url = "/products/slide";
    return axiosClient.get(url);
  },
};

export default productApi;
