import { useMemo } from "react";
import Slider, { SliderProps } from "../components/Slider";
import { makeStyles } from "@material-ui/core";
import Page from "../components/Page";
import SliderArrow from "../components/Slider/SliderArrow";
import useIsSmallWindow from "../hooks/useIsSmallWindow";
import VideoThumbnail, {
  getImageSizes,
} from "../components/Video/VideoThumbnail";

import bannerHalf from "../static/img/1-vid-banner-half-01.jpg";
import banner from "../static/img/1-vid-banner-01.jpg";

const useStyles = makeStyles((theme) => ({
  get slider() {
    return Object.fromEntries(
      Object.entries(getImageSizes(theme)).map((size) => [
        size[0],
        {
          "& .slick-list, & .slick-track": {
            height: size[1].height,
          },
        },
      ])
    );
  },
}));

const Home: React.FunctionComponent = (props) => {
  const classes = useStyles();
  const sliderClass = classes.slider;
  const isSmallWindow = useIsSmallWindow();
  const sliderProps: SliderProps = useMemo(
    () => ({
      className: sliderClass,
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: !isSmallWindow,
      prevArrow: <SliderArrow dir="left" />,
      nextArrow: <SliderArrow dir="right" />,
    }),
    [isSmallWindow, sliderClass]
  );
  const thumbnail = isSmallWindow ? bannerHalf : banner;
  return (
    <Page>
      <Slider {...sliderProps}>
        <VideoThumbnail
          ImgProps={{
            src: thumbnail,
          }}
        />
        <VideoThumbnail
          ImgProps={{
            src: thumbnail,
          }}
        />
        <VideoThumbnail
          ImgProps={{
            src: thumbnail,
          }}
        />
        <VideoThumbnail
          ImgProps={{
            src: thumbnail,
          }}
        />
        <VideoThumbnail
          ImgProps={{
            src: thumbnail,
          }}
        />
        <VideoThumbnail
          ImgProps={{
            src: thumbnail,
          }}
        />
      </Slider>
    </Page>
  );
};

export default Home;
