import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { BiSolidChevronDown } from 'react-icons/bi';

import {
  Box,
  UnorderedList,
  ListItem,
  Image,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import logo from '../../public/logo.svg';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'Shop', 'Product', 'Pages'];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box 
      display="flex"
      justifyContent="space-between"
      // padding="0.7rem 1.5rem"
      margin= "2% 5% 2% 5%"
      backgroundColor={"#f5f5f5"}
      alignItems="center"
    >
      <Box>
        <Box display="flex" alignItems="center" gap="0.25rem">
          <Image src={logo} size={"2rem"} />
          <Heading fontSize="2rem">SwiftSelect</Heading>
        </Box>
      </Box>

      <Box justifyContent="center">
        <UnorderedList
          display={{ base: 'none', md: 'flex' }}
          flexDirection="row"
          listStyleType="none"
        >
          {links.map((item) => (
            <Box display="flex" mx="1rem" key={item} alignItems={"center"}>
              <ListItem ><Heading fontSize={"1.25rem"}>{item}</Heading></ListItem>
              <BiSolidChevronDown />
            </Box>
          ))}
        </UnorderedList> 
      </Box>

      <Box
        padding="0.7rem 1.5rem"
        justifyContent="flex-end"
        gap="1rem"
        display={{ base: 'none', md: 'flex' }}
      >
        <FaSearch size={"1.5rem"} color="black" />
        <FaUser size={"1.5rem"} color="black" />
        <FaShoppingCart size={"1.5rem"}  color="black" />
      </Box>

      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
            aria-label="Open Menu"
            size="lg"
            ml={"5rem"}
            icon={<HamburgerIcon />}
            onClick={toggleDrawer}
            display={{ base: 'flex', md: 'none' }}
          />
      </Box>

      <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={toggleDrawer}/>
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>           
            <UnorderedList
              display="flex"
              flexDirection="column"
              listStyleType="none"
              alignItems="center"
            >
              {links.map((item) => (
                <ListItem
                  size={"1.5rem"}
                  fontWeight="bold"
                  key={item}
                  onClick={toggleDrawer}
                  py="1rem"
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>

            <Box 
              display="flex"
              justifyContent="center"
              marginTop={"1rem"}
              gap="2rem"
              >

              <FaSearch size={"1.5rem"} color="black" />
              <FaUser size={"1.5rem"} color="black" />
              <FaShoppingCart size={"1.5rem"} color="black" />
            </Box>
         
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;