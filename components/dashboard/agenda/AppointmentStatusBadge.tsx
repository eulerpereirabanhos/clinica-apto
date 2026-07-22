import type { AppointmentStatus } from "./agenda-data";

type AppointmentStatusBadgeProps = {
  status: AppointmentStatus;
};

const statusClasses: Record<AppointmentStatus, string> = {
  Agendada: "border-cyan-200 bg-cyan-50 text-cyan-700",
  Confirmada: "border-blue-200 bg-blue-50 text-blue-700",
  "Em atendimento":
    "border-amber-200 bg-amber-50 text-amber-700",
  Finalizada:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
  Cancelada: "border-rose-200 bg-rose-50 text-rose-700",
  "Não compareceu":
    "border-slate-200 bg-slate-100 text-slate-700",
};

export default function AppointmentStatusBadge({
  status,
}: AppointmentStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${statusClasses[status]}`}
    >
      {status}
    </span>
  );
}