
import React from "react";
import "./style.css";
import { Box, Button } from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-elastic-carousel'
import { getByDisplayValue } from "@testing-library/react";


export const HeroSection = () => {

  const images = ["main-product.png", "main-product.png", "main-product.png"];

  return (
      <div className="container" display={"block"}>
          <Carousel loop={"true"} itemsToShow={1}>
          {  
                images.map((image) => (
                    <div>
                        <img src={image} />
                    </div>
                ))
          }
            </Carousel>
    
        <div className="slider-section" margin= "2% 5% 2% 5%">
            <h3>AirNags®</h3>
            <p>Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.</p>
            <Button className="click-text">See Collection<FiArrowRight/></Button>
        </div>
    </div>
  );
};

export default HeroSection;