import React, { useState } from "react";
import {
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Box,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Arrow from "@material-ui/icons/KeyboardArrowDown";
import { MyRouteProps } from "../../routes";
import { Link } from "react-router-dom";
import { ExitToApp } from "@material-ui/icons";

const MenuAccount: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems={"center"}
        flexDirection={"row"}
        px={1}
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      >
        Nome do usuario
        <Arrow />
      </Box>
      <MuiMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon style={{ color: "inherit" }}>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Sair" />
        </MenuItem>
      </MuiMenu>
    </div>
  );
};

export default MenuAccount;
