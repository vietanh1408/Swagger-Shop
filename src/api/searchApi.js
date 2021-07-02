import axiosClient from "./axiosClient";

const searchApi = {
  search: (search) => {
    let url = `/search`;
    if (search.keyword)
      url += `?keyword=${search.keyword}
      &pageIndex=${search?.pageIndex || 1}
      &pageSize=${search?.pageSize || 12}
      &sortBy=${search?.sortBy || 200}`;
    return axiosClient.get(url);
  },
};

export default searchApi;
