import BilanArticle from "../../public/articles/Bilan/BilanArticle";
import MeetupReactArticle from "../../public/articles/MeetupReact/MeetupReactArticle";
import Recherche from "../../public/articles/Recherche/Recherche";
import web2DayArticle from "../../public/articles/Web2Day/web2DayMD";

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
    title: "Le Web2Day à Nantes",
    description:
      "Le mercredi 1er juin, j'ai pu assister au Web2Day, voici un détail des conférences qui m'ont marquées.",
    photo: "/articles/Web2Day/web2day.png",
    content: web2DayArticle,
  },
  {
    id: 2,
    title: "Les Meetup React",
    description:
      "Meetup React : pour rencontrer des développeurs nantais et apprendre de nouveaux concepts de ReactJS.",
    photo: "/articles/MeetupReact/react_meetup.png",
    content: MeetupReactArticle,
  },
  {
    id: 3,
    title: "Bilan Expérience Professionnelle",
    description:
      "Dans le cadre de ma formation, j'ai réalisé un CDD en développement web. Voici un bilan de cette expérience.",
    photo: "/olivia_seau.png",
    content: BilanArticle,
  },
  {
    id: 4,
    title: "Recherche d'alternance et de stage",
    description:
      "Pour valider ma 2ème année et continuer en 3ème année, j’ai recherché un stage te une alternance en quelques mois. Retour sur ce que j’ai retenu de ces recherches.",
    photo: "/articles/Recherche/search.jpg",
    content: Recherche,
  },
  {
    id: 5,
    title: "Article 5",
    description:
      "React Meetup, ou comment découvrir de nouvelles choses blablabal",
  },
];
