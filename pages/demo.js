import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Head from "next/head";
import Aurora from "../components/Aurora";
import CesiumGlobe from "../components/CesiumGlobe";
import { useTheme } from "@mui/material/styles";

export default function Demo() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>AKSE — Global 3D Intelligence Demo</title>
        {/* We load Cesium styles dynamically in the component */}
      </Head>

      <div>
        {/* Hero Area */}
        <Box
          className="grain-texture"
          sx={{
            bgcolor: "#0a0a0a",
            color: "#fff",
            pt: 15,
            pb: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Aurora
            colorStops={["#CC5500", "#0F4C5C", "#CC5500"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />

          <div
            className="container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <Link href="/">
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ color: "rgba(255,255,255,0.7)", mb: 3, "&:hover": { color: "#fff" } }}
              >
                Back to Home
              </Button>
            </Link>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                color: "#fff",
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              The World in <span className="gradient-text">3D</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: 800,
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              Explore our high-fidelity geospatial intelligence platform.
              Fly from continental scales down to centimetre-accurate interior scans.
            </Typography>
          </div>
        </Box>

        {/* 3D Globe Viewer */}
        <Box sx={{ bgcolor: "#0a0a0a", pb: 12 }}>
          <div className="container">
            <CesiumGlobe />
          </div>
        </Box>

        {/* Capabilities Context */}
        <Box sx={{ bgcolor: "#111", py: 12, color: "#fff" }}>
          <div className="container">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography variant="overline" sx={{ color: theme.palette.primary.main, letterSpacing: 2, fontWeight: 700 }}>Beyond the Map</Typography>
              <Typography variant="h3" sx={{ mt: 2, mb: 3, fontWeight: 800 }}>Spatial Intelligence Infrastructure</Typography>
              <Typography sx={{ maxWidth: 700, mx: "auto", color: "rgba(255,255,255,0.7)", fontSize: "1.1rem" }}>
                What you see above isn't just a map. It's a spatial computing platform integrating photogrammetry,
                LiDAR, and topographical data to build digital twins of the physical world.
              </Typography>
            </Box>
          </div>
        </Box>
      </div>
    </>
  );
}

