"use client";
import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Mail,
  MoreHorizontal,
  Phone,
  UserRoundX,
} from "lucide-react";

export type Patient = {
  id: number;
  initials: string;
  name: string;
  cpf: string;
  phone: string;
  email: string;
  lastAppointment: string;
  status: "Ativo" | "Em tratamento" | "Avaliação" | "Inativo";
};

type PatientsTableProps = {
  patients: Patient[];
};

const statusStyles: Record<Patient["status"], string> = {
  Ativo: "bg-emerald-50 text-emerald-700",
  "Em tratamento": "bg-cyan-50 text-cyan-700",
  Avaliação: "bg-violet-50 text-violet-700",
  Inativo: "bg-slate-100 text-slate-600",
};

export default function PatientsTable({
  patients,
}: PatientsTableProps) {
  if (patients.length === 0) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
          <UserRoundX className="h-8 w-8" />
        </div>

        <h2 className="mt-5 text-xl font-bold text-slate-950">
          Nenhum paciente encontrado
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          Tente alterar os termos da pesquisa ou limpar os filtros
          utilizados.
        </p>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-slate-950">
            Pacientes cadastrados
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {patients.length} paciente
            {patients.length !== 1 ? "s" : ""} encontrado
            {patients.length !== 1 ? "s" : ""}.
          </p>
        </div>

        <span className="w-fit rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">
          Dados demonstrativos
        </span>
      </div>

      {/* Visual para computador */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[1050px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Paciente
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                CPF
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Contato
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Última consulta
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="transition hover:bg-slate-50/70"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-800">
                      {patient.initials}
                    </div>

                    <div className="min-w-0">
                      <p className="font-bold text-slate-950">
                        {patient.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Código #{String(patient.id).padStart(4, "0")}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {patient.cpf}
                </td>

                <td className="px-6 py-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Phone className="h-4 w-4 text-slate-400" />
                      {patient.phone}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Mail className="h-4 w-4 text-slate-400" />
                      {patient.email}
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {patient.lastAppointment}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[patient.status]}`}
                  >
                    {patient.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      aria-label={`Visualizar ${patient.name}`}
                      className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
                    >
                      <Eye className="h-4 w-4" />
                    </button>

                    <Link
  href={`/dashboard/pacientes/${patient.id}`}
  aria-label={`Visualizar ${patient.name}`}
  className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
>
  <Eye className="h-4 w-4" />
</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visual para celular e tablet */}
      <div className="divide-y divide-slate-100 lg:hidden">
        {patients.map((patient) => (
          <article key={patient.id} className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-800">
                {patient.initials}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-950">
                      {patient.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      CPF: {patient.cpf}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[patient.status]}`}
                  >
                    {patient.status}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 text-slate-400" />
                    {patient.phone}
                  </p>

                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="h-4 w-4 text-slate-400" />
                    {patient.email}
                  </p>

                  <p className="text-sm text-slate-500">
                    Última consulta: {patient.lastAppointment}
                  </p>
                </div>

                <div className="mt-5 flex gap-2">
                  <Link
  href={`/dashboard/pacientes/${patient.id}`}
  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-800"
>
  <Eye className="h-4 w-4" />
  Visualizar
</Link>

                  <button
                    type="button"
                    aria-label={`Mais opções para ${patient.name}`}
                    className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm text-slate-500">
          Página 1 de 1
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            disabled
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </button>

          <button
            type="button"
            disabled
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Próxima
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}