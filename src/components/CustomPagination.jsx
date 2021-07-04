// libs
import { Pagination } from "@material-ui/lab";
import React from "react";
import { useLocation } from "react-router-dom";

// custom hooks
import { useSearchParams, useUpdateSearch } from "../hooks/useSearchParams";

const CustomPagination = (props) => {
  const { totalPage } = props;

  const location = useLocation();

  const { pageIndex } = useSearchParams(location.search);

  const { handleChangePageIndex } = useUpdateSearch();

  const onChangePageIndex = (e, page) => {
    handleChangePageIndex(page);
  };

  return (
    <div className="container d-flex justify-content-center py-5">
      <Pagination
        count={totalPage}
        page={+pageIndex || 1}
        variant="outlined"
        size="large"
        shape="rounded"
        onChange={onChangePageIndex}
      />
    </div>
  );
};

export default CustomPagination;
