const links = [
  { label: "Manifesto", href: "#" },
  { label: "Newsletter", href: "#" },
  { label: "Política de privacidade", href: "#" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/80 py-10">
      <div className="section flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-white">PulseCode Studio</p>
          <p className="text-sm text-white/50">
            Design orientado a dados, automação inteligente e entregas contínuas.
          </p>
        </div>
        <ul className="flex flex-wrap gap-5 text-sm text-white/60">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} PulseCode Studio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
