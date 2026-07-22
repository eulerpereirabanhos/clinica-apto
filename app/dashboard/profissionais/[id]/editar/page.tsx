import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BriefcaseMedical,
  ChevronRight,
} from "lucide-react";
import ProfessionalForm, {
  type ProfessionalFormData,
} from "@/components/dashboard/profissionais/ProfessionalForm";
import { professionals } from "@/components/dashboard/profissionais/professionals-data";

type EditProfessionalPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProfessionalPage({
  params,
}: EditProfessionalPageProps) {
  const { id } = await params;

  const professionalId = Number(id);

  if (
    !Number.isInteger(professionalId) ||
    professionalId <= 0
  ) {
    notFound();
  }

  const professional = professionals.find(
    (item) => item.id === professionalId
  );

  if (!professional) {
    notFound();
  }

  const initialData: ProfessionalFormData = {
    name: professional.name,
    specialty: professional.specialty,
    registrationType:
      professional.registrationType,
    registrationNumber:
      professional.registrationNumber,
    phone: professional.phone,
    email: professional.email,
    status: professional.status,
    workingDays: professional.workingDays,
    startTime: professional.startTime,
    endTime: professional.endTime,
    biography: professional.biography ?? "",
  };

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

        <Link
          href={`/dashboard/profissionais/${professional.id}`}
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          {professional.name}
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Editar
        </span>
      </nav>

      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <BriefcaseMedical className="h-4 w-4" />
            Edição profissional
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Editar profissional
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Atualize os dados pessoais, especialidade,
            registro profissional e disponibilidade de
            atendimento.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-sm font-bold text-amber-900">
            Alterações demonstrativas
          </p>

          <p className="mt-1 text-xs text-amber-700">
            Os dados ainda não são salvos no banco.
          </p>
        </div>
      </section>

      <ProfessionalForm
        mode="edit"
        professionalId={professional.id}
        initialData={initialData}
      />
    </div>
  );
}