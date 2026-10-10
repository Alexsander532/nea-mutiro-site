# 11 — Qualidade, conferência e solução de problemas

[Índice](README.md) · [Anterior](10-contato-e-integracoes.md) · [Próximo](12-git-publicacao-e-continuidade.md)

## Três tipos de verificação

**Código:** lint, tipos e build encontram problemas que podem impedir execução ou indicar erros de implementação. **Interface:** visitar as telas revela recortes, espaçamento, navegação e comportamento. **Conteúdo:** equipe e representantes responsáveis validam nomes, fotos, papéis e informações institucionais.

Nenhuma dessas verificações substitui as outras. Um build aprovado pode conter um link errado, uma foto de outro território ou uma confirmação de formulário sem envio.

## Comandos

Na raiz, com dependências instaladas:

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

Leia a primeira mensagem de erro relevante, identifique o arquivo e a linha e corrija antes de repetir. Lint e checagem de tipos são verificações diferentes; não suponha que executar somente o build inclua todas as regras de lint.

O repositório não define uma suíte de testes automatizados própria. Não há confirmação de recebimento de contato por testar apenas o clique, pois o fluxo atual é visual.

## Roteiro manual para uma entrega

### Navegação

- Visite início, Quem somos, Territórios focais, Ações, Links úteis, Repositório e Contato.
- Abra os três detalhes de território e os quatro detalhes de projeto pela URL.
- Confira logo, item ativo, retorno, relacionados e links do rodapé.
- Abra o menu em tela pequena, navegue e confira seu fechamento.
- Visite `/pagina-inexistente`, `/territorios/inexistente` e `/projetos/inexistente`; confira a página 404.

### Interface

- Confira uma largura pequena, uma intermediária e uma larga; por exemplo 375, 768 e 1280 px.
- Procure rolagem horizontal, sobreposição e nomes extensos cortados.
- Role até o fim para acionar entradas, contadores e rodapé.
- Confira fotos, logos, legendas e recortes em cada largura.
- Use zoom do navegador e confirme que texto e controles continuam utilizáveis.

### Interações e dependências externas

- Teste cada link alterado e seu destino, incluindo redes e mapa.
- Confira o comportamento de `mailto:` ou copie o endereço para testar em um cliente de e-mail.
- Teste o formulário vazio e preenchido, lembrando que a confirmação não significa entrega.
- Registre que a busca não possui ação; não trate esse clique como busca funcional.
- Abra Console e Rede nas ferramentas do navegador para identificar exceções, imagens 404 ou falhas externas.

### Conteúdo e acessibilidade

- Revise nomes, acentos, funções, papéis institucionais e identificação dos territórios.
- Confira se os números de impacto têm origem e validação.
- Navegue com `Tab`, `Shift+Tab` e `Enter`, observando foco visível.
- Confira descrições alternativas de imagens, rótulos de campos e título do mapa.
- Não transmita uma informação importante apenas por cor ou movimento.

## Recursos de acessibilidade já presentes

Há idioma `pt-BR`, elementos como `main`, `nav`, `section`, `article` e `aside`, textos alternativos nas imagens, labels associados a campos, rótulos de ícones sociais e título de iframe. São recursos úteis, mas não constituem uma auditoria completa de acessibilidade.

Pontos para uma futura revisão incluem estado acessível do menu, foco de elementos em regiões visualmente fechadas, link de pular para o conteúdo, preferência de movimento reduzido, contraste e comportamento de conteúdos inicialmente invisíveis. A existência de tags semânticas não garante, por si só, conformidade integral.

## Diagnóstico de problemas frequentes

