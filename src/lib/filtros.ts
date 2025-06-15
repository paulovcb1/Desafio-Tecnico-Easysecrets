import { type Produto, type Filtros } from '../types/types'

export function filtrarDados(
  data: Produto[],
  filtros: Filtros
) {
  const { produtoSelecionado, mesSelecionado } = filtros

  let dadosFiltrados = [...data];

  if (produtoSelecionado !== "Todos") {
    dadosFiltrados = dadosFiltrados.filter(
      item => item.produto === produtoSelecionado
    );
  }

  if (mesSelecionado !== "Todos") {
    dadosFiltrados = dadosFiltrados.map(item => ({
      ...item,
      vendas: item.vendas.filter(venda => venda.mes === mesSelecionado)
    }));
  }

  return dadosFiltrados;
}