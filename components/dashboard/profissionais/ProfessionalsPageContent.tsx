"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BriefcaseMedical,
  CalendarCheck2,
  ChevronRight,
  Clock3,
  Filter,
  Mail,
  Phone,
  Plus,
  RotateCcw,
  Search,
  Stethoscope,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import {
  professionalSpecialties,
  professionals,
  professionalStatuses,
  type ProfessionalStatus,
} from "./professionals-data";

function getStatusClass(status: ProfessionalStatus) {
  const classes: Record<ProfessionalStatus, string> = {
    Ativo:
      "border-emerald-200 bg-emerald-50 text-emerald-700",
    Inativo:
      "border-slate-200 bg-slate-100 text-slate-700",
    Férias:
      "border-amber-200 bg-amber-50 text-amber-700",
  };

  return classes[status];
}

export default function ProfessionalsPageContent() {
  const [search, setSearch] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] =
    useState("Todas as especialidades");
  const [selectedStatus, setSelectedStatus] =
    useState("Todos os status");

  const filteredProfessionals = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return professionals.filter((professional) => {
      const matchesSearch =
        !normalizedSearch ||
        professional.name
          .toLowerCase()
          .includes(normalizedSearch) ||
        professional.email
          .toLowerCase()
          .includes(normalizedSearch) ||
        professional.registrationNumber
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesSpecialty =
        selectedSpecialty ===
          "Todas as especialidades" ||
        professional.specialty === selectedSpecialty;

      const matchesStatus =
        selectedStatus === "Todos os status" ||
        professional.status === selectedStatus;

      return (
        matchesSearch &&
        matchesSpecialty &&
        matchesStatus
      );
    });
  }, [search, selectedSpecialty, selectedStatus]);

  const activeProfessionals = professionals.filter(
    (professional) => professional.status === "Ativo"
  ).length;

  const professionalsWorkingToday =
    professionals.filter(
      (professional) =>
        professional.status === "Ativo" &&
        professional.appointmentsToday > 0
    ).length;

  const specialtyCount = new Set(
    professionals.map(
      (professional) => professional.specialty
    )
  ).size;

  const stats = [
    {
      title: "Profissionais",
      value: professionals.length,
      description: "Cadastros realizados",
      icon: UsersRound,
      iconClass: "bg-cyan-50 text-cyan-700",
    },
    {
      title: "Profissionais ativos",
      value: activeProfessionals,
      description: "Disponíveis para atendimento",
      icon: UserRoundCheck,
      iconClass: "bg-emerald-50 text-emerald-700",
    },
    {
      title: "Especialidades",
      value: specialtyCount,
      description: "Áreas de atendimento",
      icon: Stethoscope,
      iconClass: "bg-violet-50 text-violet-700",
    },
    {
      title: "Atendendo hoje",
      value: professionalsWorkingToday,
      description: "Com consultas agendadas",
      icon: CalendarCheck2,
      iconClass: "bg-blue-50 text-blue-700",
    },
  ];

  function resetFilters() {
    setSearch("");
    setSelectedSpecialty(
      "Todas as especialidades"
    );
    setSelectedStatus("Todos os status");
  }

  return (
    <div className="space-y-6">
      <nav
        aria-label="Navegação estrutural"
        className="flex flex-wrap items-center gap-2 text-sm"
      >
        <Link
          href="/dashboard"
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          Dashboard
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Profissionais
        </span>
      </nav>

      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <BriefcaseMedical className="h-4 w-4" />
            Equipe clínica
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Profissionais
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Gerencie fisioterapeutas, especialidades,
            registros profissionais e horários de
            atendimento.
          </p>
        </div>

        <Link
          href="/dashboard/profissionais/novo"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800"
        >
          <Plus className="h-4 w-4" />
          Novo profissional
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {stat.title}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-950">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {stat.description}
                  </p>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.iconClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
            <Filter className="h-5 w-5" />
          </div>

          <div>
            <h2 className="font-bold text-slate-950">
              Filtros
            </h2>

            <p className="text-sm text-slate-500">
              Pesquise e filtre os profissionais.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          <div className="relative lg:col-span-2">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Pesquisar nome, e-mail ou registro..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <select
            value={selectedSpecialty}
            onChange={(event) =>
              setSelectedSpecialty(event.target.value)
            }
            className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          >
            {professionalSpecialties.map(
              (specialty) => (
                <option
                  key={specialty}
                  value={specialty}
                >
                  {specialty}
                </option>
              )
            )}
          </select>

          <div className="flex gap-3">
            <select
              value={selectedStatus}
              onChange={(event) =>
                setSelectedStatus(event.target.value)
              }
              className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            >
              {professionalStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={resetFilters}
              title="Limpar filtros"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {filteredProfessionals.length === 0 ? (
        <section className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-400">
            <UsersRound className="h-7 w-7" />
          </div>

          <h2 className="mt-5 text-lg font-bold text-slate-950">
            Nenhum profissional encontrado
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Ajuste os filtros para visualizar outros
            resultados.
          </p>
        </section>
      ) : (
        <section className="grid gap-5 lg:grid-cols-2">
          {filteredProfessionals.map(
            (professional) => (
              <article
                key={professional.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-lg font-bold text-cyan-700">
                    {professional.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-bold text-slate-950">
                          {professional.name}
                        </h2>

                        <p className="mt-1 text-sm font-medium text-cyan-700">
                          {professional.specialty}
                        </p>
                      </div>

                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${getStatusClass(
                          professional.status
                        )}`}
                      >
                        {professional.status}
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
                      <span className="flex items-center gap-2">
                        <BriefcaseMedical className="h-4 w-4 text-slate-400" />
                        {professional.registrationType}{" "}
                        {professional.registrationNumber}
                      </span>

                      <span className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-slate-400" />
                        {professional.phone}
                      </span>

                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-slate-400" />
                        {professional.email}
                      </span>

                      <span className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-slate-400" />

                        {professional.startTime &&
                        professional.endTime
                          ? `${professional.startTime} às ${professional.endTime}`
                          : "Sem horário cadastrado"}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Consultas hoje
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-900">
                          {professional.appointmentsToday}
                        </p>
                      </div>

                      <Link
                        href={`/dashboard/profissionais/${professional.id}`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                      >
                        Ver profissional
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </section>
      )}
    </div>
  );
}