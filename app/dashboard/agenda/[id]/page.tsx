import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import AppointmentDetails from "@/components/dashboard/agenda/AppointmentDetails";
import {
  appointments,
} from "@/components/dashboard/agenda/agenda-data";

type AppointmentDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AppointmentDetailsPage({
  params,
}: AppointmentDetailsPageProps) {
  const { id } = await params;

  const appointmentId = Number(id);

  const appointment = appointments.find(
    (item) => item.id === appointmentId
  );

  if (!appointment) {
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
          href="/dashboard/agenda"
          className="font-medium text-slate-500 transition hover:text-cyan-700"
        >
          Agenda
        </Link>

        <ChevronRight className="h-4 w-4 text-slate-300" />

        <span className="font-semibold text-slate-900">
          Consulta #{appointment.id}
        </span>
      </nav>

      <section>
        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
          <CalendarDays className="h-4 w-4" />
          Detalhes do agendamento
        </div>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Consulta de {appointment.patientName}
        </h1>

        <p className="mt-2 max-w-2xl text-slate-600">
          Consulte os dados do atendimento e atualize o status
          da consulta.
        </p>
      </section>

      <AppointmentDetails appointment={appointment} />
    </div>
  );
}