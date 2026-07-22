import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-sky-800 via-sky-700 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="font-semibold text-cyan-200">
            Conheça a Clínica APTO
          </span>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Cuidado, confiança e atendimento humanizado
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-sky-100">
            A Clínica APTO oferece atendimento especializado, acolhedor e
            personalizado, com foco na saúde, recuperação funcional e
            qualidade de vida de cada paciente.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="font-semibold text-cyan-600">Missão</span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Cuidar com excelência
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Promover saúde, bem-estar e recuperação por meio de um
                atendimento ético, individualizado e humanizado.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="font-semibold text-cyan-600">Visão</span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Ser referência em cuidado
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Ser reconhecida pela qualidade dos atendimentos, confiança dos
                pacientes e compromisso com resultados.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="font-semibold text-cyan-600">Valores</span>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Respeito e responsabilidade
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Ética, acolhimento, respeito, compromisso, profissionalismo e
                valorização de cada paciente.
              </p>
            </article>
          </div>

          <div className="mt-12 rounded-3xl bg-slate-100 p-8 md:p-12">
            <span className="font-semibold text-cyan-600">
              Atendimento personalizado
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Uma clínica preparada para cuidar de você
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              Cada paciente é atendido de forma individual, considerando suas
              necessidades, objetivos e condições de saúde. O planejamento do
              tratamento é realizado com atenção, responsabilidade e foco na
              evolução clínica.
            </p>

            <a
              href="https://wa.me/5537999893736?text=Olá,%20gostaria%20de%20conhecer%20melhor%20a%20Clínica%20APTO."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              ← Voltar para a Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}