import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

export default function TourCard({ tour }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image={tour.image}
          alt={tour.title}
          sx={{ objectFit: "cover" }}
        />
        <Chip
          label={tour.price}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(4px)",
            fontWeight: 700,
            color: theme.palette.primary.main,
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h3" sx={{ mb: 1, fontSize: "1.25rem" }}>
          {tour.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 2, color: theme.palette.text.secondary }}>
          <LocationOnIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2">Pakistan</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
          {tour.summary}
        </Typography>
        <Button variant="outlined" fullWidth>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
