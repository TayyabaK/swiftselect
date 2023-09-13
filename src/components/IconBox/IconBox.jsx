import { Box, Center, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

import {FaLock, FaPhone, FaShippingFast, FaWallet} from "react-icons/fa";
import {LiaShippingFastSolid, LiaPhoneSolid} from "react-icons/lia";
import {CiMoneyCheck1} from "react-icons/ci";
import {MdOutlineLock} from "react-icons/md";

const IconBox = () => {
const icons = [LiaShippingFastSolid, CiMoneyCheck1, LiaPhoneSolid, MdOutlineLock];
const titles = ["Free Shipping", "Money-back", "Premium Support", "Secure Payments"];
const descriptions = ["Orders above $200", "30 day Guarantee", "phone and email support", "Secured by Stripe"];

    return (

        <SimpleGrid justifyContent={"space-between"} columns={{base:2, md:2, lg:4}} spacing={"10"} margin={"2rem"} 
               
               >
            {icons.map((icon, index) => (

                <Box display={"flex"} flexDirection={{base:"column", md:"column", lg:"row" }}  
                justifyContent={{base:"center", md:"center", lg:"space-between"}} 
                alignItems={{base:"center", md:"center", lg:"left"}} maxW="fit-content" 
                marginX={{base:"auto", md:"auto", lg:"0"}}
                key={index}
                >
                    <Box padding={"4px"}> {icon({size:"2rem"})}</Box>
                    <Flex flexDirection={"column"} padding={"4px"}>
                        <Heading fontSize={"1.25rem"} letterSpacing={"-0.4px"} whiteSpace={"nowrap"}>{titles[index]}</Heading>
                        <Text color={"#807E7E"} fontSize={"1rem"} whiteSpace={"nowrap"}>{descriptions[index]}</Text>
                    </Flex>
                </Box>

            ))}
            </SimpleGrid>       
 
    )

}


export default IconBox;