# tif basé sur Nuxt.js

Enfin un jeu pour les vrais fans!

![technologies](https://github.com/jeanquark/nuxt-tif/raw/master/static/images/technologies.png "Technologies")

## Organisation
Ce repo contient l'entier du code de tif, exactement tel qu'il sera porté en ligne. Il est organisé selon la structure définie par Webpack pour Nuxt.js. L'essentiel des fichiers de travail se trouvent dans le dossier principal, avec les fichiers de logique se terminant en **.js** et les fichiers de rendu en **.vue**. Pour modifier le contenu des pages, il faut se rendre dans le dossier **/pages**.
Le texte que vous êtes en train de lire se trouve bien entendu aussi dans l'arbre du projet. C'est le fichier **README.md** à la racine du repo. Toute modification de son contenu est bienvenue!

## Technologies
L'application utilise [Nuxt.js](https://fr.nuxtjs.org/) et est écrite en [JavaScript](https://fr.wikipedia.org/wiki/JavaScript). C'est un site qui fait appel à un serveur Node.js pour la première requête et ensuite fonctionne en statique pour les requêtes suivantes, c'est à dire qu'il ne fait pas appel à un serveur, mais tourne sur le terminal du client (mobile, tablette ou ordinateur), pour une meilleure fluidité.
On associe l'application à la base de données en temps réel [Firebase](https://firebase.google.com/) de Google. 

## Installation

L'installation de l'application en local sur son ordinateur est relativement aisée mais nécessite quelques étapes.

Au préalable, il faut s'assurer d'avoir installé les dernières version de [Node](https://nodejs.org/en/) et [npm](https://www.npmjs.com/). Ces quelques [vidéos](https://www.youtube.com/results?search_query=installer+node+et+npm) peuvent vous guider dans ces démarches.
Il faut aussi installer [git](https://git-scm.com/), qui permet d'interagir avec [GitHub](https://github.com/), le site qui va héberger (gratuitement) notre code en développement. Peu connu du grand public, c'est pourtant l'un des sites les plus fréquentés au monde, car la plupart des projets en informatique (grands ou petits) y sont hébergés. Par exemple, pour voir sur quoi travaille Microsoft, on peut se rendre sur leur [page github](https://github.com/Microsoft). 
Inscription rapide et gratuite sur [github.com](https://github.com)

Pour entreprendre toutes ces étapes, vous aurez remarqué qu'il faut parfois utiliser son invité de commande (cmd.exe sous Windows). Il ressemble à cela:

![cmd](https://github.com/jeanquark/nuxt-tif/raw/master/static/images/cmd.png "Invité de commande sous Windows")

Il est bon d'être à l'aise avec certaines de ses commandes pour naviguer entre les dossiers de son ordinateur. Avec son interface minimaliste digne des premiers logiciels informatiques, l'invité de commande peut paraître peu engageant aux premiers abords, mais il est cependant d'une utilité indéniable. Avec ces 4 commandes de base, vous devriez être à même de procéder aux installations mentionnées plus haut:

```bash
# M'informer de mon emplacement actuel (Print Working Directory):
pwd

# Lister tous les fichiers et dossiers de mon répertoire actuel:
dir

# Changer de répertoire (Change Directory):
cd (+ nom du dossier)

# Revenir d'un répertoire en arrière 
cd ..
```

Pour une très courte introduction (5 min de lecture), voir [ici](http://www.commentcamarche.net/faq/29841-apprendre-a-utiliser-l-interpreteur-de-commande-dos).

Après avoir installé tous les programmes requis, vous devriez enfin être en mesure d'aller chercher le code sur GitHub et de l'installer en local sur votre machine, afin de faire toutes les modifications que vous souhaitez, sans risque pour le code source. Pour ce faire il existe plusieurs manières de procéder, mais ce que je vous conseille, c'est de faire un "fork" du [projet](https://github.com/jeanquark/nuxt-tif) vers votre compte GitHub personnel, c'est à dire de créer une nouvelle branche indépendante de la branche principale (comme sur une fourchette...), par exemple vers https://github.com/manikaes/tif. Ensuite, il faut cloner ce nouveau **repository** pour le placer en local sur votre machine grâce à la commande

```bash
git clone https://github.com/manikaes/tif
```
Plus d'informations sur le fork [ici](https://help.github.com/articles/fork-a-repo/).

Il existe énormément de ressources en ligne (vidéos, articles) pour apprendre les bases de Git et GitHub. Certes, on ne devient pas expert en quelques heures (ni même en quelques jours d'ailleurs), mais les fonctions principales sont assez accessibles et cela vaut la peine de se former, car les concepts introduits par les logiciels de gestion de version comme GitHub sont essentiels dans tout projet collaboratif. Et cela ne concerne pas que les développeurs. Imaginons par exemple un designer qui décide de changer l'apparence du logo du site. Il peut soumettre le nouveau logo via GitHub, et si cette modification est acceptée, elle peut être automatiquement uploadée vers le site en ligne. C'est quand même un processus plus simple que d'envoyer le fichier par e-mail ou de le sauvegarder quelque part dans le cloud.

A noter qu'il existe une [formation complète](https://openclassrooms.com/courses/gerer-son-code-avec-git-et-github) openclassrooms sur Git et GitHub.

Une fois le code en local, rendez-vous à son emplacement avec l'invité de commande (typiquement C:\Users\Gael\Code\tif>) et tapez

```bash
npm install
npm run dev
```
une fenêtre du navigateur devrait automatiquement s'ouvrir. Si ce n'est pas le cas, tapez *localhost:3000* dans la barre d'adresse et vous y êtes!
Et voilà, vous devriez découvrir la fenêtre suivante:
![accueil](https://github.com/jeanquark/nuxt-tif/raw/master/static/images/accueil.png "Page d'accueil")

## Extension

A l'avenir, il serait bon d'étendre le site en y intégrant les fonctionalités propres aux [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) (PWA) afin d'en faire une application véritablement "mobile friendly".


## Équipe de développement
- Gaël (chef de projet)
- Joël (graphisme)
- Basil (base de données)
- Jean-Marc (développement web)
