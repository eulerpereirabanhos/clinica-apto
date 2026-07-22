import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BriefcaseMedical,
  ChevronRight,
} from "lucide-react";
import ProfessionalDetails from "@/components/dashboard/profissionais/ProfessionalDetails";
import { professionals } from "@/components/dashboard/profissionais/professionals-data";

type ProfessionalDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProfessionalDetailsPage({
  params,
}: ProfessionalDetailsPageProps) {
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
          {professional.name}
        </span>
      </nav>

      <section>
        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
          <BriefcaseMedical className="h-4 w-4" />
          Perfil profissional
        </div>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          {professional.name}
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600">
          Consulte os dados profissionais, horários,
          disponibilidade e atendimentos do dia.
        </p>
      </section>

      <ProfessionalDetails
        professional={professional}
      />
    </div>
  );
}