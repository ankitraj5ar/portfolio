import { PortfolioEffects } from "@/components/portfolio-effects";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ankit Raj",
            url: "https://ankitraj5ar.online",
            jobTitle: "Software Engineer",
            sameAs: [
              "https://github.com/ankitraj5ar",
              "https://linkedin.com/in/ankitraj5ar",
            ],
          }),
        }}
      />
      <PortfolioEffects />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
