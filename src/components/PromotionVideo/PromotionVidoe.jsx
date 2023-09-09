import { Box, Flex, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import img  from "../../public/video.png";

const PromotionVideo = () => {

    return (
        <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} margin={"52px"}>    
            <Heading justifyContent={"center"}>Nayzak Series® </Heading>          
           <Flex justifySelf={"center"} width={"520px"} height={"60px"} alignItems={"center"}> <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p></Flex>
         <Flex> 
             <Image objectFit={"scale-down"}  height={"50%"} src={img}/>
        </Flex> 
        </Flex>
    );
}

export default  PromotionVideo;