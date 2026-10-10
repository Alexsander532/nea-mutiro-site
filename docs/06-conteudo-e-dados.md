# 06 — Conteúdo e contratos dos dados

[Índice](README.md) · [Anterior](05-paginas-e-navegacao.md) · [Próximo](07-componentes-e-animacoes.md)

## O que é um contrato de dados?

É o formato esperado por uma parte do programa. Se uma página espera que um território tenha `title` e `image`, o cadastro deve fornecer esses campos. Os tipos TypeScript descrevem esse acordo. Eles ajudam a evitar campos ausentes ou valores incompatíveis, mas não validam os fatos descritos nem testam URLs.

Editar um cadastro significa abrir o arquivo, mudar os valores e publicar uma nova versão. Não há tela administrativa para esse trabalho.

## `site.ts`: informações compartilhadas

| Exportação | Conteúdo | Utilização |
| --- | --- | --- |
| `siteName` | Nome institucional | Layout, rodapé e vários textos de páginas |
| `contact` | E-mail, usuário e URL do Instagram | Contato e rodapé |
| `youtubeUrl` | Canal do YouTube | Contato, rodapé e um link do repositório |
| `institutionalLinks` | Instituições e financiador | Links úteis |
| `collaboratorLinks` | SoFiA, Kaiporá e PET conecTTE | Ações, Quem somos, Links úteis e links textuais do rodapé |
| `repositoryLinks` | Página do núcleo, SoFiA e YouTube | Repositório |
| `mapUrl` | URL de mapa incorporado | `iframe` em Contato |

O e-mail configurado na aplicação é `neamutiro2026@gmail.com`; o Instagram é `@neamutiro`. O contato do final do README original é diferente. Ao orientar visitantes, confira o cadastro atual e a confirmação institucional da equipe.

As listas de links usam `label`, `description` e `href`; instituições e colaboradores também têm `logo`. `label` é o texto visível; `href` é o destino. Mudar apenas o rótulo não muda para onde o visitante é enviado.

## `navigation.ts`: menu

Cada item possui `href` e `label`. A lista é declarada `as const`. `NavItem` é derivado com `(typeof navItems)[number]`, que significa “o tipo de um item dessa lista”. Essa exportação existe para reutilização de tipos, embora o cabeçalho atual importe apenas a lista.

Adicionar um item altera os menus desktop e mobile, pois os dois percorrem o mesmo array. Isso não cria a rota: a página precisa existir separadamente.

## `members.ts`: equipe

| Array | Grupo | Quantidade no código examinado |
| --- | --- | --- |
| `members` | Coordenação | 1 |
| `neaTeamMembers` | Equipe NEA Mutiró | 24 |
| `collaboratorMembers` | Bolsistas colaboradores | 2 |
| `territoryScholarshipMembers` | Bolsistas dos territórios | 3 |

O tipo `Member` exige `name` e `institution`. Permite `role`, `href`, `territory` e `image`. Somente nome e instituição aparecem nos cartões atuais. A associação de uma pessoa a um grupo é definida pelo array em que está cadastrada, e não pelo campo `role`.

Para adicionar uma pessoa, inclua um objeto no array adequado. Não duplique o mesmo nome no mesmo grupo, pois a interface utiliza o nome como chave React. Não publique nomes e funções sem revisão da equipe.

## `territories.ts`: cadastro de territórios

### Campos de `Territory`

| Campo | Tipo | Onde aparece |
| --- | --- | --- |
| `slug` | Texto obrigatório | URL, busca e chave da lista |
| `title` | Texto obrigatório | Cartão, detalhe, título da aba e texto alternativo da foto |
| `location` | Texto obrigatório | Localização na listagem |
| `tag` | Texto obrigatório | Etiqueta da listagem |
| `tagColor` | `green`, `brown` ou `orange` | Estilo da etiqueta |
| `description` | Texto obrigatório | Resumo na listagem |
| `image` | Texto obrigatório | Caminho da imagem da listagem |
| `imagePosition` | `left` ou `right`, opcional | Ordem das colunas da listagem |
| `detail` | Objeto obrigatório | Conteúdo da página individual |

Sem `imagePosition`, a comparação com `"left"` dá falso; o JSX aplica a regra de foto à direita em telas com duas colunas. Para manter a intenção clara, preencha o campo explicitamente.

Um **slug** é um identificador de URL, como `corrego-do-narciso`. Ele deve ser único, simples e estável. O nome da pasta de fotos não precisa ser igual: neste caso a pasta específica é `corrego-narciso`. Não renomeie slugs sem revisar links já compartilhados e planejar redirecionamentos.

### Campos de `TerritoryDetail`

