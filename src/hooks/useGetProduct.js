import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../reducer/productDetail";

export const useGetProductById = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { product, isLoading } = useSelector((state) => state.productDetail);

  const [thumbnail, setThumbnail] = useState(product?.poster[0].url);

  const handleChangeImage = (e) => {
    setThumbnail(e.target.src);
  };

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, []);

  return { product, isLoading, thumbnail, handleChangeImage };
};
