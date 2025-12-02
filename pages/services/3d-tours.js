import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ThreeDTours() {
    const theme = useTheme();

    return (
        <div>
            {/* Hero */}
            <Box
                className="grain-texture"
                sx={{
                    background: "linear-gradient(135deg, #7e2921 0%, #98402a 25%, #c17448 50%, #d79d6d 75%, #dab390 100%)",
                    color: "#fff",
                    py: 15,
                    position: "relative",
                }}
            >
                <div className="container">
                    <Link href="/services">
                        <Button
                            startIcon={<ArrowBackIcon />}
                            sx={{ color: "#fff", mb: 3 }}
                        >
                            Back to Services
                        </Button>
                    </Link>
                    <Typography variant="h1" sx={{ mb: 3, color: "#fff" }}>
                        3D Tour Guide Creation
                    </Typography>
                    <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 700 }}>
                        Transform cultural sites into immersive digital experiences with cutting-edge 3D technology.
                    </Typography>
                </div>
            </Box>

            {/* Content */}
            <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h2" sx={{ mb: 3 }}>
                            What We Offer
                        </Typography>
                        <Typography className="muted" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                            Our 3D tour guide creation service uses state-of-the-art photogrammetry and 3D modeling
                            techniques to create immersive, interactive experiences of Pakistan's cultural heritage sites.
                        </Typography>

                        <Typography variant="h3" sx={{ mb: 2, mt: 5 }}>
                            Our Process
                        </Typography>
                        <Box sx={{ mb: 4 }}>
                            {[
                                { title: "Site Survey", desc: "We visit and assess the location, planning optimal capture angles and lighting." },
                                { title: "3D Capture", desc: "Using professional cameras and drones, we capture thousands of high-resolution images." },
                                { title: "3D Modeling", desc: "Advanced software processes images into accurate 3D models with photorealistic textures." },
                                { title: "Interactive Features", desc: "We add hotspots, audio narration, and informational overlays." },
                                { title: "Delivery", desc: "Final tour is delivered in web-compatible format, ready for your platform." },
                            ].map((step, i) => (
                                <Box key={i} sx={{ mb: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                                        {i + 1}. {step.title}
                                    </Typography>
                                    <Typography className="muted" sx={{ lineHeight: 1.8 }}>
                                        {step.desc}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: "sticky", top: 100 }}>
                            <Box sx={{ bgcolor: "#fff", p: 4, borderRadius: 4, mb: 3 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                                    Key Features
                                </Typography>
                                {[
                                    "Photogrammetry capture",
                                    "3D modeling & texturing",
                                    "Audio narration",
                                    "Interactive hotspots",
                                    "VR/AR compatible",
                                    "Cloud hosting included",
                                ].map((feature, i) => (
                                    <Typography key={i} sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
                                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: theme.palette.primary.main }} />
                                        {feature}
                                    </Typography>
                                ))}
                            </Box>

                            <Box
                                className="grain-texture"
                                sx={{
                                    background: "linear-gradient(135deg, #7e2921 0%, #dab390 100%)",
                                    p: 4,
                                    borderRadius: 4,
                                    color: "#fff",
                                    textAlign: "center",
                                }}
                            >
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#fff" }}>
                                    Get Started
                                </Typography>
                                <Typography sx={{ mb: 3, fontSize: "0.95rem" }}>
                                    Ready to digitize your heritage site?
                                </Typography>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        bgcolor: "#fff",
                                        color: theme.palette.primary.main,
                                        "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}
