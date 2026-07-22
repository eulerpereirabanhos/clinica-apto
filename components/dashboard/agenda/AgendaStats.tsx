import {
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  UserRoundCheck,
} from "lucide-react";
import type { Appointment } from "./agenda-data";

type AgendaStatsProps = {
  appointments: Appointment[];
};

export default function AgendaStats({
  appointments,
}: AgendaStatsProps) {
  const total = appointments.length;

  const confirmed = appointments.filter(
    (appointment) => appointment.status === "Confirmada"
  ).length;

  const inProgress = appointments.filter(
    (appointment) => appointment.status === "Em atendimento"
  ).length;

  const completed = appointments.filter(
    (appointment) => appointment.status === "Finalizada"
  ).length;

  const stats = [
    {
      title: "Consultas do dia",
      value: total,
      description: "Agendamentos encontrados",
      icon: CalendarCheck2,
      iconClass: "bg-cyan-50 text-cyan-700",
    },
    {
      title: "Confirmadas",
      value: confirmed,
      description: "Pacientes confirmados",
      icon: UserRoundCheck,
      iconClass: "bg-blue-50 text-blue-700",
    },
    {
      title: "Em atendimento",
      value: inProgress,
      description: "Atendimentos em andamento",
      icon: Clock3,
      iconClass: "bg-amber-50 text-amber-700",
    },
    {
      title: "Finalizadas",
      value: completed,
      description: "Consultas concluídas",
      icon: CheckCircle2,
      iconClass: "bg-emerald-50 text-emerald-700",
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {stat.title}
                </p>

                <p className="mt-3 text-3xl font-bold text-slate-950">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  {stat.description}
                </p>
              </div>

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${stat.iconClass}`}
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}