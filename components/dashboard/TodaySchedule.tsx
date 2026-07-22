import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  MoreHorizontal,
} from "lucide-react";

const appointments = [
  {
    id: 1,
    time: "08:00",
    patient: "João da Silva",
    specialty: "Fisioterapia ortopédica",
    professional: "Eric Rodrigues",
    status: "Concluída",
    statusClass: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 2,
    time: "09:00",
    patient: "Maria Aparecida",
    specialty: "Pilates clínico",
    professional: "Eric Rodrigues",
    status: "Confirmada",
    statusClass: "bg-cyan-50 text-cyan-700",
  },
  {
    id: 3,
    time: "10:30",
    patient: "Carlos Henrique",
    specialty: "Quiropraxia clínica",
    professional: "Eric Rodrigues",
    status: "Aguardando",
    statusClass: "bg-amber-50 text-amber-700",
  },
  {
    id: 4,
    time: "13:30",
    patient: "Ana Paula Souza",
    specialty: "Liberação miofascial",
    professional: "Eric Rodrigues",
    status: "Confirmada",
    statusClass: "bg-cyan-50 text-cyan-700",
  },
  {
    id: 5,
    time: "15:00",
    patient: "Marcos Vinícius",
    specialty: "Reabilitação funcional",
    professional: "Eric Rodrigues",
    status: "Aguardando",
    statusClass: "bg-amber-50 text-amber-700",
  },
];

export default function TodaySchedule() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-cyan-700" />

            <h2 className="text-lg font-bold text-slate-950">
              Agenda do dia
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Consultas e atendimentos programados para hoje.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Ver agenda completa
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {appointments.map((appointment) => (
          <article
            key={appointment.id}
            className="group flex flex-col gap-4 p-5 transition hover:bg-slate-50/70 sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div className="flex min-w-0 items-start gap-4">
              <div className="flex h-12 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                <Clock3 className="h-4 w-4" />

                <span className="mt-1 text-sm font-bold">
                  {appointment.time}
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="truncate font-bold text-slate-950">
                  {appointment.patient}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {appointment.specialty}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Profissional: {appointment.professional}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${appointment.statusClass}`}
              >
                {appointment.status === "Concluída" && (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                )}

                {appointment.status}
              </span>

              <button
                type="button"
                aria-label={`Opções da consulta de ${appointment.patient}`}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}