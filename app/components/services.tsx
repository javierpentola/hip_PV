"use client"

import Image from "next/image"
import { CheckCircle, Home, Building2, Lightbulb, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Modificar el array de servicios para incluir contenido detallado
  const services = [
    {
      icon: Home,
      title: "Hogares",
      description: "Tarifas competitivas y personalizadas para el consumo doméstico.",
      detailedContent: {
        title: "Energía para Hogares",
        description: "Soluciones energéticas diseñadas específicamente para las necesidades de los hogares andorranos.",
        features: [
          "Tarifas adaptadas a diferentes perfiles de consumo",
          "Energía 100% renovable certificada",
          "Facturación clara y transparente sin sorpresas",
          "Herramientas de monitorización para controlar tu consumo",
          "Atención al cliente personalizada 24/7",
        ],
        image:
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        cta: "Ver Tarifas para Hogares",
      },
    },
    {
      icon: Building2,
      title: "Empresas",
      description: "Soluciones energéticas a medida para negocios de todos los tamaños.",
      detailedContent: {
        title: "Soluciones para Empresas",
        description:
          "Ofrecemos planes energéticos adaptados a las necesidades específicas de cada negocio, desde pequeños comercios hasta grandes corporaciones.",
        features: [
          "Tarifas personalizadas según volumen y patrón de consumo",
          "Gestión multi-punto para empresas con varias sedes",
          "Facturación detallada y personalizable",
          "Asesoramiento energético especializado",
          "Gestor de cuenta dedicado para grandes clientes",
        ],
        image:
          "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        cta: "Solicitar Oferta Empresarial",
      },
    },
    {
      icon: Lightbulb,
      title: "Eficiencia",
      description: "Auditorías energéticas y soluciones para optimizar tu consumo.",
      detailedContent: {
        title: "Servicios de Eficiencia Energética",
        description:
          "Ayudamos a nuestros clientes a reducir su consumo energético y su huella de carbono mediante soluciones de eficiencia personalizadas.",
        features: [
          "Auditorías energéticas completas",
          "Recomendaciones de optimización personalizadas",
          "Instalación de sistemas de control inteligente",
          "Análisis de patrones de consumo",
          "Certificación energética de edificios",
        ],
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        cta: "Solicitar Auditoría",
      },
    },
    {
      icon: BarChart3,
      title: "Monitorización",
      description: "Seguimiento en tiempo real de tu consumo energético.",
      detailedContent: {
        title: "Monitorización Inteligente",
        description:
          "Nuestra plataforma de monitorización te permite seguir tu consumo energético en tiempo real y tomar decisiones informadas para optimizarlo.",
        features: [
          "Seguimiento de consumo en tiempo real",
          "Análisis detallado por franjas horarias",
          "Alertas de consumos inusuales",
          "Comparativas con períodos anteriores",
          "Recomendaciones automáticas de ahorro",
        ],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        cta: "Probar Demo",
      },
    },
  ]

  // Función para mostrar el modal con JavaScript puro
  const showServiceModal = (service) => {
    // Crear el elemento del modal
    const modalOverlay = document.createElement("div")
    modalOverlay.className = "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"

    // Crear el contenido del modal
    const modalContent = document.createElement("div")
    modalContent.className =
      "bg-white rounded-lg max-w-[650px] w-full max-h-[90vh] overflow-auto animate-in fade-in-0 zoom-in-95"

    // Estructura HTML del modal
    modalContent.innerHTML = `
      <div class="p-6">
        <div class="flex flex-col space-y-1.5 mb-4">
          <h2 class="text-2xl font-semibold">${service.detailedContent.title}</h2>
          <p class="text-gray-500">${service.detailedContent.description}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div class="space-y-4">
            <h4 class="font-semibold text-gray-900">Características principales:</h4>
            <ul class="space-y-2">
              ${service.detailedContent.features
                .map(
                  (feature) => `
                <li class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-primary flex-shrink-0 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span class="text-gray-700">${feature}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 text-black h-10 px-4 py-2 mt-4">
              ${service.detailedContent.cta}
            </button>
          </div>
          <div class="relative h-64 rounded-lg overflow-hidden">
            <img 
              src="${service.detailedContent.image}" 
              alt="${service.title}" 
              class="object-cover absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
      <div class="absolute top-4 right-4">
        <button class="rounded-full p-1.5 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100" id="close-modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `

    // Añadir el contenido al overlay
    modalOverlay.appendChild(modalContent)

    // Añadir el overlay al body
    document.body.appendChild(modalOverlay)

    // Deshabilitar el scroll del body
    document.body.style.overflow = "hidden"

    // Función para cerrar el modal
    const closeModal = () => {
      document.body.removeChild(modalOverlay)
      document.body.style.overflow = ""
    }

    // Añadir evento de cierre al botón
    const closeButton = modalContent.querySelector("#close-modal")
    closeButton.addEventListener("click", closeModal)

    // Cerrar el modal al hacer clic fuera
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal()
      }
    })
  }

  // Función para mostrar el modal de tarifas
  const showTarifasModal = () => {
    // Crear el elemento del modal
    const modalOverlay = document.createElement("div")
    modalOverlay.className = "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"

    // Crear el contenido del modal
    const modalContent = document.createElement("div")
    modalContent.className =
      "bg-white rounded-lg max-w-[900px] w-full max-h-[90vh] overflow-auto animate-in fade-in-0 zoom-in-95"

    // Estructura HTML del modal
    modalContent.innerHTML = `
      <div class="p-6">
        <div class="flex flex-col space-y-1.5 mb-4">
          <h2 class="text-2xl font-semibold">Nuestras Tarifas</h2>
          <p class="text-gray-500">Elige el plan que mejor se adapte a tus necesidades energéticas.</p>
        </div>
        
        <div class="tabs w-full">
          <div class="tabs-list grid w-full grid-cols-2 mb-6">
            <button class="tab-trigger py-2 font-medium text-center border-b-2 border-primary" data-tab="hogares">Hogares</button>
            <button class="tab-trigger py-2 font-medium text-center border-b-2 border-gray-200" data-tab="empresas">Empresas</button>
          </div>
          
          <div class="tab-content" data-tab="hogares">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Tarifa Básica -->
              <div class="relative overflow-hidden border-2 bg-blue-50 border-blue-200 rounded-lg">
                <div class="p-4 border-b">
                  <h3 class="text-lg font-bold">Básica</h3>
                  <div class="flex items-end gap-1 mt-2">
                    <span class="text-3xl font-bold">0,12</span>
                    <span class="text-lg">€/kWh</span>
                  </div>
                  <p class="text-sm text-gray-500">Ideal para viviendas pequeñas con consumo moderado</p>
                </div>
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Energía 100% renovable</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Tarifa plana sin discriminación horaria</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Facturación electrónica</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Atención al cliente 24/7</span>
                    </li>
                  </ul>
                </div>
                <div class="p-4 border-t border-gray-100 text-center">
                  <span class="text-sm font-medium text-gray-600">Sin permanencia • Sin compromiso</span>
                </div>
              </div>
              
              <!-- Tarifa Óptima -->
              <div class="relative overflow-hidden border-2 bg-primary/10 border-primary rounded-lg shadow-lg">
                <div class="absolute top-0 right-0 bg-primary text-black px-3 py-1 text-xs font-bold">
                  MÁS POPULAR
                </div>
                <div class="p-4 border-b">
                  <h3 class="text-lg font-bold">Óptima</h3>
                  <div class="flex items-end gap-1 mt-2">
                    <span class="text-3xl font-bold">0,10</span>
                    <span class="text-lg">€/kWh</span>
                  </div>
                  <p class="text-sm text-gray-500">La mejor opción para la mayoría de hogares</p>
                </div>
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Energía 100% renovable</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Discriminación horaria en 2 periodos</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Facturación electrónica</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Asesoramiento energético personalizado</span>
                    </li>
                  </ul>
                </div>
                <div class="p-4 border-t border-gray-100 text-center">
                  <span class="text-sm font-medium text-primary">Sin permanencia • Sin compromiso</span>
                </div>
              </div>
              
              <!-- Tarifa Premium -->
              <div class="relative overflow-hidden border-2 bg-green-50 border-green-200 rounded-lg">
                <div class="p-4 border-b">
                  <h3 class="text-lg font-bold">Premium</h3>
                  <div class="flex items-end gap-1 mt-2">
                    <span class="text-3xl font-bold">0,09</span>
                    <span class="text-lg">€/kWh</span>
                  </div>
                  <p class="text-sm text-gray-500">Para hogares con alto consumo energético</p>
                </div>
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Energía 100% renovable</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Discriminación horaria en 3 periodos</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Atención al cliente 24/7 prioritaria</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Descuentos en servicios adicionales</span>
                    </li>
                  </ul>
                </div>
                <div class="p-4 border-t border-gray-100 text-center">
                  <span class="text-sm font-medium text-gray-600">Sin permanencia • Sin compromiso</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="tab-content hidden" data-tab="empresas">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Tarifa Empresarial Básica -->
              <div class="relative overflow-hidden border-2 bg-blue-50 border-blue-200 rounded-lg">
                <div class="p-4 border-b">
                  <h3 class="text-lg font-bold">Empresarial Básica</h3>
                  <div class="flex items-end gap-1 mt-2">
                    <span class="text-3xl font-bold">0,11</span>
                    <span class="text-lg">€/kWh</span>
                  </div>
                  <p class="text-sm text-gray-500">Para pequeños negocios y comercios</p>
                </div>
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Energía 100% renovable</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Tarifa plana sin discriminación horaria</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Portal empresarial básico</span>
                    </li>
                  </ul>
                </div>
                <div class="p-4 border-t border-gray-100 text-center">
                  <span class="text-sm font-medium text-gray-600">Sin permanencia • Activación en 24h</span>
                </div>
              </div>
              
              <!-- Tarifa Empresarial Plus -->
              <div class="relative overflow-hidden border-2 bg-primary/10 border-primary rounded-lg shadow-lg">
                <div class="absolute top-0 right-0 bg-primary text-black px-3 py-1 text-xs font-bold">
                  MÁS POPULAR
                </div>
                <div class="p-4 border-b">
                  <h3 class="text-lg font-bold">Empresarial Plus</h3>
                  <div class="flex items-end gap-1 mt-2">
                    <span class="text-3xl font-bold">0,09</span>
                    <span class="text-lg">€/kWh</span>
                  </div>
                  <p class="text-sm text-gray-500">Para medianas empresas con múltiples puntos</p>
                </div>
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Discriminación horaria personalizable</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Portal empresarial avanzado</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Gestión multi-punto</span>
                    </li>
                  </ul>
                </div>
                <div class="p-4 border-t border-gray-100 text-center">
                  <span class="text-sm font-medium text-primary">Sin permanencia • Activación en 24h</span>
                </div>
              </div>
              
              <!-- Tarifa Empresarial Corporate -->
              <div class="relative overflow-hidden border-2 bg-purple-50 border-purple-200 rounded-lg">
                <div class="p-4 border-b">
                  <h3 class="text-lg font-bold">Empresarial Corporate</h3>
                  <div class="flex items-end gap-1 mt-2">
                    <span class="text-3xl font-bold">Personalizado</span>
                  </div>
                  <p class="text-sm text-gray-500">Soluciones a medida para grandes empresas</p>
                </div>
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-  strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Tarifas personalizadas según consumo</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Gestor de cuenta dedicado</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="h-5 w-5 text-green-500 flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span class="text-gray-700">Soluciones integrales multi-sede</span>
                    </li>
                  </ul>
                </div>
                <div class="p-4 border-t border-gray-100 text-center">
                  <span class="text-sm font-medium text-gray-600">Consulta con nuestro equipo comercial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-500 mb-4">
            Todas nuestras tarifas incluyen IVA y están sujetas a los términos y condiciones de Hip Energy.
            Sin permanencia ni penalizaciones por cancelación.
          </p>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" id="close-modal">
            Volver a Servicios
          </button>
        </div>
      </div>
      <div class="absolute top-4 right-4">
        <button class="rounded-full p-1.5 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100" id="close-modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `

    // Añadir el contenido al overlay
    modalOverlay.appendChild(modalContent)

    // Añadir el overlay al body
    document.body.appendChild(modalOverlay)

    // Deshabilitar el scroll del body
    document.body.style.overflow = "hidden"

    // Función para cerrar el modal
    const closeModal = () => {
      document.body.removeChild(modalOverlay)
      document.body.style.overflow = ""
    }

    // Añadir evento de cierre a todos los botones de cierre
    const closeButtons = modalContent.querySelectorAll("#close-modal")
    closeButtons.forEach((button) => {
      button.addEventListener("click", closeModal)
    })

    // Cerrar el modal al hacer clic fuera
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal()
      }
    })

    // Manejar las pestañas
    const tabTriggers = modalContent.querySelectorAll(".tab-trigger")
    const tabContents = modalContent.querySelectorAll(".tab-content")

    tabTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        // Desactivar todas las pestañas
        tabTriggers.forEach((t) => {
          t.classList.remove("border-primary")
          t.classList.add("border-gray-200")
        })

        // Ocultar todos los contenidos
        tabContents.forEach((content) => {
          content.classList.add("hidden")
        })

        // Activar la pestaña seleccionada
        trigger.classList.remove("border-gray-200")
        trigger.classList.add("border-primary")

        // Mostrar el contenido seleccionado
        const tabId = trigger.getAttribute("data-tab")
        const activeContent = modalContent.querySelector(`.tab-content[data-tab="${tabId}"]`)
        activeContent.classList.remove("hidden")
      })
    })
  }

  return (
    <section id="servicios" ref={ref} className="py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-medium tracking-wider">SERVICIOS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Soluciones energéticas
            <br />
            para cada necesidad
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Ofrecemos una amplia gama de servicios energéticos diseñados para satisfacer las necesidades específicas de
            hogares y empresas en Andorra.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className={`relative aspect-video rounded-2xl overflow-hidden shadow-xl`}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Smart Energy Management"
              width={600}
              height={400}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
          <motion.div
            className={`space-y-8`}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Energía para Hogares</h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestras tarifas para hogares están diseñadas para maximizar el ahorro y minimizar el impacto ambiental.
                Con planes flexibles que se adaptan a tu estilo de vida y consumo energético.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Tarifas transparentes sin costes ocultos",
                "Energía 100% renovable certificada",
                "Facturación digital y pagos flexibles",
                "Asesoramiento personalizado para reducir el consumo",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              className="bg-primary text-black hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              onClick={showTarifasModal}
            >
              Ver Tarifas para Hogares
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-primary/20">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button
                variant="link"
                className="text-primary p-0 h-auto group"
                onClick={() => showServiceModal(service)}
              >
                Saber más <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

