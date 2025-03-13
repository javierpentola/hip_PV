"use client"

import { DialogFooter } from "@/components/ui/dialog"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export default function Hero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulamos una petición a un servidor
    setTimeout(() => {
      setIsSubmitting(false)
      setOpen(false)

      toast({
        title: "Solicitud enviada con éxito",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
        variant: "default",
      })
    }, 1500)
  }

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

      <motion.div className="container mx-auto px-4 pt-12 pb-24" initial="initial" animate="animate" variants={stagger}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative z-10 space-y-8" variants={fadeIn}>
            <motion.div
              className="inline-block bg-primary/10 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-black font-medium tracking-wider text-sm">Energía para Andorra</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl leading-tight text-black font-bold"
              variants={fadeIn}
            >
              <span className="block">Energía limpia</span>
              <span className="block">para un futuro</span>
              <span className="block">más brillante</span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-black leading-relaxed max-w-xl" variants={fadeIn}>
              Hip Energy ofrece soluciones energéticas sostenibles y asequibles para hogares y empresas en Andorra.
              <span className="block mt-2">
                Cambia a Hip Energy hoy y disfruta de electricidad más limpia, tarifas transparentes y un servicio
                excepcional.
              </span>
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeIn}>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-black px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Contratar Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <form onSubmit={handleSubmit}>
                    <DialogHeader>
                      <DialogTitle className="text-xl">Contrata Hip Energy</DialogTitle>
                      <DialogDescription>
                        Completa el formulario para iniciar el proceso de contratación. Te contactaremos en menos de 24
                        horas.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nombre" className="text-right">
                          Nombre
                        </Label>
                        <Input id="nombre" placeholder="Tu nombre" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="apellidos" className="text-right">
                          Apellidos
                        </Label>
                        <Input id="apellidos" placeholder="Tus apellidos" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" type="email" placeholder="tu@ejemplo.com" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="telefono" className="text-right">
                          Teléfono
                        </Label>
                        <Input id="telefono" type="tel" placeholder="+376 XXX XXX" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tipo-cliente" className="text-right">
                          Tipo de cliente
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="particular">Particular</SelectItem>
                            <SelectItem value="empresa">Empresa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tarifa" className="text-right">
                          Tarifa
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Selecciona una tarifa" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basica">Básica (0,12€/kWh)</SelectItem>
                            <SelectItem value="optima">Óptima (0,10€/kWh)</SelectItem>
                            <SelectItem value="premium">Premium (0,09€/kWh)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-black"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-black hover:bg-primary hover:text-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Calcular Ahorro
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle className="text-xl">Calculadora de Ahorro</DialogTitle>
                    <DialogDescription>
                      Descubre cuánto puedes ahorrar al cambiar a Hip Energy. Introduce tus datos de consumo actual.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="consumo-mensual" className="text-right">
                        Consumo mensual
                      </Label>
                      <div className="col-span-3 flex items-center">
                        <Input id="consumo-mensual" type="number" defaultValue="350" className="mr-2" />
                        <span className="text-sm text-gray-500">kWh</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="tarifa-actual" className="text-right">
                        Tarifa actual
                      </Label>
                      <div className="col-span-3 flex items-center">
                        <Input id="tarifa-actual" type="number" step="0.01" defaultValue="0.15" className="mr-2" />
                        <span className="text-sm text-gray-500">€/kWh</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="tarifa-hip" className="text-right">
                        Tarifa Hip Energy
                      </Label>
                      <Select defaultValue="basica">
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Selecciona una tarifa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basica">Básica (0,12€/kWh)</SelectItem>
                          <SelectItem value="optima">Óptima (0,10€/kWh)</SelectItem>
                          <SelectItem value="premium">Premium (0,09€/kWh)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="potencia-contratada" className="text-right">
                        Potencia contratada
                      </Label>
                      <div className="col-span-3 flex items-center">
                        <Input id="potencia-contratada" type="number" step="0.1" defaultValue="4.4" className="mr-2" />
                        <span className="text-sm text-gray-500">kW</span>
                      </div>
                    </div>
                    <Button
                      className="mt-2 bg-primary hover:bg-primary/90 text-black"
                      onClick={() => {
                        const consumo = Number.parseFloat(document.getElementById("consumo-mensual").value)
                        const tarifaActual = Number.parseFloat(document.getElementById("tarifa-actual").value)
                        const tarifaHipElement = document.querySelector("[data-value]")
                        const tarifaHipValue = tarifaHipElement ? tarifaHipElement.getAttribute("data-value") : "basica"

                        let tarifaHip = 0.12 // Valor por defecto (Básica)
                        if (tarifaHipValue === "optima") tarifaHip = 0.1
                        if (tarifaHipValue === "premium") tarifaHip = 0.09

                        const gastoActual = consumo * tarifaActual
                        const gastoHip = consumo * tarifaHip
                        const ahorro = gastoActual - gastoHip
                        const ahorroAnual = ahorro * 12
                        const porcentajeAhorro = ((ahorro / gastoActual) * 100).toFixed(1)

                        document.getElementById("gasto-actual").textContent = gastoActual.toFixed(2) + " €"
                        document.getElementById("gasto-hip").textContent = gastoHip.toFixed(2) + " €"
                        document.getElementById("ahorro-mensual").textContent = ahorro.toFixed(2) + " €"
                        document.getElementById("ahorro-anual").textContent = ahorroAnual.toFixed(2) + " €"
                        document.getElementById("porcentaje-ahorro").textContent = porcentajeAhorro + "%"

                        document.getElementById("resultados").style.display = "block"
                      }}
                    >
                      Calcular mi ahorro
                    </Button>
                    <div
                      id="resultados"
                      className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100"
                      style={{ display: "none" }}
                    >
                      <h3 className="text-lg font-bold text-green-800 mb-2">Tu ahorro estimado</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Gasto actual mensual:</p>
                          <p id="gasto-actual" className="text-lg font-semibold">
                            0.00 €
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Gasto con Hip Energy:</p>
                          <p id="gasto-hip" className="text-lg font-semibold">
                            0.00 €
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Ahorro mensual:</p>
                          <p id="ahorro-mensual" className="text-lg font-semibold text-green-700">
                            0.00 €
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Ahorro anual:</p>
                          <p id="ahorro-anual" className="text-xl font-bold text-green-700">
                            0.00 €
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">Porcentaje de ahorro:</p>
                        <p id="porcentaje-ahorro" className="text-2xl font-bold text-green-700">
                          0%
                        </p>
                      </div>
                      <div className="mt-4 text-center">
                        <DialogTrigger asChild>
                          <Button className="bg-primary hover:bg-primary/90 text-black">
                            Contratar y empezar a ahorrar
                          </Button>
                        </DialogTrigger>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-8 pt-8" variants={stagger}>
              {[
                { value: "100%", label: "Energía Renovable" },
                { value: "24/7", label: "Servicio al Cliente" },
                { value: "30%", label: "Ahorro Promedio" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="transition-all duration-300 hover:scale-105 hover:bg-white/50 p-4 rounded-lg"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-sm text-black leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Paisaje de Andorra con paneles solares"
                width={500}
                height={500}
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-1/4 -right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-1/4 -left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />

            {/* Feature badges */}
            <motion.div
              className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-black font-medium flex items-center">
                <Zap className="w-4 h-4 mr-2 text-primary" /> Energía Inteligente
              </span>
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-black font-medium flex items-center">
                <Shield className="w-4 h-4 mr-2 text-primary" /> 100% Garantizada
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <span className="text-sm text-black">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

