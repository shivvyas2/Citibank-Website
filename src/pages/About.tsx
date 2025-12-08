import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/shared/PageHero";
import { AboutSection, Values, Mission } from "@/components/sections/about";

export default function About() {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutSection />
      <Values />
      <Mission />
      <Footer />
    </PageLayout>
  );
}

