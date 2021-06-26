import { Box } from "@material-ui/core";
import React from "react";
import { useSearchReferences } from "../../hooks/useSearchParams";

function SearchPage() {
  const [items, isLoading, total] = useSearchReferences();

  return <Box>{total}</Box>;
}

export default SearchPage;
