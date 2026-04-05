"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
}

function findClosestAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null
  return target.closest("a[href]")
}

function getScrollTargetY(element: HTMLElement): number {
  const marginTop = Number.parseFloat(getComputedStyle(element).scrollMarginTop || "0")
  const rect = element.getBoundingClientRect()
  return rect.top + window.scrollY - (Number.isFinite(marginTop) ? marginTop : 0)
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function animateScrollToY(targetY: number, tokenRef: React.MutableRefObject<number>) {
  const startY = window.scrollY
  const distance = targetY - startY

  if (Math.abs(distance) < 1) return

  if (prefersReducedMotion()) {
    window.scrollTo(0, targetY)
    return
  }

  const absDistance = Math.abs(distance)
  const duration = Math.min(900, Math.max(350, absDistance * 0.55))

  const myToken = ++tokenRef.current
  const startTime = performance.now()

  const step = (now: number) => {
    if (tokenRef.current !== myToken) return

    const t = Math.min(1, (now - startTime) / duration)
    const eased = easeOutCubic(t)

    window.scrollTo(0, startY + distance * eased)

    if (t < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

function scrollToHash(hash: string, tokenRef: React.MutableRefObject<number>) {
  if (!hash || !hash.startsWith("#")) return

  const id = decodeURIComponent(hash.slice(1))
  if (!id) return

  const el = document.getElementById(id)
  if (!el) return

  animateScrollToY(getScrollTargetY(el), tokenRef)
}

export function SmoothHashScroll() {
  const pathname = usePathname()
  const animationTokenRef = useRef(0)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      if (event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = findClosestAnchor(event.target)
      if (!anchor) return
      if (anchor.target && anchor.target !== "_self") return
      if (anchor.hasAttribute("download")) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#") || href === "#") return

      const id = decodeURIComponent(href.slice(1))
      const target = document.getElementById(id)
      if (!target) return

      event.preventDefault()

      history.pushState(null, "", href)
      animateScrollToY(getScrollTargetY(target), animationTokenRef)
    }

    const onHashChange = () => scrollToHash(window.location.hash, animationTokenRef)
    const cancelOnWheelOrTouch = () => {
      animationTokenRef.current += 1
    }

    document.addEventListener("click", onClick)
    window.addEventListener("hashchange", onHashChange)
    window.addEventListener("wheel", cancelOnWheelOrTouch, { passive: true })
    window.addEventListener("touchstart", cancelOnWheelOrTouch, { passive: true })

    return () => {
      document.removeEventListener("click", onClick)
      window.removeEventListener("hashchange", onHashChange)
      window.removeEventListener("wheel", cancelOnWheelOrTouch)
      window.removeEventListener("touchstart", cancelOnWheelOrTouch)
    }
  }, [])

  useEffect(() => {
    // If the user lands on /#section or navigates client-side to a hash,
    // try scrolling after the new route content mounts.
    const hash = window.location.hash
    if (!hash) return

    let cancelled = false
    let tries = 0

    const tryScroll = () => {
      if (cancelled) return
      tries += 1

      const id = decodeURIComponent(hash.slice(1))
      if (id && document.getElementById(id)) {
        scrollToHash(hash, animationTokenRef)
        return
      }

      if (tries < 12) {
        requestAnimationFrame(tryScroll)
      }
    }

    requestAnimationFrame(tryScroll)

    return () => {
      cancelled = true
    }
  }, [pathname])

  return null
}
