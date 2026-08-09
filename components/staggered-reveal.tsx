"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface StaggeredRevealProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

export function StaggeredReveal({ children, staggerDelay = 0.04, className = "" }: StaggeredRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
          transition={{
            duration: 0.22,
            delay: index * staggerDelay, // Short 40ms stagger per item
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
