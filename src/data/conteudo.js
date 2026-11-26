// Todo o conteúdo do site fica aqui. Para atualizar o portfólio, edite só este arquivo.

export const perfil = {
  nome: "João Vitor Lucas Schmidt",
  titulo: "AI Engineer em formação",
  resumo:
    "Estudante de Ciência de Dados e IA e técnico em Desenvolvimento de Sistemas. Construo APIs em Python, pipelines de dados e aplicações completas, e já coloquei LLMs para trabalhar em projetos reais.",
  localizacao: "Palhoça, Santa Catarina, Brasil",
  email: "joaovitorlucasschmidt@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/jo%C3%A3o-vitor-lucas-schmidt-495319306/",
  githubPrincipal: {
    conta: "Joao-Vitor2",
    url: "https://github.com/Joao-Vitor2",
  },
  githubFaculdade: {
    conta: "Joojizitos65",
    url: "https://github.com/Joojizitos65",
  },
  githubs: [
    { conta: "Joao-Vitor2", url: "https://github.com/Joao-Vitor2" },
    { conta: "Joojizitos65", url: "https://github.com/Joojizitos65" },
  ],
};

export const conquistas = [
  {
    medalha: "1º lugar",
    titulo: "Datathon 2026",
    texto: "Análise do mercado de trabalho industrial de Santa Catarina.",
  },
  {
    medalha: "2º lugar",
    titulo: "Hackathon Intelbras",
    texto: "Agente de IA para atendimento. Ficamos a 0,1 ponto do primeiro lugar.",
  },
];

// `repo` com `privado: true` não gera link, porque o repositório não é público.
export const projetos = [
  {
    id: "sem-patrao",
    nome: "Sem Patrão",
    tag: "SaaS · Em desenvolvimento",
    conta: "Joao-Vitor2",
    privado: true,
    resumo:
      "CRM para autônomos e pequenos negócios de serviços. Reúne cadastro de clientes, agenda, ordens de serviço, tarefas e financeiro em uma plataforma multi-tenant.",
    destaques: [
      "Agenda que impede dois compromissos no mesmo horário, com regra no banco (PostgreSQL) e checagem na aplicação.",
      "Cada organização enxerga só os próprios dados, e as permissões podem ser limitadas por unidade.",
      "Login por cookie HttpOnly com proteção CSRF, auditoria de eventos e migrations com Alembic.",
    ],
    stack: ["FastAPI", "PostgreSQL", "Alembic", "Next.js", "TypeScript", "Docker"],
    prova: {
      valor: "HttpOnly",
      rotulo: "sessão em cookie, com CSRF",
      origem: "Lido no repositório crmAutonomos. O código continua privado.",
    },
  },
  {
    id: "pizzaria-avalos",
    nome: "Pizzaria Ávalos",
    tag: "Sistema web completo",
    conta: "Joao-Vitor2",
    privado: true,
    resumo:
      "Sistema de pedidos (balcão e delivery) e controle de caixa, feito a partir dos requisitos e da tabela de preços da pizzaria.",
    destaques: [
      "Preço por categoria e tamanho, com pizza fracionada: cada sabor paga a sua fração e o total é arredondado uma única vez.",
      "Taxa de entrega por bairro, congelada no pedido para não mudar o histórico.",
      "Acesso por PIN com hash, limite de tentativas, backup com pg_dump e mais de 90 testes automatizados.",
    ],
    stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "React", "Vite", "MUI", "Render + Neon"],
    prova: {
      valor: "90+",
      rotulo: "testes automatizados",
      origem: "Há 94 funções test_ no repositório. O site publica “mais de 90”. O código continua privado.",
    },
  },
  {
    id: "datathon",
    nome: "Datathon 2026",
    tag: "1º lugar · Equipe",
    conta: "Joojizitos65",
    repo: "https://github.com/Joojizitos65/datathon",
    resumo:
      "Raio-X do mercado de trabalho industrial de SC: quais regiões e setores enfrentam falta de mão de obra ou expansão acelerada, e como renda e escolaridade explicam isso.",
    destaques: [
      "Pipeline em Python sobre 413 MB do CAGED, cruzado com dados do IBGE para os 295 municípios catarinenses.",
      "Classifica cada microrregião e setor em expansão acelerada, sinal de apagão ou retração.",
      "Usa LLM para agrupar 354 ocupações (CBO) em macrofamílias, com regra própria de reserva.",
      "Painel interativo de 8 abas e roteiro de pitch de 3 minutos.",
    ],
    stack: ["Python", "pandas", "Streamlit", "Plotly", "LLM", "HTML/CSS/JS"],
    prova: {
      valor: "413 MB",
      rotulo: "do CAGED, em 295 municípios",
      origem: "Repositório público, em equipe. O link abaixo abre o código.",
    },
  },
  {
    id: "datamol",
    nome: "DATAMOL",
    tag: "Projeto Aplicado II · Uni Senai",
    conta: "Joojizitos65",
    repo: "https://github.com/Joojizitos65/projetoaplicado_cdia",
    resumo:
      "Ferramenta que identifica compostos de espectrometria de massas cruzando vários bancos de dados globais em um único fluxo.",
    destaques: [
      "Regras locais com expressões regulares evitam chamadas externas desnecessárias.",
      "Busca em paralelo com ThreadPoolExecutor para contornar a lentidão das consultas sequenciais.",
      "Classificador em árvore de decisão, API REST em Flask com PostgreSQL e dashboard web.",
    ],
    stack: ["Python", "Flask", "PostgreSQL", "RegEx", "Multithreading", "JavaScript"],
    prova: {
      valor: "Público",
      rotulo: "código no GitHub da faculdade",
      origem: "O repositório tem um commit e o README aponta outro autor. A ficha não diz que o trabalho foi só meu.",
    },
  },
];

