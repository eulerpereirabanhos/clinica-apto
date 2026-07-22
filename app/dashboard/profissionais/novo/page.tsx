import Link from "next/link";
import {
  BriefcaseMedical,
  ChevronRight,
} from "lucide-react";
import ProfessionalForm from "@/components/dashboard/profissionais/ProfessionalForm";

export default function NewProfessionalPage() {
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
          href="/dashboard/profissionais"
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          Profissionais
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Novo profissional
        </span>
      </nav>

      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <BriefcaseMedical className="h-4 w-4" />
            Cadastro da equipe
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Novo profissional
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Cadastre os dados pessoais, registro,
            especialidade e disponibilidade de atendimento.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3">
          <p className="text-sm font-bold text-blue-900">
            Cadastro profissional
          </p>

          <p className="mt-1 text-xs text-blue-700">
            Os campos com * são obrigatórios.
          </p>
        </div>
      </section>

      <ProfessionalForm />
    </div>
  );
}
