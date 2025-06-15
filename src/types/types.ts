export type Venda = { 
    mes: string; 
    quantidade: number 
};

export type Produto = { 
    produto: string; 
    vendas: Venda[] 
};

export interface Props {
     data: Produto[] 
}

export type Filtros = {
  produtoSelecionado: string
  mesSelecionado: string
}
