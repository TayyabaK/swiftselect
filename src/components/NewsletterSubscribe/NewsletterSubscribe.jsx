import { Box, Button, Flex, Heading, Input, Radio } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { GoMail } from "react-icons/go";

import img  from "../../public/news-letter-img.png";

const NewsletterSubscribe = () => {

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} margin={"52px"} backgroundColor={"#f5f5f5"}>    
            <Flex flexDirection={"column"} ml={"1.5rem"}>
                <Heading fontFamily={"Space Grotesk"} fontSize={"1.5rem"} letterSpacing={"-0.4px"}>Join our newsletter. </Heading>
                <Heading fontFamily={"Space Grotesk"} fontSize={"1.5rem"} letterSpacing={"-0.4px"}> Enjoy big discounts.</Heading>
                
                <Flex alignItems={"center"} padding={"2px"} flexDirection={"row"}> 
                    <GoMail/>
                    <Box padding={"4px"} display={"flex"}>
                    <Input placeholder="Your email" size={"1rem"}/>
                    <Button size={"1rem"} padding={"4px"}>Signup</Button>
                    </Box>
                </Flex>
                <Box padding={"4px"}>
                    <Radio>I agree to receive marketing emails.</Radio>
                </Box>
            </Flex>      
            <Flex width={"50%"} heighth={"50%"}>
                <Image objectFit={"scale-down"} src={img}/>
            </Flex>     
        </Flex>
    );
}

export default  NewsletterSubscribe;