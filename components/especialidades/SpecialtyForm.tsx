"use client";

import {
  Banknote,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  FileText,
  Info,
  Loader2,
  Save,
  Settings2,
  Stethoscope,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  type FormEvent,
  useState,
} from "react";
type SpecialtyStatus = "Ativa" | "Inativa";

export type SpecialtyFormData = {
  name: string;
  slug: string;
  description: string;
  defaultDuration: string;
  price: string;
  status: SpecialtyStatus;
  patientInstructions: string;
  preparation: string;
  internalNotes: string;
};

type SpecialtyFormProps = {
  mode?: "create" | "edit";
  specialtyId?: number;
  initialData?: Partial<SpecialtyFormData>;
};

const initialFormData: SpecialtyFormData = {
  name: "",
  slug: "",
  description: "",
  defaultDuration: "50",
  price: "",
  status: "Ativa",
  patientInstructions: "",
  preparation: "",
  internalNotes: "",
};

const statuses: SpecialtyStatus[] = [
  "Ativa",
  "Inativa",
];

const durations = [
  "30",
  "40",
  "45",
  "50",
  "60",
  "75",
  "90",
];

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

const inputWithIconClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

const labelClass =
  "mb-2 block text-sm font-semibold text-slate-700";

const textareaClass =
  "min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100";

function createSlug(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function onlyNumbers(value: string) {
  return value.replace(/\D/g, "");
}

function formatCurrencyInput(value: string) {
  const numbers = onlyNumbers(value);

  if (!numbers) {
    return "";
  }

  const numericValue = Number(numbers) / 100;

  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);
}

function currencyToNumber(value: string) {
  if (!value) {
    return 0;
  }

  return Number(
    value
      .replace(/\./g, "")
      .replace(",", ".")
  );
}

