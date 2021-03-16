import SearchIcon from '@material-ui/icons/Search'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { searchProduct } from '../../../../../features/Products/productSlice'


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
        document.querySelector('form').reset()
    }

    return (
        <>
            {showSearchBar && (
                <form className="d-flex justify-content-between" onSubmit={handleSearchSubmit}>
                    <input type="text" placeholder="Enter your search key ..." onChange={handleSearchChange} />
                    <button>
                        <SearchIcon />
                    </button>
                </form>
            )}
        </>
    )
}

export default SearchBar
