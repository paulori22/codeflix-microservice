import Title from "../../../components/Video/Title";
import VideoActions from "./VideoActions";
import { Video } from "../../../util/models";
import Category from "../../../components/Video/Category";
import { makeStyles } from "@material-ui/core";
import useIsSmallWindow from "../../../hooks/useIsSmallWindow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginLeft: 24,
    marginBottom: 40,
    bottom: 0,
  },
  title: {
    fontSize: "2em",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5em",
    },
  },
  category: {
    fontSize: "1.4em",
    borderBottomWidth: "2px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.6em",
      borderBottomWidth: "5px",
    },
  },
}));

interface VideoContentProps {
  video: Video;
}

const VideoContent: React.FunctionComponent<VideoContentProps> = (props) => {
  const { video } = props;
  const classes = useStyles();
  const isSmallWindow = useIsSmallWindow();

  return (
    <div className={classes.root}>
      <Category className={classes.category}>
        {video.categories.map((c) => c.name).join(" | ")}
      </Category>
      <Title className={classes.title}>{video.title}</Title>
      {isSmallWindow ? null : <VideoActions />}
    </div>
  );
};

export default VideoContent;
