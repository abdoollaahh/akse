import Head from "next/head";
import Box from "@mui/material/Box";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Layout({ children, title = "AKSE | Explore Pakistan" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Header />
                <Box
                    component={motion.main}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    sx={{ flexGrow: 1 }}
                >
                    {children}
                </Box>
                <Footer />
            </Box>
        </>
    );
}
