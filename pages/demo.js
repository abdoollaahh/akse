import { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Aurora from "../components/Aurora";
import SpotlightCard from "../components/SpotlightCard";

export default function Demo() {
    const theme = useTheme();
    const viewerRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load Pannellum script dynamically
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
        script.async = true;

        script.onload = () => {
            // Initialize viewer after script loads
            if (viewerRef.current && window.pannellum) {
                try {
                    window.pannellum.viewer(viewerRef.current, {
                        type: "equirectangular",
                        panorama: "https://pannellum.org/images/alma.jpg",
                        autoLoad: true,
                        showControls: true,
                        showFullscreenCtrl: true,
                        showZoomCtrl: true,
                        mouseZoom: true,
                        compass: true,
                        autoRotate: -2,
                        hotSpots: [
                            {
                                pitch: -2.1,
                                yaw: 132.9,
                                type: "info",
                                text: "Historic Architecture - Click to explore details about this magnificent structure",
                            },
                            {
                                pitch: -0.9,
                                yaw: 1.5,
                                type: "info",
                                text: "Cultural Heritage Site - Learn about the rich history of this location",
                            }
                        ]
                    });
                    setLoading(false);
                } catch (error) {
                    console.error("Error initializing viewer:", error);
                    setLoading(false);
                }
            }
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
                />
            </Head>

            <div>
                {/* Hero */}
                {/* Hero */}
                <Box
                    className="grain-texture"
                    sx={{
                        bgcolor: "#1a1a1a",
                        color: "#fff",
                        py: 15,
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Aurora
                        colorStops={["#CC5500", "#FFDAB9", "#CC5500"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={0.5}
                    />

                    <div className="container" style={{ position: "relative", zIndex: 1 }}>
                        <Link href="/">
                            <Button startIcon={<ArrowBackIcon />} sx={{ color: "#fff", mb: 3 }}>
                                Back to Home
                            </Button>
                        </Link>
                        <Typography variant="h1" sx={{ mb: 2, color: "#fff", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                            Interactive 3D Tour Demo
                        </Typography>
                        <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.95)", maxWidth: 700, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
                            Experience our immersive 360° virtual tours. Click and drag to explore!
                        </Typography>
                    </div>
                </Box>

                {/* 360 Viewer */}
                <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
                    <Box
                        sx={{
                            bgcolor: "#fff",
                            borderRadius: 4,
                            overflow: "hidden",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                            position: "relative",
                        }}
                    >
                        {loading && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    bgcolor: "#f5f5f5",
                                    zIndex: 10,
                                }}
                            >
                                <Box sx={{ textAlign: "center" }}>
                                    <CircularProgress sx={{ color: theme.palette.primary.main, mb: 2 }} />
                                    <Typography>Loading 360° viewer...</Typography>
                                </Box>
                            </Box>
                        )}
                        <div
                            ref={viewerRef}
                            style={{
                                width: "100%",
                                height: "600px",
                                backgroundColor: "#000",
                            }}
                        />
                    </Box>

                    {/* Instructions */}
                    <Box sx={{ mt: 6, textAlign: "center" }}>
                        <Typography variant="h3" sx={{ mb: 3 }}>
                            How to Navigate
                        </Typography>
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                mt: 4,
                            }}
                        >
                            {[
                                { title: "Click & Drag", desc: "Move your mouse to look around" },
                                { title: "Scroll", desc: "Zoom in and out for closer details" },
                                { title: "Hotspots", desc: "Click info markers to learn more" },
                            ].map((item, i) => (
                                <Grid item xs={12} md={4} key={i}>
                                    <SpotlightCard
                                        spotlightColor="rgba(204, 85, 0, 0.1)"
                                        className="custom-spotlight-card"
                                    >
                                        <Box
                                            sx={{
                                                p: 2,
                                                textAlign: "center",
                                                position: "relative",
                                                zIndex: 1
                                            }}
                                        >
                                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: theme.palette.primary.main }}>
                                                {item.title}
                                            </Typography>
                                            <Typography className="muted">{item.desc}</Typography>
                                        </Box>
                                    </SpotlightCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* CTA */}
                    <Box
                        className="grain-texture"
                        sx={{
                            background: "linear-gradient(135deg, #7e2921 0%, #dab390 100%)",
                            borderRadius: 4,
                            p: 6,
                            textAlign: "center",
                            color: "#fff",
                            mt: 8,
                        }}
                    >
                        <Typography variant="h3" sx={{ mb: 2, color: "#fff" }}>
                            Want Your Own 3D Tour?
                        </Typography>
                        <Typography sx={{ mb: 4, fontSize: "1.1rem" }}>
                            We can create immersive virtual tours for your heritage site or business.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: "#fff",
                                color: theme.palette.primary.main,
                                px: 5,
                                py: 2,
                                "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </section>
            </div >
        </>
    );
}

