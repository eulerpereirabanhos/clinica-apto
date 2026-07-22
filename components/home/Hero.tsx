import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white shadow-md">
              <Image
                src="/logo-clinica-apto.png"
                alt="Logo da Clínica APTO"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
                Clínica APTO
              </p>

              <p className="text-sm font-medium text-slate-600">
                Fisioterapia e reabilitação
              </p>
            </div>
          </div>

          <span className="mt-8 inline-flex rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-700">
            +22 anos de experiência
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Clínica APTO
            <span className="mt-2 block text-teal-600">
              Fisioterapia em Abaeté-MG
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Atendimento humanizado, avaliação individual e tratamentos modernos
            para dor, reabilitação, postura, movimento e qualidade de vida.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-600 px-8 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Agendar pelo WhatsApp
            </Link>

            <a
              href="#especialidades"
              className="rounded-full border-2 border-teal-600 px-8 py-4 text-center font-bold text-teal-700 transition hover:bg-teal-50"
            >
              Ver especialidades
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            <span>✓ Atendimento humanizado</span>
            <span>✓ Avaliação individual</span>
            <span>✓ Tratamento personalizado</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-teal-200/60 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-200/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl">
            <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[430px]">
              <Image
                src="/images/clinica-apto-banner.jpg"
                alt="Clínica APTO de fisioterapia em Abaeté, Minas Gerais"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wider text-teal-200">
                  Clínica APTO
                </p>

                <p className="mt-1 text-xl font-bold">
                  Cuidado, movimento e qualidade de vida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}