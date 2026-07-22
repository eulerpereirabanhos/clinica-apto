"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  FileText,
  HeartPulse,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Save,
  UserRound,
} from "lucide-react";

export type PatientFormData = {
  name: string;
  birthDate: string;
  cpf: string;
  rg: string;
  gender: string;
  maritalStatus: string;
  phone: string;
  secondaryPhone: string;
  email: string;
  profession: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  emergencyContact: string;
  emergencyPhone: string;
  healthInsurance: string;
  insuranceNumber: string;
  allergies: string;
  medications: string;
  observations: string;
  status: string;
};
type PatientFormProps = {
  initialData?: Partial<PatientFormData>;
  mode?: "create" | "edit";
  patientId?: string;
};

const initialFormData: PatientFormData = {
  name: "",
  birthDate: "",
  cpf: "",
  rg: "",
  gender: "",
  maritalStatus: "",
  phone: "",
  secondaryPhone: "",
  email: "",
  profession: "",
  zipCode: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "MG",
  emergencyContact: "",
  emergencyPhone: "",
  healthInsurance: "",
  insuranceNumber: "",
  allergies: "",
  medications: "",
  observations: "",
  status: "Ativo",
};

function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}

function formatCpf(value: string) {
  const numbers = onlyNumbers(value).slice(0, 11);

  return numbers
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatPhone(value: string) {
  const numbers = onlyNumbers(value).slice(0, 11);

  if (numbers.length <= 10) {
    return numbers
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return numbers
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function formatZipCode(value: string) {
  return onlyNumbers(value)
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
}

export default function PatientForm({
  initialData,
  mode = "create",
  patientId,
}: PatientFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<PatientFormData>({
    ...initialFormData,
    ...initialData,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function updateField(
    field: keyof PatientFormData,
    value: string
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  if (!formData.name.trim()) {
    alert("Informe o nome completo do paciente.");
    return;
  }

  if (!formData.birthDate) {
    alert("Informe a data de nascimento.");
    return;
  }

  if (onlyNumbers(formData.cpf).length !== 11) {
    alert("Informe um CPF com 11 números.");
    return;
  }

  if (onlyNumbers(formData.phone).length < 10) {
    alert("Informe um telefone válido.");
    return;
  }

  setIsSubmitting(true);
  setSuccessMessage("");

  setTimeout(() => {
    if (mode === "edit") {
      console.log("Paciente atualizado:", {
        patientId,
        ...formData,
      });

      setSuccessMessage("Paciente atualizado com sucesso.");
    } else {
      console.log("Paciente cadastrado:", formData);

      setSuccessMessage("Paciente cadastrado com sucesso.");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      if (mode === "edit" && patientId) {
        router.push(`/dashboard/pacientes/${patientId}`);
        return;
      }

      router.push("/dashboard/pacientes");
    }, 1200);
  }, 900);
}
  

  const inputClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

  const textareaClass =
    "min-h-28 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {successMessage && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          {successMessage}
        </div>
      )}

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
                Informações principais do paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          <div className="sm:col-span-2 xl:col-span-2">
            <label htmlFor="name" className={labelClass}>
              Nome completo *
            </label>

            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(event) =>
                updateField("name", event.target.value)
              }
              placeholder="Digite o nome completo"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="birthDate" className={labelClass}>
              Data de nascimento *
            </label>

            <input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(event) =>
                updateField("birthDate", event.target.value)
              }
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className={labelClass}>
              Gênero
            </label>

            <select
              id="gender"
              value={formData.gender}
              onChange={(event) =>
                updateField("gender", event.target.value)
              }
              className={inputClass}
            >
              <option value="">Selecione</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outro">Outro</option>
              <option value="Não informado">
                Prefiro não informar
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="cpf" className={labelClass}>
              CPF *
            </label>

            <input
              id="cpf"
              type="text"
              inputMode="numeric"
              value={formData.cpf}
              onChange={(event) =>
                updateField("cpf", formatCpf(event.target.value))
              }
              placeholder="000.000.000-00"
              maxLength={14}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="rg" className={labelClass}>
              RG
            </label>

            <input
              id="rg"
              type="text"
              value={formData.rg}
              onChange={(event) =>
                updateField("rg", event.target.value)
              }
              placeholder="Número do RG"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="maritalStatus" className={labelClass}>
              Estado civil
            </label>

            <select
              id="maritalStatus"
              value={formData.maritalStatus}
              onChange={(event) =>
                updateField("maritalStatus", event.target.value)
              }
              className={inputClass}
            >
              <option value="">Selecione</option>
              <option value="Solteiro">Solteiro(a)</option>
              <option value="Casado">Casado(a)</option>
              <option value="Divorciado">Divorciado(a)</option>
              <option value="Viúvo">Viúvo(a)</option>
              <option value="União estável">União estável</option>
            </select>
          </div>

          <div>
            <label htmlFor="profession" className={labelClass}>
              Profissão
            </label>

            <input
              id="profession"
              type="text"
              value={formData.profession}
              onChange={(event) =>
                updateField("profession", event.target.value)
              }
              placeholder="Profissão do paciente"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="status" className={labelClass}>
              Status
            </label>

            <select
              id="status"
              value={formData.status}
              onChange={(event) =>
                updateField("status", event.target.value)
              }
              className={inputClass}
            >
              <option value="Ativo">Ativo</option>
              <option value="Em tratamento">Em tratamento</option>
              <option value="Avaliação">Avaliação</option>
              <option value="Inativo">Inativo</option>
            </select>
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
                Telefone, e-mail e contato de emergência.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Telefone principal *
            </label>

            <div className="relative">
              <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={(event) =>
                  updateField(
                    "phone",
                    formatPhone(event.target.value)
                  )
                }
                placeholder="(37) 99999-9999"
                className={`${inputClass} pl-11`}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="secondaryPhone" className={labelClass}>
              Telefone secundário
            </label>

            <input
              id="secondaryPhone"
              type="tel"
              inputMode="numeric"
              value={formData.secondaryPhone}
              onChange={(event) =>
                updateField(
                  "secondaryPhone",
                  formatPhone(event.target.value)
                )
              }
              placeholder="(37) 99999-9999"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelClass}>
              E-mail
            </label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                placeholder="paciente@email.com"
                className={`${inputClass} pl-11`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="emergencyContact"
              className={labelClass}
            >
              Contato de emergência
            </label>

            <input
              id="emergencyContact"
              type="text"
              value={formData.emergencyContact}
              onChange={(event) =>
                updateField(
                  "emergencyContact",
                  event.target.value
                )
              }
              placeholder="Nome do responsável ou familiar"
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="emergencyPhone"
              className={labelClass}
            >
              Telefone de emergência
            </label>

            <input
              id="emergencyPhone"
              type="tel"
              inputMode="numeric"
              value={formData.emergencyPhone}
              onChange={(event) =>
                updateField(
                  "emergencyPhone",
                  formatPhone(event.target.value)
                )
              }
              placeholder="(37) 99999-9999"
              className={inputClass}
            />
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
                Endereço residencial do paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          <div>
            <label htmlFor="zipCode" className={labelClass}>
              CEP
            </label>

            <input
              id="zipCode"
              type="text"
              inputMode="numeric"
              value={formData.zipCode}
              onChange={(event) =>
                updateField(
                  "zipCode",
                  formatZipCode(event.target.value)
                )
              }
              placeholder="00000-000"
              maxLength={9}
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="street" className={labelClass}>
              Rua ou avenida
            </label>

            <input
              id="street"
              type="text"
              value={formData.street}
              onChange={(event) =>
                updateField("street", event.target.value)
              }
              placeholder="Nome da rua"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="number" className={labelClass}>
              Número
            </label>

            <input
              id="number"
              type="text"
              value={formData.number}
              onChange={(event) =>
                updateField("number", event.target.value)
              }
              placeholder="Número"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="complement" className={labelClass}>
              Complemento
            </label>

            <input
              id="complement"
              type="text"
              value={formData.complement}
              onChange={(event) =>
                updateField("complement", event.target.value)
              }
              placeholder="Casa, apartamento..."
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="neighborhood" className={labelClass}>
              Bairro
            </label>

            <input
              id="neighborhood"
              type="text"
              value={formData.neighborhood}
              onChange={(event) =>
                updateField(
                  "neighborhood",
                  event.target.value
                )
              }
              placeholder="Bairro"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="city" className={labelClass}>
              Cidade
            </label>

            <input
              id="city"
              type="text"
              value={formData.city}
              onChange={(event) =>
                updateField("city", event.target.value)
              }
              placeholder="Cidade"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="state" className={labelClass}>
              Estado
            </label>

            <select
              id="state"
              value={formData.state}
              onChange={(event) =>
                updateField("state", event.target.value)
              }
              className={inputClass}
            >
              <option value="MG">Minas Gerais</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="DF">Distrito Federal</option>
              <option value="BA">Bahia</option>
              <option value="PR">Paraná</option>
            </select>
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
                Convênio, alergias e medicamentos utilizados.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
          <div>
            <label
              htmlFor="healthInsurance"
              className={labelClass}
            >
              Convênio
            </label>

            <input
              id="healthInsurance"
              type="text"
              value={formData.healthInsurance}
              onChange={(event) =>
                updateField(
                  "healthInsurance",
                  event.target.value
                )
              }
              placeholder="Nome do convênio"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="insuranceNumber"
              className={labelClass}
            >
              Número da carteirinha
            </label>

            <input
              id="insuranceNumber"
              type="text"
              value={formData.insuranceNumber}
              onChange={(event) =>
                updateField(
                  "insuranceNumber",
                  event.target.value
                )
              }
              placeholder="Número da carteirinha"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="allergies" className={labelClass}>
              Alergias
            </label>

            <textarea
              id="allergies"
              value={formData.allergies}
              onChange={(event) =>
                updateField("allergies", event.target.value)
              }
              placeholder="Informe alergias conhecidas..."
              className={textareaClass}
            />
          </div>

          <div>
            <label htmlFor="medications" className={labelClass}>
              Medicamentos em uso
            </label>

            <textarea
              id="medications"
              value={formData.medications}
              onChange={(event) =>
                updateField(
                  "medications",
                  event.target.value
                )
              }
              placeholder="Informe os medicamentos utilizados..."
              className={textareaClass}
            />
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
                Observações
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informações adicionais sobre o paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <label htmlFor="observations" className={labelClass}>
            Observações gerais
          </label>

          <textarea
            id="observations"
            value={formData.observations}
            onChange={(event) =>
              updateField("observations", event.target.value)
            }
            placeholder="Adicione informações importantes para o atendimento..."
            className={`${textareaClass} min-h-36`}
          />
        </div>
      </section>

      <div className="sticky bottom-4 z-10 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur">
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() =>
  router.push(
    mode === "edit" && patientId
      ? `/dashboard/pacientes/${patientId}`
      : "/dashboard/pacientes"
  )
}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
  <>
    <Loader2 className="h-4 w-4 animate-spin" />
    {mode === "edit" ? "Atualizando..." : "Salvando..."}
  </>
) : (
  <>
    <Save className="h-4 w-4" />
    {mode === "edit"
      ? "Salvar alterações"
      : "Salvar paciente"}
  </>
)}
          </button>
        </div>
      </div>
    </form>
  );
}