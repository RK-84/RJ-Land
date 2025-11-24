"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./CarouselSlider.module.css";
import { NextArrowSlide, PrevArrowSlide } from "./CaruselSliderArrow";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "../Loading/Loading";

const CarouselSlider = ({ imageSlider }) => {
  var settings = {
    dots: true,
    dotsClass: `slick-dots ${styles.dots}`,
    swipeToSlide: true,
    speed: 500,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowSlide />,
    prevArrow: <PrevArrowSlide />,
  };
  const [showLoading, setShowLoading] = useState(false);
  const rout = useRouter();
  const clickHandler = (props) => {
    setShowLoading(true);
    rout.push(`/Product/categoryType/${props}/?class=mobile`);
  };

  return (
    <>
      {showLoading && <Loading />}
      <Slider {...settings}>
        {imageSlider.map((item) => {
          if (item.id === 3 || item.id === 7 || item.id === 107) {
            return (
              <Link href={`/Product/Class/${item.name}`} key={item.id}>
                <section onClick={()=>setShowLoading(true)} className={styles.sliderContainer}>
                  <Image
                    priority
                    className={styles.imageSlider}
                    src={item.indexImageUrl}
                    alt={item.name}
                    fill
                    sizes="100%"
                  />
                </section>
              </Link>
            );
          } else {
            return (
              <section
                key={item.id}
                className={styles.sliderContainer}
                onClick={() => clickHandler(item.name)}
              >
                <Image
                  priority
                  className={styles.imageSlider}
                  src={item.indexImageUrl}
                  alt={item.name}
                  sizes="100%"
                  fill
                />
              </section>
            );
          }
        })}
      </Slider>
    </>
  );
};
export default CarouselSlider;
