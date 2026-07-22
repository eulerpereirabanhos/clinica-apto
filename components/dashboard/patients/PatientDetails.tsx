import {
  CalendarDays,
  FileText,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export type PatientDetailsData = {
  id: number;
  name: string;
  initials: string;
  birthDate: string;
  age: number;
  cpf: string;
  rg: string;
  gender: string;
  maritalStatus: string;
  profession: string;
  phone: string;
  secondaryPhone: string;
  email: string;
  emergencyContact: string;
  emergencyPhone: string;
  address: string;
  healthInsurance: string;
  insuranceNumber: string;
  allergies: string;
  medications: string;
  observations: string;
  status: string;
  statusClass: string;
};

type PatientDetailsProps = {
  patient: PatientDetailsData;
};

const infoClass =
  "rounded-2xl border border-slate-200 bg-slate-50 p-4";

const labelClass =
  "text-xs font-bold uppercase tracking-wide text-slate-400";

const valueClass =
  "mt-1 text-sm font-semibold text-slate-800";

export default function PatientDetails({
  patient,
}: PatientDetailsProps) {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-cyan-50 text-xl font-extrabold text-cyan-800">
              {patient.initials}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-950">
                  {patient.name}
                </h2>

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${patient.statusClass}`}
                >
                  {patient.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Paciente #{String(patient.id).padStart(4, "0")}
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-cyan-50 px-4 py-3 text-sm text-cyan-800">
            <p className="font-bold">Cadastro ativo</p>

            <p className="mt-1 text-xs text-cyan-700">
              Última atualização: 21/07/2026
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
              <UserRound className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Dados pessoais
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informações cadastrais do paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          <div className={infoClass}>
            <p className={labelClass}>Data de nascimento</p>
            <p className={valueClass}>{patient.birthDate}</p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Idade</p>
            <p className={valueClass}>{patient.age} anos</p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>CPF</p>
            <p className={valueClass}>{patient.cpf}</p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>RG</p>
            <p className={valueClass}>{patient.rg}</p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Gênero</p>
            <p className={valueClass}>{patient.gender}</p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Estado civil</p>
            <p className={valueClass}>{patient.maritalStatus}</p>
          </div>

          <div className={`${infoClass} sm:col-span-2`}>
            <p className={labelClass}>Profissão</p>
            <p className={valueClass}>{patient.profession}</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
              <Phone className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Contato
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Telefones, e-mail e contato de emergência.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          <div className={infoClass}>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-slate-400" />
              <p className={labelClass}>Telefone principal</p>
            </div>

            <p className={valueClass}>{patient.phone}</p>
          </div>

          <div className={infoClass}>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-slate-400" />
              <p className={labelClass}>Telefone secundário</p>
            </div>

            <p className={valueClass}>{patient.secondaryPhone}</p>
          </div>

          <div className={`${infoClass} sm:col-span-2`}>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-400" />
              <p className={labelClass}>E-mail</p>
            </div>

            <p className={valueClass}>{patient.email}</p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Contato de emergência</p>
            <p className={valueClass}>{patient.emergencyContact}</p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Telefone de emergência</p>
            <p className={valueClass}>{patient.emergencyPhone}</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <MapPin className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Endereço
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Localização residencial cadastrada.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className={infoClass}>
            <p className={labelClass}>Endereço completo</p>
            <p className={valueClass}>{patient.address}</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-700">
              <HeartPulse className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Informações de saúde
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Convênio, alergias e medicamentos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
          <div className={infoClass}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-slate-400" />
              <p className={labelClass}>Convênio</p>
            </div>

            <p className={valueClass}>
              {patient.healthInsurance}
            </p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Número da carteirinha</p>
            <p className={valueClass}>
              {patient.insuranceNumber}
            </p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Alergias</p>
            <p className={`${valueClass} leading-6`}>
              {patient.allergies}
            </p>
          </div>

          <div className={infoClass}>
            <p className={labelClass}>Medicamentos em uso</p>
            <p className={`${valueClass} leading-6`}>
              {patient.medications}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Observações gerais
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informações importantes para o atendimento.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className={infoClass}>
            <p className={`${valueClass} mt-0 leading-7`}>
              {patient.observations}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-200 bg-cyan-50/50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />

          <div>
            <h2 className="font-bold text-cyan-950">
              Dados demonstrativos
            </h2>

            <p className="mt-1 text-sm leading-6 text-cyan-800">
              As informações deste perfil ainda não estão conectadas ao
              banco de dados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}