import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="font-semibold text-cyan-600">
          Conteúdos da Clínica APTO
        </span>

        <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
          Blog
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Em breve, você encontrará conteúdos sobre saúde, fisioterapia,
          prevenção, qualidade de vida e bem-estar.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
        >
          ← Voltar para a Home
        </Link>
      </div>
    </main>
  );
}