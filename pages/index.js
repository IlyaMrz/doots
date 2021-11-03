import { Box } from "@chakra-ui/layout";
import Hero from "../components/hero/Hero";

export default function Home({ data }) {
    console.log("data index: ", data);
    return <Hero />;
}

export const getServerSideProps = async () => {
    console.log("serversideprops index.js");
    const res = await fetch("http://localhost:3000/api/auth");
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { data },
    };
};
