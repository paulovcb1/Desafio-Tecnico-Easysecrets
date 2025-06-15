import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type FiltroMesProps } from "@/types/filtros"

export function FiltroMes({ mesSelecionado, onChange, meses }: FiltroMesProps) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium" htmlFor="filtro-produto">
        Mes:
      </label>
    <Select value={mesSelecionado} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione o mês" />
      </SelectTrigger>
      <SelectContent>
        {meses.map((mes) => (
          <SelectItem key={mes} value={mes}>
            {mes}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
  )
}
