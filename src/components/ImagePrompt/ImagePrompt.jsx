import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";

import image from "../../public/wrist-watch.png"

export const HeroSection = () => {

  return (
    <Box display="flex" position={"relative"} margin={"3rem 3.8rem 3rem 3.8rem"} height={"50%"}>
          <Box>
              <img src={image} />
          </Box>

        <Box zIndex={1}  position={"absolute"} margin={"60px 750px 160px 52px"}>
            <Heading fontFamily={"Space Grotesk"} 
            fontSize={"2rem"} fontWeight={"bold"}
            >
              RUN SMARTER +
              </Heading>
            <Box margin={"1rem 0rem 1rem 0rem"}>

              <p fontFamily="Inter">Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.</p>
            </Box>
            <Box fontFamily="Space Grotesk" fontSize={"1.5rem"} display={"flex"} alignItems={"center"} fontWeight={"bold"}><u>SHOP NOW</u><FiArrowRight/></Box>
        </Box>
    </Box>
  );
};

export default HeroSection;