"use client";

import {
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  Clock3,
  FileText,
  Loader2,
  MapPin,
  Phone,
  Save,
  Stethoscope,
  UserRound,
  UsersRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  type ChangeEvent,
  type FormEvent,
  useMemo,
  useState,
} from "react";
import type {
  AppointmentStatus,
} from "./agenda-data";
export type AppointmentFormData = {
  patientName: string;
  professional: string;
  specialty: string;
  date: string;
  time: string;
  duration: string;
  room: string;
  status: AppointmentStatus;
  phone: string;
  observations: string;
};
type AppointmentFormProps = {
  mode?: "create" | "edit";
  appointmentId?: number;
  initialData?: Partial<AppointmentFormData>;
};

const initialFormData: AppointmentFormData = {
  patientName: "",
  professional: "",
  specialty: "",
  date: "2026-07-21",
  time: "",
  duration: "50",
  room: "",
  status: "Agendada",
  phone: "",
  observations: "",
};

const patients = [
  {
    name: "João da Silva",
    phone: "(37) 99921-4567",
  },
  {
    name: "Maria Aparecida",
    phone: "(37) 99876-2210",
  },
  {
    name: "Carlos Henrique",
    phone: "(37) 99781-4587",
  },
  {
    name: "Ana Paula Ferreira",
    phone: "(37) 99645-7812",
  },
  {
    name: "Pedro Gomes",
    phone: "(37) 99561-2204",
  },
  {
    name: "Luciana Mendes",
    phone: "(37) 99418-6632",
  },
];

const professionals = [
  "Dr. Eric Rodrigues",
  "Dra. Camila Alves",
];

const specialties = [
  "Fisioterapia ortopédica",
  "Fisioterapia esportiva",
  "Fisioterapia neurológica",
  "Fisioterapia respiratória",
  "Fisioterapia pediátrica",
  "Fisioterapia geriátrica",
  "Fisioterapia dermato-funcional",
  "Reabilitação vestibular",
  "Reabilitação das DTM's",
  "Pilates clínico",
];

const rooms = [
  "Sala 01",
  "Sala 02",
  "Sala 03",
  "Sala Infantil",
  "Sala Pilates",
];

