import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { motion } from "framer-motion";

export default function SocialProof({
    testimonial = {
        quote: "",
        name: "",
        role: "",
        avatar: "",
    },
    stats = [],
    accentColor = "#CC5500",
}) {
    return (
        <Box
            sx={{
                py: { xs: 10, md: 16 },
                bgcolor: "#fafafa",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle accent glow */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "-20%",
                    left: "10%",
                    width: "80%",
                    height: "60%",
                    background: `radial-gradient(ellipse, ${accentColor}06, transparent 70%)`,
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
                        RESULTS THAT SPEAK
                    </Typography>
                    <Typography variant="h2" sx={{ maxWidth: 600, mx: "auto" }}>
                        Trusted by <span style={{ color: accentColor }}>Industry Leaders</span>
                    </Typography>
                </Box>

                <Grid container spacing={6} alignItems="stretch">
                    {/* Testimonial */}
                    <Grid item xs={12} md={7}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: 5,
                                p: { xs: 4, md: 6 },
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                border: "1px solid rgba(0,0,0,0.05)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Quote mark */}
                            <Typography
                                sx={{
                                    fontSize: "6rem",
                                    fontWeight: 900,
                                    color: `${accentColor}12`,
                                    position: "absolute",
                                    top: 10,
                                    left: 25,
                                    lineHeight: 1,
                                    fontFamily: "Georgia, serif",
                                }}
                            >
                                "
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "1.15rem", md: "1.35rem" },
                                    fontStyle: "italic",
                                    lineHeight: 1.8,
                                    mb: 4,
                                    position: "relative",
                                    zIndex: 1,
                                    color: "#333",
                                }}
                            >
                                {testimonial.quote}
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Avatar
                                    sx={{
                                        width: 52,
                                        height: 52,
                                        bgcolor: accentColor,
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                    }}
                                    src={testimonial.avatar || undefined}
                                >
                                    {testimonial.name ? testimonial.name[0] : "?"}
                                </Avatar>
                                <Box>
                                    <Typography sx={{ fontWeight: 700, fontSize: "1rem" }}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography
                                        className="muted"
                                        sx={{ fontSize: "0.88rem" }}
                                    >
                                        {testimonial.role}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Stats */}
                    <Grid item xs={12} md={5}>
                        <Grid container spacing={2.5} sx={{ height: "100%" }}>
                            {stats.map((item, i) => (
                                <Grid item xs={6} key={i}>
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        sx={{
                                            bgcolor: "#fff",
                                            borderRadius: 4,
                                            p: 3.5,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            border: "1px solid rgba(0,0,0,0.05)",
                                            textAlign: "center",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                borderColor: `${accentColor}30`,
                                                boxShadow: `0 8px 30px ${accentColor}10`,
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: { xs: "2rem", md: "2.5rem" },
                                                fontWeight: 900,
                                                color: accentColor,
                                                lineHeight: 1,
                                                mb: 1,
                                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                                            }}
                                        >
                                            {item.value}
                                        </Typography>
                                        <Typography
                                            className="muted"
                                            sx={{ fontSize: "0.82rem", lineHeight: 1.4 }}
                                        >
                                            {item.label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}
