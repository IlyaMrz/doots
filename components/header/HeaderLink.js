import { Link } from "@chakra-ui/layout";

function HeaderLink({ children, path = "/" }) {
    return (
        <Link as="a" href={path} px="8px" whiteSpace="nowrap">
            {children}
        </Link>
    );
}

export default HeaderLink;
