# 13 — Inventário e mapa de dependências

[Índice](README.md) · [Anterior](12-git-publicacao-e-continuidade.md)

Este capítulo serve para localizar rapidamente a responsabilidade de cada arquivo. Todos os arquivos de código e configuração da aplicação identificados na raiz e em `src` estão relacionados abaixo. As fotografias são agrupadas por acervo, pois listar centenas de nomes não explica seu uso; os caminhos efetivamente usados ficam nos cadastros e nas páginas.

## Arquivos da raiz

| Arquivo | Responsabilidade | Capítulo |
| --- | --- | --- |
| `package.json` | Nome do pacote, scripts, dependências e ferramentas | [02](02-preparacao-e-execucao.md), [04](04-arquitetura-e-configuracoes.md) |
| `package-lock.json` | Versões exatas resolvidas e integridade dos pacotes | [02](02-preparacao-e-execucao.md), [04](04-arquitetura-e-configuracoes.md) |
| `next.config.ts` | Qualidades permitidas das imagens | [04](04-arquitetura-e-configuracoes.md), [08](08-aparencia-e-imagens.md) |
| `tsconfig.json` | Regras de tipos, resolução de módulos e alias `@/` | [04](04-arquitetura-e-configuracoes.md) |
| `eslint.config.mjs` | Regras de lint Next.js/TypeScript e exclusões | [04](04-arquitetura-e-configuracoes.md), [11](11-qualidade-e-problemas.md) |
| `postcss.config.mjs` | Plugin de processamento Tailwind | [04](04-arquitetura-e-configuracoes.md) |
| `.gitignore` | Exclusões de arquivos gerados, locais e sensíveis | [04](04-arquitetura-e-configuracoes.md) |
| `README.md` | Apresentação original, execução e referência de hospedagem | [01](01-visao-geral.md), [12](12-git-publicacao-e-continuidade.md) |
| `REVISAO-1-ORIENTADOR.md` | Histórico da primeira revisão e pendências editoriais | [06](06-conteudo-e-dados.md), [12](12-git-publicacao-e-continuidade.md) |

## Rotas e arquivos especiais

Os caminhos desta tabela começam em `src/app/`.

| Arquivo | Exportação principal ou recurso | Responsabilidade |
| --- | --- | --- |
| `layout.tsx` | `RootLayout`, `metadata` | Idioma, CSS, cabeçalho, conteúdo, rodapé e metadados gerais |
| `globals.css` | Variáveis e regras CSS | Paleta, tema Tailwind, fontes e rolagem |
| `icon.svg` | SVG pela convenção Next.js | Ícone da aplicação |
| `page.tsx` | `HomePage`, lista local `focalTerritories` | Apresentação, mosaico de fotos e três cartões |
| `not-found.tsx` | `NotFound` | Página 404 e retorno |
| `quem-somos/page.tsx` | `QuemSomosPage`, `metadata` | Núcleo, objetivo, grupos de equipe, governança e rede |
| `territorios/layout.tsx` | `TerritoriosLayout`, `metadata` | Título da seção; retorna filhos |
| `territorios/page.tsx` | `TerritoriosPage` | Lista de territórios com etiquetas e fotos alternadas |
| `territorios/[slug]/page.tsx` | `TerritorioDetailPage` | Busca, metadados dinâmicos, parâmetros estáticos e 404 |
| `projetos/layout.tsx` | `ProjetosLayout`, `metadata` | Título Ensino, Pesquisa e Extensão; retorna filhos |
| `projetos/page.tsx` | `ProjetosPage`, lista local `areas` | Cartões de Ensino/Pesquisa, links de Extensão e Repositório |
| `projetos/[slug]/page.tsx` | `ProjetoDetailPage` | Busca, metadados dinâmicos, parâmetros estáticos e 404 |
| `links-uteis/page.tsx` | `LinksUteisPage` | Cards externos de instituições e colaboradores |
| `repositorio/page.tsx` | `RepositorioPage` | Cards externos de materiais e produções |
| `contato/layout.tsx` | `ContatoLayout`, `metadata` | Título Contato; retorna filhos |
| `contato/page.tsx` | `ContatoPage`, `handleSubmit` | Formulário visual, canais e iframe do mapa |

As duas rotas `[slug]` também exportam `generateStaticParams` e `generateMetadata`. A primeira enumera os registros para preparação no build; a segunda seleciona o título. Veja [arquitetura](04-arquitetura-e-configuracoes.md) e [páginas](05-paginas-e-navegacao.md).

## Componentes

Os caminhos desta tabela começam em `src/components/`.

| Arquivo | Definições | Uso |
| --- | --- | --- |
| `layout/Header.tsx` | `Header`, função local `isActive` | Menu desktop/mobile, rota ativa e rolagem |
| `layout/Footer.tsx` | `Footer`, função local `LogoGroup`, tipo `FooterLogo` e três listas locais | Marcas, links e canais no rodapé |
| `ui/Button.tsx` | `Button`, `ButtonProps`, mapas `variants`/`sizes` | Link estilizado na home |
| `motion/FadeIn.tsx` | `FadeIn`, `StaggerContainer`, `staggerItem` e tipos de props | Entradas e sequências em páginas/componentes |
| `motion/CountUp.tsx` | `CountUp`, `CountUpProps` | Contadores em projetos |
| `icons/SocialIcons.tsx` | `InstagramIcon`, `YoutubeIcon`, tipo local `IconProps` | Ícones SVG no contato/rodapé |
| `territories/TerritoryDetailView.tsx` | `TerritoryDetailView`, mapas `chipStyles` e `infoIcons` | Apresentação completa de um território |
| `projects/ProjectDetailView.tsx` | `ProjectDetailView`, mapa `tagStyles` | Apresentação completa de um projeto antigo |

