import axiosClient from "./axiosClient";

const productApi = {
  getProduct: (value) => {
    const url = `/products?pageIndex=${value.pageIndex || 1}&pageSize=${
      value.pageSize || 12
    }&sortBy=${value.sortBy || 200}`;
    return axiosClient.get(url);
  },
};

export default productApi;
