# Hélio Conde — primeira versão do portfólio

Esta é uma vitrine histórica da minha jornada no front-end. A apresentação de 2026 preserva a linguagem visual escura e tecnológica da primeira versão e liga para trabalhos mais recentes.

- **Portfólio atual:** https://helioconde.github.io/portfolio2.0/
- **Código original preservado:** [branch de arquivo](https://github.com/HelioConde/portfolio/tree/archive/portfolio-original-20261027)
- **Site estático:** https://helioconde.github.io/portfolio/

## Funcionalidades
Navegação acessível, layout responsivo, filtros interativos de projetos (Todos, Web, Jogos), links para repositórios e portfólio atual, movimento reduzido e imagens do repositório antigo.

## Rodar localmente
```bash
git clone https://github.com/HelioConde/portfolio.git
cd portfolio
python -m http.server 8000
```
Abra `http://localhost:8000/`. Não há backend, banco de dados, credenciais ou instalação de pacotes necessários para o site.

## QA automatizado
O workflow `.github/workflows/visual-qa.yml` instala o Playwright/Chromium em CI, valida cinco resoluções e salva screenshots e relatório. O GitHub Pages existente continua publicando pelo mecanismo previamente ativado da branch principal.

## Histórico e decisões
O código original completo permanece na branch de arquivo. Esta landing não representa um sistema novo nem substitui a evolução documentada em `portfolio2.0`.

A documentação de design está em [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md).

Desenvolvido por [Hélio Conde](https://github.com/HelioConde).
