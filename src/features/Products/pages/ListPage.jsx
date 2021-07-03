// libs
import React from "react";
import ProductPageLayout from "../../../components/Product/ProductPageLayout";
// custom hooks
import { useGetAllProduct } from "../../../hooks/useGetAllProduct";

const ListPage = () => {
  const [products, total, isLoading, totalPage] = useGetAllProduct();

  return (
    <ProductPageLayout
      products={products}
      total={total}
      isLoading={isLoading}
      totalPage={totalPage}
    />
  );
};

export default ListPage;
