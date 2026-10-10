# 04 — Arquitetura e configurações

[Índice](README.md) · [Anterior](03-fundamentos-de-programacao.md) · [Próximo](05-paginas-e-navegacao.md)

## Organização principal

```text
nea-mutiro-site/
├── docs/                    Manual para manutenção e aprendizagem
├── public/                  Arquivos publicados diretamente
│   ├── images/              Fotografias e marca do núcleo
│   │   └── territorios/     Acervo separado por pastas
│   └── logos/               Marcas institucionais e de colaboradores
├── src/
│   ├── app/                 Rotas, layouts e estilos globais
│   ├── components/          Partes reutilizáveis da interface
│   └── data/                Conteúdo cadastrado em TypeScript
├── package.json             Bibliotecas e comandos
├── package-lock.json        Versões resolvidas pelo npm
├── next.config.ts           Configuração do Next.js
├── tsconfig.json            Configuração do TypeScript
├── eslint.config.mjs        Regras de análise do código
├── postcss.config.mjs       Processamento do Tailwind
├── .gitignore               Arquivos que o Git não deve versionar
├── README.md                Apresentação original do repositório
└── REVISAO-1-ORIENTADOR.md   Histórico de revisão institucional
```

`node_modules` e `.next` podem aparecer localmente, mas são pastas geradas. A primeira contém dependências; a segunda contém o resultado e os arquivos de trabalho do Next.js. Não são o lugar para editar páginas.

## Separação entre conteúdo e apresentação

O desenho predominante é:

```text
src/data/territories.ts
  ├── /territorios: transforma registros em cartões
  └── /territorios/[slug]: seleciona um registro
                              ↓
                   TerritoryDetailView: desenha o detalhe
```

Isso permite reaproveitar a mesma estrutura para várias comunidades. Há exceções relevantes: `focalTerritories` está na página inicial; `areas` está na página de ações; os textos de instituições estão em “Quem somos”; e os grupos de logos estão no rodapé. Não suponha que todo texto está em `src/data`.

## App Router: pastas que se tornam endereços

O projeto usa o **App Router** de Next.js. Dentro de `src/app`:

- `page.tsx` cria a tela de uma rota.
- `layout.tsx` envolve uma rota e suas descendentes.
- `not-found.tsx` define a apresentação de página não encontrada.
- `[slug]` representa uma parte variável do endereço.
- `icon.svg` é um arquivo especial para o ícone da aplicação.

`src/app/contato/page.tsx` corresponde a `/contato`. `src/app/territorios/[slug]/page.tsx` atende endereços como `/territorios/cabana-pai-tomas`. Os colchetes fazem parte da pasta, mas não da URL do visitante.

## O layout que todas as páginas compartilham

`src/app/layout.tsx` importa o CSS global e monta:

```text
html (idioma pt-BR)
└── body (coluna flexível, altura mínima)
    ├── Header
    ├── main
    │   └── children: página acessada
    └── Footer
```

`main` recebe `flex-1`, ocupando o espaço restante. Isso ajuda a manter o rodapé abaixo do conteúdo mesmo em páginas curtas. Os layouts de contato, projetos e territórios apenas retornam `children`; sua função atual é fornecer títulos de metadados específicos da seção.

## Servidor e navegador

Arquivos de componentes sem `"use client"` são componentes de servidor por padrão no App Router. Eles podem preparar a interface sem hooks de interação do navegador. A página “Quem somos”, o layout raiz e as rotas de detalhe seguem esse padrão.

`"use client"` marca uma fronteira para componentes que usam estado, eventos ou bibliotecas de animação. Está nas páginas inicial, ações, territórios, contato, links e repositório, além de vários componentes. Isso **não significa que a página inteira só seja gerada depois de abrir o navegador**: Next.js também pode preparar HTML inicial desses componentes. O navegador então conecta o JavaScript aos elementos, processo chamado **hidratação**, e as interações passam a funcionar.

Um componente de servidor pode incluir um componente de cliente, como “Quem somos” inclui `FadeIn`. As props que atravessam essa fronteira precisam ter formato serializável. Os registros atuais de projetos e territórios são objetos, listas, textos e números adequados a esse uso.

## Rotas dinâmicas com conteúdo local

As duas rotas `[slug]` fazem três trabalhos:

