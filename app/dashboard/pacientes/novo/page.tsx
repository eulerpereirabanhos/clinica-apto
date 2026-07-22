import Link from "next/link";
import {
  ChevronRight,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import PatientForm from "@/components/dashboard/patients/PatientForm";

export default function NewPatientPage() {
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

        <Link
          href="/dashboard/pacientes"
          className="flex items-center gap-1.5 font-medium text-slate-500 transition hover:text-cyan-700"
        >
          <UsersRound className="h-4 w-4" />
          Pacientes
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Novo paciente
        </span>
      </nav>

      <section>
        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
          <UserRoundPlus className="h-4 w-4" />
          Cadastro
        </div>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Novo paciente
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600">
          Preencha os dados abaixo para cadastrar um novo paciente na
          Clínica APTO.
        </p>
      </section>

      <PatientForm />
    </div>
  );
}