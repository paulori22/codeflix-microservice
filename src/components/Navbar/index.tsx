import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import Title from "./Title";
import Notifications from "./Notifications";

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
          <Title />
          <Notifications />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
