import { aprendizados } from "../data/conteudo.js";
import IconeSeta from "./IconeSeta.jsx";

export default function Aprendizados() {
  return (
    <section className="secao secao--alt" id="faculdade" aria-labelledby="titulo-faculdade">
      <div className="container">
        <h2 id="titulo-faculdade">O que aprendi na faculdade</h2>
        <p className="secao__intro">
          Cada matéria do curso de Ciência de Dados e IA virou um repositório público.
        </p>
        <div className="grade grade--4">
          {aprendizados.map((a) => (
            <article key={a.titulo} className="cartao aprendizado">
              <p className="projeto__tag">{a.area}</p>
              <h3>{a.titulo}</h3>
              <p>{a.texto}</p>
              <ul className="tags" aria-label="Tópicos">
                {a.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a className="link-seta" href={a.repo} target="_blank" rel="noreferrer">
                Ver repositório <IconeSeta />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