export default function SpecialtyForm({
  mode = "create",
  specialtyId,
  initialData,
}: SpecialtyFormProps) {
  const router = useRouter();

  const [formData, setFormData] =
    useState<SpecialtyFormData>(() => ({
      ...initialFormData,
      ...initialData,
    }));

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  function updateField<
    Key extends keyof SpecialtyFormData
  >(
    field: Key,
    value: SpecialtyFormData[Key]
  ) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  }

  function handleNameChange(value: string) {
    setFormData((currentData) => ({
      ...currentData,
      name: value,
      slug:
        mode === "create"
          ? createSlug(value)
          : currentData.slug,
    }));
  }

  function validateForm() {
    if (formData.name.trim().length < 3) {
      alert(
        "Informe um nome válido para a especialidade."
      );

      return false;
    }

    if (formData.slug.trim().length < 3) {
      alert("Informe um slug válido.");

      return false;
    }

    if (
      formData.description.trim().length < 20
    ) {
      alert(
        "A descrição deve ter pelo menos 20 caracteres."
      );

      return false;
    }

    const duration = Number(
      formData.defaultDuration
    );

    if (
      !Number.isInteger(duration) ||
      duration <= 0
    ) {
      alert(
        "Informe uma duração válida para a consulta."
      );

      return false;
    }

    const price = currencyToNumber(
      formData.price
    );

    if (price <= 0) {
      alert(
        "Informe um valor válido para a consulta."
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

    const specialtyData = {
      name: formData.name.trim(),
      slug: formData.slug.trim(),
      description:
        formData.description.trim(),
      defaultDuration: Number(
        formData.defaultDuration
      ),
      price: currencyToNumber(
        formData.price
      ),
      status: formData.status,
      patientInstructions:
        formData.patientInstructions.trim(),
      preparation:
        formData.preparation.trim(),
      internalNotes:
        formData.internalNotes.trim(),
    };

    window.setTimeout(() => {
      if (mode === "edit") {
        console.log(
          "Especialidade atualizada:",
          {
            specialtyId,
            ...specialtyData,
          }
        );

        setSuccessMessage(
          "Especialidade atualizada com sucesso."
        );
      } else {
        console.log(
          "Nova especialidade cadastrada:",
          specialtyData
        );

        setSuccessMessage(
          "Especialidade cadastrada com sucesso."
        );
      }

      setIsSubmitting(false);

      window.setTimeout(() => {
        if (
          mode === "edit" &&
          specialtyId
        ) {
          router.push(
            `/dashboard/especialidades/${specialtyId}`
          );

          return;
        }

        router.push(
          "/dashboard/especialidades"
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
            <Settings2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

            <div>
              <p className="text-sm font-bold text-amber-900">
                Você está editando uma especialidade
              </p>

              <p className="mt-1 text-sm leading-6 text-amber-700">
                Alterações em duração e valor poderão
                afetar novos agendamentos.
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
              <Stethoscope className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Identificação
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informe o nome e a descrição da
                especialidade.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:p-6">
          <div>
            <label
              htmlFor="name"
              className={labelClass}
            >
              Nome da especialidade *
            </label>

            <div className="relative">
              <Stethoscope className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(event) =>
                  handleNameChange(
                    event.target.value
                  )
                }
                placeholder="Exemplo: Fisioterapia Ortopédica"
                className={inputWithIconClass}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="slug"
              className={labelClass}
            >
              Slug *
            </label>

            <input
              id="slug"
              type="text"
              value={formData.slug}
              onChange={(event) =>
                updateField(
                  "slug",
                  createSlug(
                    event.target.value
                  )
                )
              }
              placeholder="fisioterapia-ortopedica"
              className={inputClass}
              required
            />

            <p className="mt-2 text-xs text-slate-500">
              Identificador usado internamente nas
              rotas e integrações.
            </p>
          </div>

          <div>
            <label
              htmlFor="description"
              className={labelClass}
            >
              Descrição *
            </label>

            <textarea
              id="description"
              value={formData.description}
              onChange={(event) =>
                updateField(
                  "description",
                  event.target.value
                )
              }
              placeholder="Descreva os tratamentos e objetivos desta especialidade..."
              className={textareaClass}
              required
            />

            <div className="mt-2 flex items-center justify-between gap-4 text-xs text-slate-400">
              <span>
                Mínimo de 20 caracteres
              </span>

              <span>
                {formData.description.length} caracteres
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
              <Settings2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Configuração
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Defina a duração, o valor e o status.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          <div>
            <label
              htmlFor="defaultDuration"
              className={labelClass}
            >
              Duração padrão *
            </label>

            <div className="relative">
              <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                id="defaultDuration"
                value={
                  formData.defaultDuration
                }
                onChange={(event) =>
                  updateField(
                    "defaultDuration",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
                required
              >
                {durations.map((duration) => (
                  <option
                    key={duration}
                    value={duration}
                  >
                    {duration} minutos
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className={labelClass}
            >
              Valor da consulta *
            </label>

            <div className="relative">
              <Banknote className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="price"
                type="text"
                inputMode="numeric"
                value={formData.price}
                onChange={(event) =>
                  updateField(
                    "price",
                    formatCurrencyInput(
                      event.target.value
                    )
                  )
                }
                placeholder="0,00"
                className={inputWithIconClass}
                required
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Valor em reais.
            </p>
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
              onChange={(event) =>
                updateField(
                  "status",
                  event.target
                    .value as SpecialtyStatus
                )
              }
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
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Info className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Orientações ao paciente
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Cadastre instruções que poderão ser
                enviadas antes da consulta.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:p-6 xl:grid-cols-2">
          <div>
            <label
              htmlFor="patientInstructions"
              className={labelClass}
            >
              Orientações gerais
            </label>

            <textarea
              id="patientInstructions"
              value={
                formData.patientInstructions
              }
              onChange={(event) =>
                updateField(
                  "patientInstructions",
                  event.target.value
                )
              }
              placeholder="Exemplo: comparecer com 10 minutos de antecedência..."
              className={textareaClass}
            />
          </div>

          <div>
            <label
              htmlFor="preparation"
              className={labelClass}
            >
              Preparo necessário
            </label>

            <textarea
              id="preparation"
              value={formData.preparation}
              onChange={(event) =>
                updateField(
                  "preparation",
                  event.target.value
                )
              }
              placeholder="Exemplo: utilizar roupas confortáveis e levar exames anteriores..."
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
                Observações internas
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informações visíveis somente para a
                equipe administrativa.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <label
            htmlFor="internalNotes"
            className={labelClass}
          >
            Observações
          </label>

          <textarea
            id="internalNotes"
            value={formData.internalNotes}
            onChange={(event) =>
              updateField(
                "internalNotes",
                event.target.value
              )
            }
            placeholder="Anotações internas sobre a especialidade..."
            className={textareaClass}
          />
        </div>
      </section>

      <div className="sticky bottom-4 z-10 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur">
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() =>
              router.push(
                mode === "edit" &&
                  specialtyId
                  ? `/dashboard/especialidades/${specialtyId}`
                  : "/dashboard/especialidades"
              )
            }
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            <ChevronLeft className="h-4 w-4" />

            {mode === "edit"
              ? "Cancelar edição"
              : "Voltar para especialidades"}
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
                  ? "Atualizando especialidade..."
                  : "Salvando especialidade..."}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />

                {mode === "edit"
                  ? "Salvar alterações"
                  : "Cadastrar especialidade"}
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}