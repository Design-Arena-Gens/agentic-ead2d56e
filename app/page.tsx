import { CallToAction } from "@/components/CallToAction";
import { CaseStudies } from "@/components/CaseStudies";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <Navigation />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <FeatureGrid />
        <ProcessTimeline />
        <TestimonialsMarquee />
        <CaseStudies />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
