import { useMemo } from "react";
import Slider, { SliderProps } from "../../../components/Slider";
import { makeStyles } from "@material-ui/core";
import SliderArrow from "../../../components/Slider/SliderArrow";
import useIsSmallWindow from "../../../hooks/useIsSmallWindow";
import VideoThumbnail from "../../../components/Video/VideoThumbnail";

import bannerHalf from "../../../static/img/1-vid-banner-half-01.jpg";
import banner from "../../../static/img/1-vid-banner-01.jpg";
import Rating from "../../../components/Video/Rating";
import Category from "../../../components/Video/Category";

const useStyles = makeStyles((theme) => ({
  rootImage: {
    marginRight: "4px",
    "&:focus": {
      outlineColor: theme.palette.text.primary,
    },
  },
  image: {
    [theme.breakpoints.down(400)]: {
      width: "380px",
      height: "169px",
    },

    [theme.breakpoints.up(400)]: {
      width: "350px",
      height: "197px",
    },

    [theme.breakpoints.up(700)]: {
      width: "650px",
      height: "366px",
    },

    [theme.breakpoints.up(1200)]: {
      width: "1150px",
      height: "647px",
    },
  },
  get slider() {
    return Object.fromEntries(
      Object.entries(this.image).map((size) => [
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

const Banner: React.FunctionComponent = (props) => {
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
    <div>
      <Rating rating="18" />
      <Category>The Universe</Category>
      <Slider {...sliderProps}>
        {[0, 1, 2, 3, 4, 5].map((v) => (
          <VideoThumbnail
            key={v}
            classes={{ root: classes.rootImage, image: classes.image }}
            ImgProps={{
              src: thumbnail,
            }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;