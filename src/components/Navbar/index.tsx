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
import { useCallback, useContext } from "react";
import DialogSearchContext from "../DialogSearch/DialogSearchContext";
import HideOnScroll from "./HideOnScroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const NavBar: React.FunctionComponent = () => {
  const classes = useStyles();
  const isSmallWindow = useIsSmallWindow();

  const dialogContext = useContext(DialogSearchContext);
  const handleOpen = useCallback(() => {
    dialogContext.show();
  }, [dialogContext]);

  return (
    <div className={classes.root}>
      <HideOnScroll>
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
                <IconButton onClick={handleOpen}>
                  <SearchIcon />
                </IconButton>
              </Grid>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default NavBar;
