"use client";

import {
  BriefcaseMedical,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  FileText,
  Loader2,
  Mail,
  Phone,
  Save,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";
import type {
  ProfessionalStatus,
} from "./professionals-data";

export type ProfessionalFormData = {
  name: string;
  specialty: string;
  registrationType: string;
  registrationNumber: string;
  phone: string;
  email: string;
  status: ProfessionalStatus;
  workingDays: string[];
  startTime: string;
  endTime: string;
  biography: string;
};

type ProfessionalFormProps = {
  mode?: "create" | "edit";
  professionalId?: number;
  initialData?: Partial<ProfessionalFormData>;
};

const initialFormData: ProfessionalFormData = {
  name: "",
  specialty: "",
  registrationType: "CREFITO",
  registrationNumber: "",
  phone: "",
  email: "",
  status: "Ativo",
  workingDays: [],
  startTime: "08:00",
  endTime: "18:00",
  biography: "",
};

const specialties = [
  "Fisioterapia Ortopédica",
  "Fisioterapia Esportiva",
  "Fisioterapia Neurológica",
  "Fisioterapia Respiratória",
  "Fisioterapia Pediátrica",
  "Fisioterapia Geriátrica",
  "Dermato-funcional",
  "Reabilitação Vestibular",
  "Reabilitação das DTM's",
  "Pilates Clínico",
];

const registrationTypes = [
  "CREFITO",
  "CRM",
  "CRP",
  "CREF",
  "COREN",
  "Outro",
];

const statuses: ProfessionalStatus[] = [
  "Ativo",
  "Inativo",
  "Férias",
];

const weekDays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

const inputWithIconClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

const labelClass =
  "mb-2 block text-sm font-semibold text-slate-700";

const textareaClass =
  "min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(value: string) {
  const numbers = onlyNumbers(value).slice(0, 11);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 6) {
    return numbers.replace(
      /^(\d{2})(\d+)/,
      "($1) $2"
    );
  }

  if (numbers.length <= 10) {
    return numbers.replace(
      /^(\d{2})(\d{4})(\d+)/,
      "($1) $2-$3"
    );
  }

  return numbers.replace(
    /^(\d{2})(\d{5})(\d+)/,
    "($1) $2-$3"
  );
}

