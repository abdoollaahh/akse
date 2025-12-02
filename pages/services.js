import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MapIcon from "@mui/icons-material/Map";
import MovieIcon from "@mui/icons-material/Movie";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TiltedCard from "../components/TiltedCard";
import Aurora from "../components/Aurora";
import SpotlightCard from "../components/SpotlightCard";

const services = [
  {
    title: "3D Tour Guide Creation",
    desc: "Transform cultural sites into immersive digital experiences. We use cutting-edge photogrammetry and 3D modeling to create interactive tours with guided audio narration.",
    icon: ViewInArIcon,
    image: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?q=80&w=800&auto=format&fit=crop",
    features: ["Photogrammetry capture", "3D modeling", "Audio narration", "Interactive hotspots"],
  },
  {
    title: "Digital Twin Production",
    desc: "Create accurate, measurable digital replicas of heritage sites for preservation, documentation, and virtual exploration.",
    icon: CameraAltIcon,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    features: ["Millimeter accuracy", "Cloud hosting", "VR compatible", "Archival quality"],
  },
  {
    title: "Travel Planning & Itinerary Design",
    desc: "Curated day-by-day itineraries designed with trusted local partners who know the hidden gems and authentic experiences.",
    icon: MapIcon,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    features: ["Custom itineraries", "Local partnerships", "Flexible scheduling", "24/7 support"],
  },
  {
    title: "Content Production for Tourism Boards",
    desc: "High-quality photography, video, and 3D content production to showcase destinations and attract global travelers.",
    icon: MovieIcon,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    features: ["4K video production", "Drone photography", "3D virtual tours", "Social media content"],
  },
];

export default function Services() {
  const theme = useTheme();

  return (
    <div>
      {/* Hero Section */}
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

        {/* Content Overlay */}
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
            <Typography variant="h1" sx={{ mb: 3, color: "#fff", textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
              Our Services
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
              From 3D digital twins to curated travel experiences, we bring Pakistan's heritage to life through technology and storytelling.
            </Typography>
          </Box>
        </div>
      </Box>

      {/* Services Grid */}
      <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
        <Grid container spacing={6}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Grid item xs={12} md={6} key={i}>
                <Link href={i === 0 ? "/services/3d-tours" : i === 1 ? "/services/digital-twins" : "#"} passHref legacyBehavior>
                  <Box component="a" sx={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}>
                    <TiltedCard
                      imageSrc={service.image || "https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?q=80&w=800&auto=format&fit=crop"}
                      altText={service.title}
                      captionText={service.title}
                      containerHeight="450px"
                      containerWidth="100%"
                      imageHeight="450px"
                      imageWidth="100%"
                      rotateAmplitude={10}
                      scaleOnHover={1.02}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                      overlayContent={
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            p: 3,
                            background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 100%)",
                            borderRadius: "15px",
                          }}
                        >
                          <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                              <Box
                                sx={{
                                  p: 1,
                                  borderRadius: "12px",
                                  bgcolor: "rgba(255,255,255,0.2)",
                                  backdropFilter: "blur(4px)",
                                  display: "flex"
                                }}
                              >
                                <Icon sx={{ color: '#FFDAB9', fontSize: 24 }} />
                              </Box>
                              <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
                                {service.title}
                              </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.5, mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                              {service.desc}
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {service.features.map((feature, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                  bgcolor: "rgba(255,255,255,0.1)",
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: "20px",
                                  border: "1px solid rgba(255,255,255,0.1)"
                                }}
                              >
                                <CheckCircleIcon
                                  sx={{ fontSize: 14, color: theme.palette.primary.main }}
                                />
                                <Typography variant="caption" sx={{ color: "#fff", fontWeight: 500 }}>{feature}</Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      }
                    />
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </section>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: "#fff", py: 12 }}>
        <div className="container">
          <Typography variant="h2" sx={{ textAlign: "center", mb: 3 }}>
            Why Choose AKSE?
          </Typography>
          <Typography
            className="muted"
            sx={{ textAlign: "center", mb: 8, maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}
          >
            We combine cutting-edge technology with deep cultural knowledge to create experiences that are both innovative and authentic.
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Expert Team",
                desc: "Technologists, photographers, and cultural experts working together.",
              },
              {
                title: "Proven Track Record",
                desc: "50+ heritage sites digitized and 1000+ happy travelers.",
              },
              {
                title: "Local Partnerships",
                desc: "Direct collaboration with communities and local guides and photographers.",
              },
              {
                title: "Quality Guarantee",
                desc: "Professional-grade equipment and meticulous attention to detail.",
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <SpotlightCard
                  spotlightColor="rgba(204, 85, 0, 0.1)"
                  className="custom-spotlight-card"
                >
                  <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 800,
                        mb: 2,
                      }}
                    >
                      0{i + 1}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography className="muted" sx={{ lineHeight: 1.6 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </SpotlightCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>

      {/* CTA Section */}
      <section className="container" style={{ marginTop: 120, marginBottom: 120 }}>
        <Box
          className="grain-texture"
          sx={{
            background: "linear-gradient(135deg, #7e2921 0%, #98402a 25%, #c17448 50%, #d79d6d 75%, #dab390 100%)",
            borderRadius: 6,
            p: { xs: 6, md: 10 },
            textAlign: "center",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography variant="h2" sx={{ mb: 3, color: "#fff" }}>
            Ready to Get Started?
          </Typography>
          <Typography sx={{ mb: 5, fontSize: "1.2rem", maxWidth: 600, mx: "auto" }}>
            Let's discuss how we can bring your vision to life with our services.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#fff",
                color: theme.palette.primary.main,
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                px: 5,
                py: 2,
                fontSize: "1.1rem",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              View Portfolio
            </Button>
          </Box>
        </Box>
      </section>
    </div>
  );
}
