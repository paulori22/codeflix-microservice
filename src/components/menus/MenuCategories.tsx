import React, { useState } from "react";
import { IconButton, Menu as MuiMenu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import routes, { MyRouteProps } from "../../routes";
import { Link } from "react-router-dom";

const listRoutes = {
  home: "Inicio",
};

const menuRoutes = routes.filter((route) =>
  Object.keys(listRoutes).includes(route.name)
);

const MenuCategories: React.FunctionComponent = () => {
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
      <IconButton color="inherit" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <MuiMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
      >
        {Object.keys(listRoutes).map((routeName, key) => {
          const route = menuRoutes.find(
            (route) => route.name === routeName
          ) as MyRouteProps;
          return (
            <MenuItem
              key={key}
              component={Link}
              to={route.path as string}
              onClick={handleClose}
            >
              {listRoutes[routeName as keyof typeof listRoutes]}
            </MenuItem>
          );
        })}
        <MenuItem component={Link} to={"/categories/1"} onClick={handleClose}>
          Categorias
        </MenuItem>
      </MuiMenu>
    </div>
  );
};

export default MenuCategories;
