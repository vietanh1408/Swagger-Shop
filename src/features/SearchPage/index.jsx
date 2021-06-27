import React from "react";
import CustomPagination from "../../components/CustomPagination";
import { useSearchReferences } from "../../hooks/useSearchParams";
import ProductList from "../Products/components/ProductList";

function SearchPage() {
  const [items, isLoading, total, totalPage] = useSearchReferences();

  return (
    <div className="container">
      <ProductList data={items} loading={isLoading} />
      <CustomPagination totalPage={totalPage} />
    </div>
  );
}

export default SearchPage;
