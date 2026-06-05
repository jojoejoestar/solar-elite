import SolarNav from "@/components/SolarNav";
import { DeferredCursorSunlight } from "@/components/DeferredCursorSunlight";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { PageScrollOrchestrator } from "@/components/motion/PageScrollOrchestrator";
import { PageAtmosphere } from "@/components/PageAtmosphere";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import PainSection from "@/components/PainSection";
import ROICalculator from "@/components/ROICalculator";
import TechBento from "@/components/TechBento";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SolarFooter from "@/components/SolarFooter";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
      <PageAtmosphere />
      <DeferredCursorSunlight />
      <PageScrollOrchestrator />
      <ScrollProgress />
      <SolarNav />
      <main className="relative z-[1]">
        <HeroSection />
        <SectionDivider variant="neutral" />
        <TrustMarquee />
        <SectionDivider variant="amber" />
        <PainSection />
        <SectionDivider variant="emerald" />
        <ROICalculator />
        <SectionDivider variant="amber" />
        <TechBento />
        <SectionDivider variant="neutral" />
        <ProcessSection />
        <SectionDivider variant="emerald" />
        <ProjectsSection />
        <SectionDivider variant="amber" />
        <GuaranteeSection />
        <SectionDivider variant="neutral" />
        <FAQSection />
        <SectionDivider variant="emerald" />
        <CTASection />
      </main>
      <SectionDivider variant="neutral" />
      <SolarFooter />
    </div>
  );
}
