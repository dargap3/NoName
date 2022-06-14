import React, { useContext } from "react";
import Carousel from "@brainhubeu/react-carousel";

import { Context } from "../../context/Context";

import useWidth from "../../hooks/useWidth/useWidth";

import SmallTalk from "../SmallTalk/SmallTalk";

const SmallTalksCarousel = () => {
  const { smallTalks } = useContext(Context);

  const width = useWidth();

  return (
    <Carousel
      autoPlay={8000}
      animationSpeed={2000}
      keepDirectionWhenDragging
      centered={width <= 1000 ? true : false}
      infinite
      slidesPerPage={width >= 1000 ? 3 : 1.5}
      arrows
    >
      {smallTalks.map(({ id, ...media }) => (
        <SmallTalk key={id} media={media} />
      ))}
    </Carousel>
  );
};

export default SmallTalksCarousel;
