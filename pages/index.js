import Box from "@mui/material/Box";
import FaultyTerminal from "../components/FaultyTerminal";
import Head from "next/head";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Head>
        <title>Site Taken Down</title>
      </Head>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#A7EF9E"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>

      <Box
        sx={{
          zIndex: 1,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "300px",
            filter: "drop-shadow(0 0 10px rgba(167, 239, 158, 0.5))",
          }}
        />
      </Box>
    </div>
  );
}

/*
import Hero from "../components/Hero";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import BlogCard from "../components/BlogCard";
import MagicBento from "../components/MagicBento";
import SpotlightCard from "../components/SpotlightCard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const archivePosts = [
  {
    title: "The Silent Stones of Saidpur: A 3D Walkthrough of Time",
    excerpt:
      "A 500-year-old multi-faith village in the Margalla Hills — frozen in a digital twin you can explore from anywhere on Earth.",
    category: "Sacred Spaces",
    readTime: "12 min read",
    image:
      "https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2FXF_L4gLEWF92hxiT_TuWpCgns_C0bv5OqWpqYmrnvug.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3D2cec5b025054cfaf850715b901122780df5b7ebd",
    slug: "/archive/saidpur-3d-walkthrough",
    accentColor: "#CC5500",
  },
  {
    title: "Steam and Steel: Reliving the Golden Age at Golra Railway Station",
    excerpt:
      "Step inside Victorian coaches frozen in time. Our Interior Scan captures details even on-site visitors miss.",
    category: "Industrial History",
    readTime: "10 min read",
    image:
      "https://i.dawn.com/primary/2015/01/54c5fcdd0a507.jpg?r=1390485840",
    slug: "/archive/golra-railway-museum",
    accentColor: "#0F4C5C",
  },
];

export default function OldHome() {
  const theme = useTheme();

  return (
    <div>
      <Hero />

      <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }}>
            From <span className="gradient-text">The Archive</span>
          </Typography>
          <Typography className="muted" sx={{ maxWidth: 640, mx: "auto" }}>
            Long-form stories on heritage preservation, powered by our 3D scanning technology. Read, explore, and walk through history.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {archivePosts.map((post) => (
            <Grid item xs={12} md={6} key={post.slug}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Link href="/archive">
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                borderRadius: "100px",
                px: 5,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  background: "rgba(204, 85, 0, 0.08)",
                },
              }}
            >
              Browse The Archive →
            </Button>
          </Link>
        </Box>
      </section>

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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
*/
