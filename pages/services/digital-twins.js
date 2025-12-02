import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function DigitalTwins() {
    const theme = useTheme();

    return (
        <div>
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
                        <Button startIcon={<ArrowBackIcon />} sx={{ color: "#fff", mb: 3 }}>
                            Back to Services
                        </Button>
                    </Link>
                    <Typography variant="h1" sx={{ mb: 3, color: "#fff" }}>
                        Digital Twin Production
                    </Typography>
                    <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 700 }}>
                        Create accurate, measurable digital replicas for preservation and documentation.
                    </Typography>
                </div>
            </Box>

            <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h2" sx={{ mb: 3 }}>
                            Precision Digital Replicas
                        </Typography>
                        <Typography className="muted" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                            Digital twins are exact virtual replicas of physical heritage sites, accurate to the millimeter.
                            Perfect for preservation, research, and virtual exploration.
                        </Typography>

                        <Typography variant="h3" sx={{ mb: 2, mt: 5 }}>
                            Applications
                        </Typography>
                        <Grid container spacing={3} sx={{ mb: 5 }}>
                            {[
                                { title: "Heritage Preservation", desc: "Archive sites before natural deterioration" },
                                { title: "Research & Documentation", desc: "Enable remote study and measurement" },
                                { title: "Virtual Tourism", desc: "Allow global access to restricted sites" },
                                { title: "Restoration Planning", desc: "Plan renovations with precise measurements" },
                            ].map((app, i) => (
                                <Grid item xs={12} sm={6} key={i}>
                                    <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 3, height: "100%" }}>
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                            {app.title}
                                        </Typography>
                                        <Typography className="muted">{app.desc}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: "sticky", top: 100 }}>
                            <Box sx={{ bgcolor: "#fff", p: 4, borderRadius: 4, mb: 3 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                                    Specifications
                                </Typography>
                                {[
                                    "Millimeter accuracy",
                                    "Cloud hosting",
                                    "VR compatible",
                                    "Archival quality",
                                    "Measurement tools",
                                    "Export options",
                                ].map((spec, i) => (
                                    <Typography key={i} sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
                                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: theme.palette.primary.main }} />
                                        {spec}
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
                                    Request a Quote
                                </Typography>
                                <Typography sx={{ mb: 3, fontSize: "0.95rem" }}>
                                    Get a custom quote for your project
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
