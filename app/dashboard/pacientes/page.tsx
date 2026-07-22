"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Download,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import PatientsFilters from "@/components/dashboard/patients/PatientsFilters";
import PatientsTable, {
  type Patient,
} from "@/components/dashboard/patients/PatientsTable";

const patients: Patient[] = [
  {
    id: 1,
    initials: "JS",
    name: "João da Silva",
    cpf: "123.456.789-00",
    phone: "(37) 99921-4567",
    email: "joao.silva@email.com",
    lastAppointment: "21/07/2026 às 08:00",
    status: "Em tratamento",
  },
  {
    id: 2,
    initials: "MA",
    name: "Maria Aparecida",
    cpf: "987.654.321-00",
    phone: "(37) 99876-2210",
    email: "maria.aparecida@email.com",
    lastAppointment: "21/07/2026 às 09:00",
    status: "Ativo",
  },
  {
    id: 3,
    initials: "CH",
    name: "Carlos Henrique",
    cpf: "456.789.123-00",
    phone: "(37) 99133-8844",
    email: "carlos.henrique@email.com",
    lastAppointment: "20/07/2026 às 16:30",
    status: "Avaliação",
  },
  {
    id: 4,
    initials: "AP",
    name: "Ana Paula Souza",
    cpf: "741.852.963-00",
    phone: "(37) 99744-5511",
    email: "ana.paula@email.com",
    lastAppointment: "18/07/2026 às 14:00",
    status: "Em tratamento",
  },
  {
    id: 5,
    initials: "MF",
    name: "Marcos Ferreira",
    cpf: "369.258.147-00",
    phone: "(37) 99671-8822",
    email: "marcos.ferreira@email.com",
    lastAppointment: "15/07/2026 às 10:30",
    status: "Inativo",
  },
  {
    id: 6,
    initials: "LF",
    name: "Lucas Fernandes",
    cpf: "159.357.486-00",
    phone: "(37) 99538-1144",
    email: "lucas.fernandes@email.com",
    lastAppointment: "Novo cadastro",
    status: "Ativo",
  },
];

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function PatientsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("Todos");

  const filteredPatients = useMemo(() => {
    const normalizedSearch = normalizeText(search.trim());

    return patients.filter((patient) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        normalizeText(patient.name).includes(normalizedSearch) ||
        patient.cpf.includes(search) ||
        patient.phone.includes(search) ||
        normalizeText(patient.email).includes(normalizedSearch);

      const matchesStatus =
        status === "Todos" || patient.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  function clearFilters() {
    setSearch("");
    setStatus("Todos");
  }

  return (
    <div className="space-y-6">
      <section className="flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <UsersRound className="h-4 w-4" />
            Gestão de pacientes
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Pacientes
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Consulte, cadastre e acompanhe os pacientes da Clínica
            APTO.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Exportar
          </button>

          <Link
            href="/dashboard/pacientes/novo"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800"
          >
            <UserRoundPlus className="h-4 w-4" />
            Novo paciente
          </Link>
        </div>
      </section>

      <PatientsFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
        onClear={clearFilters}
      />

      <PatientsTable patients={filteredPatients} />
    </div>
  );
}