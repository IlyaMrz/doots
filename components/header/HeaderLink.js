import { Box } from "@chakra-ui/layout";

function HeaderLink({ children }) {
    return (
        <Box as="a" href="/" px="8px">
            {children}
        </Box>
    );
}

export default HeaderLink;
