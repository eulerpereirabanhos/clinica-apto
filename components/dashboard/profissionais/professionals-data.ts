export type ProfessionalStatus =
  | "Ativo"
  | "Inativo"
  | "Férias";

export type Professional = {
  id: number;
  name: string;
  initials: string;
  specialty: string;
  registrationType: string;
  registrationNumber: string;
  phone: string;
  email: string;
  status: ProfessionalStatus;
  appointmentsToday: number;
  workingDays: string[];
  startTime: string;
  endTime: string;
  biography?: string;
};

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Dr. Eric Rodrigues",
    initials: "ER",
    specialty: "Fisioterapia Ortopédica",
    registrationType: "CREFITO",
    registrationNumber: "123456-F",
    phone: "(37) 99921-4567",
    email: "eric@clinicaapto.com.br",
    status: "Ativo",
    appointmentsToday: 5,
    workingDays: [
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
    ],
    startTime: "08:00",
    endTime: "18:00",
    biography:
      "Especialista em fisioterapia ortopédica, esportiva e reabilitação funcional.",
  },
  {
    id: 2,
    name: "Dra. Camila Alves",
    initials: "CA",
    specialty: "Fisioterapia Pediátrica",
    registrationType: "CREFITO",
    registrationNumber: "234567-F",
    phone: "(37) 99876-2210",
    email: "camila@clinicaapto.com.br",
    status: "Ativo",
    appointmentsToday: 4,
    workingDays: [
      "Segunda-feira",
      "Terça-feira",
      "Quinta-feira",
      "Sexta-feira",
    ],
    startTime: "08:30",
    endTime: "17:30",
    biography:
      "Atendimento humanizado em fisioterapia pediátrica e desenvolvimento motor.",
  },
  {
    id: 3,
    name: "Dra. Mariana Costa",
    initials: "MC",
    specialty: "Fisioterapia Respiratória",
    registrationType: "CREFITO",
    registrationNumber: "345678-F",
    phone: "(37) 99745-1188",
    email: "mariana@clinicaapto.com.br",
    status: "Ativo",
    appointmentsToday: 3,
    workingDays: [
      "Segunda-feira",
      "Quarta-feira",
      "Sexta-feira",
    ],
    startTime: "09:00",
    endTime: "16:00",
    biography:
      "Profissional especializada em fisioterapia respiratória e reabilitação pulmonar.",
  },
  {
    id: 4,
    name: "Dr. Rafael Moreira",
    initials: "RM",
    specialty: "Reabilitação Vestibular",
    registrationType: "CREFITO",
    registrationNumber: "456789-F",
    phone: "(37) 99688-7744",
    email: "rafael@clinicaapto.com.br",
    status: "Férias",
    appointmentsToday: 0,
    workingDays: [
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
    ],
    startTime: "10:00",
    endTime: "19:00",
    biography:
      "Especialista em equilíbrio, tontura e reabilitação vestibular.",
  },
  {
    id: 5,
    name: "Dra. Juliana Martins",
    initials: "JM",
    specialty: "Dermato-funcional",
    registrationType: "CREFITO",
    registrationNumber: "567890-F",
    phone: "(37) 99514-6632",
    email: "juliana@clinicaapto.com.br",
    status: "Inativo",
    appointmentsToday: 0,
    workingDays: [],
    startTime: "",
    endTime: "",
    biography:
      "Atuação em fisioterapia dermato-funcional, estética e recuperação pós-operatória.",
  },
];

export const professionalSpecialties = [
  "Todas as especialidades",
  ...Array.from(
    new Set(
      professionals.map(
        (professional) => professional.specialty
      )
    )
  ),
];

export const professionalStatuses = [
  "Todos os status",
  "Ativo",
  "Inativo",
  "Férias",
];