import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../../reducer/authentication";
function SettingMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSignOut, setOpenSignOut] = useState(false);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const currentUser = useSelector((state) => state.authentication.user);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleSettingMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickOpen = () => {
    setOpenSignOut(true);
  };

  const handleCloseSignOut = () => {
    setOpenSignOut(false);
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

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
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
      >
        {currentUser === true ? (
          <Box>
            <MenuItem>{currentUser?.email}</MenuItem>

            <div>
              <MenuItem onClick={handleClickOpen}>Log out</MenuItem>
              <Dialog
                open={openSignOut}
                onClose={handleCloseSignOut}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  Are you sure ?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure that you want to sign out ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleLogOut} color="primary">
                    Sign out
                  </Button>
                  <Button
                    onClick={handleCloseSignOut}
                    color="primary"
                    autoFocus
                  >
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Box>
        ) : (
          <Box>
            <MenuItem onClick={handleClose}>
              <Link
                to="/login"
                className="text-decoration-none"
                color="primary"
              >
                Sign in
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/register"
                className="text-decoration-none"
                color="primary"
              >
                Sign up
              </Link>
            </MenuItem>
          </Box>
        )}
      </Menu>
    </>
  );
}

export default SettingMenu;
