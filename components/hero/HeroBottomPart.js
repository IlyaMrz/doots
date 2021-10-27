import { Box, Flex } from "@chakra-ui/layout";
import SignUpButton from "../signUpButton/SignUpButton";
import styles from "../../styles/Home.module.css";

function HeroBottomPart() {
    return (
        <Box marginTop="64px">
            <Box
                textDecoration="none solid rgb(33,37,41)"
                fontWeight="600"
                fontFamily="Arial"
                fontSize={{ base: "4rem", sm: "4rem", md: "6rem", lg: "10rem" }}
                lineHeight={{ base: "4rem", sm: "4rem", md: "6rem", lg: "10rem" }}
                style={{ wordSpacing: "0px" }}
            >
                OUR PARTNERS
            </Box>
            <Box
                fontFamily="Arial"
                fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "3.5rem" }}
            >
                HAVE PREMIUM BRANDS SUPPORT YOUR CHANNEL
            </Box>
            <Flex
                className={styles.sml_column}
                direction="row"
                style={{ minWidth: "200px", maxWidth: "550px" }}
            >
                <Box>
                    <Box as="h1">Games</Box>
                    <Box as="p">We love games and our gaming industry partners love you.</Box>

                    <Box as="h1">Hardware</Box>
                    <Box as="p">Let the best hardware brands support your channel.</Box>

                    <Box as="h1">Media {"&"} Entertainment</Box>
                    <Box as="p">
                        Enjoy the support of the largest entertainment brands out there.
                    </Box>
                </Box>
            </Flex>
            <Box marginTop="30px">
                <SignUpButton />
            </Box>
            <Box marginTop="3rem">
                Interested to see your brand on thousands of live streaming channels?{" "}
                <Box as="a" href="/">
                    Learn more
                </Box>
                <Box marginTop="2rem">
                    <Box as="a" href="/">
                        Get in touch with our sales team.
                    </Box>
                </Box>
            </Box>
            <Box marginTop="64px" />
        </Box>
    );
}

export default HeroBottomPart;
