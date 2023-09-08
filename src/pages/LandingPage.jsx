import NotificationBar from "../components/NotificationBar/NotificationBar";
import NavBar from "../components/NavigationBar/NavigationBar";
import { HeroSection } from "../components/HeroSection/Herosection";
import { Box } from "@chakra-ui/react";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import ImagePrompt from "../components/ImagePrompt/ImagePrompt";
import PromotionVideo from "../components/PromotionVideo/PromotionVidoe";
const LandingPage = () => {

    return (
        <div>
            <NotificationBar />
            <NavBar/>
            <HeroSection/>
            <NewArrivals/>
            <ImagePrompt/>
            <ProductGrid/>
            <PromotionVideo/>
        </div>
    );
}

export default LandingPage;