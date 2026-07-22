import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  Pencil,
  UserRound,
  UsersRound,
} from "lucide-react";
import PatientForm, {
  type PatientFormData,
} from "@/components/dashboard/patients/PatientForm";

const patients: Record<string, Partial<PatientFormData>> = {
  "1": {
    name: "João da Silva",
    birthDate: "1985-03-15",
    cpf: "123.456.789-00",
    rg: "MG-12.345.678",
    gender: "Masculino",
    maritalStatus: "Casado",
    phone: "(37) 99921-4567",
    secondaryPhone: "(37) 3331-2211",
    email: "joao.silva@email.com",
    profession: "Motorista",
    zipCode: "35620-000",
    street: "Rua das Flores",
    number: "145",
    complement: "",
    neighborhood: "Centro",
    city: "Abaeté",
    state: "MG",
    emergencyContact: "Maria da Silva",
    emergencyPhone: "(37) 99822-3344",
    healthInsurance: "Particular",
    insuranceNumber: "",
    allergies: "Não possui alergias conhecidas.",
    medications:
      "Dipirona em caso de dor, conforme orientação médica.",
    observations:
      "Paciente em acompanhamento fisioterapêutico devido a dores lombares e redução de mobilidade.",
    status: "Em tratamento",
  },

  "2": {
    name: "Maria Aparecida",
    birthDate: "1972-08-22",
    cpf: "987.654.321-00",
    rg: "MG-98.765.432",
    gender: "Feminino",
    maritalStatus: "Casado",
    phone: "(37) 99876-2210",
    secondaryPhone: "",
    email: "maria.aparecida@email.com",
    profession: "Professora",
    zipCode: "35620-000",
    street: "Avenida Brasil",
    number: "320",
    complement: "",
    neighborhood: "São João",
    city: "Abaeté",
    state: "MG",
    emergencyContact: "José Aparecido",
    emergencyPhone: "(37) 99712-4455",
    healthInsurance: "Unimed",
    insuranceNumber: "123456789",
    allergies: "Alergia a anti-inflamatórios.",
    medications: "Losartana 50 mg.",
    observations:
      "Paciente realiza Pilates clínico para fortalecimento, equilíbrio e prevenção de dores.",
    status: "Ativo",
  },
};

type EditPatientPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPatientPage({
  params,
}: EditPatientPageProps) {
  const { id } = await params;

  const patient = patients[id] ?? patients["1"];

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

        <Link
          href={`/dashboard/pacientes/${id}`}
          className="flex items-center gap-1.5 font-medium text-slate-500 transition hover:text-cyan-700"
        >
          <UserRound className="h-4 w-4" />
          {patient.name}
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Editar
        </span>
      </nav>

      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <Link
            href={`/dashboard/pacientes/${id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o perfil
          </Link>

          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <Pencil className="h-4 w-4" />
            Atualização cadastral
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Editar paciente
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Atualize as informações cadastrais e de saúde de{" "}
            <strong>{patient.name}</strong>.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-sm font-bold text-amber-900">
            Modo de edição
          </p>

          <p className="mt-1 text-xs text-amber-700">
            Revise os dados antes de salvar.
          </p>
        </div>
      </section>

      <PatientForm
        initialData={patient}
        mode="edit"
        patientId={id}
      />
    </div>
  );
}