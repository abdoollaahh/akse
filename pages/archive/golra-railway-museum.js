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

const ACCENT = "#0F4C5C";

const golraSpecs = [
    {
        icon: <LocationOnIcon sx={{ fontSize: 22 }} />,
        label: "Location",
        value: "Golra Sharif, Islamabad",
    },
    {
        icon: <GridViewIcon sx={{ fontSize: 22 }} />,
        label: "Scan Density",
        value: "450 Million Data Points",
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

export default function GolraPost() {
    return (
        <>
            <Head>
                <title>
                    Steam and Steel: Reliving the Golden Age at Golra Railway Station | AKSE — The Archive
                </title>
                <meta
                    name="description"
                    content="Step aboard 100-year-old Victorian coaches and explore the award-winning Golra Railway Museum through our immersive 3D Digital Twin. Colonial-era architecture meets cutting-edge preservation technology."
                />
                <meta
                    name="keywords"
                    content="Digital Twin, Heritage Preservation, Islamabad Tourism, 3D Virtual Tour Pakistan, Immersive Storytelling, Golra Railway Station, Golra Sharif, Railway Museum"
                />
            </Head>

            {/* Hero */}
            <BlogHero
                headline="Steam and Steel: Reliving the Golden Age at Golra Railway Station"
                category="Industrial History"
                readingTime="12 min read"
                date="March 2026"
                backgroundImage="https://i.dawn.com/primary/2015/01/54c5fcdd0a507.jpg?r=1390485840"
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
                                You hear the whistle before you see the station. Or at least, you imagine
                                you do — a phantom sound from a phantom era, carried on the wind that
                                sweeps across the Pothohar Plateau and through the sidings of Golra
                                Sharif. The steam locomotive standing on Platform 1 hasn&rsquo;t moved
                                since 1997. Its boiler is cold. Its firebox is dark. But its presence
                                is enormous — a 120-tonne monument to an age when Pakistan&rsquo;s
                                railways were the arteries of a nation.
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
                                Golra Railway Station is not just a station. It is a junction where
                                history changed direction. Built in 1882 as part of the
                                British Raj&rsquo;s North Western Railway, this is where the main line
                                split — one branch climbing toward Peshawar and the Khyber Pass, the
                                other descending toward Karachi and the sea. Every train that connected
                                the subcontinent&rsquo;s north to its south passed through these
                                platforms.
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
                                Today, it stands as an award-winning railway museum — one of the finest
                                in South Asia. And for the first time, you can walk through it without
                                ever leaving your living room.
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
                                A Museum That Time Is Slowly Reclaiming
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
                                The coaches of the Golra Railway Museum are Victorian masterpieces — teak
                                panelling, brass fittings, leather seats worn smooth by a century of
                                passengers. The SG-class locomotive, imported from the Vulcan Foundry in
                                Newton-le-Willows, England, in 1911, is one of fewer than a dozen
                                surviving examples in the world. But teak warps. Brass tarnishes. Leather
                                cracks. The Islamabad sun and the monsoon rains are patient, relentless
                                adversaries.
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
                                    &ldquo;The most important thing a museum can do in the digital age is
                                    not to resist technology — it is to use technology to make the
                                    artefacts immortal.&rdquo;
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
                                Visitor numbers remain modest. The station is a 30-minute drive from
                                central Islamabad, and for the global audience — historians, train
                                enthusiasts, the Pakistani diaspora — it might as well be on the moon.
                                You cannot convey the interior of a Victorian first-class coach through
                                an Instagram reel. The proportions, the woodwork, the particular quality
                                of light filtering through 100-year-old glass — these are spatial
                                experiences. They require spatial documentation.
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
                                Interior Scanning — Walking Through a Century-Old Train Car from Your Smartphone
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
                                Our team deployed LiDAR scanners inside three of Golra&rsquo;s most
                                historically significant coaches — including the 1911
                                first-class carriage and the 1920s dining car. The result is a 3D
                                digital twin built from 450 million data points that captures every
                                rivet, every grain of teak, every brass luggage rack overhead.
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
                                The &lsquo;Interior Scan&rsquo; mode is where the magic happens. Open
                                the 3D virtual tour on your smartphone, and you are standing at the
                                entrance of a coach that last carried passengers when Quaid-e-Azam
                                was alive. Swipe forward and you walk down the aisle. The wooden
                                compartments open on either side — each one captured in 4K
                                photogrammetric detail. Look up and you see the original ventilation
                                grilles. Look down and you see the worn floorboards where a thousand
                                journeys left their mark.
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
                                It is an uncanny experience. The technology dissolves. You are simply
                                there — in a train car that smells of old varnish and departed decades,
                                exploring at your own pace, noticing details that even on-site visitors
                                might overlook. This is heritage preservation at its most intimate: not
                                a museum under glass, but a space you can inhabit.
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
                                Three Details That Reveal the Golden Age
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
                                        The Vulcan Foundry Maker&rsquo;s Plate
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
                                    Walk to the front of the SG-class locomotive and look for the
                                    brass plate on the boiler. It reads &ldquo;Vulcan Foundry,
                                    Newton-le-Willows, 1911.&rdquo; This single detail connects Golra
                                    to the industrial heartland of Lancashire, England — a tangible
                                    link between two civilisations separated by 6,000 kilometres and
                                    a century. Our 4K scan captures every letter, every scratch, every
                                    patina of age.
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
                                        The First-Class Compartment Woodwork
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
                                    Step inside the first-class carriage and look at the partition
                                    walls. The teak has been carved with Art Deco geometric patterns —
                                    a design language that was sweeping through London and Paris when
                                    this coach was built. Run your gaze along the luggage rack above.
                                    It&rsquo;s brass, hand-riveted, designed for steamer trunks and
                                    leather Gladstone bags. In the 3D tour, you can zoom into the
                                    joinery and see where the craftsman&rsquo;s chisel left its mark.
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
                                        The Station Master&rsquo;s Office
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
                                    Navigate through the main building to the Station Master&rsquo;s
                                    office. The telegraph machine is still on the desk. The timetable
                                    board on the wall still shows destinations — Peshawar, Lahore,
                                    Karachi — as if the next departure is imminent. Our scan captures
                                    the room exactly as it was left: a desk lamp, a ledger, a chair
                                    pushed back as if someone has just stood up and stepped out for
                                    chai. They never came back.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box>

            {/* Heritage Tech Sidebar */}
            <Box sx={{ bgcolor: "#0a0a0a" }}>
                <HeritageTechSidebar
                    title="Heritage Tech — Golra Railway Museum"
                    specs={golraSpecs}
                    accentColor={ACCENT}
                />
            </Box>

            {/* Diaspora Section */}
            <DiasporaConnection
                accentColor={ACCENT}
                heading="For the Ones Who Left"
                body={`There is a retired railwayman in Jeddah who spent 30 years on Pakistan Railways before emigrating. He describes the smell of coal smoke and machine oil to his grandchildren the way other men describe perfume — with reverence, with longing. There are engineers in Houston and accountants in London whose fathers and grandfathers rode these very coaches.

This tour is for them.

With a single link shared on a family WhatsApp group, a Pakistani in Toronto can walk through the first-class carriage at Golra and show their children exactly what their grandfather's journey looked like. They can stand on the platform and look down the tracks that once connected a continent. They can read the maker's plate from Lancashire and understand — in a single, spatial moment — the vast, interconnected history they carry in their blood.

We do not build technology for technology's sake. We build it so that the distance between a diaspora family's kitchen table in Mississauga and a railway platform in Islamabad becomes, for a few extraordinary minutes, zero.`}
            />

            {/* Treasure Hunt */}
            <Box sx={{ bgcolor: "#0a0a0a" }}>
                <TreasureHunt
                    riddle="Somewhere in our 3D scan of the Golra Museum is a clock frozen at 10:15 AM from 1947. Can you find it?"
                    ctaLabel="Launch the 3D Tour & Start Hunting"
                    ctaHref="#"
                    accentColor={ACCENT}
                />
            </Box>

            {/* CTA */}
            <Box sx={{ bgcolor: "#0a0a0a" }}>
                <ConversionCTA
                    headline="Step Into the Past"
                    description="Experience the full 3D tour of Golra Railway Station. Walk through century-old coaches, explore the platforms, and discover the artefacts of Pakistan's golden age of rail."
                    accentColor={ACCENT}
                    gradientFrom="#0A3540"
                    gradientTo="#0F4C5C"
                />
            </Box>
        </>
    );
}
