import { clsx } from "clsx";
import { IconBolt, IconBrush, IconChartArrowsVertical, IconSparkles } from "./icons";

const features = [
  {
    title: "Design com propósito",
    description:
      "Sprints curtos de UX/UI com testes rápidos e entregas navegáveis. Estilos consistentes, animações suaves e componentes acessíveis.",
    icon: IconBrush,
    accent: "from-primary-500/30 via-primary-400/10 to-transparent"
  },
  {
    title: "Automação inteligente",
    description:
      "Integração com pipelines de dados e modelos de IA para monitorar comportamento em produção, gerar hipóteses e priorizar melhorias.",
    icon: IconSparkles,
    accent: "from-primary-400/25 via-primary-300/10 to-transparent"
  },
  {
    title: "Evolução contínua",
    description:
      "Roadmaps dinâmicos, métricas acionáveis e rituais de descoberta. Nada de grandes lançamentos trimestrais, apenas entregas constantes.",
    icon: IconBolt,
    accent: "from-white/20 via-white/10 to-transparent"
  },
  {
    title: "Resultados mensuráveis",
    description:
      "Dashboards ao vivo e relatórios semanais de impacto. Acompanhamos conversão, NPS e métricas de produto com ciclos fechados.",
    icon: IconChartArrowsVertical,
    accent: "from-primary-500/20 via-primary-500/5 to-transparent"
  }
];

export function FeatureGrid() {
  return (
    <section id="servicos" className="section py-20">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="max-w-md space-y-4">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            A combinação ideal entre estratégia, design e engenharia.
          </h2>
          <p className="text-base text-white/70">
            Cada squad da PulseCode é montada sob medida para o estágio do seu produto. Entregamos
            sessões de co-criação, protótipos navegáveis, componentes reutilizáveis e integrações prontas
            para produção.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
          {features.map(({ icon: Icon, accent, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-primary-400/60 hover:bg-white/[0.06]"
            >
              <div
                className={clsx(
                  "pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100",
                  "bg-gradient-to-br",
                  accent
                )}
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-6 font-display text-2xl text-white">{title}</h3>
              <p className="relative mt-3 text-sm text-white/70">{description}</p>
              <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-200">
                Detalhes do serviço
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                >
                  <path d="M5 12h14" strokeLinecap="round" />
                  <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
