"use client";

import {
  CalendarDays,
  Filter,
  RotateCcw,
  Search,
  UserRound,
} from "lucide-react";
import {
  appointmentStatuses,
  professionals,
} from "./agenda-data";

type AgendaFiltersProps = {
  search: string;
  selectedDate: string;
  selectedStatus: string;
  selectedProfessional: string;
  onSearchChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onProfessionalChange: (value: string) => void;
  onReset: () => void;
};

const inputClass =
  "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

const selectClass =
  "h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

export default function AgendaFilters({
  search,
  selectedDate,
  selectedStatus,
  selectedProfessional,
  onSearchChange,
  onDateChange,
  onStatusChange,
  onProfessionalChange,
  onReset,
}: AgendaFiltersProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
          <Filter className="h-5 w-5" />
        </div>

        <div>
          <h2 className="font-bold text-slate-950">
            Filtros da agenda
          </h2>

          <p className="text-sm text-slate-500">
            Localize rapidamente os agendamentos.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
        <div className="relative xl:col-span-2">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="search"
            value={search}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Pesquisar paciente ou especialidade..."
            className={inputClass}
          />
        </div>

        <div className="relative">
          <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="date"
            value={selectedDate}
            onChange={(event) =>
              onDateChange(event.target.value)
            }
            className={inputClass}
          />
        </div>

        <div className="relative">
          <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <select
            value={selectedProfessional}
            onChange={(event) =>
              onProfessionalChange(event.target.value)
            }
            className={selectClass}
          >
            {professionals.map((professional) => (
              <option
                key={professional}
                value={professional}
              >
                {professional}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <select
            value={selectedStatus}
            onChange={(event) =>
              onStatusChange(event.target.value)
            }
            className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          >
            {appointmentStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={onReset}
            title="Limpar filtros"
            aria-label="Limpar filtros"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}