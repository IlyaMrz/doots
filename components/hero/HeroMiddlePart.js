import { Box, Flex } from "@chakra-ui/layout";
import SignUpButton from "../signUpButton/SignUpButton";
import styles from "../../styles/Home.module.css";

function HeroMiddle() {
    return (
        <Box marginTop="64px">
            <Box
                textDecoration="none solid rgb(33,37,41)"
                fontWeight="600"
                fontFamily="Arial"
                fontSize={{ base: "8rem", sm: "8rem", md: "8rem", lg: "12rem" }}
                lineHeight={{ base: "7rem", sm: "7rem", md: "7rem", lg: "12rem" }}
                style={{ wordSpacing: "0px" }}
            >
                387,442
            </Box>
            <Box
                fontFamily="Arial"
                fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "3.5rem" }}
            >
                JOIN OUR AMBITIOUS COMMUNITY OF CREATORS
            </Box>
            <Flex direction="row" style={{ minWidth: "200px", maxWidth: "550px" }}>
                <Box>
                    <Box className={styles.sml_column}>
                        <Box as="h1">All Networks</Box>
                        <Box as="p">
                            Available for creators on all live streaming networks worldwide.
                        </Box>
                    </Box>
                    <Box className={styles.sml_column}>
                        <Box as="h1">For Everybody</Box>
                        <Box as="p">No celebrity, partnership or affiliate status required.</Box>
                    </Box>
                </Box>
                <Flex alignItems="end">
                    <Box className={styles.sml_column}>
                        <Box as="h1">Safe</Box>
                        <Box as="p">No LSF bans, no councils, no cancel culture.</Box>
                    </Box>
                </Flex>
            </Flex>
            <Box marginTop="30px">
                <SignUpButton />
            </Box>
            <Box marginTop="64px">{<hr />}</Box>
        </Box>
    );
}

export default HeroMiddle;
