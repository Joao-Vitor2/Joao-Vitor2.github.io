import { projetos } from "../data/conteudo.js";
import IconeSeta from "./IconeSeta.jsx";

function CartaoProjeto({ p }) {
  return (
    <article className="cartao projeto">
      <header className="projeto__topo">
        <p className="projeto__tag">{p.tag}</p>
        <h3>{p.nome}</h3>
        <p className="projeto__conta">GitHub: {p.conta}</p>
      </header>

      <p>{p.resumo}</p>

      <ul className="lista">
        {p.destaques.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <ul className="tags" aria-label="Tecnologias usadas">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <footer className="projeto__rodape">
        {p.privado ? (
          <p className="aviso-privado">
            Repositório privado. Posso mostrar o código e o funcionamento em uma conversa.
          </p>
        ) : (
          <a className="link-seta" href={p.repo} target="_blank" rel="noreferrer">
            Ver código no GitHub <IconeSeta />
          </a>
        )}
      </footer>
    </article>
  );
}

export default function Projetos() {
  return (
    <section className="secao" id="projetos" aria-labelledby="titulo-projetos">
      <div className="container">
        <h2 id="titulo-projetos">Projetos em destaque</h2>
        <p className="secao__intro">
          Dois sistemas completos com backend, banco e frontend, e dois projetos de dados feitos na
          faculdade.
        </p>
        <div className="grade grade--2">
          {projetos.map((p) => (
            <CartaoProjeto key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
