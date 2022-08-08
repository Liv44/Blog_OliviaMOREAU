import { BannerProps } from "../../components/general/Banner";
import { CompetenceCardProps } from "../../components/general/Competences/CompetenceCard";
import { FinalContentProp } from "../../components/general/FinalCard";
import { HeroProps } from "../../components/general/Hero/Hero";
import { TabsProps } from "../../components/general/Tabs";
import Angular from "../../components/pages/Entreprise/CompetencesEntreprise/Angular";
import Autonomie from "../../components/pages/Entreprise/CompetencesEntreprise/Autonomie";
import PrimeNG from "../../components/pages/Entreprise/CompetencesEntreprise/PrimeNG";
import MissionCard from "../../components/pages/Entreprise/MissionsComponent/MissionCard";

interface pageEntrepriseInterface {
  hero: HeroProps;
  missions: TabsProps;
  competences: CompetenceCardProps[];
  missionOuivalo: BannerProps;
  bilan: FinalContentProp[];
}

export const pageEntreprise: pageEntrepriseInterface = {
  hero: {
    subTitle: "Start-up, biodéchets, compostage...",
    title: "Qu'est-ce que Ouivalo ?",
    descriptions: [
      "Ouivalo est une start’up créée en 2019 par Camille, Kevin et Richard dans le but de sensibiliser au compostage et proposer des solutions pour la gestion des biodéchets.",
      "Depuis xxxx, les bureaux de Ouivalo se situent à l’Incubateur Centrale Audencia ENSA.",
      "L’équipe se compose de 3 co-fondateur.ice.s, Camille, Kevin et Richard, de 2 alternants en développement web (Matis et Kael), et lors de mon CDD étaient aussi présent.e.s Alix (stagiaire en Communication), Déborah (stagiaire en développement commercial), et Rémi (développeur Back-End).",
    ],
    lienImage: "./ouivalo_logo.png",
  },
  missionOuivalo: {
    title: "Les missions de Ouivalo",
    blocs: [
      {
        title: "Service de compostage",
        description:
          "Ouivalo propose aux citoyens un abonnement permettant de déposer son seau de compost dans un magasin partenaire.",
      },
      {
        title: "Prestations sur mesure",
        description:
          "Ouivalo propose ses services à des particuliers pour la création de leur site internet.",
      },
      {
        title: "Développement d’outils",
        description:
          "La startup a pour vocation de développer des outils destinées aux citoyens et aux collectivités.",
      },
    ],
    color: "orange.500",
  },
  competences: [
    {
      content: Angular,
    },
    {
      content: PrimeNG,
    },
    {
      content: Autonomie,
    },
  ],
  missions: {
    tabs: [
      {
        headerTitle: "Développement Web",
        content: MissionCard({
          title: "Développement d'un outil pour un prestataire",
          mission: "Développer le Front End d'une application Web en Angular",
          descriptions: ["Test", "test"],
        }),
      },
      {
        headerTitle: "Nettoyage des seaux",
        content: MissionCard({
          title: "Opération lavage des seaux tous les mercredis",
          mission:
            "Ouivalo proposant un service de compostage des bio-déchets en louant des seaux aux particuliers, nous nous occupons de les réceptionner et les laver.",
          descriptions: [
            "Vidange des seaux de bio-déchets dans des grands bacs",
            "Nettoyage de chaque seau et couvercle",
            "Rangement des seaux, bacs de nettoyage",
          ],
        }),
      },
    ],
  },
  bilan: [
    {
      title: "Autonomie",
      description:
        "Ce poste m'a permis d'apprendre à être autonome car j'ai su travailler seule sur le côté front-end de l'application.",
    },
    {
      title: "Première expérience professionnelle",
      description:
        "Étant ma première expérience professionnelle en tant que développeuse web, cela a confirmé ma volonté de continuer dans ce milieu et d'en faire mon métier. ",
    },
  ],
};
