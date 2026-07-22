import Link from "next/link";
import {
  CalendarPlus2,
  ClipboardPlus,
  FileChartColumnIncreasing,
  UserRoundPlus,
  WalletCards,
} from "lucide-react";

const actions = [
  {
    label: "Novo paciente",
    description: "Cadastrar paciente",
    href: "/dashboard/pacientes/novo",
    icon: UserRoundPlus,
    iconClass: "bg-cyan-50 text-cyan-700",
  },
  {
    label: "Nova consulta",
    description: "Agendar atendimento",
    href: "/dashboard/agenda/nova",
    icon: CalendarPlus2,
    iconClass: "bg-violet-50 text-violet-700",
  },
  {
    label: "Novo atendimento",
    description: "Registrar evolução",
    href: "/dashboard/atendimentos/novo",
    icon: ClipboardPlus,
    iconClass: "bg-emerald-50 text-emerald-700",
  },
  {
    label: "Financeiro",
    description: "Registrar movimentação",
    href: "/dashboard/financeiro",
    icon: WalletCards,
    iconClass: "bg-amber-50 text-amber-700",
  },
  {
    label: "Relatórios",
    description: "Visualizar indicadores",
    href: "/dashboard/relatorios",
    icon: FileChartColumnIncreasing,
    iconClass: "bg-rose-50 text-rose-700",
  },
];

export default function QuickActions() {
  return (
    <section
      aria-labelledby="quick-actions-title"
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="mb-5">
        <h2
          id="quick-actions-title"
          className="text-lg font-bold text-slate-950"
        >
          Ações rápidas
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Acesse as tarefas mais utilizadas do sistema.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
        {actions.map(
          ({ label, description, href, icon: Icon, iconClass }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-200 hover:bg-cyan-50/40"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="font-bold text-slate-900 transition group-hover:text-cyan-800">
                  {label}
                </p>

                <p className="mt-0.5 text-sm text-slate-500">
                  {description}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}