import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function BlogCard({
    title = "",
    excerpt = "",
    category = "Sacred Spaces",
    readingTime = "12 min read",
    date = "March 2026",
    image = "",
    href = "#",
    accentColor = "#CC5500",
    index = 0,
}) {
    return (
        <Link href={href} style={{ textDecoration: "none" }}>
            <Box
                component={motion.article}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    bgcolor: "#111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                        transform: "translateY(-8px)",
                        borderColor: `${accentColor}40`,
                        boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${accentColor}10`,
                        "& .blog-card-image": {
                            transform: "scale(1.05)",
                        },
                        "& .blog-card-arrow": {
                            transform: "translateX(4px)",
                            opacity: 1,
                        },
                    },
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        position: "relative",
                        paddingTop: "56.25%",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        className="blog-card-image"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                    />
                    {/* Gradient overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "50%",
                            background: "linear-gradient(to top, #111, transparent)",
                        }}
                    />
                    {/* Category pill on image */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            px: 2,
                            py: 0.6,
                            borderRadius: "50px",
                            bgcolor: "rgba(0,0,0,0.6)",
                            border: `1px solid ${accentColor}50`,
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <Typography
                            variant="caption"
                            sx={{
                                color: accentColor,
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                fontSize: "0.65rem",
                            }}
                        >
                            {category}
                        </Typography>
                    </Box>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3.5, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "rgba(255,255,255,0.4)",
                            fontSize: "0.75rem",
                            letterSpacing: "0.04em",
                            mb: 1.5,
                            display: "block",
                        }}
                    >
                        {date} &nbsp;·&nbsp; {readingTime}
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            color: "#fff",
                            fontWeight: 800,
                            mb: 2,
                            fontSize: { xs: "1.15rem", md: "1.3rem" },
                            lineHeight: 1.3,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                            mb: 3,
                            flexGrow: 1,
                        }}
                    >
                        {excerpt}
                    </Typography>

                    {/* Read more link */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Typography
                            sx={{
                                color: accentColor,
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Read the Story
                        </Typography>
                        <ArrowForwardIcon
                            className="blog-card-arrow"
                            sx={{
                                fontSize: 16,
                                color: accentColor,
                                opacity: 0.6,
                                transition: "all 0.3s ease",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Link>
    );
}
