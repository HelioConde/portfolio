# Design System — Portfólio histórico Hélio Conde

## Propósito e proteção da versão original
Este repositório é o **primeiro portfólio**, não substitui `portfolio2.0`. O código anterior ao redesign fica preservado integralmente na branch `archive/portfolio-original-20261027` e no histórico de commits. A apresentação inicial tinha fundo noturno, visual tecnológico, botões e elementos animados feitos com jQuery; a nova edição mantém o tom escuro e a marca pessoal, mas evita padrões inacessíveis.

## Taste Skill — tokens
Tokens em `css/arquivo-modern.css`:
- Cores: `--bg #080e20`, `--surface #101b32`, `--accent #90ccff`, `--mint #8af6d0`, `--muted #bdc9dd`, `--focus #ffe19d`.
- Espaçamento: `--space-1,2,3,4,6,8,12,16,20` de 4 a 80px.
- Raios: `--radius-sm 12px`, `--radius 20px`, `--radius-lg 32px`.
- Tipografia do sistema, headings em `clamp` e `text-wrap:balance`; não carregar fonts de terceiros.

## Web Design Guidelines
- Navegação com links e botões semânticos, foco visível e skip link para o conteúdo.
- Menu móvel com `aria-expanded`, fechamento por Escape e ao escolher seção.
- Filtros de projetos com `aria-pressed`, estados vazios por `hidden` e resultados em `role=status`.
- Links externos usam `target="_blank" rel="noopener noreferrer"`.
- `prefers-reduced-motion` suprime transições e rolagem suave.
- Toque: controle mobile/filtros com alvo mínimo de 44px.

## Awesome Design / Image to Code
Referências auditadas: `index.html` legado, `css/style.css`, `css/mobile.css`, `img/helioConde.png`, `icon/logo.png`. Direção: navy escuro e acentos azuis, cartões e grid responsivo, imagens existentes sem fingir que foram geradas por IA. Seções históricas explicitamente diferenciadas do portfólio novo.

## Sem banco de dados e privacidade
A versão publicada é uma página estática, sem login, banco, API, formulários de contato ou armazenamento de informações de visitantes. Metadados antigos de telefone, endereço e coordenadas não foram republicados no novo `index.html`; os originais permanecem no Git e exigem revisão histórica se a intenção for remoção total.

## Playwright CLI e CI
`.github/workflows/visual-qa.yml` executa testes sintáticos e smoke no navegador Chromium com 5 viewports (320/390/768/1366/1600 px). Cobertura: navegação e menu mobile, Escape, filtros Todos/Web/Jogos, estado aria-pressed, ausência de overflow e erros, caminhos de imagem; screenshots de página inteira. Não interfere no publicador Pages da branch principal, já configurado no repositório.
