# Dashboard MEEM

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-06B6D4?style=flat&logo=tailwindcss)
![Shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black?style=flat)

Dashboard para a visualização e análise de dados do Mini Exame do Estado Mental (MEEM)

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## 🚀 Funcionalidades Principais

Este painel foi projetado para permitir uma análise aprofundada do comprometimento cognitivo, com foco em planejamento e intervenções personalizadas.

-   **Visualização de Tendências Temporais:** Gráfico de linhas interativo que exibe a média de pontuação do MEEM ao longo do tempo, segmentado por faixas etárias (60-70, 71-80, 81+).

-   **Distribuição por Comprometimento:** Gráfico de barras empilhadas que mostra a distribuição percentual dos pacientes entre os níveis de comprometimento (Normal, Leve, Moderado, Grave) por região.

-   **Filtragem Dinâmica:** Um painel lateral (drawer) permite filtrar todos os dados do dashboard por:
    -   Período de Análise (Data Inicial e Final)
    -   Faixa Etária
    -   Escolaridade
    -   Gênero
    -   Localidade

-   **Lista Detalhada de Pacientes:** Tabela com dados brutos dos pacientes, incluindo nome anonimizado, idade, pontuação, data do teste e nível de comprometimento, que é destacado visualmente com cores e ícones de alerta (⚠️) para casos críticos.

-   **Exportação de Relatórios:** Funcionalidade para gerar um relatório consolidado em formato PDF, contendo os gráficos e a tabela de dados com os filtros aplicados.

## 🛠️ Tecnologias Utilizadas

A estrutura deste projeto utiliza um conjunto de tecnologias modernas para garantir uma experiência de desenvolvimento e de uso eficientes e escaláveis.

-   **React** - Biblioteca principal para a construção da UI.
-   **Vite** - Ferramenta de build para um desenvolvimento rápido.
-   **TypeScript** - Para tipagem estática e maior segurança no código.
-   **Tailwind CSS** - Framework CSS utility-first para estilização rápida e consistente.
-   **Shadcn/ui** - Coleção de componentes de UI reutilizáveis, acessíveis e customizáveis.
-   **Recharts** - Biblioteca para a criação de gráficos declarativos.
-   **React Router** - Para o gerenciamento de rotas da aplicação.
-   **Lucide React** - Biblioteca de ícones.

## 📁 Estrutura do Projeto

A organização das pastas segue uma abordagem modular e escalável, separando as responsabilidades de forma clara.

```
poc-meem-page/
└── front/
    └── src/
        ├── assets/             # Ícones, imagens e outros arquivos estáticos
        ├── components/
        │   ├── features/       # Componentes complexos e específicos da funcionalidade (ex: gráficos, tabela)
        │   ├── shared/         # Componentes genéricos e reutilizáveis (ex: Placeholder)
        │   └── ui/             # Componentes base do Shadcn/ui (Button, Card, etc.)
        ├── pages/              # Componentes que representam as páginas da aplicação
        └── services/           # Funções de integração com a API (backend)
```

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/AllanSilva29/poc-meem-page.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd poc-meem-page/front
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    O projeto estará disponível em `http://localhost:3000` (ou na porta indicada pelo Vite).

## 📜 Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento com Hot Reload.
-   `npm run build`: Compila e otimiza a aplicação para produção.
-   `npm run lint`: Executa o linter para verificar a qualidade do código.
-   `npm run preview`: Inicia um servidor local para visualizar a build de produção.