import { Footer, Header } from "@/components/layout";
import { HeroSection, FeaturesSection, PricingSection, TestimonialsSection, ContactSection } from "./components";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
