import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  BottomNavigationActionProps,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useSyles = makeStyles({
  root: {
    fontWeight: 600,
    paddingBottom: 0,
    paddingTop: 0,
  },
});

export interface FooterItemProps extends BottomNavigationActionProps {}

const FooterItem: React.FunctionComponent<FooterItemProps> = (props) => {
  const classes = useSyles();
  return <BottomNavigationAction className={classes.root} {...props} />;
};

export default FooterItem;
