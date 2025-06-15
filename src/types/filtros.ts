
export interface FiltroMesProps {
  mesSelecionado: string
  onChange: (value: string) => void
  meses: string[]
}

export type FiltroProdutoProps = {
  produtoSelecionado: string
  setProdutoSelecionado: (value: string) => void
  produtos: string[]
}
