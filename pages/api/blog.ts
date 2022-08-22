import BilanArticle from "../../public/articles/Bilan/BilanArticle";
import MeetupReactArticle from "../../public/articles/MeetupReact/MeetupReactArticle";
import Recherche from "../../public/articles/Recherche/Recherche";
import CEONomade from "../../public/articles/Web2Day/CEONomade";
import Tookea from "../../public/articles/Tookea/tookea";

export interface articleProp {
  id: number;
  title: string;
  description: string;
  content?: string;
  photo?: string;
}

export const blogData: articleProp[] = [
  {
    id: 1,
    title: "Les Meetup React",
    description:
      "Meetup React : pour rencontrer des développeurs nantais et apprendre de nouveaux concepts de ReactJS.",
    photo: "/articles/MeetupReact/react_meetup.png",
    content: MeetupReactArticle,
  },
  {
    id: 2,
    title: "Bilan Expérience Professionnelle",
    description:
      "Dans le cadre de ma formation, j'ai réalisé un CDD en développement web. Voici un bilan de cette expérience.",
    photo: "/olivia_seau.png",
    content: BilanArticle,
  },
  {
    id: 3,
    title: "Recherche d'alternance et de stage",
    description:
      "Pour valider ma 2ème année et continuer en 3ème année, j’ai recherché un stage et une alternance en quelques mois. Retour sur ce que j’ai retenu de ces recherches.",
    photo: "/articles/Recherche/search.jpg",
    content: Recherche,
  },
  {
    id: 4,
    title: "Le Web2Day à Nantes (1)",
    description:
      "Le mercredi 1er juin, j'ai assisté à la conférence \"Etre CEO et nomade, rien d'impossible !\" au Web2Day à Nantes.",
    photo: "/articles/Web2Day/web2day.png",
    content: CEONomade,
  },
  {
    id: 5,
    title: "Tookea, un projet Ydays",
    description:
      "Tookea est un projet encadré par des Masters en développement web et logiciel à Ynov.",
    photo: "/articles/Tookea/tookea.png",
    content: Tookea,
  },
];
