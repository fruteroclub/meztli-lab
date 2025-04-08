"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const characters = [
  { name: "banana", position: "far-left", delay: 0 },
  { name: "strawberry", position: "left", delay: 0.2 },
  { name: "orange", position: "center-left", delay: 0.4 },
  { name: "cherry", position: "center", delay: 0.6 },
  { name: "lime", position: "center-right", delay: 0.8 },
  { name: "peach", position: "right", delay: 1.0 },
]

export default function FruitCharacters() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="relative h-60 md:h-80 w-full max-w-6xl mx-auto">
      {characters.map((character, index) => (
        <motion.div
          key={index}
          className={`absolute ${getPosition(character.position)}`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: character.delay,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [-2, 2, -2],
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={`/images/${character.name}.png`}
              alt={`${character.name} character`}
              width={180} // Increased from 150
              height={180} // Increased from 150
              className="w-32 h-32 md:w-40 md:h-40 object-contain" // Increased from w-28/h-28 and md:w-32/md:h-32
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

function getPosition(position: string) {
  switch (position) {
    case "far-left":
      return "left-[2%] bottom-0"
    case "left":
      return "left-[18%] bottom-0"
    case "center-left":
      return "left-[34%] bottom-0"
    case "center":
      return "left-[50%] -translate-x-1/2 bottom-0"
    case "center-right":
      return "left-[66%] bottom-0"
    case "right":
      return "left-[82%] bottom-0"
    case "far-right":
      return "left-[98%] -translate-x-full bottom-0"
    default:
      return "left-1/2 -translate-x-1/2 bottom-0"
  }
}
