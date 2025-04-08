"use client"

import { motion } from "framer-motion"
import Image from "next/image"

type FloatingFruitProps = {
  name: string
  size?: number
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "random" | "custom"
  customClass?: string
  delay?: number
}

export default function FloatingFruit({
  name,
  size = 80,
  position = "random",
  customClass = "",
  delay = 0,
}: FloatingFruitProps) {
  const positionClass = position === "custom" ? customClass : getPositionClass(position)

  return (
    <motion.div
      className={`absolute ${positionClass} z-10`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0, -5, 0],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        <Image
          src={`/images/${name}.png`}
          alt={`${name} character`}
          width={size}
          height={size}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  )
}

function getPositionClass(position: string) {
  switch (position) {
    case "top-left":
      return "top-10 left-10"
    case "top-right":
      return "top-10 right-10"
    case "bottom-left":
      return "bottom-10 left-10"
    case "bottom-right":
      return "bottom-10 right-10"
    case "random":
      const positions = [
        "top-20 left-[10%]",
        "top-40 right-[15%]",
        "bottom-32 left-[20%]",
        "bottom-16 right-[25%]",
        "top-24 left-[30%]",
        "top-16 right-[35%]",
      ]
      return positions[Math.floor(Math.random() * positions.length)]
    default:
      return "top-10 left-10"
  }
}
