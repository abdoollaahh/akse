import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

export default function InteractiveShowcase({
    dollhouseTitle = "Dollhouse View",
    dollhouseDesc = "See the entire property as an interactive 3D miniature. Rotate, zoom, and explore every floor and room from a bird's-eye perspective.",
    dollhouseImage = "",
    dollhouseCaption = "Complete spatial overview in seconds",
    walkthroughTitle = "First-Person Walkthrough",
    walkthroughDesc = "Step inside and experience every room as if you were physically there. Navigate naturally through doorways, corridors, and spaces.",
    walkthroughImage = "",
    walkthroughCaption = "Immersive room-by-room experience",
    accentColor = "#CC5500",
    bgColor = "#fafafa",
}) {
    const theme = useTheme();

    const modes = [
        {
            title: dollhouseTitle,
            desc: dollhouseDesc,
            image: dollhouseImage,
            caption: dollhouseCaption,
            badge: "TRUST BUILDER",
            badgeDesc: "First impression — instant spatial understanding",
            icon: "🏠",
            delay: 0,
        },
        {
            title: walkthroughTitle,
            desc: walkthroughDesc,
            image: walkthroughImage,
            caption: walkthroughCaption,
            badge: "CONVERSION DRIVER",
            badgeDesc: "Emotional connection — the booking trigger",
            icon: "🚶",
            delay: 0.2,
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 10, md: 16 },
                bgcolor: bgColor,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div className="container">
                {/* Section Header */}
                <Box
                    sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}
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
                        TWO WAYS TO EXPERIENCE
                    </Typography>
                    <Typography variant="h2" sx={{ mb: 3, maxWidth: 700, mx: "auto" }}>
                        From Overview to{" "}
                        <span style={{ color: accentColor }}>Immersion</span>
                    </Typography>
                    <Typography
                        className="muted"
                        sx={{ maxWidth: 600, mx: "auto", fontSize: "1.1rem", lineHeight: 1.7 }}
                    >
                        Every digital twin ships with two complementary viewing modes — each
                        designed for a different moment in your guest's decision journey.
                    </Typography>
                </Box>

                <Grid container spacing={5}>
                    {modes.map((mode, i) => (
                        <Grid item xs={12} md={6} key={i}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: mode.delay }}
                                sx={{
                                    bgcolor: "#fff",
                                    borderRadius: 5,
                                    overflow: "hidden",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: `0 20px 60px ${accentColor}15`,
                                        borderColor: `${accentColor}30`,
                                    },
                                }}
                            >
                                {/* Image */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: 280,
                                        bgcolor: "#1a1a1a",
                                        overflow: "hidden",
                                    }}
                                >
                                    {mode.image ? (
                                        <img
                                            src={mode.image}
                                            alt={mode.title}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block",
                                            }}
                                        />
                                    ) : (
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: `linear-gradient(135deg, ${accentColor}20 0%, #1a1a1a 100%)`,
                                            }}
                                        >
                                            <Typography sx={{ fontSize: "4rem" }}>
                                                {mode.icon}
                                            </Typography>
                                        </Box>
                                    )}

                                    {/* Badge overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 16,
                                            left: 16,
                                            bgcolor: accentColor,
                                            color: "#fff",
                                            px: 2,
                                            py: 0.7,
                                            borderRadius: "50px",
                                            fontSize: "0.7rem",
                                            fontWeight: 800,
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {mode.badge}
                                    </Box>

                                    {/* Caption overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                                            p: 2.5,
                                            pt: 5,
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "rgba(255,255,255,0.85)",
                                                fontWeight: 500,
                                                fontSize: "0.8rem",
                                            }}
                                        >
                                            {mode.caption}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Content */}
                                <Box sx={{ p: 4, flex: 1, display: "flex", flexDirection: "column" }}>
                                    <Typography
                                        variant="h4"
                                        sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}
                                    >
                                        {mode.title}
                                    </Typography>
                                    <Typography
                                        className="muted"
                                        sx={{ mb: 3, lineHeight: 1.7, fontSize: "0.95rem", flex: 1 }}
                                    >
                                        {mode.desc}
                                    </Typography>

                                    {/* Purpose tag */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.5,
                                            px: 2,
                                            py: 1.5,
                                            bgcolor: `${accentColor}08`,
                                            borderRadius: 3,
                                            borderLeft: `3px solid ${accentColor}`,
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: accentColor,
                                                fontWeight: 700,
                                                fontSize: "0.78rem",
                                            }}
                                        >
                                            {mode.badgeDesc}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
}
