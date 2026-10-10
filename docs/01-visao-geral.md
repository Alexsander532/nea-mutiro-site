# 01 — Visão geral

[Índice](README.md) · [Próximo: preparação](02-preparacao-e-execucao.md)

## O que é este projeto?

Este repositório contém o site institucional do **Núcleo de Estudos em Agroecologia – NEA Mutiró**. Ele apresenta o núcleo, sua equipe, instituições, colaboradores e territórios focais. Também reúne caminhos para produções e formas de contato.

O PET conecTTE aparece como colaborador, junto ao Programa SoFiA e ao Kaiporá. O código de “Quem somos” apresenta CEFET-MG como executor, UEMG e Fiocruz Minas como coexecutoras, e CNPq como financiador. Há diferenças de nomenclatura em outras telas, registradas no capítulo 06; os papéis oficiais devem ser validados pela equipe.

Os territórios cadastrados são Aglomerado Cabana do Pai Tomás, Aldeia Indígena Kamakã Mongoió e Quilombo Córrego do Narciso. A documentação explica como o código exibe os textos; ela não substitui a revisão institucional das informações sobre as comunidades.

## Uma analogia para entender o site

Imagine uma exposição:

- As **páginas** são as salas: início, quem somos, territórios, ações, links e contato.
- Os **componentes** são peças reaproveitadas, como placas, molduras e botões.
- Os **dados** são as fichas com nomes, textos, links e caminhos das fotos.
- O **CSS** é a identidade visual: cores, tamanhos, espaços e disposição.
- O **Next.js** organiza o acesso às salas e prepara a exposição para publicação.
- O **Git** registra versões para comparar mudanças e recuperar trabalhos anteriores.

## Tecnologias presentes

As versões abaixo são as declarações de `package.json`. Um intervalo com `^` permite versões compatíveis; a instalação efetiva é registrada no `package-lock.json`.

| Tecnologia | Declaração | Função |
| --- | --- | --- |
| Next.js | `16.2.7` | Estrutura da aplicação, rotas, geração de páginas e imagens |
| React e React DOM | `19.2.4` | Construção da interface e atualização da tela |
| TypeScript | `^5` | Conferência dos formatos de dados durante o desenvolvimento |
| Tailwind CSS | `^4` | Estilos descritos por classes utilitárias |
| Framer Motion | `^12.40.0` | Animações de entrada, interação e rolagem |
| Lucide React | `^1.17.0` | Ícones, como menu, localização e seta |
| ESLint | `^9` | Análise do código segundo regras do projeto |
| PostCSS + plugin Tailwind | `@tailwindcss/postcss: ^4` | Processamento dos estilos |

Node.js executa as ferramentas no computador ou na hospedagem. npm instala bibliotecas e aciona os comandos definidos pelo projeto. O usuário final acessa o resultado pelo navegador; ele não precisa instalar Node.js.

## O que está implementado

Há navegação interna, menu para telas menores, destaque da rota ativa, cabeçalho que muda com a rolagem, rodapé institucional e layout responsivo. Existem telas de detalhe dos três territórios e dos quatro projetos antigos, página 404, animações e contadores numéricos nos projetos.

A página de ações apresenta Ensino e Pesquisa como áreas em construção e Extensão como links para colaboradores. A página Repositório aponta para materiais externos; não é um sistema de upload ou uma biblioteca de documentos armazenados no site.

## O que exige atenção

| Recurso | Situação no código |
| --- | --- |
| Cadastro ou login | Não implementado |
| Banco de dados ou CMS | Não implementado |
| API própria | Não há rotas de API implementadas em `src/app` |
| Envio de contato | Apenas confirmação visual; não há envio |
| Busca | Botão visual sem ação |
| Upload de fotos/documentos | Não implementado |
| Integração Instagram/YouTube | Links; não há consulta automática de publicações |
| Analytics | Não há implementação identificada no código-fonte |
| Variáveis de ambiente da aplicação | Nenhuma leitura de `process.env` identificada em `src` |
| Testes automatizados próprios | Sem suíte ou script de teste no projeto examinado |

## Como uma alteração chega ao visitante

```text
Integrante edita texto, componente ou imagem
        ↓
Verifica o resultado localmente
        ↓
Registra e compartilha a alteração com Git
        ↓
Hospedagem executa o build e publica a versão
        ↓
Visitante acessa o site atualizado
```

Salvar um arquivo local não muda o site publicado. Alterar uma lista de dados também não exige criar manualmente uma página para cada item: as rotas de detalhe usam o cadastro e um componente comum. O capítulo 04 explica esse mecanismo.
