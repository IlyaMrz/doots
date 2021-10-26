import { Box, Flex } from "@chakra-ui/layout";

function Hero() {
    return (
        <Flex height="300vh" zIndex="-1" marginTop="65px">
            <Flex ml={{ base: "2rem", sm: "2rem", md: "7rem", lg: "9rem" }} marginTop="30px">
                <Box
                    textDecoration="none solid rgb(33,37,41)"
                    color="#212529"
                    fontWeight="600"
                    fontFamily="Arial"
                    fontSize={{ base: "4rem", sm: "4rem", md: "5rem", lg: "9rem" }}
                    lineHeight={{ base: "4rem", sm: "4rem", md: "5rem", lg: "9rem" }}
                    style={{ wordSpacing: "0px" }}
                >
                    MAKE {<br />}
                    MORE MONEY {<br />}
                    FROM {<br />}
                    LIVE STREAMING
                </Box>
            </Flex>
        </Flex>
    );
}

export default Hero;
