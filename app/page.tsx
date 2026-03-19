"use client"

import { LanguageProvider } from "@/lib/language-context"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import TechnologiesSection from "@/components/technologies-section"
import CertificationsSection from "@/components/certifications-section"
import EducationSection from "@/components/education-section"
import LanguagesSection from "@/components/languages-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        {/* Cloud Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-background" />

          {/* Clouds */}
          <div className="absolute -top-24 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-[999px] bg-muted/50 blur-3xl dark:bg-muted/25" />
          <div className="absolute top-24 -left-40 h-72 w-[44rem] rounded-[999px] bg-secondary/60 blur-3xl dark:bg-secondary/25" />
          <div className="absolute top-72 -right-48 h-72 w-[46rem] rounded-[999px] bg-muted/45 blur-3xl dark:bg-muted/20" />
          <div className="absolute bottom-48 left-1/4 h-64 w-[42rem] -translate-x-1/2 rounded-[999px] bg-secondary/50 blur-3xl dark:bg-secondary/20" />
          <div className="absolute -bottom-24 left-1/2 h-56 w-[40rem] -translate-x-1/2 rounded-[999px] bg-muted/50 blur-3xl dark:bg-muted/25" />
        </div>
        
        {/* Gradient overlay for better text readability */}
        <div className="fixed inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/80 to-background pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
          <ExperienceSection />
          <SkillsSection />
          <TechnologiesSection />
          <CertificationsSection />
          <EducationSection />
          <LanguagesSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  )
}
