import React from "react";
import { Button, Image, Box, Card, Heading} from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";

import Carousel from 'react-elastic-carousel';

import img from "../../public/na-1.png";

const products = [
  {
    id:1,
    img: img,
    title: "Product 1",
    dPrice: "$100",
    oPrice: "$200",
  },
  {
    id:2,
    img: img,
    title: "Product 2",
    dPrice: "$150",
    oPrice: "$250",
  },
  {
    id:3,
    img: img,
    title: "Product 3",
    dPrice: "$200",
    oPrice: "$300",
  },
  {
    id:4,
    img: img,
    title: "Product 4",
    dPrice: "$250",
    oPrice: "$350",
  },
  {
    id:5,
    img: img,
    title: "Product 5",
    dPrice: "$300",
    oPrice: "$400",
  },
  {
    id:6,
    img: img,
    title: "Product 6",
    dPrice: "$350",
    oPrice: "$450",
  },
  {
    id:7,
    img: img,
    title: "Product 7",
    dPrice: "$400",
    oPrice: "$500",
  },
  {
    id:8,
    img: img,
    title: "Product 8",
    dPrice: "$450",
    oPrice: "$550",
  },
  {
    id:9,
    img: img,
    title: "Product 9",
    dPrice: "$500",
    oPrice: "$600",
  },
  {
    id:10,
    img: img,
    title: "Product 10",
    dPrice: "$550",
    oPrice: "$650",
  },
  {
    id:11,
    img: img,
    title: "Product 11",
    dPrice: "$550",
    oPrice: "$650",
  },
  {
    id:12,
    img: img,
    title: "Product 12",
    dPrice: "$550",
    oPrice: "$650",
  }
]


export const NewArrivals = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3},
    { width: 1200, itemsToShow: 4 },
  ];

  const images = [img, img, img, img, img, img, img, img, img, img, img, img];

  return (
    <Box justifyContent={"space-between"} margin={"3rem"} backgroundColor={"white"} >

    <Box display={"flex"} justifyContent={{base:"center", md:"left"}}>
      <Heading fontFamily={"Space Grotesk"} fontSize={"1.5rem"} letterSpacing={"-0.6px"}
      padding={"1rem"}
      >New Arrivals</Heading>
      </Box>

    <Carousel breakPoints={breakPoints} 
    backgroundColor={"white"}
    showArrows={false}
     >
      {products.map((product, i) => (
        <Box key={product.id} > 
          <Card position="relative" width={"300px"} height={"350px"} borderEndRadius={"12px"} margin={"2rem"}>
            <Image src={product.img} />
            <Box position="absolute"
            bottom="0px" left="80px" right="0px" color="white" p="1rem" zIndex="1" 
            justifySelf={"center"}>
               <Button><Heading fontSize={"1rem"} fontFamily={"Space Grotesk"} color="black" textAlign={"center"}>{product.title} </Heading></Button>              
            </Box>
          </Card> 
          </Box>
      ))}
    </Carousel>
    </Box>
  );
};

export default NewArrivals;