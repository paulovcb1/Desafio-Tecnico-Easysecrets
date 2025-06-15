type MiniCardProps = {
  title: string
  description: string
  value: string | number
  color?: string;
}

export function MiniCard({ title, description, value, color }: MiniCardProps) {
  return (
    <div className={`border rounded-lg p-4 bg-background ${color || "border-border"}`}>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-lg font-medium text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
