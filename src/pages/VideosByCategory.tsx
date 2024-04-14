import { Grid } from "@material-ui/core";
import Page from "../components/Page";
import VideoList from "../components/Video/VideoList";
import Title from "../components/Title";
import MenuGenre from "../components/MenuGenre";

const VideosByCategory: React.FunctionComponent = (props) => {
  return (
    <Page margin="large">
      <Grid container>
        <Grid item xs={7} sm={9}>
          <Title>Filme</Title>
        </Grid>
        <Grid item xs={5} sm={3}>
          <MenuGenre />
        </Grid>
      </Grid>
      <VideoList videos={[]} />
    </Page>
  );
};

export default VideosByCategory;
