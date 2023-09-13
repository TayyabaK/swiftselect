import { Box, Image, Flex, Heading, VStack, Text, Link, Collapse, Button, Divider, Center, Spacer, ButtonGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import logo from '../../public/logo.svg';
import { FaChevronDown } from 'react-icons/fa';

import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'

const FooterMob = () => {
  return (
    <Box>
    <Box  width={"full"} margin="2rem" display="flex" backgroundColor="#FAFAFB">
        <VStack alignItems="flex-start" mt="3rem" width={'full'}>
            
            <Box display="flex" alignItems="left" gap="0.25rem" padding="0.5rem">
             <Image src={logo} size="2rem" />
                <Heading fontSize="1.5rem">SwiftSelect</Heading>
            </Box>

            <Text padding="0.5rem">
                Experience the future of e-commerce design with SHOPR
            </Text>

            <ShopMenu />
            <InformationMenu />
            <CompanyMenu />    
        </VStack>
        </Box>

     <Center>
        <SocialMediaBar/>
    </Center>
    <Center>    
        <Text fontSize="0.8rem" mt="1rem" mb="1rem">
            © 2023  SwiftSelect. All rights reserved
        </Text>
    </Center>
    </Box>
  )
}

const ShopMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box width ={"full"} display="flex" ml="0.5rem">
      <VStack>
      <Box display="flex" mt={2}>
          <ButtonGroup variant="link" onClick={toggleMenu}>
            <Button>
                <Heading fontSize="1rem" color="black" >
                    Shop
                </Heading>
              </Button>
              <Spacer/>
              <Button>
              <FaChevronDown size="0.7rem"/>
                </Button>
          </ButtonGroup>
        </Box>
        
        <Divider mt={1} borderColor="black" />

        <Collapse in={isOpen} animateOpacity>
          <VStack alignItems="flex-start" mt="1rem" width={"full"}>
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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box width ={"full"} display="flex" ml="0.5rem">
    <VStack>
    <Box display="flex" mt={2}>
        <ButtonGroup variant="link" onClick={toggleMenu}>
          <Button>
              <Heading fontSize="1rem" color="black" >
                  Information
              </Heading>
            </Button>
            <Spacer/>
            <Button>
            <FaChevronDown size="0.7rem"/>
              </Button>
        </ButtonGroup>
      </Box>
      
      <Divider mt={1} borderColor="black" />

        <Collapse in={isOpen} animateOpacity>
          <VStack alignItems="flex-start" mt="1rem">
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
        </Collapse>
      </VStack>
    </Box>
  )
}

const CompanyMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  
    return (
        <Box width ={"full"} display="flex" ml="0.5rem">
        <VStack>
        <Box display="flex" mt={2}>
            <ButtonGroup variant="link" onClick={toggleMenu}>
              <Button>
                  <Heading fontSize="1rem" color="black" >
                      Company
                  </Heading>
                </Button>
                <Spacer/>
                <Button>
                <FaChevronDown size="0.7rem"/>
                  </Button>
            </ButtonGroup>
          </Box>
          
          <Divider mt={1} borderColor="black" />
          
          <Collapse in={isOpen} animateOpacity>
            <VStack alignItems="flex-start" mt="1rem">
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
          </Collapse>
        </VStack>
      </Box>
    )
  }
  

const SocialMediaBar = () => {
  const iconColor = useColorModeValue('gray.600', 'gray.200')

  return (
    <Flex justifyContent="center"  justifyItems={"center"} alignItems={"center"}>
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
    </Flex>
  )
}

export default FooterMob;