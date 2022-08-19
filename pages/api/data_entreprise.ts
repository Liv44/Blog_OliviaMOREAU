import { BannerProps } from "../../components/general/Banner";
import { CompetenceCardProps } from "../../components/general/Competences/CompetenceCard";
import { FinalContentProp } from "../../components/general/FinalCard";
import { HeroProps } from "../../components/general/Hero/Hero";
import { TabsProps } from "../../components/general/Tabs";
import Angular from "../../components/pages/Entreprise/CompetencesEntreprise/Angular";
import Docker from "../../components/pages/Entreprise/CompetencesEntreprise/Docker";
import FileZilla from "../../components/pages/Entreprise/CompetencesEntreprise/FileZilla";
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
      "Ouivalo est une start-up créée en 2019 par Camille MARHADOUR-SAVARY, Kevin HAMON et Richard HUGOU dans le but de sensibiliser au compostage et proposer des solutions pour la gestion des biodéchets en ville.",
      "Depuis février 2020, les bureaux de Ouivalo se situent dans les locaux de Centrale. L'incubateur Centrale Audencia ENSA propose un dispositif d'accompagnement pour les start-ups pour leur permettre de développer leurs projets, grâce à des moyens financiers, matériels et des heures d'expertises sur l'entrepreunariat.",
      "L’équipe se compose de 3 co-fondateur.ice.s, Camille, Kevin et Richard, de 2 alternants en développement web (Matis et Kael), et lors de mon CDD étaient aussi présent.e.s Alix (stagiaire en Communication), Déborah (stagiaire en développement commercial), et Rémi (développeur Back-End).",
      "Ouivalo veut faciliter le compostage en ville en proposant des outils innovants et performants pour les particuliers et les collectivités. En effet, en 2024, les collectivités auront l'obligation de proposer une solution de gestion de biodéchets, l'équipe de Ouivalo travaille alors sur des solutions numériques.",
    ],
    lienImage: "./ouivalo_logo.png",
  },
  missionOuivalo: {
    title: "Les activités de Ouivalo",
    blocs: [
      {
        title: "Service de compostage",
        description:
          "Ouivalo propose actuellement un service dédié aux citoyens. Il consiste en un abonnement permettant de récupérer un seau vide dans un magasin partenaire et de le redéposer une fois rempli de biodéchets. L'équipe de Ouivalo s'occupe ensuite de les récupérer, de les vider puis de les nettoyer. Le compost est ensuite récupéré par un prestataire.",
      },
      {
        title: "Prestations sur mesure",
        description:
          "L'équipe de Ouivalo ayant des connaissances dans le développement web, elle propose ses services à des professionnels pour la création de leur site. Cela permet de développer les compétences des salariés et d'aider les professionnels à réaliser leurs projets.",
      },
      {
        title: "Développement d’outils",
        description:
          "Au delà de la récolte des seaux, Ouivalo propose des aides afin de faciliter la gestion des biodéchets en ville. L'équipe de Ouivalo développe donc actuellement une plateforme en ligne répertoriant les différentes solutions de compostage en France, mais aussi un guide de tri intelligent via une application mobile. Sur le plan plus technique, Richard HUGOU travaille sur un object connecté permettant de récupérer les données d'un bac de compost et de les transmettre à un back office pour faciliter la gestion des différents bacs dans une collectivité.",
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
      content: Docker,
    },
  ],
  missions: {
    tabs: [
      {
        headerTitle: "Développement Web",
        content: MissionCard({
          title: "Développement d'un outil pour un prestataire",
          mission: "Récupérer les données d'une API pour les afficher en Front",
          descriptions: [
            "Ma principale mission durant ce CDD a été le développement d'une application. Dans un premier temps j'ai pris connaissance des maquettes sur Figma. J'ai commencé à créer les différents composants utiles, puis lorsque l'API côté Back était fonctionnelle, j'ai récupéré les données pour pouvoir les mettre en forme.",
            "J'ai pu ainsi créer un outil affichant diverses données, gérer différentes pages avec les Routers, créer des formulaires pour renvoyer des données à l'API.",
            "J'ai travaillé la plupart du temps seule en tant que développeuse Front End sur cette application, parfois rejointe par Mathis (alternant) et Kevin (cofondateur) pour certaines pages. Rémi (Développeur Django) s'est lui occupé de la partie Back End.",
          ],
        }),
      },
      {
        headerTitle: "Nettoyage des seaux",
        content: MissionCard({
          title: "Opération lavage des seaux",
          mission:
            "Ouivalo proposant un service de compostage des bio-déchets en louant des seaux aux particuliers, nous nous occupons de les réceptionner et les laver.",
          descriptions: [
            "Chaque mercredi après-midi, nous allons tous ensemble juste à côté des bureaux pour réceptionner une centaine de seaux. Nous commençons par les vider dans des grands bacs qui seront récupérés par une entreprise qui videra tous ces biodéchets chez des agriculteurs pour leurs terres",
            "Après les avoir vidés, nous passons au nettoyage de chaque seau et couvercle, à la main, dans des bacs. Puis, nous les rangeons dans une cabane afin qu'ils sèchent et qu'ils puissent être redistribués aux magasins.",
          ],
        }),
      },
    ],
  },
  bilan: [
    {
      title: "Montée en compétences",
      description: `
      Cette première expérience professionnelle m'a permis de monter en compétences. J'y ai découvert le travail en entreprise, avec un réel projet de développement web.
      J'ai donc développé mes compétences en Front-End grâce à l'apprentissage du Framework Angular.
      Cela a confirmé ma volonté de continuer dans ce milieu et d'en faire mon métier.`,
    },
    // {
    //   title: "Autonomie",
    //   description: `Travaillant en majorité seule sur le côté front-end de l'application, j'ai appris à être très autonome. Je sais maintenant mieux chercher par moi-même les solutions à mes problèmes pour avancer plus rapidement.
    //   J'ai tout de même ressenti parfois de la frustration à mettre du temps à résoudre un problème à cause de mon manque de savoir sur certains points.
    //   Mes collègues étaient là quand je bloquais trop longtemps sur une tâche.
    //   // Cependant, j'ai travaillé seule pendant 2 semaines, les autres collègues développeurs étant en vacances  sans collègue développeur qui pouvait m'aider en cas d'erreur.
    //   Mais j'ai pris confiance en moi et j'ai développé mon autonomie.
    //   Par la suite, grâce à mon alternance, j'espère pouvoir travailler en équipe pour apprendre à mieux travailler en équipe.`,
    // },
    {
      title: "Remerciements",
      description: `
      Je remercie Kevin de m'avoir fait confiance pour me proposer ce poste en CDD, c'était pour moi une très belle opportunité. 
      Je remercie aussi Camille et Richard qui m'ont très bien accueillie dans l'entreprise. 
      Merci aussi aux collègues avec qui j'ai pu échanger durant ces 3 mois.`,
    },
  ],
};
