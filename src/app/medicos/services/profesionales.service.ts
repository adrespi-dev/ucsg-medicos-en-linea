import { Injectable } from "@angular/core";
import { AreaSalud } from "../models";

@Injectable({
  providedIn: "root"
})
export class ProfesionalesService {
  areas: AreaSalud[] = [
    {
      slug: "cardiologia",
      name: `Cardiología`,
      icon: "heart",
      medicos: [
        {
          name: "Ramírez, Ma.Isabel",
          celular: "0999159533",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Chávez Rodríguez César Daniel",
          celular: "0998464048",
          horarios: [{ start: 14, end: 16 }]
        }
      ]
    },
    {
      slug: "cirugia-torax",
      name: `Cirugía de Tórax`,
      icon: "pain",
      medicos: [
        {
          name: "Ochoa Tarira Francisco Xavier",
          celular: "0917902702",
          horarios: [{ start: 10, end: 12 }]
        }
      ]
    },
    {
      slug: "cirugia-general",
      name: `Cirugía General`,
      icon: "scalpel",
      medicos: [
        {
          name: "Díaz Cevallos Ernesto Gregorio",
          celular: "0999960821",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Aguilar López Sergio",
          celular: "0992766622",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Salvador Fernández Carlos Luis",
          celular: "0991868729",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Ulloa Ochoa Pablo Paúl",
          celular: "0996874741",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Andrade Ribadeneira Mario Oswaldo",
          celular: "0969695627",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Freire Maldonado Ernesto",
          celular: "0999536646",
          horarios: [
            { start: 10, end: 12 },
            { start: 14, end: 16 }
          ]
        }
      ]
    },
    {
      slug: "cirugia-laparoscopica",
      name: `Cirugía Laparoscópica`,
      icon: "robot-arm",
      medicos: [
        {
          name: "Armas Gonzalez Joselyne Dayana",
          celular: "0996426508",
          horarios: [{ start: 10, end: 12 }]
        }
      ]
    },
    {
      slug: "dermatologia",
      name: `Dermatología`,
      icon: "beauty",
      medicos: [
        {
          name: "Benítez Estupiñán Elizabeth",
          celular: "0999615530",
          horarios: [{ start: 9, end: 11 }]
        },
        {
          name: "Bastidas Rosangel",
          celular: "0967466219",
          horarios: [{ start: 14, end: 16 }]
        }
      ]
    },
    {
      slug: "enfermeria",
      name: `Enfermería`,
      icon: "nurse",
      medicos: [
        {
          name: "Vargas Cobos Marlon",
          celular: "0958764773",
          horarios: [{ start: 7, end: 9 }]
        },
        {
          name: "Muñoz Roca Olga",
          celular: "0990317885",
          horarios: [{ start: 13, end: 15 }]
        },
        {
          name: "Pillajo Baños Patricia",
          celular: "0967735834",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Garrido Julia",
          celular: "0968096417",
          horarios: [{ start: 17, end: 19 }]
        }
      ]
    },
    {
      slug: "epidemiologia",
      name: `Epidemiología`,
      icon: "aids",
      medicos: [
        {
          name: "Vásquez Cedeño Diego",
          celular: "0982742221",
          horarios: [{ start: 14, end: 16, esMediaHora: true }]
        }
      ]
    },
    {
      slug: "fisiatria",
      name: `Fisiatría y Rehabilitación`,
      icon: "leg",
      medicos: [
        {
          name: "Juan Ampuero Villamar",
          celular: "0999505267",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Eva Chang Catagua",
          celular: "0987384877",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Gustavo Bocca Peralta",
          celular: "0986866233",
          horarios: [{ start: 15, end: 17 }]
        },
        {
          name: "Pavon Arévalo Lissette",
          celular: "0939053089",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Tania Abril Mera",
          celular: "0999675342",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Patricia Encalada Grijalva",
          celular: "0987177294",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Mónica Galarza Zambrano",
          celular: "0991864792",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Jorge Soria Ruiz",
          celular: "0999515636",
          horarios: [{ start: 16, end: 18 }]
        }
      ]
    },
    {
      slug: "ginecologia",
      name: `Ginecología`,
      icon: "professions-and-jobs",
      medicos: [
        {
          name: "Ayon Genkuong Andrés Mauricio",
          celular: "0997572784",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Pesántez Flores Ana Lucía",
          celular: "0912330982",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Patiño Luzurrága Yuri",
          celular: "0986881255",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Marengo Gallardo Humberto",
          celular: "0999522248",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Mena Bonilla Rovel",
          celular: "0999896337",
          horarios: [{ start: 14, end: 16 }]
        }
      ]
    },
    {
      slug: "internista",
      name: `Internista`,
      icon: "doctor",
      medicos: [
        {
          name: "Tetamantti Daniel",
          celular: "0999547682",
          horarios: [{ start: 13, end: 15 }]
        },
        {
          name: "Rueda López Roberto John",
          celular: "0995974656",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Canelles Pupo Marino Gabriel",
          celular: "0987121000",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Molina Saltos Luis Fernando",
          celular: "0980892771",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Lozano Guillermo",
          celular: "0995697969",
          horarios: [{ start: 16, end: 18 }]
        }
      ]
    },
    {
      slug: "familiar-comunitaria",
      name: `Medicina Familiar y Comunitaria`,
      icon: "airdrop",
      medicos: [
        {
          name: "Muñoz Morán Mireya Elizabeth",
          celular: "0994488254",
          horarios: [{ start: 6, end: 8 }]
        },
        {
          name: "Alcívar Almagro Wendy Marlene",
          celular: "0969734307",
          horarios: [{ start: 8, end: 10 }]
        },
        {
          name: "Aragadbay Quitio Mariana Del Rocío",
          celular: "0998383588",
          horarios: [{ start: 8, end: 10 }]
        },
        {
          name: "Beltrán Palacio Kiliam Andrés",
          celular: "0959840972",
          horarios: [{ start: 8, end: 10 }]
        },
        {
          name: "Gallegos Lozano Daniela Patricia",
          celular: "0992350033",
          horarios: [{ start: 8, end: 12 }]
        },
        {
          name: "Veloz León Cinthia Azucena",
          celular: "0989703635",
          horarios: [{ start: 9, end: 12 }]
        },
        {
          name: "Escala Robayo Norma Priscila",
          celular: "0982902678",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Briones Cedeño Miguel Angel",
          celular: "0939356650",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Olvera León Norma Janina",
          celular: "0982267580",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Retamozo Mattos Heider Ariel",
          celular: "0985263182",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Domínguez Peñafiel Susana Raquel",
          celular: "0991164118",
          horarios: [{ start: 10, end: 16 }]
        },
        // page 2
        {
          name: "Quiñonez Solórzano Juan José",
          celular: "0958616033",
          horarios: [{ start: 14, end: 17 }]
        },
        {
          name: "López Córdova Marcel Orlando",
          celular: "0979389960",
          horarios: [{ start: 14, end: 17 }]
        },
        {
          name: "Benavides Yanez Bertha Elizabeth",
          celular: "0990922932",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Bohorquez Valdivieso Beatriz Victoria",
          celular: "0986308668",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Macías Cusme Melvin Stalin",
          celular: "0994500881",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Coronel Salazar David Abrham",
          celular: "0993380231",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Criollo Toledo Mónica Alexandra",
          celular: "0967700387",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Intriago Cantos Gema Andrea",
          celular: "0985018850",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Mero Barcia Alexandra Elizabeth",
          celular: "0984944669",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Montaño Altafuya Mariuxi Fabiola",
          celular: "0968520471",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Pulla Pulla María Rosario",
          celular: "0986425994",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Ramírez Ruiz Carlos Jair",
          celular: "0984314904",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Arguello Tumbaco Lupe Xiomar",
          celular: "0989718397",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Nieto Blacio Claudia Daniela",
          celular: "0985211959",
          horarios: [{ start: 14, end: 18 }]
        },
        {
          name: "Argota Matos Nolvis",
          celular: "0994439848",
          horarios: [{ start: 16, end: 19 }]
        },
        //page 3
        {
          name: "Parrales Villafuerte Liseth Valeria",
          celular: "0996956338",
          horarios: [{ start: 14, end: 23 }]
        },
        {
          name: "Romero Vélez Flor Elizabeth",
          celular: "0986737226",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Sánchez Yepez Gisela Narcisa",
          celular: "0923180525",
          horarios: [{ start: 14, end: 18 }]
        },
        {
          name: "Orellana Cerón Ana Melissa",
          celular: "0996877885",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Tenelanda Duchi Juan Carlos",
          celular: "0996621368",
          horarios: [{ start: 16, end: 19 }]
        },
        {
          name: "Colcha Cárdenas Sofía Esperanza",
          celular: "0987428025",
          horarios: [{ start: 16, end: 19 }]
        },
        {
          name: "Zurita Calderón Yessenia Vanessa",
          celular: "0960639225",
          horarios: [{ start: 18, end: 23 }]
        },
        {
          name: "Andrade Barreiro María Fernanda",
          celular: "0986704350",
          horarios: [{ start: 20, end: 23 }]
        },
        {
          name: "Miranda Temoche Cynthia Elena",
          celular: "0983314642",
          horarios: [{ start: 20, end: 23 }]
        },
        {
          name: "Daza Bermeo Kattia Liseth",
          celular: "0994724207",
          horarios: [{ start: 21, end: 24 }]
        },
        {
          name: "Macías Vélez Francisco David",
          celular: "0989061143",
          horarios: [{ start: 22, end: 24 }]
        }
      ]
    },
    {
      slug: "medicina-general",
      name: "Medicina General",
      icon: "first-aid-kit",
      medicos: [
        {
          name: "Hernández Navarro Marlene",
          celular: "0979594131",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Andrade Soriano Michelle Adriana",
          celular: "0939681837",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Cedeño Navas Paulo César",
          celular: "0986929687",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Vera Villamar Rafael",
          celular: "0995659367",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Leiva De Janon Giomar",
          celular: "0998829868",
          horarios: [{ start: 12, end: 14 }]
        },
        {
          name: "Guerra Kunse Diego",
          celular: "0991813568",
          horarios: [{ start: 9, end: 14 }]
        },
        {
          name: "Felipe Muñoz León",
          celular: "0985824836",
          horarios: [{ start: 18, end: 20 }]
        },
        {
          name: "Grijalva Grijalva Isabel",
          celular: "0999960544",
          horarios: [{ start: 18, end: 20 }]
        }
      ]
    },
    {
      slug: "negrologia",
      name: `Nefrología`,
      icon: "black-ribbon",
      medicos: [
        {
          name: "Tutivén Ubilla Aurora Beatriz",
          celular: "0985030435",
          horarios: [{ start: 15, end: 18 }]
        }
      ]
    },
    {
      slug: "neumologia",
      name: `Neumología`,
      icon: "lungs",
      medicos: [
        {
          name: "Benítez Burgos Sara Margarita",
          celular: "0981107509",
          horarios: [{ start: 14, end: 16 }]
        }
      ]
    },
    {
      slug: "neurologia",
      name: `Neurología`,
      icon: "head",
      medicos: [
        {
          name: "Santibañez Vasquez Rocío",
          celular: "0999747827",
          horarios: [{ start: 17, end: 19 }]
        }
      ]
    },
    {
      slug: "nuticion-dietetica",
      name: `Nutrición y Dietética`,
      icon: "nutrition",
      medicos: [
        {
          name: "Moncayo Valencia Carlos Julio",
          celular: "0997246915",
          horarios: [{ start: 9, end: 11 }]
        },
        {
          name: "Montalván Martha Elena",
          celular: "0998728270",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Bajaña Guerra Alexandra",
          celular: "0999052672",
          horarios: [{ start: 11, end: 13 }]
        },
        {
          name: "Celi Mero Martha Victoria",
          celular: "0994794933",
          horarios: [{ start: 13, end: 15 }]
        },
        {
          name: "Egas Miraglia Maria Auxiliadora",
          celular: "0994928760",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Quiroz Brunes Jestin Alejandro",
          celular: "0995311888",
          horarios: [{ start: 15, end: 17 }]
        }
      ]
    },
    {
      slug: "odontologia",
      name: `Odontología`,
      icon: "dental-crown",
      medicos: [
        {
          name: "Lema Gutiérrez Héctor",
          celular: "0987971953",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Ycaza Reinoso Carlos",
          celular: "0997096400",
          horarios: [{ start: 11, end: 13 }]
        },
        {
          name: "Guerrero Ferreccio Jenny",
          celular: "0999401775",
          horarios: [{ start: 15, end: 17 }]
        },
        {
          name: "Pino Larrea José",
          celular: "0962790062",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Zambrano Bonilla María",
          celular: "0969061424",
          horarios: [{ start: 18, end: 20 }]
        },
        {
          name: "Lema Gutiérrez Héctor",
          celular: "0987971953",
          horarios: [{ start: 10, end: 12 }]
        }
      ]
    },
    {
      slug: "otorrinolaringologia",
      name: `Otorrinolaringología`,
      icon: "otorhinolaryngology",
      medicos: [
        {
          name: "Villacís Infante Oscar",
          celular: "0997884930",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Espinoza Freire Humberto",
          celular: "0998220076",
          horarios: [{ start: 10, end: 12 }]
        }
      ]
    },
    {
      slug: "pediatria",
      name: `Pediatría`,
      icon: "baby",
      medicos: [
        {
          name: "Guzmán Villavicencio Amalia",
          celular: "0989939363",
          horarios: [{ start: 14, end: 17 }]
        },
        {
          name: "Guillén Pacheco Karen",
          celular: "0981002059",
          horarios: [{ start: 16, end: 21 }]
        },
        {
          name: "Quiroga Tapia María",
          celular: "0994472634",
          horarios: [{ start: 13, end: 16 }]
        },
        {
          name: "Cantos Saltos Elisa",
          celular: "0982207846",
          horarios: [{ start: 15, end: 17 }]
        },
        {
          name: "Chimbo Jiménes Mercedes",
          celular: "0985817497",
          horarios: [{ start: 10, end: 13 }]
        },
        {
          name: "Cedeño Echeverría María",
          celular: "0999300402",
          horarios: [{ start: 15, end: 19 }]
        },
        // page 2
        {
          name: "Yungaicela Castro Mayra Soraya",
          celular: "0996557347",
          horarios: [{ start: 7, end: 9 }]
        },
        {
          name: "Monserrate Coello Lorena Cecibe",
          celular: "0985086047",
          horarios: [{ start: 14, end: 16 }]
        },
        {
          name: "Quijano Grunauer Jorge Felipe",
          celular: "0987240154",
          horarios: [{ start: 14, end: 16 }]
        }
      ]
    },
    {
      slug: "psicologia",
      name: `Psicología Clínica`,
      icon: "brain",
      medicos: [
        {
          name: "Mariana Estacio Campoverde",
          celular: "0986495910",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Elba Bermúdez Reyes",
          celular: "0993269805",
          horarios: [{ start: 17, end: 19 }]
        },
        {
          name: "Carlota Álvarez Chaca",
          celular: "0984702215",
          horarios: [{ start: 15, end: 18 }]
        },
        {
          name: "Marcia Colmont Martínez",
          celular: "0999432417",
          horarios: [{ start: 16, end: 18 }]
        },
        {
          name: "Rodolfo Rojas Betancourt",
          celular: "0993695056",
          horarios: [{ start: 12, end: 20 }]
        },
        {
          name: "David Aguirre Panta",
          celular: "0996509994",
          horarios: [{ start: 10, end: 12 }]
        },
        {
          name: "Patricia Castro Anchundia",
          celular: "0962688250",
          horarios: [{ start: 16, end: 18 }]
        }
      ]
    },
    {
      slug: "psiquiatria",
      name: `Psiquiatría`,
      icon: "medication",
      medicos: [
        {
          name: "Cedeño Bravo Silvia Del Carmen",
          celular: "0914464318",
          horarios: [{ start: 14, end: 16 }]
        }
      ]
    }
  ];

  constructor() {}
}
