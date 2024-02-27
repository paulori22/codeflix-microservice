import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import Title from "./Title";
import Notifications from "./Notifications";
import MenuCategories from "../menus/MenuCategories";
import MenuAccount from "../menus/MenuAccount";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const NavBar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <MenuCategories />
          <Title />
          <Notifications />
          <MenuAccount />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
