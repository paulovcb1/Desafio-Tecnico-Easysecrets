# Dashboard de Vendas - Easysecrets

Este projeto é um dashboard interativo para análise de vendas, desenvolvido com **React 19**, **TypeScript** e **Vite**. Ele permite visualizar e filtrar dados de vendas por produto e mês, exibindo gráficos dinâmicos e resumos executivos.


## Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/grafico2.git
   cd grafico2
   npm install
   npm run dev
   ```
2. **Instale as dependências:**
  ```bash
   npm install
  ```
3. **Inicie o servidor de desenvolvimento**
  ```bash
   npm run dev
 ```

## Demonstração

> **Acesse localmente:**  
> Após rodar o projeto, acesse [http://localhost:5173](http://localhost:5173)

---

## Funcionalidades

- **Gráficos dinâmicos:** Barra, linha e pizza, usando [Recharts](https://recharts.org/)
- **Resumo executivo:** Cards com indicadores-chave (total, produto líder, melhor mês, média mensal)
- **Filtros:** Por produto e por mês
- **Tema claro/escuro:** Alternância rápida e persistente
- **Layout responsivo:** Visualização adaptada para desktop e mobile
- **Componentização:** Fácil manutenção e expansão

---

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
  - Suporte nativo a TypeScript, JSX, CSS Modules e muito mais, sem necessidade de configuração pesada.
  - Desenvolvimento mais agil comparando com Create React App
- [Tailwind CSS 4](https://tailwindcss.com/)
  - Reduz drasticamente a criação de CSS manual, evitando arquivos grandes e difíceis de manter.
  - Totalmente responsivo, mobile-first e altamente customizável.
  - Permite estilização diretamente no HTML/JSX usando classes utilitárias.
- [Recharts](https://recharts.org/)
  - Utilizei essa biblioteca para renderizar graficos juntamente com o ShadCnUi
  - Integração nativa com o React
- [Lucide React](https://lucide.dev/) (ícones)
  - Compatível nativamente com React, com instalação e uso extremamente simples.
  - Ícones modernos, minimalistas e vetoriais.
- [shadcnUI](https://ui.shadcn.com/)
  - Componentes prontos, acessíveis e com estilização elegante, seguindo boas práticas de UX/UI.
  - Integração direta com Tailwind, com foco em design limpo e moderno.
  - Reduz drasticamente o tempo de desenvolvimento de interfaces, sem abrir mão da customização.

---

## Estrutura do Projeto
```bash
   grafico2/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── data/
│   │   └── data.json
│   ├── components/
│   │   ├── cardInfo/
│   │   │   └── CardInfo.tsx
│   │   ├── cardResumo/
│   │   │   ├── CardResumo.tsx
│   │   │   └── miniCard.tsx
│   │   ├── filtros/
│   │   │   ├── FiltroMes.tsx
│   │   │   └── FiltroProduto.tsx
│   │   ├── graficos/
│   │   │   ├── graficoBarra.tsx
│   │   │   ├── GraficoLinha.tsx
│   │   │   └── GraficoPizza.tsx
│   │   ├── header/
│   │   │   └── PageHeader.tsx
│   │   ├── theme/
│   │   │   ├── MudarTema.tsx
│   │   │   └── theme-provider.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── dropdown-menu.tsx
│   │       └── select.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   ├── card.ts
│   │   ├── filtros.ts
│   │   ├── header.ts
│   │   └── types.ts
│   ├── utils/
│   │   ├── analise.ts
│   │   └── filtros.ts
├── components.json
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .gitignore
├── README.md
```
