"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// Componentes de gráficos temporalmente deshabilitados
// import { BarChart, LineChart, AreaChart } from "@/components/ui/charts"
import { Zap, Download, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Datos de muestra
const consumoDiario = [
  { hora: "00:00", consumo: 2.1 },
  { hora: "04:00", consumo: 1.5 },
  { hora: "08:00", consumo: 3.2 },
  { hora: "12:00", consumo: 4.5 },
  { hora: "16:00", consumo: 3.8 },
  { hora: "20:00", consumo: 3.1 },
]

const consumoSemanal = [
  { dia: "Lun", consumo: 42 },
  { dia: "Mar", consumo: 38 },
  { dia: "Mié", consumo: 45 },
  { dia: "Jue", consumo: 40 },
  { dia: "Vie", consumo: 50 },
  { dia: "Sáb", consumo: 55 },
  { dia: "Dom", consumo: 48 },
]

const consumoMensual = [
  { dia: 1, consumo: 12 },
  { dia: 5, consumo: 14 },
  { dia: 10, consumo: 16 },
  { dia: 15, consumo: 15 },
  { dia: 20, consumo: 18 },
  { dia: 25, consumo: 17 },
  { dia: 30, consumo: 13 },
]

const consumoAnual = [
  { mes: "Ene", consumo: 300 },
  { mes: "Feb", consumo: 280 },
  { mes: "Mar", consumo: 310 },
  { mes: "Abr", consumo: 290 },
  { mes: "May", consumo: 320 },
  { mes: "Jun", consumo: 350 },
  { mes: "Jul", consumo: 380 },
  { mes: "Ago", consumo: 400 },
  { mes: "Sep", consumo: 360 },
  { mes: "Oct", consumo: 340 },
  { mes: "Nov", consumo: 320 },
  { mes: "Dic", consumo: 330 },
]

export function ConsumoContent() {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState("diario")

  const renderGrafico = () => {
    switch (periodoSeleccionado) {
      case "diario":
        return (
          <div className="h-[400px] mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de consumo diario</p>
          </div>
        )
      case "semanal":
        return (
          <div className="h-[400px] mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de consumo semanal</p>
          </div>
        )
      case "mensual":
        return (
          <div className="h-[400px] mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de consumo mensual</p>
          </div>
        )
      case "anual":
        return (
          <div className="h-[400px] mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de consumo anual</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Análisis de Consumo</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Download size={20} />
          Descargar Informe
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Consumo Energético</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Select value={periodoSeleccionado} onValueChange={setPeriodoSeleccionado}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Seleccionar periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="diario">Diario</SelectItem>
                <SelectItem value="semanal">Semanal</SelectItem>
                <SelectItem value="mensual">Mensual</SelectItem>
                <SelectItem value="anual">Anual</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={20} />
              Seleccionar Fechas
            </Button>
          </div>
          {renderGrafico()}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Consumo por Dispositivo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de consumo por dispositivo</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consumo en Horas Pico vs. Valle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] mt-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de consumo en horas pico vs valle</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recomendaciones de Optimización</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "Considera mover el uso de electrodomésticos grandes a horas valle para ahorrar.",
              "Tu nevera consume un 30% de tu energía. Verifica su eficiencia y temperatura.",
              "Cambia a iluminación LED para reducir el consumo en iluminación.",
              "Utiliza regletas con interruptor para evitar el consumo en espera de dispositivos electrónicos.",
              "Ajusta la temperatura de tu calefacción o aire acondicionado: cada grado puede suponer un 7% de ahorro.",
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