| Campo | Formato | Efeito na tela |
| --- | --- | --- |
| `subtitle` | Texto | Resumo destacado abaixo do título |
| `heroImage` | Caminho de imagem | Fotografia de abertura |
| `chips` | Lista `{ label, variant }` | Marcadores próximos do caminho de navegação |
| `intro` | Lista de textos | Um parágrafo por item |
| `sectionTitle` | Texto | Título da seção temática |
| `sectionBody` | Lista de textos | Parágrafos da seção temática |
| `figure?` | `{ src, caption }` | Fotografia adicional com legenda |
| `quote?` | `{ text, author }` | Citação atribuída |
| `info` | Lista `{ label, value }` | Ficha lateral |
| `related` | Lista `{ slug?, title, description }` | Outros territórios |

`chips.variant` aceita `green`, `pink` e `neutral`. As cores são determinadas por `chipStyles` no componente, sem relação direta com `tagColor` da listagem. `related.slug` ausente cria um item informativo sem link. Se presente, deve corresponder a um cadastro real.

O ícone da ficha depende da posição: primeiro localização, segundo pessoas, terceiro planta; os demais usam o ícone de localização como alternativa. Alterar a ordem do cadastro pode alterar o significado visual.

### A lista duplicada da página inicial

`focalTerritories`, em `src/app/page.tsx`, contém `title`, `location`, `description`, `heroImage`, `image`, `alt` e `href`. Não é importada de `territories.ts`. Ao mudar nome, resumo, foto ou slug de um território, confira ambos os arquivos e os relacionados dos demais territórios.

## `projects.ts`: projetos ainda disponíveis por URL

Os quatro slugs são `hortas-comunitarias`, `manejo-de-raizes`, `troca-de-saberes` e `formacao-agroecologia`. `getProject` procura com `.find`, como a função de territórios.

### Campos de `Project`

| Campo | Tipo | Uso atual |
| --- | --- | --- |
| `slug` | Texto | Busca e rota dinâmica |
| `title` | Texto | Título, metadados e alt da abertura |
| `category` | Texto | Preservado; sem uso no detalhe atual |
| `categoryColor` | Texto | Preservado; sem uso no detalhe atual |
| `description` | Texto | Preservado; sem uso no detalhe atual |
| `image?` | Caminho | Preservado para a antiga listagem |
| `imagePlaceholder?` | Booleano | Preservado para a antiga listagem |
| `imagePosition` | `left` ou `right` | Preservado para a antiga listagem |
| `detail` | Objeto | Usado por `ProjectDetailView` |

Todos os campos continuam fazendo parte do tipo, mesmo quando não são exibidos. Na página atual `/projetos`, nenhum desses registros é percorrido.

### Campos de `ProjectDetail`

| Campo | Formato | Efeito |
| --- | --- | --- |
| `publishedAt` | Texto | Data literal no cabeçalho; não é objeto `Date` |
| `territory` | Texto | Nome do território, sem relacionamento automático |
| `tags` | Lista `{ label, variant }` | Etiquetas `brown` ou `green` |
| `heroImage` | Caminho | Foto de abertura |
| `intro` | Lista de textos | Introdução principal |
| `introSecondary` | Lista de textos | Introdução com estilo secundário |
| `steps` | Lista `{ title, description }` | Etapas numeradas em “Como funciona” |
| `benefits` | Lista de textos | Benefícios com ícone de confirmação |
| `stats` | Lista `{ value, suffix?, label }` | Contadores numéricos |
| `statsDescription` | Texto | Contexto dos números |
| `gallery` | Lista `{ src, alt }` | Fotografias da galeria |

`value` precisa ser um número; use `120`, não `"120+"`. Para mostrar o sinal, use `suffix: "+"`. Os números não são calculados pelo site. `territory` também é somente texto: trocar o nome em `territories.ts` não atualiza essa referência.

Os ícones de tags dependem da posição: busca, pessoas e depois planta como alternativa. As fotos da galeria usam `src` como chave; não repita o mesmo caminho dentro da mesma galeria sem rever a chave.

## Conteúdos fora de `src/data`

| Local | Conteúdo mantido diretamente |
| --- | --- |
| Página inicial | Título, introdução, botões e `focalTerritories` |
| Quem somos | Definição do núcleo, objetivo, executor, coexecutoras e seção de financiamento |
| Ações | `areas`, avisos de construção, textos de Extensão e Repositório |
| Contato | Rótulos de campos, mensagens de confirmação e nome do campus |
| Header | Alt da logo e rótulos de ícones |
| Footer | Grupos de logos e alguns textos institucionais |
| Layout raiz | Descrição de metadados |
| Componentes de detalhe | Títulos fixos de seções e estilos das etiquetas |

## Diferenças existentes para revisar

“Quem somos” separa executor e coexecutoras; `institutionalLinks` e o rodapé chamam CEFET-MG, UEMG e Fiocruz de executoras. O README original ainda lista projetos como apresentação principal, traz outro contato e afirma publicação automática na `main`; esses pontos precisam ser lidos junto ao estado atual do código e às configurações reais da hospedagem.

`REVISAO-1-ORIENTADOR.md` é um registro histórico com pendências. Ele também cita links e quantidades de imagens da revisão, que podem diferir do cadastro atual. Para uma mudança editorial, confronte o código, o histórico e a orientação institucional; não escolha uma versão por suposição.
