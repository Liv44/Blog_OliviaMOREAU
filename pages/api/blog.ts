import Web2Day from "../../components/pages/Blog/Article/Web2day";

export interface articleProp {
  id: number;
  title: string;
  description: string;
  content?: React.ReactNode;
  photo?: string;
}

export const blogData: articleProp[] = [
  {
    id: 1,
    title: "Le Web2Day à Nantes",
    description:
      "Le mercredi 1er juin, j'ai pu assister au Web2Day, voici un détail des conférences qui m'ont marquées.",
    photo: "/articles/web2day.png",
    content: Web2Day({}),
  },
  {
    id: 2,
    title: "Les React Meetup",
    description:
      "React Meetup, ou comment découvrir de nouvelles choses blablabal",
    photo: "/articles/reactmeetup.jpeg",
  },
  {
    id: 3,
    title: "Article 3",
    description:
      "React Meetup, ou comment découvrir de nouvelles choses blablabal",
  },
  {
    id: 4,
    title: "Article 4",
    description:
      "React Meetup, ou comment découvrir de nouvelles choses blablabal",
  },
  {
    id: 5,
    title: "Article 5",
    description:
      "React Meetup, ou comment découvrir de nouvelles choses blablabal",
  },
];
