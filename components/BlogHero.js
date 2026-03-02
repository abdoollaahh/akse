import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import BlurText from "./BlurText";

export default function BlogHero({
    headline = "",
    category = "Sacred Spaces",
    readingTime = "12 min read",
    date = "March 2026",
    backgroundImage = "",
    accentColor = "#CC5500",
}) {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: { xs: "70vh", md: "85vh" },
                display: "flex",
                alignItems: "flex-end",
                overflow: "hidden",
                bgcolor: "#0a0a0a",
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 100%)",
                    },
                }}
            />

            {/* Accent line */}
            <Box
                component={motion.div}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                    zIndex: 3,
                    transformOrigin: "left",
                }}
            />

            {/* Content */}
            <div
                className="container"
                style={{ position: "relative", zIndex: 2, width: "100%" }}
            >
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    sx={{ maxWidth: 820, pb: { xs: 6, md: 10 }, pt: { xs: 12, md: 0 } }}
                >
                    {/* Meta row */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 4,
                            flexWrap: "wrap",
                        }}
                    >
                        {/* Category pill */}
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 2.5,
                                py: 0.8,
                                borderRadius: "50px",
                                bgcolor: `${accentColor}22`,
                                border: `1px solid ${accentColor}55`,
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    bgcolor: accentColor,
                                    boxShadow: `0 0 10px ${accentColor}`,
                                    animation: "pulse 2s ease-in-out infinite",
                                }}
                            />
                            <Typography
                                variant="caption"
                                sx={{
                                    color: accentColor,
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    fontSize: "0.7rem",
                                }}
                            >
                                {category}
                            </Typography>
                        </Box>

                        {/* Date & reading time */}
                        <Typography
                            variant="caption"
                            sx={{
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "0.8rem",
                                letterSpacing: "0.04em",
                            }}
                        >
                            {date} &nbsp;·&nbsp; {readingTime}
                        </Typography>
                    </Box>

                    {/* Headline */}
                    <Box sx={{ mb: 3 }}>
                        <BlurText
                            text={headline}
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className="vertical-hero-headline"
                        />
                    </Box>
                </Box>
            </div>
        </Box>
    );
}
