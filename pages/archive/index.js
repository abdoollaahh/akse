import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import BlogCard from "../../components/BlogCard";
import ConversionCTA from "../../components/ConversionCTA";
import { useState } from "react";

const ACCENT = "#CC5500";

const categories = [
    { label: "All", value: "all" },
    { label: "Sacred Spaces", value: "sacred" },
    { label: "Industrial History", value: "industrial" },
    { label: "Luxury Living", value: "luxury" },
];

const posts = [
    {
        title: "The Silent Stones of Saidpur: A 3D Walkthrough of Time",
        excerpt:
            "A 500-year-old multi-faith village in the Margalla Hills — where Hindu temples, Sikh gurdwaras, and Muslim shrines stand shoulder to shoulder. Experience the convergence of civilisations through our 3D digital twin.",
        category: "Sacred Spaces",
        categoryValue: "sacred",
        readingTime: "14 min read",
        date: "March 2026",
        image: "https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2FXF_L4gLEWF92hxiT_TuWpCgns_C0bv5OqWpqYmrnvug.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3D2cec5b025054cfaf850715b901122780df5b7ebd",
        href: "/archive/saidpur-3d-walkthrough",
        accentColor: "#B8860B",
    },
    {
        title: "Steam and Steel: Reliving the Golden Age at Golra Railway Station",
        excerpt:
            "A colonial-era junction turned award-winning railway museum. Walk through 100-year-old Victorian coaches, trace the ghost tracks of the British Raj, and find the clock that stopped in 1947.",
        category: "Industrial History",
        categoryValue: "industrial",
        readingTime: "12 min read",
        date: "March 2026",
        image: "https://i.dawn.com/primary/2015/01/54c5fcdd0a507.jpg?r=1390485840",
        href: "/archive/golra-railway-museum",
        accentColor: "#0F4C5C",
    },
];

export default function Archive() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered =
        activeCategory === "all"
            ? posts
            : posts.filter((p) => p.categoryValue === activeCategory);

    return (
        <>
            <Head>
                <title>The Archive — Heritage Stories & 3D Virtual Tours | AKSE</title>
                <meta
                    name="description"
                    content="Long-form stories about Pakistan's most iconic heritage sites — brought to life through immersive 3D digital twins. Explore sacred spaces, industrial history, and luxury living."
                />
                <meta
                    name="keywords"
                    content="Digital Twin, Heritage Preservation, Islamabad Tourism, 3D Virtual Tour Pakistan, Immersive Storytelling"
                />
            </Head>

            {/* Hero */}
            <Box
                className="grain-texture"
                sx={{
                    pt: { xs: 18, md: 22 },
                    pb: { xs: 10, md: 14 },
                    bgcolor: "#0a0a0a",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                }}
            >
                {/* Ambient glows */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-20%",
                        left: "10%",
                        width: 400,
                        height: 400,
                        background: `radial-gradient(circle, ${ACCENT}15, transparent 70%)`,
                        pointerEvents: "none",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-10%",
                        right: "15%",
                        width: 300,
                        height: 300,
                        background: "radial-gradient(circle, #0F4C5C15, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />

                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                color: ACCENT,
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                mb: 2,
                                display: "block",
                                fontSize: "0.8rem",
                            }}
                        >
                            Stories · Heritage · Immersive Technology
                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{
                                color: "#fff",
                                fontWeight: 900,
                                mb: 3,
                                fontSize: { xs: "3rem", md: "4.5rem" },
                                letterSpacing: "-0.03em",
                                lineHeight: 1.05,
                            }}
                        >
                            The Archive
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.55)",
                                maxWidth: 600,
                                mx: "auto",
                                fontSize: { xs: "1.05rem", md: "1.2rem" },
                                lineHeight: 1.7,
                                mb: 6,
                            }}
                        >
                            Long-form photojournalism meets 3D technology. Every story is a doorway
                            into a place you can walk through — from anywhere in the world.
                        </Typography>

                        {/* Category tabs */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            sx={{
                                display: "flex",
                                gap: 1.5,
                                justifyContent: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            {categories.map((cat) => (
                                <Button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    sx={{
                                        px: 3,
                                        py: 1,
                                        borderRadius: "50px",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        textTransform: "none",
                                        color:
                                            activeCategory === cat.value ? "#fff" : "rgba(255,255,255,0.5)",
                                        bgcolor:
                                            activeCategory === cat.value
                                                ? `${ACCENT}25`
                                                : "rgba(255,255,255,0.04)",
                                        border: `1px solid ${activeCategory === cat.value ? `${ACCENT}60` : "rgba(255,255,255,0.08)"
                                            }`,
                                        "&:hover": {
                                            bgcolor: `${ACCENT}15`,
                                            borderColor: `${ACCENT}40`,
                                            color: "#fff",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {cat.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </div>
            </Box>

            {/* Posts Grid */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    bgcolor: "#0a0a0a",
                }}
            >
                <div className="container">
                    <Grid container spacing={4}>
                        {filtered.map((post, i) => (
                            <Grid item xs={12} md={6} key={post.href}>
                                <BlogCard
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    category={post.category}
                                    readingTime={post.readingTime}
                                    date={post.date}
                                    image={post.image}
                                    href={post.href}
                                    accentColor={post.accentColor}
                                    index={i}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    {filtered.length === 0 && (
                        <Box sx={{ textAlign: "center", py: 10 }}>
                            <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "1.1rem" }}>
                                More stories in this category are coming soon.
                            </Typography>
                        </Box>
                    )}
                </div>
            </Box>

            {/* Footer CTA */}
            <Box sx={{ bgcolor: "#0a0a0a" }}>
                <ConversionCTA
                    headline="Want to Preserve Your Space?"
                    description="Whether it's a 500-year-old village or a modern architectural marvel — we build digital twins that freeze time. Start a conversation."
                    accentColor={ACCENT}
                    gradientFrom="#2D2D2D"
                    gradientTo="#CC5500"
                />
            </Box>
        </>
    );
}
