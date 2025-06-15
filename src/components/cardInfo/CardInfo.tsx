import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type CardProps } from "@/types/card"


export function CardInfo({ titulo, valor, icon, className }: CardProps) {
    return (
        <>
            <Card className={cn("w-full hover:shadow-lg transition duration-300 ease-in-out", className)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        {titulo}
                    </CardTitle>
                    {icon}
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{valor}</div>
                </CardContent>
            </Card>
        </>
    )
}