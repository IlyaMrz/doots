import { Link } from "@chakra-ui/layout";

function HeaderLink({ children, path = "#", fn = () => {} }) {
    return (
        <Link
            onClick={() => fn()}
            href={path}
            as="a"
            px="8px"
            whiteSpace="nowrap"
            style={{ borderRight: "solid 1px #f3f3f3", borderLeft: "solid 1px #f3f3f3" }}
        >
            {children}
        </Link>
    );
}

export default HeaderLink;
