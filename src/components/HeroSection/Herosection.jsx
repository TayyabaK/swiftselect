import React from "react";
import "./style.css";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import Carousel from 'react-elastic-carousel'

// Import your image URLs or use the same image
import img1 from "../../public/main-product.png";
import img2 from "../../public/main-product.png";
import img3 from "../../public/main-product.png";

export const HeroSection = () => {
  const images = [img1, img2, img3];

  return (
    <Flex backgroundColor={"#f5f5f5"} flexDirection={{ base: "column", md: "row" }} width={"full"}>
      
      
      <Flex position={"absolute"} className="slider-section" margin="2% 5% 2% 5%" width={"27rem"} flexDirection={"column"} gap={"20px"}>
        <Heading> AirNags®</Heading>
        <Text>Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.</Text>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} textDecoration={"underline"}>
          <Heading className="click-text" fontSize={"1.5rem"}>See Collection</Heading>
          <FiArrowRight />
        </Box>
      </Flex>

      <Flex width={"full"} height={"full"} >
        <Carousel itemsToShow={1} showArrows={false} enableAutoPlay={true} pagination={"false"}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
