# 07 — Componentes e animações

[Índice](README.md) · [Anterior](06-conteudo-e-dados.md) · [Próximo](08-aparencia-e-imagens.md)

## Por que dividir em componentes?

Uma parte usada em várias páginas pode ser implementada uma vez. Assim, modificar o cabeçalho altera todas as telas que o incluem. Essa divisão também facilita entender o programa: cada arquivo tem uma responsabilidade menor.

Os componentes próprios estão em `src/components`. As páginas importam esses componentes; os componentes importam dados, bibliotecas ou outros componentes.

## `Header.tsx`

O cabeçalho é um componente de cliente incluído no layout raiz. Importa logo, `navItems`, ícones, hooks de React e Framer Motion.

| Valor | Origem | Responsabilidade |
| --- | --- | --- |
| `pathname` | `usePathname()` | Saber qual URL está aberta |
| `mobileOpen` | `useState(false)` | Abrir e fechar menu de telas menores |
| `scrolled` | `useState(false)` | Escolher estilo do cabeçalho |
| `scrollY` | `useScroll()` | Observar posição vertical da página |

`useMotionValueEvent` acompanha mudanças de `scrollY`. Acima de 20 pixels de rolagem, `scrolled` fica verdadeiro e o cabeçalho recebe outro fundo, desfoque e sombra.

`isActive` determina o destaque do link. O sublinhado ativo usa `layoutId="nav-underline"`, que permite ao Framer Motion animar sua passagem entre itens.

Em telas `lg` ou maiores aparece o menu horizontal e o botão de busca. Abaixo desse limite aparece o botão de abrir/fechar menu. O botão troca `mobileOpen`; a caixa do menu anima altura e opacidade. Clicar em um link mobile também fecha o menu.

O cabeçalho usa `sticky top-0 z-50`: permanece no topo enquanto a página rola e fica acima de outros elementos. A logo leva ao início e tem um pequeno movimento ao passar o mouse.

O botão “Buscar” não possui evento ou destino. O menu atual também não declara `aria-expanded`/`aria-controls` nem gerenciamento de foco; são possíveis melhorias, não recursos já implementados.

## `Footer.tsx` e `LogoGroup`

O rodapé é um componente de servidor. O tipo interno `FooterLogo` exige `src` e `alt` e permite `href`. Há três listas locais: `executiveInstitutionLogos`, `fundingLogos` e `collaboratorLogos`.

`LogoGroup` recebe um título e uma lista. Para cada logo, monta a imagem em uma caixa branca. Se houver `href`, envolve a caixa em link externo; caso contrário, usa uma caixa sem link. Essa função é interna ao arquivo e não é exportada.

Depois dos grupos de logos, há quatro colunas: marca/apresentação, links úteis internos, colaboradores externos e contato/redes. A distribuição se adapta à largura da tela.

E-mail e redes vêm de `site.ts`. Os links textuais de colaboradores também vêm desse arquivo. Os logos e destinos dos grupos superiores são cadastrados separadamente no rodapé, portanto não são sincronizados automaticamente com `collaboratorLinks` ou `institutionalLinks`.

## `Button.tsx`: um link com aparência de botão

Apesar do nome, `Button` renderiza `next/link`, dentro de um `motion.div`. É apropriado para **navegar**. Não é o controle de envio de formulário; Contato usa `motion.button` com `type="submit"`.

O tipo combina as props de `Link` com opções próprias:

| Prop | Valores | Padrão |
| --- | --- | --- |
| `href` | Destino aceito por `Link` | Deve ser fornecido |
| `variant` | `primary`, `outline`, `ghost` | `primary` |
| `size` | `sm`, `md`, `lg` | `md` |
| `icon` | Booleano | Ausente, sem seta |
| `className` | Classes adicionais | Texto vazio |
| `children` | Conteúdo do link | Conteúdo fornecido pelo uso |

Exemplo de uso:

```tsx
<Button href="/territorios" variant="outline" size="md">
  Ver territórios focais
</Button>
```

`variants` e `sizes` são mapas de classes. O componente monta a classe final com a variante, tamanho e classes recebidas. `...props` repassa as outras propriedades ao `Link`. A caixa aumenta ao passar o mouse e diminui ao clicar. Com `icon`, uma seta se move horizontalmente em repetição.

## `FadeIn.tsx`

Esse arquivo exporta três recursos: `FadeIn`, `StaggerContainer` e `staggerItem`.

### `FadeIn`

Envolve conteúdo em `motion.div`. A referência `ref` é observada por `useInView` com `once: true` e margem `-80px`. Ao entrar na região de observação, muda de opacidade zero e posição deslocada para opacidade um e posição final.

| Prop | Uso | Padrão |
| --- | --- | --- |
| `children` | Conteúdo a animar | Obrigatório |
| `className` | Estilo da caixa envolvente | Opcional |
| `delay` | Espera, em segundos | `0` |
| `duration` | Duração, em segundos | `0.6` |
| `direction` | `up`, `down`, `left`, `right`, `none` | `up` |

