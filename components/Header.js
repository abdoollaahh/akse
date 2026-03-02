import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();

  const navLinks = [
    { name: "Luxury Tourism", path: "/verticals/luxury-tourism" },
    { name: "Heritage & Events", path: "/verticals/heritage-cultural" },
    { name: "Services", path: "/services" },
    { name: "Demo", path: "/demo" },
    { name: "About", path: "/about" },
  ];

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(24px) saturate(200%)",
        WebkitBackdropFilter: "blur(24px) saturate(200%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "inherit",
          padding: "1px",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 80,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          px: 3,
        }}
      >
        {/* Logo - Left */}
        <Box sx={{ flex: "0 0 auto" }}>
          <Link href="/">
            <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
              <img
                src="/logo.png"
                alt="AKSE Logo"
                style={{
                  height: 40,
                  width: "auto",
                }}
              />
            </div>
          </Link>
        </Box>

        {/* Navigation Links - Center */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {navLinks.map((link) => (
            <Link href={link.path} key={link.name}>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#fff",
                  "&:hover": { color: "rgba(255, 255, 255, 0.8)" },
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* The Archive — CTA Button */}
        <Box sx={{ flex: "0 0 auto", display: { xs: "none", md: "block" } }}>
          <Link href="/archive">
            <Button
              variant="contained"
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #E06600 100%)`,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                px: 3,
                py: 1,
                borderRadius: "100px",
                textTransform: "none",
                boxShadow: `0 0 20px rgba(204, 85, 0, 0.25)`,
                border: "1px solid rgba(255, 255, 255, 0.12)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: `linear-gradient(135deg, #E06600 0%, ${theme.palette.primary.main} 100%)`,
                  boxShadow: `0 0 30px rgba(204, 85, 0, 0.45)`,
                  transform: "translateY(-1px)",
                },
              }}
            >
              The Archive
            </Button>
          </Link>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          sx={{ display: { md: "none" }, color: "#fff" }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
