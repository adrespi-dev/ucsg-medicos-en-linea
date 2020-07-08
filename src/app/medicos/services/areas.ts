import { AreaSalud } from "../models";

export const areas: AreaSalud[] = [
  {
    slug: "cardiologia",
    name: `Cardiología`,
    icon: "heart",
    medicos: [
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
    ],
  },
  {
    slug: "cirugia-torax",
    name: `Cirugía de Tórax`,
    icon: "pain",
    medicos: [
      {
        horarios: [{ start: 10, end: 12 }],
      },
    ],
  },
  {
    slug: "cirugia-general",
    name: `Cirugía General`,
    icon: "scalpel",
    medicos: [
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [
          { start: 10, end: 12 },
          { start: 14, end: 16 },
        ],
      },
    ],
  },
  {
    slug: "cirugia-laparoscopica",
    name: `Cirugía Laparoscópica`,
    icon: "robot-arm",
    medicos: [
      {
        horarios: [{ start: 10, end: 12 }],
      },
    ],
  },
  {
    slug: "dermatologia",
    name: `Dermatología`,
    icon: "beauty",
    medicos: [
      {
        horarios: [{ start: 9, end: 11 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
    ],
  },
  {
    slug: "enfermeria",
    name: `Enfermería`,
    icon: "nurse",
    medicos: [
      {
        horarios: [{ start: 7, end: 9 }],
      },
      {
        horarios: [{ start: 13, end: 15 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 17, end: 19 }],
      },
    ],
  },
  {
    slug: "epidemiologia",
    name: `Epidemiología`,
    icon: "aids",
    medicos: [
      {
        horarios: [{ start: 14, end: 16, esMediaHora: true }],
      },
    ],
  },
  {
    slug: "fisiatria",
    name: `Fisiatría y Rehabilitación`,
    icon: "leg",
    medicos: [
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 15, end: 17 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
    ],
  },
  {
    slug: "ginecologia",
    name: `Ginecología`,
    icon: "professions-and-jobs",
    medicos: [
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
    ],
  },
  {
    slug: "internista",
    name: `Internista`,
    icon: "doctor",
    medicos: [
      {
        horarios: [{ start: 13, end: 15 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
    ],
  },
  {
    slug: "familiar-comunitaria",
    name: `Medicina Familiar y Comunitaria`,
    icon: "airdrop",
    medicos: [
      {
        horarios: [{ start: 6, end: 8 }],
      },
      {
        horarios: [{ start: 8, end: 10 }],
      },
      {
        horarios: [{ start: 8, end: 10 }],
      },
      {
        horarios: [{ start: 8, end: 10 }],
      },
      {
        horarios: [{ start: 8, end: 12 }],
      },
      {
        horarios: [{ start: 9, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 16 }],
      },
      // page 2
      {
        horarios: [{ start: 14, end: 17 }],
      },
      {
        horarios: [{ start: 14, end: 17 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 14, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 19 }],
      },
      //page 3
      {
        horarios: [{ start: 14, end: 23 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 19 }],
      },
      {
        horarios: [{ start: 16, end: 19 }],
      },
      {
        horarios: [{ start: 18, end: 23 }],
      },
      {
        horarios: [{ start: 20, end: 23 }],
      },
      {
        horarios: [{ start: 20, end: 23 }],
      },
      {
        horarios: [{ start: 21, end: 24 }],
      },
      {
        horarios: [{ start: 22, end: 24 }],
      },
    ],
  },
  {
    slug: "medicina-general",
    name: "Medicina General",
    icon: "first-aid-kit",
    medicos: [
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 12, end: 14 }],
      },
      {
        horarios: [{ start: 9, end: 14 }],
      },
      {
        horarios: [{ start: 18, end: 20 }],
      },
      {
        horarios: [{ start: 18, end: 20 }],
      },
    ],
  },
  {
    slug: "negrologia",
    name: `Nefrología`,
    icon: "black-ribbon",
    medicos: [
      {
        horarios: [{ start: 15, end: 18 }],
      },
    ],
  },
  {
    slug: "neumologia",
    name: `Neumología`,
    icon: "lungs",
    medicos: [
      {
        horarios: [{ start: 14, end: 16 }],
      },
    ],
  },
  {
    slug: "neurologia",
    name: `Neurología`,
    icon: "head",
    medicos: [
      {
        horarios: [{ start: 17, end: 19 }],
      },
    ],
  },
  {
    slug: "nuticion-dietetica",
    name: `Nutrición y Dietética`,
    icon: "nutrition",
    medicos: [
      {
        horarios: [{ start: 9, end: 11 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 11, end: 13 }],
      },
      {
        horarios: [{ start: 13, end: 15 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 15, end: 17 }],
      },
    ],
  },
  {
    slug: "odontologia",
    name: `Odontología`,
    icon: "dental-crown",
    medicos: [
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 11, end: 13 }],
      },
      {
        horarios: [{ start: 15, end: 17 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 18, end: 20 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
    ],
  },
  {
    slug: "otorrinolaringologia",
    name: `Otorrinolaringología`,
    icon: "otorhinolaryngology",
    medicos: [
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
    ],
  },
  {
    slug: "pediatria",
    name: `Pediatría`,
    icon: "baby",
    medicos: [
      {
        horarios: [{ start: 14, end: 17 }],
      },
      {
        horarios: [{ start: 16, end: 21 }],
      },
      {
        horarios: [{ start: 13, end: 16 }],
      },
      {
        horarios: [{ start: 15, end: 17 }],
      },
      {
        horarios: [{ start: 10, end: 13 }],
      },
      {
        horarios: [{ start: 15, end: 19 }],
      },
      // page 2
      {
        horarios: [{ start: 7, end: 9 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
      {
        horarios: [{ start: 14, end: 16 }],
      },
    ],
  },
  {
    slug: "psicologia",
    name: `Psicología Clínica`,
    icon: "brain",
    medicos: [
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 17, end: 19 }],
      },
      {
        horarios: [{ start: 15, end: 18 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
      {
        horarios: [{ start: 12, end: 20 }],
      },
      {
        horarios: [{ start: 10, end: 12 }],
      },
      {
        horarios: [{ start: 16, end: 18 }],
      },
    ],
  },
  {
    slug: "psiquiatria",
    name: `Psiquiatría`,
    icon: "medication",
    medicos: [
      {
        horarios: [{ start: 14, end: 16 }],
      },
    ],
  },
];
