# 05 — Todas as páginas e a navegação

[Índice](README.md) · [Anterior](04-arquitetura-e-configuracoes.md) · [Próximo](06-conteudo-e-dados.md)

## Mapa de endereços

| URL | Arquivo em `src/app` | Objetivo |
| --- | --- | --- |
| `/` | `page.tsx` | Apresentação e territórios focais |
| `/quem-somos` | `quem-somos/page.tsx` | Núcleo, equipe, governança e apoio |
| `/territorios` | `territorios/page.tsx` | Lista dos territórios |
| `/territorios/cabana-pai-tomas` | `territorios/[slug]/page.tsx` | Detalhe da Cabana |
| `/territorios/kamaka-mongoio` | Mesmo arquivo dinâmico | Detalhe da aldeia |
| `/territorios/corrego-do-narciso` | Mesmo arquivo dinâmico | Detalhe do quilombo |
| `/projetos` | `projetos/page.tsx` | Ensino, Pesquisa, Extensão e acesso ao repositório |
| `/projetos/hortas-comunitarias` | `projetos/[slug]/page.tsx` | Projeto antigo de hortas |
| `/projetos/manejo-de-raizes` | Mesmo arquivo dinâmico | Projeto antigo de raízes |
| `/projetos/troca-de-saberes` | Mesmo arquivo dinâmico | Projeto antigo de encontros |
| `/projetos/formacao-agroecologia` | Mesmo arquivo dinâmico | Projeto antigo de formação |
| `/links-uteis` | `links-uteis/page.tsx` | Instituições e colaboradores |
| `/repositorio` | `repositorio/page.tsx` | Links para produções externas |
| `/contato` | `contato/page.tsx` | Formulário visual, canais e mapa |
| URL inexistente | `not-found.tsx` | Aviso 404 e retorno ao início |

Não existe rota `/acoes`; o rótulo “Ações” do menu aponta para `/projetos`.

## Página inicial

`HomePage` possui duas grandes seções. A primeira apresenta o núcleo com título, texto e dois botões: um leva às ações e outro aos territórios. Ao lado há uma composição com três fotografias clicáveis. A primeira ocupa duas linhas da grade; as outras ocupam uma célula cada.

A segunda seção mostra três cartões de territórios. Cada cartão contém foto, localização, título, descrição e link de detalhe. As duas seções usam a lista local `focalTerritories`. Nesse cadastro, `heroImage` alimenta a composição de abertura e `image` alimenta o cartão inferior.

As fotografias da abertura diferem das fotos de detalhe: isso é permitido porque são campos independentes. Para o quilombo, a abertura usa o arquivo da pasta `corrego-narciso`, enquanto o cartão e o cadastro de detalhe usam uma imagem da pasta `misturadas`.

O primeiro item recebe prioridade de imagem na abertura. `FadeIn`, `StaggerContainer` e elementos `motion` produzem as entradas e movimentos ao passar o mouse.

## Quem somos

`QuemSomosPage` é um componente de servidor com título de metadados próprio. Sua ordem visual é:

1. Introdução ao núcleo.
2. “O que é o núcleo?” e “Objetivo”.
3. Equipe: coordenação, equipe NEA, bolsistas colaboradores e bolsistas dos territórios.
4. Governança: executor e coexecutoras.
5. Colaboradores.
6. Financiamento CNPq.

Os nomes vêm dos quatro arrays em `members.ts`. Os textos e cadastros de executor/coexecutoras estão no próprio arquivo da página. Colaboradores vêm de `collaboratorLinks`. O financiamento aparece em uma seção escrita diretamente no JSX.

As fichas de pessoas exibem **nome e instituição**. Campos opcionais como `role`, `href`, `territory` e `image` não são utilizados por esses cartões atuais. Preencher esses campos não acrescenta automaticamente uma foto ou um link.

## Lista de territórios

`TerritoriosPage` percorre `territories` com `.map`. Cada registro vira um cartão grande com imagem e texto. `imagePosition` escolhe se a foto vem à esquerda ou à direita em telas com duas colunas. Em telas pequenas, o conteúdo se empilha.

`tagColor` é consultado no mapa local `tagStyles`: `green` usa verde, `brown` usa marrom escuro e `orange` usa a cor marrom da paleta atual. O nome `orange` é uma chave do código, não uma garantia de que a cor final seja laranja.