const statuses: AppointmentStatus[] = [
  "Agendada",
  "Confirmada",
  "Em atendimento",
  "Finalizada",
  "Cancelada",
  "Não compareceu",
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

function calculateEndTime(
  time: string,
  duration: string
) {
  if (!time || !duration) {
    return "";
  }

  const [hours, minutes] = time
    .split(":")
    .map(Number);

  const totalMinutes =
    hours * 60 + minutes + Number(duration);

  const endHours = Math.floor(
    totalMinutes / 60
  ) % 24;

  const endMinutes = totalMinutes % 60;

  return `${String(endHours).padStart(
    2,
    "0"
  )}:${String(endMinutes).padStart(2, "0")}`;
}

export default function AppointmentForm({
  mode = "create",
  appointmentId,
  initialData,
}: AppointmentFormProps) {
  const router = useRouter();

  const [formData, setFormData] =
  useState<AppointmentFormData>(() => ({
    ...initialFormData,
    ...initialData,
  }));

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const endTime = useMemo(
    () =>
      calculateEndTime(
        formData.time,
        formData.duration
      ),
    [formData.time, formData.duration]
  );

  function updateField<
    Key extends keyof AppointmentFormData
  >(
    field: Key,
    value: AppointmentFormData[Key]
  ) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  }

  function handlePatientChange(
    event: ChangeEvent<HTMLSelectElement>
  ) {
    const patientName = event.target.value;

    const selectedPatient = patients.find(
      (patient) => patient.name === patientName
    );

    setFormData((currentData) => ({
      ...currentData,
      patientName,
      phone:
        selectedPatient?.phone ??
        currentData.phone,
    }));
  }

  function validateForm() {
    if (!formData.patientName) {
      alert("Selecione o paciente.");
      return false;
    }

    if (!formData.professional) {
      alert("Selecione o profissional.");
      return false;
    }

    if (!formData.specialty) {
      alert("Selecione a especialidade.");
      return false;
    }

    if (!formData.date) {
      alert("Informe a data da consulta.");
      return false;
    }

    if (!formData.time) {
      alert("Informe o horário da consulta.");
      return false;
    }
    if (
  formData.time < "06:00" ||
  formData.time > "22:00"
) {
  alert(
    "O horário da consulta deve estar entre 06:00 e 22:00."
  );

  return false;
}

    if (!formData.duration) {
      alert("Informe a duração da consulta.");
      return false;
    }

    if (!formData.room) {
      alert("Selecione a sala de atendimento.");
      return false;
    }

    if (
      onlyNumbers(formData.phone).length < 10
    ) {
      alert("Informe um telefone válido.");
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
    if (Number(formData.duration) <= 0) {
  alert("A duração da consulta é inválida.");
  return false;
}

    setIsSubmitting(true);
    setSuccessMessage("");

    const appointmentData = {
      ...formData,
      endTime,
      duration: Number(formData.duration),
    };

    setTimeout(() => {
  if (mode === "edit") {
    console.log("Consulta atualizada:", {
      appointmentId,
      ...appointmentData,
    });

    setSuccessMessage(
      "Consulta atualizada com sucesso."
    );
  } else {
    console.log(
      "Nova consulta cadastrada:",
      appointmentData
    );

    setSuccessMessage(
      "Consulta cadastrada com sucesso."
    );
  }
  

  setIsSubmitting(false);

  setTimeout(() => {
    if (mode === "edit" && appointmentId) {
      router.push(
        `/dashboard/agenda/${appointmentId}`
      );

      return;
    }

    router.push(
      `/dashboard/agenda?date=${formData.date}`
    );
  }, 1200);
}, 900);
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
      <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />

      <div>
        <p className="text-sm font-bold text-amber-900">
          Você está editando uma consulta
        </p>

        <p className="mt-1 text-sm leading-6 text-amber-700">
          Alterar a data ou o horário caracteriza um
          reagendamento. Confirme os novos dados com o
          paciente antes de salvar.
        </p>
      </div>
    </div>
  </div>
)}

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
              <UsersRound className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Paciente e atendimento
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Selecione o paciente, profissional e
                especialidade.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-3">
          <div>
            <label
              htmlFor="patientName"
              className={labelClass}
            >
              Paciente *
            </label>

            <div className="relative">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                id="patientName"
                value={formData.patientName}
                onChange={handlePatientChange}
                className={inputWithIconClass}
                required
              >
                <option value="">
                  Selecione o paciente
                </option>

                {patients.map((patient) => (
                  <option
                    key={patient.name}
                    value={patient.name}
                  >
                    {patient.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="professional"
              className={labelClass}
            >
              Profissional *
            </label>

            <div className="relative">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                id="professional"
                value={formData.professional}
                onChange={(event) =>
                  updateField(
                    "professional",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
                required
              >
                <option value="">
                  Selecione o profissional
                </option>

                {professionals.map(
                  (professional) => (
                    <option
                      key={professional}
                      value={professional}
                    >
                      {professional}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>

          <div>
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
              htmlFor="phone"
              className={labelClass}
            >
              Telefone do paciente *
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

          <div>
            <label
              htmlFor="status"
              className={labelClass}
            >
              Status inicial
            </label>

            <select
              id="status"
              value={formData.status}
              onChange={(event) =>
                updateField(
                  "status",
                  event.target
                    .value as AppointmentStatus
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
              <CalendarDays className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Data e horário
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Defina quando a consulta será
                realizada.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          <div>
            <label
              htmlFor="date"
              className={labelClass}
            >
              Data *
            </label>

            <div className="relative">
              <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={(event) =>
                  updateField(
                    "date",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="time"
              className={labelClass}
            >
              Horário inicial *
            </label>

            <div className="relative">
              <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="time"
                type="time"
                value={formData.time}
                onChange={(event) =>
                  updateField(
                    "time",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="duration"
              className={labelClass}
            >
              Duração *
            </label>

            <select
              id="duration"
              value={formData.duration}
              onChange={(event) =>
                updateField(
                  "duration",
                  event.target.value
                )
              }
              className={inputClass}
              required
            >
              <option value="30">
                30 minutos
              </option>

              <option value="40">
                40 minutos
              </option>

              <option value="50">
                50 minutos
              </option>

              <option value="60">
                1 hora
              </option>

              <option value="90">
                1 hora e 30 minutos
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="endTime"
              className={labelClass}
            >
              Horário final
            </label>

            <input
              id="endTime"
              type="time"
              value={endTime}
              readOnly
              className={`${inputClass} cursor-not-allowed text-slate-500`}
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
                Local do atendimento
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Informe a sala em que a consulta
                acontecerá.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
          <div>
            <label
              htmlFor="room"
              className={labelClass}
            >
              Sala *
            </label>

            <div className="relative">
              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                id="room"
                value={formData.room}
                onChange={(event) =>
                  updateField(
                    "room",
                    event.target.value
                  )
                }
                className={inputWithIconClass}
                required
              >
                <option value="">
                  Selecione a sala
                </option>

                {rooms.map((room) => (
                  <option
                    key={room}
                    value={room}
                  >
                    {room}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-900">
              <Clock3 className="h-4 w-4" />
              Resumo do horário
            </div>

            <p className="mt-2 text-sm text-cyan-800">
              {formData.date && formData.time ? (
                <>
                  Consulta marcada para{" "}
                  <strong>
                    {formData.date
                      .split("-")
                      .reverse()
                      .join("/")}
                  </strong>
                  , das{" "}
                  <strong>
                    {formData.time}
                  </strong>{" "}
                  até{" "}
                  <strong>
                    {endTime || "--:--"}
                  </strong>
                  .
                </>
              ) : (
                "Selecione uma data e um horário."
              )}
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
                Observações
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Adicione orientações importantes para
                o atendimento.
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <label
            htmlFor="observations"
            className={labelClass}
          >
            Observações da consulta
          </label>

          <textarea
            id="observations"
            value={formData.observations}
            onChange={(event) =>
              updateField(
                "observations",
                event.target.value
              )
            }
            placeholder="Exemplo: paciente deve levar exames anteriores..."
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
    mode === "edit" && appointmentId
      ? `/dashboard/agenda/${appointmentId}`
      : "/dashboard/agenda"
  )
}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            <ChevronLeft className="h-4 w-4" />
            {mode === "edit"
  ? "Cancelar edição"
  : "Voltar para agenda"}
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
      ? "Atualizando consulta..."
      : "Salvando consulta..."}
  </>
) : (
  <>
    <Save className="h-4 w-4" />

    {mode === "edit"
      ? "Salvar alterações"
      : "Agendar consulta"}
  </>
)}
          </button>
        </div>
      </div>
    </form>
  );
}