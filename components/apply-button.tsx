"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ApplyButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative inline-block">
      <motion.div
        className="absolute -top-16 right-0 md:-right-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image src="/images/cherry.png" alt="Personaje cereza" width={70} height={70} className="object-contain" />
        </motion.div>
      </motion.div>

      <motion.a
        href="https://tally.so/r/meoZ5l"
        className="inline-block gradient-bg-primary text-white font-bold text-xl md:text-2xl py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center">
          <span>¡Aplica Ahora!</span>
          {isHovered && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="ml-2">
              <Image src="/images/strawberry.png" alt="Fresa" width={30} height={30} className="object-contain" />
            </motion.div>
          )}
        </div>
      </motion.a>
    </div>
  )
}
