import Link from "next/link";
import { especialidades } from "@/data/especialidades";

export default function Especialidades() {
  return (
    <section id="especialidades" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
          Especialidades da Clínica APTO
        </h2>

        <p className="mt-4 max-w-3xl text-slate-600">
          Cada especialidade terá uma página própria otimizada para o Google,
          com conteúdo completo, FAQ e botão de agendamento.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map((item) => (
            <div
              key={item.slug}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-teal-700">
  {item.titulo}
</h3>

<p className="mt-3 text-slate-600">
  {item.descricaoSeo}
</p>

              <Link
                href={`/especialidades/${item.slug}`}
                className="mt-5 inline-block font-bold text-teal-700"
              >
                Saiba mais →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}