// Matérias da faculdade, cada uma com um repositório que mostra a prática.
export const aprendizados = [
  {
    area: "Machine Learning",
    titulo: "Risco de crédito com Random Forest",
    texto:
      "Modelo para prever inadimplência em 2.000 clientes. Com balanceamento e limiar ajustado, o recall da classe de risco foi de 7,4% para 81,5%.",
    repo: "https://github.com/Joojizitos65/Modelos-de-Machine-Learning",
    tags: ["scikit-learn", "ROC-AUC", "Desbalanceamento"],
  },
  {
    area: "Computação em Nuvem",
    titulo: "Mini Radar ENEM em containers",
    texto:
      "Aplicação com Flask e FastAPI orquestrada com Docker Compose, health checks, teste de carga com Locust, runbook de operação e armazenamento com Postgres, MinIO e Redis.",
    repo: "https://github.com/Joojizitos65/computacao_nuvem",
    tags: ["Docker Compose", "Locust", "MinIO", "Redis"],
  },
  {
    area: "Estrutura de Dados",
    titulo: "BST vs AVL com Merge Sort",
    texto:
      "Trabalho em grupo: árvore binária de busca, árvore AVL e Merge Sort implementados do zero e testados com o histórico de partidas internacionais de futebol, com relatório de complexidade de cada função.",
    repo: "https://github.com/Joojizitos65/estrutura_de_dados",
    tags: ["Python", "AVL", "Complexidade"],
  },
  {
    area: "Engenharia de Dados",
    titulo: "Dashboard de inteligência eleitoral",
    texto:
      "ETL em Jupyter com dados abertos do TSE e dashboard com duas visões, uma para o eleitor e outra para o analista, seguindo boas práticas de visualização.",
    repo: "https://github.com/Joojizitos65/Estudo-de-Caso-Dashboard-Eleicoes",
    tags: ["pandas", "Chart.js", "TSE"],
  },
];

export const experiencias = [
  {
    cargo: "Aprendiz de Backend",
    empresa: "Intelbras",
    periodo: "02/2025 a 08/2025",
    itens: [
      "Automatizei em Python processos manuais repetitivos do time de backend, eliminando retrabalho.",
      "Desenvolvi validações automáticas de gravação contínua de câmeras de segurança — detectando falhas após interrupções técnicas sem intervenção humana.",
      "Produzi relatórios técnicos documentando metodologia, critérios e resultados dos testes.",
    ],
  },
  {
    cargo: "Estagiário de Testes de Software",
    empresa: "Educat",
    periodo: "06/2024 a 12/2024",
    itens: [
      "Mapeei falhas e inconsistências no sistema educacional da empresa, cobrindo fluxos críticos.",
      "Documentei casos de teste e evidências de bugs, acelerando a triagem pela equipe de desenvolvimento.",
    ],
  },
];

export const formacao = [
  {
    curso: "Ciência de Dados e IA",
    instituicao: "Uni Senai",
    periodo: "Em andamento · conclusão em 12/2028",
  },
  {
    curso: "Técnico em Desenvolvimento de Sistemas",
    instituicao: "Sesi Senai",
    periodo: "Concluído em 12/2024",
  },
];

export const idiomas = ["Inglês avançado (C1)", "Espanhol básico"];
