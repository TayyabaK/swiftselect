import { Box, Image, Flex, Heading, VStack, Text, Link, Collapse, Button } from '@chakra-ui/react'
import React from 'react'
import logo from '../../public/logo.svg';
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';

import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

const FooterMob = () => {
    return (
        <Box justifySelf={"center"} width={"80%"} margin={"2rem"} display={"flex"}  backgroundColor={"#FAFAFB"}>

            <VStack alignItems={"flex-start"} mt={"3rem"}>
                <Box display="flex" alignItems="left" gap="0.25rem" padding={"0.5rem"}>
                    <Image src={logo} size={"2rem"} />
                    <Heading fontSize="1.5rem">SwiftSelect</Heading>
                </Box>
            
                <Box padding={"0.5rem"}>
                    <Text>
                        Experience the future of e-commerce design with SHOPR
                    </Text>
                </Box>
                <ShopMenu/>
            <InformationMenu/>
            <CompanyMenu/>
                    <SocialMediaBar />
            </VStack>

            
        </Box>

    )
}

const ShopMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <Box display={"flex"} alignContent={"left"} justifyContent={"left"} ml={"0.5rem"}>
        <VStack>
            <Flex justifyContent="space-between" width="full">
                <Box>
                    <Button variant="link" onClick={toggleMenu} width="full">
                        <Heading fontSize="1rem" textAlign="left">
                            Shop
                        </Heading>
                    </Button>
                </Box>
                <Box>
                    <FaChevronDown />
                </Box>
            </Flex>
  
          <Collapse in={isOpen} animateOpacity>
            <VStack alignItems="flex-start" mt="1rem">
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
          </Collapse>
        </VStack>
      </Box>
    )
  }

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
        <VStack alignItems={"flex-start"} mt={"3rem"} ml={"7rem"}>

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

export default FooterMob;