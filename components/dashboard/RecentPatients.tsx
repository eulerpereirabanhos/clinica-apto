import {
  ChevronRight,
  Phone,
  UserRoundCheck,
} from "lucide-react";

const patients = [
  {
    id: 1,
    initials: "JS",
    name: "João da Silva",
    phone: "(37) 99921-4567",
    lastAppointment: "Hoje, 08:00",
    status: "Em tratamento",
    statusClass: "bg-cyan-50 text-cyan-700",
  },
  {
    id: 2,
    initials: "MA",
    name: "Maria Aparecida",
    phone: "(37) 99876-2210",
    lastAppointment: "Hoje, 09:00",
    status: "Ativo",
    statusClass: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 3,
    initials: "CH",
    name: "Carlos Henrique",
    phone: "(37) 99133-8844",
    lastAppointment: "Ontem, 16:30",
    status: "Avaliação",
    statusClass: "bg-violet-50 text-violet-700",
  },
  {
    id: 4,
    initials: "AP",
    name: "Ana Paula Souza",
    phone: "(37) 99744-5511",
    lastAppointment: "18/07/2026",
    status: "Em tratamento",
    statusClass: "bg-cyan-50 text-cyan-700",
  },
];

export default function RecentPatients() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
        <div>
          <div className="flex items-center gap-2">
            <UserRoundCheck className="h-5 w-5 text-cyan-700" />

            <h2 className="text-lg font-bold text-slate-950">
              Pacientes recentes
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Últimos pacientes atendidos ou cadastrados.
          </p>
        </div>

        <button
          type="button"
          className="hidden text-sm font-semibold text-cyan-700 transition hover:text-cyan-900 sm:block"
        >
          Ver todos
        </button>
      </div>

      <div className="divide-y divide-slate-100">
        {patients.map((patient) => (
          <article
            key={patient.id}
            className="flex items-center gap-4 p-5 transition hover:bg-slate-50/70 sm:p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-sm font-bold text-slate-700">
              {patient.initials}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate font-bold text-slate-950">
                {patient.name}
              </h3>

              <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                <Phone className="h-3.5 w-3.5" />
                {patient.phone}
              </div>

              <p className="mt-1 text-xs text-slate-400">
                Última consulta: {patient.lastAppointment}
              </p>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <span
                className={`rounded-full px-3 py-1.5 text-xs font-bold ${patient.statusClass}`}
              >
                {patient.status}
              </span>

              <button
                type="button"
                aria-label={`Abrir cadastro de ${patient.name}`}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}