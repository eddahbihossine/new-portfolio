"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Menu, X, Download, Moon, Sun, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useLanguage, type Language } from "@/lib/language-context"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = isHome
    ? [
        { name: t("nav.home"), href: "#home" },
        { name: t("nav.experience"), href: "#experience" },
        { name: t("nav.skills"), href: "#skills" },
        { name: t("nav.certifications"), href: "#certifications" },
        { name: t("nav.education"), href: "#education" },
        { name: t("nav.contact"), href: "#contact" },
        { name: t("nav.consulting"), href: "/consulting" },
      ]
    : [
        { name: t("nav.home"), href: "/" },
        { name: t("nav.consulting"), href: "/consulting" },
        { name: t("nav.contact"), href: "#contact" },
      ]

  return (
    <nav
      className={cn(
        "fixed top-3 sm:top-4 left-0 right-0 z-50 transition-all duration-300"
      )}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div
          className={cn(
            "flex h-11 sm:h-12 items-center justify-between gap-3 rounded-none border border-border/60 bg-background/60 backdrop-blur-xl px-3 sm:px-4",
            isScrolled ? "bg-background/75" : "bg-background/50"
          )}
        >
          <a
            href="#"
            className="inline-flex h-9 items-center font-sans text-[13px] sm:text-sm font-semibold uppercase tracking-[0.32em] text-foreground leading-none whitespace-nowrap"
          >
            EH • Eddahbi
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-end gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="group relative inline-flex h-9 items-center text-[11px] font-semibold uppercase tracking-[0.34em] text-muted-foreground transition-colors hover:text-foreground leading-none"
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative">
                  {link.name}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-foreground/70 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </motion.a>
            ))}

            <div className="h-5 w-px bg-border/70" />

            {/* Settings */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  id="settings-menu-trigger"
                  type="button"
                  variant="outline"
                  className="rounded-none h-9 px-3 py-0 leading-none"
                >
                  <span className="text-[11px] font-semibold tracking-[0.32em]">Settings</span>
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[14rem]">
                <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Settings
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Language
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={(value) => setLanguage(value as Language)}
                >
                  <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                >
                  {mounted && resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  Theme
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <a href={`/api/resume?lang=${language}`} download>
                    <Download className="h-4 w-4" />
                    {t("nav.cv")}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Mobile Settings */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  id="settings-menu-trigger-mobile"
                  type="button"
                  variant="outline"
                  className="rounded-none h-9 px-3 py-0 leading-none"
                >
                  <span className="text-[11px] font-semibold tracking-[0.24em]">Settings</span>
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[14rem]">
                <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Settings
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuLabel className="font-mono text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Language
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={(value) => setLanguage(value as Language)}
                >
                  <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                >
                  {mounted && resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  Theme
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <a href={`/api/resume?lang=${language}`} download>
                    <Download className="h-4 w-4" />
                    {t("nav.cv")}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="size-9 rounded-none p-0 text-muted-foreground hover:text-foreground flex items-center justify-center opacity-90 transition-opacity hover:opacity-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-3 border border-border/60 bg-background/70 backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground transition-colors py-1.5"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild size="sm" variant="outline" className="gap-2 w-full rounded-none">
                <a href={`/api/resume?lang=${language}`} download>
                  <Download className="w-4 h-4" />
                  {t("nav.download_cv")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
