"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import Image from "next/image";
import { useRef, useEffect } from "react";
import React from "react";

export default function BannerSlider() {
  const swiperRef = useRef<SwiperRef>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const navigation = swiperRef.current.swiper.params
        .navigation as NavigationOptions;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="md:pt-[78.64px]">
      <div className="wrapper">
        <div className="mt-[4.2px] relative">
          <div className="md:hidden z-12 absolute top-0 left-0 right-0 px-[22px] py-[28px] bg-gradient-to-b from-black/10 to-transparent">
            <div className="text-black text-[15px] font-medium leading-[17px] tracking-[0.13px] text-start">
              <span className="text-[#979797]">06</span> Galerija
            </div>
          </div>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              const nav = swiper.params.navigation as NavigationOptions;
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mySwiper"
            style={{}}
          >
            <SwiperSlide className="relative">
              <Image
                src="/images/home/house-dog-playing.jpeg"
                alt="Individualių Namų Kvartalas"
                width={1346}
                height={669}
                className="w-[1346.607px] md:min-h-[669.815px] min-h-[328px] aspect-[1346.61/669.82]"
                priority
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/home/house-dog-playing.jpeg"
                alt="Individualių Namų Kvartalas"
                width={1346}
                height={669}
                className="w-[1346.607px] md:min-h-[669.815px] min-h-[328px] aspect-[1346.61/669.82]"
                priority
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/home/house-dog-playing.jpeg"
                alt="Individualių Namų Kvartalas"
                width={1346}
                height={669}
                className="w-[1346.607px] md:min-h-[669.815px] min-h-[328px] aspect-[1346.61/669.82]"
                priority
              />
            </SwiperSlide>

            {/* ====== custom navigation buttons =====> */}
            <button
              ref={prevRef}
              className="absolute left-[34.08px] top-1/2 -translate-y-1/2 z-10   transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white w-[41.52px] sm:w-[61.52px] h-[41.249px] sm:h-[61.249px] flex justify-center items-center rounded-[5px]"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M2.21238 9.98374L6.96238 14.2337C7.05059 14.3127 7.1553 14.3753 7.27054 14.418C7.38578 14.4607 7.5093 14.4827 7.63403 14.4827C7.88595 14.4827 8.12755 14.3931 8.30568 14.2337C8.39389 14.1548 8.46385 14.0611 8.51159 13.958C8.55932 13.8549 8.58389 13.7444 8.58389 13.6328C8.58389 13.4074 8.48382 13.1912 8.30568 13.0318L5.17733 10.2328L16.184 10.2328C16.436 10.2328 16.6776 10.1432 16.8558 9.98383C17.0339 9.82443 17.134 9.60823 17.134 9.38279C17.134 9.15736 17.0339 8.94116 16.8558 8.78175C16.6776 8.62235 16.436 8.53279 16.184 8.53279L5.17733 8.53279L8.30568 5.73374C8.48382 5.57436 8.58389 5.35819 8.58389 5.13279C8.58389 4.90739 8.48382 4.69123 8.30568 4.53184C8.12755 4.37246 7.88595 4.28292 7.63403 4.28292C7.38212 4.28292 7.14052 4.37246 6.96238 4.53184L2.21238 8.78184C2.12408 8.86071 2.05403 8.95439 2.00624 9.0575C1.95844 9.16062 1.93384 9.27116 1.93384 9.38279C1.93384 9.49443 1.95844 9.60496 2.00624 9.70808C2.05403 9.8112 2.12408 9.90487 2.21238 9.98374Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="absolute right-[34.08px] top-1/2 -translate-y-1/2 z-10 b transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white w-[41.52px] sm:w-[61.52px] h-[41.249px] sm:h-[61.249px] flex justify-center items-center rounded-[5px]"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M17.1768 8.44959L12.4618 4.16089C12.3742 4.08125 12.27 4.0178 12.1551 3.97415C12.0402 3.9305 11.9169 3.9075 11.7922 3.90648C11.5403 3.90442 11.2979 3.99198 11.1185 4.1499C11.0297 4.2281 10.9589 4.32121 10.9103 4.42393C10.8618 4.52665 10.8363 4.63696 10.8354 4.74856C10.8335 4.97395 10.9318 5.19093 11.1087 5.35176L14.214 8.1763L3.2077 8.08629C2.95575 8.08423 2.71339 8.17181 2.53393 8.32975C2.35447 8.4877 2.25262 8.70307 2.25078 8.9285C2.24893 9.15392 2.34725 9.37094 2.5241 9.53179C2.70095 9.69265 2.94185 9.78418 3.19379 9.78624L14.2001 9.87625L11.049 12.6496C10.8696 12.8075 10.7677 13.0229 10.7659 13.2483C10.764 13.4737 10.8623 13.6906 11.0392 13.8515C11.216 14.0123 11.4568 14.1038 11.7088 14.1059C11.9607 14.1079 12.203 14.0204 12.3824 13.8625L17.167 9.65145C17.256 9.57331 17.3268 9.48021 17.3754 9.37748C17.424 9.27476 17.4495 9.16443 17.4505 9.0528C17.4514 8.94117 17.4277 8.83043 17.3807 8.72693C17.3338 8.62342 17.2645 8.52918 17.1768 8.44959Z"
                  fill="black"
                />
              </svg>
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
