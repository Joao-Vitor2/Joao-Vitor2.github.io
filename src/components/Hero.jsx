import { perfil, conquistas } from "../data/conteudo.js";

export default function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="titulo-hero">
      <div className="container">
        <p className="hero__eyebrow">{perfil.titulo}</p>
        <h1 id="titulo-hero">{perfil.nome}</h1>
        <p className="hero__resumo">{perfil.resumo}</p>

        <div className="hero__acoes">
          <a className="botao botao--primario" href="#projetos">
            Ver projetos
          </a>
          <a className="botao" href={perfil.githubs[0].url} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="botao" href={perfil.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <ul className="conquistas" aria-label="Conquistas em competições">
          {conquistas.map((c) => (
            <li key={c.titulo} className="conquista">
              <span className="conquista__medalha">{c.medalha}</span>
              <strong>{c.titulo}</strong>
              <span className="conquista__texto">{c.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
