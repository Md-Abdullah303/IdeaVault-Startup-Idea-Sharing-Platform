"use client";
import { Button } from "@heroui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  const bannerSlides = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1661963588720-838fd19183ee",
      title: "Turn Ideas Into Successful Startups",
      description:
        "Discover innovative startup ideas, connect with creative minds, and bring your vision to life with ideaVault.",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656",
      title: "Innovation Starts With One Brilliant Idea",
      description:
        "Explore trending innovations, share unique concepts, and inspire the next generation of entrepreneurs worldwide.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1600132806608-231446b2e7af",
      title: "Share. Build. Inspire.",
      description:
        "Post your ideas, get feedback from the community, and collaborate with people who believe in creativity.",
    },
  ];

  return (
    <Swiper
      navigation
      pagination={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {bannerSlides.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            style={{ backgroundImage: `url(${item.img})` }}
            className={`h-[95vh]  bg-cover bg-center flex items-center justify-center bg-no-repeat relative`}
          >
            {/* Dark Overlay */}
            <div className="absolute  inset-0 bg-black/85 rounded-lg "></div>

            {/* Banner info */}
            <div className="text-white grid grid-cols-3  font-banner relative w-[90%] md:w-[70%] mx-auto   z-30">
              <div className=" col-span-3 md:col-span-2 space-y-3.5">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold">
                  {item.title}
                </h1>
                <p className="text-xl md:text-3xl text-gray-500">
                  {item.description}
                </p>
                <Button className={"rounded-xs "}>Explore Ideas</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
