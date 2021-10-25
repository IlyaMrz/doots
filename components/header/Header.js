import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
        <Flex
            direction="row"
            justifyContent="space-between"
            height="64px"
            alignItems="center"
            borderBottom=""
        >
            <Flex px="25px" width="100%">
                <Box>
                    <Image src="brand.svg" width="56px" height="auto" alt="logo" />
                </Box>
                <HeaderLink>
                    <Box ml="25px">Sales</Box>
                </HeaderLink>
            </Flex>
            <Flex py="25px" pr="30px" width="100%" justifyContent="end">
                <HeaderLink>Sign up</HeaderLink>
                <HeaderLink>Log in</HeaderLink>
                <HeaderLink>Buy campaign?</HeaderLink>
            </Flex>
        </Flex>
    );
};

export default Header;
