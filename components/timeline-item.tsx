"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"

interface TimelineItemProps {
  year: number
  index: number
  children: React.ReactNode
}

export function TimelineItem({ year, index, children }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="relative pl-20"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <motion.div
        className={`absolute left-0 w-16 h-16 flex items-center justify-center font-bold ${
          isInView ? "molten-gold" : "bg-primary"
        } text-primary-foreground transition-all duration-500`}
        animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {year}
      </motion.div>
      <Card className="rounded-[4px]">{children}</Card>
    </motion.div>
  )
}
