import dynamic from "next/dynamic";
import SolarNav from "@/components/SolarNav";
import { DeferredCursorSunlight } from "@/components/DeferredCursorSunlight";
import { DeferredPageAtmosphere } from "@/components/DeferredPageAtmosphere";
import { DeferredMotionExtras } from "@/components/DeferredMotionExtras";
import HeroSection from "@/components/HeroSection";
import TrustMarquee from "@/components/TrustMarquee";
import { SectionDivider } from "@/components/ui/SectionDivider";

const PainSection = dynamic(() => import("@/components/PainSection"));
const ROICalculator = dynamic(() => import("@/components/ROICalculator"));
const TechBento = dynamic(() => import("@/components/TechBento"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const GuaranteeSection = dynamic(() => import("@/components/GuaranteeSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CTASection = dynamic(() => import("@/components/CTASection"));
const SolarFooter = dynamic(() => import("@/components/SolarFooter"));

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
      <div className="page-static-backdrop" aria-hidden />
      <DeferredPageAtmosphere />
      <DeferredCursorSunlight />
      <DeferredMotionExtras />
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
