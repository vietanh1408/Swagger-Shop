import React from "react";
import EmptyResult from "../../components/EmptyResult";
import ProductPageLayout from "../../components/ProductPageLayout";
import { useSearchReferences } from "../../hooks/useSearchParams";

function SearchPage() {
  const [products, isLoading, total, totalPage] = useSearchReferences();

  if (!total) return <EmptyResult />;

  return (
    <ProductPageLayout
      products={products}
      isLoading={isLoading}
      total={total}
      totalPage={totalPage}
    />
  );
}

export default SearchPage;
