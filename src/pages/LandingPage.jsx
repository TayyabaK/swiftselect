import NotificationBar from "../components/NotificationBar/NotificationBar";
import NavBar from "../components/NavigationBar/NavigationBar";
import HeroSection from "../components/HeroSection/Herosection";
import { Box, Center, Text } from "@chakra-ui/react";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import ImagePrompt from "../components/ImagePrompt/ImagePrompt";
import PromotionVideo from "../components/PromotionVideo/PromotionVidoe";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import IconBox from "../components/IconBox/IconBox";
import Footer from "../components/Footer/Footer";


const LandingPage = () => {

    return (
        <Box backgroundColor={"white"} justifyContent={"center"} >
          <Box backgroundColor={"#f5f5f5"}>
            <NotificationBar />
                <NavBar/>
                <HeroSection/>
            </Box>
            <NewArrivals/>
            <ImagePrompt/>
            <ProductGrid/>
            <PromotionVideo/>
            <NewsletterSubscribe/>
            <IconBox/>
            <Footer/>
            <Center> 
                    <Text fontSize="0.8rem" mt="1rem" mb="1rem">
                        © 2023  SwiftSelect. All rights reserved
                    </Text>
            </Center>

        </Box>
    );
}

export default LandingPage;