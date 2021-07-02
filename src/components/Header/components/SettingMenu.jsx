// libs
import { Box, Button, Menu, MenuItem } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// components
import { logout } from "../../../reducer/authentication";

const SettingMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const currentUser = useSelector((state) => state.authentication.user);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleSettingMenu = (event) => {
    setAnchorEl(event.currentTarget);
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
        {currentUser ? (
          <Box>
            <MenuItem>{currentUser?.email}</MenuItem>
            <div>
              <MenuItem onClick={handleLogOut}>
                <div className="d-flex align-items-center">
                  <p>Sign out</p>
                  <i className="fas fa-sign-out-alt ml-5"></i>
                </div>
              </MenuItem>
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
};

export default SettingMenu;
