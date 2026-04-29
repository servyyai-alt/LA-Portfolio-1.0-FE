import PageTransition from "@/components/common/PageTransition";
import ProjectHeroSection from "@/sections/ProjectHeroSection";
import ProjectSection from "@/sections/ProjectSection";

export default function Projects() {
    return (
        <PageTransition>
            <ProjectHeroSection />
            <ProjectSection />
        </PageTransition>
    );
}