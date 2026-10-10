# Manual do site NEA Mutiró

Bem-vindo ao projeto! Esta documentação foi escrita para os próximos integrantes do PET conecTTE, inclusive para quem nunca trabalhou com programação. Você não precisa entender todos os arquivos de uma vez: primeiro coloque o site para funcionar no seu computador, depois faça uma alteração pequena e avance pelos capítulos.

**Referência desta documentação: código do repositório em 6 de outubro de 2026.** O comportamento descrito foi identificado nos arquivos locais. Contas de hospedagem, permissões institucionais e disponibilidade de sites externos precisam ser conferidas com a equipe. Os exemplos marcados como didáticos não são novos conteúdos aprovados para publicação.

## Roteiro de leitura

| Capítulo | O que você aprenderá |
| --- | --- |
| [01 — Visão geral](01-visao-geral.md) | Para que serve o site, tecnologias e funcionalidades existentes |
| [02 — Preparação e execução](02-preparacao-e-execucao.md) | Ferramentas, instalação, terminal e comandos |
| [03 — Fundamentos de programação](03-fundamentos-de-programacao.md) | Como ler HTML, CSS, JavaScript, TypeScript e React neste projeto |
| [04 — Arquitetura e configurações](04-arquitetura-e-configuracoes.md) | Pastas, renderização, roteamento e arquivos de configuração |
| [05 — Páginas e navegação](05-paginas-e-navegacao.md) | Todas as telas, seções, rotas e metadados |
| [06 — Conteúdo e dados](06-conteudo-e-dados.md) | Campos de cada cadastro e onde os dados são utilizados |
| [07 — Componentes e animações](07-componentes-e-animacoes.md) | Cabeçalho, rodapé, botões, detalhes, ícones e movimento |
| [08 — Aparência e imagens](08-aparencia-e-imagens.md) | Paleta, Tailwind, responsividade e arquivos públicos |
| [09 — Guias de alteração](09-guias-de-alteracao.md) | Receitas completas para manutenção e expansão |
| [10 — Contato e integrações](10-contato-e-integracoes.md) | Formulário, mapa, redes e limites de funcionamento |
| [11 — Qualidade e problemas](11-qualidade-e-problemas.md) | Revisão, testes manuais e diagnóstico de erros |
| [12 — Git, publicação e continuidade](12-git-publicacao-e-continuidade.md) | Trabalho em equipe, deploy e passagem de conhecimento |
| [13 — Inventário do código](13-inventario-do-codigo.md) | Consulta arquivo por arquivo e relações entre eles |

## Caminhos conforme sua necessidade

- **Estou começando do zero:** leia 01, 02 e 03; faça o primeiro exercício do capítulo 09.
- **Quero corrigir um texto, pessoa ou imagem:** consulte 06, 08 e 09; revise com o capítulo 11.
- **Quero entender a implementação:** leia 04, 05, 07 e 13 com os arquivos de código abertos.
- **Vou assumir a manutenção:** leia todos os capítulos, especialmente 10, 11 e 12.

## Cinco informações que evitam confusão

1. O conteúdo fica em código, principalmente em `src/data`. Não existe painel administrativo ou banco de dados implementado.
2. O formulário de contato **não envia nem salva mensagens**. A confirmação aparece apenas no navegador.
3. O ícone de busca do cabeçalho **não executa uma busca**.
4. `/projetos` apresenta Ensino, Pesquisa e Extensão. Os quatro projetos antigos continuam acessíveis pelas URLs de detalhe, mas não aparecem como listagem nessa página.
5. A página inicial tem uma lista própria de territórios. Alterar `src/data/territories.ts` não atualiza automaticamente essa lista.

## Como usar os exemplos

Os caminhos dos arquivos são relativos à raiz do projeto. `src/data/site.ts`, por exemplo, significa entrar em `src`, depois `data`, e abrir `site.ts`. Comandos devem ser executados no terminal aberto na raiz, salvo indicação diferente. Não cole comandos no código nem blocos TypeScript no terminal.

Os links entre os capítulos funcionam em visualizadores Markdown e no GitHub. Para ler um capítulo, abra o arquivo `.md` no editor e ative sua visualização Markdown, se disponível.

Ao alterar o comportamento do site, atualize o capítulo correspondente. A documentação deve acompanhar o código para continuar útil à próxima turma.
