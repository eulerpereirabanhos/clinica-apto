export type AppointmentStatus =
  | "Agendada"
  | "Confirmada"
  | "Em atendimento"
  | "Finalizada"
  | "Cancelada"
  | "Não compareceu";

export type Appointment = {
  id: number;
  patientId: number;
  patientName: string;
  patientInitials: string;
  professional: string;
  specialty: string;
  date: string;
  time: string;
  endTime: string;
  duration: number;
  room: string;
  status: AppointmentStatus;
  phone: string;
  observations?: string;
};

export const appointments: Appointment[] = [
  {
    id: 1,
     patientId: 1,
    patientName: "João da Silva",
    patientInitials: "JS",
    professional: "Dr. Eric Rodrigues",
    specialty: "Fisioterapia ortopédica",
    date: "2026-07-21",
    time: "08:00",
    endTime: "08:50",
    duration: 50,
    room: "Sala 01",
    status: "Confirmada",
    phone: "(37) 99921-4567",
    observations: "Paciente em acompanhamento de dor lombar.",
  },
  {
    id: 2,
     patientId: 2,
    patientName: "Maria Aparecida",
    patientInitials: "MA",
    professional: "Dra. Camila Alves",
    specialty: "Pilates clínico",
    date: "2026-07-21",
    time: "09:00",
    endTime: "09:50",
    duration: 50,
    room: "Sala Pilates",
    status: "Agendada",
    phone: "(37) 99876-2210",
  },
  {
    id: 3,
     patientId: 3,
    patientName: "Carlos Henrique",
    patientInitials: "CH",
    professional: "Dr. Eric Rodrigues",
    specialty: "Reabilitação esportiva",
    date: "2026-07-21",
    time: "10:00",
    endTime: "10:50",
    duration: 50,
    room: "Sala 02",
    status: "Em atendimento",
    phone: "(37) 99781-4587",
  },
  {
    id: 4,
     patientId: 4,
    patientName: "Ana Paula Ferreira",
    patientInitials: "AF",
    professional: "Dra. Camila Alves",
    specialty: "Fisioterapia pediátrica",
    date: "2026-07-21",
    time: "13:30",
    endTime: "14:20",
    duration: 50,
    room: "Sala Infantil",
    status: "Finalizada",
    phone: "(37) 99645-7812",
  },
  {
    id: 5,
     patientId: 5,
    patientName: "Pedro Gomes",
    patientInitials: "PG",
    professional: "Dr. Eric Rodrigues",
    specialty: "Fisioterapia respiratória",
    date: "2026-07-21",
    time: "15:00",
    endTime: "15:50",
    duration: 50,
    room: "Sala 01",
    status: "Cancelada",
    phone: "(37) 99561-2204",
  },
  {
    id: 6,
     patientId: 6,
    patientName: "Luciana Mendes",
    patientInitials: "LM",
    professional: "Dra. Camila Alves",
    specialty: "Reabilitação vestibular",
    date: "2026-07-21",
    time: "16:00",
    endTime: "16:50",
    duration: 50,
    room: "Sala 03",
    status: "Não compareceu",
    phone: "(37) 99418-6632",
  },
  {
    id: 7,
     patientId: 7,
    patientName: "Fernanda Rocha",
    patientInitials: "FR",
    professional: "Dr. Eric Rodrigues",
    specialty: "Fisioterapia ortopédica",
    date: "2026-07-22",
    time: "08:30",
    endTime: "09:20",
    duration: 50,
    room: "Sala 01",
    status: "Agendada",
    phone: "(37) 99387-1010",
  },
];

export const professionals = [
  "Todos os profissionais",
  "Dr. Eric Rodrigues",
  "Dra. Camila Alves",
];

export const appointmentStatuses = [
  "Todos os status",
  "Agendada",
  "Confirmada",
  "Em atendimento",
  "Finalizada",
  "Cancelada",
  "Não compareceu",
];