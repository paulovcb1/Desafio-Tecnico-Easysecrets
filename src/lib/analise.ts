import { type Produto } from '../types/types'


export function produtoMaisVendido ( data: Produto [] ) {
    let maior = { produto: "", total: 0 }

  data.forEach(item => {
    const total = item.vendas.reduce((acc, venda) => acc + venda.quantidade, 0)
    if (total > maior.total) {
      maior = { produto: item.produto, total }
    }
  })

  return maior
}


export function totalProdutoVendido(data: Produto[]) {
  return data.reduce((total, item) => {
    const itemTotal = item.vendas.reduce((acc, venda) => acc + venda.quantidade, 0)
    return total + itemTotal
  }, 0)
}


export function getMesComMaisVendas(data: Produto[]) {
  const vendasPorMes: { [mes: string]: number } = {}

  data.forEach(item => {
    item.vendas.forEach(venda => {
      vendasPorMes[venda.mes] = (vendasPorMes[venda.mes] || 0) + venda.quantidade
    })
  })

  let mesMaisVendas = ""
  let maiorQuantidade = 0

  Object.entries(vendasPorMes).forEach(([mes, quantidade]) => {
    if (quantidade > maiorQuantidade) {
      maiorQuantidade = quantidade
      mesMaisVendas = mes
    }
  })

  return { mes: mesMaisVendas, quantidade: maiorQuantidade }
}


