import { AppBar, Grid, Toolbar, makeStyles } from "@material-ui/core";
import Title from "./Title";
import Notifications from "./Notifications";
import MenuCategories from "../menus/MenuCategories";
import MenuAccount from "../menus/MenuAccount";
import InputSearch from "../InputSearch";

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
          <Grid container justify="center">
            <Grid item xs={8} lg={7}>
              <InputSearch />
            </Grid>
          </Grid>
          <Notifications />
          <MenuAccount />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
