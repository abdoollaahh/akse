import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GridViewIcon from "@mui/icons-material/GridView";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VrpanoIcon from "@mui/icons-material/Vrpano";

const defaultSpecs = [
    {
        icon: <LocationOnIcon sx={{ fontSize: 22 }} />,
        label: "Location",
        value: "Islamabad, Pakistan",
    },
    {
        icon: <GridViewIcon sx={{ fontSize: 22 }} />,
        label: "Scan Density",
        value: "450 Million Data Points",
    },
    {
        icon: <CameraAltIcon sx={{ fontSize: 22 }} />,
        label: "Tech Used",
        value: "LiDAR + 4K Photogrammetry",
    },
    {
        icon: <VrpanoIcon sx={{ fontSize: 22 }} />,
        label: "Best Experienced In",
        value: "VR Headset / Full Screen",
    },
];

export default function HeritageTechSidebar({
    title = "Heritage Tech Specs",
    specs = defaultSpecs,
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
                        bgcolor: "#0d0d0d",
                        border: `1px solid ${accentColor}30`,
                        boxShadow: `0 0 60px ${accentColor}10, inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}
                >
                    {/* Top accent bar */}
                    <Box
                        sx={{
                            height: 3,
                            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                        }}
                    />

                    <Box sx={{ p: { xs: 4, md: 6 } }}>
                        {/* Header */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    bgcolor: accentColor,
                                    boxShadow: `0 0 12px ${accentColor}`,
                                    animation: "pulse 2s ease-in-out infinite",
                                }}
                            />
                            <Typography
                                variant="overline"
                                sx={{
                                    color: accentColor,
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    fontSize: "0.75rem",
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>

                        {/* Spec Grid */}
                        <Grid container spacing={3}>
                            {specs.map((spec, i) => (
                                <Grid item xs={12} sm={6} key={i}>
                                    <Box
                                        component={motion.div}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 2,
                                            p: 2.5,
                                            borderRadius: 3,
                                            bgcolor: "rgba(255,255,255,0.03)",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                bgcolor: "rgba(255,255,255,0.06)",
                                                borderColor: `${accentColor}30`,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                color: accentColor,
                                                mt: 0.3,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {spec.icon}
                                        </Box>
                                        <Box>
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: "rgba(255,255,255,0.4)",
                                                    fontWeight: 600,
                                                    letterSpacing: "0.08em",
                                                    textTransform: "uppercase",
                                                    fontSize: "0.65rem",
                                                    display: "block",
                                                    mb: 0.5,
                                                }}
                                            >
                                                {spec.label}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    fontSize: "0.95rem",
                                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                                }}
                                            >
                                                {spec.value}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </div>
        </Box>
    );
}
