Lors de ma mission en CDD à Ouivalo, j’ai développé la navigation sur le site grâce au routing Angular.

L’application sur laquelle j’ai travaillé ces derniers mois contenait différents pages, dont certaines avec des composants similaires. Au lieu de répéter les composants à chaque fichier, nous allons utiliser le routing pour permettre aux pages de charger seulement les éléments nouveaux.

Exemple : Une page d’accueil contient un header, un footer, puis le contenu variera au milieu en fonction de la page chargée.

Pour faire cela, Angular propose une solution. On peut déclarer les différentes routes de l'application dans un fichier spécifique, ici dans le fichier `app-routing.module.ts`, on va définir les noms des routes et les composants qui seront chargés lorsque l'utilisateur ira sur une route spécifique. On peut aussi ne pas définir de composant mais un autre module qui lui aura aussi des routings.

Exemple: dans notre page blog, on peut charger différents composants. alors, on va créer un nouveau fichier `blog-routing.module.ts` et on redéclare de nouvelles routes et de nouveaux composants.

On peut aussi déclarer des pages d'erreur si jamais la route n'est pas définie.
