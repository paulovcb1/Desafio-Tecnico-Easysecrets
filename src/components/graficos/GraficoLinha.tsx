import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { Produto } from "@/types/types"
import {type  Props } from "@/types/types"

export const description = "A line chart with dots"

const COLORS = ["#2563eb", "#60a5fa", "#f59e0b", "#10b981", "#ef4444"]

function transformarDadosPorMes(data: Produto[]) {
  const mesesSet = new Set<String>()

  data.forEach((produto) => {
    produto.vendas.forEach((vendas) => {
        mesesSet.add(vendas.mes)
    })
  })

  const meses = Array.from(mesesSet)

  return meses.map((mes) => {
    const total = data.reduce((soma, produto) => {
        const vendaMes = produto.vendas.find((v) => v.mes === mes)
        return soma + (vendaMes ? vendaMes.quantidade : 0)
    }, 0)

    return {
        mes,
        vendas: total,
    }
  })
}

function config(data: Produto[]): ChartConfig {
  const config: any = {}
  data.forEach((prod, idx) => {
    config[prod.produto] = {
      label: prod.produto,
      color: COLORS[idx % COLORS.length],
    }
  })
  return config as ChartConfig
}

export function GraficoLinha( {data}: Props) {

   const configGrafico = config(data)
  const dadosFormatados = transformarDadosPorMes(data)
  console.log(dadosFormatados)
  return (
    <Card className="flex flex-col p-4 hover:shadow-lg transition duration-300 ease-in-out ">
      <CardHeader>
        <CardTitle>Tendencia Mensal</CardTitle>
        <CardDescription>Janeiro - Junho 2025</CardDescription>
      </CardHeader>
        <ChartContainer config={configGrafico}>
          <LineChart
            accessibilityLayer
            data={dadosFormatados}
            margin={{
              top: 12,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="mes"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={30}
                />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey={"vendas"}
              type="natural"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{
                fill: "#60a5fa",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
    </Card>
  )
}
