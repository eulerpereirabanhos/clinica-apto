import Link from "next/link";
import {
  Award,
  Bone,
  CalendarDays,
  CheckCircle2,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

const qualifications = [
  {
    year: "2002",
    title: "Graduação em Fisioterapia",
    description: "Pontifícia Universidade Católica de Minas Gerais — PUC Minas.",
  },
  {
    year: "2004",
    title: "Pós-graduação",
    description:
      "Reabilitação dos Membros Superiores pela Faculdade Ciências Médicas de Minas Gerais.",
  },
  {
    year: "2004",
    title: "Fundação da Clínica APTO",
    description:
      "Sócio-fundador da clínica, com atuação voltada à fisioterapia e à reabilitação.",
  },
  {
    year: "2007",
    title: "Pilates Clínico",
    description: "Formação em Pilates Clínico pela D&D.",
  },
  {
    year: "2011",
    title: "Dominância Muscular",
    description:
      "Formação em Síndromes de Dominância Muscular pelo NEF, em Belo Horizonte.",
  },
  {
    year: "2014",
    title: "Treinamento Suspenso",
    description: "Formação em Treinamento Suspenso — TRX.",
  },
  {
    year: "2016",
    title: "Liberação Miofascial",
    description:
      "Formação em Liberação Miofascial manual e instrumental pelo Instituto Henriqueta Teixeira.",
  },
  {
    year: "2018",
    title: "Quiropraxia Clínica",
    description:
      "Formação pelo CTC, com técnicas de ajuste vertebral e Método Gonstead.",
  },
];

const specialties = [
  {
    icon: Stethoscope,
    title: "Avaliação Individualizada",
    description:
      "Cada atendimento começa com uma avaliação completa das necessidades do paciente.",
  },
  {
    icon: Bone,
    title: "Quiropraxia Clínica",
    description:
      "Técnicas manuais voltadas à mobilidade, ao equilíbrio e à funcionalidade corporal.",
  },
  {
    icon: Dumbbell,
    title: "Reabilitação Funcional",
    description:
      "Tratamentos personalizados para recuperação dos movimentos e retorno às atividades.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description:
      "Escuta, acolhimento e acompanhamento próximo durante todas as etapas do tratamento.",
  },
];

export default function DoctorSection() {
  const whatsappNumber = "5537999441222";

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma avaliação com o fisioterapeuta Eric Alvares Rodrigues."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="dr-eric"
      aria-labelledby="doctor-section-title"
      className="overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Imagem */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-cyan-100 blur-2xl" />
            <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl shadow-slate-200">
              <img
                src="/imagens/equipe/dr-eric.jpg"
                alt="Fisioterapeuta Eric Alvares Rodrigues, sócio-fundador da Clínica APTO"
                className="aspect-[4/5] h-full w-full object-cover"
              />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                <p className="text-sm font-medium text-cyan-700">
                  Sócio-fundador da Clínica APTO
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  Eric Alvares Rodrigues
                </p>

                <p className="text-sm text-slate-600">
                  Fisioterapeuta • CREFITO-4 nº 52260-F
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              <Award className="h-4 w-4" />
              Experiência, formação e cuidado
            </span>

            <h2
              id="doctor-section-title"
              className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Conheça o fisioterapeuta{" "}
              <span className="text-cyan-700">Eric Alvares Rodrigues</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Graduado em Fisioterapia pela PUC Minas em 2002, Eric Alvares
              Rodrigues construiu uma trajetória marcada pela formação
              contínua, experiência clínica e compromisso com a recuperação e
              a qualidade de vida dos pacientes.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Em 2004, tornou-se sócio-fundador da Clínica APTO. Também atuou
              como fisioterapeuta da Prefeitura Municipal de Abaeté entre 2002
              e 2011, ampliando sua experiência no atendimento de diferentes
              necessidades de reabilitação.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Mais de duas décadas de experiência",
                "Pós-graduado em reabilitação",
                "Formação em Pilates Clínico",
                "Formação em Quiropraxia Clínica",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#agendamento"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-200"
              >
                <CalendarDays className="h-5 w-5" />
                Agendar avaliação
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-100 focus:outline-none focus:ring-4 focus:ring-emerald-100"
              >
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Linha do tempo */}
        <div className="mt-20 rounded-[2rem] bg-slate-950 px-6 py-12 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <GraduationCap className="h-5 w-5" />
              Trajetória profissional
            </span>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Formação e evolução profissional
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Uma carreira construída por meio de experiência prática,
              atualização profissional e compromisso com a excelência no
              atendimento.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {qualifications.map((item, index) => (
              <article
                key={`${item.year}-${item.title}-${index}`}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-300">
                  {item.year}
                </span>

                <h4 className="mt-4 text-lg font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}