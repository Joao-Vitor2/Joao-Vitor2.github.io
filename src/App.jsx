import { lazy, Suspense } from "react";
import Cabecalho from "./components/Cabecalho.jsx";
import Hero from "./components/Hero.jsx";
import Projetos from "./components/Projetos.jsx";
import Aprendizados from "./components/Aprendizados.jsx";
import Trajetoria from "./components/Trajetoria.jsx";
import Contato from "./components/Contato.jsx";

// O Recharts é a parte mais pesada do site, então o gráfico carrega separado.
const GraficoLinguagens = lazy(() => import("./components/GraficoLinguagens.jsx"));

export default function App() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo">
        <Hero />
        <Projetos />
        <Aprendizados />
        <Suspense fallback={<section className="secao" id="github" aria-busy="true" />}>
          <GraficoLinguagens />
        </Suspense>
        <Trajetoria />
        <Contato />
      </main>
      <footer className="rodape">
        <div className="container">
          <p>
            Feito com React, Vite e Recharts. Os números de repositórios vêm de um script em Python
            que consulta a API do GitHub, e o deploy é automático por GitHub Actions.
          </p>
        </div>
      </footer>
    </>
  );
}
