"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useInView } from "react-intersection-observer"

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.4 }}
              className="mt-2 text-gray-600"
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: "¿Cómo puedo cambiar a Hip Energy?",
      answer:
        "El proceso es muy sencillo. Solo tienes que rellenar nuestro formulario online, que te llevará menos de 5 minutos. Nosotros nos encargamos de todo el papeleo y la gestión con tu proveedor actual. No habrá interrupciones en tu suministro eléctrico durante el cambio.",
    },
    {
      question: "¿Realmente puedo ahorrar en mi factura de electricidad?",
      answer:
        "Sí, nuestros clientes ahorran un promedio del 30% en sus facturas de electricidad. Ofrecemos tarifas competitivas y transparentes, sin costes ocultos, y nuestra app te ayuda a optimizar tu consumo para maximizar el ahorro.",
    },
    {
      question: "¿De dónde proviene la energía de Hip Energy?",
      answer:
        "Toda nuestra energía proviene de fuentes 100% renovables certificadas, principalmente de instalaciones solares, eólicas e hidroeléctricas ubicadas en Andorra y sus alrededores. Estamos comprometidos con la sostenibilidad y la reducción de la huella de carbono.",
    },
    {
      question: "¿Qué pasa si tengo una emergencia o un problema con mi suministro?",
      answer:
        "Disponemos de un servicio de atención al cliente 24/7 para emergencias. Puedes contactarnos por teléfono, email o a través de nuestra app, y nuestro equipo técnico estará disponible para ayudarte en cualquier momento.",
    },
    {
      question: "¿Ofrecen servicios para empresas?",
      answer:
        "Sí, tenemos planes específicos para empresas de todos los tamaños. Ofrecemos tarifas personalizadas según el consumo, asesoramiento energético y soluciones de eficiencia que pueden ayudar a reducir significativamente los costes operativos de tu negocio.",
    },
  ]

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Preguntas Frecuentes
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

