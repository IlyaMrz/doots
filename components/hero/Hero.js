import { Flex } from "@chakra-ui/layout";

import Heropt1 from "./heropt1";

function Hero() {
    return (
        <Flex height="300vh" zIndex="-1" marginTop="4rem">
            <Flex
                flexDirection="column"
                ml={{ base: "2rem", sm: "2rem", md: "7rem", lg: "8rem" }}
                marginTop="30px"
                color="#212529"
            >
                <Heropt1 />
            </Flex>
        </Flex>
    );
}

export default Hero;
