import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme/ThemeProvider"

export function MudarTema() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-5 w-5 transition-all dark:hidden text-orange-400" />
          <Moon className="absolute h-5 w-5 transition-all hidden dark:block text-orange-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="data-[highlighted]:bg-orange-500 data-[highlighted]:text-white cursor-pointer" onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem className="data-[highlighted]:bg-orange-500 data-[highlighted]:text-white cursor-pointer" onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem className="data-[highlighted]:bg-orange-500 data-[highlighted]:text-white cursor-pointer" onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
