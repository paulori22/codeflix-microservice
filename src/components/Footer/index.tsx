import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import React from "react";
import FooterItem from "./FooterItem";
import {
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@material-ui/icons";

const useSyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    bottom: 0,
    top: "auto",
    borderTop: `1px solid ${theme.palette.text.secondary}`,
    height: "48px",
  },
  bottomNavigation: {
    backgroundColor: "inherit",
  },
}));

const Footer: React.FunctionComponent = () => {
  const classes = useSyles();

  return (
    <div className={classes.root}>
      <AppBar
        classes={{ root: classes.appBar }}
        position="fixed"
        color="primary"
      >
        <BottomNavigation className={classes.bottomNavigation} showLabels>
          <FooterItem label="Home" value="home" icon={<HomeIcon />} />
          <FooterItem
            label="Categorias"
            value="categories"
            icon={<HomeIcon />}
          />
          <FooterItem label="Notificações" icon={<NotificationsIcon />} />
          <FooterItem label="Conta" value="home" icon={<PersonIcon />} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
};

export default Footer;
