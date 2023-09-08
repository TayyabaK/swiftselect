import React from "react";
import { Button, Image, Box, Card, Heading} from "@chakra-ui/react";
import {FiArrowRight} from "react-icons/fi";

import Carousel from 'react-grid-carousel'

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
    title: "Product 10",
    dPrice: "$550",
    oPrice: "$650",
  }
]

export const NewArrivals = () => {

  const images = [img, img, img, img, img, img, img, img, img, img, img, img];

  return (
    <Box justifyContent={"space-between"} margin={"3rem 4rem"}>

    <Carousel cols={4} loop showDots={"false"}>

      {products.map((product, i) => (
        <Carousel.Item key={product.id}>
        <Box mr="10px" ml={"10px"}> 
          <Card position="relative" width={"357px"} height={"420px"} borderEndRadius={"12px"}>
            <Image src={product.img} />
            <Box position="absolute" bottom="0" left="0" right="0" color="white" p="1rem" zIndex="1">
             <Heading fontSize={"1rem"} fontFamily={"Space Grotesk"} color="black" textAlign={"center"}>{product.title} </Heading>
              {/* <Box justifyContent="center" display={"flex"}>
                <Heading fontSize={"1rem"} padding={"8px"} color="black">{product.dPrice}</Heading>
                <Heading fontSize={"1rem"} padding={"8px"} color="red"><s>{product.oPrice}</s></Heading>
              </Box> */}
              </Box>
          </Card> 
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
    </Box>
  );
};

export default NewArrivals;