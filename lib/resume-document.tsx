import React from "react"
import {
  Document,
  Page,
  Link,
  Text,
  View,
  StyleSheet,
  Svg,
  Path,
  Circle,
} from "@react-pdf/renderer"

type ResumeLanguage = "en" | "fr"

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 48,
    paddingHorizontal: 42,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#111111",
    lineHeight: 1.35,
  },
  header: {
    marginBottom: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
  },
  title: {
    marginTop: 4,
    fontSize: 12,
    color: "#444444",
  },
  metaRow: {
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  meta: {
    fontSize: 10,
    color: "#444444",
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 0.4,
    textTransform: "uppercase",
    marginBottom: 8,
    color: "#111111",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 2,
  },
  itemMeta: {
    fontSize: 10,
    color: "#444444",
    marginBottom: 6,
  },
  bullet: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 3,
  },
  bulletDot: {
    width: 10,
    textAlign: "center",
    color: "#666666",
  },
  bulletText: {
    flex: 1,
    color: "#111111",
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    fontSize: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 6,
    color: "#111111",
  },
})

function t(lang: ResumeLanguage, key: string) {
  const dict: Record<ResumeLanguage, Record<string, string>> = {
    fr: {
      title: "Ingénieur DevOps & Cloud",
      location: "Lyon, France",
      contact: "Contact",
      experience: "Expérience",
      skills: "Compétences",
      technologies: "Technologies",
      certifications: "Certifications",
      education: "Formation",
    },
    en: {
      title: "DevOps & Cloud Engineer",
      location: "Lyon, France",
      contact: "Contact",
      experience: "Experience",
      skills: "Skills",
      technologies: "Technologies",
      certifications: "Certifications",
      education: "Education",
    },
  }

  return dict[lang][key] ?? key
}

function MapPinIcon({ color = "#444444" }: { color?: string }) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 24 24"
      style={{ marginRight: 4, marginTop: 1 }}
    >
      <Path
        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle
        cx={12}
        cy={10}
        r={3}
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
    </Svg>
  )
}

