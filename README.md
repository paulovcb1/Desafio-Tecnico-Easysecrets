# Dashboard de Vendas - Easysecrets

Este projeto foi realizada como um Desafio tecnico para a empresa Easysecrets, desenvolvido com **React 19**, **TypeScript** e **Vite**. Ele permite visualizar e filtrar dados de vendas por produto e mês, exibindo gráficos dinâmicos e resumos executivos.


## Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/grafico2.git
   cd Desafio
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

- **[Vite](https://vitejs.dev/)**
  - Suporte nativo a TypeScript, JSX, CSS Modules e muito mais, sem necessidade de configuração pesada.
  - Desenvolvimento mais agil comparando com Create React App
- **[Tailwind CSS 4](https://tailwindcss.com/)**
  - Reduz drasticamente a criação de CSS manual, evitando arquivos grandes e difíceis de manter.
  - Totalmente responsivo, mobile-first e altamente customizável.
  - Permite estilização diretamente no HTML/JSX usando classes utilitárias.
- **[Recharts](https://recharts.org/)**
  - Utilizei essa biblioteca para renderizar graficos juntamente com o ShadCnUi
  - Integração nativa com o React
- **[Lucide React](https://lucide.dev/) (ícones)**
  - Compatível nativamente com React, com instalação e uso extremamente simples.
  - Ícones modernos, minimalistas e vetoriais.
- **[shadcnUI](https://ui.shadcn.com/)**
  - Componentes prontos, acessíveis e com estilização moderna e minimalista, seguindo boas práticas de UX/UI.
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
---

## Arquitetura

Durante o desenvolvimento do projeto, tomei algumas decisões técnicas pensando em escalabilidade e organização.

### Funções Unitárias

- Criei uma pasta `utils` para centralizar funções específicas e reutilizáveis.  
- Isso evita poluir os componentes, mantendo o código mais limpo, organizado e de fácil manutenção.

### Tailwind CSS para Estilização

- Utilizei o [Tailwind CSS](https://tailwindcss.com/) como framework de estilização, aplicando classes utilitárias diretamente no JSX.  
- **Vantagens:**  
  - Acelera o desenvolvimento, eliminando a necessidade de escrever CSS manual extenso.  
  - Reduz a quantidade de arquivos CSS no projeto.  
  - Integra-se perfeitamente com os componentes do [shadcn/ui](https://ui.shadcn.com/), mantendo um visual moderno, consistente e escalável.


###  Variedade de Tipos de Gráficos

- Oferece flexibilidade para exibir dados de vendas de forma clara e diversificada.  
- **Benefícios:**  
  - Permite análises visuais complementares, como:  
    - **Tendências:** gráficos de linha.  
    - **Distribuições:** gráficos de pizza.  
    - **Comparações:** gráficos de barras.  
  - Integra-se diretamente com os filtros de **produto** e **mês**, proporcionando interatividade e dinamismo.  
  - Suporta escalabilidade, já que novos tipos de gráficos podem ser adicionados facilmente na pasta `components/charts/` com mínima refatoração.

###  Filtros Interativos por Produto e Mês

- Implementei filtros dinâmicos, permitindo ao usuário:  
  - Personalizar a visualização dos dados.  
  - Realizar consultas específicas por **produto** e **mês**.  
- Esses filtros tornam a análise mais prática, ágil e direcionada, melhorando a experiência do usuário.

---
  ## Diferenciais
  O projeto não se resume apenas na exibição de dados, ele segue conceitos avançados e UI, com interface moderna e utilidade prática.

  - **Variedade no tipo de gráficos**
    - Desenvolvido em graficos, pizza, barra e linhas, maximizando a informação vindo dos dados
  - **Tema Light e Dark**
    - A aplicação oferece suporte para o tema claro, escuro e o tema do sistema do aparelho, permitindo uma experiência visual mais confortavel
  - **Resposividade**
    - Projeto é totalmente responsivo, garantindo a qualidade da informação em diferentes tamanhos de telas
  - **Desing Minimalista e Funcional**
    - O layout foi projeto para ser minimalista e moderno, utilizando tecnologias mais novas e proporcionando uma navegação intuitiva e funcional.

  - **Cards Informativos**
    - O projeto contem cards informativos onde é possivel ver Total de vendas, Mês com mais vendas, produto mais vendido e etc
  - **Filtros**
    - O Projeto contem Filtros de Mês e produtos, que funcionam dinamicamente com os graficos melhorando assim a experiência do usuário

    --- 
  Desenvolvido por Paulo Barbosa
  