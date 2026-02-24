import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import BlurText from "./BlurText";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Aurora = dynamic(() => import("./Aurora"), { ssr: false });

export default function VerticalHero({
    headline = "",
    subheadline = "",
    ctaLabel = "Request a WhatsApp Demo",
    ctaHref = "#",
    secondaryCta = null,
    gradientColors = ["#CC5500", "#FFDAB9", "#CC5500"],
    accentColor = "#CC5500",
}) {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                bgcolor: "#0a0a0a",
            }}
        >
            {/* Aurora Background */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                }}
            >
                <Aurora
                    colorStops={gradientColors}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </Box>

            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
                    zIndex: 1,
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
                    sx={{ maxWidth: 820, py: { xs: 12, md: 0 } }}
                >
                    {/* Eyebrow */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 4,
                            px: 2.5,
                            py: 1,
                            borderRadius: "50px",
                            bgcolor: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                bgcolor: accentColor,
                                boxShadow: `0 0 12px ${accentColor}`,
                            }}
                        />
                        <Typography
                            variant="caption"
                            sx={{
                                color: "rgba(255,255,255,0.85)",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                fontSize: "0.75rem",
                            }}
                        >
                            Bespoke Digital Twins
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

                    {/* Subheadline */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: "rgba(255,255,255,0.88)",
                            mb: 6,
                            fontWeight: 400,
                            maxWidth: 640,
                            lineHeight: 1.7,
                            fontSize: { xs: "1.1rem", md: "1.35rem" },
                            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                        }}
                    >
                        {subheadline}
                    </Typography>

                    {/* CTAs */}
                    <Box sx={{ display: "flex", gap: 2.5, flexWrap: "wrap", alignItems: "center" }}>
                        <Button
                            variant="contained"
                            size="large"
                            href={ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<WhatsAppIcon />}
                            sx={{
                                bgcolor: "#25D366",
                                color: "#fff",
                                fontSize: "1.05rem",
                                fontWeight: 700,
                                padding: "16px 36px",
                                borderRadius: "60px",
                                textTransform: "none",
                                boxShadow: "0 8px 32px rgba(37, 211, 102, 0.35)",
                                "&:hover": {
                                    bgcolor: "#1DB954",
                                    boxShadow: "0 12px 40px rgba(37, 211, 102, 0.5)",
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            {ctaLabel}
                        </Button>
                        {secondaryCta && (
                            <Button
                                variant="outlined"
                                size="large"
                                href={secondaryCta.href || "#"}
                                sx={{
                                    borderColor: "rgba(255,255,255,0.4)",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    padding: "14px 32px",
                                    borderRadius: "60px",
                                    textTransform: "none",
                                    "&:hover": {
                                        borderColor: "#fff",
                                        bgcolor: "rgba(255,255,255,0.08)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {secondaryCta.label}
                            </Button>
                        )}
                    </Box>
                </Box>
            </div>

            {/* Scroll indicator */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                sx={{
                    position: "absolute",
                    bottom: 40,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        color: "rgba(255,255,255,0.5)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontSize: "0.65rem",
                    }}
                >
                    Scroll to explore
                </Typography>
                <Box
                    component={motion.div}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    sx={{
                        width: 24,
                        height: 40,
                        borderRadius: "12px",
                        border: "2px solid rgba(255,255,255,0.3)",
                        display: "flex",
                        justifyContent: "center",
                        pt: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: 3,
                            height: 8,
                            borderRadius: "2px",
                            bgcolor: "rgba(255,255,255,0.5)",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
