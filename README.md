# Portfólio · João Vitor Lucas Schmidt

Site estático em React + Vite + Recharts, publicado no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera a pasta dist/
```

## Atualizar o conteúdo

Todo o texto fica em `src/data/conteudo.js`: perfil, projetos, matérias da faculdade, experiência e formação.
Um projeto com `privado: true` aparece sem link para o código.

## Estatísticas do GitHub

`scripts/gerar_stats.py` consulta a API pública do GitHub das duas contas e grava `src/data/github-stats.json`,
que alimenta o gráfico de linguagens. Se a API falhar, o arquivo anterior é mantido.

```bash
npm run stats
```

## Publicar no GitHub Pages

1. Crie um repositório chamado `<conta>.github.io` (site de usuário) ou qualquer nome (site de projeto).
2. Envie estes arquivos para a branch `main`.
3. Em **Settings → Pages**, escolha **Source: GitHub Actions**.
4. O workflow `.github/workflows/deploy.yml` faz o build e publica a cada push, e toda segunda-feira
   atualiza os números do GitHub.

Para um repositório de projeto (`https://<conta>.github.io/<repo>/`), defina `VITE_BASE=/<repo>/` no passo de build.
