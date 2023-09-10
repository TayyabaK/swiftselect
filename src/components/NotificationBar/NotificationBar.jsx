import { Box, Flex } from "@chakra-ui/react";
import "./style.css";
import {RxCross2} from "react-icons/rx";

const NotificationBar = () => {

    return (
        <Box className="notification-bar" position={"relative"} >
            <p className="notification-text">70% discount - Free shipping worldwide</p>
           <RxCross2 className="notification-icon" fontWeight={900} color="white"/>
        </Box>
    );
}

export default  NotificationBar;