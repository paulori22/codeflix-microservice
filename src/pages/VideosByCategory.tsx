import Page from "../components/Page";
import VideoList from "../components/Video/VideoList";

const VideosByCategory: React.FunctionComponent = (props) => {
  return (
    <Page>
      <VideoList videos={[]} />
    </Page>
  );
};

export default VideosByCategory;
