import Link from "next/link";

const highlights = [
  { label: "Atualizações lançadas", value: "120+" },
  { label: "Satisfação clientes", value: "98%" },
  { label: "Tempo médio de entrega", value: "14 dias" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:64px_64px] opacity-40" />
      <div className="section relative flex flex-col gap-16 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Atualizações impulsionadas por IA
          </span>
          <h1 className="font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
            Evoluímos o seu produto digital com design premium e inteligência em tempo real.
          </h1>
          <p className="text-lg text-white/70 sm:text-xl">
            Unimos estratégia, UX/UI e automações para manter sua aplicação sempre alinhada aos
            objetivos de negócio. Iteramos rápido, medimos impacto e entregamos experiências memoráveis.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <Link
              href={{ pathname: "/", hash: "contato" }}
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200/80"
            >
              Começar agora
            </Link>
            <Link
              href={{ pathname: "/", hash: "servicos" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white hover:border-white/40 focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Ver entregas recentes
            </Link>
          </div>
        </div>
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-2xl border border-white/5 bg-neutral-950/50 p-5">
              <p className="text-sm text-white/50">{highlight.label}</p>
              <p className="mt-2 font-display text-3xl text-white">{highlight.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
