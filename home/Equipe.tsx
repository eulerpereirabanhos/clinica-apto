export default function Equipe() {
  const profissionais = [
    {
      nome: "Dr. João Silva",
      especialidade: "Fisioterapeuta Ortopédico",
      registro: "CREFITO 00000",
    },
    {
      nome: "Dra. Maria Oliveira",
      especialidade: "Pilates Clínico",
      registro: "CREFITO 00000",
    },
    {
      nome: "Dr. Carlos Souza",
      especialidade: "Quiropraxia",
      registro: "CREFITO 00000",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-cyan-600 font-semibold uppercase tracking-widest">
            Nossa Equipe
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Profissionais especializados
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Nossa equipe é formada por profissionais qualificados, preparados
            para oferecer um atendimento humanizado e tratamentos modernos para
            promover saúde e qualidade de vida.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profissionais.map((item) => (
            <div
              key={item.nome}
              className="rounded-3xl bg-white shadow-lg overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src="https://placehold.co/500x500"
                alt={item.nome}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.nome}
                </h3>

                <p className="mt-2 text-cyan-600 font-medium">
                  {item.especialidade}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {item.registro}
                </p>

                <button className="mt-6 w-full rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700">
                  Agendar Consulta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}