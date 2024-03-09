import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
// Import Swiper styles

import slid1 from "../assets/client-1.jpg";
import slid2 from "../assets/client-2.jpg";
export const OurClients: React.FC = () => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="our-clients my-[50px]">
      <div className="container">
        <h1 className="our-clients__title text-mainColorText text-[30px] font-bold text-center my-10">
          Our Clients
        </h1>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={
            {
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
             
            }
          }
        >
          <SwiperSlide>
            <div className="card shadow-2xl  rounded-none p-6 m-1 bg-backgroundElement">
              <div className="head flex justify-between ">
                <div className="title flex gap-3">
                  <div className="avatar w-[100px] h-[100px]">
                    <img
                      src={slid1}
                      alt=""
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-mainColorText font-bold text-[20px]">
                      John Doe
                    </h3>
                    <p className="text-secoundColorText">CEO of Company</p>
                  </div>
                </div>
                <div className="cout"></div>
              </div>
              <div className="body">
                <p className="text-secoundColorText pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptate.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow-2xl  rounded-none p-6 m-1 bg-backgroundElement">
              <div className="head flex justify-between ">
                <div className="title flex gap-3 ">
                  <div className="avatar w-[100px] h-[100px]">
                    <img
                      src={slid2}
                      alt=""
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-mainColorText font-bold text-[20px]">
                      John Doe
                    </h3>
                    <p className="text-secoundColorText">CEO of Company</p>
                  </div>
                </div>
                <div className="cout"></div>
              </div>
              <div className="body">
                <p className="text-secoundColorText pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptate.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow-2xl  rounded-none p-6 m-1 bg-backgroundElement">
              <div className="head flex justify-between ">
                <div className="title flex gap-3">
                  <div className="avatar w-[100px] h-[100px]">
                    <img
                      src={slid1}
                      alt=""
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-mainColorText font-bold text-[20px]">
                      John Doe
                    </h3>
                    <p className="text-secoundColorText">CEO of Company</p>
                  </div>
                </div>
                <div className="cout"></div>
              </div>
              <div className="body">
                <p className="text-secoundColorText pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptate.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card shadow-2xl  rounded-none p-6 m-1 bg-backgroundElement">
              <div className="head flex justify-between ">
                <div className="title flex gap-3">
                  <div className="avatar w-[100px] h-[100px]">
                    <img
                      src={slid2}
                      alt=""
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="content">
                    <h3 className="text-mainColorText font-bold text-[20px]">
                      John Doe
                    </h3>
                    <p className="text-secoundColorText">CEO of Company</p>
                  </div>
                </div>
                <div className="cout"></div>
              </div>
              <div className="body">
                <p className="text-secoundColorText pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  voluptate.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <div className="controls flex justify-center my-[50px] gap-5">
            <button
              className="btn btn-secondary text-white"
              onClick={handlePrev}
            >
              prev
            </button>
            <button
              className="btn btn-secondary text-white"
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
