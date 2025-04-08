import Image from "next/image"
import { Poppins } from "next/font/google"
import { Github, Twitter, Instagram, Calendar, MapPin, Youtube, Send } from "lucide-react"
import FaqAccordion from "@/components/faq-accordion"
import FruitCharacters from "@/components/fruit-characters"
import ApplyButton from "@/components/apply-button"
import FloatingFruit from "@/components/floating-fruit"
import EventSchedule from "@/components/event-schedule"
// Primero, importar el componente GradientText
import GradientText from "@/components/gradient-text"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${poppins.variable} font-sans bg-gradient-to-b from-yellow-50 to-orange-50 overflow-hidden`}
    >
      {/* Floating Fruits - More dispersed and LARGER */}
      <FloatingFruit name="banana" position="top-left" size={100} delay={0.2} />
      <FloatingFruit name="strawberry" position="bottom-right" size={90} delay={1.5} />
      <FloatingFruit name="orange" position="custom" customClass="top-[30%] -left-10" size={85} delay={0.7} />
      <FloatingFruit name="cherry" position="custom" customClass="top-[40%] -right-10" size={80} delay={1.2} />
      <FloatingFruit name="lime" position="custom" customClass="top-[60%] left-10" size={75} delay={0.9} />
      <FloatingFruit name="peach" position="custom" customClass="top-[70%] right-10" size={95} delay={1.8} />
      <FloatingFruit name="banana" position="custom" customClass="top-[85%] -left-10" size={80} delay={1.4} />
      <FloatingFruit name="strawberry" position="custom" customClass="top-[15%] right-5" size={70} delay={0.5} />

      {/* Header */}
      <header className="w-full flex flex-col items-center justify-center py-12 px-4 relative">
        <div className="text-center max-w-4xl">
          <Image
            src="/images/frutero-logo.svg"
            alt="Frutero Club"
            width={300}
            height={120}
            className="mx-auto"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-8 text-center relative">
        <FloatingFruit name="lime" position="custom" customClass="top-40 -left-20" size={85} delay={0.7} />

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 opacity-10 rotate-12">
            <Image src="/images/ethereum.png" alt="Ethereum" width={120} height={120} className="object-contain" />
          </div>

          {/* TÍTULO MEZTLI LAB CON GRADIENTE DEL FOOTER */}
          {/* Luego, reemplazar el título de Meztli Lab */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText>Meztli Lab</GradientText>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            ¡Únete a la Hacker House más dulce de la ciudad!
          </h2>

          <div className="mb-8">
            <Image
              src="/images/hacker-house-illustration.png"
              alt="Ilustración de Hacker House"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <p className="text-lg text-gray-700 mb-6">
            Meztli Lab es un espacio vibrante y colaborativo para desarrolladores, diseñadores, fundadores y entusiastas
            de blockchain y Web3 para reunirse y construir proyectos increíbles en Soneium, Astar & Scroll. Nuestra
            hacker house será el espacio ideal para prepararte para la hackathon de ETH Cinco de Mayo.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-2xl relative">
              <div className="absolute -top-5 -right-5 z-10 w-14 h-14">
                <Image
                  src="/images/orange.png"
                  alt="Personaje naranja"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-custom mt-2">Qué Esperar</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-custom">•</span>
                  <span>Espacio de trabajo amigable y disponible 24/7 con buen internet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-custom">•</span>
                  <span>Mentoría de las frutas más top de Frutero Club</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-custom">•</span>
                  <span>Oportunidades reales de networking con la comunidad</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-custom">•</span>
                  <span>Contenido de alta calidad frutal en cada taller</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl relative">
              <div className="absolute -top-5 -right-5 z-10 w-14 h-14">
                <Image src="/images/lime.png" alt="Personaje lima" width={60} height={60} className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-custom mt-2">Quién Debería Aplicar</h3>
              <ul className="text-left text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-green-custom">•</span>
                  <span>Desarrolladores blockchain (todos los niveles de experiencia)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-custom">•</span>
                  <span>Diseñadores UI/UX interesados en Web3</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-custom">•</span>
                  <span>Project managers con experiencia en blockchain</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-custom">•</span>
                  <span>Entusiastas de crypto con ideas innovadoras</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Meztli Lab tendrá lugar del <span className="font-semibold">28 de abril al 5 de mayo de 2025</span>, en la
            Ciudad de México. Las aplicaciones están abiertas hasta el{" "}
            <span className="font-semibold">viernes 18 de abril de 2025</span>. ¡Cupos limitados disponibles!
          </p>

          <ApplyButton />
        </div>

        {/* Calendar Section - CAMBIO DE FECHAS */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 relative overflow-hidden">
          <FloatingFruit name="cherry" position="custom" customClass="-top-8 -left-8 z-10" size={80} delay={1.0} />

          {/* Reemplazar el título de Talleres frutiFantásticos */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <GradientText>Talleres frutiFantásticos</GradientText>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-orange-custom" />
              <span>29 de abril - 2 de mayo, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-custom" />
              <span>Ciudad de México</span>
            </div>
          </div>

          <EventSchedule />
        </div>

        {/* Sponsors Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 relative overflow-hidden">
          <FloatingFruit name="peach" position="custom" customClass="-bottom-8 -right-8 z-10" size={80} delay={1.3} />

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Nuestros Patrocinadores</h2>

          <p className="text-gray-600 mb-8">
            Estamos agradecidos con nuestros increíbles patrocinadores que hacen posible este evento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="p-4 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/scroll-logo.svg"
                alt="Scroll"
                width={200}
                height={80}
                className="object-contain h-16"
              />
            </div>
            <div className="p-4 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/soneium-logo.webp"
                alt="Soneium"
                width={200}
                height={80}
                className="object-contain h-16"
              />
            </div>
            <div className="p-4 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/astar-logo-new.png"
                alt="Astar Network"
                width={200}
                height={80}
                className="object-contain h-16"
              />
            </div>
          </div>
        </div>

        <FloatingFruit name="orange" position="custom" customClass="top-[1200px] -right-20" size={95} delay={0.9} />

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mt-12 relative">
          <div className="absolute -bottom-6 -right-6 z-10 w-16 h-16">
            <Image src="/images/banana.png" alt="Personaje plátano" width={70} height={70} className="object-contain" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">Preguntas Frecuentes</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* Fruit Characters Section - More spaced out */}
      <div className="w-full py-16 relative">
        <FruitCharacters />
      </div>

      {/* Footer with updated links */}
      <footer className="w-full gradient-bg-primary text-white py-8 px-4 mt-12 relative">
        <FloatingFruit name="strawberry" position="custom" customClass="bottom-20 left-10" size={70} delay={1.8} />
        <FloatingFruit name="banana" position="custom" customClass="bottom-10 right-10" size={65} delay={2.0} />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-4">
            <Image src="/images/frutero-logo.svg" alt="Logo Frutero" width={120} height={40} className="mx-auto" />
          </div>
          <div className="flex space-x-6 mb-6">
            <a
              href="https://x.com/fruteroclub"
              className="hover-text-yellow"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://github.com/fruteroclub"
              className="hover-text-yellow"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.youtube.com/@fruterotv"
              className="hover-text-yellow"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://www.instagram.com/fruteroclub/"
              className="hover-text-yellow"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://t.me/+rOlDF1SWEAM5YTBh"
              className="hover-text-yellow"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={24} />
            </a>
          </div>
          <p className="text-center text-sm">
            Creado con mucho amor por{" "}
            <a
              href="https://frutero.club/"
              className="underline hover-text-yellow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frutero Club
            </a>{" "}
            para todas las frutas
          </p>
        </div>
      </footer>
    </main>
  )
}