As opções e algoritmos estão explicados no [capítulo 07](07-componentes-e-animacoes.md).

## Dados e tipos

Os caminhos desta tabela começam em `src/data/`.

| Arquivo | Exportações | Consumidores |
| --- | --- | --- |
| `site.ts` | `siteName`, `contact`, `youtubeUrl`, `institutionalLinks`, `collaboratorLinks`, `repositoryLinks`, `mapUrl` | Layout, rodapé e páginas institucionais |
| `navigation.ts` | `navItems`, `NavItem` | Cabeçalho; tipo disponível para reutilização |
| `members.ts` | `Member`, `members`, `neaTeamMembers`, `collaboratorMembers`, `territoryScholarshipMembers` | Quem somos |
| `territories.ts` | `TerritoryChip`, `TerritoryDetail`, `Territory`, `territories`, `getTerritory` | Lista, rota e visual de território |
| `projects.ts` | `ProjectTag`, `ProjectStep`, `ProjectStat`, `ProjectDetail`, `Project`, `projects`, `getProject` | Rota e visual de projeto antigo |

O [capítulo 06](06-conteudo-e-dados.md) detalha cada campo e seu efeito.

## Arquivos públicos

| Local | Função no projeto |
| --- | --- |
| `public/images/logo_neaMutiro.png` | Marca principal no cabeçalho e rodapé |
| `public/images/*.jpg` | Acervo geral, incluindo fotos de projetos antigos |
| `public/images/territorios/aldeia-kamaka-mongoio/` | Acervo da aldeia e fotos selecionadas |
| `public/images/territorios/cabana-pai-tomas/` | Acervo da Cabana e fotos selecionadas |
| `public/images/territorios/corrego-narciso/` | Foto específica usada na abertura |
| `public/images/territorios/misturadas/` | Acervo misto; contém foto usada no cadastro do quilombo |
| `public/logos/divididos/` | CEFET-MG, UEMG, CNPq, Kaiporá e SoFiA individuais |
| `public/logos/FioCruz minas.png` | Logo Fiocruz usada em páginas e rodapé |
| `public/logos/logopetconnecte.png` | Logo PET usada em páginas e rodapé |
| Outros arquivos de `public/logos/` | Versões de marcas/identidades preservadas; não selecionadas automaticamente |
| `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` | SVGs preservados, sem referência nos componentes atuais |

Confira [aparência e imagens](08-aparencia-e-imagens.md) antes de trocar arquivos ou acrescentar fotos.

## Arquivos locais e gerados

`node_modules`, `.next`, `next-env.d.ts`, logs, ZIP original do acervo e possíveis `.tsbuildinfo` são dependências, saídas ou insumos locais. O ZIP `drive-download-*` não é lido pelo site para gerar páginas: as fotos utilizadas já estão em `public`. `debug.log` não participa da interface. `.git` guarda o histórico do repositório, e não deve ser editado manualmente.

Não há no estado examinado configuração própria de workflow GitHub Actions, arquivo `vercel.json`, servidor separado, pasta de testes ou arquivo de licença. Isso não permite concluir quais integrações externas estão ativadas no painel da hospedagem.

## Mapa resumido de dependências

```text
app/layout
  ├── globals.css
  ├── siteName
  ├── Header → navigation + logo + motion
  └── Footer → site + SocialIcons + grupos locais de logos

app/page → focalTerritories local + Button + FadeIn/Stagger
quem-somos → members + collaboratorLinks + instituições locais
territorios/page → territories + FadeIn
territorios/[slug] → getTerritory + TerritoryDetailView
projetos/page → areas local + collaboratorLinks
projetos/[slug] → getProject + ProjectDetailView → CountUp
links-uteis → institutionalLinks + collaboratorLinks
repositorio → repositoryLinks
contato → contact + youtubeUrl + mapUrl + estado submitted
```

## Onde começar a procurar uma alteração

Se for **conteúdo repetido**, procure em `src/data`, depois confira duplicações. Se for **estrutura de uma tela**, procure seu `page.tsx`. Se for **comportamento ou apresentação compartilhada**, procure em `components`. Se for **cor geral**, abra `globals.css`. Se for **imagem**, confira o caminho em `public` e todos os locais que o referenciam. Se for **instalação/build**, comece pelos arquivos de configuração e pela mensagem do terminal.

Para pesquisar com uma ferramenta de terminal, exemplos são `rg "Mensagem registrada" src`, `rg "logo_neaMutiro" src` e `rg --files src`. A pesquisa global do editor também atende a essa tarefa. Em ambientes onde o agente segue RTK, os comandos de shell recebem o prefixo definido nas instruções locais.
