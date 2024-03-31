import { makeStyles } from "@material-ui/core";
import VideoLink from "../../../../components/Video/VideoLink";
import {
  AddCircleOutline,
  Info as InfoIcon,
  PlayCircleOutline,
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

interface VideoActionsProps {}

const VideoActions: React.FunctionComponent<VideoActionsProps> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <VideoLink>
        <PlayCircleOutline />
        Play
      </VideoLink>
      <VideoLink>
        <AddCircleOutline />
        Minha Lista
      </VideoLink>
      <VideoLink>
        <InfoIcon /> Info
      </VideoLink>
    </div>
  );
};

export default VideoActions;
