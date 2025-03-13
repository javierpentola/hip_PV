"use client"

import { useState } from "react"
import { Home, BarChart2, FileText, Package, FileSignature, Headphones, Zap, Bell, User, LogOut } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DashboardContent } from "../components/dashboard-content"

const menuItems = [
  { id: "dashboard", icon: Home, label: "Dashboard" },
  { id: "consumo", icon: BarChart2, label: "Consumo" },
  { id: "facturacion", icon: FileText, label: "Facturación" },
  { id: "tarifas", icon: Package, label: "Tarifas" },
  { id: "contrato", icon: FileSignature, label: "Contrato" },
  { id: "soporte", icon: Headphones, label: "Soporte" },
  { id: "eficiencia", icon: Zap, label: "Eficiencia" },
  { id: "notificaciones", icon: Bell, label: "Notificaciones" },
]

export default function AreaCliente() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />
      // Aquí puedes agregar más casos para otros tabs
      default:
        return (
          <p className="text-xl font-semibold">Contenido de {menuItems.find((item) => item.id === activeTab)?.label}</p>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zzOMhrK8PXvQgXt8Fmty9lusRj0QMq.png"
              alt="Hip Energy Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="text-xl font-semibold text-gray-900">Área de Cliente</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Mi Perfil</span>
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Cerrar Sesión</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-yellow-100 text-yellow-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="flex-1 bg-white rounded-lg shadow p-6">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}

