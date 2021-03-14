import { Badge } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import SettingMenu from './SettingMenu'
import './styles.scss'
import SearchIcon from '@material-ui/icons/Search'
import ShareIcon from '@material-ui/icons/Share'
import { useSelector } from 'react-redux'


function NavRight() {

    const [showSearchBar, setShowSearchBar] = useState(false)

    const screenWidth = window.innerWidth

    const [isScreenMobile, setIsScreenMobile] = useState(false)

    useEffect(() => {
        if (screenWidth <= 960) {
            setIsScreenMobile(true)
        }

        if (screenWidth > 960) {
            setIsScreenMobile(false)
        }
        if (isScreenMobile) {
            setShowSearchBar(true)
        }
    }, [screenWidth])

    const handleShowSearchBar = () => {
        setShowSearchBar(!showSearchBar)
    }

    const wishlist = useSelector(state => state.wishlist)
    const cartList = useSelector(state => state.cart.list)

    return (
        <>
            <ul className="header__setting-list">
                <li className="header__setting-list__item">
                    {!isScreenMobile && <SearchIcon onClick={handleShowSearchBar} />}
                    <SearchBar showSearchBar={showSearchBar} isScreenMobile={isScreenMobile} />
                </li>
                <li className="header__setting-list__item">

                    <Link to="">
                        <Badge
                            color="secondary"
                            badgeContent={1}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <ShareIcon />
                        </Badge>
                    </Link>
                </li>
                <li className="header__setting-list__item">

                    <Link to="">
                        <Badge
                            color="secondary"
                            badgeContent={wishlist.length}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <FavoriteBorderIcon />
                        </Badge>
                    </Link>
                </li>

                <li className="header__setting-list__item">

                    <Link to="/cart">
                        <Badge
                            color="secondary"
                            badgeContent={cartList.length}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <ShoppingCartIcon />
                        </Badge>
                    </Link>
                </li>
                <li className="header__setting-list__item">
                    <SettingMenu />
                </li>
            </ul>
        </>
    )
}

export default NavRight
