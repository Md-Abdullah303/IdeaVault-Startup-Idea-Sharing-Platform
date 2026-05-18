"use client";

import React from "react";
import FeaturedCard from "../Ui/FeaturedCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import DataNotFoundPage from "../Ui/DataNotFoundPage";

const FeaturedPage = ({ featuredData }) => {
  console.log(featuredData);
  return (
    <div className="w-[90%] md:w-[70%] mx-auto py-15">
      <h1 className="text-2xl md:text-4xl font-bold">Top Ideas</h1>
      {/* featured card */}
      <div className="mt-10 overflow-hidden">
        {featuredData.length == 0 ? (
          <DataNotFoundPage />
        ) : (
          <Swiper
            effect={"cards"}
            loop={true}
            pagination
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            className="mySwiper"
          >
            {featuredData.map((data) => (
              <SwiperSlide key={data._id}>
                <FeaturedCard data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default FeaturedPage;
