import { Button, Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import TuneIcon from '@material-ui/icons/Tune'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

function SettingMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)


    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleToggleSettingMenu = (event) => {
        setAnchorEl(event.currentTarget)

    }

    return (
        <>
            <Button
                className="p-0"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleToggleSettingMenu}
            >
                <TuneIcon
                    style={{ fontSize: '1.8rem' }}
                />
            </Button>

            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleClose} className="d-flex">
                    <ul>
                        <li>Language</li>
                        <li>
                            <img src="http://demo.posthemes.com/pos_ecolife_decoration/decoration3/img/l/1.jpg" alt="english" />
                            English
                        </li>
                        <li>
                            <img src="http://demo.posthemes.com/pos_ecolife_decoration/decoration3/img/l/2.jpg" alt="francais" />
                            Français
                        </li>
                    </ul>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/sign-in" className="text-decoration-none" color="primary">
                        Sign in
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to="/sign-up" className="text-decoration-none" color="primary">
                        Sign up
                    </Link>
                </MenuItem>
            </Menu>

        </>
    )
}

export default SettingMenu
