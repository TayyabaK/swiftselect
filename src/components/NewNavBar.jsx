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
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import logo from '../public/logo.svg';

const NewNavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'Shop', 'Product', 'Pages'];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box ml={"3.8rem"} mr={"3.8rem"}>
        <Grid templateColumns='repeat(5, 1fr)' >
            <GridItem colSpan={1} colStart={1} display={{ base: 'none', md: 'flex' }}>
                <Box display="flex" alignItems="center" gap="0.25rem" justifyContent={"flex-start"}>
                    <Image src={logo} size={"2rem"} />
                    <Heading fontSize="2rem">SwiftSelect</Heading>
                </Box>
            </GridItem>
            <GridItem colSpan={3} colStart={2} display={{ base: 'none', md: 'flex' }} justifyContent={"center"}>
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
            </GridItem>
            <GridItem colSpan={1} display={{ base: 'none', md: 'flex' }} justifyContent={"right"}>
                <Box display="flex" alignItems="center" gap="2rem" justifyContent={"flex-end"}>
                    <FaSearch size={"1.5rem"} color="black" />
                    <FaUser size={"1.5rem"} color="black" />
                    <FaShoppingCart size={"1.5rem"} color="black" />
                </Box>
            </GridItem>

      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
            aria-label="Open Menus"
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
      </Grid>

    </Box>
  );
};

export default NewNavBar;