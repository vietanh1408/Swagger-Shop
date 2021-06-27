import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../reducer/product";

export const useGetAllProduct = () => {
  const { items, total, isLoading, totalPage } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  return [items, total, isLoading, totalPage];
};
