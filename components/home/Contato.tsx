"use client";

import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "5537999893736";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarParaWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const texto = `
Olá, Clínica APTO!

Gostaria de solicitar um atendimento.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}
Assunto: ${assunto}

Mensagem:
${mensagem}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            Entre em contato
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
            Marque uma consulta
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Preencha o formulário e fale diretamente com nossa equipe pelo
            WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={enviarParaWhatsApp}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nome"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nome
                </label>

                <input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  required
                  placeholder="Digite seu nome"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Digite seu e-mail"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Telefone
                </label>

                <input
                  id="telefone"
                  type="tel"
                  value={telefone}
                  onChange={(event) => setTelefone(event.target.value)}
                  required
                  placeholder="(37) 99999-9999"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Assunto
                </label>

                <input
                  id="assunto"
                  type="text"
                  value={assunto}
                  onChange={(event) => setAssunto(event.target.value)}
                  required
                  placeholder="Ex.: Agendamento"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Comentário ou mensagem
              </label>

              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
                required
                rows={6}
                placeholder="Escreva sua mensagem"
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 py-4 font-bold text-white transition hover:bg-cyan-800"
            >
              <Send size={20} />
              Enviar pelo WhatsApp
            </button>
          </form>

          <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Clínica APTO
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Precisa de ajuda?
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Nossa equipe está disponível para esclarecer dúvidas e ajudar no
              seu agendamento.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-700">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="font-semibold">Telefone</p>

                  <a
                    href="tel:+5537999893736"
                    className="mt-1 block text-slate-300 transition hover:text-white"
                  >
                    (37) 9 9989-3736
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-700">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-semibold">Nossa localização</p>

                  <p className="mt-1 text-slate-300">
                    Rua Frei Orlando, 83, Centro
                    <br />
                    Abaeté - MG
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-700">
                  <Clock size={22} />
                </div>

                <div>
                  <p className="font-semibold">Horário de atendimento</p>

                  <p className="mt-1 text-slate-300">
                    Segunda a sexta: 07h às 18h
                    <br />
                    Sábado: 07h às 12h
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Olá, Clínica APTO! Gostaria de agendar uma consulta."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={22} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}