import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DiasporaConnection({
    accentColor = "#CC5500",
    heading = "For the Ones Who Left",
    body = `There is a grandmother in Mississauga who hasn't seen Saidpur Village since 1987. There is a father in Birmingham who describes the Golra trains to his children from memory alone — the hiss of steam, the creak of teak. There are thousands of Pakistanis across the diaspora whose heritage exists only in stories passed down at kitchen tables.

This is for them.

With a single link, a Pakistani living in Toronto can now walk through Saidpur Village with their grandchildren. They can point at the old temple and say, "This is where your great-grandmother used to pray." They can step inside a Victorian coach at Golra and hear the echoes of a journey their grandfather once took. This is not a video. It is not a photograph. It is presence — the closest thing to being there without boarding a plane.

We didn't build this technology to impress. We built it to preserve. Because heritage doesn't belong to a government archive. It belongs to the people who carry it in their hearts — wherever in the world they may be.`,
}) {
    return (
        <Box
            className="grain-texture"
            sx={{
                py: { xs: 10, md: 14 },
                bgcolor: "#080808",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ambient glow */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "80%",
                    background: `radial-gradient(ellipse, ${accentColor}08, transparent 70%)`,
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    sx={{
                        maxWidth: 780,
                        mx: "auto",
                        textAlign: "center",
                    }}
                >
                    {/* Icon */}
                    <Box
                        component={motion.div}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                        sx={{ mb: 4 }}
                    >
                        <FavoriteIcon
                            sx={{
                                fontSize: 40,
                                color: accentColor,
                                opacity: 0.7,
                            }}
                        />
                    </Box>

                    {/* Heading */}
                    <Typography
                        variant="h2"
                        sx={{
                            color: "#fff",
                            fontWeight: 800,
                            mb: 1.5,
                            fontSize: { xs: "2rem", md: "2.8rem" },
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {heading}
                    </Typography>

                    {/* Decorative line */}
                    <Box
                        component={motion.div}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        sx={{
                            width: 60,
                            height: 2,
                            bgcolor: accentColor,
                            mx: "auto",
                            mb: 5,
                            transformOrigin: "center",
                        }}
                    />

                    {/* Body paragraphs */}
                    {body.split("\n\n").map((paragraph, i) => (
                        <Typography
                            key={i}
                            component={motion.p}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                            sx={{
                                color: "rgba(255,255,255,0.75)",
                                fontSize: { xs: "1.05rem", md: "1.15rem" },
                                lineHeight: 1.9,
                                mb: 3,
                                fontStyle: paragraph.length < 40 ? "italic" : "normal",
                                fontWeight: paragraph.length < 40 ? 600 : 400,
                                color:
                                    paragraph.length < 40
                                        ? "#fff"
                                        : "rgba(255,255,255,0.75)",
                            }}
                        >
                            {paragraph}
                        </Typography>
                    ))}
                </Box>
            </div>
        </Box>
    );
}
