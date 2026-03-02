import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function TreasureHunt({
    riddle = 'Somewhere in our 3D scan of the Golra Museum is a clock frozen at 10:15 AM from 1947. Can you find it?',
    ctaLabel = "Launch the 3D Tour & Start Hunting",
    ctaHref = "#",
    accentColor = "#CC5500",
}) {
    return (
        <Box sx={{ py: { xs: 6, md: 10 } }}>
            <div className="container">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    sx={{
                        borderRadius: 5,
                        overflow: "hidden",
                        position: "relative",
                        bgcolor: "#0a0a0a",
                        border: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    {/* Animated shimmer border */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: "inherit",
                            padding: "1px",
                            background: `linear-gradient(135deg, ${accentColor}40, transparent 40%, transparent 60%, ${accentColor}40)`,
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            pointerEvents: "none",
                        }}
                    />

                    <Box
                        sx={{
                            p: { xs: 5, md: 8 },
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        {/* Background glow */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-40%",
                                left: "30%",
                                width: "40%",
                                height: "180%",
                                background: `radial-gradient(ellipse, ${accentColor}10, transparent 70%)`,
                                pointerEvents: "none",
                            }}
                        />

                        {/* Trophy icon */}
                        <Box
                            component={motion.div}
                            initial={{ scale: 0, rotate: -20 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 200,
                            }}
                            sx={{ mb: 3, position: "relative", zIndex: 1 }}
                        >
                            <EmojiEventsIcon
                                sx={{
                                    fontSize: 56,
                                    color: accentColor,
                                    filter: `drop-shadow(0 0 20px ${accentColor}50)`,
                                }}
                            />
                        </Box>

                        {/* Heading */}
                        <Typography
                            variant="overline"
                            sx={{
                                color: accentColor,
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                fontSize: "0.75rem",
                                display: "block",
                                mb: 2,
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            Interactive Treasure Hunt
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                color: "#fff",
                                fontWeight: 800,
                                mb: 3,
                                maxWidth: 600,
                                mx: "auto",
                                fontSize: { xs: "1.5rem", md: "2rem" },
                                lineHeight: 1.3,
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            Can You Find the Hidden Artefact?
                        </Typography>

                        {/* Riddle */}
                        <Typography
                            component={motion.p}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            sx={{
                                color: "rgba(255,255,255,0.7)",
                                fontSize: { xs: "1.05rem", md: "1.2rem" },
                                lineHeight: 1.8,
                                maxWidth: 560,
                                mx: "auto",
                                mb: 5,
                                fontStyle: "italic",
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            &ldquo;{riddle}&rdquo;
                        </Typography>

                        {/* CTA */}
                        <Button
                            component={motion.a}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            variant="contained"
                            size="large"
                            href={ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<SearchIcon />}
                            sx={{
                                bgcolor: accentColor,
                                color: "#fff",
                                fontSize: "1.05rem",
                                fontWeight: 700,
                                py: 2,
                                px: 5,
                                borderRadius: "60px",
                                textTransform: "none",
                                boxShadow: `0 8px 32px ${accentColor}40`,
                                position: "relative",
                                zIndex: 1,
                                "&:hover": {
                                    bgcolor: accentColor,
                                    filter: "brightness(1.15)",
                                    boxShadow: `0 12px 40px ${accentColor}60`,
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            {ctaLabel}
                        </Button>
                    </Box>
                </Box>
            </div>
        </Box>
    );
}
