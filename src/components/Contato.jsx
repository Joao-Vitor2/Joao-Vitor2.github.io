import { perfil } from "../data/conteudo.js";

export default function Contato() {
  return (
    <section className="secao" id="contato" aria-labelledby="titulo-contato">
      <div className="container contato">
        <h2 id="titulo-contato">Vamos conversar</h2>
        <p className="secao__intro">
          Aberto a oportunidades como AI Engineer. Moro em {perfil.localizacao}.
        </p>
        <div className="hero__acoes">
          <a className="botao botao--primario" href={`mailto:${perfil.email}`}>
            {perfil.email}
          </a>
          <a className="botao" href={perfil.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {perfil.githubs.map((g) => (
            <a key={g.conta} className="botao" href={g.url} target="_blank" rel="noreferrer">
              GitHub · {g.conta}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
