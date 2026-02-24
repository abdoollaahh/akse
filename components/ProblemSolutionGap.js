import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import SpotlightCard from "./SpotlightCard";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

export default function ProblemSolutionGap({
    stat = "87%",
    statLabel = "of luxury bookings begin on WhatsApp",
    painPoints = [],
    solutionTitle = "The Digital Twin Advantage",
    solutionDescription = "",
    solutionImage = "",
    accentColor = "#CC5500",
}) {
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 10, md: 16 }, bgcolor: "#fff", position: "relative", overflow: "hidden" }}>
            {/* Subtle background pattern */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "40%",
                    height: "100%",
                    background: `radial-gradient(circle at 80% 20%, ${accentColor}08 0%, transparent 60%)`,
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Section Header */}
                <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
                    <Typography
                        variant="overline"
                        component={motion.p}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        sx={{
                            color: accentColor,
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            mb: 2,
                            fontSize: "0.8rem",
                        }}
                    >
                        THE PROBLEM
                    </Typography>
                    <Typography
                        variant="h2"
                        component={motion.h2}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        sx={{ mb: 3, maxWidth: 700, mx: "auto" }}
                    >
                        Static Photos Are{" "}
                        <span style={{ color: accentColor }}>Losing You Guests</span>
                    </Typography>
                </Box>

                <Grid container spacing={8} alignItems="stretch">
                    {/* Problem Column */}
                    <Grid item xs={12} md={6}>
                        {/* Stat callout */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            sx={{
                                bgcolor: "#fafafa",
                                borderRadius: 4,
                                p: 4,
                                mb: 4,
                                border: "1px solid rgba(0,0,0,0.06)",
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: "3.5rem", md: "4.5rem" },
                                    fontWeight: 900,
                                    background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}99 100%)`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    lineHeight: 1,
                                    mb: 1,
                                }}
                            >
                                {stat}
                            </Typography>
                            <Typography
                                sx={{ color: "#666", fontSize: "1.05rem", fontWeight: 500 }}
                            >
                                {statLabel}
                            </Typography>
                        </Box>

                        {/* Pain points */}
                        <Grid container spacing={2}>
                            {painPoints.map((point, i) => (
                                <Grid item xs={12} key={i}>
                                    <Box
                                        component={motion.div}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                    >
                                        <SpotlightCard
                                            spotlightColor={`${accentColor}15`}
                                            className="custom-spotlight-card"
                                        >
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    zIndex: 1,
                                                    display: "flex",
                                                    gap: 2.5,
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        minWidth: 44,
                                                        height: 44,
                                                        borderRadius: "12px",
                                                        bgcolor: `${accentColor}12`,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontSize: "1.3rem",
                                                    }}
                                                >
                                                    {point.emoji || "⚠️"}
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ fontWeight: 700, mb: 0.5, fontSize: "1rem" }}
                                                    >
                                                        {point.title}
                                                    </Typography>
                                                    <Typography
                                                        className="muted"
                                                        sx={{ fontSize: "0.9rem", lineHeight: 1.6 }}
                                                    >
                                                        {point.desc}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </SpotlightCard>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Solution Column */}
                    <Grid item xs={12} md={6}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: accentColor,
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    mb: 2,
                                    fontSize: "0.8rem",
                                }}
                            >
                                THE SOLUTION
                            </Typography>
                            <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                                {solutionTitle}
                            </Typography>
                            <Typography
                                className="muted"
                                sx={{ mb: 4, fontSize: "1.05rem", lineHeight: 1.8 }}
                            >
                                {solutionDescription}
                            </Typography>

                            {/* Solution Preview */}
                            <Box
                                sx={{
                                    flex: 1,
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    position: "relative",
                                    minHeight: 300,
                                    bgcolor: "#f5f5f5",
                                    border: `2px solid ${accentColor}20`,
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `linear-gradient(135deg, ${accentColor}08, transparent)`,
                                        pointerEvents: "none",
                                    },
                                }}
                            >
                                {solutionImage && (
                                    <img
                                        src={solutionImage}
                                        alt="Digital Twin Preview"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                        }}
                                    />
                                )}
                                {/* Floating badge */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 16,
                                        right: 16,
                                        bgcolor: "rgba(0,0,0,0.85)",
                                        backdropFilter: "blur(12px)",
                                        color: "#fff",
                                        px: 2.5,
                                        py: 1.2,
                                        borderRadius: "50px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        zIndex: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            bgcolor: "#25D366",
                                            animation: "pulse 2s infinite",
                                        }}
                                    />
                                    <Typography
                                        variant="caption"
                                        sx={{ fontWeight: 600, letterSpacing: "0.03em" }}
                                    >
                                        Interactive Digital Twin
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}
