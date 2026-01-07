"use client";

import { useState, useEffect, useCallback } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import HeroCards from "@/components/hero/HeroCard";
import Blog from "@/components/blog";
import { AstraSkeleton } from "@/components/skeleton-loader/AstraSkeleton";
import { Contact } from "@/components/contact";
import { ParticleBackground } from "@/components/particle-background";
// import  LoadingScreen  from "@/components/loading-screen"
import { LazySection } from "@/components/lazy-section";
import {
  HeroSkeleton,
  AboutSkeleton,
  SkillsSkeleton,
  ProjectsSkeleton,
  BlogSkeleton,
} from "@/components/skeleton-loader";
import { TimelineSkeleton } from "@/components/loading-states";
import { Navigation } from "@/components/navigation"; // Ensure Navigation is imported

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(
    null
  );

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionLoad = useCallback(
    (id: string) => {
      if (pendingScrollTarget === id) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop =
            element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
          setPendingScrollTarget(null); // Clear the pending target
        }
      }
    },
    [pendingScrollTarget]
  );

  // if (isLoading) {
  //   return <LoadingScreen onComplete={() => setIsLoading(false)} />
  // }

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      <ParticleBackground />
      {/* Pass setPendingScrollTarget to Navigation */}
      <Navigation setPendingScrollTarget={setPendingScrollTarget} />
      <LazySection
        id="hero"
        skeleton={<HeroSkeleton />}
        onLoad={handleSectionLoad}
      >
        <Hero />
      </LazySection>
      <LazySection
        id="about"
        skeleton={<AboutSkeleton />}
        onLoad={handleSectionLoad}
      >
        <About />
      </LazySection>
      <LazySection
        id="astra-marketing"
        skeleton={<AstraSkeleton />}
        onLoad={handleSectionLoad}
      >
        <HeroCards />
      </LazySection>
      <LazySection
        id="projects"
        skeleton={<ProjectsSkeleton />}
        onLoad={handleSectionLoad}
      >
        <Projects />
      </LazySection>
      <LazySection
        id="experience"
        skeleton={
          <div className="py-16 lg:py-32 bg-white">
            <div className="container mx-auto px-4">
              <TimelineSkeleton />
            </div>
          </div>
        }
        onLoad={handleSectionLoad}
      >
        <Experience />
      </LazySection>
      <LazySection
        id="blog"
        skeleton={<BlogSkeleton />}
        onLoad={handleSectionLoad}
      >
        <Blog />
      </LazySection>
      <LazySection
        id="skills"
        skeleton={<SkillsSkeleton />}
        onLoad={handleSectionLoad}
      >
        <Skills />
      </LazySection>
      <LazySection
        id="contact"
        skeleton={<AboutSkeleton />}
        onLoad={handleSectionLoad}
      >
        <Contact />
      </LazySection>
    </main>
  );
}
