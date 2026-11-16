import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import stats from "../data/github-stats.json";

const CORES = { "Joojizitos65": "#5eead4", "Joao-Vitor2": "#fbbf24" };

export default function GraficoLinguagens() {
  const { totais, linguagens, contas, atualizado_em } = stats;
  const dados = linguagens.map((l) => ({ ...l }));

  return (
    <section className="secao" id="github" aria-labelledby="titulo-github">
      <div className="container">
        <h2 id="titulo-github">GitHub em números</h2>
        <p className="secao__intro">
          {totais.repositorios} repositórios públicos nas duas contas, em {totais.linguagens}{" "}
          linguagens principais. Os projetos privados não entram na conta.
        </p>

        <div className="cartao grafico">
          <div className="grafico__area">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dados} layout="vertical" margin={{ left: 0, right: 8, top: 8, bottom: 8 }}>
                <CartesianGrid stroke="#243049" horizontal={false} />
                <XAxis type="number" allowDecimals={false} stroke="#94a3b8" />
                <YAxis type="category" dataKey="linguagem" stroke="#94a3b8" width={88} tick={{ fontSize: 13 }} />
                <Tooltip
                  cursor={{ fill: "rgba(148,163,184,0.12)" }}
                  contentStyle={{ background: "#0b1220", border: "1px solid #243049", borderRadius: 8, color: "#e2e8f0" }}
                />
                <Legend />
                {contas.map((c) => (
                  <Bar key={c} dataKey={c} name={c} stackId="a" fill={CORES[c]} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Alternativa em texto para leitores de tela */}
          <table className="sr-only">
            <caption>Repositórios por linguagem principal</caption>
            <thead>
              <tr>
                <th scope="col">Linguagem</th>
                {contas.map((c) => (
                  <th scope="col" key={c}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dados.map((l) => (
                <tr key={l.linguagem}>
                  <th scope="row">{l.linguagem}</th>
                  {contas.map((c) => (
                    <td key={c}>{l[c]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="grafico__nota">
            Dados gerados por <code>scripts/gerar_stats.py</code> a partir da API do GitHub. Última
            atualização: {atualizado_em}.
          </p>
        </div>
      </div>
    </section>
  );
}
