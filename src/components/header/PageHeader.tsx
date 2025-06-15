import { BarChart3 } from "lucide-react"
import { type PageHeaderProps } from "@/types/header"
import { MudarTema } from "../theme/MudarTema"

export function PageHeader({ titulo, descricao, children }: PageHeaderProps) {
  return (
    <div className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{titulo}</h1>
            <p className="mt-2 text-muted-foreground">{descricao}</p>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-orange-400" />
            <span className="text-xl font-semibold text-foreground">Vendas</span>
              <MudarTema/>
          </div>
          {children && <div className="mt-2 sm:mt-0">{children}</div>}
        </div>
        <div className="mt-4 flex justify-end">
        
        </div>
      </div>
    </div>
  )
}
