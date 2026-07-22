"use client";

import {
  Filter,
  RotateCcw,
  Search,
} from "lucide-react";

type PatientsFiltersProps = {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onClear: () => void;
};

export default function PatientsFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onClear,
}: PatientsFiltersProps) {
  const hasFilters = search.length > 0 || status !== "Todos";

  return (
    <section
      aria-label="Filtros de pacientes"
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label
            htmlFor="patient-search"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Pesquisar paciente
          </label>

          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              id="patient-search"
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Nome, telefone, CPF ou e-mail..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            />
          </div>
        </div>

        <div className="w-full lg:w-56">
          <label
            htmlFor="patient-status"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Status
          </label>

          <div className="relative">
            <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <select
              id="patient-status"
              value={status}
              onChange={(event) => onStatusChange(event.target.value)}
              className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            >
              <option>Todos</option>
              <option>Ativo</option>
              <option>Em tratamento</option>
              <option>Avaliação</option>
              <option>Inativo</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={onClear}
          disabled={!hasFilters}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <RotateCcw className="h-4 w-4" />
          Limpar filtros
        </button>
      </div>
    </section>
  );
}