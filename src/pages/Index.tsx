import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { GamePreview } from "@/components/sections/GamePreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <GamePreview />
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
