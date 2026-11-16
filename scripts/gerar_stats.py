#!/usr/bin/env python3
"""Gera src/data/github-stats.json a partir da API pública do GitHub.

Pipeline simples, no mesmo formato dos trabalhos de engenharia de dados:
  ingestão (API) -> limpeza (só repositórios próprios) -> agregação -> JSON.

Uso:
    python3 scripts/gerar_stats.py

Se existir a variável GITHUB_TOKEN, ela é usada para ter um limite de requisições maior.
Se a API falhar, o arquivo anterior é mantido e o script termina sem erro, para o build
do site nunca quebrar por causa de rede.
"""
from __future__ import annotations

import json
import os
import sys
import urllib.request
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

CONTAS = ["Joao-Vitor2", "Joojizitos65"]
DESTINO = Path(__file__).resolve().parent.parent / "src" / "data" / "github-stats.json"


def buscar_repos(conta: str) -> list[dict]:
    """Lê todos os repositórios públicos de uma conta (com paginação)."""
    repos: list[dict] = []
    pagina = 1
    while True:
        url = f"https://api.github.com/users/{conta}/repos?per_page=100&page={pagina}"
        req = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json"})
        token = os.environ.get("GITHUB_TOKEN")
        if token:
            req.add_header("Authorization", f"Bearer {token}")
        with urllib.request.urlopen(req, timeout=20) as resp:
            lote = json.load(resp)
        repos.extend(lote)
        if len(lote) < 100:
            return repos
        pagina += 1


def agregar() -> dict:
    por_conta: dict[str, dict] = {}
    linguagens: dict[str, Counter] = {}

    for conta in CONTAS:
        repos = [r for r in buscar_repos(conta) if not r["fork"]]
        # O repositório de perfil (README do perfil) não é um projeto.
        repos = [r for r in repos if r["name"].lower() != conta.lower()]
        contador = Counter(r["language"] for r in repos if r["language"])
        por_conta[conta] = {"repositorios": len(repos), "com_linguagem": sum(contador.values())}
        for ling, qtd in contador.items():
            linguagens.setdefault(ling, Counter())[conta] += qtd

    tabela = [
        {"linguagem": ling, **{c: cont.get(c, 0) for c in CONTAS}, "total": sum(cont.values())}
        for ling, cont in linguagens.items()
    ]
    tabela.sort(key=lambda linha: (-linha["total"], linha["linguagem"]))

    return {
        "atualizado_em": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "contas": CONTAS,
        "totais": {
            "repositorios": sum(c["repositorios"] for c in por_conta.values()),
            "por_conta": por_conta,
            "linguagens": len(tabela),
        },
        "linguagens": tabela,
    }


def main() -> int:
    try:
        dados = agregar()
    except Exception as erro:  # rede, limite de requisições, JSON inesperado
        print(f"Aviso: não foi possível atualizar as estatísticas ({erro}). Mantendo o arquivo atual.")
        return 0

    DESTINO.parent.mkdir(parents=True, exist_ok=True)
    DESTINO.write_text(json.dumps(dados, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"OK: {dados['totais']['repositorios']} repositórios, {dados['totais']['linguagens']} linguagens -> {DESTINO}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
