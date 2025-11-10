const caseStudies = [
  {
    company: "AtlasPay",
    challenge: "Aplicativo financeiro complexo e pouco intuitivo.",
    solution:
      "Redesenhamos fluxos críticos, aplicamos heurísticas de UX e implementamos um design system modular conectado ao Figma Tokens.",
    result: "Conversão em onboarding aumentou 32% e o suporte reduziu tickets em 40%."
  },
  {
    company: "Horizon LMS",
    challenge: "Plataforma de aprendizagem com baixa aderência em mobile.",
    solution:
      "Criamos microinterações animadas, navegação mobile-first e métricas integradas para mapear evolução dos alunos.",
    result: "Tempo médio de sessão cresceu 2,4x e retenção subiu para 72%."
  },
  {
    company: "LoopFoods",
    challenge: "Expansão para novos mercados sem insights em tempo real.",
    solution:
      "Integramos dados de vendas, montamos dashboards e lançamos campanhas A/B automatizadas com apoio de IA.",
    result: "Novos produtos atingiram break-even 3 vezes mais rápido."
  }
];

export function CaseStudies() {
  return (
    <section id="cases" className="section py-20">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Cases que demonstram profundidade técnica e foco em resultado.
          </h2>
          <p className="text-base text-white/70">
            Atuamos como parceiros estratégicos, construindo experiências com alto padrão visual e
            performance comprovada em indicadores de produto.
          </p>
        </div>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-primary-300 hover:text-white"
        >
          Solicitar estudo sob demanda
        </a>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.company}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="space-y-4">
              <span className="font-display text-lg text-primary-200">{item.company}</span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Desafio</p>
                <p className="mt-1 text-sm text-white/70">{item.challenge}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Solução</p>
                <p className="mt-1 text-sm text-white/70">{item.solution}</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-primary-400/40 bg-primary-500/10 p-4 text-sm text-primary-100">
              {item.result}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
