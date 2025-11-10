const steps = [
  {
    title: "Imersão e diagnóstico",
    description:
      "Levantamos métricas, backlog e jornadas críticas. A IA sugere oportunidades com base no histórico do produto e benchmarks do setor.",
    deliverables: ["Mapa de oportunidades", "Briefing de design system", "Roadmap de hipóteses"]
  },
  {
    title: "Sprints de prototipação",
    description:
      "Wireframes clicáveis, refino visual e validações contínuas com usuários e stakeholders. Tudo documentado no repositório de componentes.",
    deliverables: ["Protótipos navegáveis", "Biblioteca de componentes", "Teste de usabilidade"]
  },
  {
    title: "Entrega e monitoramento",
    description:
      "Integração com seus pipelines, documentação técnica e dashboards com métricas reais para acompanhar a performance pós-lançamento.",
    deliverables: ["Release notes", "Squad enablement", "Dashboard de impacto"]
  }
];

export function ProcessTimeline() {
  return (
    <section id="processo" className="section py-20">
      <div className="mb-12 max-w-2xl space-y-4">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Um fluxo contínuo que mantém o seu produto sempre evoluindo.
        </h2>
        <p className="text-base text-white/70">
          Estruturamos squads com ritmos quinzenais, métricas definidas e feedbacks em tempo real. O
          objetivo é gerar tração constante, mantendo o time alinhado e focado no que realmente importa.
        </p>
      </div>
      <ol className="relative space-y-10 before:absolute before:inset-y-2 before:left-5 before:w-px before:bg-gradient-to-b before:from-primary-500/60 before:via-white/10 before:to-transparent md:before:left-8">
        {steps.map((step, index) => (
          <li key={step.title} className="relative pl-16 md:pl-24">
            <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-primary-300/60 bg-neutral-950 text-primary-100 shadow-card md:left-3">
              <span className="font-display text-lg">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
              <ul className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-white/60">
                {step.deliverables.map((item) => (
                  <li key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
