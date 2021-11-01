import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";
import { AuthProvider } from "../context/user/auth";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <AuthProvider>
                <Component {...pageProps} />
                <Footer />
            </AuthProvider>
        </ChakraProvider>
    );
}

export default MyApp;
