import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Clock,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Atendimento Humanizado",
    description:
      "Cada paciente recebe um plano de tratamento individualizado e acompanhamento completo.",
  },
  {
    icon: Stethoscope,
    title: "Profissionais Especializados",
    description:
      "Equipe qualificada e atualizada para oferecer o melhor tratamento fisioterapêutico.",
  },
  {
    icon: HeartHandshake,
    title: "Tecnologia e Cuidado",
    description:
      "Equipamentos modernos aliados ao cuidado humanizado para acelerar sua recuperação.",
  },
  {
    icon: Clock,
    title: "Agendamento Rápido",
    description:
      "Horários flexíveis e atendimento organizado para oferecer mais comodidade.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-600 font-semibold">
            Diferenciais
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Por que escolher a Clínica APTO?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Nossa missão é oferecer atendimento de excelência,
            tecnologia, acolhimento e resultados reais para nossos pacientes.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="flex gap-6 rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition"
              >

                <div className="w-16 h-16 rounded-xl bg-cyan-100 flex items-center justify-center">

                  <Icon
                    size={32}
                    className="text-cyan-600"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}