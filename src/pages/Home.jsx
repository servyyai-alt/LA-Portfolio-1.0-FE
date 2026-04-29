import { lazy, Suspense } from "react";
import PageTransition from "@/components/common/PageTransition";
import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";

// Lazy load below-the-fold sections for performance
const CapabilitiesSection = lazy(() => import("@/sections/CapabilitiesSection"));
const WhyChooseUsSection = lazy(() => import("@/sections/WhyChooseUsSection"));
const AboutSection = lazy(() => import("@/sections/AboutSection"));
const MissionVisionSection = lazy(() => import("@/sections/MissionVisionSection"));
const IndustriesSection = lazy(() => import("@/sections/IndustriesSection"));
const CaseStudiesSection = lazy(() => import("@/sections/CaseStudiesSection"));
const ClientProjectsSection = lazy(() => import("@/sections/ClientProjectsSection"));
const ContactSection = lazy(() => import("@/sections/ContactSection"));

// Minimal skeleton for Suspense fallback
function SectionSkeleton() {
    return <div className="h-64 bg-cloud animate-pulse" />;
}

export default function Home() {
    return (
        <PageTransition>
            <HeroSection />
            <StatsSection />
            <Suspense fallback={<SectionSkeleton />}>
                <CapabilitiesSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <WhyChooseUsSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <AboutSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <MissionVisionSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <IndustriesSection />
            </Suspense>
            {/* <Suspense fallback={<SectionSkeleton />}>
                <CaseStudiesSection />
            </Suspense> */}
            <Suspense fallback={<SectionSkeleton />}>
                <ClientProjectsSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <ContactSection />
            </Suspense>
        </PageTransition>
    );
}