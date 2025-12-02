import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Aurora from "../components/Aurora";
import SpotlightCard from "../components/SpotlightCard";

export default function About() {
  const theme = useTheme();

  const teamMembers = [
    {
      name: "Sarah Ahmed",
      role: "Founder & CEO",
      initial: "S",
      color: theme.palette.primary.main,
    },
    {
      name: "Hassan Khan",
      role: "Head of 3D Technology",
      initial: "H",
      color: "#2D2D2D",
    },
    {
      name: "Fatima Malik",
      role: "Community Lead",
      initial: "F",
      color: theme.palette.primary.main,
    },
  ];

  const impactMetrics = [
    { number: "50+", label: "Heritage Sites Digitized" },
    { number: "1000+", label: "Happy Travelers" },
    { number: "25+", label: "Local Guides Partnered" },
    { number: "10+", label: "Cities Covered" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Box
        className="grain-texture"
        sx={{
          bgcolor: "#1a1a1a",
          color: "#fff",
          py: 15,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Aurora
          colorStops={["#CC5500", "#FFDAB9", "#CC5500"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
            <Typography variant="h1" sx={{ mb: 3, color: "#fff", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
              Preserving Heritage,
              <br />
              Empowering Communities
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.95)",
                fontWeight: 400,
                lineHeight: 1.6,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}
            >
              We build immersive 3D travel guides to make Pakistan more
              accessible, discoverable, and culturally visible to the world.
            </Typography>
          </Box>
        </div>
      </Box>

      {/* Mission Section */}
      <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: "100%",
                  height: "100%",
                  border: `2px solid ${theme.palette.primary.main}`,
                  borderRadius: 4,
                  zIndex: 0,
                },
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1677667404439-0e83fd064b49?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pakistan heritage"
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
              Our <span className="gradient-text">Story</span>
            </Typography>
            <Typography
              className="muted"
              sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              AKSE started as a collaboration between technologists and local
              cultural experts. We saw the incredible heritage of Pakistan being
              underrepresented in global tourism.
            </Typography>
            <Typography
              className="muted"
              sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              By combining cutting-edge 3D capture technology with authentic
              storytelling, we create experiences that benefit both travelers and
              the communities they visit.
            </Typography>
            <Box
              sx={{
                p: 4,
                bgcolor: theme.palette.background.default,
                borderRadius: 3,
                borderLeft: `4px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography sx={{ fontStyle: "italic", lineHeight: 1.6 }}>
                "Our mission is to make every corner of Pakistan accessible through
                technology, while ensuring that local communities benefit directly
                from tourism."
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>

      {/* Impact Metrics */}
      <Box sx={{ bgcolor: "#fff", py: 12 }}>
        <div className="container">
          <Typography variant="h2" sx={{ textAlign: "center", mb: 8 }}>
            Our Impact
          </Typography>
          <Grid container spacing={4}>
            {impactMetrics.map((metric, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <SpotlightCard
                  spotlightColor="rgba(204, 85, 0, 0.1)"
                  className="custom-spotlight-card"
                >
                  <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 800,
                        mb: 1,
                      }}
                    >
                      {metric.number}
                    </Typography>
                    <Typography className="muted" sx={{ fontSize: "1.1rem" }}>
                      {metric.label}
                    </Typography>
                  </Box>
                </SpotlightCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      {/* Values Section */}
      <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 8 }}>
          What We Stand For
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Sustainability",
              desc: "Tourism that supports local communities and preserves cultural heritage for future generations.",
            },
            {
              title: "Innovation",
              desc: "Leveraging 3D technology and digital twins to create unprecedented travel experiences.",
            },
            {
              title: "Authenticity",
              desc: "Working directly with local guides and experts to ensure genuine cultural representation.",
            },
            {
              title: "Accessibility",
              desc: "Making Pakistan's hidden gems discoverable to travelers worldwide through immersive previews.",
            },
          ].map((value, i) => (
            <Grid item xs={12} md={6} key={i}>
              <SpotlightCard
                spotlightColor="rgba(204, 85, 0, 0.1)"
                className="custom-spotlight-card"
              >
                <Box sx={{ height: "100%", position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography className="muted" sx={{ lineHeight: 1.8 }}>
                    {value.desc}
                  </Typography>
                </Box>
              </SpotlightCard>
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
}
