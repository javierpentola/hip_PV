"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="testimonios" ref={ref} className="py-24 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span className="text-primary font-medium tracking-wider" variants={itemVariants}>
            TESTIMONIOS
          </motion.span>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6" variants={itemVariants}>
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p className="text-gray-600 leading-relaxed" variants={itemVariants}>
            Miles de hogares y empresas en Andorra ya han cambiado a Hip Energy y están disfrutando de energía limpia y
            facturas más bajas.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" variants={itemVariants}>
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Cliente de Hip Energy"
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div className="flex gap-1" variants={itemVariants}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </motion.div>
            <motion.blockquote className="text-xl text-gray-900 font-medium italic" variants={itemVariants}>
              "Cambiar a Hip Energy ha sido una de las mejores decisiones que he tomado. No solo estoy ahorrando en mi
              factura mensual, sino que también estoy contribuyendo a un futuro más sostenible para Andorra."
            </motion.blockquote>
            <motion.div variants={itemVariants}>
              <p className="font-bold text-gray-900">Marc Rodríguez</p>
              <p className="text-gray-600">Propietario de apartamento en Andorra la Vella</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            {
              comment: "La transición fue muy sencilla y el servicio al cliente es excepcional. Muy recomendable.",
              name: "Laura Martínez",
              role: "Propietaria de tienda en Escaldes-Engordany",
            },
            {
              comment: "Gracias a Hip Energy, he reducido mi factura en un 25% y ahora uso energía 100% renovable.",
              name: "Josep Vila",
              role: "Residente en La Massana",
            },
            {
              comment: "La app es fantástica para controlar el consumo. Me ha ayudado a ser más consciente y ahorrar.",
              name: "Carla Pons",
              role: "Propietaria de apartamento en Encamp",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              variants={itemVariants}
            >
              <motion.div className="flex gap-1 mb-4" variants={itemVariants}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </motion.div>
              <motion.p className="text-gray-700 mb-6" variants={itemVariants}>
                "{review.comment}"
              </motion.p>
              <motion.div variants={itemVariants}>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

