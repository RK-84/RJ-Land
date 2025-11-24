"use client";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./CaruselArrow";
import { PrevArrow } from "./CaruselArrow";
import SlideCarouselCard from "./SlideCarouselCard";
import styles from "./Carusel.module.css"
import { useState } from "react";
import Loading from "../Loading/Loading";
const Carusel = (props) => {
  let result = props.data.filter((item) => {
      return item.stock !== 0;
    });
  let settings = {
    listClass: `slick-list ${styles.list}`,

    speed: 700,
    centerMode: true,
    centerPadding: "1em",
    swipeToSlide: true,
    rtl: true,
    slidesToShow: 6,
    slidesToScroll: 6,


    nextArrow: <NextArrow width="30px" height="30px" />,
    prevArrow: <PrevArrow width="30px" height="30px" />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,

        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
   
    
  
    ]
  };

const [showLoading ,setShowLoading ]=useState(false)
const clickHandler=()=>{
  setShowLoading(true)
}
  return (  
    <main>
    {showLoading && <Loading/>}
    <Slider
      {...settings}
      autoplay={false}
      autoplaySpeed={2000}
      focusOnSelect={false}
      rtl={true}
      slidesToScroll={1}
      >
    
      {result.map((item) => (
        <div key={item.id} onClick={clickHandler} className={styles.SlideCarouselCardContainer} >
        <SlideCarouselCard  product={item} />
        </div>
      ))}
    </Slider>
      </main>
  );
};

export default Carusel;
