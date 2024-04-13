import React, { useMemo } from "react";
import {
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import Slider, { SliderProps } from "../Slider";
import { Video } from "../../util/models";
import bannerThumb from "../../static/img/1-vid-thumb-01.jpg";
import banner from "../../static/img/1-vid-banner-01.jpg";
import VideoThumbnail from "./VideoThumbnail";
import SliderArrow from "../Slider/SliderArrow";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";

const useSectionTitleStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.4em",
    fontWeight: 600,
    textTransform: "uppercase",
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    margin: theme.spacing(3, 3),

    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      margin: theme.spacing(2, 1),
    },
  },
}));

export const SectionTitle: React.FunctionComponent = (props) => {
  const classes = useSectionTitleStyles();
  return (
    <Typography className={classes.root} component="h2" color="textSecondary">
      {props.children}
    </Typography>
  );
};

const useSectionSliderStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 3),

    [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
      margin: theme.spacing(0, 1),
    },
  },
  videoThumbnailRoot: {
    marginRight: "4px",
    "&:focus": {
      outlineColor: theme.palette.text.primary,
    },
  },
}));

interface SectionSliderProps {
  title: string;
  videos: Video[];
}
const SectionsSlide: React.FunctionComponent<SectionSliderProps> = (props) => {
  const { title } = props;
  const classes = useSectionSliderStyles();
  const theme = useTheme();
  const isDown1200 = useMediaQuery(theme.breakpoints.down(1200));
  const thumbnail = isDown1200 ? bannerThumb : banner;
  const isSmallWindow = useIsSmallWindow();
  const sliderProps: SliderProps = useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 3,
      variableWidth: true,
      arrows: !isSmallWindow,
      prevArrow: <SliderArrow dir="left" />,
      nextArrow: <SliderArrow dir="right" />,
    }),
    [isSmallWindow]
  );
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <div className={classes.root}>
        <Slider {...sliderProps}>
          {Array.from(new Array(6).keys()).map((v) => {
            return (
              <VideoThumbnail
                key={v}
                classes={{ root: classes.videoThumbnailRoot }}
                ImgProps={{
                  src: thumbnail,
                }}
              ></VideoThumbnail>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SectionsSlide;
