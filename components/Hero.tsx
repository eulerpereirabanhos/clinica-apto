import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            +22 anos de experiência
          </span>

          <h2 className="mt-6 text-4xl font-extrabold md:text-6xl">
            Clínica de Fisioterapia em Abaeté-MG
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Atendimento humanizado, equipe multidisciplinar e tratamentos
            modernos para dor, reabilitação, postura e qualidade de vida.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://wa.me/5500000000000"
              className="rounded-full bg-teal-600 px-8 py-4 text-center font-bold text-white"
            >
              Agendar pelo WhatsApp
            </Link>

            <a
              href="#especialidades"
              className="rounded-full border border-teal-600 px-8 py-4 text-center font-bold text-teal-700"
            >
              Ver Especialidades
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-200 p-6 shadow-xl">
          <div className="flex h-[420px] items-center justify-center rounded-2xl bg-gradient-to-br from-teal-200 to-blue-200 text-center font-bold text-teal-900">
            Imagem da clínica
          </div>
        </div>
      </div>
    </section>
  );
}