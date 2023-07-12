import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import "./residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { BrowserRouter, Link, Routes } from "react-router-dom";


const Residencies = () => {
                          
    return (

<>
        <section className="r-wrapper">

            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="mainhead ">Services We Provide</span>
                    <span className="primaryText">that bring ease to you</span>
                </div>

                <Swiper {...sliderSettings} >
                    <SliderButtons/>
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">

                                <img src={card.image} alt="home" />
                                <span className="secondaryText r-price">
                                    <span style={{ color: "orange" }}>To Call: </span><span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <button className="flexColStart button"> Book Yours </button>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    )
                    )
                    }
                </Swiper>

            </div>
        </section> 
</>

    );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};