
import { Pie, PieChart, Cell } from "recharts"
import { type Props, type Produto } from "../../types/types"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const COLORS = ["#2563eb", "#60a5fa", "#f59e0b", "#10b981", "#ef4444"]

function transformarDados(data: Produto[]) {
  return data.map(prod => ({
    name: prod.produto,
    value: prod.vendas.reduce((soma, venda) => soma + venda.quantidade, 0),
  }))
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

export function GraficoPizza({ data }: Props) {
  const configGrafico = config(data)
  const dadosFormatados = transformarDados(data)

  return (
    <Card className="flex flex-col  hover:shadow-lg transition duration-300 ease-in-out ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gráfico de Vendas</CardTitle>
        <CardDescription>Janeiro - Junho 2025</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={configGrafico}
          className="mx-auto aspect-square max-h-[290px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={dadosFormatados}
              dataKey="value"
              nameKey="name"
              stroke="0"
              labelLine={false}
               outerRadius={80}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {dadosFormatados.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
