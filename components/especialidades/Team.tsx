import Image from "next/image";
import { Calendar, BadgeCheck } from "lucide-react";

const profissionais = [
  {
    nome: "Dr. Rafael Martins",
    especialidade: "Fisioterapeuta Ortopédico e Esportivo",
    registro: "CREFITO 000000-F",
    descricao:
      "Especialista em reabilitação ortopédica, prevenção de lesões e recuperação funcional.",
    imagem: "/images/equipe/fisioterapeuta-1.jpg",
  },
  {
    nome: "Dra. Juliana Alves",
    especialidade: "Fisioterapeuta Neurológica",
    registro: "CREFITO 000001-F",
    descricao:
      "Atendimento especializado em reabilitação neurológica para adultos e idosos.",
    imagem: "/images/equipe/fisioterapeuta-2.jpg",
  },
  {
    nome: "Dra. Mariana Souza",
    especialidade: "Fisioterapeuta Pediátrica",
    registro: "CREFITO 000002-F",
    descricao:
      "Experiência no desenvolvimento motor infantil e atendimento fisioterapêutico humanizado.",
    imagem: "/images/equipe/fisioterapeuta-3.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold text-cyan-600">
            Equipe especializada
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Profissionais preparados para cuidar de você
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Nossa equipe reúne experiência, qualificação e atendimento
            humanizado para oferecer segurança em todas as etapas do tratamento.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profissionais.map((profissional) => (
            <article
              key={profissional.nome}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-80 w-full bg-slate-200">
                <Image
                  src={profissional.imagem}
                  alt={`Foto de ${profissional.nome}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {profissional.nome}
                </h3>

                <p className="mt-2 font-semibold text-cyan-600">
                  {profissional.especialidade}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <BadgeCheck size={18} className="text-cyan-600" />
                  <span>{profissional.registro}</span>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {profissional.descricao}
                </p>

                <a
                  href={`https://wa.me/5537999893736?text=${encodeURIComponent(
                    `Olá, gostaria de agendar uma avaliação com ${profissional.nome}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
                >
                  <Calendar size={20} />
                  Agendar avaliação
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}