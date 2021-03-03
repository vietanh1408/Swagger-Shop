import React from 'react'
import SearchIcon from '@material-ui/icons/Search'


function SearchBar({ showSearchBar, isScreenMobile }) {
    return (
        <>
            {showSearchBar && (
                <form className="d-flex justify-content-between">
                    <input type="text" placeholder="Enter your search key ..." />
                    <div>
                        <select className="form-select" aria-label="Default select example">
                            <option>All categories</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>

                    </div>
                    <button type="submit">
                        <SearchIcon />
                    </button>
                </form>
            )}
            {isScreenMobile && (
                <form className="d-flex justify-content-between">
                    <input type="text" placeholder="Enter your search key ..." />
                    <div>
                        <select className="form-select" aria-label="Default select example">
                            <option>All categories</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>

                    </div>
                    <button type="submit">
                        <SearchIcon />
                    </button>
                </form>
            )}
        </>
    )
}

export default SearchBar
