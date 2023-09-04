import { Box, Flex } from "@chakra-ui/react";
import "./style.css";
import {RxCross2} from "react-icons/rx";

const NotificationBar = () => {

    return (
        <Box className="notification-bar" padding={'6px'}>
        
            <p className="notification-text">70% discount - Free shipping worldwide</p>

            <RxCross2 color="#fff" fontWeight={900}/>
        </Box>
    );
}

export default  NotificationBar;
