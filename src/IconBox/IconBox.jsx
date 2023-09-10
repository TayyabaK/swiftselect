import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import {FaLock, FaPhone, FaShippingFast, FaWallet} from "react-icons/fa";


const IconBox = () => {
  return (
        <Flex justifyContent={"space-between"} padding={"52px"}>
            <Box display={"flex"} flexDirection={"row"}>
                <Box padding={"4px"}> <FaShippingFast size={"2rem"}/></Box>
                <Flex flexDirection={"column"} padding={"4px"}>
                    <Heading fontSize={"1.25rem"} letterSpacing={"-0.4px"}>Free Shipping</Heading>
                    <p color={"#807E7E"}>Orders above $200</p>
                </Flex>
            </Box>    

            <Box display={"flex"} flexDirection={"row"}>
                <Box padding={"4px"}> <FaWallet size={"2rem"}/></Box>
                <Flex flexDirection={"column"} padding={"4px"}>
                    <Heading fontSize={"1.25rem"} letterSpacing={"-0.4px"}>Money-back</Heading>
                    <p color={"#807E7E"}>30 day Guarantee</p>
                </Flex>
            </Box>    

            <Box display={"flex"} flexDirection={"row"}>
                <Box padding={"4px"}> <FaPhone size={"2rem"}/></Box>
                <Flex flexDirection={"column"} padding={"4px"}>
                    <Heading fontSize={"1.25rem"} letterSpacing={"-0.4px"}>Premium Support</Heading>
                    <p color={"#807E7E"}>phone and email support</p>
                </Flex>
            </Box>    

            <Box display={"flex"} flexDirection={"row"}>
                <Box padding={"4px"}> <FaLock size={"2rem"}/></Box>
                <Flex flexDirection={"column"} padding={"4px"}>
                    <Heading fontSize={"1.25rem"} letterSpacing={"-0.4px"}>Secure Payments</Heading>
                    <p color={"#807E7E"}>Secured by Stripe</p>
                </Flex>
            </Box>   

        </Flex>        
  )
}

export default IconBox
