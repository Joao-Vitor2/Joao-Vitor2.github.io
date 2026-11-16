import { experiencias, formacao, idiomas } from "../data/conteudo.js";

export default function Trajetoria() {
  return (
    <section className="secao secao--alt" id="trajetoria" aria-labelledby="titulo-trajetoria">
      <div className="container">
        <h2 id="titulo-trajetoria">Trajetória</h2>

        <div className="trajetoria">
          <div>
            <h3 className="subtitulo">Experiência</h3>
            <ol className="linha-tempo">
              {experiencias.map((e) => (
                <li key={e.empresa} className="linha-tempo__item">
                  <p className="linha-tempo__periodo">{e.periodo}</p>
                  <h4>
                    {e.cargo} · {e.empresa}
                  </h4>
                  <ul className="lista">
                    {e.itens.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="subtitulo">Formação</h3>
            <ol className="linha-tempo">
              {formacao.map((f) => (
                <li key={f.curso} className="linha-tempo__item">
                  <p className="linha-tempo__periodo">{f.periodo}</p>
                  <h4>{f.curso}</h4>
                  <p>{f.instituicao}</p>
                </li>
              ))}
            </ol>

            <h3 className="subtitulo">Idiomas</h3>
            <ul className="tags" aria-label="Idiomas">
              {idiomas.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
