import React from "react";
import "./style.css"
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import Carousel from 'react-elastic-carousel'

// Import your image URLs or use the same image
import img1 from "../../public/main-product.png";
import img2 from "../../public/main-product.png";
import img3 from "../../public/main-product.png";

const HeroSection = () => {

    return (
        <Box>
            <Box display={{base:"none", md: "flex"}}>
                <DesktopHeroSection/>
            </Box>
            <Box display={{base:"flex", md: "none"}}>
                <MobHeroSection/>
            </Box>
        </Box>
    );
}

const DesktopHeroSection = () => {
  const images = [img1, img2, img3];

  return (
    <Flex position="relative" width="100%" minHeight="100vh">
      <Carousel
        itemsToShow={1}
        enableAutoPlay={true}
        autoPlaySpeed={2000}
        showArrows={false}
        pagination={false}
        transitionMs={500}
        isRTL={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <Box
        className="slider-section"
        position="absolute"
        top="25%"
        left="5%"
        transform="translateY(-50%)"
        color="black"
        maxWidth="35%"
        padding="2rem"
      >
        <Heading> AirNags®</Heading>
        <Text flexWrap={"wrap"}>
          Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
        </Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          textDecoration={"underline"}
        >
          <Heading className="click-text" fontSize={"1.5rem"}>
            See Collection
          </Heading>
          <FiArrowRight />
        </Box>
      </Box>
    </Flex>
  );
};
const MobHeroSection = () => {
    const images = [img1, img2, img3];
  
    return (
      <Flex width="100%" minHeight="100vh" flexDirection={"column"}>
        <Flex
          className="slider-section"
          justifyContent="center" // Center text horizontally
          alignItems="center"    // Center text vertically
          flexDirection="column" // Center text both horizontally and vertically
          minHeight="50vh"       // Adjust the height as needed
          color="black"
          padding="2rem"
        >
          <Heading> AirNags®</Heading>
          <Text textAlign="left" flexWrap={"wrap"}>
            Keep your everyday style chic and on-trend with our selection of 20+ styles to choose from.
          </Text>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            textDecoration={"underline"}
          >
            <Heading className="click-text" fontSize={"1.5rem"}>
              See Collection
            </Heading>
            <FiArrowRight />
          </Box>
        </Flex>
  
        <Flex justifyContent="center">
          <Carousel
            itemsToShow={1}
            enableAutoPlay={true}
            autoPlaySpeed={2000}
            showArrows={false}
          >
            <Box>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index + 1}`} width={"100%"} height={"50%"} objectFit={"scale-down"} />
              </div>
            ))}
            </Box>
          </Carousel>
        </Flex>
      </Flex>
    );
  };
  

export default HeroSection;