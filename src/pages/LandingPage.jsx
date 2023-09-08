import NotificationBar from "../components/NotificationBar/NotificationBar";
import NavBar from "../components/NavigationBar/NavigationBar";
import { HeroSection } from "../components/HeroSection/Herosection";
import { Box } from "@chakra-ui/react";
import NewArrivals from "../components/NewArrivals/NewArrivals";

const LandingPage = () => {

    return (
        <div>
            <NotificationBar />
            <NavBar/>
            <HeroSection/>
            <NewArrivals/>
        </div>
    );
}

export default LandingPage;