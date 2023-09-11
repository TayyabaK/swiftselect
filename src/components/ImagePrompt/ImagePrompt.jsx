import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import img from "../../public/wrist-watch.png";

const ImagePrompt = () => {
  return (
    <Flex
      margin={{ base: "2rem", md: "3rem" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      p={4}
      bg="#f5f5f5" // Use "bg" for background color
    >
            <Box
              color="black"
              maxWidth={{ base: "100%", md: "35%" }}
              pb={{ base: "1rem", md: 0 }}
              pl={{ base: "2rem", md: "2rem" }}
              pt={{ base: "1rem", md: "2rem" }}
            >
              <Heading pb="2rem">RUN SMARTER +</Heading>
              <Text pb="2rem" flexWrap={"wrap"}>
                Phosfluor escently engage worldwide methodologies with web-enabled
                process-centric technology.
              </Text>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                textDecoration={"underline"}
              >
                <Heading className="click-text" fontSize={"1.5rem"}>
                  SHOP NOW
                </Heading>
              </Box>
            </Box>

      <Box backgroundColor={"#f5f5f5"} width={"inherit"}>
        <Image src={img} alt="Responsive Image" objectFit={"cover"}/>
      </Box>
    </Flex>
  );
};

export default ImagePrompt;
