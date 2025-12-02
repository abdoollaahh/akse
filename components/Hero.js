import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GlassSurface from "./GlassSurface";
import BlurText from "./BlurText";
import styles from "./Hero.module.css";

// Dynamically import Balatro to avoid SSR issues with WebGL
const Balatro = dynamic(() => import("./Balatro"), { ssr: false });

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated WebGL Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <Balatro
          color1="#CC5500"
          color2="#FFDAB9"
          color3="#2D2D2D"
          isRotate={true}
          mouseInteraction={true}
          pixelFilter={700}
          spinSpeed={0.1}
          spinRotation={-0.5}
          contrast={2.5}
          lighting={0.5}
        />
      </Box>

      {/* Dark overlay for text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{ maxWidth: 800 }}
        >
          <Box sx={{ mb: 3 }}>
            <BlurText
              text="Explore Pakistan in 3D."
              delay={100}
              animateBy="words"
              direction="top"
              className={styles['hero-blur-text']}
            />
            <BlurText
              text="Travel Like Never Before."
              delay={120}
              animateBy="words"
              direction="top"
              className={styles['hero-blur-text-accent']}
            />
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(255,255,255,0.95)",
              mb: 5,
              fontWeight: 400,
              maxWidth: 600,
              lineHeight: 1.6,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Immersive 3D travel guides and curated cultural tours. Experience the heritage before you arrive.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Link href="/products">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontSize: "1.1rem",
                  padding: "16px 40px",
                }}
              >
                Start Exploring
              </Button>
            </Link>
            <Link href="/book">
              <GlassSurface
                width="auto"
                height="auto"
                borderRadius={50}
                brightness={100}
                opacity={0.2}
                blur={12}
                borderWidth={0.15}
                noPadding={true}
                className={styles['hero-glass-button']}
                style={{ display: "inline-block" }}
              >
                <Button
                  size="large"
                  sx={{
                    fontSize: "1.1rem",
                    padding: "16px 40px",
                    color: "#fff",
                    fontWeight: 600,
                    minWidth: "auto",
                    "&:hover": {
                      background: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Book a Tour
                </Button>
              </GlassSurface>
            </Link>
          </Box>
        </Box>
      </div>
    </Box>
  );
}
