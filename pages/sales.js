import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import Header from "../components/header/Header";
import SignUpButton from "../components/signUpButton/SignUpButton";
import styles from "../styles/Home.module.css";

function sales() {
    return (
        <Box>
            <Header />
            <Flex zIndex="-1" marginTop="2rem">
                <Flex
                    flexDirection="column"
                    mx={{ base: "2rem", sm: "2rem", md: "7rem", lg: "8rem" }}
                    marginTop="15px"
                    color="#212529"
                >
                    <Box marginTop="64px">
                        <Box
                            textDecoration="none solid rgb(33,37,41)"
                            fontWeight="600"
                            fontFamily="Arial"
                            fontSize={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                            lineHeight={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                            style={{ wordSpacing: "0px" }}
                        >
                            LIVE IS{<br />}
                            THE NEW NORMAL
                        </Box>
                        <Box
                            fontFamily="Arial"
                            fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "3.5rem" }}
                        >
                            LIVE STREAMING DOMINATES MEDIA{<br />}
                            CONSUMPTION
                        </Box>

                        <Box style={{ minWidth: "200px", maxWidth: "550px" }}>
                            <Image my="30px" src="sales_chart.jpg" alt="chart" />
                            <Flex direction="row">
                                <Box>
                                    <Box className={styles.sml_column}>
                                        <Box as="h1">+137% Audience Growth</Box>
                                        <Box as="p">Huge inventory to deliver fast results.</Box>
                                    </Box>
                                    <Box className={styles.sml_column}>
                                        <Box as="h1">Diverse Content</Box>
                                        <Box as="p">
                                            Gaming at its core, Live Chatting and Pop Culture on the
                                            rise.
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box className={styles.sml_column}>
                                        <Box as="h1">+18% Engagement</Box>
                                        <Box as="p">Highly visible at the center of attention.</Box>
                                    </Box>
                                    <Box className={styles.sml_column}>
                                        <Box as="h1">New Arrivals</Box>
                                        <Box as="p">
                                            Midcore audiences have arrived, mainstream is next.
                                        </Box>
                                    </Box>
                                </Box>
                            </Flex>
                        </Box>
                        <Box marginTop="30px">
                            <SignUpButton>sales@new.doots.com - Get In Touch</SignUpButton>
                        </Box>
                        <Box marginTop="64px">{<hr />}</Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default sales;
