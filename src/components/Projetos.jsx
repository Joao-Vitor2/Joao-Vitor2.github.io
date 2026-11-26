import { projetos } from "../data/conteudo.js";
import IconeSeta from "./IconeSeta.jsx";

function CartaoProjeto({ p }) {
  return (
    <article className="caso">
      <aside className="prova">
        <p className="prova__valor">{p.prova.valor}</p>
        <p className="prova__rotulo">{p.prova.rotulo}</p>
      </aside>

      <div className="caso__corpo">
        <header className="projeto__topo">
          <p className="projeto__tag">{p.tag}</p>
          <h3>{p.nome}</h3>
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

        {p.video && (
          <div className="projeto__video">
            <video
              controls
              preload="metadata"
              aria-label={`Demonstração do ${p.nome}`}
            >
              <source src={p.video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        )}

        <footer className="projeto__rodape">
          <p className="prova__origem">{p.prova.origem}</p>
          <div className="projeto__links">
            {p.site && (
              <a className="link-seta" href={p.site} target="_blank" rel="noreferrer">
                Ver sistema em produção <IconeSeta />
              </a>
            )}
            {p.privado && !p.repo ? (
              <p className="aviso-privado">
                Repositório privado na conta {p.conta}. Mostro o código e o sistema funcionando numa
                conversa.
              </p>
            ) : (
              !p.privado && (
                <a className="link-seta" href={p.repo} target="_blank" rel="noreferrer">
                  Ver código em {p.conta} <IconeSeta />
                </a>
              )
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}

export default function Projetos() {
  return (
    <section className="secao" id="projetos" aria-labelledby="titulo-projetos">
      <div className="container">
        <h2 id="titulo-projetos">Projetos em destaque</h2>
        <p className="secao__intro">
          Cada ficha abre com um fato que dá para conferir. Sem Patrão e Pizzaria Ávalos seguem em
          repositório privado. Datathon e DATAMOL têm código público.
        </p>
        <div className="casos">
          {projetos.map((p) => (
            <CartaoProjeto key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
