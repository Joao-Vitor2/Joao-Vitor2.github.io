// Seta em SVG: não depende de a fonte do aparelho ter o caractere "→".
export default function IconeSeta() {
  return (
    <svg
      className="icone-seta"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
