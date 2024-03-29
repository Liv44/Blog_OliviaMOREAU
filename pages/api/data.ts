import { CompetencesProps } from "../../components/general/Competences";
import { CompetenceCardProps } from "../../components/general/Competences/CompetenceCard";
import { BannerProps } from "../../components/general/Banner";
import { HeroProps } from "../../components/general/Hero/Hero";
import { TabsProps } from "../../components/general/Tabs";
import { BackEnd } from "../../components/pages/Home/CompetencesHome/BackEnd";
import { FrontEnd } from "../../components/pages/Home/CompetencesHome/FrontEnd";
import { Organisation } from "../../components/pages/Home/CompetencesHome/Organisation";
import { ExperienceCardProps } from "../../components/pages/Home/ExperienceList/ExperienceCard/ExperienceCard";
import ScolariteCard from "../../components/pages/Home/ScolariteComponent/ScolariteCard";
import { StarFilled } from "@ant-design/icons";
import { FinalContentProp } from "../../components/general/FinalCard";
interface pageDataInterface {
  hero: HeroProps;
  experiences: ExperienceCardProps[];
  scolarite: TabsProps;
  hobbies: FinalContentProp[];
  competences: CompetenceCardProps[];
  softskills: BannerProps;
}

export const pageData: pageDataInterface = {
  hero: {
    subTitle: "Étudiante, développeuse, comédienne...",
    title: "Mais qui est Liv' ?",
    descriptions: [
      "Je suis Olivia MOREAU, 22 ans, jeune étudiante en 2ème année de Bachelor Informatique à Nantes Ynov Campus. Originaire du Maine-et-Loire, j’ai étudié 1 an et demi à Angers pour finalement arriver à Nantes en 2020.",
      "Lorsque j’ai découvert le développement informatique, j’ai su que je voulais en faire mon projet professionnel à long terme. C’est l’algorthmie et la rigueur demandée qui m’a attiré et qui me plait encore aujourd’hui.",
      "Ce blog/portfolio est un rendu demandé pour valider ma 2ème année. Vous y trouverez mon CV détaillé, une présentation de l’entreprise dans laquelle je travaille actuellement et un blog contenant des articles sur différents sujets liés au domaine que j’exerce.",
    ],
    buttons: [
      {
        label: "Profil Linkedin",
        link: "https://www.linkedin.com/in/oliviamoreau/",
      },
      {
        label: "Voir mon CV",
        link: "/CV_Olivia_MOREAU.pdf",
      },
    ],
    lienImage: "/profile_picture.png",
  },
  experiences: [
    {
      title: "Développeuse Front-End",
      company: "Ouivalo",
      dates: "Juin 2022 - Aujourd'hui",
      missions: [
        "Apprentissage du langage Angular",
        "Développement d'un site web",
        "Intégration dans une équipe de développeurs",
      ],
      competences: "Autonomie, rigueur, sérieux",
    },
    {
      title: "Babysitter",
      company: "Nounou-top",
      dates: "Septembre 2020 - Juillet 2020",
      missions: [
        "Garde de 2 enfants à la sortie de l'école",
        "Proposer des activités, faire les leçons",
        "Encadrer les temps du soir (goûter, repas, douche)",
      ],
      competences: "Confiance et sérieux",
    },
    {
      title: "Cueilleuse de fraises",
      company: "GAEC Lait Fraise",
      dates: "Étés 2019 et 2020",
      missions: [
        "Cueillette de fruits rouges",
        "Désherbage des serres",
        "Vente au marché",
      ],
      competences: "Exécuter, s'investir, être productif et rapide",
    },
    {
      title: "Animatrice BAFA",
      company: "Différentes structures en Maine et Loire",
      dates: "2017-2021",
      missions: [
        "Organiser des mini-camps, semaines en centre de loisir, activités en périscolaire",
        "Responsable de groupes d’enfants de 3 à 17 ans",
        "Encadrement des temps de vie : repas, veillées, hygiène, cuisine",
      ],
      competences: "Animer, créer, être responsable, s’organiser",
    },
    {
      title: "Stage Développement Web",
      company: "Mickaël Desgranges",
      dates: "1 semaine - mai 2019",
      missions: [
        "Découverte du métier de développeur web indépendant",
        "Développement d'un site web en HTML/CSS et PHP avec le CMS WordPress",
      ],
      competences: "Rigueur, analyse, apprentissage",
    },
    {
      title: "(à venir...) Alternance",
      company: "The Tribe",
      dates: "à partir de septembre 2022",
      missions: ["à venir..."],
      competences: "à venir...",
    },
  ],
  scolarite: {
    tabs: [
      {
        headerTitle: "Licence Information Communication",
        content: ScolariteCard({
          formation: "Licence Information Communication",
          etablissement: "Université catholique de l'Ouest - Angers (49)",
          dates: "septembre 2018 - janvier 2020",
          descriptions: [
            "Découverte des techniques de communication : pratique en audiovisuel - journalisme - développement web - réalisation de dossiers",
            "Cette licence m’a permis de découvrir le développement web grâce aux modules HTML/CSS et JS. En seconde année, j’ai décidé de prendre l’option PPE+ Web (Projet Professionnel Étudiant) pour pouvoir approfondir mes connaissances dans le domaine du web.",
            "J’ai décidé d’arrêter ma licence au cours de la seconde année car mon projet professionnel s’est dirigé vers le développement web plutôt que la communication.",
          ],
        }),
      },
      {
        headerTitle: "Bachelor Informatique",
        content: ScolariteCard({
          formation: "Bachelor Informatique",
          etablissement: "Nantes Ynov Campus - Nantes (44)",
          dates: "septembre 2020 - septembre 2023",
          descriptions: [
            "Enseignement de base de l'informatique. Réalisation de différents projets avec différents langages. J'y apprends l'algorithmie, la structure d'un code, les bonnes pratiques, la gestion de différents outils de développement.",
            "J'ai choisi l'école Ynov car elle propose une formation axée sur les projets. J'ai pu apprendre le travail d'équipe et la gestion de projets. Je me spécifie en 3ème année avec l'option développement.",
            "À la suite de mon Bachelor, je souhaite continuer vers un Master Expert Informatique et Sciences de l'Information.",
          ],
        }),
      },
    ],
  },
  hobbies: [
    {
      title: "Théâtre",
      description:
        "Depuis plus de 10 ans, je suis comédienne amatrice dans la troupe Kiproko à Valanjou (49). J’ai aussi été animatrice de groupes d’enfants pendant 5 ans et membre du bureau en tant que chargée de communication.",
      competences: ["mémorisation", "lâcher prise", "confiance en soi"],
      icon: StarFilled,
    },
    {
      title: "Musique",
      description:
        "Pendant 10 ans, j'ai suivi des cours de saxophone. J'ai fait parti de l'orchestre d'harmonie de Chemillé-en-Anjou (49) pendant 4 ans. J'apprends aussi en autoditacte le chant, le ukulélé et le kalimba. ",
      competences: ["rigueur", "sens artistique", "travail collectif"],
      icon: StarFilled,
    },
  ],
  competences: [
    {
      content: FrontEnd,
    },
    {
      content: BackEnd,
    },
    {
      content: Organisation,
    },
  ],
  softskills: {
    title: "Mes Soft Skills",
    color: "orange.500",
    blocs: [
      {
        title: "Empathie",
        description:
          "Je suis à l'écoute des gens autour de moi, et sais agir en fonction des émotions des autres. Le travail en équipe est donc agréable car je comprends rapidement les demandes et besoins des collègues.",
      },
      {
        title: "Autonomie",
        description:
          "Je suis très autonome dans mon travail. J'arrive à travailler seule sur une tâche mais n'hésite pas à venir poser des questions si j'ai un problème de compréhension sur un élément.",
      },
      {
        title: "Capacité d'apprentissage",
        description:
          "J'apprends vite, ce qui me permet de découvrir des notions rapidement et de les appliquer directement. Je sais comprendre du code et le réutiliser en l'adaptant à ce que j'ai besoin.",
      },
      {
        title: "Force de proposition",
        description:
          "Soucieuse de ce que je produis, je suis toujours prête à donner mon avis sur le travail à effectuer. J'aime aussi prendre le point de vue d'un utilisateur pour proposer des solutions adéquates.",
      },
    ],
  },
};
