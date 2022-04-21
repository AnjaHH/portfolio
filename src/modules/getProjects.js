import { ref } from 'vue'

export default function getProjects() {

  let projects = ref([
    {
      projectID: 1,
      projectTitle: "CV Projekt",
      projectDescription: "Video-redigering og design af cv/video cv ",
      projectimg1: require("../../images/visitkort.png"),
      projectCategory: "Video",
      projectClass: "A",
      projectText: "Fokus på at skabe en rød tråd igennem hele projektet, og skabe et sammenhæng i designet på tværs af produkterne. Projektet bundede ud i et visitkort, et CV, et Video CV samt portfolio hjemmesiden. Nedenunder kan Video CV ses."
      //projecttekst:"",
        //tilføj billeder her
    }, 
     {
      projectID: 2,
      projectTitle: "Trapholt (skoleprojekt)",
      projectDescription: "Remake af hjemmeside, og fokus på ny målgruppe",
      projectimg1: require("../../images/trapholtlogo.png"),
      projectimg3: require("../../images/trapholt2.png"),
      projectCategory: "Photos",
      projectText: "Fiktivt skoleprojekt, hvor vi havde til opgave at redesigne en ny hjemmeside, samt at skabe produkter til museumet Trapholt. Vi brugte UX/UI Design og analyser til at skabe hovedfokus på en ny målgruppe, som hovedsageligt var de unge. hertil målrettede vi det nye design, samt merchandise til denne målgruppes ønsker. ( Rapporten ses her)",
      projectClass: "B"
    },
    {
      projectID: 3,
      projectTitle: "Illustrationer",
      projectDescription: "Grafisk arbejde i primært illustrator",
      projectimg1: require("../../images/Final1.png"),
      projectimg2: require("../../images/minime.png"),
      projectimg3: require("../../images/logo.png"),
      projectCategory: "Photo",
      projectClass: "A",
      projectText: "Diverse illustrationer og grafisk arbejde, med hovedsagelig arbejde i Illustrator."
    },
    {
      projectID: 4,  
      projectTitle: "Halloween Poster",
      projectDescription: "Design af plakat til fest i samarbejde med EASV",
      projectimg1: require("../../images/Halloween1.png"),
      projectimg2: require("../../images/Halloween3.png"),
      projectimg3: require("../../images/Halloween2.png"),
      projectCategory: "Photo",
      projectClass: "B",
      projectText: "Opgaven lød på at designe en plakat i samarbejde med EASV, som skulle promovere den kommende Halloween fest. Hertil skulle plakaten fungere i flere formater. Her ses 3 forskellige formater."
 
       },
      
    
    {
      projectID: 5,
      projectTitle: "Stickers",
      projectDescription: "Design og udsmykning af lastbil ",
      projectimg1: require("../../images/patrick2.png"),
      projectimg2: require("../../images/mercerlamper.png"),
      projectimg3: require("../../images/patrick.png"),
      projectCategory: "Photo",
      projectClass: "A",
      projectText: "Design af klistermærker til både vinduer, sider og skørter langs lastbilen. Tæt kunde kontakt, med fokus på specifikke ønsker."
    }
  ])

    return { projects }
  }