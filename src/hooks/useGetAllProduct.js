import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllProduct } from "../reducer/product";
import { useSearchParams } from "./useSearchParams";

export const useGetAllProduct = () => {
  const { items, total, isLoading, totalPage } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = useSearchParams(location.search);

  useEffect(async () => {
    await dispatch(fetchAllProduct(searchParams));
  }, [location.search]);

  return [items, total, isLoading, totalPage];
};
