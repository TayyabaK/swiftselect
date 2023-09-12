import { Box, Image, Flex, Heading, VStack, Text, Link } from '@chakra-ui/react'
import React from 'react'
import logo from '../../public/logo.svg';

import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

const FooterDesktop = () => {
    return (
        <Box display={"flex"}  backgroundColor={"#FAFAFB"} margin={"3rem"} flexDirection={"row"}>


            <VStack alignItems={"flex-start"} mt={"3rem"}>
                <Box display="flex" alignItems="left" gap="0.25rem" pl={"1rem"}>
                    <Image src={logo} size={"2rem"} />
                    <Heading fontSize="1.5rem">SwiftSelect</Heading>
                </Box>
            
                <Box maxWidth={"20rem"} padding={"0.5rem"}>
                    <Text>
                        Experience the future of e-commerce design with SHOPR
                    </Text>
                </Box>

                //add social media links
                <Box> 
                    <SocialMediaBar />
                </Box>
            </VStack>

            <ShopMenu/>
            <InformationMenu/>
            <CompanyMenu />
        </Box>

    )
}

const ShopMenu = () => {
    return (
        <VStack alignItems={"flex-start"} mt={"3rem"} ml={"15rem"}>

            <Heading  fontSize="1rem">Shop</Heading>
        
            <Text>
                <Link>My Account</Link> 
            </Text>

            <Text>
                <Link>Login</Link> 
            </Text>

            <Text>
                <Link>Wishlist</Link> 
            </Text>   

            <Text>
                <Link>Cart</Link> 
            </Text>
    </VStack>  

    );
};

const InformationMenu = () => {
    return (
        <VStack alignItems={"flex-start"} mt={"3rem"} ml={"7rem"}>

            <Heading  fontSize="1rem">Information</Heading>
        
            <Text>
                <Link>Shipping Policy</Link> 
            </Text>

            <Text>
                <Link>Returns & Refunds</Link> 
            </Text>

            <Text>
                <Link>Cookies Policy</Link> 
            </Text>   

            <Text>
                <Link>FAQ</Link> 
            </Text>
    </VStack>  

    );
};

const CompanyMenu = () => {
    return (
        <VStack alignItems={"flex-start"} mt={"3rem"} ml={"7rem"} mr={"0.5rem"}>

            <Heading  fontSize="1rem">Company</Heading>
        
            <Text>
                <Link>About us</Link> 
            </Text>

            <Text>
                <Link>Privacy Policy</Link> 
            </Text>

            <Text>
                <Link>Terms & Conditions</Link> 
            </Text>   

            <Text>
                <Link>Contact us</Link> 
            </Text>
    </VStack>  
    );
    }



const SocialMediaBar = () => {
  const iconColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Box display="flex" alignItems="center" justifyContent="center" >
      <IconButton
        as="a"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        icon={<FaFacebook size="20px" color={iconColor} />}
        variant="ghost"
        mx="2"
      />
      <IconButton
        as="a"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        icon={<FaInstagram size="20px" color={iconColor} />}
        variant="ghost"
        mx="2"
      />
      <IconButton
        as="a"
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        icon={<FaTwitter size="20px" color={iconColor} />}
        variant="ghost"
        mx="2"
      />
      <IconButton
        as="a"
        href="mailto:example@example.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        icon={<FaEnvelope size="20px" color={iconColor} />}
        variant="ghost"
        mx="2"
      />
    </Box>
  )
}

export default FooterDesktop;