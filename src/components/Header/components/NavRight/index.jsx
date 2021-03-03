import { Badge } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import SettingMenu from './SettingMenu'
import './styles.scss'



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

    return (
        <>
            <ul className="header__setting-list">
                <li className="header__setting-list__item">
                    {!isScreenMobile && <i className="fas fa-search" onClick={handleShowSearchBar}></i>}
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
                            <i className="fas fa-random"></i>
                        </Badge>
                    </Link>
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
                            <i className="far fa-heart"></i>
                        </Badge>
                    </Link>
                </li>

                <li className="header__setting-list__item">

                    <Link to="/cart">
                        <Badge
                            color="secondary"
                            badgeContent={1}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                        >
                            <i className="fas fa-shopping-bag"></i>
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

{/* <ul className="header__nav-right m-0 p-0 d-flex justify-content-end w-100">
        <li className="header__nav-right__item ml-4">
            <SearchIcon style={{ fontSize: '1.8rem' }} onClick={handleShowSearchBar} />
            <SearchBar showSearchBar={showSearchBar} />
        </li>
        <li className="header__nav-right__item ml-4">

            <Link to="">
                <Badge
                    color="secondary"
                    badgeContent={1}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <ShuffleIcon style={{ fontSize: '1.8rem' }} />
                </Badge>
            </Link>
        </li>
        <li className="header__nav-right__item ml-4">
            <Link to="">
                <Badge
                    color="secondary"
                    badgeContent={1}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <FavoriteBorderIcon style={{ fontSize: '1.8rem' }} />
                </Badge>
            </Link>
        </li>
        <li className="header__nav-right__item header__nav-right__item-cart ml-4">
            <Link to="/cart">
                <Badge
                    color="secondary"
                    badgeContent={1}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                    <LocalMallIcon style={{ fontSize: '1.8rem' }} />
                </Badge>
            </Link>
        </li>
        <li className="header__nav-right__item header__nav-right__item-setting ml-4">
            <SettingMenu />
        </li>
    </ul> */}