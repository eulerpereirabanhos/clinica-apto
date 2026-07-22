import Link from "next/link";
import { ChevronRight, Stethoscope } from "lucide-react";
import SpecialtyForm from "@/components/dashboard/especialidades/SpecialtyForm";

export default function NewSpecialtyPage() {
  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap items-center gap-2 text-sm">
        <Link
          href="/dashboard"
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          Dashboard
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <Link
          href="/dashboard/especialidades"
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          Especialidades
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Nova especialidade
        </span>
      </nav>

      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <Stethoscope className="h-4 w-4" />
            Cadastro de serviço
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Nova especialidade
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Cadastre uma nova área de atendimento da Clínica APTO.
          </p>
        </div>
      </section>

      <SpecialtyForm />
    </div>
  );
}