O botão “Saiba mais” monta `/territorios/` seguido do `slug`.

## Detalhe de território

A rota procura o registro e entrega-o a `TerritoryDetailView`. O componente apresenta foto de abertura em largura total, caminho de volta, marcadores, título, subtítulo, introdução e seção temática.

`figure` acrescenta uma foto com legenda e `quote` acrescenta uma citação, quando esses campos existem. Os três registros atuais não preenchem esses campos. Na coluna lateral ficam a ficha, o link para `/repositorio` e outros territórios. Um relacionado sem `slug` aparece apenas como texto; com `slug`, vira link.

Em telas largas, a coluna principal ocupa oito das doze colunas e a lateral ocupa quatro. A caixa lateral usa `sticky top-28`, acompanhando a rolagem com distância do topo.

## Ações: a página atual de projetos

`ProjetosPage` não importa `projects`. A lista `areas` no próprio arquivo contém Ensino e Pesquisa, com textos de conteúdo futuro. O componente sempre mostra “Em breve”; a propriedade `empty: true` existe nos objetos, mas não decide a exibição no JSX.

Extensão mostra cartões com links externos de `collaboratorLinks`. A última seção leva à página Repositório.

Para publicar conteúdo de Ensino ou Pesquisa, será necessário editar a estrutura dessa página ou implementar uma conexão com novos dados. Alterar `projects.ts` sozinho não muda esses cartões.

## Detalhes de projetos antigos

As quatro URLs de projeto continuam funcionando porque `projects.ts`, `getProject`, a rota dinâmica e `ProjectDetailView` permanecem no repositório. Elas mostram título, etiquetas, data, território, foto, textos, etapas, benefícios, números animados e galeria.

O link de retorno aponta para `/projetos`, que agora mostra as áreas. Os números, datas e textos são valores fixos do cadastro, sem cálculo a partir de atividades reais ou sincronização automática. A existência desses valores no código não atesta validação institucional.

## Links úteis

`LinksUteisPage` monta dois grupos: instituições e colaboradores. Usa `institutionalLinks` e `collaboratorLinks`, com logos, descrições e setas de acesso. Os cartões são links externos e abrem outra aba.

Os elementos `motion.a` recebem `staggerItem`, então a animação em sequência está efetivamente vinculada aos filhos da lista.

## Repositório

`RepositorioPage` transforma os três registros de `repositoryLinks` em cartões. Os destinos são a página institucional do núcleo no CEFET-MG, o SoFiA e o canal do YouTube. Não há arquivos para download hospedados por esse componente, busca de documentos ou categorização por território.

## Contato

`ContatoPage` tem formulário à esquerda e canais/mapa à direita em telas grandes. Os campos são nome, e-mail ou telefone, e mensagem. Todos usam `required`; o campo de contato é texto livre, sem validação específica de formato.

Ao enviar, o evento padrão é cancelado e `submitted` muda para `true`. O formulário é substituído pela confirmação “Mensagem registrada!”. Não existe envio, leitura dos campos ou armazenamento. Consulte o capítulo 10 antes de orientar visitantes a usar esse formulário.

## Página não encontrada

`NotFound` exibe “404”, “Página não encontrada.” e um link ao início. `notFound()` também aciona essa experiência para slugs não cadastrados. Teste tanto uma rota inexistente quanto um detalhe inexistente.

## Menu e rotas ativas

`navItems` contém Início, Quem somos, Territórios focais, Ações, Links úteis e Fale conosco. Repositório aparece no rodapé, na página de ações e nas fichas dos territórios, mas não é item do cabeçalho.

`Header` verifica a URL com `usePathname`. Para `/`, exige igualdade exata; para os outros links, usa `startsWith`. Assim, um detalhe de território mantém “Territórios focais” ativo. Se criar rotas com prefixos parecidos, confira se essa regra destaca o item correto.

## Títulos da aba do navegador

“Quem somos” exporta seus metadados na página. Contato, projetos e territórios os definem nos layouts da seção. Os detalhes geram o título com o registro. Início, Links úteis e Repositório usam os metadados herdados, pois não possuem definição própria atual.
