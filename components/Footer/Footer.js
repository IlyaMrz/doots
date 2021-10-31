import { Flex } from "@chakra-ui/layout";
import HeaderLink from "../header/HeaderLink";

function Footer() {
    return (
        <Flex justifyContent="end" style={{ padding: "64px 24px 24px 24px" }}>
            <HeaderLink>Terms of Service</HeaderLink>
            <HeaderLink>Privacy Policy</HeaderLink>
            <HeaderLink>Cookies</HeaderLink>
            <HeaderLink path="/sales">Sales</HeaderLink>
        </Flex>
    );
}

export default Footer;
