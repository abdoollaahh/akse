import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import BlogHero from "../../components/BlogHero";
import HeritageTechSidebar from "../../components/HeritageTechSidebar";
import DiasporaConnection from "../../components/DiasporaConnection";
import TreasureHunt from "../../components/TreasureHunt";
import ConversionCTA from "../../components/ConversionCTA";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GridViewIcon from "@mui/icons-material/GridView";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VrpanoIcon from "@mui/icons-material/Vrpano";

const ACCENT = "#B8860B";

const saidpurSpecs = [
    {
        icon: <LocationOnIcon sx={{ fontSize: 22 }} />,
        label: "Location",
        value: "Saidpur Village, Margalla Hills, Islamabad",
    },
    {
        icon: <GridViewIcon sx={{ fontSize: 22 }} />,
        label: "Scan Density",
        value: "380 Million Data Points",
    },
    {
        icon: <CameraAltIcon sx={{ fontSize: 22 }} />,
        label: "Tech Used",
        value: "LiDAR + 4K Photogrammetry",
    },
    {
        icon: <VrpanoIcon sx={{ fontSize: 22 }} />,
        label: "Best Experienced In",
        value: "VR Headset / Full Screen",
    },
];

export default function SaidpurPost() {
    return (
        <>
            <Head>
                <title>
                    The Silent Stones of Saidpur: A 3D Walkthrough of Time | AKSE — The Archive
                </title>
                <meta
                    name="description"
                    content="Walk through 500 years of multi-faith heritage at Saidpur Village, Islamabad. Explore Hindu temples, Sikh gurdwaras, and Muslim shrines through our immersive 3D Digital Twin."
                />
                <meta
                    name="keywords"
                    content="Digital Twin, Heritage Preservation, Islamabad Tourism, 3D Virtual Tour Pakistan, Immersive Storytelling, Saidpur Village, Margalla Hills"
                />
            </Head>

            {/* Hero */}
            <BlogHero
                headline="The Silent Stones of Saidpur: A 3D Walkthrough of Time"
                category="Sacred Spaces"
                readingTime="14 min read"
                date="March 2026"
                backgroundImage="https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2FXF_L4gLEWF92hxiT_TuWpCgns_C0bv5OqWpqYmrnvug.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3D2cec5b025054cfaf850715b901122780df5b7ebd"
                accentColor={ACCENT}
            />

            {/* Article Body */}
            <Box
                sx={{
                    bgcolor: "#0a0a0a",
                    color: "#fff",
                    py: { xs: 8, md: 12 },
                }}
            >
                <div className="container">
                    <Box className="blog-body" sx={{ maxWidth: 760, mx: "auto" }}>
                        {/* ─── THE HOOK ─── */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.8)",
                                    mb: 4,
                                    "&::first-letter": {
                                        fontSize: "3.5rem",
                                        fontWeight: 900,
                                        float: "left",
                                        lineHeight: 1,
                                        mr: 1.5,
                                        mt: 0.5,
                                        color: ACCENT,
                                        fontFamily: '"Plus Jakarta Sans", serif',
                                    },
                                }}
                            >
                                The air changes when you step off the main road and onto the cobblestones
                                of Saidpur Village. The noise of Islamabad — the horns, the construction,
                                the restless hum of a capital in perpetual motion — falls away. In its
                                place, a silence settles. Not the silence of emptiness, but the silence of
                                accumulated time. Five hundred years of it.
                            </Typography>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 4,
                                }}
                            >
                                To your left, a Hindu temple rises in terracotta and sandstone, its
                                shikhara still reaching for a sky it has watched change for centuries. To
                                your right, the modest walls of a Sikh gurdwara — its doors closed now,
                                but its history still breathing through the cracks. Ahead, a mosque whose
                                call to prayer once blended with temple bells and Gurbani chants in a
                                symphony that existed nowhere else on earth.
                            </Typography>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 5,
                                }}
                            >
                                This is Saidpur. And it is disappearing — not in a dramatic collapse, but
                                in the slow, quiet erosion that claims all things left unprotected from
                                time.
                            </Typography>
                        </Box>

                        {/* ─── THE PROBLEM ─── */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: ACCENT,
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    fontSize: "0.75rem",
                                    display: "block",
                                    mb: 2,
                                }}
                            >
                                The Problem
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    mb: 4,
                                    fontSize: { xs: "1.6rem", md: "2rem" },
                                    lineHeight: 1.3,
                                }}
                            >
                                Heritage That Fades While the World Looks Away
                            </Typography>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 4,
                                }}
                            >
                                Saidpur Village is listed on no UNESCO register. It appears in no
                                international travel guide of consequence. The restoration efforts of the
                                early 2000s brought fresh paint and new restaurants, but the soul of the
                                place — the architectural evidence of three faiths coexisting in a single
                                Himalayan foothill — remains largely undocumented in any meaningful,
                                spatial way.
                            </Typography>

                            {/* Pullquote */}
                            <Box
                                className="blog-pullquote"
                                sx={{
                                    borderLeft: `3px solid ${ACCENT}`,
                                    pl: 4,
                                    py: 2,
                                    my: 5,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                                        fontWeight: 600,
                                        fontStyle: "italic",
                                        color: "rgba(255,255,255,0.9)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    &ldquo;A photograph shows you a wall. A 3D digital twin lets you stand
                                    in front of it, look up at its carvings, and understand — viscerally —
                                    that this stone was placed here before the Mughal Empire fell.&rdquo;
                                </Typography>
                            </Box>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 4,
                                }}
                            >
                                Flat photography cannot communicate scale. It cannot convey the spatial
                                relationship between the temple and the mosque — how they face each other
                                across a narrow square, close enough to share shadows. It cannot give
                                you the elevation of the terrain, the way the village climbs the hillside,
                                each layer of faith built slightly above the last, as if reaching toward
                                the Margalla peaks.
                            </Typography>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 5,
                                }}
                            >
                                And for the diaspora — the millions of Pakistanis who grew up hearing
                                stories of this village but have never set foot on its stones — there has
                                been no way to truly experience it. Until now.
                            </Typography>
                        </Box>

                        {/* ─── THE SOLUTION ─── */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: ACCENT,
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    fontSize: "0.75rem",
                                    display: "block",
                                    mb: 2,
                                }}
                            >
                                The Solution
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    mb: 4,
                                    fontSize: { xs: "1.6rem", md: "2rem" },
                                    lineHeight: 1.3,
                                }}
                            >
                                A 3D Digital Twin That Freezes Time
                            </Typography>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 4,
                                }}
                            >
                                Our team spent three days in Saidpur with LiDAR scanners and
                                photogrammetry equipment, capturing 380 million data points. The result
                                is a complete digital twin of the village — a spatial, navigable,
                                centimetre-accurate replica that exists in the cloud and can be accessed
                                from any device, anywhere in the world.
                            </Typography>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 4,
                                }}
                            >
                                This is not a 360° photo. This is not a video. It is immersive
                                storytelling at its most fundamental: you move through the space at your
                                own pace, looking where you choose, pausing where something catches your
                                eye. The technology becomes invisible. What remains is the experience.
                            </Typography>

                            <Typography
                                component="p"
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                                    lineHeight: 2,
                                    color: "rgba(255,255,255,0.75)",
                                    mb: 5,
                                }}
                            >
                                Our immersive 3D walkthrough is where Saidpur truly reveals
                                itself. Navigate through the village and it unfolds around you —
                                every roof, every courtyard, every elevation change rendered in
                                centimetre-accurate detail. You can see how the Hindu temple&rsquo;s
                                shikhara rises above the surrounding structures. You can trace the
                                footpath from the mosque to the gurdwara. You can understand, for the
                                first time, the spatial harmony of three faiths sharing one hillside.
                                This is something a 2D photograph can never accomplish.
                            </Typography>
                        </Box>

                        {/* ─── WHAT TO LOOK FOR ─── */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: ACCENT,
                                    fontWeight: 700,
                                    letterSpacing: "0.15em",
                                    fontSize: "0.75rem",
                                    display: "block",
                                    mb: 2,
                                }}
                            >
                                What to Look For
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    color: "#fff",
                                    fontWeight: 800,
                                    mb: 5,
                                    fontSize: { xs: "1.6rem", md: "2rem" },
                                    lineHeight: 1.3,
                                }}
                            >
                                Three Moments That Will Stop You in Your Tracks
                            </Typography>

                            {/* Point 1 */}
                            <Box sx={{ mb: 5 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            bgcolor: `${ACCENT}20`,
                                            border: `1px solid ${ACCENT}50`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: ACCENT,
                                                fontWeight: 900,
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            01
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}
                                    >
                                        The Temple&rsquo;s Shikhara from Above
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "1.05rem",
                                        lineHeight: 1.9,
                                        color: "rgba(255,255,255,0.7)",
                                        pl: { xs: 0, md: 7 },
                                    }}
                                >
                                    Navigate the 3D walkthrough and look up. The Hindu
                                    temple&rsquo;s tower — its shikhara — rises above every other
                                    structure in the village. From this vantage point, you can see how
                                    the entire settlement was organised around it. The elevation
                                    difference between the temple platform and the village square is
                                    something no photograph has ever captured.
                                </Typography>
                            </Box>

                            {/* Point 2 */}
                            <Box sx={{ mb: 5 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            bgcolor: `${ACCENT}20`,
                                            border: `1px solid ${ACCENT}50`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: ACCENT,
                                                fontWeight: 900,
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            02
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}
                                    >
                                        The Stone Carvings on the Inner Wall
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "1.05rem",
                                        lineHeight: 1.9,
                                        color: "rgba(255,255,255,0.7)",
                                        pl: { xs: 0, md: 7 },
                                    }}
                                >
                                    Walk inside the temple courtyard and look up. The 4K photogrammetry
                                    captures details that the naked eye might miss on a casual visit —
                                    lotus motifs carved into sandstone, Sanskrit inscriptions fading at
                                    the edges, the grain of wood that has been weathering since the
                                    Sikh period. Zoom in. These details are not decoration. They are
                                    a civilisation&rsquo;s signature.
                                </Typography>
                            </Box>

                            {/* Point 3 */}
                            <Box sx={{ mb: 5 }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            bgcolor: `${ACCENT}20`,
                                            border: `1px solid ${ACCENT}50`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: ACCENT,
                                                fontWeight: 900,
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            03
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}
                                    >
                                        The Shared Square at Dusk
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: "1.05rem",
                                        lineHeight: 1.9,
                                        color: "rgba(255,255,255,0.7)",
                                        pl: { xs: 0, md: 7 },
                                    }}
                                >
                                    Navigate to the central square where the paths from the temple,
                                    the mosque, and the gurdwara converge. This is the geographical
                                    and spiritual heart of Saidpur — the single point where three
                                    faiths once met, traded, and prayed within earshot of one another.
                                    Stand here in the 3D walkthrough and rotate your view slowly.
                                    The geometry of tolerance is built into the architecture itself.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box>

            {/* Heritage Tech Sidebar */}
            <Box sx={{ bgcolor: "#0a0a0a" }}>
                <HeritageTechSidebar
                    title="Heritage Tech — Saidpur Village"
                    specs={saidpurSpecs}
                    accentColor={ACCENT}
                />
            </Box>

            {/* Diaspora Section */}
            <DiasporaConnection accentColor={ACCENT} />

            {/* Treasure Hunt */}
            <Box sx={{ bgcolor: "#0a0a0a" }}>
                <TreasureHunt
                    riddle="Hidden in our 3D scan of Saidpur is a carved lotus flower with exactly eight petals — the only one of its kind in the temple. It's at eye level, but most visitors walk right past it. Can you find it?"
                    ctaLabel="Launch the 3D Tour & Start Hunting"
                    ctaHref="#"
                    accentColor={ACCENT}
                />
            </Box>

            {/* CTA */}
            <Box sx={{ bgcolor: "#0a0a0a" }}>
                <ConversionCTA
                    headline="Step Into the Past"
                    description="Experience the full 3D tour of Saidpur Village. Walk through five centuries of multi-faith heritage — from your phone, your laptop, or your VR headset."
                    accentColor={ACCENT}
                    gradientFrom="#3D2B1F"
                    gradientTo="#B8860B"
                />
            </Box>
        </>
    );
}
