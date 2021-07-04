import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductSlide } from "../reducer/product";

export const useGetProductSlide = () => {
  const { sliders } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductSlide());
  }, []);
  return sliders;
};
