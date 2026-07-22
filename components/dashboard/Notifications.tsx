import {
  BellRing,
  Cake,
  CalendarX2,
  CircleDollarSign,
  UserRoundPlus,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Consulta cancelada",
    description: "Carlos Oliveira cancelou o horário das 14:00.",
    time: "Há 10 minutos",
    icon: CalendarX2,
    iconClass: "bg-red-50 text-red-700",
  },
  {
    id: 2,
    title: "Paciente aniversariante",
    description: "Hoje é aniversário de Maria Aparecida.",
    time: "Há 35 minutos",
    icon: Cake,
    iconClass: "bg-violet-50 text-violet-700",
  },
  {
    id: 3,
    title: "Pagamento pendente",
    description: "Existe uma cobrança aguardando confirmação.",
    time: "Há 1 hora",
    icon: CircleDollarSign,
    iconClass: "bg-amber-50 text-amber-700",
  },
  {
    id: 4,
    title: "Novo paciente cadastrado",
    description: "Lucas Ferreira foi adicionado ao sistema.",
    time: "Há 2 horas",
    icon: UserRoundPlus,
    iconClass: "bg-emerald-50 text-emerald-700",
  },
];

export default function Notifications() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 p-5 sm:p-6">
        <div>
          <div className="flex items-center gap-2">
            <BellRing className="h-5 w-5 text-cyan-700" />

            <h2 className="text-lg font-bold text-slate-950">
              Notificações
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Atualizações importantes da clínica.
          </p>
        </div>

        <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700">
          4 novas
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {notifications.map(
          ({ id, title, description, time, icon: Icon, iconClass }) => (
            <article
              key={id}
              className="flex items-start gap-4 p-5 transition hover:bg-slate-50/70 sm:p-6"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-slate-950">{title}</h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {description}
                </p>

                <p className="mt-2 text-xs font-medium text-slate-400">
                  {time}
                </p>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}