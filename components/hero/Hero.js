import { Flex } from "@chakra-ui/layout";

import HeroTopPart from "./HeroTopPart";
import HeroMiddlePart from "./HeroMiddlePart";
import HeroBottomPart from "./HeroBottomPart";

function Hero() {
    return (
        <Flex zIndex="-1" marginTop="4rem">
            <Flex
                flexDirection="column"
                mx={{ base: "2rem", sm: "2rem", md: "7rem", lg: "8rem" }}
                marginTop="30px"
                color="#212529"
            >
                <HeroTopPart />
                <HeroMiddlePart />
                <HeroBottomPart />
            </Flex>
        </Flex>
    );
}

export default Hero;
