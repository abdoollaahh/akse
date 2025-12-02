import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTheme } from "@mui/material/styles";
import Aurora from "../components/Aurora";

const tours = [
  {
    id: "badshahi-mosque",
    name: "Badshahi Mosque Virtual Tour",
    description: "Explore the grandeur of Lahore's iconic 17th-century mosque",
    price: "$49",
    image: "/tours/badshahi.jpg",
    duration: "2 hours",
  },
  {
    id: "mohenjo-daro",
    name: "Mohenjo-daro Digital Twin",
    description: "Step into the ancient Indus Valley civilization",
    price: "$59",
    image: "/tours/mohenjo.jpg",
    duration: "3 hours",
  },
  {
    id: "hunza-valley",
    name: "Hunza Valley Experience",
    description: "Discover the breathtaking beauty of Northern Pakistan",
    price: "$79",
    image: "/tours/hunza.jpg",
    duration: "4 hours",
  },
  {
    id: "taxila",
    name: "Taxila Heritage Tour",
    description: "Uncover the ancient Buddhist civilization ruins",
    price: "$45",
    image: "/tours/taxila.jpg",
    duration: "2.5 hours",
  },
];

const steps = ["Select Tour", "Details", "Contact", "Confirm"];

export default function Book() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    travelers: 1,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleTourSelect = (tour) => {
    setSelectedTour(tour);
    handleNext();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
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
            Book Your Journey
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
            Experience Pakistan's rich heritage through immersive virtual tours and digital experiences
          </Typography>
        </Container>
      </Box>

      {/* Booking Form Section */}
      <Box sx={{ bgcolor: "#fffdf9ff", py: 8 }}>
        <Container maxWidth="lg">
          {/* Stepper */}
          <Stepper activeStep={activeStep} sx={{ mb: 6 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Step Content */}
          {activeStep === 0 && (
            <Box>
              <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
                Choose Your Experience
              </Typography>
              <Grid container spacing={3}>
                {tours.map((tour) => (
                  <Grid item xs={12} sm={6} md={3} key={tour.id}>
                    <Card
                      sx={{
                        height: "100%",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 12px 40px rgba(204, 85, 0, 0.2)",
                        },
                      }}
                      onClick={() => handleTourSelect(tour)}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          height: 200,
                          bgcolor: theme.palette.primary.main,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: "3rem",
                        }}
                      >
                        🏛️
                      </CardMedia>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                          {tour.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {tour.description}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
                            {tour.price}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {tour.duration}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {activeStep === 1 && (
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
              <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
                Tour Details
              </Typography>
              <Card sx={{ p: 4 }}>
                <Box sx={{ mb: 3, p: 2, bgcolor: "#f5f5f5", borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {selectedTour?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedTour?.description}
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  type="date"
                  label="Preferred Date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  type="number"
                  label="Number of Travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  inputProps={{ min: 1, max: 20 }}
                  sx={{ mb: 3 }}
                  required
                />
                <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
                  <Button onClick={handleBack} variant="outlined">
                    Back
                  </Button>
                  <Button onClick={handleNext} variant="contained" disabled={!formData.date}>
                    Continue
                  </Button>
                </Box>
              </Card>
            </Box>
          )}

          {activeStep === 2 && (
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
              <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
                Contact Information
              </Typography>
              <Card sx={{ p: 4 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  type="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Special Requests or Questions"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{ mb: 3 }}
                />
                <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
                  <Button onClick={handleBack} variant="outlined">
                    Back
                  </Button>
                  <Button onClick={handleNext} variant="contained" disabled={!formData.name || !formData.email}>
                    Review Booking
                  </Button>
                </Box>
              </Card>
            </Box>
          )}

          {activeStep === 3 && (
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
              <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 700 }}>
                Confirm Your Booking
              </Typography>
              <Card sx={{ p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Tour
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {selectedTour?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedTour?.duration} • {selectedTour?.price}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Date & Travelers
                  </Typography>
                  <Typography variant="body1">
                    {new Date(formData.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formData.travelers} {formData.travelers === 1 ? "traveler" : "travelers"}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Contact Details
                  </Typography>
                  <Typography variant="body1">{formData.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formData.email}
                  </Typography>
                  {formData.phone && (
                    <Typography variant="body2" color="text.secondary">
                      {formData.phone}
                    </Typography>
                  )}
                </Box>
                {formData.message && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                      Special Requests
                    </Typography>
                    <Typography variant="body2">{formData.message}</Typography>
                  </Box>
                )}
                <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}>
                  <Button onClick={handleBack} variant="outlined">
                    Back
                  </Button>
                  <Button onClick={handleSubmit} variant="contained" size="large">
                    Confirm Booking
                  </Button>
                </Box>
              </Card>
            </Box>
          )}

          {activeStep === 4 && (
            <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "center" }}>
              <CheckCircleIcon sx={{ fontSize: 80, color: theme.palette.primary.main, mb: 2 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                Booking Confirmed!
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Thank you for booking with AKSE. We've sent a confirmation email to{" "}
                <strong>{formData.email}</strong> with all the details of your tour.
              </Typography>
              <Card sx={{ p: 3, bgcolor: "#f5f5f5", mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  What's Next?
                </Typography>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  ✓ Check your email for booking confirmation
                </Typography>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  ✓ Our team will contact you within 24 hours
                </Typography>
                <Typography variant="body2" align="left" sx={{ mb: 1 }}>
                  ✓ Download the AKSE app for the best experience
                </Typography>
                <Typography variant="body2" align="left">
                  ✓ Prepare for an unforgettable journey!
                </Typography>
              </Card>
              <Button variant="contained" size="large" href="/">
                Return to Home
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
}
