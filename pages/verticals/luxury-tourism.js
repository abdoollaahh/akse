import Head from "next/head";
import VerticalHero from "../../components/VerticalHero";
import ProblemSolutionGap from "../../components/ProblemSolutionGap";
import InteractiveShowcase from "../../components/InteractiveShowcase";
import TechSpecs from "../../components/TechSpecs";
import SocialProof from "../../components/SocialProof";
import ConversionCTA from "../../components/ConversionCTA";

const ACCENT = "#1B4332";
const GOLD = "#B8860B";

export default function LuxuryTourism() {
    return (
        <>
            <Head>
                <title>Digital Twins for Luxury Lodges | AKSE — Bespoke Virtual Experiences</title>
                <meta
                    name="description"
                    content="Transform your boutique Northern lodge into an immersive digital twin. Eliminate the distance between your guest's screen and your front door."
                />
            </Head>

            {/* 1 — Hero */}
            <VerticalHero
                headline="Your Lodge Already Has a Waiting Room. It's Called the Internet."
                subheadline="Eliminate the distance between your guest's screen and your front door. Build trust before the first footstep."
                ctaLabel="Request a WhatsApp Demo"
                ctaHref="https://wa.me/923001234567?text=Hi%2C%20I%27m%20interested%20in%20a%20Digital%20Twin%20for%20my%20luxury%20lodge.%20Can%20you%20share%20a%20demo%3F"
                secondaryCta={{ label: "View Our Portfolio", href: "/services" }}
                gradientColors={[ACCENT, GOLD, ACCENT]}
                accentColor={GOLD}
            />

            {/* 2 — Problem / Solution Gap */}
            <ProblemSolutionGap
                stat="73%"
                statLabel="of luxury travellers leave a listing within 8 seconds when they only see flat gallery photos"
                painPoints={[
                    {
                        emoji: "📱",
                        title: "WhatsApp Gallery Syndrome",
                        desc: "Your concierge sends 15 compressed photos on WhatsApp. The guest swipes twice and moves on to the next lodge.",
                    },
                    {
                        emoji: "🏔️",
                        title: "No Spatial Context",
                        desc: "A photo of a balcony can't convey the Karakoram panorama outside. Your most valuable view is invisible.",
                    },
                    {
                        emoji: "🤝",
                        title: "The Trust Deficit",
                        desc: "'Is the room really this nice?' Every luxury guest thinks it. Static photos can never fully answer it.",
                    },
                ]}
                solutionTitle="Step Inside — Before You Arrive"
                solutionDescription="A bespoke digital twin lets your guest walk through every suite, explore the lounge by the fireplace, and gaze at the mountain view from the terrace — all from their phone. It's not a photo. It's presence."
                solutionImage="https://images.unsplash.com/photo-1611821376205-3d0bf56c0ee2?q=80&w=1200&auto=format&fit=crop"
                accentColor={GOLD}
            />

            {/* 3 — Interactive Showcase: Dollhouse vs Walkthrough */}
            <InteractiveShowcase
                dollhouseTitle="Dollhouse View"
                dollhouseDesc="Present your entire lodge as an interactive 3D miniature. Investors, travel agents, and discerning guests see the complete property in seconds — every floor, every wing, every view corridor."
                dollhouseImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                dollhouseCaption="Complete lodge overview — instant comprehension"
                walkthroughTitle="First-Person Walkthrough"
                walkthroughDesc="Place your guest inside the best suite. Let them open the curtains, step onto the balcony, and look up at the peaks. This is the emotional moment that converts browsing into booking."
                walkthroughImage="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
                walkthroughCaption="Immersive room-by-room experience"
                accentColor={GOLD}
                bgColor="#faf8f4"
            />

            {/* 4 — Tech Specs */}
            <TechSpecs accentColor={GOLD} />

            {/* 5 — Social Proof */}
            <SocialProof
                testimonial={{
                    quote:
                        "We embedded the digital twin on our website and shared the link on WhatsApp. Within the first month, direct enquiries jumped by 40%. Guests arrive already knowing the property — they trust it before they check in.",
                    name: "Karim Shah",
                    role: "General Manager, Eagle's Nest Lodge, Duikar",
                }}
                stats={[
                    { value: "40%", label: "Increase in direct bookings" },
                    { value: "93%", label: "Viewer engagement rate" },
                    { value: "3.2×", label: "Longer session time on site" },
                    { value: "60%", label: "Fewer 'is it really like this?' queries" },
                ]}
                accentColor={GOLD}
            />

            {/* 6 — Conversion CTA */}
            <ConversionCTA
                headline="Your Next Guest Is Scrolling Right Now"
                description="Give them a reason to stop. A digital twin isn't a cost — it's the most persuasive sales tool your lodge has ever had."
                whatsappNumber="923001234567"
                whatsappMessage="Hi, I manage a luxury lodge in Northern Pakistan and I'm interested in a Digital Twin. Can we schedule a demo?"
                accentColor={GOLD}
                gradientFrom="#1B4332"
                gradientTo="#B8860B"
            />
        </>
    );
}
