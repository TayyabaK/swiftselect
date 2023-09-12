import { Box, Image, Flex, Heading, VStack, Text, Link } from '@chakra-ui/react'
import React from 'react'

import FooterDesktop from './FooterDesktop'
import FooterMob from './FooterMob'

const Footer = () => {
    return (
        <Box width={"full"}>
            <Box display={{base:"none", md:"none", lg:"flex"}}> 
                <FooterDesktop/>
            </Box>
            <Box display={{base:"flex", md:"flex", lg:"none"}}>
                <FooterMob/>
            </Box>
        </Box>
    )
}



export default Footer;