"use client";

import { FormEvent, useState } from "react";
import {
  CalendarDays,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";

export default function AppointmentForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [especialidade, setEspecialidade] = useState("Fisioterapia");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [observacoes, setObservacoes] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const numeroWhatsApp = "5537999893736";

    const mensagem = `
Olá! Gostaria de solicitar um agendamento na Clínica APTO.

Nome: ${nome}
WhatsApp: ${telefone}
E-mail: ${email}
Especialidade: ${especialidade}
Data desejada: ${data}
Horário desejado: ${horario}

Observações:
${observacoes || "Nenhuma observação informada."}
    `.trim();

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-semibold text-cyan-600">
              Agendamento
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Agende sua avaliação de forma rápida
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Preencha seus dados e envie sua solicitação diretamente para o
              WhatsApp da Clínica APTO.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                  <MessageCircle className="text-cyan-600" size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Atendimento pelo WhatsApp
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Sua solicitação será enviada diretamente para nossa equipe.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                  <CalendarDays className="text-cyan-600" size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Escolha a melhor data
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Informe o dia e horário de sua preferência.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
                  <Clock className="text-cyan-600" size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Confirmação pela equipe
                  </h3>

                  <p className="mt-1 text-slate-600">
                    Nossa equipe confirmará a disponibilidade do atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <label
                  htmlFor="nome"
                  className="mb-2 block font-semibold text-slate-700"
                >
                  Nome completo
                </label>

                <div className="relative">
                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="mb-2 block font-semibold text-slate-700"
                >
                  WhatsApp
                </label>

                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="telefone"
                    type="tel"
                    value={telefone}
                    onChange={(event) => setTelefone(event.target.value)}
                    placeholder="(37) 99999-9999"
                    required
                    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-slate-700"
                >
                  E-mail
                </label>

                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="seuemail@email.com"
                    required
                    className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="especialidade"
                  className="mb-2 block font-semibold text-slate-700"
                >
                  Especialidade
                </label>

                <select
                  id="especialidade"
                  value={especialidade}
                  onChange={(event) => setEspecialidade(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                >
                  <option>Fisioterapia</option>
                  <option>Fisioterapia Ortopédica e Esportiva</option>
                  <option>Fisioterapia Neurológica</option>
                  <option>Fisioterapia Respiratória</option>
                  <option>Fisioterapia Pediátrica</option>
                  <option>Fisioterapia Geriátrica</option>
                  <option>Fisioterapia Dermato-Funcional</option>
                  <option>Reabilitação Vestibular</option>
                  <option>Reabilitação das DTMs</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="data"
                  className="mb-2 block font-semibold text-slate-700"
                >
                  Data desejada
                </label>

                <input
                  id="data"
                  type="date"
                  value={data}
                  onChange={(event) => setData(event.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="horario"
                  className="mb-2 block font-semibold text-slate-700"
                >
                  Horário
                </label>

                <select
                  id="horario"
                  value={horario}
                  onChange={(event) => setHorario(event.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value="">Selecione um horário</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="observacoes"
                  className="mb-2 block font-semibold text-slate-700"
                >
                  Observações
                </label>

                <textarea
                  id="observacoes"
                  value={observacoes}
                  onChange={(event) => setObservacoes(event.target.value)}
                  placeholder="Conte brevemente como podemos ajudar..."
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-4 font-bold text-white transition hover:bg-cyan-700"
            >
              <MessageCircle size={22} />
              Agendar pelo WhatsApp
            </button>

            <p className="mt-4 text-center text-sm text-slate-500">
              O envio da solicitação não confirma automaticamente o horário.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}