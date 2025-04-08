"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "¿Qué son los Talleres FrutiFantásticos?",
    answer:
      "Los Talleres FrutiFantásticos son una serie intensiva de sesiones formativas diseñadas para introducir a desarrolladores Web2 en el ecosistema Web3. Durante cuatro días, cubrimos desde conceptos básicos hasta desarrollo avanzado, culminando en la creación de un proyecto blockchain funcional. No es solo teoría: construirás, desplegarás y conectarás tecnologías blockchain en tiempo real.",
  },
  {
    question: "¿Quién organiza estos talleres?",
    answer:
      "Los talleres son organizados por Frutero Club, una comunidad élite de builders dedicada a identificar y acelerar talento excepcional en tecnologías Web3. Trabajamos con partners estratégicos del ecosistema blockchain para ofrecer contenido de alta calidad y oportunidades reales de crecimiento.",
  },
  {
    question: "¿Necesito tener experiencia previa en blockchain o Web3?",
    answer:
      "No, estos talleres están diseñados para ser accesibles a desarrolladores con experiencia en Web2 que quieren dar el salto a Web3. Solo necesitas conocimientos básicos de programación. Cada taller construye sobre el anterior, permitiéndote avanzar gradualmente desde los conceptos fundamentales hasta aplicaciones más complejas.",
  },
  {
    question: "¿Tengo que asistir a todos los talleres?",
    answer:
      "Tendremos 9 sesiones obligatorias de 15 y ES OBLIGATORIO PRESENTAR EL PROYECTO FINAL que se irá construyendo clase tras clase. Este proyecto integrador es el componente central del programa y demuestra la aplicación práctica de los conocimientos adquiridos. Si no puedes asistir a alguna sesión específica, te recomendamos revisar los materiales correspondientes para no quedar rezagado en el desarrollo del proyecto.",
  },
  {
    question: "¿Necesito traer mi propio equipo?",
    answer:
      "Sí, necesitarás una laptop con capacidad para ejecutar entornos de desarrollo local. Recomendamos al menos 8GB de RAM y suficiente espacio de almacenamiento (20GB libres mínimo). Enviaremos una lista de software para preinstalar antes del evento.",
  },
  {
    question: "¿Habrá comida y bebidas disponibles?",
    answer:
      "Haremos nuestro mejor esfuerzo para proporcionar agua, café y frutas durante las sesiones. Te recomendamos traer tu propia botella de agua reutilizable y considerar opciones de comida cercanas para el almuerzo. La zona cuenta con diversas opciones gastronómicas a distancias caminables que compartiremos en una guía previa al evento.",
  },
  {
    question: "¿Recibiré alguna certificación o comprobante de participación?",
    answer:
      "Sí, en cada sesión a la que asistas recibirás un NFT que certifica tu participación en ese workshop específico. Adicionalmente, al completar y presentar tu proyecto final en el Demo Day, recibirás un certificado con prestigio dentro del ecosistema que valida todas tus nuevas habilidades en tecnologías Web3.",
  },
  {
    question: "¿Qué obtendré al finalizar los Talleres FrutiFantásticos?",
    answer:
      "Al finalizar los talleres, habrás desarrollado: Un proyecto blockchain funcional desplegado en una red pública, una colección de NFTs que certifican cada una de tus sesiones completadas, experiencia práctica con herramientas y frameworks esenciales de Web3, networking con profesionales y empresas del ecosistema, y un certificado de prestigio por completar la totalidad del programa.",
  },
  {
    question: "¿Puedo proponer mi propia idea para el proyecto final?",
    answer:
      "¡Absolutamente! Aunque ofrecemos una estructura base para el proyecto integrador, incentivamos la creatividad. Podrás adaptar el proyecto a tus intereses específicos, siempre que incorpore los elementos tecnológicos cubiertos en los talleres. Nuestros mentores te ayudarán a refinar tu idea para que sea viable dentro del tiempo disponible.",
  },
  {
    question: "¿Habrá mentorias o apoyo adicional después de los talleres?",
    answer:
      "Sí, los participantes que completen el programa serán invitados a unirse a nuestra comunidad de Frutero Club, donde tendrán acceso a mentorías continuas, recursos exclusivos y oportunidades de colaboración. Además, establecemos conexiones directas con nuestros partners para posibles oportunidades de financiamiento o desarrollo profesional.",
  },
  {
    question: "¿Los materiales estarán disponibles después de los talleres?",
    answer:
      "Todos los materiales, presentaciones, códigos de ejemplo y grabaciones de las sesiones estarán disponibles públicamente. Nuestro compromiso es con el conocimiento abierto, por lo que todo el material creado para los talleres será accesible para la comunidad, incluso después de finalizado el programa.",
  },
  {
    question: "¿Cuál es el costo de participación?",
    answer:
      "El programa tiene un costo de 250 $PULPA, el token representativo de nuestra comunidad. Este token no tiene un costo real pero sí un valor simbólico dentro del ecosistema Frutero, representando tu compromiso con la comunidad y el aprendizaje continuo.",
  },
]

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-red-200 rounded-xl overflow-hidden bg-red-50 backdrop-blur-sm">
          <button
            className="flex justify-between items-center w-full p-4 text-left hover:bg-orange-50 transition-colors"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-medium text-gray-800">{faq.question}</span>
            <ChevronDown
              className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
              size={20}
            />
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-orange-50 text-gray-700 border-t border-orange-100">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
