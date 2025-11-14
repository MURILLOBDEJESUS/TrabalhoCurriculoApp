# Currículo Interativo — Murilo Bandiera de Jesus

Este repositório contém a versão web do seu currículo interativo (página única), arquivos de suporte (imagens, PDF do currículo) e uma pasta para artigos.

## Visão geral
- Página principal: `indexAPP.html`
- Estilos: `styles.css`
- Scripts: `script.js`
- Pasta de imagens: `img/` (subpastas `site/` e `app/`)
- PDF do currículo: coloque como `MURILO_Curriculo.pdf` na mesma pasta do `indexAPP.html`
- Artigos: `artigos/`

## Como abrir localmente
No Windows (PowerShell), execute:
```powershell
Start-Process "c:\Users\Murilo\Pictures\Murilo\currículo\indexAPP.html"
```
Isso abrirá a página no navegador padrão.

## Estrutura de pastas (resumo)
- `indexAPP.html` — HTML principal da página
- `styles.css` — estilos do site
- `script.js` — interações (animações simples, verificação de PDF)
- `img/` — imagens do projeto
  - `img/site/` — imagens para a versão web (banner, avatar em tamanho maior)
  - `img/app/` — imagens otimizadas para app (tamanhos menores)
- `artigos/` — artigos e materiais (PDF ou Markdown)
- `MURILO_Curriculo.pdf` — (opcional) arquivo do currículo para embutir/baixar

## Instruções importantes
- Nomeie arquivos sem espaços e sem caracteres especiais. Use minúsculas quando possível. Exemplo: `avatar.jpg`, `banner-carro.jpg`, `meu-artigo.pdf`.
- Avatar recomendado: `img/site/avatar.jpg` (versão para web) e `img/app/avatar.jpg` (versão otimizada para app).
- PDF do currículo: renomeie seu arquivo para `MURILO_Curriculo.pdf` e coloque na mesma pasta de `indexAPP.html` para que o `iframe` mostre o documento e os botões de download funcionem corretamente.

## Como atualizar conteúdo do site
- Nome e contato (cartão lateral): edite a seção de contato em `indexAPP.html` (procure por `.contact-card`).
- Experiência, formação, certificações: edite as seções correspondentes em `indexAPP.html`.
- Projetos em destaque: edite a seção `#projetos` no `indexAPP.html` para adicionar/remover/alterar cards.
- Habilidades: cada habilidade tem uma `div.skill` com a barra (`.skill-fill`) e o rótulo percentual. Para alterar a porcentagem, ajuste o `style="width: XX%;"` da `.skill-fill` e o texto dentro do `span.skill-percent`.

Exemplo (editar em `indexAPP.html`):
```html
<div class="skill">
  <div class="skill-head">
    <p>Redes de Computadores</p>
    <span class="skill-percent">90%</span>
  </div>
  <div class="skill-bar"><div class="skill-fill" style="width: 90%;"></div></div>
</div>
```

## Adicionar artigos
- Coloque arquivos `md` ou `pdf` em `artigos/`.
- Sugestão de nome: `artigo-seguranca-redes.pdf` ou `meu-artigo.md`.
- Se quiser, posso gerar automaticamente uma página/listagem de artigos e converter `md` para HTML para exibição direta.

## Imagens e otimização
- Recomendo ter duas versões das imagens principais (uma para `img/site/` com maior resolução e outra otimizada para `img/app/`).
- Posso gerar versões `webp` e redimensionadas automaticamente se desejar.

## PDF do currículo e problemas de carregamento
- Alguns navegadores/hosts bloqueiam a visualização de PDFs locais por restrições de segurança. Se o `iframe` não exibir o PDF, verifique:
  - O nome do arquivo está exatamente como `MURILO_Curriculo.pdf` (sem espaços extras).
  - O arquivo está na mesma pasta que `indexAPP.html`.
  - Como alternativa, abra o PDF diretamente no navegador.

## Próximos passos que eu posso realizar
- Mover/renomear automaticamente arquivos do diretório pai para a estrutura `img/` ou renomear o PDF para `MURILO_Curriculo.pdf` (necessário que você tenha o arquivo dentro do workspace ou me autorize a acessá-lo aqui).
- Gerar página de listagem de artigos (`/artigos`) com links.
- Animar as porcentagens das barras de habilidade com JS.
- Otimizar imagens e gerar versões webp.

## Contato
Se quiser que eu faça qualquer uma das ações acima (renomear/mover arquivos, criar listagem de artigos, otimizar imagens), responda qual ação prefere e eu executo.

---
Arquivo gerado automaticamente em 2025-11-13.
