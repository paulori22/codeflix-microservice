import React, { useState } from "react";
import {
  Menu as MuiMenu,
  MenuItem,
  Box,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Arrow from "@material-ui/icons/KeyboardArrowDown";
import { ExitToApp } from "@material-ui/icons";
import useMenu from "../../hooks/useMenu";

const MenuAccount: React.FunctionComponent = () => {
  const { open, anchorEl, handleOpen, handleClose } = useMenu();

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
