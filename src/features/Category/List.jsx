// libs
import React from "react";
// components
import ProductPageLayout from "../../components/Product/ProductPageLayout";
import { useGetProductByCategory } from "../../hooks/useGetCategory";

const ProductByCategory = () => {
  const { products, total, totalPage, isLoading } = useGetProductByCategory();
  return (
    <ProductPageLayout
      products={products}
      total={total}
      totalPage={totalPage}
      isLoading={isLoading}
    />
  );
};

export default ProductByCategory;
