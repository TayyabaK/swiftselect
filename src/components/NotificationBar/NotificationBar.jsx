import { Box, Flex } from "@chakra-ui/react";
import "./style.css";
import {RxCross2} from "react-icons/rx";

const NotificationBar = () => {

    return (
        <Box className="notification-bar" padding={'6px'}>
            <Flex width={{base: "50%",sm: "55%", md: "60%", lg: "70%", xl:"62%"}} justifyContent={"end"}>
                 <p className="notification-text">70% discount - Free shipping worldwide</p>
            </Flex>
            <Flex>
            <RxCross2 color="#fff" fontWeight={900} />
            </Flex>
        </Box>
    );
}

export default  NotificationBar;
