import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { type FiltroProdutoProps } from "@/types/filtros"

export function FiltroProduto({
  produtoSelecionado,
  setProdutoSelecionado,
  produtos,
}: FiltroProdutoProps) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium" htmlFor="filtro-produto">
        Produto:
      </label>
      <Select
        value={produtoSelecionado}
        onValueChange={(value) => setProdutoSelecionado(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione o Produto" />
        </SelectTrigger>
          <SelectContent>
            <SelectItem
              value="Todos"
              className="data-[highlighted]:bg-orange-500 data-[highlighted]:text-white cursor-pointer"
            >
              Todos
            </SelectItem>

            {produtos.map((produto) => (
              <SelectItem
                key={produto}
                value={produto}
                className="data-[highlighted]:bg-orange-500 data-[highlighted]:text-white cursor-pointer"
              >
                {produto}
              </SelectItem>
            ))}
          </SelectContent>
      </Select>
    </div>
  )
}
