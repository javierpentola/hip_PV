"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Leaf, Zap, Award } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openHistoryDialog, setOpenHistoryDialog] = useState(false)

  return (
    <section id="sobre-nosotros" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider">SOBRE NOSOTROS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Impulsando Andorra con
            <br />
            energía sostenible
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hip Energy nació con una misión clara: proporcionar energía limpia y asequible a todos los hogares y
            empresas de Andorra. Combinamos innovación tecnológica con un compromiso inquebrantable con la
            sostenibilidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Paneles solares en Andorra"
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Energía limpia para
              <br />
              un futuro sostenible
            </h3>
            <p className="text-gray-600 leading-relaxed">
              En Hip Energy, creemos que la transición energética es esencial para combatir el cambio climático. Por
              eso, nos comprometemos a proporcionar electricidad 100% renovable, aprovechando la energía solar, eólica e
              hidroeléctrica de Andorra y sus alrededores.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nuestra visión va más allá de ser simplemente un proveedor de energía. Queremos ser un socio en la
              transformación energética de Andorra, ayudando a nuestros clientes a reducir su huella de carbono y a
              ahorrar en sus facturas de electricidad.
            </p>
            <Dialog open={openHistoryDialog} onOpenChange={setOpenHistoryDialog}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="mt-4 transition-all duration-300 hover:bg-primary hover:text-black hover:scale-105"
                >
                  Nuestra Historia
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle className="text-xl">Nuestra Historia</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1497354861845-d381fb7c91a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                      alt="Fundadores de Hip Energy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">
                      Hip Energy nació en 2018 de la mano de tres emprendedores andorranos con una misión clara:
                      transformar el panorama energético de Andorra hacia un modelo más sostenible.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Desde nuestros modestos inicios con 50 clientes, hemos crecido hasta abastecer al 20% del mercado
                      energético del país, manteniendo siempre nuestro compromiso con la energía limpia y el servicio
                      excepcional.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" onClick={() => setOpenHistoryDialog(false)}>
                    Cerrar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            {
              icon: Leaf,
              title: "Sostenibilidad",
              description: "Comprometidos con el medio ambiente y la reducción de emisiones de CO2",
            },
            {
              icon: Zap,
              title: "Innovación",
              description: "Tecnología de vanguardia para optimizar el consumo energético",
            },
            {
              icon: Award,
              title: "Excelencia",
              description: "Servicio al cliente excepcional y soluciones personalizadas",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center space-y-4 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-colors duration-300 hover:bg-primary/20">
                <item.icon className="h-10 w-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

