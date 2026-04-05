import Navbar from "@/components/navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import { AnimatedCloudBackground } from "@/components/animated-cloud-background"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import TechnologiesSection from "@/components/technologies-section"
import { ParallaxBetweenSections } from "@/components/parallax-between-sections"
import CertificationsSection from "@/components/certifications-section"
import EducationSection from "@/components/education-section"
import LanguagesSection from "@/components/languages-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Animated Cloud Background */}
      <AnimatedCloudBackground />

      {/* Gradient overlay for better text readability */}
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-background/30 via-background/50 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <ParallaxBetweenSections>
          <ExperienceSection />
          <SkillsSection />
          <TechnologiesSection />
        </ParallaxBetweenSections>
        <CertificationsSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
