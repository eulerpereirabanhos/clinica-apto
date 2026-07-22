"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Ban,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  Edit3,
  FileText,
  Loader2,
  MapPin,
  Phone,
  PlayCircle,
  RotateCcw,
  Stethoscope,
  UserRound,
  UserRoundCheck,
} from "lucide-react";
import type {
  Appointment,
  AppointmentStatus,
} from "./agenda-data";
import AppointmentStatusBadge from "./AppointmentStatusBadge";

type AppointmentDetailsProps = {
  appointment: Appointment;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00`));
}

export default function AppointmentDetails({
  appointment,
}: AppointmentDetailsProps) {
  const router = useRouter();

  const [status, setStatus] =
    useState<AppointmentStatus>(appointment.status);

  const [loadingAction, setLoadingAction] =
    useState<AppointmentStatus | null>(null);

  const [message, setMessage] = useState("");

  function changeStatus(newStatus: AppointmentStatus) {
    setLoadingAction(newStatus);
    setMessage("");

    setTimeout(() => {
      setStatus(newStatus);
      setLoadingAction(null);

      setMessage(
        `Status alterado para "${newStatus}" com sucesso.`
      );

      console.log("Status da consulta atualizado:", {
        appointmentId: appointment.id,
        status: newStatus,
      });
    }, 700);
  }

  function actionIsLoading(action: AppointmentStatus) {
    return loadingAction === action;
  }

  const detailItems = [
    {
      label: "Paciente",
      value: appointment.patientName,
      icon: UserRound,
    },
    {
      label: "Telefone",
      value: appointment.phone,
      icon: Phone,
    },
    {
      label: "Profissional",
      value: appointment.professional,
      icon: UserRoundCheck,
    },
    {
      label: "Especialidade",
      value: appointment.specialty,
      icon: Stethoscope,
    },
    {
      label: "Data",
      value: formatDate(appointment.date),
      icon: CalendarDays,
    },
    {
      label: "Horário",
      value: `${appointment.time} até ${appointment.endTime}`,
      icon: Clock3,
    },
    {
      label: "Duração",
      value: `${appointment.duration} minutos`,
      icon: Clock3,
    },
    {
      label: "Sala",
      value: appointment.room,
      icon: MapPin,
    },
  ];

  return (
    <div className="space-y-6">
      {message && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          {message}
        </div>
      )}

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-5 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-lg font-bold text-cyan-700">
              {appointment.patientInitials}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-bold text-slate-950">
                  {appointment.patientName}
                </h2>

                <AppointmentStatusBadge status={status} />
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Consulta #{appointment.id}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/dashboard/agenda/${appointment.id}/editar`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              <Edit3 className="h-4 w-4" />
              Editar consulta
            </Link>

            <Link
              href={`/dashboard/pacientes/${appointment.patientId}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white transition hover:bg-cyan-800"
            >
              <UserRound className="h-4 w-4" />
              Ver paciente
            </Link>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          {detailItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Icon className="h-4 w-4 text-cyan-700" />
                  {item.label}
                </div>

                <p className="mt-3 text-sm font-bold capitalize text-slate-950">
                  {item.value}
                </p>
              </article>
            );
          })}
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
                Observações da consulta
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informações importantes para o atendimento.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-sm leading-7 text-slate-600">
            {appointment.observations ||
              "Nenhuma observação foi cadastrada para esta consulta."}
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <h2 className="text-lg font-bold text-slate-950">
            Ações da consulta
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Atualize o andamento do atendimento.
          </p>
        </div>

        <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          <button
            type="button"
            disabled={
              loadingAction !== null || status === "Confirmada"
            }
            onClick={() => changeStatus("Confirmada")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {actionIsLoading("Confirmada") ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <UserRoundCheck className="h-4 w-4" />
            )}

            Confirmar consulta
          </button>

          <button
            type="button"
            disabled={
              loadingAction !== null ||
              status === "Em atendimento" ||
              status === "Finalizada" ||
              status === "Cancelada"
            }
            onClick={() => changeStatus("Em atendimento")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 text-sm font-semibold text-amber-700 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {actionIsLoading("Em atendimento") ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <PlayCircle className="h-4 w-4" />
            )}

            Iniciar atendimento
          </button>

          <button
            type="button"
            disabled={
              loadingAction !== null ||
              status === "Finalizada" ||
              status === "Cancelada"
            }
            onClick={() => changeStatus("Finalizada")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {actionIsLoading("Finalizada") ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle2 className="h-4 w-4" />
            )}

            Finalizar consulta
          </button>

          <button
            type="button"
            disabled={
              loadingAction !== null ||
              status === "Não compareceu" ||
              status === "Finalizada"
            }
            onClick={() => changeStatus("Não compareceu")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {actionIsLoading("Não compareceu") ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Ban className="h-4 w-4" />
            )}

            Não compareceu
          </button>

          <button
            type="button"
            disabled={
              loadingAction !== null ||
              status === "Cancelada" ||
              status === "Finalizada"
            }
            onClick={() => changeStatus("Cancelada")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-4 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {actionIsLoading("Cancelada") ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Ban className="h-4 w-4" />
            )}

            Cancelar consulta
          </button>

          <button
            type="button"
            disabled={
              loadingAction !== null || status === "Agendada"
            }
            onClick={() => changeStatus("Agendada")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {actionIsLoading("Agendada") ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RotateCcw className="h-4 w-4" />
            )}

            Voltar para agendada
          </button>
        </div>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={() => router.push("/dashboard/agenda")}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar para agenda
        </button>

        <Link
          href={`/dashboard/agenda/${appointment.id}/editar`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white transition hover:bg-cyan-800"
        >
          <Edit3 className="h-4 w-4" />
          Editar agendamento
        </Link>
      </div>
    </div>
  );
}