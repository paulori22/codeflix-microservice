import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import Title from "./Title";
import Notifications from "./Notifications";
import MenuCategories from "../menus/MenuCategories";
import MenuAccount from "../menus/MenuAccount";
import InputSearch from "../InputSearch";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const NavBar: React.FunctionComponent = () => {
  const classes = useStyles();
  const isSmallWindow = useIsSmallWindow();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {!isSmallWindow && <MenuCategories />}
          <Title />
          {!isSmallWindow && (
            <>
              <Grid container justify="center">
                <Grid item xs={8} lg={7}>
                  <InputSearch />
                </Grid>
              </Grid>
              <Notifications />
              <MenuAccount />
            </>
          )}
          {isSmallWindow && (
            <Grid container justify="flex-end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
