import Head from "next/head";
import VerticalHero from "../../components/VerticalHero";
import ProblemSolutionGap from "../../components/ProblemSolutionGap";
import InteractiveShowcase from "../../components/InteractiveShowcase";
import TechSpecs from "../../components/TechSpecs";
import SocialProof from "../../components/SocialProof";
import ConversionCTA from "../../components/ConversionCTA";

const TERRACOTTA = "#A0522D";
const AMBER = "#D4A574";

export default function HeritageCultural() {
    return (
        <>
            <Head>
                <title>Digital Twins for Heritage Sites & Havelis | AKSE — Preserving Legacy Digitally</title>
                <meta
                    name="description"
                    content="Turn centuries of craftsmanship into an immersive digital experience. Let every jharokha, jaal, and fresco speak for itself."
                />
            </Head>

            {/* 1 — Hero */}
            <VerticalHero
                headline="Your Haveli Tells a 300-Year Story. Don't Let a Flat Photo Be the First Chapter."
                subheadline="Turn centuries of craftsmanship into an immersive digital experience. Let every jharokha and jaal speak for itself."
                ctaLabel="Request a WhatsApp Demo"
                ctaHref="https://wa.me/923001234567?text=Hi%2C%20I%27m%20interested%20in%20a%20Digital%20Twin%20for%20my%20heritage%20property.%20Can%20you%20share%20a%20demo%3F"
                secondaryCta={{ label: "Explore Our Work", href: "/services" }}
                gradientColors={[TERRACOTTA, AMBER, TERRACOTTA]}
                accentColor={TERRACOTTA}
            />

            {/* 2 — Problem / Solution Gap */}
            <ProblemSolutionGap
                stat="8s"
                statLabel="average time a potential client spends on a static photo gallery before moving on"
                painPoints={[
                    {
                        emoji: "📸",
                        title: "Photos Can't Capture Scale",
                        desc: "A WhatsApp photo cannot convey 40-foot ceilings, hand-carved frescoes, or the grandeur of a Mughal-era courtyard.",
                    },
                    {
                        emoji: "🎪",
                        title: "Event Planners Need Spatial Data",
                        desc: "A wedding planner can't visualise 300 guests in a courtyard from a wide-angle photo. They need to walk the space.",
                    },
                    {
                        emoji: "🏛️",
                        title: "Heritage Deserves More",
                        desc: "Your property isn't a commodity — it's a living monument. Marketing it like a hotel room undermines its status.",
                    },
                ]}
                solutionTitle="Let Them Walk Through History"
                solutionDescription="A bespoke digital twin transforms your heritage property into an interactive experience. Event planners walk the courtyard to plan table layouts. Heritage tourists explore frescoes up close. International clients feel the space — before they book the flight."
                solutionImage="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop"
                accentColor={TERRACOTTA}
            />

            {/* 3 — Interactive Showcase: Dollhouse vs Walkthrough */}
            <InteractiveShowcase
                dollhouseTitle="Dollhouse View"
                dollhouseDesc="Present the complete haveli compound as a navigable 3D miniature. Show the main hall, courtyard, upper galleries, and rooftop terraces in one sweeping view that no drone shot can match."
                dollhouseImage="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop"
                dollhouseCaption="Full property overview — every wing, every courtyard"
                walkthroughTitle="First-Person Walkthrough"
                walkthroughDesc="Let your visitor stand under the central dome. Let them trace the tile patterns on the walls, look up at the jharokhas, and imagine their event unfolding in this magnificent space."
                walkthroughImage="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop"
                walkthroughCaption="Immersive heritage experience"
                accentColor={TERRACOTTA}
                bgColor="#faf6f1"
            />

            {/* 4 — Tech Specs */}
            <TechSpecs
                accentColor={TERRACOTTA}
                specs={[
                    {
                        icon: "📡",
                        stat: "LiDAR",
                        title: "Laser-Precision Mapping",
                        desc: "Every carved surface, arch, and column captured to the millimetre — ideal for preservation records and restoration planning.",
                    },
                    {
                        icon: "📸",
                        stat: "4K HDR",
                        title: "True-to-Life Frescoes",
                        desc: "Hand-painted murals and inlay work reproduced in colour-accurate, photorealistic detail. Your artisans' work, honoured digitally.",
                    },
                    {
                        icon: "📐",
                        stat: "±1mm",
                        title: "Architect-Ready Measurements",
                        desc: "Restoration teams and event designers can measure any dimension directly from the digital twin. No physical access required.",
                    },
                    {
                        icon: "🔗",
                        stat: "One Link",
                        title: "Share Anywhere",
                        desc: "Send the full interactive experience on WhatsApp, embed it on your website, or project it in investor presentations.",
                    },
                ]}
            />

            {/* 5 — Social Proof */}
            <SocialProof
                testimonial={{
                    quote:
                        "We used to send photo albums to international event planners. Now we send a single link. They walk through the haveli themselves and arrive with a complete vision. Our conversion rate for destination weddings has doubled.",
                    name: "Rana Tariq Mahmood",
                    role: "Director, Barood Khana Haveli, Lahore",
                }}
                stats={[
                    { value: "2×", label: "Longer session time vs photo galleries" },
                    { value: "85%", label: "Of event planners proceed to site visit" },
                    { value: "100%", label: "Archival-grade preservation fidelity" },
                    { value: "12+", label: "Heritage sites digitised across Punjab" },
                ]}
                accentColor={TERRACOTTA}
            />

            {/* 6 — Conversion CTA */}
            <ConversionCTA
                headline="Your Heritage Deserves a Digital Legacy"
                description="Whether you're hosting destination weddings, attracting cultural tourists, or preserving a national treasure — a digital twin is the first step."
                whatsappNumber="923001234567"
                whatsappMessage="Hi, I manage a heritage property / event space and I'm interested in a Digital Twin. Can we discuss?"
                accentColor={TERRACOTTA}
                gradientFrom="#A0522D"
                gradientTo="#D4A574"
            />
        </>
    );
}
