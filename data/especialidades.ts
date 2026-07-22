// data/especialidades.ts

export type AreaAtuacao = {
  titulo: string;
  descricao: string;
  icone: string;
};

export type BeneficioEspecialidade = {
  titulo: string;
  descricao: string;
};

export type EtapaTratamento = {
  numero: number;
  titulo: string;
  descricao: string;
};

export type PerguntaFrequente = {
  pergunta: string;
  resposta: string;
};

export type ProfissionalEspecialidade = {
  nome: string;
  cargo: string;
  registro?: string;
  descricao: string;
  imagem: string;
};

export type Especialidade = {
  slug: string;
  titulo: string;
  tituloSeo: string;
  descricaoSeo: string;
  categoria: string;

  hero: {
    destaque: string;
    titulo: string;
    descricao: string;
    imagem: string;
  };

  apresentacao: {
    titulo: string;
    paragrafos: string[];
  };

  areasAtuacao: AreaAtuacao[];
  beneficios: BeneficioEspecialidade[];
  etapasTratamento: EtapaTratamento[];
  profissionais: ProfissionalEspecialidade[];
  perguntasFrequentes: PerguntaFrequente[];

  chamadaFinal: {
    titulo: string;
    descricao: string;
    textoBotao: string;
  };
};

export const especialidades: Especialidade[] = [
  {
    slug: "fisioterapia",

    titulo: "Fisioterapia",

    tituloSeo:
      "Fisioterapia em Abaeté-MG | Clínica APTO",

    descricaoSeo:
      "Tratamentos de fisioterapia em Abaeté-MG com atendimento humanizado, avaliação individual e equipe especializada. Agende sua avaliação na Clínica APTO.",

    categoria: "Reabilitação e qualidade de vida",

    hero: {
      destaque: "Atendimento especializado em Abaeté-MG",

      titulo:
        "Recupere seus movimentos e tenha mais qualidade de vida",

      descricao:
        "Atendimento fisioterapêutico humanizado, avaliação individual e um plano de tratamento desenvolvido de acordo com as necessidades de cada paciente.",

      imagem: "/images/especialidades/fisioterapia-hero.jpg",
    },

    apresentacao: {
      titulo: "O que é Fisioterapia?",

      paragrafos: [
        "A Fisioterapia é a área da saúde que estuda o movimento humano e atua na prevenção, avaliação e tratamento de alterações que comprometem a mobilidade, a funcionalidade e a qualidade de vida.",

        "Por meio de técnicas terapêuticas, exercícios e recursos físicos, o fisioterapeuta ajuda o paciente a reduzir dores, recuperar movimentos, melhorar a força muscular e retomar suas atividades diárias com mais segurança.",

        "Na Clínica APTO, cada paciente recebe uma avaliação individualizada para que o tratamento seja planejado conforme suas necessidades, limitações e objetivos.",
      ],
    },

    areasAtuacao: [
      {
        titulo: "Ortopédica e Esportiva",
        descricao:
          "Tratamento de dores, lesões musculares, alterações articulares, fraturas, pós-operatórios e lesões relacionadas à prática esportiva.",
        icone: "bone",
      },
      {
        titulo: "Neurológica",
        descricao:
          "Reabilitação de pacientes com alterações neurológicas que comprometem os movimentos, o equilíbrio e a independência funcional.",
        icone: "brain",
      },
      {
        titulo: "Respiratória",
        descricao:
          "Técnicas e exercícios voltados à melhora da capacidade respiratória, ventilação pulmonar e qualidade da respiração.",
        icone: "lungs",
      },
      {
        titulo: "Pediátrica",
        descricao:
          "Atendimento direcionado ao desenvolvimento motor, à postura, à mobilidade e às necessidades específicas de crianças.",
        icone: "baby",
      },
      {
        titulo: "Geriátrica",
        descricao:
          "Tratamento voltado à mobilidade, força, equilíbrio, prevenção de quedas e manutenção da independência da pessoa idosa.",
        icone: "heart-handshake",
      },
      {
        titulo: "Dermato-funcional",
        descricao:
          "Procedimentos fisioterapêuticos aplicados à recuperação dos tecidos, tratamentos estéticos e cuidados pós-operatórios.",
        icone: "sparkles",
      },
      {
        titulo: "Reabilitação Vestibular",
        descricao:
          "Tratamento de tonturas, vertigens, desequilíbrios e alterações relacionadas ao sistema vestibular.",
        icone: "accessibility",
      },
      {
        titulo: "Disfunções da ATM",
        descricao:
          "Tratamento das disfunções temporomandibulares, dores faciais e limitações nos movimentos da mandíbula.",
        icone: "smile",
      },
    ],

    beneficios: [
      {
        titulo: "Redução das dores",
        descricao:
          "Técnicas direcionadas ao alívio da dor e à recuperação das estruturas afetadas.",
      },
      {
        titulo: "Recuperação dos movimentos",
        descricao:
          "Tratamento para melhorar a mobilidade e facilitar a realização das atividades diárias.",
      },
      {
        titulo: "Fortalecimento muscular",
        descricao:
          "Exercícios terapêuticos para recuperar força, resistência e estabilidade.",
      },
      {
        titulo: "Melhora da postura",
        descricao:
          "Orientações e exercícios para corrigir hábitos posturais e reduzir sobrecargas.",
      },
      {
        titulo: "Prevenção de lesões",
        descricao:
          "Avaliação dos fatores de risco e desenvolvimento de estratégias preventivas.",
      },
      {
        titulo: "Mais qualidade de vida",
        descricao:
          "Maior autonomia, segurança, bem-estar e confiança para realizar as atividades cotidianas.",
      },
    ],

    etapasTratamento: [
      {
        numero: 1,
        titulo: "Agendamento",
        descricao:
          "O paciente entra em contato com a clínica e escolhe o melhor horário para sua avaliação.",
      },
      {
        numero: 2,
        titulo: "Avaliação individual",
        descricao:
          "O fisioterapeuta analisa os sintomas, as limitações, o histórico e os objetivos do paciente.",
      },
      {
        numero: 3,
        titulo: "Plano terapêutico",
        descricao:
          "É desenvolvido um plano de tratamento personalizado para as necessidades identificadas.",
      },
      {
        numero: 4,
        titulo: "Tratamento",
        descricao:
          "São aplicadas técnicas, exercícios e recursos adequados à condição do paciente.",
      },
      {
        numero: 5,
        titulo: "Reavaliação",
        descricao:
          "A evolução é acompanhada periodicamente e o tratamento pode ser ajustado quando necessário.",
      },
      {
        numero: 6,
        titulo: "Orientações e prevenção",
        descricao:
          "O paciente recebe orientações para manter os resultados e reduzir o risco de novas lesões.",
      },
    ],

    profissionais: [
      {
        nome: "Eric Álvares Rodrigues",
        cargo: "Fisioterapeuta e fundador da Clínica APTO",
        registro: "CREFITO 4/52260F",
        descricao:
          "Profissional com ampla experiência em fisioterapia, Pilates Clínico, Quiropraxia, Liberação Miofascial e técnicas de reabilitação.",
        imagem: "/images/equipe/eric-alvares.jpg",
      },
    ],

    perguntasFrequentes: [
      {
        pergunta: "Quando devo procurar um fisioterapeuta?",
        resposta:
          "A avaliação fisioterapêutica pode ser indicada quando há dor, dificuldade de movimentação, perda de força, alterações posturais, recuperação após cirurgia ou necessidade de prevenção de lesões.",
      },
      {
        pergunta: "É necessário apresentar encaminhamento médico?",
        resposta:
          "Isso pode variar conforme o caso, o convênio e o tipo de atendimento. Entre em contato com a Clínica APTO para receber a orientação correta.",
      },
      {
        pergunta: "Quantas sessões serão necessárias?",
        resposta:
          "A quantidade de sessões depende da condição clínica, dos objetivos e da evolução de cada paciente. Essa definição é feita após a avaliação individual.",
      },
      {
        pergunta: "A fisioterapia é indicada somente quando existe dor?",
        resposta:
          "Não. A fisioterapia também atua na prevenção de lesões, melhora da postura, fortalecimento, equilíbrio, mobilidade e promoção da qualidade de vida.",
      },
      {
        pergunta: "Como funciona a primeira consulta?",
        resposta:
          "Na primeira consulta, o fisioterapeuta realiza uma avaliação completa, identifica as necessidades do paciente e apresenta uma proposta de tratamento.",
      },
    ],

    chamadaFinal: {
      titulo: "Comece hoje a cuidar dos seus movimentos",

      descricao:
        "Agende uma avaliação na Clínica APTO e receba um plano de tratamento desenvolvido especialmente para suas necessidades.",

      textoBotao: "Agendar avaliação pelo WhatsApp",
    },
  },
];

export function encontrarEspecialidadePorSlug(
  slug: string,
): Especialidade | undefined {
  return especialidades.find(
    (especialidade) => especialidade.slug === slug,
  );
}