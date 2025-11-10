const testimonials = [
  {
    quote:
      "Conseguimos lançar uma área completa de analytics em 6 semanas, com visual impecável e métricas atreladas ao funil. A equipe virou fã do processo.",
    author: "Carolina Oliveira",
    role: "Head de Produto • SeloTech"
  },
  {
    quote:
      "A PulseCode nos ajudou a organizar backlog, melhorar UX e automatizar releases. Hoje temos previsibilidade real e NPS acima de 70.",
    author: "Marcos Silveira",
    role: "CTO • VivaSaúde"
  },
  {
    quote:
      "Os experimentos sugeridos pela IA reduziram o churn em 18%. Além disso, o design system tornou nossa plataforma muito mais consistente.",
    author: "Fernanda Reis",
    role: "CPO • Navega"
  },
  {
    quote:
      "Transformaram um produto complexo em uma experiência fluida e encantadora. O time entendeu nosso domínio e entregou além do esperado.",
    author: "Renato Lima",
    role: "CEO • Integree"
  }
];

export function TestimonialsMarquee() {
  return (
    <section className="py-20">
      <div className="section space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Clientes que confiam na evolução contínua.
          </h2>
          <p className="text-base text-white/70">
            Startups, scale-ups e squads internos que buscam eficiência, clareza e impacto mensurável.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="flex animate-marquee gap-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <figure
                key={`${testimonial.author}-${index}`}
                className="w-80 flex-shrink-0 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card"
              >
                <blockquote className="text-sm leading-relaxed text-white/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-xs text-white/60">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
