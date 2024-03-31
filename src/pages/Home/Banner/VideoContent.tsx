import Title from "../../../components/Video/Title";
import VideoActions from "./VideoActions";
import { Video } from "../../../util/models";
import Category from "../../../components/Video/Category";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import useIsSmallWindow from "../../../hooks/useIsSmallWindow";
import BannerCategory from "./BannerCategory";
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from "../../../theme";

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
}));

interface VideoContentProps {
  video: Video;
}

const VideoContent: React.FunctionComponent<VideoContentProps> = (props) => {
  const { video } = props;
  const classes = useStyles();
  const isSmallWindow = useIsSmallWindow();
  const theme = useTheme();
  const isUp700 = useMediaQuery(
    theme.breakpoints.up(BANNER_VIDEO_ACTIONS_MEDIA_QUERY)
  );
  return (
    <div className={classes.root}>
      <BannerCategory>
        {video.categories.map((c) => c.name).join(" | ")}
      </BannerCategory>
      {isSmallWindow ? null : (
        <Title className={classes.title}>{video.title}</Title>
      )}
      {isUp700 && <VideoActions />}
    </div>
  );
};

export default VideoContent;
