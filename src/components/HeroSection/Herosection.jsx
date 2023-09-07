
import React from "react";
import "./style.css";
import { Button } from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";

import img from "../../public/main-product.png";

export const HeroSection = () => {
  return (
    <div class="container">
         <img src={img} />
        <div className="slider-section">
            <h3>AirNags®</h3>
            <p>Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.</p>
            <Button className="click-text">See Collection<FiArrowRight/></Button>
        </div>
    </div>
  );
};

export default HeroSection;