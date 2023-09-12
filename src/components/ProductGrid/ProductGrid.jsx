import {Flex, SimpleGrid, Card, Box, Heading, Button, Image, Link} from "@chakra-ui/react";
import React from "react";

import img from "../../public/new-arrival.png";
import img1 from "../../public/best-seller.png";
import img2 from "../../public/sale.png";
import { color } from "framer-motion";

const ProductGrid = () => {

    const best_sellers = [
        {
            id:1,
            img: img1,
            title: "Product 1",
            dPrice: "$100",
            oPrice: "$200",
            rating: 4.5,
          },
          {
            id:2,
            img: img1,
            title: "Product 2",
            dPrice: "$150",
            oPrice: "$250",
            rating: 4.5,
          },
          {
            id:3,
            img: img1,
            title: "Product 3",
            dPrice: "$200",
            oPrice: "$300",
            rating: 4.5,
  
          },
          {
            id:4,
            img: img1,
            title: "Product 4",
            dPrice: "$250",
            oPrice: "$350",
            rating: 4.5,
  
          },
          {
            id:5,
            img: img1,
            title: "Product 5",
            dPrice: "$300",
            oPrice: "$400",
            rating: 4.5,
  
          },
          {
            id:6,
            img: img1,
            title: "Product 6",
            dPrice: "$350",
            oPrice: "$450",
            rating: 4.5,
  
          },
          {
            id:7,
            img: img1,
            title: "Product 7",
            dPrice: "$400",
            oPrice: "$500",
            rating: 4.5,
          },
          {
            id:8,
            img: img1,
            title: "Product 8",
            dPrice: "$450",
            oPrice: "$550",
            rating: 4.5,
          },
          {
            id:9,
            img: img1,
            title: "Product 9",
            dPrice: "$500",
            oPrice: "$600",
            rating: 4.5,
          },
          {
            id:10,
            img: img1,
            title: "Product 10",
            dPrice: "$550",
            oPrice: "$650",
            rating: 4.5,
          },
          {
            id:11,
            img: img1,
            title: "Product 11",
            dPrice: "$550",
            oPrice: "$650",
            rating: 4.5,
  
          },
          {
            id:12,
            img: img1,
            title: "Product 12",
            dPrice: "$550",
            oPrice: "$650",
              rating: 4.5,
          }
  
    ]
    const new_arrivals = [
        {
          id:1,
          img: img,
          title: "Product 1",
          dPrice: "$100",
          oPrice: "$200",
          rating: 4.5,
        },
        {
          id:2,
          img: img,
          title: "Product 2",
          dPrice: "$150",
          oPrice: "$250",
          rating: 4.5,
        },
        {
          id:3,
          img: img,
          title: "Product 3",
          dPrice: "$200",
          oPrice: "$300",
          rating: 4.5,

        },
        {
          id:4,
          img: img,
          title: "Product 4",
          dPrice: "$250",
          oPrice: "$350",
          rating: 4.5,

        },
        {
          id:5,
          img: img,
          title: "Product 5",
          dPrice: "$300",
          oPrice: "$400",
          rating: 4.5,

        },
        {
          id:6,
          img: img,
          title: "Product 6",
          dPrice: "$350",
          oPrice: "$450",
          rating: 4.5,

        },
        {
          id:7,
          img: img,
          title: "Product 7",
          dPrice: "$400",
          oPrice: "$500",
          rating: 4.5,
        },
        {
          id:8,
          img: img,
          title: "Product 8",
          dPrice: "$450",
          oPrice: "$550",
          rating: 4.5,
        },
        {
          id:9,
          img: img,
          title: "Product 9",
          dPrice: "$500",
          oPrice: "$600",
          rating: 4.5,
        },
        {
          id:10,
          img: img,
          title: "Product 10",
          dPrice: "$550",
          oPrice: "$650",
          rating: 4.5,
        },
        {
          id:11,
          img: img,
          title: "Product 11",
          dPrice: "$550",
          oPrice: "$650",
          rating: 4.5,

        },
        {
          id:12,
          img: img,
          title: "Product 12",
          dPrice: "$550",
          oPrice: "$650",
            rating: 4.5,
        }

      ]

    const sale = [
        {
            id:1,
            img: img2,
            title: "Product 1",
            dPrice: "$100",
            oPrice: "$200",
            rating: 4.5,
          },
          {
            id:2,
            img: img2,
            title: "Product 2",
            dPrice: "$150",
            oPrice: "$250",
            rating: 4.5,
          },
          {
            id:3,
            img: img2,
            title: "Product 3",
            dPrice: "$200",
            oPrice: "$300",
            rating: 4.5,
  
          },
          {
            id:4,
            img: img2,
            title: "Product 4",
            dPrice: "$250",
            oPrice: "$350",
            rating: 4.5,
  
          },
          {
            id:5,
            img: img2,
            title: "Product 5",
            dPrice: "$300",
            oPrice: "$400",
            rating: 4.5,
  
          },
          {
            id:6,
            img: img2,
            title: "Product 6",
            dPrice: "$350",
            oPrice: "$450",
            rating: 4.5,
  
          },
          {
            id:7,
            img: img2,
            title: "Product 7",
            dPrice: "$400",
            oPrice: "$500",
            rating: 4.5,
          },
          {
            id:8,
            img: img2,
            title: "Product 8",
            dPrice: "$450",
            oPrice: "$550",
            rating: 4.5,
          },
          {
            id:9,
            img: img2,
            title: "Product 9",
            dPrice: "$500",
            oPrice: "$600",
            rating: 4.5,
          },
          {
            id:10,
            img: img2,
            title: "Product 10",
            dPrice: "$550",
            oPrice: "$650",
            rating: 4.5,
          },
          {
            id:11,
            img: img2,
            title: "Product 11",
            dPrice: "$550",
            oPrice: "$650",
            rating: 4.5,
  
          },
          {
            id:12,
            img: img2,
            title: "Product 12",
            dPrice: "$550",
            oPrice: "$650",
              rating: 4.5,
          }
    ]

    const [products, setProducts] = React.useState(best_sellers)
    const [color1, setColor1] = React.useState("#000000")
    const [color2, setColor2] = React.useState("#A7A7A7")
    const [color3, setColor3] = React.useState("#A7A7A7")

    const [textDecoration1, setTextDecoration1] = React.useState("underline")
    const [textDecoration2, setTextDecoration2] = React.useState("none")
    const [textDecoration3, setTextDecoration3] = React.useState("none")


    const handleTabsChange = (index) => {
        if (index === 0) {
            setProducts(best_sellers)
            setColor1("#000000")
            setColor2("#A7A7A7")
            setColor3("#A7A7A7")

            setTextDecoration1("underline")
            setTextDecoration2("none")
            setTextDecoration3("none")
        }
        else if (index === 1) {
            setProducts(new_arrivals)
            setColor1("#A7A7A7")
            setColor2("#000000")
            setColor3("#A7A7A7")

            setTextDecoration1("none")
            setTextDecoration2("underline")
            setTextDecoration3("none")

        }
        else if (index === 2) {
            setProducts(sale)
            setColor1("#A7A7A7")
            setColor2("#A7A7A7")
            setColor3("#000000")

            setTextDecoration1("none")
            setTextDecoration2("none")
            setTextDecoration3("underline")
        }
    }

 


    return (
        <Flex justifyContent={"space-between"} flexDirection={"column"} backgroundColor={"white"} >  

        <Flex justifyContent={"center"}>
            <Link fontSize={"1rem"} padding={"1.5rem"} fontFamily={"Inter"} fontStyle={"bold"} onClick={()=> handleTabsChange(0)} color={color1} textDecoration={textDecoration1}>Best Sellers</Link>
            <Link padding={"1.5rem"} fontFamily={"Inter"} fontStyle={"bold"}  onClick={()=> handleTabsChange(1)} color={color2} textDecoration={textDecoration2}>New Arrivals</Link>
            <Link padding={"1.5rem"} fontFamily={"Inter"} fontStyle={"bold"}  onClick={()=> handleTabsChange(2)} color={color3} textDecoration={textDecoration3}>Sale</Link>
        </Flex>

        <Flex display="flex" margin={"56px 52px 56px 52px"} justifyContent={"center"}>
                <SimpleGrid columns={{base:1, md:2, lg:4}} justifyContent={"center"} gap={4}>
                {
                    products.map((product) => (
                        <Box mr="10px" ml={"10px"} justifyContent={"center"}> 
                        <Card position="relative" borderEndRadius={"12px"}>
                          <Image src={product.img} width={"310px"} height={"413px"} objectFit={"fit"}/>
                          <Box 
                          bottom="0px" left="80px" right="0px" color="white" p="1rem" zIndex="1" 
                          justifyContent={"center"}>
                           <Heading fontSize={"1rem"} fontFamily={"Space Grotesk"} color="black" textAlign={"left"}>{product.title} </Heading>
                            <Box justifyContent="left" display={"flex"}>
                              <Heading fontSize={"1rem"} padding={"6px 0px 6px 0px"} color="black">{product.dPrice}</Heading>
                              <Heading fontSize={"1rem"} padding={"6px 8px 6px 8px"} color="#A7A7A7"><s>{product.oPrice}</s></Heading>
                            </Box>
                            </Box>
                        </Card> 
                        </Box>                 
                    ))
                }                    
                </SimpleGrid>
        </Flex>
                <Flex justifyContent={"center"}>
                    <Button color="white" backgroundColor={"black"}>Load More</Button>
                </Flex>

        </Flex>
    );
}

export default ProductGrid;