export function ResumeDocument({ lang }: { lang: ResumeLanguage }) {
  const email = "eh.eddahbi@outlook.com"
  const githubUrl = "https://github.com/eddahbihossine"
  const linkedinUrl = "https://linkedin.com/in/heddahbi"

  const experiences = [
    {
      role: lang === "fr" ? "Ingénieur DevOps & Cloud" : "DevOps & Cloud Engineer",
      company: lang === "fr" ? "Université Internationale De Rabat" : "International University of Rabat",
      location: lang === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      period: "06/2025 – 01/2026",
      bullets: [
        lang === "fr"
          ? "Développement de scripts Python et Bash pour automatiser des tâches d'exploitation et réduire les interventions manuelles"
          : "Developed Python and Bash scripts to automate operational tasks and reduce manual work",
        lang === "fr"
          ? "Mise en place et optimisation de pipelines CI/CD pour automatiser tests, déploiements et intégration"
          : "Built and optimized CI/CD pipelines to automate testing, deployments, and integration",
        lang === "fr"
          ? "Gestion et surveillance d'infrastructures Cloud et virtualisées (Terraform, Ansible, VMware)"
          : "Managed and monitored cloud and virtualized infrastructures (Terraform, Ansible, VMware)",
        lang === "fr"
          ? "Mise en œuvre de solutions de monitoring et d'alerting, analyse et résolution d'incidents"
          : "Implemented monitoring/alerting solutions and handled incident analysis and resolution",
        lang === "fr"
          ? "Intégration d'outils d'exploitation et amélioration continue des environnements"
          : "Integrated operational tooling and continuously improved environments",
      ],
    },
  ]

  const technologies = [
    "AWS",
    "Terraform",
    "Kubernetes (K8s)",
    "OCI (Oracle Cloud Infrastructure)",
    "Jenkins",
    "Docker",
    "JavaScript",
    "Python",
    "C",
    "C++",
  ]

  const skills = [
    {
      title: lang === "fr" ? "Langages & Scripts" : "Languages & Scripting",
      items: ["Python", "Bash", "JavaScript", "C", "C++","Go"],
    },
    {
      title: lang === "fr" ? "DevOps & CI/CD" : "DevOps & CI/CD",
      items: ["Git", "Docker", "Jenkins", "CI/CD"],
    },
    {
      title: lang === "fr" ? "Cloud & Infrastructure" : "Cloud & Infrastructure",
      items: ["AWS", "OCI", "Terraform", "Kubernetes"],
    },
  ]

  const education = [
    {
      institution: "École 42 — Lyon Auvergne-Rhône-Alpes",
      degree: lang === "fr"
        ? "Architecte en Technologies du Numérique — RNCP Niveau 7"
        : "Digital Technology Architect — RNCP Level 7",
      location: "Lyon",
      period: lang === "fr" ? "2026 – Présent" : "2026 – Present",
    },
    {
      institution: "Université Mohammed VI Polytechnique — École 1337",
      degree: lang === "fr" ? "Programme 42 Network — Niveau 11.34" : "42 Network Program — Level 11.34",
      location: lang === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      period: "01/2022 – 01/2028",
    },
  ]

  const certifications = [
    { title: "AWS Solution Architect", issuer: "AWS", year: "2024" },
    { title: "AWS Cloud Practitioner", issuer: "AWS", year: "2024" },
    { title: "Oracle Certified Cloud Architect Professional", issuer: "Oracle", year: "2025" },
    { title: "Oracle Certified Professional Java SE 21", issuer: "Oracle", year: "2025" },
    { title: "Green Digital Skills", issuer: "INCO", year: "2022" },
    { title: "Full Stack Web Developer Certification", issuer: "Simplon.co", year: "2024" },
  ]

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>El Houssaine Eddahbi</Text>
          <Text style={styles.title}>{t(lang, "title")}</Text>
          <View style={styles.metaRow}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MapPinIcon />
              <Text style={styles.meta}>{t(lang, "location")}</Text>
            </View>
            <Link style={styles.meta} src={`mailto:${email}`}>
              {email}
            </Link>
            <Link style={styles.meta} src={githubUrl}>
              github.com/eddahbihossine
            </Link>
            <Link style={styles.meta} src={linkedinUrl}>
              linkedin.com/in/heddahbi
            </Link>
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t(lang, "experience")}</Text>
          {experiences.map((exp) => (
            <View key={`${exp.company}-${exp.period}`}>
              <Text style={styles.itemTitle}>{exp.role}</Text>
              <Text style={styles.itemMeta}>
                {exp.company} • {exp.location} • {exp.period}
              </Text>
              {exp.bullets.map((b) => (
                <View key={b} style={styles.bullet}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t(lang, "skills")}</Text>
          {skills.map((group) => (
            <View key={group.title} style={{ marginBottom: 8 }}>
              <Text style={styles.itemTitle}>{group.title}</Text>
              <View style={styles.chips}>
                {group.items.map((item) => (
                  <Text key={item} style={styles.chip}>
                    {item}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t(lang, "technologies")}</Text>
          <View style={styles.chips}>
            {technologies.map((tech) => (
              <Text key={tech} style={styles.chip}>
                {tech}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t(lang, "certifications")}</Text>
          {certifications.map((cert) => (
            <View key={`${cert.title}-${cert.year}`} style={{ marginBottom: 10 }}>
              <Text style={styles.itemTitle}>{cert.title}</Text>
              <Text style={styles.itemMeta}>
                {cert.issuer} • {cert.year}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t(lang, "education")}</Text>
          {education.map((edu) => (
            <View key={`${edu.institution}-${edu.period}`} style={{ marginBottom: 10 }}>
              <Text style={styles.itemTitle}>{edu.institution}</Text>
              <Text style={styles.itemMeta}>
                {edu.degree} • {edu.location} • {edu.period}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
