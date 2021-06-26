import axiosClient from "./axiosClient";

const searchApi = {
  search: (search) => {
    let url = `/search`;
    if (search.keyword)
      url += `?keyword=${search.keyword}
      &pageIndex=${search?.pageIndex || 1}
      &pageSize=${search?.pageSize || 12}`;
    return axiosClient.get(url);
  },
};

export default searchApi;
