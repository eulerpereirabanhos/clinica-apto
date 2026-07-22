export default function Sobre() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
            Sobre a Clínica APTO
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Cuidado humanizado para todas as fases da vida
          </h2>

          <p className="mt-6 leading-7 text-slate-600">
            A Clínica APTO oferece atendimento profissional, acolhedor e
            personalizado. Nossa missão é promover saúde, qualidade de vida e
            bem-estar por meio de uma equipe qualificada e de tratamentos
            planejados para cada paciente.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Trabalhamos com responsabilidade, ética e atenção individualizada,
            proporcionando segurança e confiança durante todo o atendimento.
          </p>
        </div>

        <div className="rounded-3xl bg-cyan-50 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Nossos diferenciais
          </h3>

          <div className="mt-6 space-y-4 text-slate-700">
            <p>✓ Atendimento humanizado</p>
            <p>✓ Profissionais qualificados</p>
            <p>✓ Ambiente moderno e acolhedor</p>
            <p>✓ Tratamentos personalizados</p>
          </div>
        </div>
      </div>
    </section>
  );
}