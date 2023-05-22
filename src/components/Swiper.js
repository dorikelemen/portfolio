import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Carousel(props) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: "true",
        }}
        mousewheel={true}
        speed={400}
        autoplay={{
          delay: 150,
          disableOnInteraction: true,
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{
          borderRadius: "10px",
          border: "1px solid rgba(0,0,0,.1)",
        }}
      >
        {props.images.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={require("../assets/project-items/" + item + ".png")}
                alt={`${props.name} main photo`}
                title={`${props.name} main photo`}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
