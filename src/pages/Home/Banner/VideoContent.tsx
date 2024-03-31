import Title from "../../../components/Navbar/Title";
import BannerCategory from "./BannerCategory";
import VideoActions from "./VideoActions";
import { Video } from "../../../util/models";

interface VideoContentProps {
  video: Video;
}

const VideoContent: React.FunctionComponent<VideoContentProps> = (props) => {
  const { video } = props;
  return (
    <div>
      <BannerCategory>
        {video.categories.map((c) => c.name).join(" | ")}
      </BannerCategory>
      <Title>{video.title}</Title>
      <VideoActions />
    </div>
  );
};

export default VideoContent;
