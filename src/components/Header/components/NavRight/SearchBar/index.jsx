import React, { useRef, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { searchProduct } from '../../../../../features/Products/productSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


function SearchBar({ showSearchBar, isScreenMobile }) {

    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState('')

    const history = useHistory()

    const typingTimeoutRef = useRef(null)

    const handleSearchChange = (e) => {
        const value = e.target.value

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            setSearchTerm(value)
        }, 300)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const action = searchProduct(searchTerm)
        dispatch(action)
        history.push('/products')
    }

    return (
        <>
            {showSearchBar && (
                <form className="d-flex justify-content-between" onSubmit={handleSearchSubmit}>
                    <input type="text" placeholder="Enter your search key ..." onChange={handleSearchChange} />
                    <div>
                        <select className="form-select" aria-label="Default select example">
                            <option>All categories</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>

                    </div>
                    <button>
                        <SearchIcon />
                    </button>
                </form>
            )}
        </>
    )
}

export default SearchBar