`up` começa 32 pixels abaixo e sobe; `down` começa acima; `left` começa à direita e vai à esquerda; `right` começa à esquerda e vai à direita; `none` muda apenas a opacidade. A direção descreve o movimento até a posição final.

`ease: [0.22, 1, 0.36, 1]` define uma curva de velocidade: o movimento desacelera conforme termina. Não é necessário memorizar os números para usar o componente.

### `StaggerContainer` e `staggerItem`

`StaggerContainer` observa a entrada em tela com margem `-60px`, alterna variantes `hidden`/`visible` e configura `staggerChildren`. O intervalo padrão é `0.12` segundo. `staggerItem` define uma entrada com opacidade e deslocamento vertical de 28 pixels, com duração de `0.55` segundo.

Para que o efeito de sequência apareça, os elementos animados precisam usar as variantes:

```tsx
<StaggerContainer className="grid gap-6 md:grid-cols-3">
  <motion.div variants={staggerItem}>Primeiro cartão</motion.div>
  <motion.div variants={staggerItem}>Segundo cartão</motion.div>
</StaggerContainer>
```

Importe `motion` de `framer-motion` e os dois recursos do arquivo `FadeIn`. O componente que chama diretamente `motion` deve ser de cliente. Algumas listas atuais têm âncoras comuns dentro de `StaggerContainer`, como Extensão e colaboradores em “Quem somos”; elas não recebem a animação `staggerItem` só por estarem dentro do contêiner.

## `CountUp.tsx`

Recebe `value`, `suffix` opcional e `duration` opcional, com padrões de sufixo vazio e duração de `1.8` segundo. É usado nos números dos projetos antigos.

O funcionamento é:

1. O valor exibido começa em zero.
2. `useInView` observa o elemento, uma vez, com margem `-40px`.
3. `useEffect` inicia a contagem quando ele entra na região visível.
4. `performance.now()` marca o início.
5. `requestAnimationFrame` atualiza o número nos quadros do navegador.
6. O progresso é limitado a um e recebe suavização cúbica.
7. `Math.floor` mostra um inteiro; ao terminar, o resultado corresponde ao alvo inteiro.

`suffix` é acrescentado depois do número, como `120+`. O componente não calcula o indicador nem consulta uma fonte de dados. Foi desenhado para os números inteiros e positivos presentes no cadastro. Não possui limpeza explícita para cancelar um quadro agendado ao desmontar nem tratamento próprio para duração zero; confira isso antes de ampliar os usos.

## `TerritoryDetailView.tsx`

Recebe `{ territory: Territory }` e separa `detail` com desestruturação. A responsabilidade é renderizar o registro, sem procurá-lo nem decidir a URL atual.

`chipStyles` escolhe cores das etiquetas. `infoIcons` escolhe ícones por posição. Os campos opcionais `figure` e `quote` usam renderização condicional. A imagem de abertura é prioritária; outras imagens têm dimensões de contêiner e `sizes` próprios.

Os relacionados geram links por slug, e a ficha sempre leva ao repositório geral. Não existe filtragem do repositório conforme o território.

## `ProjectDetailView.tsx`

Recebe `{ project: Project }`, separa `detail` e monta:

- Cabeçalho com retorno, etiquetas, título, data e território.
- Foto prioritária de abertura.
- Introdução e etapas numeradas.
- Benefícios e indicadores em uma coluna lateral.
- Galeria de fotos com descrição alternativa individual.

`tagStyles` controla as etiquetas; `tagIcons` depende da ordem. Etapas usam `whileInView` com atraso proporcional ao índice. Indicadores usam `CountUp`; galeria usa `StaggerContainer` com `staggerItem`.

Mudar esse arquivo altera o layout dos quatro projetos. Mudar um registro altera o conteúdo daquele projeto.

## `SocialIcons.tsx`

Exporta `InstagramIcon` e `YoutubeIcon`. Ambos recebem `className` opcional e desenham SVG diretamente. Não há imagem externa ou chamada de rede para obter esses ícones.

`currentColor` faz o desenho herdar a cor CSS do contexto. O triângulo do YouTube usa `var(--cream, #fbfbe2)`. `aria-hidden="true"` trata o desenho como decorativo; o link ao redor precisa fornecer texto ou um rótulo acessível, como acontece nos ícones do rodapé.

## Vocabulário do Framer Motion encontrado aqui

| Propriedade | Significado |
| --- | --- |
| `initial` | Estado inicial da animação |
| `animate` | Estado para o qual deve ir |
| `whileHover` | Movimento quando o ponteiro está sobre o elemento |
| `whileTap` | Movimento durante pressão/clique |
| `whileInView` | Estado quando o elemento está visível |
| `transition` | Duração, atraso, curva ou comportamento de mola |
| `variants` | Estados nomeados, como `hidden` e `visible` |
| `viewport` | Regras de observação da área visível |

O código atual não possui tratamento próprio de preferência por movimento reduzido. Como alguns conteúdos começam invisíveis, revise a leitura com JavaScript desativado ou falhando ao modificar as animações.
