
import React, { useState } from 'react'
import NavLeft from './components/NavLeft'
import NavRight from './components/NavRight'
import './styles.scss'

function Header() {


    const [isScroll, setIsScroll] = useState(false)

    const [openMenu, setOpenMenu] = useState(false)

    const handleScroll = () => {
        const currentScrollY = window.scrollY

        if (currentScrollY > 0) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }
    window.addEventListener('scroll', handleScroll)



    const handleShowMenuMobile = () => {
        setOpenMenu(!openMenu)
    }


    return (

        <>
            <div className={!isScroll ? "header" : "header header-fixed"}>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-5">
                            <NavLeft openMenu={openMenu} handleShowMenuMobile={handleShowMenuMobile} />
                        </div>
                        <div className="col col-md-2 p-lg-0 header-logo">
                            <img src="http://demo.posthemes.com/pos_ecolife_decoration/decoration3/img/ecolife-decoration3-logo-16103335913.jpg" alt="logo" style={{ width: '114px' }} />
                        </div>
                        <div className="col col-md-5 p-lg-0">
                            <NavRight />
                        </div>
                    </div>
                </div>
            </div>

            {openMenu && (
                <div className="modal" onClick={handleShowMenuMobile}></div>
            )}
        </>

    )
}

export default Header
