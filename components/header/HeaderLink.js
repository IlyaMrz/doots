import { Link } from "@chakra-ui/layout";

function HeaderLink({ children, path = "/" }) {
    return (
        <Link
            as="a"
            href={path}
            px="8px"
            whiteSpace="nowrap"
            style={{ "border-right": "solid 1px #f3f3f3", "border-left": "solid 1px #f3f3f3" }}
        >
            {children}
        </Link>
    );
}

export default HeaderLink;
