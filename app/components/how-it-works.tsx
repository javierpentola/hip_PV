"use client"

import Image from "next/image"
import { ClipboardCheck, CreditCard, Zap } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      title: "1. Solicita tu cambio",
      description: "Completa nuestro formulario online en menos de 5 minutos. Sin papeleos complicados.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "2. Gestión sin interrupciones",
      description: "Nos encargamos de todo el proceso de cambio. No habrá cortes de suministro.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "3. Disfruta de tu energía",
      description: "Comienza a disfrutar de energía limpia y ahorra en tu factura mensual.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="como-funciona" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span className="text-primary font-medium tracking-wider" variants={itemVariants}>
            CÓMO FUNCIONA
          </motion.span>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6" variants={itemVariants}>
            Cambiar a Hip Energy es
            <br />
            rápido y sencillo
          </motion.h2>
          <motion.p className="text-gray-600 leading-relaxed" variants={itemVariants}>
            Hemos simplificado el proceso de cambio para que puedas empezar a disfrutar de energía limpia y ahorrar en
            tu factura sin complicaciones.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-yellow-50 p-8 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md transition-transform duration-300 hover:rotate-12">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-primary/10 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Monitoriza tu consumo en tiempo real</h3>
              <p className="text-gray-600 mb-6">
                Con nuestra aplicación móvil, puedes seguir tu consumo energético en tiempo real, establecer metas de
                ahorro y recibir consejos personalizados para reducir tu factura.
              </p>
              <ul className="space-y-3">
                {[
                  "Visualiza tu consumo por horas, días o meses",
                  "Compara con períodos anteriores",
                  "Recibe alertas de consumo inusual",
                  "Consejos personalizados de ahorro",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[9/16] max-w-[250px] mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="App Hip Energy"
                width={250}
                height={500}
                className="object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

