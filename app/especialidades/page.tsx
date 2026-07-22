import Link from "next/link";

export default function EspecialidadesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold text-cyan-600">
            Clínica APTO
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Nossas especialidades
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Conheça os atendimentos oferecidos pela Clínica APTO e encontre o
            tratamento mais adequado para suas necessidades.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
              Atendimento especializado
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Fisioterapia
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Tratamentos personalizados para prevenção, recuperação,
              reabilitação e melhoria da qualidade de vida.
            </p>

            <Link
              href="/especialidades/fisioterapia"
              className="mt-6 inline-flex rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
              Conhecer a Fisioterapia
            </Link>
          </article>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            ← Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}