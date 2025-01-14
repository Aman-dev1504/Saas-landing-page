import Hero from "@/components/hero";
import Features from "@/components/features";
import Stats from "@/components/stats";
import HowItWorks from "@/components/how-it-works";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Pricing />
      <Testimonials />
    </div>
  );
}