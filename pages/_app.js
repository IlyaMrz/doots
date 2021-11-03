import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";
import { AuthProvider } from "../context/user/auth";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <AuthProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AuthProvider>
        </ChakraProvider>
    );
}

export default MyApp;
