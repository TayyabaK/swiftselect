import { Flex } from "@chakra-ui/react";
import "./style.css";
import {RxCross2} from "react-icons/rx";

const NotificationBar = () => {

    return (
        <Flex className="notification-bar" justifyContent="space-between" alignItems="center" padding={'6px'}>
        
            <p className="notification-text" style={{textAlign: 'center'}}>70% discount - Free shipping worldwide</p>

           <RxCross2 fontWeight={900} color="white"/>
        </Flex>
    );
}

export default  NotificationBar;
