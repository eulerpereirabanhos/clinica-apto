import Link from "next/link";
import { notFound } from "next/navigation";
import { especialidades } from "../../../data/especialidades";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return especialidades.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const especialidade = especialidades.find((item) => item.slug === slug);

  return {
  title: especialidade
    ? `${especialidade.tituloSeo} | Clínica APTO`
    : "Especialidade | Clínica APTO",

  description:
    especialidade?.descricaoSeo ||
    "Conheça os atendimentos e especialidades da Clínica APTO.",
};
}


export default async function EspecialidadePage({ params }: PageProps) {
  const { slug } = await params;
  const especialidade = especialidades.find((item) => item.slug === slug);

  if (!especialidade) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 px-6 py-20">
        
        <div className="mx-auto max-w-6xl">
          <Link
  href="/"
  className="inline-flex items-center gap-2 rounded-full border-2 border-teal-600 bg-white px-6 py-3 font-bold text-teal-700 shadow-md transition hover:-translate-y-0.5 hover:bg-teal-50 hover:shadow-lg"
>
  <span aria-hidden="true">←</span>
  Voltar para a página inicial
</Link>
          

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-bold text-teal-700">
                Clínica APTO em Abaeté-MG
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                {especialidade.titulo} em Abaeté-MG
              </h1>

              <p className="mt-6 text-lg text-slate-600">
                {especialidade.descricaoSeo}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://wa.me/5500000000000"
                  className="rounded-full bg-teal-600 px-8 py-4 text-center font-bold text-white"
                >
                  Agendar pelo WhatsApp
                </Link>

                <Link
                  href="/contato"
                  className="rounded-full border border-teal-600 px-8 py-4 text-center font-bold text-teal-700"
                >
                  Ver localização
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6 shadow-xl">
              <div className="flex h-[360px] items-center justify-center rounded-2xl bg-gradient-to-br from-teal-200 to-blue-200 text-center font-bold text-teal-900">
                Imagem de {especialidade.titulo}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold">
          Como funciona o tratamento?
        </h2>

        <p className="mt-5 max-w-4xl text-slate-600">
          Na Clínica APTO, cada paciente passa por uma avaliação individual para
          entender sua dor, limitação, rotina e objetivo. Depois disso, a equipe
          define um plano personalizado, com acompanhamento profissional e foco
          na evolução do paciente.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-teal-700">1. Avaliação</h3>
            <p className="mt-3 text-slate-600">
              Entendimento do histórico, sintomas e necessidades do paciente.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-teal-700">
              2. Plano personalizado
            </h3>
            <p className="mt-3 text-slate-600">
              Definição do melhor tratamento para cada caso.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-teal-700">
              3. Acompanhamento
            </h3>
            <p className="mt-3 text-slate-600">
              Evolução acompanhada por profissionais qualificados.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold">
            Para quem esse tratamento é indicado?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Pessoas com dores recorrentes",
              "Pacientes em processo de reabilitação",
              "Quem busca melhorar postura e movimento",
              "Pacientes que precisam de acompanhamento especializado",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 shadow-sm">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold">Perguntas frequentes</h2>

        <div className="mt-8 space-y-4">
          {[
            "Como faço para agendar?",
            "Quanto tempo dura uma sessão?",
            "Preciso de encaminhamento médico?",
            "A clínica atende pacientes de outras cidades?",
          ].map((pergunta) => (
            <div key={pergunta} className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold text-slate-900">{pergunta}</h3>
              <p className="mt-2 text-slate-600">
                Entre em contato pelo WhatsApp para receber orientação da equipe
                e verificar a melhor opção para seu caso.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold">
            Quer agendar uma avaliação?
          </h2>

          <p className="mt-4 text-teal-50">
            Fale com a equipe da Clínica APTO e receba orientação para o seu
            caso.
          </p>

          <Link
            href="https://wa.me/5500000000000"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-teal-700"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}