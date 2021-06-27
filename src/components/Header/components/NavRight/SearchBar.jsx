import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useSearchParams,
  useUpdateSearch,
} from "../../../../hooks/useSearchParams";

function SearchBar({ showSearchBar, isScreenMobile }) {
  const location = useLocation();

  const { keyword } = useSearchParams(location.search);

  const [searchTerm, setSearchTerm] = useState(keyword);

  const { handleSearchClick } = useUpdateSearch();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    handleSearchClick("search", searchTerm);
  };

  return (
    <>
      {showSearchBar && (
        <form
          className="d-flex justify-content-between"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Enter your search key ..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>
            <SearchIcon />
          </button>
        </form>
      )}
    </>
  );
}

export default SearchBar;
