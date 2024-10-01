import React from 'react';
import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <section className="testimonial container section" id='bug'>
        <h2 className="section__title"> Bug Tracker</h2>
        <span className="section__subtitle">
        Designed and implemented a web-based application for tracking and managing bugs in software development
        projects, improving communication between development teams and stakeholders..<br />
        Key words: Spring Boot, Angular, Jenkins, GitHub, MySQL, REST API, CI/CD.</span>
        <Swiper className="testimonial__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
                clickable:true
            }}
            breakpoints={{
                576: {
                  slidesPerView: 1, // 1 slide for smaller screens
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 1, // Make it 1 slide to make it bigger on mid screens
                  spaceBetween: 48,
                },
                1024: {
                  slidesPerView: 1, // 1 slide per view on larger screens
                  spaceBetween: 48,
                },
                1200: {
                  slidesPerView: 1, // You can even add a custom breakpoint
                  spaceBetween: 48,
                },
              }}
            modules={[Pagination]}
        >
            {Data.map(({id, image}) => {
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="client" className="testimonial__img" />
                        
                    </SwiperSlide>
                )
            })}
        </Swiper>    
    </section>
  );
}

export default Testimonials;