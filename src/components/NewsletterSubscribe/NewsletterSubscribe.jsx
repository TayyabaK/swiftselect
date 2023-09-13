import React from "react";
import { Box, Button, Divider, Flex, Heading, Input, Radio } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { GoMail } from "react-icons/go";

import img from "../../public/news-letter-img.png";

const NewsletterSubscribe = () => {
  return (
    <Flex>
      <Box display={{base:"none", md:"none", lg:"flex"}}>
        <DesktopNewsletterSubscribe />
      </Box>
      <Box display={{ base: "flex", md: "flex", lg:"none" }}>
        <MobNewsletterSubscribe />
      </Box> 
    </Flex>
  );
};

const DesktopNewsletterSubscribe = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"#f5f5f5"}
      flexWrap={"wrap-reverse"}
      margin={"2rem"}

    >
      <Box margin={"2rem"}> 
        <Flex flexDirection={"column"} ml={"1.5rem"}>
          <Heading fontFamily={"Space Grotesk"} fontSize={"2.5rem"} letterSpacing={"-0.4px"}>
            Join our newsletter.
          </Heading>
          <Heading pb={"2rem"} fontFamily={"Space Grotesk"} fontSize={"2.5rem"} letterSpacing={"-0.4px"}>
            Enjoy big discounts.
          </Heading>

          <Flex alignItems={"center"} padding={"2px"} flexDirection={"row"}>
            <GoMail size={"1.5rem"}/>
            <Box padding={"1rem"} display={"flex"} size={"2rem"}>
              <Input placeholder="Your email" size={"md"} shadow={"none"} border={"none"} />
              <Button padding={"1rem"} backgroundColor={"#f5f5f5"}>
                Signup
              </Button>
            </Box>
          </Flex>
          <Box padding={"4px"}>
            <Radio>I agree to receive marketing emails.</Radio>
          </Box>
        </Flex>
      </Box>
      <Flex width={"50%"} heighth={"50%"}>
        <Image objectFit={"scale-down"} src={img} />
      </Flex>
    </Flex>
  );
};

const MobNewsletterSubscribe = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"#f5f5f5"}
      flexDirection={"column"}
      margin={"2rem"}

    >
      <Box backgroundColor={"#f5f5f5"} width={"inherit"} justifyContent={"center"}>
        <Image src={img} alt="Responsive Image" objectFit={"cover"} />
      </Box>

      <Box margin={"2rem"}> {/* Apply margin to this Box */}
        <Flex flexDirection={"column"} ml={"1.5rem"} justifyContent={{ base: "center", md: "left" }}>
          <Heading fontFamily={"Space Grotesk"} fontSize={"1.5rem"} letterSpacing={"-0.4px"}>
            Join our newsletter.
          </Heading>
          <Heading fontFamily={"Space Grotesk"} fontSize={"1.5rem"} letterSpacing={"-0.4px"}>
            Enjoy big discounts.
          </Heading>

          <Flex alignItems={"center"} padding={"0.5rem"} flexDirection={"row"}>
            <GoMail size={"1.5rem"}/>
            <Box padding={"1rem"} display={"flex"}>
              <Input placeholder="Your email" size={"md"} shadow={"none"} border={"none"}/>
              <Button size={"1rem"} pr={"4px"} backgroundColor={"#f5f5f5"}>
                Signup
              </Button>
            </Box>
          </Flex>
          <Box >
            <Radio>I agree to receive marketing emails.</Radio>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NewsletterSubscribe;
