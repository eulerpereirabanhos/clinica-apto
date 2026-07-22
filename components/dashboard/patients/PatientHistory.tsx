import {
  CalendarCheck2,
  ClipboardList,
  Clock3,
  FileText,
  Plus,
  Stethoscope,
} from "lucide-react";

const appointments = [
  {
    id: 1,
    date: "21/07/2026",
    time: "08:00",
    specialty: "Fisioterapia ortopédica",
    professional: "Eric Rodrigues",
    status: "Concluída",
    statusClass: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 2,
    date: "18/07/2026",
    time: "14:00",
    specialty: "Reabilitação funcional",
    professional: "Eric Rodrigues",
    status: "Concluída",
    statusClass: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 3,
    date: "25/07/2026",
    time: "09:30",
    specialty: "Fisioterapia ortopédica",
    professional: "Eric Rodrigues",
    status: "Agendada",
    statusClass: "bg-cyan-50 text-cyan-700",
  },
];

const medicalRecords = [
  {
    id: 1,
    date: "21/07/2026",
    title: "Evolução fisioterapêutica",
    professional: "Eric Rodrigues",
    description:
      "Paciente apresentou melhora da mobilidade e redução da dor durante os exercícios funcionais.",
  },
  {
    id: 2,
    date: "18/07/2026",
    title: "Avaliação funcional",
    professional: "Eric Rodrigues",
    description:
      "Realizada avaliação de amplitude de movimento, força muscular e limitações funcionais.",
  },
];

export default function PatientHistory() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <div className="flex items-center gap-2">
              <CalendarCheck2 className="h-5 w-5 text-cyan-700" />

              <h2 className="text-lg font-bold text-slate-950">
                Histórico de consultas
              </h2>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Consultas concluídas e próximas consultas.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
          >
            <Plus className="h-4 w-4" />
            Nova consulta
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {appointments.map((appointment) => (
            <article
              key={appointment.id}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Stethoscope className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    {appointment.specialty}
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    {appointment.professional}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span>{appointment.date}</span>

                    <span className="flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" />
                      {appointment.time}
                    </span>
                  </div>
                </div>
              </div>

              <span
                className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${appointment.statusClass}`}
              >
                {appointment.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-violet-700" />

              <h2 className="text-lg font-bold text-slate-950">
                Prontuário
              </h2>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Registros de avaliações e evoluções clínicas.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <Plus className="h-4 w-4" />
            Nova evolução
          </button>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          {medicalRecords.map((record) => (
            <article
              key={record.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm">
                  <FileText className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-bold text-slate-950">
                      {record.title}
                    </h3>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
                      {record.date}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-semibold text-violet-700">
                    Profissional: {record.professional}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {record.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}