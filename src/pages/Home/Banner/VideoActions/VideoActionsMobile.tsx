import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import {
  AddCircleOutline,
  Info as InfoIcon,
  PlayCircleOutline,
} from "@material-ui/icons";
import useIsSmallWindow from "../../../../hooks/useIsSmallWindow";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "inherit",
  },
  navigationAction: {
    color: theme.palette.text.primary,
  },
}));

interface VideoActionsMobileProps {}

const VideoActionsMobile: React.FunctionComponent<VideoActionsMobileProps> = (
  props
) => {
  const classes = useStyles();
  const isSmallWindow = useIsSmallWindow();
  return isSmallWindow ? (
    <BottomNavigation className={classes.root} showLabels>
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Play"
        icon={<PlayCircleOutline />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Minha Lista"
        icon={<AddCircleOutline />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Info"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  ) : null;
};

export default VideoActionsMobile;
