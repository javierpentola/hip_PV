"use client"

import type React from "react"
import Link from "next/link"

import { useState, useEffect } from "react"
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
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerOffset = 80 // Ajusta este valor según la altura de tu header
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { name: "Sobre Nosotros", id: "sobre-nosotros" },
    { name: "Servicios", id: "servicios" },
    { name: "Cómo Funciona", id: "como-funciona" },
    { name: "Testimonios", id: "testimonios" },
  ]

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black">Hip Energy</div>

          <nav
            className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
            md:flex md:items-center md:space-x-8
          `}
          >
            <button className="md:hidden absolute top-6 right-6 text-black" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className="text-black hover:text-primary transition-colors duration-300 font-medium"
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <Link href="/login">
                  <Button variant="outline" className="border-black text-black hover:bg-primary hover:text-black">
                    Área Cliente
                  </Button>
                </Link>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-black">Contratar Ahora</Button>
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
              </div>
            </div>
          </nav>

          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

