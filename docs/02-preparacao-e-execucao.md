# 02 — Preparação e execução

[Índice](README.md) · [Anterior](01-visao-geral.md) · [Próximo](03-fundamentos-de-programacao.md)

## O que instalar e por quê

Você precisa de **Node.js**, que executa as ferramentas JavaScript; **npm**, normalmente instalado com Node.js; **Git**, para obter e versionar o projeto; um editor de texto/código; e um navegador. O editor permite trabalhar com a pasta inteira e indicar erros de TypeScript.

O pacote Next.js instalado no projeto declara `node >=20.9.0`. Isso é o mínimo técnico encontrado localmente, não uma orientação para usar uma versão antiga sem suporte. Combine com a equipe uma versão de Node.js que esteja mantida e seja compatível, e use a mesma versão no desenvolvimento e na hospedagem. Não há `.nvmrc` ou campo `engines` no `package.json` fixando uma versão para a equipe.

Confira no terminal:

```powershell
node --version
npm --version
git --version
```

Cada comando deve mostrar uma versão. Se aparecer “não reconhecido”, confira a instalação e abra um terminal novo. O terminal é uma área para enviar instruções ao computador; ele não é o arquivo onde você escreve a página.

## Obter o projeto

Em uma pasta onde você guarda projetos:

```powershell
git clone https://github.com/Alexsander532/nea-mutiro-site.git
cd nea-mutiro-site
```

`clone` cria uma cópia do repositório. `cd` muda a pasta atual. Se você já possui esta pasta, apenas abra-a no editor e use seu terminal integrado; não precisa clonar novamente.

No Windows, um caminho com espaços precisa ficar entre aspas:

```powershell
cd "C:\Users\Alexsander\Desktop\CEFET\PET Conectte\nea-mutiro-site"
```

Esse caminho é um exemplo do computador usado na documentação. No seu computador a pasta pode estar em outro lugar. A **raiz** é a pasta que contém `package.json`, `src` e `public`.

## Instalar as dependências

Para reproduzir o conjunto registrado no arquivo de versões:

```powershell
npm ci
```

`npm ci` usa `package-lock.json`, recria `node_modules` e falha se o lock não combinar com `package.json`. Preserve alterações manuais fora de `node_modules`, pois essa pasta é gerenciada pelo npm. Ela contém bibliotecas de terceiros e não deve ser editada ou enviada ao Git.

O README original usa `npm install`, que também instala dependências, mas pode atualizar o lock conforme a situação. Use `npm install` ao adicionar ou alterar uma dependência de forma deliberada e revise os dois arquivos de pacotes. Não use a instalação como tentativa de corrigir qualquer erro sem antes ler a mensagem.

## Abrir o site local

```powershell
npm run dev
```

Espere o terminal informar que o servidor está pronto. Abra [http://localhost:3000](http://localhost:3000). `localhost` é seu próprio computador; a porta `3000` identifica o servidor. Se a porta estiver ocupada, veja a URL efetivamente informada no terminal.

Deixe o terminal aberto. Edite um texto, salve o arquivo e volte ao navegador: o modo de desenvolvimento atualiza a página. Use `Ctrl+C` no terminal para encerrar o servidor.

## Os quatro comandos do projeto

| Comando | Quando usar | O que acontece |
| --- | --- | --- |
| `npm run dev` | Durante a edição | Inicia Next.js em desenvolvimento |
| `npm run lint` | Antes de compartilhar uma mudança | Executa ESLint |
| `npm run build` | Para validar a preparação de produção | Compila e gera a saída em `.next` |
| `npm run start` | Depois de um build bem-sucedido | Serve a versão preparada para produção |

`start` não substitui `dev` durante a edição: alterações posteriores precisam de outro build para aparecer na versão de produção.

Para uma conferência adicional de tipos:

```powershell
npx tsc --noEmit
```

Não existe um script `npm test` neste `package.json`. Consulte o capítulo 11 para a revisão manual das funcionalidades.

## Caso de uso completo

1. Abra a pasta do projeto.
2. Instale dependências com `npm ci`, se necessário.
3. Execute `npm run dev`.
4. Abra o navegador e confira a página inicial.
5. Faça uma alteração pequena e salve em UTF-8, preservando acentos.
6. Confira o resultado no computador e em uma largura de celular.
7. Em outro terminal na mesma raiz, rode `npm run lint`.
8. Encerre o servidor de desenvolvimento e rode `npm run build` para a conferência final.
9. Se necessário, rode `npm run start` e visite a versão de produção local.

## PowerShell e RTK

As instruções fornecidas para os agentes deste ambiente estão em `C:\Users\Alexsander\.codex\RTK.md` e pedem que comandos de shell do agente usem o prefixo `rtk`. RTK é uma ferramenta para reduzir a saída de comandos; não é uma dependência do site e não é necessário instalá-lo para um novo integrante executar os comandos deste manual.

Se o PowerShell bloquear `npm.ps1`, uma alternativa é executar `npm.cmd run dev` ou usar outro terminal já autorizado no computador. Evite mudar a política de execução de todo o sistema apenas para iniciar o projeto.
