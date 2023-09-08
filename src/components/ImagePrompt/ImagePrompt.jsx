
import React from "react";
import "./style.css";
import { Button } from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";

import Carousel from 'react-grid-carousel'


export const HeroSection = () => {

  const images = ["main-product.png", "main-product.png", "main-product.png"];

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '8px' : '5px',
        width: isActive ? '8px' : '5px',
        background: '#1890ff'
      }}
    ></span>
  )

  return (
    <div class="container" width={"100%"} >

        <Carousel loop={"true"} showDots={"true"} autoplay={2000}>
        {  
              images.map((image) => (
                  <Carousel.Item>
                  <div>
                      <img src={image} size={"auto"}/>
                  </div>
                 </Carousel.Item>
              ))
        }
        </Carousel>
        <div className="slider-section">
            <h3>AirNags®</h3>
            <p>Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.</p>
            <Button className="click-text">See Collection<FiArrowRight/></Button>
        </div>
    </div>
  );
};

export default HeroSection;