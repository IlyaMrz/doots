import { Image } from "@chakra-ui/image";
import { Box, Flex, Link } from "@chakra-ui/layout";
import HeaderLink from "./HeaderLink";
import { useAuth } from "../../context/user/auth";

const Header = () => {
    const { user, login, logout } = useAuth();
    return (
        <Flex
            style={{ top: "0" }}
            direction="row"
            justifyContent="space-between"
            height="64px"
            alignItems="center"
            overflow="hidden"
            position="fixed"
            width="100%"
            boxShadow="0 0 1px 0 rgba(100,100,100,.25)"
            zIndex="1000"
            background="rgba(255, 255, 255, 1)"
        >
            <Flex px="25px" width="100%">
                <Link href="/">
                    <Image src="brand.svg" width="56px" height="auto" alt="logo" />
                </Link>
                <HeaderLink path="/sales">
                    <Box ml="25px">Sales</Box>
                </HeaderLink>
            </Flex>
            <Flex py="25px" pr="30px" width="100%" justifyContent="end">
                {user ? (
                    <Flex>
                        <div className={"userheader"}>{user.displayName}</div>
                        <HeaderLink path="/dashboard">Dashboard</HeaderLink>
                        <HeaderLink fn={logout}>LogOut</HeaderLink>
                    </Flex>
                ) : (
                    <Flex>
                        <HeaderLink fn={login}>Sign up</HeaderLink>
                        <HeaderLink fn={login}>Log in</HeaderLink>
                    </Flex>
                )}
                <HeaderLink path="/sales">Buy campaign?</HeaderLink>
            </Flex>
        </Flex>
    );
};

export default Header;
