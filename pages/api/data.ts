import Photo from "../../assets/photo";
import { HeroProps } from "../../components/general/Hero/Hero";
import { ExperienceCardProps } from "../../components/pages/Home/ExperienceList/ExperienceCard/ExperienceCard";
import { ScolariteCardProps } from "../../components/pages/Home/ScolariteCard";
interface pageDataInterface {
  hero: HeroProps;
  experiences: ExperienceCardProps[];
  scolarite: ScolariteCardProps;
}
export const pageData: pageDataInterface = {
  hero: {
    subTitle: "Étudiante, développeuse, comédienne...",
    title: "Mais qui est Liv' ?",
    descriptions: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iur numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iuriusto fuga praesentium",
      "Je suis une comédienne et je suis passionnée par la création de contenus pour les réseaux sociaux.",
    ],
    buttons: [
      {
        label: "Voir mes articles",
        link: "/blog",
      },
      {
        label: "Découvrir mes projets",
        link: "/projets",
      },
    ],
    vector: Photo,
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
    etablissement: "Université Catholique de Nantes",
    dates: "Septembre 2018 - Janvier 2020",
    descriptions: [
      "Découverte des techniques de communication : pratique en audiovisuel - journalisme - développement web - réalisation de dossiers",
      "Cette licence m’a permis de découvrir le développement web grâce aux modules HTML/CSS et JS. En seconde année, j’ai décidé de prendre l’option PPE+ Web (Projet Professionnel Étudiant) pour pouvoir approfondir mes connaissances dans le domaine du web.",
      "J’ai décidé d’arrêter ma licence au cours de la seconde année car mon projet professionnel s’est dirigé vers le développement web plutôt que la communication.",
    ],
  },
};
