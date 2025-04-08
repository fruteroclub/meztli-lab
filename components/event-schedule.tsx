"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Clock, PlusCircle } from "lucide-react"

const scheduleData = [
  {
    day: "Día 1 - 29 de abril",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "14:00 - 16:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "18:00 - 20:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
    ],
  },
  {
    day: "Día 2 - 30 de abril",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "14:00 - 16:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "18:00 - 20:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
    ],
  },
  {
    day: "Día 3 - 1 de mayo",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "14:00 - 16:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "18:00 - 20:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
    ],
  },
  {
    day: "Día 4 - 2 de mayo",
    events: [
      {
        time: "10:00 - 12:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "14:00 - 16:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
      {
        time: "18:00 - 20:00",
        title: "Workshop de Vibe Coding en contratos inteligentes",
        description: "Aprende a programar contratos inteligentes con buen ambiente",
      },
    ],
  },
]

export default function EventSchedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <div className="w-full">
      {/* Sticker/Banner actualizado */}
      <div className="relative mb-12">
        <div className="absolute -rotate-6 transform-gpu w-full left-0 right-0 mx-auto flex justify-center">
          <div className="bg-yellow-300 text-center py-5 px-8 rounded-lg shadow-lg border-2 border-yellow-500 max-w-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-200 to-transparent opacity-50"></div>
            <p className="text-xl md:text-2xl font-black text-red-600 animate-pulse relative z-10 leading-tight">
              ¡Estamos construyendo esto,
              <br />
              pronto estará listo!
            </p>
            {/* Efecto de cinta adhesiva */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-200 opacity-70 rounded-b-md"></div>
          </div>
        </div>
        {/* Espacio para que no se superponga con otros elementos */}
        <div className="h-24"></div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {scheduleData.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeDay === index
                ? "gradient-bg-primary text-white"
                : "bg-orange-100 text-orange-custom hover:bg-orange-200"
            }`}
          >
            {day.day}
          </button>
        ))}
      </div>

      <motion.div
        key={activeDay}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {scheduleData[activeDay].events.map((event, index) => (
          <div key={index} className="bg-red-50 rounded-xl p-4 flex flex-col md:flex-row gap-4 text-left">
            <div className="md:w-1/4 flex items-center">
              <Clock className="w-4 h-4 text-orange-custom mr-2 flex-shrink-0" />
              <span className="text-orange-custom font-medium">{event.time}</span>
            </div>
            <div className="md:w-3/4">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-800">{event.title}</h3>
                <div className="text-orange-custom flex items-center text-sm ml-2">
                  <PlusCircle className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Próximamente</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
