import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import SignUpButton from "../components/signUpButton/SignUpButton";
import styles from "../styles/Home.module.css";

function sales() {
    return (
        <Box>
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
                    <Box marginTop="64px">
                        <Box
                            textDecoration="none solid rgb(33,37,41)"
                            fontWeight="600"
                            fontFamily="Arial"
                            fontSize={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                            lineHeight={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                            style={{ wordSpacing: "0px" }}
                        >
                            ENTER{<br />}
                            THE LIVE ARENA WHEREVER YOU WANT
                        </Box>
                        <Box
                            fontFamily="Arial"
                            fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "3.5rem" }}
                        >
                            ENGAGE WITH LIVE AUDIENCES AROUND THE WORLD
                        </Box>

                        <Box style={{ minWidth: "200px", maxWidth: "550px" }}>
                            <Image my="30px" src="chart2.jpg" alt="chart" />
                            <Flex direction="row">
                                <Box>
                                    <Box className={styles.sml_column}>
                                        <Box as="h1">All Networks</Box>
                                        <Box as="p">
                                            Audiences are waiting across all networks in market.
                                        </Box>
                                    </Box>
                                    <Box className={styles.sml_column}>
                                        <Box as="h1">Strictly Local</Box>
                                        <Box as="p">
                                            Run localized campaigns in all major territories.
                                        </Box>
                                    </Box>
                                </Box>
                                <Flex alignItems="end">
                                    <Box className={styles.sml_column}>
                                        <Box as="h1">24/7</Box>
                                        <Box as="p">Engage live across all timezones.</Box>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box marginTop="30px">
                            <SignUpButton>sales@new.doots.com - Get In Touch</SignUpButton>
                        </Box>
                        <Box marginTop="64px">{<hr />}</Box>
                    </Box>
                    <Box marginTop="64px">
                        <Box
                            textDecoration="none solid rgb(33,37,41)"
                            fontWeight="600"
                            fontFamily="Arial"
                            fontSize={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                            lineHeight={{ base: "4rem", sm: "4rem", md: "5rem", lg: "8rem" }}
                            style={{ wordSpacing: "0px" }}
                        >
                            YOUR IDEAS{<br />}
                            GO LIVE
                        </Box>
                        <Box
                            fontFamily="Arial"
                            fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "3.5rem" }}
                        >
                            INJECT VIDEO INTO THOUSANDS OF LIVE CHANNELS
                        </Box>

                        <Box style={{ minWidth: "200px", maxWidth: "550px" }}>
                            <Flex direction="column">
                                <Box className={styles.sml_column}>
                                    <Box as="h1">16:9 Video, 30s, muted</Box>
                                    <Box as="p">
                                        Our default - mix up exciting video and persistent branding.
                                    </Box>
                                    <Image alt="example" src="ex1.jpg" />
                                </Box>
                                <Box className={styles.sml_column}>
                                    <Box as="h1">9:16 Video, 30s, muted</Box>
                                    <Box as="p">
                                        Portrait mode is our preferred unit to deliver emotional
                                        content.
                                    </Box>
                                    <Image alt="example" src="ex2.jpg" />
                                </Box>
                                <Box className={styles.sml_column}>
                                    <Box as="h1">1:1 Video Countdown, 15s, muted</Box>
                                    <Box as="p">
                                        Best to create sense of urgency, audiences love it.
                                    </Box>
                                    <Image alt="example" src="ex3.jpg" />
                                </Box>
                                <Box className={styles.sml_column}>
                                    <Box as="h1">9:16 Animated Trivia, 15s, muted</Box>
                                    <Box as="p">
                                        Live Streamer{"'"}s Choice - adds real value to the stream,
                                        answers in chat create the buzz you want.
                                    </Box>
                                    <Image alt="example" src="ex4.jpg" />
                                </Box>
                                <Flex direction="row">
                                    <Box>
                                        <Box className={styles.sml_column}>
                                            <Box as="h1">Flexible</Box>
                                            <Box as="p">
                                                Let our platform serve your creatives - not the
                                                other way around.
                                            </Box>
                                        </Box>
                                        <Box className={styles.sml_column}>
                                            <Box as="h1">Automated</Box>
                                            <Box as="p">
                                                Enjoy hands-off campaign management and reporting.
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Flex alignItems="end">
                                        <Box className={styles.sml_column}>
                                            <Box as="h1">Targeted</Box>
                                            <Box as="p">
                                                Target by territories, demographics or games being
                                                played.
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box marginTop="30px">
                            <SignUpButton>sales@new.doots.com - Get In Touch</SignUpButton>
                        </Box>
                        <Box marginTop="64px">{<hr />}</Box>
                    </Box>
                    <Box marginTop="64px">
                        <Box
                            textDecoration="none solid rgb(33,37,41)"
                            fontWeight="600"
                            fontFamily="Arial"
                            fontSize={{ base: "4rem", sm: "4rem", md: "6rem", lg: "10rem" }}
                            lineHeight={{ base: "4rem", sm: "4rem", md: "6rem", lg: "10rem" }}
                            style={{ wordSpacing: "0px" }}
                        >
                            IN GOOD COMPANY
                        </Box>
                        <Box
                            fontFamily="Arial"
                            fontSize={{ base: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "3.5rem" }}
                        >
                            PROVEN TRACK RECORD
                        </Box>
                        <Flex
                            className={styles.sml_column}
                            direction="row"
                            style={{ minWidth: "200px", maxWidth: "550px" }}
                        >
                            <Box>
                                <Box as="h1">Games</Box>
                                <Box as="p">
                                    We love games and our gaming industry partners love you.
                                </Box>
                                <Flex marginTop="25px">
                                    <Image width="100px" src="partners/2k.svg" alt="2k" />
                                    <Image width="200px" src="partners/act.svg" alt="act" />
                                </Flex>

                                <Box marginTop="25px" as="h1">
                                    Hardware
                                </Box>
                                <Box as="p">Let the best hardware brands support your channel.</Box>
                                <Flex marginTop="25px">
                                    <Image width="200px" src="partners/nvd.svg" alt="nvidia" />
                                    <Image width="200px" src="partners/asus.svg" alt="asus" />
                                </Flex>

                                <Box marginTop="25px" as="h1">
                                    Media {"&"} Entertainment
                                </Box>
                                <Box as="p">
                                    Enjoy the support of the largest entertainment brands out there.
                                </Box>
                                <Flex marginTop="25px">
                                    <Image
                                        marginRight="10px"
                                        width="150px"
                                        src="partners/ntf.svg"
                                        alt="netflix"
                                    />
                                    <Image width="150px" src="partners/shw.svg" alt="shw" />
                                </Flex>
                            </Box>
                        </Flex>
                        <Box marginTop="30px">
                            <SignUpButton>sales@new.doots.com - Get In Touch</SignUpButton>
                        </Box>
                        <Box marginTop="64px" />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default sales;
