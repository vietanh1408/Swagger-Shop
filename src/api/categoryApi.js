import axiosClient from "./axiosClient";

const categoryApi = {
  getAllCategory: () => {
    const url = "/categories";
    return axiosClient.get(url);
  },
  getProductByCategory: ({ slug, searchParams }) => {
    const url = `/categories/${slug}?pageIndex=${
      searchParams?.pageIndex || 1
    }&pageSize=${searchParams?.pageSize || 12}&sortBy=${
      searchParams?.sortBy || 200
    }`;
    return axiosClient.get(url);
  },
};

export default categoryApi;
