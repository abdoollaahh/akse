import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import Aurora from "../components/Aurora";

const products = [
  {
    id: "badshahi-mosque",
    title: "Badshahi Mosque Virtual Tour",
    description: "Explore the grandeur of Lahore's iconic 17th-century mosque in stunning 360° detail",
    category: "Heritage",
    price: "PKR 4,500",
    duration: "2 hours",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1603491656337-3b491147917c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    highlights: ["360° Virtual Tour", "Historical Commentary", "HD Photography"],
  },
  {
    id: "mohenjo-daro",
    title: "Mohenjo-daro Digital Twin",
    description: "Step into the ancient Indus Valley civilization with our cutting-edge digital reconstruction",
    category: "Heritage",
    price: "PKR 5,900",
    duration: "3 hours",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1608717310359-3a1e90a53504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: true,
    highlights: ["3D Reconstruction", "Archaeological Insights", "Interactive Experience"],
  },
  {
    id: "hunza-valley",
    title: "Hunza Valley Experience",
    description: "Discover the breathtaking beauty of Northern Pakistan's mountain paradise",
    category: "Nature",
    price: "PKR 7,900",
    duration: "4 hours",
    difficulty: "Moderate",
    rating: 5.0,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1611821376205-3d0bf56c0ee2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
    highlights: ["Mountain Vistas", "Local Culture", "Seasonal Tours"],
  },
  {
    id: "lahore-fort",
    title: "Lahore Fort Heritage Walk",
    description: "Uncover the Mughal splendor of this UNESCO World Heritage Site",
    category: "Heritage",
    price: "PKR 3,900",
    duration: "2.5 hours",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1711980057309-d777c92a5804?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlights: ["Mughal Architecture", "Expert Guide", "Photo Opportunities"],
  },
  {
    id: "skardu-adventure",
    title: "Skardu Adventure Experience",
    description: "Explore the gateway to K2 and the world's highest peaks",
    category: "Adventure",
    price: "PKR 12,500",
    duration: "6 hours",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1604676055604-fe96097e4f9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlights: ["Mountain Trekking", "Adventure Sports", "Local Guides"],
  },
  {
    id: "taxila-museum",
    title: "Taxila Museum Experience",
    description: "Explore ancient Buddhist civilization ruins with expert archaeologists",
    category: "Heritage",
    price: "PKR 4,200",
    duration: "2.5 hours",
    difficulty: "Easy",
    rating: 4.6,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1701249515636-68a6f5d7d784?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    highlights: ["Archaeological Sites", "Museum Tour", "Historical Context"],
  },
  {
    id: "kalash-valley",
    title: "Kalash Valley Cultural Tour",
    description: "Experience the unique culture and traditions of the Kalash people",
    category: "Culture",
    price: "PKR 8,900",
    duration: "5 hours",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1692636540932-51db6df75c81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Cultural Immersion", "Traditional Festivals", "Local Cuisine"],
  },
  {
    id: "deosai-plains",
    title: "Deosai Plains Wildlife Safari",
    description: "Discover one of the world's highest plateaus and its unique wildlife",
    category: "Nature",
    price: "PKR 9,500",
    duration: "7 hours",
    difficulty: "Moderate",
    rating: 4.9,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1701763572611-b4cc5a72b2f7?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", highlights: ["Wildlife Spotting", "Himalayan Bears", "Alpine Meadows"],
  },
  {
    id: "street-food-lahore",
    title: "Lahore Street Food Tour",
    description: "Taste your way through the culinary capital of Pakistan",
    category: "Culture",
    price: "PKR 2,500",
    duration: "3 hours",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1680505305209-cef1cb716b1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Local Cuisine", "Food Markets", "Cultural Stories"],
  },
];

const categories = ["All", "Heritage", "Nature", "Culture", "Adventure"];

export default function Products() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const featuredProducts = products.filter((p) => p.featured);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

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

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            align="center"
            sx={{
              color: "#fff",
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}
          >
            Virtual Tour Products
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "rgba(255, 255, 255, 0.95)",
              maxWidth: 700,
              mx: "auto",
              fontWeight: 400,
              textShadow: "0 2px 10px rgba(0,0,0,0.3)"
            }}
          >
            Explore Pakistan's heritage, nature, and culture through immersive digital experiences
          </Typography>
        </Container>
      </Box>

      {/* Featured Products Section */}
      {selectedCategory === "All" && (
        <Box sx={{ bgcolor: "#fff", py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" sx={{ mb: 4, fontWeight: 800 }}>
              Featured Experiences
            </Typography>
            <Grid container spacing={3}>
              {featuredProducts.map((product) => (
                <Grid item xs={12} md={4} key={product.id}>
                  <Card
                    sx={{
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 40px rgba(204, 85, 0, 0.2)",
                        "& .product-overlay": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="280"
                      image={product.image}
                      alt={product.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <Box
                      className="product-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        display: "flex",
                        alignItems: "flex-end",
                        p: 3,
                      }}
                    >
                      <Link href={`/products/${product.id}`} passHref legacyBehavior>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#fff",
                            color: theme.palette.primary.main,
                            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                          }}
                        >
                          View Details
                        </Button>
                      </Link>
                    </Box>
                    <Chip
                      label={product.category}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        bgcolor: theme.palette.primary.main,
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {product.description}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <AccessTimeIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                          <Typography variant="caption" color="text.secondary">
                            {product.duration}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <TrendingUpIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                          <Typography variant="caption" color="text.secondary">
                            {product.difficulty}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <StarIcon sx={{ fontSize: 16, color: "#FFB800" }} />
                          <Typography variant="caption" color="text.secondary">
                            {product.rating} ({product.reviews})
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                        {product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* All Products Section */}
      <Box sx={{ bgcolor: "#fffdf9ff", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 4, fontWeight: 800 }}>
            All Products
          </Typography>

          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            sx={{
              mb: 4,
              "& .MuiTab-root": {
                fontWeight: 600,
                fontSize: "1rem",
              },
              "& .Mui-selected": {
                color: theme.palette.primary.main,
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>

          {/* Products Grid */}
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(204, 85, 0, 0.2)",
                      "& .product-overlay": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <Box
                    className="product-overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 220,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "flex-end",
                      p: 2,
                    }}
                  >
                    <Link href={`/products/${product.id}`} passHref legacyBehavior>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          bgcolor: "#fff",
                          color: theme.palette.primary.main,
                          "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                        }}
                      >
                        View Details
                      </Button>
                    </Link>
                  </Box>
                  <Chip
                    label={product.category}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: theme.palette.primary.main,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: "1.1rem" }}>
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, flexWrap: "wrap" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <AccessTimeIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                        <Typography variant="caption" color="text.secondary">
                          {product.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <TrendingUpIcon sx={{ fontSize: 14, color: "text.secondary" }} />
                        <Typography variant="caption" color="text.secondary">
                          {product.difficulty}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <StarIcon sx={{ fontSize: 14, color: "#FFB800" }} />
                        <Typography variant="caption" color="text.secondary">
                          {product.rating}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {filteredProducts.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                No products found in this category
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
}
