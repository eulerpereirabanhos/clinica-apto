"use client";

import Link from "next/link";
import {
  CalendarX2,
  ChevronRight,
  Clock3,
  MapPin,
  MoreHorizontal,
  Phone,
  Stethoscope,
  UserRound,
} from "lucide-react";
import type {
  Appointment,
  AppointmentStatus,
} from "./agenda-data";

type AgendaDayViewProps = {
  appointments: Appointment[];
};

function getStatusClass(status: AppointmentStatus) {
  const classes: Record<AppointmentStatus, string> = {
    Agendada: "bg-cyan-50 text-cyan-700 border-cyan-200",
    Confirmada: "bg-blue-50 text-blue-700 border-blue-200",
    "Em atendimento":
      "bg-amber-50 text-amber-700 border-amber-200",
    Finalizada:
      "bg-emerald-50 text-emerald-700 border-emerald-200",
    Cancelada: "bg-rose-50 text-rose-700 border-rose-200",
    "Não compareceu":
      "bg-slate-100 text-slate-700 border-slate-200",
  };

  return classes[status];
}

function formatDate(date: string) {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00`));
}

export default function AgendaDayView({
  appointments,
}: AgendaDayViewProps) {
  const selectedDate = appointments[0]?.date;

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-sm font-semibold text-cyan-700">
            Agenda diária
          </p>

          <h2 className="mt-1 text-xl font-bold capitalize text-slate-950">
            {selectedDate
              ? formatDate(selectedDate)
              : "Nenhuma data encontrada"}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {appointments.length}{" "}
            {appointments.length === 1
              ? "consulta encontrada"
              : "consultas encontradas"}
          </p>
        </div>

        <div className="flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-cyan-700 shadow-sm"
          >
            Dia
          </button>

          <button
            type="button"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            Semana
          </button>

          <button
            type="button"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            Mês
          </button>
        </div>
      </div>

      {appointments.length === 0 ? (
        <div className="flex min-h-80 flex-col items-center justify-center p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-400">
            <CalendarX2 className="h-7 w-7" />
          </div>

          <h3 className="mt-5 text-lg font-bold text-slate-950">
            Nenhuma consulta encontrada
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Não existem consultas que correspondam aos filtros
            selecionados.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {appointments.map((appointment) => (
            <article
              key={appointment.id}
              className="group p-5 transition hover:bg-slate-50/80 sm:p-6"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
                <div className="flex min-w-28 items-center gap-3 xl:flex-col xl:items-start xl:gap-1">
                  <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                    <Clock3 className="h-4 w-4 text-cyan-700" />
                    {appointment.time}
                  </div>

                  <span className="text-xs font-medium text-slate-400">
                    até {appointment.endTime}
                  </span>
                </div>

                <div className="hidden h-14 w-px bg-slate-200 xl:block" />

                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700">
                    {appointment.patientInitials}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="truncate font-bold text-slate-950">
                        {appointment.patientName}
                      </h3>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${getStatusClass(
                          appointment.status
                        )}`}
                      >
                        {appointment.status}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Stethoscope className="h-4 w-4" />
                        {appointment.specialty}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <UserRound className="h-4 w-4" />
                        {appointment.professional}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {appointment.room}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Phone className="h-4 w-4" />
                        {appointment.phone}
                      </span>
                    </div>

                    {appointment.observations && (
                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {appointment.observations}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 xl:justify-end">
                  <Link
                    href={`/dashboard/pacientes/${appointment.patientId}`}
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 xl:flex-none"
                  >
                    Ver paciente
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
  href={`/dashboard/agenda/${appointment.id}`}
  className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800 xl:flex-none"
>
  Ver consulta
  <ChevronRight className="h-4 w-4" />
</Link>

                  <Link
  href={`/dashboard/agenda/${appointment.id}`}
  aria-label={`Ver detalhes da consulta de ${appointment.patientName}`}
  title="Ver detalhes da consulta"
  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
>
  <MoreHorizontal className="h-4 w-4" />
</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}