| Sintoma | Onde olhar | O que fazer |
| --- | --- | --- |
| `npm` ou `node` não reconhecido | Instalação e PATH | Conferir ferramenta e abrir terminal novo |
| `package.json` não encontrado | Pasta atual | Abrir terminal na raiz correta |
| Erro de versão de Node | Versão local e engine do Next | Usar versão compatível com a equipe/hospedagem |
| `npm ci` recusa o lock | `package.json` e lock | Verificar se foram alterados juntos; regenerar deliberadamente com npm |
| Porta em uso | Terminal do servidor | Ler a URL escolhida ou usar `npm run dev -- --port 3001` |
| Imagem não aparece | Caminho, extensão e aba Rede | Conferir arquivo, remover `/public` da URL e respeitar maiúsculas |
| Imagem com `fill` fica sem tamanho | Caixa envolvente | Definir posição relativa e altura/proporção |
| Foto corta o rosto ou elemento importante | `object-cover` e posição | Ajustar recorte/posição ou trocar enquadramento |
| Link dá 404 | Slug e caminho | Conferir cadastro, `href` e relacionados |
| Mudança de território não aparece no início | `focalTerritories` | Atualizar a lista local da home |
| Mudança de projeto não aparece em Ações | `projetos/page.tsx` | Lembrar que a página não consome `projects` |
| Papel de pessoa não aparece | JSX dos grupos | O campo `role` não é renderizado atualmente |
| Classe de cor não tem efeito | `@theme` e string de classes | Usar token existente e classe literal detectável |
| Erro ao exportar `metadata` | Diretiva `use client` | Mover metadados para layout/página de servidor |
| `start` reclama de build ausente | Saída `.next` | Executar um build bem-sucedido antes |
| Formulário confirma sem chegar e-mail | `handleSubmit` | Comportamento atual: envio não implementado |
| Mapa fica vazio | Rede/iframe/provedor | Testar conexão e URL do mapa |
| Acentos aparecem quebrados | Codificação e terminal | Salvar em UTF-8; distinguir exibição do terminal de arquivo corrompido |

## Erros de sintaxe e tipo

Uma vírgula ausente entre objetos ou uma tag sem fechamento pode provocar erros em linhas seguintes. Olhe também o trecho imediatamente anterior à linha apontada.

“Property ... is missing” normalmente indica campo obrigatório ausente. “Type ... is not assignable” indica valor incompatível; por exemplo `tagColor: "blue"` quando o tipo só admite três opções. Corrija os dados em vez de remover `strict` ou forçar `any` sem entender a causa.

Chaves React duplicadas podem surgir de nomes, títulos, caminhos ou primeiros trechos de parágrafos repetidos. Reveja a chave e a identidade real de cada item.

## Como investigar um problema novo

1. Anote a rota, tamanho de tela e ação que provoca o problema.
2. Veja Console, Rede e terminal.
3. Localize o componente e o cadastro utilizados por aquela tela.
4. Faça uma alteração pequena relacionada à causa.
5. Repita exatamente o cenário e confira páginas que compartilham o componente.
6. Registre o resultado e atualize este manual se houver novo comportamento.

Não edite `.next` ou `node_modules` para corrigir a aplicação. O problema deve ser resolvido no código/configuração versionado, ou por uma mudança deliberada de dependência.

## O que foi verificado nesta entrega de documentação

Os capítulos foram elaborados com leitura dos arquivos da aplicação, componentes, cadastros, configurações e histórico de revisão. A conferência desta entrega verificou 70 links locais entre capítulos, a cobertura dos 29 arquivos de `src` no inventário, 51 referências a imagens/logos no código e a sintaxe de 20 exemplos TypeScript/TSX. Também conferiu UTF-8, fechamento dos blocos de código e as quantidades dos grupos de equipe. Essas verificações passaram sem erros.

A análise dos exemplos foi de sintaxe, não uma checagem completa de tipos ou execução dos trechos. Os comandos de lint/build e a inspeção visual da aplicação não foram executados nesta entrega, que alterou somente documentação e o link do README. A conferência documental não comprova disponibilidade de destinos externos ou envio de formulário e não substitui essas verificações quando houver mudanças no site.
