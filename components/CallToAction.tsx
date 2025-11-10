export function CallToAction() {
  return (
    <section id="contato" className="section py-20">
      <div className="relative overflow-hidden rounded-4xl border border-primary-500/40 bg-gradient-to-br from-primary-600/70 via-primary-500/50 to-primary-400/40 p-10 text-white shadow-glow">
        <div className="absolute -right-20 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full bg-white/15 blur-3xl sm:block" />
        <div className="relative max-w-2xl space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl">
            Vamos acelerar a próxima grande evolução do seu produto digital.
          </h2>
          <p className="text-base text-white/90">
            Preparamos um diagnóstico em 48 horas com oportunidades priorizadas, roadmap sugerido e
            estimativa de investimento. Tudo sem compromisso.
          </p>
          <form className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-white/80">
              Nome
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className="rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-white/80">
              Email corporativo
              <input
                type="email"
                name="email"
                placeholder="voce@empresa.com"
                className="rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-white/80 sm:col-span-2">
              Objetivo principal
              <textarea
                name="objective"
                rows={3}
                placeholder="Conte sobre os desafios atuais do seu produto..."
                className="rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </label>
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Receber diagnóstico gratuito
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
