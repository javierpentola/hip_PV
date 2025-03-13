"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// Componentes de gráficos temporalmente deshabilitados
// import { BarChart, LineChart, PieChart, AreaChart } from "@/components/ui/charts"
import { Zap, TrendingUp, TrendingDown, AlertCircle, Download } from "lucide-react"

// Datos para los gráficos
const consumoSemanal = [
  { dia: "Lun", consumo: 42 },
  { dia: "Mar", consumo: 38 },
  { dia: "Mié", consumo: 45 },
  { dia: "Jue", consumo: 40 },
  { dia: "Vie", consumo: 50 },
  { dia: "Sáb", consumo: 55 },
  { dia: "Dom", consumo: 48 },
]

const consumoPorHora = [
  { hora: "00:00", consumo: 10 },
  { hora: "04:00", consumo: 5 },
  { hora: "08:00", consumo: 15 },
  { hora: "12:00", consumo: 30 },
  { hora: "16:00", consumo: 25 },
  { hora: "20:00", consumo: 20 },
]

const desgloseConsumo = [
  { nombre: "Iluminación", valor: 20 },
  { nombre: "Electrodomésticos", valor: 35 },
  { nombre: "Calefacción", valor: 25 },
  { nombre: "Electrónica", valor: 15 },
  { nombre: "Otros", valor: 5 },
]

const comparativaMensual = [
  { mes: "Ene", actual: 300, anterior: 320 },
  { mes: "Feb", actual: 280, anterior: 300 },
  { mes: "Mar", actual: 310, anterior: 290 },
  { mes: "Abr", actual: 290, anterior: 280 },
  { mes: "May", actual: 320, anterior: 310 },
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

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Bienvenido, Juan</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Download size={20} />
          Descargar Informe
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Consumo Actual"
          value="423 kWh"
          change={12}
          trend="up"
          description="vs. mes anterior"
          icon={Zap}
          color="yellow"
        />
        <StatCard
          title="Costo Estimado"
          value="87,45 €"
          change={5}
          trend="down"
          description="vs. mes anterior"
          icon={TrendingDown}
          color="green"
        />
        <StatCard
          title="Eficiencia Energética"
          value="92%"
          change={3}
          trend="up"
          description="vs. promedio"
          icon={TrendingUp}
          color="blue"
        />
        <StatCard title="Próxima Factura" value="05/06" description="en 10 días" icon={AlertCircle} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Consumo Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de consumo semanal</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consumo por Hora</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de consumo por hora</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Desglose de Consumo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de desglose de consumo</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comparativa Mensual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gráfico de comparativa mensual</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Consejos de Ahorro</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Utiliza electrodomésticos eficientes para reducir el consumo.",
                "Aprovecha la luz natural y usa bombillas LED.",
                "Ajusta la temperatura del aire acondicionado o calefacción.",
                "Desconecta los aparatos electrónicos cuando no los uses.",
                "Utiliza programas de lavado en frío y carga completa.",
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

      <Card>
        <CardHeader>
          <CardTitle>Historial de Consumo Anual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de historial de consumo anual</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatCard({ title, value, change, trend, description, icon: Icon, color }) {
  const colorClasses = {
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
  }

  return (
    <Card className={`${colorClasses[color]} border-none`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="text-xs text-muted-foreground">
            <span className={trend === "up" ? "text-green-600" : "text-red-600"}>
              {trend === "up" ? "↑" : "↓"} {change}%
            </span>{" "}
            {description}
          </p>
        )}
        {!change && <p className="text-xs text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  )
}

