import NotificationBar from "../components/NotificationBar/NotificationBar";
import NavBar from "../components/NavigationBar/NavigationBar";
import { HeroSection } from "../components/HeroSection/Herosection";
import { Box } from "@chakra-ui/react";

const LandingPage = () => {

    return (
        <div>
            <NotificationBar />
            <NavBar/>
            <HeroSection/>
        </div>
    );
}

export default LandingPage;