1. `generateStaticParams` devolve os slugs cadastrados para preparar páginas durante o build.
2. `generateMetadata` procura o registro e define o título da página.
3. A função principal aguarda `params`, procura o registro e devolve o componente visual; se não existir, chama `notFound()`.

Não há consulta a um servidor externo nessas buscas. `getTerritory` e `getProject` usam `.find` nas listas importadas.

`generateStaticParams` não torna o projeto uma exportação de arquivos HTML para qualquer hospedagem. Não existe `output: "export"` em `next.config.ts`; a configuração atual usa o build normal do Next.js, inclusive sua infraestrutura de imagens. Também não há `dynamicParams = false`: a proteção para um slug desconhecido é a busca sem resultado seguida de `notFound()`.

## Arquivos de configuração, explicados

### `package.json` e `package-lock.json`

`package.json` declara nome, versão, scripts e bibliotecas. `private: true` impede publicação acidental do pacote no registro npm; não torna o repositório privado. `dependencies` são bibliotecas da aplicação; `devDependencies` são ferramentas de desenvolvimento e build. A hospedagem precisa conseguir instalar as ferramentas usadas na construção.

O lock usa formato de versão 3 e registra a árvore de dependências resolvida. Mantenha-o versionado. Não o edite manualmente para corrigir conflitos de instalação.

### `next.config.ts`

Configura `images.qualities: [100, 75]`. Os componentes de marca usam `quality={100}`; outras imagens usam normalmente a qualidade padrão. Não há autorização de domínios remotos com `remotePatterns`, redirects personalizados, exportação estática ou configuração de API.

### `tsconfig.json`

| Opção | Significado prático |
| --- | --- |
| `target: ES2017` | Referência de recursos JavaScript na configuração de compilação |
| `lib: dom, dom.iterable, esnext` | Tipos de APIs do navegador e JavaScript |
| `allowJs: true` | Permite incluir arquivos JavaScript |
| `skipLibCheck: true` | Pula a checagem interna de declarações das bibliotecas |
| `strict: true` | Ativa regras rigorosas de tipos |
| `noEmit: true` | TypeScript verifica sem produzir saída própria |
| `esModuleInterop: true` | Facilita interoperabilidade entre formatos de módulos |
| `module: esnext` e `moduleResolution: bundler` | Compatibilidade com a resolução usada pelo empacotador |
| `resolveJsonModule: true` | Permite importar JSON com informação de tipos |
| `isolatedModules: true` | Exige compatibilidade com processamento por arquivo |
| `jsx: react-jsx` | Usa o modelo de JSX de React |
| `incremental: true` | Guarda informação para acelerar verificações |
| plugin `next` | Acrescenta suporte de tipos do framework |
| `paths: @/* → ./src/*` | Cria o atalho de imports |

`include` cobre fontes e tipos gerados do Next.js; `exclude` retira `node_modules`. `next-env.d.ts` é gerado pelo framework e não deve ser ajustado para mudar o site.

### ESLint e PostCSS

`eslint.config.mjs` combina as regras `core-web-vitals` e `typescript` do Next.js. Ignora `.next`, `out`, `build` e `next-env.d.ts`. Análise estática ajuda a encontrar problemas, mas não confirma conteúdo institucional nem funcionamento visual.

`postcss.config.mjs` ativa `@tailwindcss/postcss`. O Tailwind 4 é importado e personalizado em `globals.css`; não existe `tailwind.config.js` neste projeto.

### `.gitignore`

Ignora dependências, saídas geradas, logs, `.env*`, `.vercel`, arquivos de chave `.pem`, caches de TypeScript e ZIPs locais `drive-download-*`. Isso organiza o repositório e evita versionar alguns arquivos sensíveis, mas não remove um arquivo que já tenha sido rastreado pelo Git.

## Metadados

O layout raiz usa `siteName` como título padrão, um modelo `%s | nome do site` e uma descrição institucional. Páginas e layouts filhos podem definir seus próprios títulos. As rotas de detalhe usam o título do registro correspondente.

Não foram encontrados metadados específicos Open Graph, imagem para compartilhamento, canonical, sitemap ou robots implementados no código da aplicação. Não confunda um ícone ou título configurado com uma implementação completa de SEO.