export default function ProfessionalForm({
  mode = "create",
  professionalId,
  initialData,
}: ProfessionalFormProps) {
  const router = useRouter();

  const [formData, setFormData] =
  useState<ProfessionalFormData>(() => ({
    ...initialFormData,
    ...initialData,
    workingDays: initialData?.workingDays
      ? [...initialData.workingDays]
      : [...initialFormData.workingDays],
  }));

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  function updateField<
    Key extends keyof ProfessionalFormData
  >(
    field: Key,
    value: ProfessionalFormData[Key]
  ) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  }

  function handleWorkingDayChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const { value, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      workingDays: checked
        ? [...currentData.workingDays, value]
        : currentData.workingDays.filter(
            (day) => day !== value
          ),
    }));
  }

  function validateForm() {
    if (formData.name.trim().length < 3) {
      alert("Informe o nome completo do profissional.");
      return false;
    }

    if (!formData.specialty) {
      alert("Selecione a especialidade.");
      return false;
    }

    if (!formData.registrationType) {
      alert("Selecione o tipo de registro profissional.");
      return false;
    }

    if (
      formData.registrationNumber.trim().length < 3
    ) {
      alert("Informe o número do registro profissional.");
      return false;
    }

    if (
      onlyNumbers(formData.phone).length < 10
    ) {
      alert("Informe um telefone válido.");
      return false;
    }

    if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {
      alert("Informe um e-mail válido.");
      return false;
    }

    if (
      formData.status === "Ativo" &&
      formData.workingDays.length === 0
    ) {
      alert(
        "Selecione pelo menos um dia de atendimento."
      );
      return false;
    }

    if (
      formData.status === "Ativo" &&
      (!formData.startTime || !formData.endTime)
    ) {
      alert("Informe os horários de atendimento.");
      return false;
    }

    if (
      formData.status === "Ativo" &&
      formData.startTime >= formData.endTime
    ) {
      alert(
        "O horário final deve ser maior que o horário inicial."
      );
      return false;
    }

    return true;
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");

    setTimeout(() => {
      if (mode === "edit") {
        console.log("Profissional atualizado:", {
          professionalId,
          ...formData,
        });

        setSuccessMessage(
          "Profissional atualizado com sucesso."
        );
      } else {
        console.log(
          "Novo profissional cadastrado:",
          formData
        );

        setSuccessMessage(
          "Profissional cadastrado com sucesso."
        );
      }

      setIsSubmitting(false);

      setTimeout(() => {
        if (
          mode === "edit" &&
          professionalId
        ) {
          router.push(
            `/dashboard/profissionais/${professionalId}`
          );

          return;
        }

        router.push(
          "/dashboard/profissionais"
        );
      }, 1200);
    }, 800);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {successMessage && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          {successMessage}
        </div>
      )}
      {mode === "edit" && (
  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
    <div className="flex items-start gap-3">
      <BriefcaseMedical className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

      <div>
        <p className="text-sm font-bold text-amber-900">
          Você está editando um profissional
        </p>

        <p className="mt-1 text-sm leading-6 text-amber-700">
          Revise os dados antes de salvar. Alterações em
          horários e dias de atendimento podem afetar a
          agenda.
        </p>
      </div>
    </div>
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
                Informe os dados de contato do profissional.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className={labelClass}
            >
              Nome completo *
            </label>

            <div className="relative">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(event) =>
                  updateField(
                    "name",
                    event.target.value
                  )
                }
                placeholder="Nome completo do profissional"
                className={inputWithIconClass}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="status"
              className={labelClass}
            >
              Status *
            </label>

            <select
              id="status"
              value={formData.status}
              onChange={(event) => {
  const newStatus =
    event.target.value as ProfessionalStatus;

  setFormData((currentData) => ({
    ...currentData,
    status: newStatus,
    workingDays:
      newStatus === "Inativo"
        ? []
        : currentData.workingDays,
    startTime:
      newStatus === "Inativo"
        ? ""
        : currentData.startTime,
    endTime:
      newStatus === "Inativo"
        ? ""
        : currentData.endTime,
  }));
}}
              className={inputClass}
            >
              {statuses.map((status) => (
                <option
                  key={status}
                  value={status}
                >
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="phone"
              className={labelClass}
            >
              Telefone *
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
                    formatPhone(
                      event.target.value
                    )
                  )
                }
                placeholder="(37) 99999-9999"
                maxLength={15}
                className={inputWithIconClass}
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className={labelClass}
            >
              E-mail *
            </label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(event) =>
                  updateField(
                    "email",
                    event.target.value
                  )
                }
                placeholder="profissional@clinica.com.br"
                className={inputWithIconClass}
                required
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
              <BriefcaseMedical className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Dados profissionais
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informe a especialidade e o registro profissional.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          <div className="xl:col-span-3">
            <label
              htmlFor="specialty"
              className={labelClass}
            >
              Especialidade *
            </label>

            <div className="relative">
              <Stethoscope className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                id="specialty"
                value={formData.specialty}
                onChange={(event) =>
                  updateField(
                    "specialty",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
                required
              >
                <option value="">
                  Selecione a especialidade
                </option>

                {specialties.map((specialty) => (
                  <option
                    key={specialty}
                    value={specialty}
                  >
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="registrationType"
              className={labelClass}
            >
              Tipo de registro *
            </label>

            <select
              id="registrationType"
              value={formData.registrationType}
              onChange={(event) =>
                updateField(
                  "registrationType",
                  event.target.value
                )
              }
              className={inputClass}
              required
            >
              {registrationTypes.map(
                (registrationType) => (
                  <option
                    key={registrationType}
                    value={registrationType}
                  >
                    {registrationType}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="sm:col-span-1 xl:col-span-2">
            <label
              htmlFor="registrationNumber"
              className={labelClass}
            >
              Número do registro *
            </label>

            <input
              id="registrationNumber"
              type="text"
              value={formData.registrationNumber}
              onChange={(event) =>
                updateField(
                  "registrationNumber",
                  event.target.value.toUpperCase()
                )
              }
              placeholder="Exemplo: 123456-F"
              className={inputClass}
              required
            />
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <CalendarDays className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Dias de atendimento
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Selecione os dias em que o profissional atende.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {weekDays.map((day) => {
              const checked =
                formData.workingDays.includes(day);

              return (
                <label
                  key={day}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
                    checked
                      ? "border-cyan-300 bg-cyan-50"
                      : "border-slate-200 bg-slate-50 hover:border-cyan-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    value={day}
                    checked={checked}
                    onChange={
                      handleWorkingDayChange
                    }
                    className="h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-500"
                  />

                  <span
                    className={`text-sm font-semibold ${
                      checked
                        ? "text-cyan-800"
                        : "text-slate-700"
                    }`}
                  >
                    {day}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Clock3 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Horário de atendimento
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Defina o início e o término da jornada.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
          <div>
            <label
              htmlFor="startTime"
              className={labelClass}
            >
              Horário inicial *
            </label>

            <div className="relative">
              <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="startTime"
                type="time"
                value={formData.startTime}
                disabled={formData.status === "Inativo"}
                onChange={(event) =>
                  updateField(
                    "startTime",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="endTime"
              className={labelClass}
            >
              Horário final *
            </label>

            <div className="relative">
              <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="endTime"
                type="time"
                value={formData.endTime}
                onChange={(event) =>
                  updateField(
                    "endTime",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
              />
            </div>
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
                Apresentação profissional
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Escreva um breve resumo sobre a experiência.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <label
            htmlFor="biography"
            className={labelClass}
          >
            Biografia
          </label>

          <textarea
            id="biography"
            value={formData.biography}
            onChange={(event) =>
              updateField(
                "biography",
                event.target.value
              )
            }
            placeholder="Especialidades, experiência e diferenciais do profissional..."
            className={textareaClass}
          />

          <p className="mt-2 text-right text-xs text-slate-400">
            {formData.biography.length} caracteres
          </p>
        </div>
      </section>

      <div className="sticky bottom-4 z-10 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur">
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() =>
              router.push(
                mode === "edit" &&
                  professionalId
                  ? `/dashboard/profissionais/${professionalId}`
                  : "/dashboard/profissionais"
              )
            }
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            <ChevronLeft className="h-4 w-4" />

            {mode === "edit"
              ? "Cancelar edição"
              : "Voltar para profissionais"}
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 text-sm font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />

                {mode === "edit"
                  ? "Atualizando profissional..."
                  : "Salvando profissional..."}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />

                {mode === "edit"
                  ? "Salvar alterações"
                  : "Cadastrar profissional"}
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}