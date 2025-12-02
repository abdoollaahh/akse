import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      className="grain-texture"
      sx={{
        bgcolor: "#1a1a1a",
        color: "#fff",
        pt: 8,
        pb: 3,
        mt: "auto",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <img
                src="/logo.png"
                alt="AKSE Logo"
                style={{
                  height: 50,
                  width: "auto",
                  marginBottom: 16,
                }}
              />
              <Typography sx={{ color: "#999", lineHeight: 1.7, mb: 3 }}>
                Immersive 3D travel guides and curated cultural tours across Pakistan. Experience the heritage before
                you arrive.
              </Typography>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { Icon: InstagramIcon, link: "#" },
                { Icon: FacebookIcon, link: "#" },
                { Icon: TwitterIcon, link: "#" },
                { Icon: LinkedInIcon, link: "#" },
              ].map(({ Icon, link }, i) => (
                <IconButton
                  key={i}
                  href={link}
                  sx={{
                    color: "#fff",
                    bgcolor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#fff" }}>
              Company
            </Typography>
            <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "Services", path: "/services" },
                { label: "Demo", path: "/demo" },
                { label: "About", path: "/about" },
              ].map((item) => (
                <Link href={item.path} key={item.label}>
                  <Typography
                    sx={{
                      color: "#999",
                      fontSize: "0.95rem",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        paddingLeft: "4px",
                      },
                      transition: "all 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Support Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#fff" }}>
              Support
            </Typography>
            <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["Help Center", "Terms of Service", "Privacy Policy", "Contact Us"].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#999",
                    fontSize: "0.95rem",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      paddingLeft: "4px",
                    },
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact & Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#fff" }}>
              Get In Touch
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                <EmailIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                <Typography sx={{ color: "#999", fontSize: "0.9rem" }}>hello@akse.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                <Typography sx={{ color: "#999", fontSize: "0.9rem" }}>+92 300 1234567</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 18, color: theme.palette.primary.main, mt: 0.3 }} />
                <Typography sx={{ color: "#999", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  Islamabad, Pakistan
                </Typography>
              </Box>
            </Box>

            {/* Newsletter */}
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: "#fff" }}>
              Subscribe to Newsletter
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  borderRadius: 1,
                  "& input": { color: "#fff", fontSize: "0.9rem" },
                  "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  minWidth: "auto",
                  px: 3,
                  fontWeight: 600,
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: 3,
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "#666", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} AKSE. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography
              sx={{
                color: "#666",
                fontSize: "0.875rem",
                "&:hover": { color: theme.palette.primary.main },
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                color: "#666",
                fontSize: "0.875rem",
                "&:hover": { color: theme.palette.primary.main },
                cursor: "pointer",
                transition: "color 0.2s",
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
