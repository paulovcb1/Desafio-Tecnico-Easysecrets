
import { GraficoBarra } from './components/graficoBarra/graficoBarra'
import { GraficoPizza } from './components/graficoPizza/GraficoPizza'
import { CardInfo } from './components/cardInfo/CardInfo'
import { PageHeader } from './components/header/PageHeader'
import { DollarSign, Package, LineChart, TrendingUp } from "lucide-react"
import { useState } from 'react'
import { getMesComMaisVendas, produtoMaisVendido, totalProdutoVendido } from './lib/analise'
import { FiltroProduto } from './components/filtros/FiltroProduto'
import { FiltroMes } from './components/filtros/FiltroMes'
import { filtrarDados } from './lib/filtros'
import { GraficoLinha } from './components/graficoLinha/GraficoLinha'
import { CardResumo } from './components/cardResumo/CardResumo'




function App() {


  const data = [
    {
      "produto": "Refrigerante",
      "vendas": [
        { "mes": "Janeiro", "quantidade": 120 },
        { "mes": "Fevereiro", "quantidade": 150 },
        { "mes": "Março", "quantidade": 130 },
        { "mes": "Abril", "quantidade": 170 },
        { "mes": "Maio", "quantidade": 160 },
        { "mes": "Junho", "quantidade": 140 }
      ]
    },
    {
      "produto": "Suco",
      "vendas": [
        { "mes": "Janeiro", "quantidade": 80 },
        { "mes": "Fevereiro", "quantidade": 95 },
        { "mes": "Março", "quantidade": 100 },
        { "mes": "Abril", "quantidade": 90 },
        { "mes": "Maio", "quantidade": 110 },
        { "mes": "Junho", "quantidade": 105 }
      ]
    },
    {
      "produto": "Salgadinho",
      "vendas": [
        { "mes": "Janeiro", "quantidade": 60 },
        { "mes": "Fevereiro", "quantidade": 75 },
        { "mes": "Março", "quantidade": 70 },
        { "mes": "Abril", "quantidade": 95 },
        { "mes": "Maio", "quantidade": 85 },
        { "mes": "Junho", "quantidade": 90 }
      ]
    }
  ]
  const produtos = data.map(item => item.produto)
  const [produtoSelecionado, setProdutoSelecionado] = useState<string>("Todos")
  const [mesSelecionado, setMesSelecionado] = useState<string>("Todos");



  const meses = ["Todos", ...data[0].vendas.map(venda => venda.mes)];
  const dadosFiltrados = filtrarDados(data, { produtoSelecionado, mesSelecionado })
  const mesTopVendas = getMesComMaisVendas(dadosFiltrados)
  const totalVendido = totalProdutoVendido(dadosFiltrados)
  const topProdutoVendido = produtoMaisVendido(dadosFiltrados)

  return (
    <>
      <PageHeader
        titulo="Dashboard"
        descricao="Análise de vendas por produto e período"
      />

      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 mt-3">
        <CardInfo
          titulo="Total de vendas"
          valor={totalVendido}
          icon={<DollarSign className="h-5 w-5" />}
        />
        <CardInfo
          titulo="Mês com mais vendas"
          valor={mesTopVendas.mes}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <CardInfo
          titulo="Total no mês mais vendido"
          valor={mesTopVendas.quantidade}
          icon={<Package className="h-5 w-5" />}
        />
        <CardInfo
          titulo="Produto mais vendido"
          valor={topProdutoVendido.produto}
          icon={<LineChart className="h-5 w-5" />}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-4 sm:justify-end justify-center">
        <FiltroProduto
          produtoSelecionado={produtoSelecionado}
          setProdutoSelecionado={setProdutoSelecionado}
          produtos={produtos}
        />
        <FiltroMes
          mesSelecionado={mesSelecionado}
          onChange={setMesSelecionado}
          meses={meses}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 mb-8">
        <GraficoBarra data={dadosFiltrados} />
        <GraficoLinha data={dadosFiltrados} />
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-8 flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="w-full lg:max-w-sm">
          <GraficoPizza data={dadosFiltrados} />
        </div>

        <div className="flex-1">
          <CardResumo data={dadosFiltrados} />
        </div>
      </div>

    </>

  )
}

export default App
