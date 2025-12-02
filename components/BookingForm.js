import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";

const sampleTours = [
  { id: "islamabad", label: "Islamabad Heritage Tour" },
  { id: "rawalpindi", label: "Rawalpindi Street Food Tour" },
  { id: "taxila", label: "Taxila Museum Experience" },
  { id: "hunza", label: "Hunza Adventure Trip" },
];

export default function BookingForm() {
  const [form, setForm] = useState({
    tour: "islamabad",
    travelers: 2,
    date: "",
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(
      () => alert("Reservation simulated — no backend configured. Thanks!"),
      200
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 720, background: "#fff", p: 4, borderRadius: 2 }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        Reserve Your Spot
      </Typography>
      <TextField
        select
        fullWidth
        label="Tour package"
        name="tour"
        value={form.tour}
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        {sampleTours.map((t) => (
          <MenuItem key={t.id} value={t.id}>
            {t.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="number"
        label="Number of travelers"
        name="travelers"
        value={form.travelers}
        onChange={handleChange}
        sx={{ mb: 2 }}
        fullWidth
      />
      <TextField
        type="date"
        label="Preferred date"
        name="date"
        value={form.date}
        onChange={handleChange}
        sx={{ mb: 2 }}
        fullWidth
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Full name"
        name="name"
        value={form.name}
        onChange={handleChange}
        sx={{ mb: 2 }}
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        sx={{ mb: 2 }}
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Reserve Now
      </Button>
      {submitted && (
        <Typography sx={{ mt: 2 }} className="muted">
          Reservation simulated — check your email (mock).
        </Typography>
      )}
    </Box>
  );
}
