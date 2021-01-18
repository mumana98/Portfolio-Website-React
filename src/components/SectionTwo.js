import React from 'react'
import arrow from '../css/arrow.png'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'

import ProjectOne from './projects/ProjectOne'
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const SectionTwo = () => {

    let w = window.innerWidth


    return(
        <section id="screen2"
        data-bottom-top={w > 1000 ? "background-size: 100%" : "background-size: 350%; background-position-x: -100px"}
        data-top-bottom={w > 1000 ? "background-size: 150%" : "background-size: 450%"}
            >
                <h2>PROJECTS</h2>
                <Swiper
                loop={true}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={w > 1000 ? 2 : 1}
                data-bottom-top="top: 100%"
                data-top-top="top: 20%"
                data-top-bottom="top: -20%"
                >
                    <SwiperSlide>
                        <ProjectOne />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectOne />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectOne />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectOne />
                    </SwiperSlide>
                </Swiper>
        </section>
    )
}

export default SectionTwo