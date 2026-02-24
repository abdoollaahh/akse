import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DownloadIcon from "@mui/icons-material/Download";

export default function ConversionCTA({
    headline = "Ready to Transform Your Property?",
    description = "Join forward-thinking hospitality leaders who are already using digital twins to win bookings before the first site visit.",
    whatsappNumber = "923001234567",
    whatsappMessage = "Hi, I'm interested in a Digital Twin for my property. Can you share a demo?",
    emailAddress = "hello@akse.com",
    accentColor = "#CC5500",
    gradientFrom = "#7e2921",
    gradientTo = "#dab390",
}) {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    const emailUrl = `mailto:${emailAddress}?subject=Digital Twin Enquiry&body=${encodeURIComponent("Hi AKSE team,\n\nI'm interested in learning more about your Digital Twin services for my property.\n\nRegards")}`;

    return (
        <Box sx={{ py: { xs: 8, md: 12 } }}>
            <div className="container">
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grain-texture"
                    sx={{
                        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                        borderRadius: 6,
                        p: { xs: 5, md: 10 },
                        color: "#fff",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Decorative circles */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: -80,
                            right: -80,
                            width: 300,
                            height: 300,
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.08)",
                            pointerEvents: "none",
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: -120,
                            left: -60,
                            width: 400,
                            height: 400,
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.05)",
                            pointerEvents: "none",
                        }}
                    />

                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={7}>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: "#fff",
                                    mb: 3,
                                    fontWeight: 800,
                                    fontSize: { xs: "2rem", md: "2.5rem" },
                                    lineHeight: 1.2,
                                }}
                            >
                                {headline}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.1rem",
                                    lineHeight: 1.8,
                                    color: "rgba(255,255,255,0.85)",
                                    maxWidth: 500,
                                }}
                            >
                                {description}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2,
                                }}
                            >
                                {/* Primary — WhatsApp */}
                                <Button
                                    variant="contained"
                                    size="large"
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    startIcon={<WhatsAppIcon />}
                                    fullWidth
                                    sx={{
                                        bgcolor: "#25D366",
                                        color: "#fff",
                                        fontSize: "1.05rem",
                                        fontWeight: 700,
                                        py: 2,
                                        borderRadius: "60px",
                                        textTransform: "none",
                                        boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
                                        "&:hover": {
                                            bgcolor: "#1DB954",
                                            boxShadow: "0 12px 40px rgba(37,211,102,0.45)",
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    Request a WhatsApp Demo
                                </Button>

                                {/* Secondary — Schedule */}
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href={emailUrl}
                                    startIcon={<CalendarMonthIcon />}
                                    fullWidth
                                    sx={{
                                        borderColor: "rgba(255,255,255,0.4)",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        py: 1.8,
                                        borderRadius: "60px",
                                        textTransform: "none",
                                        "&:hover": {
                                            borderColor: "#fff",
                                            bgcolor: "rgba(255,255,255,0.1)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    Schedule a Site Visit
                                </Button>

                                {/* Tertiary — Download */}
                                <Button
                                    size="large"
                                    startIcon={<DownloadIcon />}
                                    fullWidth
                                    sx={{
                                        color: "rgba(255,255,255,0.7)",
                                        fontSize: "0.95rem",
                                        fontWeight: 500,
                                        textTransform: "none",
                                        "&:hover": {
                                            color: "#fff",
                                            bgcolor: "rgba(255,255,255,0.05)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    Download Our Portfolio
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Box>
    );
}
