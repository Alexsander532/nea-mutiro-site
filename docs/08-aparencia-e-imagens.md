# 08 — Aparência, responsividade e imagens

[Índice](README.md) · [Anterior](07-componentes-e-animacoes.md) · [Próximo](09-guias-de-alteracao.md)

## O CSS global

`src/app/globals.css` importa Tailwind com `@import "tailwindcss"`. Em `:root`, define variáveis CSS com a paleta. Em `@theme inline`, associa essas variáveis a nomes que podem ser usados nas classes Tailwind.

Por exemplo, `--brown` guarda uma cor; `--color-brown: var(--brown)` expõe essa cor ao tema; `text-brown`, `bg-brown` e `border-brown` aplicam a mesma referência a texto, fundo e borda.

| Variável | Cor atual | Papel comum |
| --- | --- | --- |
| `--cream` | `#fbfbe2` | Fundo principal |
| `--cream-dark` | `#f5f5dc` | Caixas e fundos alternados |
| `--footer` | `#e4e4cc` | Fundo do rodapé |
| `--green` | `#50652a` | Destaques verdes |
| `--green-light` | `#cfe99f` | Fundos e etiquetas suaves |
| `--brown` | `#823b18` | Títulos, botões e destaques |
| `--brown-dark` | `#803d0a` | Variação de marrom |
| `--text` | `#1b1d0e` | Texto principal |
| `--text-muted` | `#54433c` | Texto secundário |
| `--text-light` | `#87736b` | Texto de menor destaque |
| `--border` | `#dac1b8` | Bordas |
| `--accent` | `#a0522d` | Alguns títulos e detalhes |

O corpo usa fontes do sistema, com alternativas como Segoe UI. `.font-display` usa Georgia e Times New Roman para títulos. Não há download de fontes por `next/font` no código atual. `html` usa rolagem suave; o layout aplica `antialiased` ao corpo.

## Como interpretar classes

```tsx
className="rounded-3xl border border-border/50 bg-white p-8 shadow-md md:p-12"
```

Essa sequência significa: cantos arredondados; borda; cor da borda com transparência; fundo branco; espaço interno; sombra; e espaço interno maior a partir de `md`.

| Padrão | Exemplo | Significado |
| --- | --- | --- |
| Espaço interno | `p-8`, `px-6`, `py-16` | Todos os lados, horizontal ou vertical |
| Espaço externo | `mt-6`, `mb-12`, `mx-auto` | Margem superior, inferior ou centralização horizontal |
| Disposição | `flex`, `grid`, `gap-8` | Linha/coluna flexível, grade e distância entre filhos |
| Texto | `text-lg`, `font-bold`, `leading-relaxed` | Tamanho, peso e altura de linha |
| Cor | `text-green`, `bg-cream` | Cor do texto e do fundo |
| Interação | `hover:scale-105`, `focus:ring-2` | Estilo ao passar o mouse ou receber foco |
| Tamanho | `w-full`, `max-w-7xl`, `h-64` | Largura total, largura máxima e altura |
| Posição | `relative`, `absolute`, `sticky` | Referência para filhos, sobreposição e aderência na rolagem |

`bg-green-light/30` aplica a cor com 30% de opacidade. `h-[460px]` usa um valor arbitrário em vez da escala padrão. `lg:grid-cols-[2fr_1fr_2fr]` cria colunas com proporções específicas. Essas classes precisam estar escritas de forma detectável no código; concatenar pedaços como `"bg-" + cor` pode impedir a geração do estilo. Prefira mapas com classes completas, como `tagStyles`.

## Responsividade

Os estilos sem prefixo são a base, inclusive para celulares. Prefixos aplicam ajustes a partir de uma largura. O projeto não redefine os breakpoints padrão usados pelo Tailwind:

| Prefixo | Largura de referência | Exemplo de uso no site |
| --- | --- | --- |
| `sm:` | 640 px | Algumas grades de pessoas e ajustes de altura |
| `md:` | 768 px | Cartões em colunas e títulos maiores |
| `lg:` | 1024 px | Menu horizontal e layouts com barra lateral |
| `xl:` | 1280 px | Ajuste de título da página inicial |

`hidden lg:flex` esconde um elemento na base e o mostra como flex em telas largas. `lg:hidden` faz o inverso. Uma tela de 900 px pode ter conteúdo em colunas e ainda usar o menu mobile; isso decorre de limites diferentes.

