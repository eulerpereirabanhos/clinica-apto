import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarClock,
  ChevronRight,
} from "lucide-react";
import AppointmentForm, {
  type AppointmentFormData,
} from "@/components/dashboard/agenda/AppointmentForm";
import {
  appointments,
} from "@/components/dashboard/agenda/agenda-data";

type EditAppointmentPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditAppointmentPage({
  params,
}: EditAppointmentPageProps) {
  const { id } = await params;

  const appointmentId = Number(id);

  if (
    !Number.isInteger(appointmentId) ||
    appointmentId <= 0
  ) {
    notFound();
  }

  const appointment = appointments.find(
    (item) => item.id === appointmentId
  );

  if (!appointment) {
    notFound();
  }

  const initialData: AppointmentFormData = {
    patientName: appointment.patientName,
    professional: appointment.professional,
    specialty: appointment.specialty,
    date: appointment.date,
    time: appointment.time,
    duration: String(appointment.duration),
    room: appointment.room,
    status: appointment.status,
    phone: appointment.phone,
    observations:
      appointment.observations ?? "",
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
          href="/dashboard/agenda"
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          Agenda
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <Link
          href={`/dashboard/agenda/${appointment.id}`}
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          Consulta #{appointment.id}
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Editar
        </span>
      </nav>

      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
            <CalendarClock className="h-4 w-4" />
            Edição de agendamento
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Editar consulta
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Altere o profissional, data, horário, sala,
            especialidade ou demais informações do
            atendimento.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-sm font-bold text-amber-900">
            Reagendamento
          </p>

          <p className="mt-1 text-xs text-amber-700">
            Alterações ainda são demonstrativas.
          </p>
        </div>
      </section>

      <AppointmentForm
        mode="edit"
        appointmentId={appointment.id}
        initialData={initialData}
      />
    </div>
  );
}