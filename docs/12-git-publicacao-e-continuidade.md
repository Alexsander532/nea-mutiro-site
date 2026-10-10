# 12 — Git, publicação e continuidade do PET

[Índice](README.md) · [Anterior](11-qualidade-e-problemas.md) · [Próximo](13-inventario-do-codigo.md)

## Git em linguagem simples

Git registra versões dos arquivos. Um **commit** é um registro de mudanças com uma mensagem. Uma **branch** é uma linha de trabalho. O **repositório remoto** é a cópia compartilhada, normalmente no GitHub. Um **pull request**, ou PR, apresenta mudanças para revisão antes de incorporá-las.

`commit` guarda localmente; `push` envia ao remoto; publicar o site é outra etapa, que pode ser acionada pelo remoto conforme a configuração da hospedagem.

## Fluxo sugerido para uma alteração

Confira primeiro se já há trabalho local:

```powershell
git status
git branch --show-current
```

Não apague mudanças que você não reconhece. Se a cópia estiver limpa e for adequado atualizar sua branch, execute `git pull --ff-only`. Se falhar por divergência, leia o motivo e alinhe com a equipe antes de tentar comandos de força.

Crie uma branch descritiva; o prefixo padrão deste ambiente para novos trabalhos é `codex/`:

```powershell
git switch -c codex/atualiza-equipe
```

Faça a alteração e as verificações do capítulo 11. Revise o que mudou:

```powershell
git diff
git status
```

Selecione arquivos relacionados à tarefa, evitando adicionar tudo sem conferir:

```powershell
git add src/data/members.ts
git diff --staged
git commit -m "Atualiza integrantes da equipe NEA Mutiró"
git push -u origin codex/atualiza-equipe
```

Esses comandos são um exemplo para uma alteração real de equipe; nomes e arquivos devem corresponder à sua tarefa. Não incluem a publicação realizada por esta documentação.

No GitHub, abra um PR com o problema, o que mudou e o que foi verificado. Peça revisão da pessoa responsável. Mudanças em textos institucionais ou identificação de comunidades precisam de revisão editorial além da revisão técnica.

## Conflitos

Um conflito aparece quando duas versões alteram a mesma região e o Git não consegue escolher automaticamente. O arquivo pode conter `<<<<<<<`, `=======` e `>>>>>>>`. Compare os dois conteúdos, produza a versão correta, remova os marcadores e verifique a interface.

Não aceite automaticamente “todo o meu” ou “todo o deles”: isso pode eliminar mudanças válidas. Depois, siga a instrução do Git para concluir a operação que estava em andamento. Um conflito no lock deve preservar coerência com `package.json` e ser resolvido pelo processo de instalação adotado pela equipe.

## Hospedagem

O README original informa Vercel, a URL `https://nea-mutiro-site.vercel.app` e publicação automática a cada push na branch `main`. Essas informações são histórico do repositório; a configuração efetiva do projeto Vercel não é demonstrada pelos arquivos locais examinados.

### Atualização operacional de 9 de outubro de 2026

