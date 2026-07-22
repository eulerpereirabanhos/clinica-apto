import Link from "next/link";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold text-cyan-600">
            Clínica APTO
          </span>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Entre em contato
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Fale com nossa equipe para tirar dúvidas ou agendar seu atendimento.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            Atendimento pelo WhatsApp
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Clique no botão abaixo para conversar diretamente com a Clínica
            APTO.
          </p>

          <a
            href="https://wa.me/5537999893736?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20atendimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            ← Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}