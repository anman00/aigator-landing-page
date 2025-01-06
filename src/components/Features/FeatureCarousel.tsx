import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FeatureCard } from './FeatureCard';
import type { Feature } from './types';

interface FeatureCarouselProps {
  features: Feature[];
}

export const FeatureCarousel = ({ features }: FeatureCarouselProps) => {
  const swiperRef = useRef<SwiperType>();

  useEffect(() => {
    // Force update on mount to ensure proper centering
    setTimeout(() => {
      swiperRef.current?.updateSize();
      swiperRef.current?.updateSlides();
    }, 100);
  }, []);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        initialSlide={3}
        loop={true}
        scrollbar={false}
        observer={true}
        observeParents={true}
        resizeObserver={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // onSwiper={(swiper) => {
        //   swiperRef.current = swiper;
        // }}
        className="!pb-12 feature-carousel"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="md:!w-[400px] swiper-slide-center" style={{marginRight: "auto"}}>
            <FeatureCard {...feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};