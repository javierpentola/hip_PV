"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Building2, Users, Zap, FileText } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openDialog, setOpenDialog] = useState(false)
  const [openEmpresaDialog, setOpenEmpresaDialog] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmittingEmpresa, setIsSubmittingEmpresa] = useState(false)
  const { toast } = useToast()

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulamos una petición a un servidor
    setTimeout(() => {
      setIsSubmitting(false)
      setOpenDialog(false)

      toast({
        title: "Solicitud enviada con éxito",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
        variant: "default",
      })
    }, 1500)
  }

  const handleSubmitEmpresa = (e) => {
    e.preventDefault()
    setIsSubmittingEmpresa(true)

    // Simulamos una petición a un servidor
    setTimeout(() => {
      setIsSubmittingEmpresa(false)
      setOpenEmpresaDialog(false)

      toast({
        title: "Solicitud empresarial enviada",
        description: "Nuestro equipo comercial te contactará en las próximas 24-48 horas con una oferta personalizada.",
        variant: "default",
      })
    }, 1500)
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.span className="text-primary font-medium tracking-wider" variants={itemVariants}>
              ÚNETE AHORA
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6" variants={itemVariants}>
              Cambia a energía limpia hoy
              <br />y ahorra en tu factura
            </motion.h2>
            <motion.p className="text-xl text-gray-600 mb-8" variants={itemVariants}>
              Únete a miles de hogares y empresas en Andorra que ya disfrutan de energía limpia y facturas más bajas con
              Hip Energy.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <motion.h3 className="text-2xl font-bold text-gray-900 mb-4" variants={itemVariants}>
                  Plan Residencial Básico
                </motion.h3>
                <motion.div className="flex items-baseline mb-4" variants={itemVariants}>
                  <span className="text-4xl font-bold text-primary">0,12€</span>
                  <span className="ml-2 text-gray-600">/kWh</span>
                </motion.div>
                <motion.ul className="space-y-3 mb-8" variants={containerVariants}>
                  {[
                    "Energía 100% renovable",
                    "Sin permanencia",
                    "Facturación electrónica",
                    "Atención al cliente 24/7",
                  ].map((feature, index) => (
                    <motion.li key={index} className="flex items-center" variants={itemVariants}>
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={itemVariants}>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-black transition-all duration-300 hover:scale-105"
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
                            Completa el formulario para iniciar el proceso de contratación. Te contactaremos en menos de
                            24 horas.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="nombre" className="text-right">
                              Nombre
                            </Label>
                            <Input id="nombre" placeholder="Tu nombre" className="col-span-3" required />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="apellidos" className="text-right">
                              Apellidos
                            </Label>
                            <Input id="apellidos" placeholder="Tus apellidos" className="col-span-3" required />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="tu@ejemplo.com"
                              className="col-span-3"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="telefono" className="text-right">
                              Teléfono
                            </Label>
                            <Input
                              id="telefono"
                              type="tel"
                              placeholder="+376 XXX XXX"
                              className="col-span-3"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="tipo-cliente" className="text-right">
                              Tipo de cliente
                            </Label>
                            <Select defaultValue="particular">
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
                </motion.div>
              </div>
              <div className="bg-primary/10 p-8 md:p-12">
                <motion.h3 className="text-2xl font-bold text-gray-900 mb-4" variants={itemVariants}>
                  ¿Por qué elegir Hip Energy?
                </motion.h3>
                <motion.ul className="space-y-4" variants={containerVariants}>
                  {[
                    {
                      title: "Energía 100% Renovable",
                      description: "Toda nuestra electricidad proviene de fuentes renovables certificadas.",
                    },
                    {
                      title: "Ahorro Garantizado",
                      description: "Nuestros clientes ahorran un promedio del 30% en sus facturas.",
                    },
                    {
                      title: "Servicio Excepcional",
                      description: "Atención al cliente 24/7 y gestión sencilla a través de nuestra app.",
                    },
                  ].map((reason, index) => (
                    <motion.li key={index} className="flex items-start gap-3" variants={itemVariants}>
                      <div className="w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{reason.title}</h4>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-6">
              ¿Necesitas un plan personalizado para tu empresa?
              <br />
              Contáctanos para recibir una oferta adaptada a tus necesidades específicas.
            </p>
            <Dialog open={openEmpresaDialog} onOpenChange={setOpenEmpresaDialog}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105"
                >
                  Solicitar Oferta para Empresas
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[650px]">
                <DialogHeader>
                  <DialogTitle className="text-xl">Soluciones Energéticas para Empresas</DialogTitle>
                  <DialogDescription>
                    Cuéntanos sobre tu empresa y tus necesidades energéticas para recibir una oferta personalizada.
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="formulario" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="formulario">Formulario de Solicitud</TabsTrigger>
                    <TabsTrigger value="beneficios">Beneficios Empresariales</TabsTrigger>
                  </TabsList>
                  <TabsContent value="formulario">
                    <form onSubmit={handleSubmitEmpresa}>
                      <div className="grid gap-4 py-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="empresa">Nombre de la empresa</Label>
                            <Input id="empresa" placeholder="Nombre de tu empresa" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="sector">Sector</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona un sector" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="comercio">Comercio</SelectItem>
                                <SelectItem value="hosteleria">Hostelería</SelectItem>
                                <SelectItem value="industria">Industria</SelectItem>
                                <SelectItem value="servicios">Servicios</SelectItem>
                                <SelectItem value="otro">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="contacto">Persona de contacto</Label>
                            <Input id="contacto" placeholder="Nombre y apellidos" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cargo">Cargo</Label>
                            <Input id="cargo" placeholder="Tu cargo en la empresa" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email-empresa">Email de contacto</Label>
                            <Input id="email-empresa" type="email" placeholder="email@empresa.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="telefono-empresa">Teléfono</Label>
                            <Input id="telefono-empresa" type="tel" placeholder="+376 XXX XXX" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="consumo">Consumo energético mensual aproximado (kWh)</Label>
                          <Input id="consumo" type="number" placeholder="Ej: 5000" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="puntos">Número de puntos de suministro</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 punto</SelectItem>
                              <SelectItem value="2-5">2-5 puntos</SelectItem>
                              <SelectItem value="6-10">6-10 puntos</SelectItem>
                              <SelectItem value="mas10">Más de 10 puntos</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="necesidades">Describe tus necesidades específicas</Label>
                          <Textarea
                            id="necesidades"
                            placeholder="Cuéntanos sobre tus necesidades energéticas, horarios de mayor consumo, etc."
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                      <DialogFooter className="mt-6">
                        <Button
                          type="submit"
                          className="bg-primary hover:bg-primary/90 text-black"
                          disabled={isSubmittingEmpresa}
                        >
                          {isSubmittingEmpresa ? "Enviando..." : "Solicitar Oferta Personalizada"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </TabsContent>
                  <TabsContent value="beneficios">
                    <div className="space-y-6 py-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Building2 className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Soluciones Multi-sede</h4>
                            <p className="text-gray-600 text-sm">
                              Gestiona todos tus puntos de suministro desde una única plataforma, con facturación
                              unificada y análisis comparativo.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Gestor Personal</h4>
                            <p className="text-gray-600 text-sm">
                              Tendrás un gestor dedicado para atender todas tus consultas y necesidades energéticas.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Auditoría Energética</h4>
                            <p className="text-gray-600 text-sm">
                              Análisis completo de tu consumo con recomendaciones personalizadas para optimizar costes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">Facturación a Medida</h4>
                            <p className="text-gray-600 text-sm">
                              Adaptamos nuestros procesos de facturación a tus necesidades contables y administrativas.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg mt-6">
                        <h4 className="font-bold text-gray-900 mb-2">Casos de éxito</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Nuestros clientes empresariales han conseguido ahorros de hasta un 40% en sus facturas
                          energéticas, además de mejorar su huella de carbono y su imagen corporativa.
                        </p>
                        <div className="flex justify-end">
                          <Button
                            variant="outline"
                            className="text-primary border-primary"
                            onClick={() => document.querySelector('[data-value="formulario"]').click()}
                          >
                            Solicitar mi oferta
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

