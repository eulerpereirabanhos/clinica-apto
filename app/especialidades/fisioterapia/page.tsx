import Link from "next/link";
import { encontrarEspecialidadePorSlug } from "@/data/especialidades";
import { notFound } from "next/navigation";

export default function FisioterapiaPage() {
  const especialidade = encontrarEspecialidadePorSlug("fisioterapia");

  if (!especialidade) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-800 via-sky-700 to-cyan-600 py-20 text-white">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="mb-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-sky-800 transition hover:bg-sky-50"
          >
            ← Voltar para a Home
          </Link>

          <span className="block font-semibold text-cyan-200">
            {especialidade.hero.destaque}
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            {especialidade.hero.titulo}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-sky-100 md:text-xl">
            {especialidade.hero.descricao}
          </p>

          <a
            href="https://wa.me/5537999893736?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20de%20fisioterapia."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-6">
          <span className="font-semibold text-cyan-600">
            Atendimento especializado
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            {especialidade.apresentacao.titulo}
          </h2>

          <div className="mt-8">
            {especialidade.apresentacao.paragrafos.map((texto, index) => (
              <p
                key={`${texto.slice(0, 20)}-${index}`}
                className="mb-5 text-lg leading-8 text-slate-600"
              >
                {texto}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-cyan-600">
              Tratamentos personalizados
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Áreas de atuação da Fisioterapia
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Conheça os principais atendimentos oferecidos pela Clínica APTO.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {especialidade.areasAtuacao.map((area, index) => (
              <article
                key={`${area.titulo}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl font-bold text-cyan-700">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {area.titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {area.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}