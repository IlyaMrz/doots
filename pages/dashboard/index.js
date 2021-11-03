import { Box, Flex } from "@chakra-ui/layout";
import { withProtected, withPublic } from "../../components/utils/route";

function Dashboard() {
    return (
        <Box marginTop="5rem">
            <Flex direction="column" alignItems="center">
                <div>this is your dashboard</div>
            </Flex>
        </Box>
    );
}

export default withProtected(Dashboard);
