import Hero from "../components/Hero";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import TourCard from "../components/TourCard";
import MagicBento from "../components/MagicBento";
import SpotlightCard from "../components/SpotlightCard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const featured = [
  {
    title: "Hunza Adventure Trip",
    summary: "High mountain vistas, local homestays and guided hikes through the ancient valleys of Hunza.",
    price: "PKR 85,000",
    image: "https://images.unsplash.com/photo-1611821376205-3d0bf56c0ee2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Islamabad Heritage Tour",
    summary: "Architectural walks and cultural storytelling in the capital. Discover the hidden gems of Islamabad.",
    price: "PKR 25,000",
    image: "https://images.unsplash.com/photo-1705609312569-614e3ddf2770?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Karachi Street Food",
    summary: "Taste the city—late-night food walks and chef meetups in the heart of Karachi's culinary scene.",
    price: "PKR 8,500",
    image:
      "https://images.unsplash.com/photo-1680505305209-cef1cb716b1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <Hero />

      {/* Featured Tours Section */}
      <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            Featured <span className="gradient-text">Experiences</span>
          </Typography>
          <Typography className="muted" sx={{ maxWidth: 600, mx: "auto" }}>
            Curated tours that take you beyond the ordinary. Experience the authentic culture and breathtaking landscapes of Pakistan.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {featured.map((t) => (
            <Grid item xs={12} md={4} key={t.title}>
              <TourCard tour={t} />
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Magic Bento Grid Section */}
      <Box sx={{ py: 10, bgcolor: "#000", position: "relative" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 800,
              color: "#fff",
              background: "linear-gradient(135deg, #CC5500 0%, #FFDAB9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Capabilities
          </Typography>
          <MagicBento />
        </Container>
      </Box>

      {/* 3D Guides Feature Section */}
      <Box sx={{ bgcolor: "#fff", py: 15, position: "relative", overflow: "hidden" }}>
        <div className="container">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -20,
                    left: -20,
                    width: "100%",
                    height: "100%",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: 4,
                    zIndex: 0,
                  },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop"
                  alt="3d guide"
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Immersive <span className="gradient-text">3D Previews</span>
              </Typography>
              <Typography className="muted" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                Don't just guess what your destination looks like. Explore key sites in interactive 3D — measured, annotated, and narrated by local guides.
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {[
                  { title: "Digital Twins", desc: "Accurate 3D replicas of heritage sites." },
                  { title: "Audio Guides", desc: "Stories told by local historians." },
                ].map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <SpotlightCard
                      spotlightColor="rgba(204, 85, 0, 0.1)"
                      className="custom-spotlight-card"
                    >
                      <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: theme.palette.primary.main }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" className="muted">
                          {item.desc}
                        </Typography>
                      </Box>
                    </SpotlightCard>
                  </Grid>
                ))}
              </Grid>
              <Link href="/demo">
                <Button variant="outlined" size="large">
                  Try a Demo
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Testimonials */}
      <Box
        className="grain-texture"
        sx={{
          background: "linear-gradient(135deg, #7e2921 0%, #98402a 25%, #c17448 50%, #d79d6d 75%, #dab390 100%)",
          py: 12,
          color: "#fff",
          position: "relative"
        }}
      >
        <div className="container">
          <Typography variant="h2" sx={{ textAlign: "center", mb: 8, color: "#fff" }}>
            Traveler Stories
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  p: 6,
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                <Typography sx={{ fontSize: "1.5rem", fontStyle: "italic", mb: 4, lineHeight: 1.6 }}>
                  "AKSE's 3D guides helped us plan a trip with confidence. The local guide was superb and the experience was exactly as promised."
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                  <Avatar sx={{ bgcolor: "#fff", color: theme.palette.primary.main }}>S</Avatar>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography sx={{ fontWeight: 700 }}>Sarah Jenkins</Typography>
                    <Typography sx={{ fontSize: "0.875rem", opacity: 0.8 }}>Adventure Traveler</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Newsletter */}
      {/* Newsletter Section */}
      <Box
        sx={{
          py: 10,
          background: "#1a1a1a",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
        className="grain-texture"
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                Join Our Community
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
                Subscribe to our newsletter for exclusive travel tips, hidden gems, and special offers delivered straight to your inbox.
              </Typography>
              <Box component="form" sx={{ display: "flex", gap: 2 }}>
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderRadius: 2,
                    input: { color: "#fff" },
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#fff",
                    color: "#000",
                    px: 4,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                  }}
                >
                  Join
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Optional image or graphic could go here */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
