import Image from "next/image";
import { Star } from "lucide-react";

const depoimentos = [
  {
    nome: "Maria Aparecida",
    cidade: "Abaeté - MG",
    foto: "/images/pacientes/paciente-1.jpg",
    texto:
      "Cheguei com muitas dores na coluna e hoje consigo fazer minhas atividades normalmente. Atendimento excelente!",
  },
  {
    nome: "Carlos Henrique",
    cidade: "Martinho Campos - MG",
    foto: "/images/pacientes/paciente-2.jpg",
    texto:
      "Profissionais extremamente atenciosos. Minha recuperação foi muito mais rápida do que eu imaginava.",
  },
  {
    nome: "Juliana Souza",
    cidade: "Pompéu - MG",
    foto: "/images/pacientes/paciente-3.jpg",
    texto:
      "A clínica transmite confiança desde a recepção até o atendimento. Recomendo para toda minha família.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-600 font-semibold">
            Depoimentos
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            O que nossos pacientes dizem
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            A satisfação dos nossos pacientes é nossa maior motivação.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {depoimentos.map((item) => (

            <div
              key={item.nome}
              className="rounded-3xl bg-slate-50 p-8 shadow hover:shadow-xl transition"
            >

              <div className="flex items-center gap-4">

                <Image
                  src={item.foto}
                  width={70}
                  height={70}
                  alt={item.nome}
                  className="rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-xl">
                    {item.nome}
                  </h3>

                  <p className="text-slate-500">
                    {item.cidade}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mt-6">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-slate-600">
                "{item.texto}"
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}