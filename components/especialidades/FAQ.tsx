"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const perguntas = [
  {
    pergunta: "Preciso de encaminhamento médico para fazer fisioterapia?",
    resposta:
      "Na maioria dos casos, não é obrigatório. Porém, dependendo da condição do paciente, exames e orientações médicas podem ajudar na avaliação e no planejamento do tratamento.",
  },
  {
    pergunta: "Quantas sessões de fisioterapia serão necessárias?",
    resposta:
      "A quantidade de sessões varia conforme o diagnóstico, a evolução do paciente e os objetivos do tratamento. Após a avaliação inicial, o fisioterapeuta apresentará um plano personalizado.",
  },
  {
    pergunta: "A fisioterapia causa dor?",
    resposta:
      "Alguns exercícios podem gerar leve desconforto, principalmente no início do tratamento. A equipe acompanha cada etapa para garantir segurança e respeitar os limites do paciente.",
  },
  {
    pergunta: "Quais documentos devo levar na primeira consulta?",
    resposta:
      "Recomendamos levar documento de identificação, exames recentes, receitas médicas e relatórios relacionados ao problema que será avaliado.",
  },
  {
    pergunta: "A clínica atende crianças e idosos?",
    resposta:
      "Sim. A Clínica APTO oferece atendimento fisioterapêutico para crianças, adultos e idosos, com abordagens específicas para cada faixa etária.",
  },
  {
    pergunta: "Como funciona o agendamento?",
    resposta:
      "Você pode solicitar o agendamento pelo formulário do site ou diretamente pelo WhatsApp. Nossa equipe confirmará a data e o horário disponíveis.",
  },
];

export default function FAQ() {
  const [itemAberto, setItemAberto] = useState<number | null>(0);

  function alternarItem(index: number) {
    setItemAberto(itemAberto === index ? null : index);
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold text-cyan-600">
            Perguntas frequentes
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Tire suas principais dúvidas
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Confira respostas para as perguntas mais comuns sobre o atendimento
            fisioterapêutico.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {perguntas.map((item, index) => {
            const estaAberto = itemAberto === index;

            return (
              <article
                key={item.pergunta}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => alternarItem(index)}
                  aria-expanded={estaAberto}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3 font-bold text-slate-900">
                    <HelpCircle
                      size={22}
                      className="shrink-0 text-cyan-600"
                    />

                    {item.pergunta}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-cyan-600 transition-transform duration-300 ${
                      estaAberto ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    estaAberto
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-slate-600">
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}