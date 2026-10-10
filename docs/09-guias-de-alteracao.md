# 09 — Receitas para alterar e ampliar o site

[Índice](README.md) · [Anterior](08-aparencia-e-imagens.md) · [Próximo](10-contato-e-integracoes.md)

## Antes de começar

Abra o projeto e execute `npm run dev`. Escolha uma tarefa pequena, salve os arquivos em UTF-8 e confira cada alteração no navegador. Os exemplos fictícios abaixo servem para aprendizagem; não devem ser publicados como informações reais do núcleo.

## 1. Seu primeiro exercício: corrigir um texto

1. Abra `src/app/page.tsx`.
2. Localize o título “Trabalhar, compartilhar e construir uma outra sociedade com a Agroecologia.”.
3. Em uma alteração de treino, acrescente uma palavra ou ajuste a frase.
4. Salve e confira a página `/` no navegador.
5. Veja o mesmo título com uma largura de celular.
6. Desfaça o treino pelo editor se não for uma mudança institucional aprovada.

Esse exercício mostra que um texto entre tags pode ser alterado sem mudar a estrutura. Preserve aspas, chaves e fechamento das tags. Uma frase entre aspas em um objeto é JavaScript; um texto entre `<h1>` e `</h1>` é conteúdo JSX.

## 2. Mudar e-mail ou redes

Abra `src/data/site.ts` e altere `contact.email`, `contact.instagramHandle`, `contact.instagramUrl` ou `youtubeUrl`. Confira a página Contato, o rodapé e o link do YouTube no Repositório.

O usuário exibido e a URL são campos separados. Mudar `instagramHandle` para outro nome não altera `instagramUrl`. Corrija também referências na documentação e no README quando fizer uma atualização oficial de contato.

## 3. Adicionar ou corrigir uma pessoa

Escolha o grupo em `src/data/members.ts`. Dentro do array correspondente, acrescente um objeto:

```ts
{
  name: "Nome de exemplo",
  institution: "Instituição de exemplo",
  role: "Colaborador",
},
```

Esse objeto deve ficar **dentro de `[...]`**, junto aos outros. A vírgula separa os registros. Não crie uma segunda declaração com o mesmo nome da lista.

Abra `/quem-somos` e confira o grupo, a grafia e a disposição. O campo `role` não aparece nos cartões atuais. Se quiser exibi-lo, acrescente ao JSX do grupo algo como:

```tsx
{member.role && <p className="mt-1 text-sm text-text-muted">{member.role}</p>}
```

Esse trecho precisa ficar dentro do `.map` onde `member` existe. Para uma mudança uniforme, aplique nos quatro grupos ou extraia um componente de pessoa como trabalho separado.

## 4. Trocar uma fotografia

1. Confira origem, autorização e território.
2. Prepare um arquivo compatível e com tamanho adequado.
3. Coloque-o em uma pasta apropriada de `public/images`.
4. Localize o caminho antigo no código.
5. Atualize todos os usos que devem mudar.
6. Ajuste `alt` ou legenda quando aplicável.
7. Confira carregamento e recorte no desktop e celular.

Exemplo didático: um arquivo em `public/images/territorios/cabana-pai-tomas/encontro.jpg` deve ser referenciado como:

```ts
image: "/images/territorios/cabana-pai-tomas/encontro.jpg",
```

Esse arquivo precisa existir para o exemplo funcionar. `image` e `detail.heroImage` são independentes. Na página inicial também há `heroImage` e `image`. Uma substituição pode envolver quatro campos, além de galerias e figuras.

Não apague a foto antiga antes de conferir referências em todo o projeto e links públicos já distribuídos. Nomes de arquivos com extensão maiúscula precisam ser respeitados.

## 5. Cadastrar um novo território

Abra `src/data/territories.ts` e acrescente um registro completo a `territories`. Este exemplo usa uma imagem já existente apenas para demonstrar o formato:

```ts
{
  slug: "territorio-exemplo",
  title: "Território de exemplo",
  location: "Município (MG)",
  tag: "Extensão",
  tagColor: "green",
  description: "Resumo didático do território.",
  image: "/images/paisagem-territorio.jpg",
  imagePosition: "left",
  detail: {
    subtitle: "Apresentação breve do território de exemplo.",
    heroImage: "/images/paisagem-territorio.jpg",
    chips: [{ label: "Comunidade", variant: "green" }],
    intro: ["Primeiro parágrafo de apresentação."],
    sectionTitle: "Atuação do núcleo",
    sectionBody: ["Descrição das atividades e parcerias."],
    info: [
      { label: "Localização", value: "Município (MG)" },
      { label: "Perfil", value: "Descrição do perfil" },
      { label: "Foco de Pesquisa", value: "Tema de exemplo" },
    ],
    related: [
      {
        slug: "cabana-pai-tomas",
        title: "Aglomerado Cabana do Pai Tomás",
        description: "Outro território cadastrado.",
      },
    ],
  },
},
```

Depois de salvar, confira `/territorios` e `/territorios/territorio-exemplo`. A listagem percorre o array e a rota dinâmica encontra o registro. O próximo build também passa a receber esse slug em `generateStaticParams`.

