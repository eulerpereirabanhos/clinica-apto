"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BriefcaseMedical,
  CalendarDays,
  CalendarRange,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  Edit3,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import type { Professional } from "./professionals-data";
import ProfessionalStatusBadge from "./ProfessionalStatusBadge";

type ProfessionalDetailsProps = {
  professional: Professional;
};

type TodayAppointment = {
  id: number;
  time: string;
  patient: string;
  specialty: string;
  status:
    | "Confirmada"
    | "Agendada"
    | "Em atendimento"
    | "Finalizada";
};

const appointmentStatusClasses: Record<
  TodayAppointment["status"],
  string
> = {
  Agendada:
    "border-cyan-200 bg-cyan-50 text-cyan-700",
  Confirmada:
    "border-blue-200 bg-blue-50 text-blue-700",
  "Em atendimento":
    "border-amber-200 bg-amber-50 text-amber-700",
  Finalizada:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
};

const appointmentsByProfessional: Record<
  number,
  TodayAppointment[]
> = {
  1: [
    {
      id: 1,
      time: "08:00",
      patient: "João da Silva",
      specialty: "Fisioterapia Ortopédica",
      status: "Finalizada",
    },
    {
      id: 2,
      time: "09:00",
      patient: "Maria Aparecida",
      specialty: "Fisioterapia Ortopédica",
      status: "Em atendimento",
    },
    {
      id: 3,
      time: "10:00",
      patient: "Carlos Henrique",
      specialty: "Fisioterapia Esportiva",
      status: "Confirmada",
    },
    {
      id: 4,
      time: "14:00",
      patient: "Ana Paula Ferreira",
      specialty: "Fisioterapia Ortopédica",
      status: "Agendada",
    },
    {
      id: 5,
      time: "16:00",
      patient: "Pedro Gomes",
      specialty: "Fisioterapia Esportiva",
      status: "Confirmada",
    },
  ],
  2: [
    {
      id: 6,
      time: "08:30",
      patient: "Luciana Mendes",
      specialty: "Fisioterapia Pediátrica",
      status: "Finalizada",
    },
    {
      id: 7,
      time: "10:30",
      patient: "Fernanda Rocha",
      specialty: "Fisioterapia Pediátrica",
      status: "Confirmada",
    },
    {
      id: 8,
      time: "14:30",
      patient: "Gabriel Santos",
      specialty: "Fisioterapia Pediátrica",
      status: "Agendada",
    },
    {
      id: 9,
      time: "16:30",
      patient: "Mariana Alves",
      specialty: "Fisioterapia Pediátrica",
      status: "Agendada",
    },
  ],
  3: [
    {
      id: 10,
      time: "09:00",
      patient: "José Carlos",
      specialty: "Fisioterapia Respiratória",
      status: "Finalizada",
    },
    {
      id: 11,
      time: "11:00",
      patient: "Antônio Pereira",
      specialty: "Fisioterapia Respiratória",
      status: "Confirmada",
    },
    {
      id: 12,
      time: "15:00",
      patient: "Helena Souza",
      specialty: "Fisioterapia Respiratória",
      status: "Agendada",
    },
  ],
};

function createWhatsAppLink(phone: string, name: string) {
  const cleanPhone = phone.replace(/\D/g, "");

  const message = encodeURIComponent(
    `Olá, ${name}. Estou entrando em contato pela Clínica APTO.`
  );

  return `https://wa.me/55${cleanPhone}?text=${message}`;
}

