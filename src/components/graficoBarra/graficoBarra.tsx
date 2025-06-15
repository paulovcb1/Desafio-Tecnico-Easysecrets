import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { type Props, type Produto } from "../../types/types"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig
} from "@/components/ui/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"



const COLORS = ["#2563eb", "#60a5fa", "#f59e0b", "#10b981", "#ef4444"]


function config(data: Produto[]): ChartConfig {
  const config: any = {};
  data.forEach((prod, idx) => {
    config[prod.produto] = {
      label: prod.produto,
      color: COLORS[idx % COLORS.length],
    };
  });
  return config as ChartConfig;
}

// PRECISA TRANSFORMAR OS DADOS PARA VINDOS DO JSON PARA A O RECHARTS (LIB DO GRAFICO) PODE ENTENDER
function transformarDados(data: Produto[]) {
  const meses = data[0]?.vendas.map(v => v.mes) || [];
  return meses.map(mes => {
    const entry: any = { mes };
    data.forEach(prod => {
      const venda = prod.vendas.find(v => v.mes === mes);
      entry[prod.produto] = venda?.quantidade ?? 0;
    });
    return entry;
  });
}

export function GraficoBarra({ data }: Props) {
  const chartData = transformarDados(data);
  const chartConfig = config(data);

  return (
    <Card className="flex flex-col  hover:shadow-lg transition duration-300 ease-in-out">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gráfico de Vendas</CardTitle>
        <CardDescription>Janeiro - Junho 2025</CardDescription>
      </CardHeader>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="mes"
            tickFormatter={v => v.slice(0, 3)}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          {data.map(prod => (
            <Bar
              key={prod.produto}
              dataKey={prod.produto}
              fill={`var(--color-${prod.produto})`}
              radius={4}
            />
          ))}
        </BarChart>
      </ChartContainer>
    </Card>
  );
}
