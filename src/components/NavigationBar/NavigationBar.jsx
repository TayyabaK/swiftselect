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
      padding="0.7rem 1.5rem"
      alignItems="center"
    >
      <Box width="400px">
        <Box display="flex" alignItems="center" gap="0.25rem">
          <Image src={logo} height="26px" width="26px" />
          <Heading fontSize="1.5rem">SwiftSelect</Heading>
        </Box>
      </Box>

      <Box width="400px" justifyContent="center">
        <UnorderedList
          display={{ base: 'none', md: 'flex' }}
          flexDirection="row"
          listStyleType="none"
        >
          {links.map((item) => (
            <Box display="flex" mx="1rem" key={item}>
              <ListItem fontWeight="bold">{item}</ListItem>
              <ChevronDownIcon />
            </Box>
          ))}
        </UnorderedList> 
      </Box>

      <Box
        width="400px"
        padding="0.7rem 1.5rem"
        justifyContent="flex-end"
        gap="1rem"
        display={{ base: 'none', md: 'flex' }}
      >
        <FaSearch width="28px" height="28px" color="black" />
        <FaUser width="28px" height="28px" color="black" />
        <FaShoppingCart width="28px" height="28px" color="black" />
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
            <Box 
              display="flex"
              flexDirection="column"
              listStyleType="none"
              alignItems="center"
              marginBottom={"1rem"}
              gap="2rem"
              >

              <FaSearch width="28px" height="28px" color="black" />
              <FaUser width="28px" height="28px" color="black" />
              <FaShoppingCart width="28px" height="28px" color="black" />
            </Box>
         
            <UnorderedList
              display="flex"
              flexDirection="column"
              listStyleType="none"
              alignItems="center"
            >
              {links.map((item) => (
                <ListItem
                  fontWeight="bold"
                  key={item}
                  onClick={toggleDrawer}
                  py="1rem"
                >
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;