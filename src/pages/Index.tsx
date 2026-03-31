import SolarNav from "@/components/SolarNav";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ROICalculator from "@/components/ROICalculator";
import TechBento from "@/components/TechBento";
import ProjectsSection from "@/components/ProjectsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SolarFooter from "@/components/SolarFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SolarNav />
    <HeroSection />
    <PainSection />
    <ROICalculator />
    <TechBento />
    <ProjectsSection />
    <GuaranteeSection />
    <FAQSection />
    <CTASection />
    <SolarFooter />
  </div>
);

export default Index;