export default function ProfessionalDetails({
  professional,
}: ProfessionalDetailsProps) {
  const [copiedMessage, setCopiedMessage] =
    useState("");

  const todayAppointments =
    appointmentsByProfessional[professional.id] ?? [];

  const completedAppointments =
    todayAppointments.filter(
      (appointment) =>
        appointment.status === "Finalizada"
    ).length;

  const pendingAppointments =
    todayAppointments.filter(
      (appointment) =>
        appointment.status !== "Finalizada"
    ).length;

  async function copyContact(
    value: string,
    type: string
  ) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedMessage(`${type} copiado com sucesso.`);

      window.setTimeout(() => {
        setCopiedMessage("");
      }, 2500);
    } catch {
      setCopiedMessage(
        `Não foi possível copiar o ${type.toLowerCase()}.`
      );
    }
  }

  const details = [
    {
      label: "Especialidade",
      value: professional.specialty,
      icon: Stethoscope,
    },
    {
      label: "Registro profissional",
      value: `${professional.registrationType} ${professional.registrationNumber}`,
      icon: BriefcaseMedical,
    },
    {
      label: "Telefone",
      value: professional.phone,
      icon: Phone,
    },
    {
      label: "E-mail",
      value: professional.email,
      icon: Mail,
    },
    {
      label: "Horário de entrada",
      value:
        professional.startTime ||
        "Não informado",
      icon: Clock3,
    },
    {
      label: "Horário de saída",
      value:
        professional.endTime ||
        "Não informado",
      icon: Clock3,
    },
  ];

  return (
    <div className="space-y-6">
      {copiedMessage && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          {copiedMessage}
        </div>
      )}

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-5 border-b border-slate-200 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-cyan-50 text-xl font-bold text-cyan-700">
              {professional.initials}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">
                  {professional.name}
                </h2>

                <ProfessionalStatusBadge
                  status={professional.status}
                />
              </div>

              <p className="mt-2 font-semibold text-cyan-700">
                {professional.specialty}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Profissional #{professional.id}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/dashboard/agenda?professional=${encodeURIComponent(
                professional.name
              )}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              <CalendarDays className="h-4 w-4" />
              Ver agenda
            </Link>

            <Link
              href={`/dashboard/profissionais/${professional.id}/editar`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800"
            >
              <Edit3 className="h-4 w-4" />
              Editar profissional
            </Link>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <article
                key={detail.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Icon className="h-4 w-4 text-cyan-700" />
                  {detail.label}
                </div>

                <p className="mt-3 break-words text-sm font-bold text-slate-950">
                  {detail.value}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Consultas hoje
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-950">
                {todayAppointments.length}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Atendimentos programados
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
              <CalendarDays className="h-5 w-5" />
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Finalizadas
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-950">
                {completedAppointments}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Consultas concluídas
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Pendentes
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-950">
                {pendingAppointments}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Aguardando atendimento
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.45fr_0.75fr]">
        <article className="rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <div className="flex items-center gap-2">
                <CalendarRange className="h-5 w-5 text-cyan-700" />

                <h2 className="text-lg font-bold text-slate-950">
                  Agenda de hoje
                </h2>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Consultas atribuídas ao profissional.
              </p>
            </div>

            <Link
              href={`/dashboard/agenda?professional=${encodeURIComponent(
                professional.name
              )}`}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              Ver agenda completa
            </Link>
          </div>

          {todayAppointments.length === 0 ? (
            <div className="p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <CalendarDays className="h-6 w-6" />
              </div>

              <h3 className="mt-4 font-bold text-slate-950">
                Nenhuma consulta hoje
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Este profissional não possui atendimentos
                programados para hoje.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {todayAppointments.map(
                (appointment) => (
                  <div
                    key={appointment.id}
                    className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700">
                        {appointment.time}
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-950">
                          {appointment.patient}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {appointment.specialty}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
                          appointmentStatusClasses[
                            appointment.status
                          ]
                        }`}
                      >
                        {appointment.status}
                      </span>

                      <Link
                        href={`/dashboard/agenda/${appointment.id}`}
                        className="inline-flex min-h-9 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                      >
                        Ver consulta
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </article>

        <div className="space-y-6">
          <article className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-cyan-700" />

                <h2 className="text-lg font-bold text-slate-950">
                  Dias de atendimento
                </h2>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {professional.workingDays.length === 0 ? (
                <p className="text-sm text-slate-500">
                  Nenhum dia de atendimento cadastrado.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {professional.workingDays.map((day) => (
                    <span
                      key={day}
                      className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              )}

              {professional.startTime &&
                professional.endTime && (
                  <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <Clock3 className="h-5 w-5 text-cyan-700" />

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Horário
                      </p>

                      <p className="mt-1 text-sm font-bold text-slate-900">
                        {professional.startTime} às{" "}
                        {professional.endTime}
                      </p>
                    </div>
                  </div>
                )}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5 sm:p-6">
              <h2 className="text-lg font-bold text-slate-950">
                Contato rápido
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Entre em contato com o profissional.
              </p>
            </div>

            <div className="space-y-3 p-5 sm:p-6">
              <a
                href={`tel:${professional.phone.replace(
                  /\D/g,
                  ""
                )}`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
              >
                <Phone className="h-4 w-4" />
                Ligar
              </a>

              <a
                href={`mailto:${professional.email}`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
              >
                <Mail className="h-4 w-4" />
                Enviar e-mail
              </a>

              <a
                href={createWhatsAppLink(
                  professional.phone,
                  professional.name
                )}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <button
                type="button"
                onClick={() =>
                  copyContact(
                    professional.email,
                    "E-mail"
                  )
                }
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
              >
                Copiar e-mail
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Apresentação profissional
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Experiência e área de atuação.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-sm leading-7 text-slate-600">
            {professional.biography ||
              "Nenhuma biografia foi cadastrada para este profissional."}
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/dashboard/profissionais"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar para profissionais
        </Link>

        <Link
          href={`/dashboard/profissionais/${professional.id}/editar`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white transition hover:bg-cyan-800"
        >
          <Edit3 className="h-4 w-4" />
          Editar profissional
        </Link>
      </div>
    </div>
  );
}
