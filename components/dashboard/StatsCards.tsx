import {
  CalendarCheck2,
  CircleDollarSign,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    title: "Pacientes cadastrados",
    value: "1.245",
    change: "+15 este mês",
    icon: UsersRound,
    iconClass: "bg-cyan-50 text-cyan-700",
    changeClass: "text-emerald-700",
  },
  {
    title: "Consultas hoje",
    value: "28",
    change: "6 aguardando",
    icon: CalendarCheck2,
    iconClass: "bg-violet-50 text-violet-700",
    changeClass: "text-violet-700",
  },
  {
    title: "Receita mensal",
    value: "R$ 38.500",
    change: "+8,4% no período",
    icon: CircleDollarSign,
    iconClass: "bg-emerald-50 text-emerald-700",
    changeClass: "text-emerald-700",
  },
  {
    title: "Taxa de satisfação",
    value: "98%",
    change: "Avaliação excelente",
    icon: UserRoundCheck,
    iconClass: "bg-amber-50 text-amber-700",
    changeClass: "text-amber-700",
  },
];

export default function StatsCards() {
  return (
    <section aria-labelledby="stats-title">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2
            id="stats-title"
            className="text-lg font-bold text-slate-950"
          >
            Indicadores principais
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Resumo das atividades da clínica.
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:flex">
          <TrendingUp className="h-4 w-4" />
          Desempenho positivo
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ title, value, change, icon: Icon, iconClass, changeClass }) => (
          <article
            key={title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <span className={`text-xs font-semibold ${changeClass}`}>
                {change}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-slate-500">
                {title}
              </p>

              <p className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                {value}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}