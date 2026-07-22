"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const perguntas = [
  {
    pergunta: "Como faço para agendar uma consulta?",
    resposta:
      "Você pode agendar pelo WhatsApp, telefone ou diretamente em nossa recepção.",
  },
  {
    pergunta: "A clínica atende convênios?",
    resposta:
      "Sim. Trabalhamos com diversos convênios. Consulte nossa equipe para verificar a cobertura.",
  },
  {
    pergunta: "Quanto tempo dura uma sessão de fisioterapia?",
    resposta:
      "A duração pode variar conforme o tratamento, normalmente entre 45 e 60 minutos.",
  },
  {
    pergunta: "Onde a Clínica APTO está localizada?",
    resposta:
      "Estamos em Abaeté - MG, em uma estrutura moderna e preparada para receber nossos pacientes.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Perguntas Frequentes
          </h2>

          <p className="mt-4 text-slate-600">
            Tire suas principais dúvidas sobre nossos atendimentos.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {perguntas.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() =>
                  setAberta(aberta === index ? null : index)
                }
              >
                <span className="font-semibold text-slate-800">
                  {item.pergunta}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    aberta === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aberta === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}