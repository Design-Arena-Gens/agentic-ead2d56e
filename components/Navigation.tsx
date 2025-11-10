import Link from "next/link";

const links = [
  { hash: "servicos", label: "Serviços" },
  { hash: "processo", label: "Processo" },
  { hash: "cases", label: "Cases" },
  { hash: "contato", label: "Contato" }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-neutral-950/70">
      <div className="section flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/15 ring-1 ring-primary-500/30">
            <span className="font-display text-xl text-primary-400">PC</span>
          </span>
          <div>
            <p className="font-display text-lg text-white">PulseCode Studio</p>
            <p className="text-xs text-white/50">Produtos digitais com inteligência contínua</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {links.map(({ hash, label }) => (
            <Link
              key={hash}
              href={{ pathname: "/", hash }}
              className="transition-colors hover:text-white focus-visible:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href={{ pathname: "/", hash: "contato" }}
          className="rounded-full border border-primary-400/60 bg-primary-500/10 px-5 py-2 text-sm font-semibold text-primary-100 transition hover:border-primary-300 hover:bg-primary-500/20 focus-visible:ring-2 focus-visible:ring-primary-400/80"
        >
          Agende um diagnóstico
        </Link>
      </div>
    </header>
  );
}
