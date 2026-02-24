import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const defaultSpecs = [
    {
        icon: "📡",
        stat: "LiDAR",
        title: "Laser-Precision Mapping",
        desc: "The same technology in self-driving cars — now mapping every centimetre of your property with surgical accuracy.",
    },
    {
        icon: "📸",
        stat: "4K HDR",
        title: "Photorealistic Clarity",
        desc: "Every texture, fabric, and carved detail captured in true-to-life colour. Zero compression, zero compromise.",
    },
    {
        icon: "📐",
        stat: "±1mm",
        title: "Built-In Measurements",
        desc: "Your architect can take measurements directly from the digital twin. No return visits, no guesswork.",
    },
    {
        icon: "☁️",
        stat: "Cloud",
        title: "Hosted & Shareable",
        desc: "Share via a single link on WhatsApp, embed on your website, or present from any device. No app required.",
    },
];

export default function TechSpecs({
    specs = defaultSpecs,
    accentColor = "#CC5500",
}) {
    return (
        <Box
            className="grain-texture"
            sx={{
                py: { xs: 10, md: 14 },
                bgcolor: "#0a0a0a",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <Box
                sx={{
                    position: "absolute",
                    top: "-30%",
                    left: "20%",
                    width: "60%",
                    height: "160%",
                    background: `radial-gradient(ellipse, ${accentColor}12, transparent 70%)`,
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Section Header */}
                <Box
                    sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: accentColor,
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            mb: 2,
                            display: "block",
                            fontSize: "0.8rem",
                        }}
                    >
                        THE TECHNOLOGY
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: "#fff",
                            mb: 2,
                            maxWidth: 600,
                            mx: "auto",
                            fontWeight: 800,
                        }}
                    >
                        Enterprise-Grade. Effortlessly Simple.
                    </Typography>
                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.55)",
                            maxWidth: 550,
                            mx: "auto",
                            fontSize: "1.05rem",
                            lineHeight: 1.7,
                        }}
                    >
                        You don't need to understand the technology. You just need to see
                        what it delivers.
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {specs.map((spec, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    bgcolor: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(8px)",
                                    height: "100%",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        bgcolor: "rgba(255,255,255,0.07)",
                                        borderColor: `${accentColor}40`,
                                        transform: "translateY(-4px)",
                                        boxShadow: `0 12px 40px ${accentColor}15`,
                                    },
                                }}
                            >
                                <Typography sx={{ fontSize: "2rem", mb: 2 }}>
                                    {spec.icon}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1.8rem",
                                        fontWeight: 900,
                                        color: accentColor,
                                        mb: 1,
                                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                                    }}
                                >
                                    {spec.stat}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, mb: 1.5, fontSize: "1rem", color: "#fff" }}
                                >
                                    {spec.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "rgba(255,255,255,0.5)",
                                        fontSize: "0.88rem",
                                        lineHeight: 1.65,
                                    }}
                                >
                                    {spec.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
}
