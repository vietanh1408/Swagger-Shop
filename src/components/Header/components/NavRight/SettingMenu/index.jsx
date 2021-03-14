import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Menu, MenuItem } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../../../features/Auth/userSlice'
import { fb } from '../../../../../service/firebase'
import './styles.scss'

function SettingMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [openSignOut, setOpenSignOut] = useState(false)
    const [currentUser, setCurrentUser] = useState()
    const dispatch = useDispatch()
    const open = Boolean(anchorEl)
    const user = fb.auth.currentUser

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleToggleSettingMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClickOpen = () => {
        setOpenSignOut(true);
    };

    const handleCloseSignOut = () => {
        setOpenSignOut(false);
    };

    const handleLogOut = () => {
        fb.auth.signOut().then(res => {
            dispatch(logout())
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {

        if (!!user) {
            setCurrentUser(true)
        } else {
            setCurrentUser(false)
        }
    }, [user])

    return (
        <>
            <Button
                className="p-0"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleToggleSettingMenu}
            >
                <MenuIcon />
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
                {currentUser === true
                    ? <Box>
                        <MenuItem>{user?.email}</MenuItem>

                        <div>
                            <MenuItem onClick={handleClickOpen}>Log out</MenuItem>
                            <Dialog
                                open={openSignOut}
                                onClose={handleCloseSignOut}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">Are you sure ?</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure that you want to sign out ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleLogOut} color="primary">
                                        Sign out
                                    </Button>
                                    <Button onClick={handleCloseSignOut} color="primary" autoFocus>
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Box>
                    : <Box>
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
                    </Box>
                }
            </Menu>
        </>
    )
}

export default SettingMenu
