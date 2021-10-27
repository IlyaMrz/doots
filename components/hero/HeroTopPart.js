import { Box, Flex } from "@chakra-ui/layout";
import SignUpButton from "../signUpButton/SignUpButton";
import styles from "../../styles/Home.module.css";

function HeroTopPart() {
    return (
        <Box>
            <Box
                textDecoration="none solid rgb(33,37,41)"
                fontWeight="600"
                fontFamily="Arial"
                fontSize={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                lineHeight={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                style={{ wordSpacing: "0px" }}
            >
                MAKE {<br />}
                MORE MONEY {<br />}
                FROM {<br />}
                LIVE STREAMING
            </Box>
            <Box
                fontFamily="Arial"
                fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "3.5rem" }}
            >
                HOST SPONSORED MESSAGES ON YOUR CHANNEL
            </Box>
            <Flex direction="row" style={{ minWidth: "200px", maxWidth: "550px" }}>
                <Box>
                    <Box className={styles.sml_column}>
                        <Box as="h1">Easy Setup</Box>
                        <Box as="p">Simply add our overlay to your streaming setup and go live</Box>
                    </Box>
                    <Box className={styles.sml_column}>
                        <Box as="h1">Reliable Income</Box>
                        <Box as="p">Take control of your brand and maximize your earnings.</Box>
                    </Box>
                </Box>
                <Box>
                    <Box className={styles.sml_column}>
                        <Box as="h1">Available Woldwide</Box>
                        <Box as="p">
                            Start monetizing your content no matter where you are in the world.
                        </Box>
                    </Box>
                    <Box className={styles.sml_column}>
                        <Box as="h1">Fast Payouts</Box>
                        <Box as="p">Enjoy immediate payouts and no minimum thresholds.</Box>
                    </Box>
                </Box>
            </Flex>
            <Box marginTop="30px">
                <SignUpButton />
            </Box>
            <Box marginTop="64px">{<hr />}</Box>
        </Box>
    );
}

export default HeroTopPart;