Se quiser mostrar o território na página inicial, atualize `focalTerritories` em `src/app/page.tsx`. Porém a composição da abertura foi desenhada para três fotografias: um quarto item exige revisão da grade, alturas e textos, e não apenas copiar um objeto. Atualize relacionados de outros territórios se desejar navegação recíproca.

## 6. Acrescentar figura e citação a um território

Dentro de `detail`, você pode adicionar:

```ts
figure: {
  src: "/images/paisagem-territorio.jpg",
  caption: "Legenda didática da fotografia.",
},
quote: {
  text: "Texto de exemplo para demonstrar uma citação.",
  author: "Autoria de exemplo",
},
```

O componente já possui apresentação para esses campos. Use somente citações reais revisadas, com atribuição e autorização adequadas. Não é necessário editar `TerritoryDetailView` para ativar essas duas seções.

## 7. Alterar um projeto antigo

Localize pelo `slug` em `src/data/projects.ts`. Altere os campos de `detail` para mudar sua página individual. Uma estatística tem este formato:

```ts
{ value: 120, suffix: "+", label: "FAMÍLIAS BENEFICIADAS" },
```

Use números e descrições confirmados. Modificar `category`, `description` ou `imagePosition` não altera a página de ações atual nem cria uma listagem. Para cadastrar outro detalhe, copie um registro completo, escolha slug único e preencha todos os campos exigidos pelo tipo `Project`.

Para expor esse detalhe na navegação, adicione um link em uma seção adequada após revisar o conteúdo. A criação do registro por si só só fornece a URL individual.

## 8. Publicar conteúdo de Ensino e Pesquisa

Abra `src/app/projetos/page.tsx`. A lista `areas` contém os dois cartões, mas ambos sempre recebem “Em breve”. Trocar `empty: true` por `false` não muda esse texto, pois `empty` não é consultado.

Para uma evolução simples, substitua o texto de `description`, retire ou condicione “Em breve” no JSX e acrescente links para materiais aprovados. Para vários conteúdos, defina um cadastro próprio com tipo, título, resumo e destino e percorra-o na seção correspondente. Se a equipe quiser reutilizar `projects`, implemente explicitamente essa conexão; ela não existe hoje.

Confira os três eixos, os links de Extensão e o acesso ao Repositório após a alteração.

## 9. Adicionar um material ao repositório

Acrescente um objeto a `repositoryLinks`, em `src/data/site.ts`:

```ts
{
  label: "Material de exemplo",
  description: "Descrição breve que ajuda a escolher o material.",
  href: "https://endereco-institucional-do-material.example/",
},
```

O endereço `.example` é fictício: substitua por um destino real antes de usar. O cartão aparece automaticamente em `/repositorio`. Confira se abre o material correto e se ele é acessível ao público desejado.

Um PDF colocado em `public` também pode ser referenciado por URL local, mas ficará público e o componente atual apenas abre o link em outra aba. Ele não implementa um botão de download forçado ou controle de acesso.

## 10. Alterar parceiros ou papéis institucionais

Confira em conjunto:

- `site.ts`: `institutionalLinks` e `collaboratorLinks`.
- `Footer.tsx`: três grupos locais de logos e textos institucionais.
- `quem-somos/page.tsx`: `executiveInstitution`, `coexecutors` e financiamento.
- As páginas que consomem os arrays e os textos do README/documentação.

Trocar a logo em uma lista não troca a mesma logo em outra. A alteração deve preservar a distinção de papéis definida pela equipe. Consulte as diferenças já registradas no capítulo 06.

## 11. Criar uma página nova

Exemplo didático de página institucional `/agenda`: crie `src/app/agenda/page.tsx` com:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Agenda" };

export default function AgendaPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h1 className="font-display text-4xl font-bold text-brown">Agenda</h1>
      <p className="mt-6 text-lg text-text-muted">
        Conteúdo de exemplo para uma página nova.
      </p>
    </section>
  );
}
```

Ela herdará cabeçalho, rodapé e estilos. Abra `/agenda` para verificar. Se fizer sentido incluí-la no menu, acrescente `{ href: "/agenda", label: "Agenda" }` em `navItems`. Confira a largura do menu desktop e o menu mobile.

Esse exemplo não usa eventos, então não precisa de `"use client"`. Se precisar de estado ou `motion`, isole a parte interativa em componente de cliente. Para uma página inteiramente de cliente, coloque metadados em um layout de servidor, seguindo o padrão de Contato. Não exporte `metadata` de um arquivo marcado `"use client"`.

## 12. Mudar cores ou layout

Para a paleta, altere as variáveis de `globals.css` e confira as cores fixas descritas no capítulo 08. Para um cartão específico, ajuste suas classes. `p-*` muda espaço interno, `gap-*` muda distância entre filhos, `grid-cols-*` muda colunas e prefixos como `md:` preservam ajustes por largura.

Não faça uma substituição global de todos os números de espaço: o mesmo valor pode ter finalidades diferentes em imagem, texto e menu. Confira contraste, leitura, foco do teclado e aparência em todas as páginas.

## Finalização de qualquer receita

Revise o diff do Git, verifique rotas e links, rode lint e build e atualize a documentação afetada. Para mudanças institucionais, peça a revisão de conteúdo prevista no processo da equipe. O capítulo 12 explica como compartilhar sem publicar acidentalmente na produção.
