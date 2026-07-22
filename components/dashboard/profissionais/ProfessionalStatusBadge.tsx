import type { ProfessionalStatus } from "./professionals-data";

type ProfessionalStatusBadgeProps = {
  status: ProfessionalStatus;
};

const statusClasses: Record<ProfessionalStatus, string> = {
  Ativo:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
  Inativo:
    "border-slate-200 bg-slate-100 text-slate-700",
  Férias:
    "border-amber-200 bg-amber-50 text-amber-700",
};

export default function ProfessionalStatusBadge({
  status,
}: ProfessionalStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${statusClasses[status]}`}
    >
      {status}
    </span>
  );
}