Para conferir, use as ferramentas de desenvolvimento do navegador e redimensione a janela. Observe se há rolagem horizontal, títulos cortados, botões difíceis de tocar ou fotos que escondem a parte importante da cena.

## Como `public` funciona

Um arquivo em `public/images/formacao.jpg` é acessível como `/images/formacao.jpg`. Não escreva `/public/images/formacao.jpg` no `src` da imagem.

Tudo que for colocado em `public` pode ser solicitado pela URL, mesmo que nenhuma página tenha um link para o arquivo. Colocar um acervo nessa pasta é disponibilizá-lo publicamente. Verifique autorização e adequação das imagens antes de acrescentá-las.

## Inventário do acervo

Na data da documentação, `public/images/territorios` contém:

| Pasta | Arquivos | Observação |
| --- | --- | --- |
| `aldeia-kamaka-mongoio` | 47 | Fotografias da pasta da aldeia |
| `cabana-pai-tomas` | 159 | Fotografias, incluindo arquivos HEIC e nomes com cópias |
| `misturadas` | 91 | Acervo cuja atribuição individual precisa ser conferida |
| `corrego-narciso` | 1 | Foto usada na abertura da página inicial |
| **Total** | **298** | Contagem dos arquivos atuais dessas pastas |

O histórico da primeira revisão registra 297 imagens extraídas; a pasta específica com um arquivo está presente no estado atual. Esse histórico não é um inventário automaticamente atualizado.

Há também fotografias genéricas na raiz de `public/images`, utilizadas nos projetos antigos. `public/logos` contém marcas originais e `divididos` contém logos individuais transparentes. A marca principal usada no cabeçalho e rodapé é `/images/logo_neaMutiro.png`.

Não existe carregamento automático de todas as fotos de uma pasta para uma galeria. As páginas exibem somente os caminhos cadastrados. Arquivos não referenciados continuam públicos se estiverem em `public`.

## `next/image`

As fotos e logos normalmente usam `Image`, de `next/image`. As propriedades relevantes são:

- `src`: caminho local ou endereço autorizado.
- `alt`: descrição alternativa para quem não vê a imagem.
- `width` e `height`: dimensões de referência, usadas nas logos.
- `fill`: preenche o contêiner, usado nas fotografias.
- `sizes`: orienta a escolha de tamanho conforme a largura exibida.
- `priority`: prioriza imagens importantes na abertura.
- `quality`: seleciona uma qualidade permitida na configuração.

Para `fill`, o contêiner normalmente precisa de `relative` e de altura ou proporção definida. Sem isso, pode não haver uma área onde desenhar a imagem.

`object-cover` preenche a caixa e recorta sobras. `object-contain` preserva a imagem inteira, podendo deixar espaço livre; é apropriado para logos. `object-center` escolhe o centro como referência do recorte.

Nem todas as imagens atuais com `fill` possuem `sizes`, como as da listagem de territórios. Ao revisar desempenho, esse é um ponto a conferir. Usar prioridade em todas as fotos também pode piorar o carregamento.

## Cuidados com formatos e nomes

JPG/JPEG e PNG aparecem no acervo. SVG é usado em ícones e marcas. Há arquivos HEIC preservados, mas eles não são usados pelos cadastros atuais. Converta uma foto HEIC para um formato compatível antes de adotá-la no site; não basta mudar sua extensão.

Nomes e extensões devem coincidir exatamente. Windows pode aceitar diferenças entre `.JPG` e `.jpg`, mas a hospedagem pode tratá-las como caminhos distintos. Novos arquivos com nomes simples, sem espaços ou acentos, facilitam manutenção; não renomeie os existentes sem atualizar todas as referências.

Antes de publicar uma foto, confira o território correto, pessoas retratadas, permissão de uso, orientação, recorte, peso do arquivo e descrição alternativa. Não use o nome da pasta `misturadas` como prova de origem.

## Ícone do site e cores fixas

`src/app/icon.svg` é o ícone reconhecido pela convenção do Next.js. Arquivos como `public/logos/favicon.svg` e `favicon_identidade_vermelha.png` são arquivos públicos, mas sua presença sozinha não os torna o ícone ativo da aplicação.

Mudar `globals.css` altera muitas cores, mas não todas: há cores escritas diretamente, como `bg-[#eaead1]`, tons rosas, gradientes e classes azuis da seção CNPq. Para uma revisão completa de identidade visual, confira também componentes, páginas e o SVG do ícone.
