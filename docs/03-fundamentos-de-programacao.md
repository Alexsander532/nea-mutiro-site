# 03 — Fundamentos para ler o código

[Índice](README.md) · [Anterior](02-preparacao-e-execucao.md) · [Próximo](04-arquitetura-e-configuracoes.md)

## As camadas de uma página

**HTML** descreve os elementos: título, parágrafo, imagem e formulário. **CSS** define aparência e posição. **JavaScript** define comportamentos. **TypeScript** acrescenta descrições de tipos ao JavaScript para apontar incompatibilidades antes da publicação. **React** reúne esses elementos em componentes reutilizáveis.

Neste projeto, `.ts` contém dados e código TypeScript; `.tsx` contém TypeScript com marcação JSX; `.css` contém estilos; `.mjs` contém módulos JavaScript de configuração; `.json` contém dados estruturados; `.md` contém documentação Markdown.

## Valores, objetos e listas

```ts
const nome = "NEA Mutiró";
const quantidade = 3;
const aberto = true;
const contato = { email: "exemplo@instituicao.org", nome: "Equipe" };
const nomes = ["Primeira pessoa", "Segunda pessoa"];
```

Esse é um exemplo didático. Texto entre aspas é uma `string`, um número é `number` e `true`/`false` são valores `boolean`. Um objeto usa `{}` para reunir campos. Uma lista, chamada `array`, usa `[]` para reunir itens. `contato.email` acessa o campo `email`. `nomes[0]` acessa o primeiro item: os índices começam em zero.

`const` impede atribuir outro valor àquela variável. Isso não significa que todo objeto ou lista seja profundamente imutável. No projeto, os cadastros são editados diretamente nos arquivos e importados pelas páginas.

## Tipos como fichas de preenchimento

Trecho real de `src/data/members.ts`:

```ts
export type Member = {
  name: string;
  institution: string;
  role?: string;
  href?: string;
  territory?: string;
  image?: string;
};
```

`Member` descreve uma pessoa. `name` e `institution` são obrigatórios. O `?` indica campo opcional. `Member[]` significa uma lista de pessoas nesse formato. TypeScript verifica o formato, mas não confere se a pessoa pertence à instituição ou se o endereço de uma imagem existe.

Uma união como `"green" | "brown" | "orange"` permite somente essas três opções. `as const`, usado em algumas listas, preserva valores literais e ajuda a tratar o cadastro como uma estrutura de leitura no sistema de tipos.

## Funções, imports e exports

```ts
export function getTerritory(slug: string) {
  return territories.find((t) => t.slug === slug);
}
```

A função recebe um texto chamado `slug` e procura um território com o mesmo identificador. `===` compara valores. `.find` retorna o primeiro item correspondente ou `undefined` quando não encontra. `return` devolve o resultado para quem chamou a função.

`(t) => t.slug === slug` é uma função curta, chamada função de seta. Nesse exemplo ela é executada para cada território até encontrar a correspondência.

`export` permite utilizar uma definição em outros arquivos. `import { territories } from "@/data/territories"` traz uma exportação com esse nome. `export default` marca a exportação principal; as páginas do Next.js usam essa forma. `import type` traz somente informação para a verificação de tipos.

O prefixo `@/` é um atalho configurado para `src/`. Não é um site externo nem um pacote a instalar.

## Componentes e JSX

```tsx
function Saudacao({ nome }: { nome: string }) {
  return <p className="text-green">Olá, {nome}!</p>;
}
```

Esse componente didático recebe uma propriedade, ou **prop**, chamada `nome`, e devolve marcação para a tela. Usar `<Saudacao nome="Equipe PET" />` cria o parágrafo. As chaves `{nome}` inserem JavaScript no JSX. `className` atribui classes CSS; em JSX usamos esse nome em vez de `class`.

Um componente começa com maiúscula, como `Header` ou `FadeIn`. Uma tag HTML costuma começar com minúscula, como `section`, `p` ou `input`. `children` é o conteúdo colocado entre a abertura e o fechamento de um componente:

```tsx
<FadeIn delay={0.2}>
  <h2>Territórios focais</h2>
</FadeIn>
```

O título é `children`; `delay` é uma prop numérica. `<> ... </>` é um fragmento: agrupa elementos sem adicionar uma caixa HTML extra.

## Repetição de elementos

```tsx
{members.map((member) => (
  <p key={member.name}>{member.name}</p>
))}
```

`.map` transforma cada pessoa em um parágrafo. `key` ajuda o React a identificar os itens. Uma chave precisa ser estável e única dentro daquela lista. No projeto há chaves baseadas em nome, título, caminho de imagem e início de parágrafo; evitar repetições desses valores previne ambiguidades.

## Condições e valores padrão

```tsx
{detail.figure && <figure>Uma figura</figure>}
{submitted ? <p>Obrigado!</p> : <form>...</form>}
```

`&&` é usado aqui para mostrar a figura somente quando existe. O operador `? :` escolhe um de dois resultados. O formulário de contato usa essa segunda forma para trocar o formulário pela confirmação.

`??` fornece uma alternativa quando o valor é `null` ou `undefined`. `tagIcons[i] ?? Sprout`, por exemplo, escolhe um ícone reserva quando a posição não existe. `...props` espalha propriedades restantes para outro elemento. Uma string com crases pode interpolar valores: `` `/territorios/${territory.slug}` `` produz o link de detalhe.

## Estado, efeitos e referências

`useState` guarda um valor que pode mudar e provocar atualização da tela:

```tsx
const [mobileOpen, setMobileOpen] = useState(false);
```

`mobileOpen` informa se o menu está aberto; `setMobileOpen` altera esse estado. Ele pertence à interface atual e não é um banco de dados. Recarregar a página normalmente reinicia o estado.

`useRef` mantém uma referência, por exemplo a um elemento observado na tela. `useEffect` executa lógica após a renderização conforme suas dependências. Em `CountUp`, ele inicia a contagem quando o elemento entra na área visível.

Funções como `useState` são **hooks**. Devem ser chamadas no nível principal do componente, mantendo a mesma ordem a cada renderização, em vez de dentro de uma condição ou de um `.map`.

## Código assíncrono

`async` marca uma função que pode aguardar resultados. `await` espera uma operação assíncrona. Nas rotas `[slug]`, `params` é uma `Promise` com o parâmetro da URL; o código usa `await params` para obter o `slug`. Isso não representa uma consulta a banco: depois ele procura o registro na lista local.

## Como ler um arquivo sem se perder

1. Leia os imports para saber do que ele depende.
2. Veja os tipos e listas declarados antes do componente.
3. Localize a função principal e as props recebidas.
4. Procure os estados e funções de evento.
5. Siga o `return` de cima para baixo, separando as seções visuais.
6. Em cada `.map`, abra a lista de origem para ver quais dados aparecem.

Comentários `// ...` e `{/* ... */}` ajudam a leitura e não aparecem como texto na página. Salve uma alteração por vez e confira o resultado para relacionar o código com o que o navegador mostra.
