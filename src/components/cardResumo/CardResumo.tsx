import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Props } from "../../types/types"
import { MiniCard } from "./miniCard"
import { getMesComMaisVendas, produtoMaisVendido, totalProdutoVendido } from "@/utils/analise"

export function CardResumo({ data }: Props) {
    const produtoLider = produtoMaisVendido(data)
    const totalVendas = totalProdutoVendido(data)
    const melhorMes = getMesComMaisVendas(data)

    const quantidadeDeMeses = new Set(
        data.flatMap((item) => item.vendas.map((v) => v.mes))
    ).size

    const mediaMensal =
        quantidadeDeMeses > 0 ? totalVendas / quantidadeDeMeses : 0

    return (
        <Card className="p-6 h-full ">
            <CardHeader className="pb-3">
                <CardTitle className="text-xl">Resumo Executivo</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <MiniCard
                        title="Produto Líder"
                        value={produtoLider.produto}
                        description={`Total: ${produtoLider.total} unidades`}
                        color="border-blue-400"
                    />
                    <MiniCard
                        title="Média Mensal"
                        value={mediaMensal.toFixed(0)}
                        description="Unidades por mês"
                        color="border-yellow-400"
                    />
                    <MiniCard
                        title="Melhor Período"
                        value={melhorMes.mes}
                        description={`Total: ${melhorMes.quantidade} unidades`}
                        color="border-green-400"
                    />
                    <MiniCard
                        title="Total de Vendas"
                        value={totalVendas}
                        description="Unidades vendidas"
                        color="border-purple-400"
                    />
                </div>
            </CardContent>
        </Card>
    )
}
