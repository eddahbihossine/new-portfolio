"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.certifications": "Certifications",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "nav.download_cv": "Télécharger CV",
    
    // Hero
    "hero.location": "Lyon, France",
    "hero.title": "Ingénieur",
    "hero.devops": "DevOps",
    "hero.cloud": "Cloud",
    "hero.description": "Spécialisé en automatisation, développement Python et intégration de solutions d'exploitation. Passionné par la création de scripts et pipelines d'automatisation, la mise en place de monitoring/alerting et l'optimisation d'infrastructures.",
    "hero.download_cv": "Télécharger CV",
    "hero.contact_me": "Me contacter",
    
    // Experience
    "experience.section": "Expérience",
    "experience.title": "Expérience Professionnelle",
    "experience.job_title": "Ingénieur DevOps & Cloud",
    "experience.company": "Université Internationale De Rabat",
    "experience.location": "Rabat, Maroc",
    "experience.period": "06/2025 – 01/2026",
    "experience.task1": "Développement de scripts Python et Bash pour automatiser des tâches d'exploitation et réduire les interventions manuelles",
    "experience.task2": "Mise en place et optimisation de pipelines CI/CD pour automatiser tests, déploiements et intégration",
    "experience.task3": "Gestion et surveillance d'infrastructures Cloud et virtualisées (Terraform, Ansible, VMware)",
    "experience.task4": "Mise en œuvre de solutions de monitoring et d'alerting, analyse et résolution d'incidents",
    "experience.task5": "Intégration d'outils d'exploitation, gestion de référentiels techniques et amélioration continue des environnements",
    
    // Skills
    "skills.section": "Compétences",
    "skills.title": "Technologies & Outils",
    "skills.languages": "Langages & Scripts",
    "skills.devops": "DevOps & CI/CD",
    "skills.cloud": "Cloud & Infrastructure",
    "skills.systems": "Systèmes",
    "skills.databases": "Bases de Données",
    "skills.security": "Sécurité & Monitoring",
    
    // Certifications
    "certifications.section": "Certifications",
    "certifications.title": "Certificats & Accréditations",
    "certifications.certified": "Certifié",
    
    // Education
    "education.section": "Formation",
    "education.title": "Parcours Académique",
    "education.present": "Présent",
    
    // Languages
    "languages.section": "Langues",
    "languages.title": "Compétences Linguistiques",
    "languages.spoken": "Langues Parlées",
    "languages.arabic": "Arabe",
    "languages.french": "Français",
    "languages.english": "Anglais",
    "languages.native": "Natif",
    "languages.fluent": "Courant",
    
    // Contact
    "contact.section": "Contact",
    "contact.title": "Travaillons Ensemble",
    "contact.description": "Je suis actuellement à la recherche de nouvelles opportunités en tant qu'Ingénieur DevOps & Cloud. N'hésitez pas à me contacter pour discuter de vos projets !",
    "contact.download_cv": "Télécharger mon CV",
    "contact.download_cv_desc": "Obtenez une copie complète de mon parcours professionnel",
    "contact.download_cv_btn": "Télécharger CV (PDF)",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.certifications": "Certifications",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "nav.download_cv": "Download CV",
    
    // Hero
    "hero.location": "Lyon, France",
    "hero.title": "Engineer",
    "hero.devops": "DevOps",
    "hero.cloud": "Cloud",
    "hero.description": "Specialized in automation, Python development, and integration of operational solutions. Passionate about creating scripts and automation pipelines, implementing monitoring/alerting systems, and optimizing infrastructures.",
    "hero.download_cv": "Download CV",
    "hero.contact_me": "Contact me",
    
    // Experience
    "experience.section": "Experience",
    "experience.title": "Professional Experience",
    "experience.job_title": "DevOps & Cloud Engineer",
    "experience.company": "International University of Rabat",
    "experience.location": "Rabat, Morocco",
    "experience.period": "06/2025 – 01/2026",
    "experience.task1": "Development of Python and Bash scripts to automate operational tasks and reduce manual interventions",
    "experience.task2": "Implementation and optimization of CI/CD pipelines to automate testing, deployments, and integration",
    "experience.task3": "Management and monitoring of Cloud and virtualized infrastructures (Terraform, Ansible, VMware)",
    "experience.task4": "Implementation of monitoring and alerting solutions, incident analysis and resolution",
    "experience.task5": "Integration of operational tools, technical repository management, and continuous environment improvement",
    
    // Skills
    "skills.section": "Skills",
    "skills.title": "Technologies & Tools",
    "skills.languages": "Languages & Scripts",
    "skills.devops": "DevOps & CI/CD",
    "skills.cloud": "Cloud & Infrastructure",
    "skills.systems": "Systems",
    "skills.databases": "Databases",
    "skills.security": "Security & Monitoring",
    
    // Certifications
    "certifications.section": "Certifications",
    "certifications.title": "Certificates & Accreditations",
    "certifications.certified": "Certified",
    
    // Education
    "education.section": "Education",
    "education.title": "Academic Background",
    "education.present": "Present",
    
    // Languages
    "languages.section": "Languages",
    "languages.title": "Language Skills",
    "languages.spoken": "Spoken Languages",
    "languages.arabic": "Arabic",
    "languages.french": "French",
    "languages.english": "English",
    "languages.native": "Native",
    "languages.fluent": "Fluent",
    
    // Contact
    "contact.section": "Contact",
    "contact.title": "Let's Work Together",
    "contact.description": "I am currently looking for new opportunities as a DevOps & Cloud Engineer. Feel free to contact me to discuss your projects!",
    "contact.download_cv": "Download my CV",
    "contact.download_cv_desc": "Get a complete copy of my professional background",
    "contact.download_cv_btn": "Download CV (PDF)",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "fr" || saved === "en")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
