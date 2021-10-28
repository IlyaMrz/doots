import { Flex } from "@chakra-ui/layout";
import styles from "../../styles/Home.module.css";

function SignUpButton({ children }) {
    return <Flex className={styles.btn}>{children}</Flex>;
}

export default SignUpButton;
