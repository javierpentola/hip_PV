"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Componentes de gráficos temporalmente deshabilitados
// import { BarChart, LineChart } from "@/components/ui/charts"
import {
  Download,
  FileText,
  CreditCard,
  Calendar,
  ChevronDown,
  ChevronUp,
  Eye,
  Printer,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingDown,
  TrendingUp,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// Datos de muestra para facturas
const facturas = [
  {
    id: "F-2023-12",
    fecha: "01/12/2023",
    periodo: "Noviembre 2023",
    monto: 92.35,
    estado: "Pagada",
    consumo: 423,
    vencimiento: "15/12/2023",
    metodoPago: "Tarjeta terminada en 1234",
    fechaPago: "10/12/2023",
    conceptos: [
      { concepto: "Término de energía", importe: 65.2 },
      { concepto: "Término de potencia", importe: 15.4 },
      { concepto: "Impuesto eléctrico", importe: 4.1 },
      { concepto: "Alquiler de equipos", importe: 1.5 },
      { concepto: "IVA (21%)", importe: 6.15 },
    ],
  },
  {
    id: "F-2023-11",
    fecha: "01/11/2023",
    periodo: "Octubre 2023",
    monto: 88.15,
    estado: "Pagada",
    consumo: 405,
    vencimiento: "15/11/2023",
    metodoPago: "Tarjeta terminada en 1234",
    fechaPago: "12/11/2023",
    conceptos: [
      { concepto: "Término de energía", importe: 62.3 },
      { concepto: "Término de potencia", importe: 15.4 },
      { concepto: "Impuesto eléctrico", importe: 3.95 },
      { concepto: "Alquiler de equipos", importe: 1.5 },
      { concepto: "IVA (21%)", importe: 5.0 },
    ],
  },
  {
    id: "F-2023-10",
    fecha: "01/10/2023",
    periodo: "Septiembre 2023",
    monto: 95.6,
    estado: "Pagada",
    consumo: 440,
    vencimiento: "15/10/2023",
    metodoPago: "Tarjeta terminada en 1234",
    fechaPago: "08/10/2023",
    conceptos: [
      { concepto: "Término de energía", importe: 68.5 },
      { concepto: "Término de potencia", importe: 15.4 },
      { concepto: "Impuesto eléctrico", importe: 4.25 },
      { concepto: "Alquiler de equipos", importe: 1.5 },
      { concepto: "IVA (21%)", importe: 5.95 },
    ],
  },
  {
    id: "F-2023-09",
    fecha: "01/09/2023",
    periodo: "Agosto 2023",
    monto: 105.2,
    estado: "Pagada",
    consumo: 480,
    vencimiento: "15/09/2023",
    metodoPago: "Tarjeta terminada en 1234",
    fechaPago: "10/09/2023",
    conceptos: [
      { concepto: "Término de energía", importe: 76.8 },
      { concepto: "Término de potencia", importe: 15.4 },
      { concepto: "Impuesto eléctrico", importe: 4.7 },
      { concepto: "Alquiler de equipos", importe: 1.5 },
      { concepto: "IVA (21%)", importe: 6.8 },
    ],
  },
  {
    id: "F-2023-08",
    fecha: "01/08/2023",
    periodo: "Julio 2023",
    monto: 110.45,
    estado: "Pagada",
    consumo: 510,
    vencimiento: "15/08/2023",
    metodoPago: "Tarjeta terminada en 1234",
    fechaPago: "12/08/2023",
    conceptos: [
      { concepto: "Término de energía", importe: 81.6 },
      { concepto: "Término de potencia", importe: 15.4 },
      { concepto: "Impuesto eléctrico", importe: 4.95 },
      { concepto: "Alquiler de equipos", importe: 1.5 },
      { concepto: "IVA (21%)", importe: 7.0 },
    ],
  },
  {
    id: "F-2023-07",
    fecha: "01/07/2023",
    periodo: "Junio 2023",
    monto: 98.75,
    estado: "Pagada",
    consumo: 455,
    vencimiento: "15/07/2023",
    metodoPago: "Tarjeta terminada en 1234",
    fechaPago: "10/07/2023",
    conceptos: [
      { concepto: "Término de energía", importe: 70.8 },
      { concepto: "Término de potencia", importe: 15.4 },
      { concepto: "Impuesto eléctrico", importe: 4.4 },
      { concepto: "Alquiler de equipos", importe: 1.5 },
      { concepto: "IVA (21%)", importe: 6.65 },
    ],
  },
]

// Datos para gráficos
const datosGastoMensual = facturas
  .map((factura) => ({
    mes: factura.periodo.split(" ")[0],
    importe: factura.monto,
    consumo: factura.consumo,
  }))
  .reverse()

const metodosDisponibles = [
  { id: "tarjeta1", tipo: "Tarjeta", numero: "•••• •••• •••• 1234", expira: "12/2025", principal: true },
  { id: "tarjeta2", tipo: "Tarjeta", numero: "•••• •••• •••• 5678", expira: "08/2024", principal: false },
  { id: "domiciliacion", tipo: "Domiciliación Bancaria", numero: "ES91 2100 0418 4502 0005 1332", principal: false },
]

export function FacturacionContent() {
  const [tabActiva, setTabActiva] = useState("historial")
  const [facturaSeleccionada, setFacturaSeleccionada] = useState<{
    id: string;
    fecha: string;
    periodo: string;
    monto: number;
    estado: string;
    consumo: number;
    vencimiento: string;
    metodoPago: string;
    fechaPago: string;
    conceptos: Array<{ concepto: string; importe: number }>;
  } | null>(null)
  const [facturaExpandida, setFacturaExpandida] = useState<string | null>(null)

  const toggleFacturaExpandida = (id: string) => {
    if (facturaExpandida === id) {
      setFacturaExpandida(null)
    } else {
      setFacturaExpandida(id)
    }
  }

  const verDetalleFactura = (factura: typeof facturas[0]) => {
    setFacturaSeleccionada(factura)
    setTabActiva("detalle")
  }

  const getBadgeColor = (estado: string) => {
    switch (estado) {
      case "Pagada":
        return "bg-green-100 text-green-800"
      case "Pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "Vencida":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case "Pagada":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Pendiente":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "Vencida":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Facturación</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={18} />
            <span>Filtrar por fecha</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={18} />
            <span>Exportar</span>
          </Button>
        </div>
      </div>

      <Tabs value={tabActiva} onValueChange={setTabActiva} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="historial">Historial de Facturas</TabsTrigger>
          <TabsTrigger value="detalle" disabled={!facturaSeleccionada}>
            Detalle de Factura
          </TabsTrigger>
          <TabsTrigger value="metodos">Métodos de Pago</TabsTrigger>
        </TabsList>

        <TabsContent value="historial" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resumen de Facturación</CardTitle>
              <CardDescription>Visualiza tu historial de facturas y tendencias de consumo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Evolución de Gasto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Gráfico de gasto mensual</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Evolución de Consumo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Gráfico de gasto mensual</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Factura</TableHead>
                      <TableHead>Periodo</TableHead>
                      <TableHead>Importe</TableHead>
                      <TableHead>Consumo</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {facturas.map((factura) => (
                      <TableRow key={factura.id} className="group">
                        <TableCell className="font-medium">{factura.id}</TableCell>
                        <TableCell>{factura.periodo}</TableCell>
                        <TableCell>{factura.monto.toFixed(2)} €</TableCell>
                        <TableCell>{factura.consumo} kWh</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {getEstadoIcon(factura.estado)}
                            <Badge variant="outline" className={getBadgeColor(factura.estado)}>
                              {factura.estado}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleFacturaExpandida(factura.id)}
                              className="h-8 w-8"
                            >
                              {facturaExpandida === factura.id ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => verDetalleFactura(factura)}
                              className="h-8 w-8"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="detalle" className="space-y-6">
          {facturaSeleccionada && (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Factura {facturaSeleccionada.id}</CardTitle>
                    <CardDescription>Periodo: {facturaSeleccionada.periodo}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Printer className="h-4 w-4" />
                      <span>Imprimir</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>Descargar PDF</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Información General</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Fecha de emisión:</dt>
                            <dd>{facturaSeleccionada.fecha}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Fecha de vencimiento:</dt>
                            <dd>{facturaSeleccionada.vencimiento}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Estado:</dt>
                            <dd className="flex items-center gap-1">
                              {getEstadoIcon(facturaSeleccionada.estado)}
                              <span>{facturaSeleccionada.estado}</span>
                            </dd>
                          </div>
                          {facturaSeleccionada.fechaPago && (
                            <div className="flex justify-between">
                              <dt className="text-gray-500">Fecha de pago:</dt>
                              <dd>{facturaSeleccionada.fechaPago}</dd>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Método de pago:</dt>
                            <dd>{facturaSeleccionada.metodoPago}</dd>
                          </div>
                        </dl>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Consumo</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-2">{facturaSeleccionada.consumo} kWh</div>
                        <div className="flex items-center gap-1 text-sm mb-4">
                          {facturaSeleccionada.consumo > 405 ? (
                            <>
                              <TrendingUp className="h-4 w-4 text-red-500" />
                              <span className="text-red-500">
                                +{((facturaSeleccionada.consumo / 405 - 1) * 100).toFixed(1)}% vs. mes anterior
                              </span>
                            </>
                          ) : (
                            <>
                              <TrendingDown className="h-4 w-4 text-green-500" />
                              <span className="text-green-500">
                                -{((1 - facturaSeleccionada.consumo / 405) * 100).toFixed(1)}% vs. mes anterior
                              </span>
                            </>
                          )}
                        </div>
                        <Progress value={facturaSeleccionada.consumo / 5} className="h-2 mb-2" />
                        <p className="text-xs text-gray-500">Consumo medio en tu zona: 410 kWh</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Importe Total</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-2">{facturaSeleccionada.monto.toFixed(2)} €</div>
                        <div className="flex items-center gap-1 text-sm mb-4">
                          {facturaSeleccionada.monto > 88.15 ? (
                            <>
                              <TrendingUp className="h-4 w-4 text-red-500" />
                              <span className="text-red-500">
                                +{((facturaSeleccionada.monto / 88.15 - 1) * 100).toFixed(1)}% vs. mes anterior
                              </span>
                            </>
                          ) : (
                            <>
                              <TrendingDown className="h-4 w-4 text-green-500" />
                              <span className="text-green-500">
                                -{((1 - facturaSeleccionada.monto / 88.15) * 100).toFixed(1)}% vs. mes anterior
                              </span>
                            </>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">
                          Precio medio por kWh: {(facturaSeleccionada.monto / facturaSeleccionada.consumo).toFixed(3)} €
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base font-medium">Desglose de Conceptos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Concepto</TableHead>
                            <TableHead className="text-right">Importe</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {facturaSeleccionada.conceptos.map((concepto, index) => (
                            <TableRow key={index}>
                              <TableCell>{concepto.concepto}</TableCell>
                              <TableCell className="text-right">{concepto.importe.toFixed(2)} €</TableCell>
                            </TableRow>
                          ))}
                          <TableRow className="font-bold">
                            <TableCell>Total</TableCell>
                            <TableCell className="text-right">{facturaSeleccionada.monto.toFixed(2)} €</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setTabActiva("historial")}>
                      Volver al Historial
                    </Button>
                    <Button>Descargar Factura</Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        <TabsContent value="metodos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pago</CardTitle>
              <CardDescription>Gestiona tus métodos de pago y configura la domiciliación bancaria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {metodosDisponibles.map((metodo) => (
                  <div key={metodo.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      {metodo.tipo === "Tarjeta" ? (
                        <CreditCard className="h-8 w-8 text-primary" />
                      ) : (
                        <FileText className="h-8 w-8 text-primary" />
                      )}
                      <div>
                        <div className="font-medium">{metodo.tipo}</div>
                        <div className="text-sm text-gray-500">{metodo.numero}</div>
                        {metodo.expira && <div className="text-xs text-gray-500">Expira: {metodo.expira}</div>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {metodo.principal && (
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Principal
                        </Badge>
                      )}
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                      {!metodo.principal && (
                        <Button variant="outline" size="sm">
                          Eliminar
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <Button className="w-full sm:w-auto">Añadir Nuevo Método de Pago</Button>
                <p className="text-sm text-gray-500">
                  Tus datos de pago están seguros y encriptados. Nunca compartimos esta información con terceros.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base font-medium">Configuración de Facturación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Factura Electrónica</h4>
                      <p className="text-sm text-gray-500">Recibe tus facturas por email</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="factura-electronica"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Notificaciones de Pago</h4>
                      <p className="text-sm text-gray-500">Recibe alertas antes del vencimiento</p>
                    </div>
                    <div className="flex items-center h-5">
                      <input
                        id="notificaciones-pago"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <label htmlFor="dia-cargo" className="block text-sm font-medium text-gray-700 mb-1">
                      Día de cargo preferido
                    </label>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar día" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 5, 10, 15, 20, 25].map((dia) => (
                          <SelectItem key={dia} value={dia.toString()}>
                            Día {dia} de cada mes
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