Repositório confirmado pela equipe: [Alexsander532/nea-mutiro-site](https://github.com/Alexsander532/nea-mutiro-site). A URL pública acima respondeu HTTP 200 com cabeçalho de servidor Vercel na consulta de 09/10/2026. Uma notificação da Vercel de 28/09/2026 identifica o projeto `nea-mutiro-site`, a equipe `alexsander532's projects` e a branch `main`. Não foi feita inspeção autenticada do painel; confirme acessos, último deploy válido e configurações atuais com o responsável.

Para consultar o projeto, use o [painel indicado pelas notificações](https://vercel.com/alexsander532s-projects/nea-mutiro-site). A notificação de 28/09 registra uma falha de build no commit `50fb326`; isso é histórico e não prova falha do deploy atual. Uma resposta 200 também não demonstra que a versão online corresponde ao último commit. Compare o commit em produção e o último deploy concluído no painel.

Não foi confirmado um domínio próprio adicional. Se a equipe registrar um domínio em outro provedor, ele pode apontar por DNS para a Vercel; isso não transfere a hospedagem da aplicação. Consulte os registros solicitados para o domínio no painel, sem copiar IPs genéricos de exemplos.

Antes de publicar, confira no painel responsável:

- Qual conta e projeto hospedam o site.
- Qual repositório está conectado.
- Qual branch é de produção.
- Qual versão de Node.js e comandos de instalação/build estão definidos.
- Quem tem permissão para publicar e administrar o domínio.

Se a integração estiver configurada dessa forma, alterações aceitas na branch de produção acionam a publicação. Outras branches ou PRs podem gerar previews conforme as configurações do serviço. Abra o preview e revise antes de incorporar à produção.

Não trate um `git push` para a produção como simples armazenamento se ele disparar deploy automático.

## Build e execução fora da Vercel

O projeto define `npm run build` e `npm run start`. Uma hospedagem compatível com o modo atual precisa instalar dependências, executar o build e servir a aplicação Next.js. Mantenha a versão de Node compatível com o framework.

Não há exportação estática configurada. Copiar somente `public` para um servidor não publica as páginas React. Não copie `.next` como se fosse uma pasta de HTML independente sem entender a execução de Next.js e a estratégia de imagens.

O código-fonte atual não exige credenciais de aplicação. Uma integração futura de contato pode acrescentar variáveis de ambiente; documente nomes e finalidade, sem registrar os valores secretos. Credenciais devem ser geridas pela equipe e configuradas na hospedagem.

## Depois da publicação

Confira a versão realmente publicada, navegue pelas páginas alteradas e faça uma checagem dos componentes compartilhados. Se houver falha, leia os logs e relacione o problema ao commit publicado.

Uma correção pode ser um novo commit ou uma reversão revisada. `git revert` cria um commit que desfaz outro, preservando o histórico; ele também pode afetar a publicação quando enviado à branch conectada. Não use `reset --hard` ou push forçado como receita padrão para recuperar o site.

## O que preservar para a próxima turma

| Informação | Onde manter |
| --- | --- |
| Como rodar o projeto | Este manual e README |
| Rotas, componentes e dados | Capítulos 04 a 09 e inventário |
| Limites conhecidos | Capítulos 10 e 11 |
| Mudanças solicitadas pela orientação | Registro de revisão e sistema de tarefas da equipe |
| Responsáveis e acessos | Canal institucional adequado, sem senhas no repositório |
| Decisões de implementação | PRs, commits e atualização deste manual |
| Origem/autorização de fotos | Registro institucional de acervo |
| Hospedagem, domínio e branch de produção | Registro da equipe, conferido no painel |

O README fala em código aberto e uso educacional, mas não foi encontrado arquivo `LICENSE` no repositório examinado. Não presuma que existe uma licença formal específica ou que fotos e logos tenham os mesmos direitos do código. A equipe deve definir e registrar as condições aplicáveis.

## Pendências já identificadas

- Implementar ou esclarecer o formulário de contato e a busca.
- Publicar conteúdos revisados de Ensino e Pesquisa.
- Decidir o destino dos detalhes dos projetos antigos e validar seus números/textos.
- Padronizar os papéis institucionais entre Quem somos, links e rodapé.
- Conferir a identificação da foto de quilombo vinda de `misturadas`.
- Revisar textos e paleta conforme `REVISAO-1-ORIENTADOR.md`.
- Avaliar centralização de listas duplicadas, acessibilidade e otimização de imagens.
- Documentar versão de Node, responsáveis de hospedagem e licença formal.

Essa lista registra oportunidades e limites encontrados, sem implementar ou priorizar novas funcionalidades por conta própria.

## Exercício de passagem de conhecimento

Um novo integrante deve conseguir instalar o projeto, explicar o caminho de um dado até a tela, corrigir um texto, atualizar uma foto e revisar o resultado em uma branch. Depois, deve conseguir explicar por que o formulário atual não envia mensagens e por que um território pode mudar na listagem sem mudar na home.

Se essas atividades dependerem de uma informação que só uma pessoa conhece, acrescente essa informação ao manual ou ao registro institucional adequado. A continuidade melhora quando o conhecimento necessário deixa de depender de uma única pessoa.
