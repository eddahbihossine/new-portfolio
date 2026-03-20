"use client"

import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion"

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  stagger?: boolean
}

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function AnimatedSection({ children, className, stagger, ...props }: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      {...props}
      className={className}
      variants={baseVariants}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {stagger ? (
        <motion.div
          initial={shouldReduceMotion ? undefined : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  )
}
