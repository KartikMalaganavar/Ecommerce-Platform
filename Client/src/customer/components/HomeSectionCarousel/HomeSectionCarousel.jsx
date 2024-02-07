import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useEffect, useState } from "react";

function App({ products, sectionName }) {


  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer bg-black-900 text-black p-2"
        onClick={onClick}
      >
        <Button
          variant="contained"
          className="bg-white"
          sx={{
            position: "absolute",
            right: "1rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer bg-black-900 text-black p-2 z-10"
        onClick={onClick}
      >
        <Button
          variant="contained"
          className="bg-white"
          sx={{
            position: "absolute",
            left: "1rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
      </div>
    );
  };

  const [slidesToShow, setSlidesToShow] = useState("");

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1300) {
      setSlidesToShow(5.5);
    } else if (screenWidth >= 1024) {
      setSlidesToShow(4);
    } else if (screenWidth >= 720) {
      setSlidesToShow(3);
    } else if (screenWidth >= 600) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // Use the state variable
    slidesToScroll: 1,
  };

  return (
    <div className="border">
      <h2 className="px-5 text-2xl font-extrabold text-gray-800 py-5 ">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <Slider {...settings}>
          {products.slice(0, 10).map((item) => (
            <HomeSectionCard product={item} key={item.name} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
