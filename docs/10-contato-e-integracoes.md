# 10 — Contato e integrações externas

[Índice](README.md) · [Anterior](09-guias-de-alteracao.md) · [Próximo](11-qualidade-e-problemas.md)

## O formulário não entrega mensagens

O comportamento atual de `src/app/contato/page.tsx` está concentrado neste trecho:

```tsx
const [submitted, setSubmitted] = useState(false);

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setSubmitted(true);
}
```

`preventDefault()` impede o envio padrão do formulário pelo navegador. `setSubmitted(true)` muda somente o estado da interface, substituindo os campos por uma confirmação.

Não há `FormData`, `fetch`, endpoint, serviço de e-mail, armazenamento em arquivo, banco de dados ou `localStorage`. Os valores não são lidos por essa função. “Mensagem registrada!” é um texto visual e não representa registro persistente. Ao recarregar a página, o formulário volta ao estado inicial.

Os campos `required` fazem o navegador exigir preenchimento, mas essa validação não comprova contato válido. O campo “E-mail ou telefone” não usa `type="email"`, pois é um input de texto livre. O botão correto para envio de formulário é `motion.button`, com `type="submit"`.

## Canais que são links

`mailto:` pede ao navegador/sistema que abra um aplicativo de e-mail. Não envia automaticamente uma mensagem; o visitante precisa concluir o envio no aplicativo. Se não houver aplicativo configurado, o clique pode não produzir a experiência esperada. O endereço exibido pode ser copiado manualmente.

Instagram e YouTube usam âncoras com destinos de `site.ts`. Abrir um canal não requer uma chave de API na aplicação. Não há feed, consulta de seguidores, player de vídeo ou sincronização automática de conteúdo.

## Mapa

`mapUrl` é uma URL do Google Maps com uma consulta pelo CEFET-MG, Campus Nova Suíça, Av. Amazonas, 5253, Belo Horizonte. O parâmetro `output=embed` permite apresentar o conteúdo dentro de um `iframe`.

O iframe tem `title`, `loading="lazy"` e altura fixa pela classe `h-64`. O carregamento depende do Google e da conexão do visitante. Bloqueadores, rede institucional ou indisponibilidade externa podem impedir sua exibição, mesmo se o restante da página funcionar.

Não há chave própria de Maps no código atual. Alterar `mapUrl` muda o mapa, mas não muda o nome do campus, que está escrito diretamente no JSX. Confira os dois ao mudar a localização.

## Instituições, colaboradores e produções

As integrações institucionais são links comuns. `target="_blank"` pede outra aba; `rel="noreferrer"` evita envio do cabeçalho de referência e acompanha o padrão utilizado nesses links.

O site não recebe dados de CEFET-MG, UEMG, Fiocruz, CNPq, SoFiA ou PET. Se um destino mudar, o cadastro precisa ser alterado. Os destinos informados na documentação são transcritos do código, sem afirmação de disponibilidade externa na data da leitura.

O Kaiporá está cadastrado com Instagram nos links atuais. O arquivo histórico de revisão cita também um artigo na revista da UEMG. São referências diferentes; uma não é automaticamente substituta da outra.

## Busca

O cabeçalho renderiza `Search` dentro de `motion.button` com rótulo “Buscar”, porém sem `onClick`, formulário ou navegação. A animação responde ao ponteiro, mas o clique não inicia pesquisa.

Para implementar busca, primeiro defina o escopo: títulos de territórios, projetos antigos, todas as páginas ou materiais externos. Pesquisar a lista local de territórios é diferente de pesquisar conteúdo hospedado em sites de terceiros.

## Como evoluir o contato para envio real

Esta é uma orientação de implementação futura, não uma integração existente:

1. Defina quem receberá as mensagens e quem cuidará do serviço.
2. Escolha uma rota de servidor ou serviço de formulário aprovado para receber os dados.
3. Leia os campos e envie-os ao endpoint escolhido.
4. Valide os dados no servidor, mesmo que o navegador já faça validação.
5. Acrescente limites contra abuso e evite aceitar campos inesperados.
6. Mostre estados de envio, erro e sucesso conforme a resposta real.
7. Use variáveis de ambiente para credenciais e mantenha-as no servidor.
8. Teste recebimento efetivo, indisponibilidade, campos inválidos e tentativas repetidas.
9. Documente responsável, destino dos dados, retenção e procedimento de manutenção.

Não coloque tokens de e-mail ou chaves secretas em `src/data`, JSX ou `public`. Uma variável exposta ao navegador deixa de ser segredo. `.gitignore` já ignora `.env*`, mas credenciais previamente versionadas exigem tratamento próprio; ignorar o arquivo depois não apaga o histórico.

Até uma implementação real, a equipe deve usar os canais efetivos de contato e considerar ajustar o texto da interface para explicar seu estado. A criação deste manual não modifica o comportamento do formulário.
