import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchAllCategory, fetchProductByCategory } from "../reducer/category";
import { useSearchParams } from "./useSearchParams";

export const useGetAllCategory = () => {
  const { categories, isLoading } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, []);

  return [categories, isLoading];
};

export const useGetProductByCategory = () => {
  const { isLoading, products, total, totalPage } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const match = useParams();
  const slug = match.slug;

  const location = useLocation();
  const searchParams = useSearchParams(location.search);

  useEffect(() => {
    dispatch(fetchProductByCategory({ slug, searchParams }));
  }, [location.search]);

  return { products, total, totalPage, isLoading };
};
