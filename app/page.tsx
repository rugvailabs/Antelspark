import { Capabilities } from "@/components/sections/home/capabilities";
import { ContactCta } from "@/components/sections/home/contact-cta";
import { Hero } from "@/components/sections/home/hero";
import { Industries } from "@/components/sections/home/industries";
import { SelectedWork } from "@/components/sections/home/selected-work";
import { ServicesIndex } from "@/components/sections/home/services-index";
import { Studio } from "@/components/sections/home/studio";
import { TechExpertise } from "@/components/sections/home/tech-expertise";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <ServicesIndex />
      <SelectedWork />
      <Studio />
      <TechExpertise />
      <Industries />
      <ContactCta />
    </>
  );
}
