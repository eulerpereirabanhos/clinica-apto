import Link from "next/link";
import {
  ArrowLeft,
  Pencil,
  UserRound,
} from "lucide-react";
import PatientDetails, {
  type PatientDetailsData,
} from "@/components/dashboard/patients/PatientDetails";
import PatientHistory from "@/components/dashboard/patients/PatientHistory";

const patients: Record<string, PatientDetailsData> = {
  "1": {
    id: 1,
    name: "João da Silva",
    initials: "JS",
    birthDate: "15/03/1985",
    age: 41,
    cpf: "123.456.789-00",
    rg: "MG-12.345.678",
    gender: "Masculino",
    maritalStatus: "Casado",
    profession: "Motorista",
    phone: "(37) 99921-4567",
    secondaryPhone: "(37) 3331-2211",
    email: "joao.silva@email.com",
    emergencyContact: "Maria da Silva",
    emergencyPhone: "(37) 99822-3344",
    address:
      "Rua das Flores, 145, Centro, Abaeté - MG, CEP 35620-000",
    healthInsurance: "Particular",
    insuranceNumber: "Não se aplica",
    allergies: "Não possui alergias conhecidas.",
    medications: "Dipirona em caso de dor, conforme orientação médica.",
    observations:
      "Paciente em acompanhamento fisioterapêutico devido a dores lombares e redução de mobilidade.",
    status: "Em tratamento",
    statusClass: "bg-cyan-50 text-cyan-700",
  },
  "2": {
    id: 2,
    name: "Maria Aparecida",
    initials: "MA",
    birthDate: "22/08/1972",
    age: 53,
    cpf: "987.654.321-00",
    rg: "MG-98.765.432",
    gender: "Feminino",
    maritalStatus: "Casada",
    profession: "Professora",
    phone: "(37) 99876-2210",
    secondaryPhone: "Não informado",
    email: "maria.aparecida@email.com",
    emergencyContact: "José Aparecido",
    emergencyPhone: "(37) 99712-4455",
    address:
      "Avenida Brasil, 320, São João, Abaeté - MG, CEP 35620-000",
    healthInsurance: "Unimed",
    insuranceNumber: "123456789",
    allergies: "Alergia a anti-inflamatórios.",
    medications: "Losartana 50 mg.",
    observations:
      "Paciente realiza Pilates clínico para fortalecimento, equilíbrio e prevenção de dores.",
    status: "Ativo",
    statusClass: "bg-emerald-50 text-emerald-700",
  },
};

type PatientPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PatientPage({
  params,
}: PatientPageProps) {
  const { id } = await params;

  const patient = patients[id] ?? patients["1"];

  return (
    <div className="space-y-6">
      <section className="flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
        <div>
          <Link
            href="/dashboard/pacientes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-cyan-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para pacientes
          </Link>

          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <UserRound className="h-4 w-4" />
            Perfil do paciente
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            {patient.name}
          </h1>

          <p className="mt-2 text-slate-600">
            Consulte os dados cadastrais, histórico e prontuário.
          </p>
        </div>

        <Link
          href={`/dashboard/pacientes/${patient.id}/editar`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800"
        >
          <Pencil className="h-4 w-4" />
          Editar paciente
        </Link>
      </section>

      <div className="grid gap-6 2xl:grid-cols-[1fr_1fr]">
        <PatientDetails patient={patient} />

        <PatientHistory />
      </div>
    </div>
  );
}