import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import img from "../../public/video.png";

const PromotionVideo = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      margin={"2rem"}
      // width={"full"}
    >
      <Heading justifyContent={"center"} padding={"2rem"}>Nayzak Series® </Heading>
      <Flex
        justifyContent={"center"}
        maxWidth={"520px"}
        maxHeight={"60px"}
        alignItems={"center"}
      >
        <Text textAlign={"center"} pb={"2rem"}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti.
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        width={"100%"}
        height={"70vh"}
        backgroundColor={"#f3f3f3ff"}
      >
        <Image width={"100%"} objectFit={"contain"} src={img} />
      </Flex>
    </Flex>
  );
};

export default PromotionVideo;