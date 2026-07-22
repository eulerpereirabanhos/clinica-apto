import Link from "next/link";

export default function DrEricPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-sky-800 via-sky-700 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-semibold text-cyan-200">
            Clínica APTO
          </span>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Dr. Eric Alves Rodrigues
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-sky-100">
            Conheça a trajetória profissional, a formação e a atuação do
            responsável pelos atendimentos da Clínica APTO.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
              Perfil profissional
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Atendimento humanizado e especializado
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              O trabalho é voltado para avaliação, prevenção, reabilitação e
              recuperação funcional, sempre com atendimento individualizado e
              foco na qualidade de vida do paciente.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Agende uma avaliação
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Entre em contato com a equipe da Clínica APTO e receba mais
              informações sobre os atendimentos disponíveis.
            </p>

            <a
              href="https://wa.me/5537999893736?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Clínica%20APTO."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="pb-16 text-center">
        <Link
          href="/"
          className="inline-flex rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          ← Voltar para a Home
        </Link>
      </div>
    </main>
  );
}