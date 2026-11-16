const links = [
  { href: "#projetos", texto: "Projetos" },
  { href: "#faculdade", texto: "Faculdade" },
  { href: "#github", texto: "GitHub" },
  { href: "#trajetoria", texto: "Trajetória" },
  { href: "#contato", texto: "Contato" },
];

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container cabecalho__interno">
        <a className="marca" href="#topo" aria-label="João Vitor, início da página">
          JV
        </a>
        <nav aria-label="Seções da página">
          <ul className="menu">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
