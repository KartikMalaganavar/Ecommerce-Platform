import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarousalData";

const MainCarousel = () => {
  // const navigate = useNavigate();

  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay
      disableButtonsControls
      autoPlayInterval={1500}
      infinite
    />
  );
};

export default MainCarousel;
