"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronRight,
  Plus,
} from "lucide-react";
import AgendaDayView from "@/components/dashboard/agenda/AgendaDayView";
import AgendaFilters from "@/components/dashboard/agenda/AgendaFilters";
import AgendaStats from "@/components/dashboard/agenda/AgendaStats";
import {
  appointments,
} from "@/components/dashboard/agenda/agenda-data";

const defaultDate = "2026-07-21";

export default function AgendaPage() {

const [search, setSearch] = useState("");

const [selectedDate, setSelectedDate] =
  useState(defaultDate);
  const [selectedStatus, setSelectedStatus] =
    useState("Todos os status");
  const [
  selectedProfessional,
  setSelectedProfessional,
] = useState("");

  const filteredAppointments = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return appointments.filter((appointment) => {
      const matchesDate =
        appointment.date === selectedDate;

      const matchesSearch =
        !normalizedSearch ||
        appointment.patientName
          .toLowerCase()
          .includes(normalizedSearch) ||
        appointment.specialty
          .toLowerCase()
          .includes(normalizedSearch) ||
        appointment.professional
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus =
        selectedStatus === "Todos os status" ||
        appointment.status === selectedStatus;

      const matchesProfessional =
        selectedProfessional ===
          "Todos os profissionais" ||
        appointment.professional ===
          selectedProfessional;

      return (
        matchesDate &&
        matchesSearch &&
        matchesStatus &&
        matchesProfessional
      );
    });
  }, [
    search,
    selectedDate,
    selectedStatus,
    selectedProfessional,
  ]);

  function resetFilters() {
    setSearch("");
    setSelectedDate(defaultDate);
    setSelectedStatus("Todos os status");
    setSelectedProfessional(
      "Todos os profissionais"
    );
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
          Agenda
        </span>
      </nav>

      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <CalendarDays className="h-4 w-4" />
            Gestão de consultas
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Agenda de consultas
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Organize horários, acompanhe atendimentos e
            gerencie a rotina dos profissionais.
          </p>
        </div>

        <Link
          href="/dashboard/agenda/nova"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800"
        >
          <Plus className="h-4 w-4" />
          Nova consulta
        </Link>
      </section>

      <AgendaStats
        appointments={filteredAppointments}
      />

      <AgendaFilters
        search={search}
        selectedDate={selectedDate}
        selectedStatus={selectedStatus}
        selectedProfessional={
          selectedProfessional
        }
        onSearchChange={setSearch}
        onDateChange={setSelectedDate}
        onStatusChange={setSelectedStatus}
        onProfessionalChange={
          setSelectedProfessional
        }
        onReset={resetFilters}
      />

      <AgendaDayView
        appointments={filteredAppointments}
      />

      <section className="rounded-3xl border border-cyan-200 bg-cyan-50/60 p-5 sm:p-6">
        <h2 className="font-bold text-cyan-950">
          Agenda demonstrativa
        </h2>

        <p className="mt-2 text-sm leading-6 text-cyan-800">
          As consultas ainda são dados simulados. Na etapa
          de integração, os agendamentos serão carregados do
          banco de dados.
        </p>
      </section>
    </div>
  );
}