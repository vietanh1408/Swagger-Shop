import { identity, pickBy } from "lodash";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "../contants/String";
import { fetchSearchProduct } from "../reducer/search";

export const useSearchParams = (search) => {
  const searchParams = queryString.parse(search);

  return searchParams;
};

export const useUpdateSearch = () => {
  const { search } = useLocation();

  const history = useHistory();

  const handleSearchClick = (path, value) => {
    const searchObj = queryString.parse(search);
    if (path) {
      searchObj.keyword = value || "";
      searchObj.pageIndex = DEFAULT_PAGE_INDEX;
      searchObj.pageSize = DEFAULT_PAGE_SIZE;

      history.push(
        `${path}?${queryString.stringify(pickBy(searchObj, identity))}`
      );
    }
  };

  return { handleSearchClick };
};

export const useSearchReferences = () => {
  const { items, isLoading, total } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = useSearchParams(location.search);

  useEffect(async () => {
    console.log("searchParams.....................", searchParams);
    await dispatch(fetchSearchProduct(searchParams));
  }, [location.search]);

  return [items, isLoading, total];
};
