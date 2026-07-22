export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Ana Paula",
      texto:
        "Excelente atendimento. Toda a equipe foi muito atenciosa e minha recuperação foi muito rápida.",
    },
    {
      nome: "Carlos Henrique",
      texto:
        "Ambiente moderno, profissionais competentes e tratamento que realmente trouxe resultados.",
    },
    {
      nome: "Mariana Souza",
      texto:
        "Recomendo a Clínica APTO. Atendimento humanizado e muita dedicação ao paciente.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-cyan-600 font-semibold uppercase tracking-widest">
            Depoimentos
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            O que nossos pacientes dizem
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-600">
            A confiança dos nossos pacientes é o nosso maior patrimônio.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((item) => (
            <div
              key={item.nome}
              className="rounded-3xl bg-slate-50 p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-4xl text-cyan-600">★★★★★</div>

              <p className="text-slate-600 leading-7">
                "{item.texto}"
              </p>

              <h3 className="mt-6 font-bold text-slate-900">
                {item.nome}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}