[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/9MU6412l)
# Laboratoire 4 : Afficheur de Gifs et Stickers

## Objectif

L'objectif de ce laboratoire est de consolider les notions vues précédemment en développant une application web interactive qui utilise l'API GIPHY pour rechercher et afficher des GIFs ou des stickers. Ce projet mettra en pratique les appels réseaux via une API, la manipulation du DOM avec JavaScript et l'affichage dynamique de données.


## Évaluation

Le devoir sera noté selon les critères suivants :

| Critère                                                                    | Points |
| -------------------------------------------------------------------------- | ------ |
| Fonctionnalité de recherche et affichage des GIFs                          | 20     |
| Fonctionnalité de recherche et affichage des stickers                      | 20     |
| Gestion des erreurs et messages utilisateur                                | 15     |
| Qualité de l'interface utilisateur et réactvité                            | 15     |
| Qualité du code et bonnes pratiques (modularité, lisibilité, commentaires) | 15     |
| Documentation et explication du code                                       | 15     |
| **Total**                                                                  | 100    |

---

## Aperçu du projet

L'application devra comprendre :

1. Une barre de recherche permettant à l'utilisateur d'entrer un mot-clé.
2. Deux boutons :
   - "Rechercher des GIFs" qui affiche 5 GIFs correspondant à la requête.
   - "Rechercher des stickers" qui affiche 5 stickers correspondant à la requête.
3. Une zone d'affichage des résultats qui se met à jour à chaque nouvelle recherche et qui doit être structurée de manière à maintenir un alignement cohérent, quelle que soit la taille des images affichées.
4. Un message affiché lorsque la recherche ne retourne aucun résultat.
5. Un design adaptatif qui s'affiche correctement sur différentes tailles d'écran.

---

## Instructions détaillées

### Partie 1 : Mise en place de l'interface utilisateur ** Fait le 14 fevrier

- Créez un fichier HTML contenant les éléments suivants :
**Fait le 14 fevrier**
  - Une **barre de recherche** (`<input type="text">`) permettant à l'utilisateur d'entrer un mot-clé.
  **Fait le 14 fevrier** 
  - Deux **boutons** : un pour rechercher des GIFs, un autre pour rechercher des stickers. 
  **A faire**
  - Une **section d'affichage des résultats** (par exemple : `<div id="results">`) qui sera mise à jour dynamiquement.
  **Fait le 14 fevrier**
- Assurez-vous que la page est **responsive**, avec un affichage cohérent sur mobile et desktop.

### Partie 2 : Connexion à l'API GIPHY **Fait le 17 fevrier**

**API Clé GIF: IQQrp4vkNqq7bbsURXghOGyGtbZTa7fS**
**API Clé Stickers: O7gPoOaUS1oleGeMFJPPO4mpfIcAbZGP**
**API Paramètres : https://developers.giphy.com/explorer/**

https://api.giphy.com/v1/gifs/search?api_key=IQQrp4vkNqq7bbsURXghOGyGtbZTa7fS&q=cat&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips

https://api.giphy.com/v1/gifs/search?api_key=IQQrp4vkNqq7bbsURXghOGyGtbZTa7fS&q=${query}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips

https://api.giphy.com/v1/stickers/search?api_key=O7gPoOaUS1oleGeMFJPPO4mpfIcAbZGP&q=cat&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips

https://api.giphy.com/v1/stickers/search?api_key=O7gPoOaUS1oleGeMFJPPO4mpfIcAbZGP&q=${query}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips

1. **Créer un compte et obtenir une clé API** : **API Clé : IQQrp4vkNqq7bbsURXghOGyGtbZTa7fS **
   - Rendez-vous sur [GIPHY Developers](https://developers.giphy.com/)
   - Inscrivez-vous et récupérez une **clé API gratuite**. 
2. **Comprendre la documentation de l'API** :
   - Étudiez comment utiliser les **paramètres d'URL** pour obtenir les résultats souhaités.
   - Par exemple, une requête pour rechercher des GIFs de chats pourrait ressembler à :
     ```
     https://api.giphy.com/v1/gifs/search?api_key=VOTRE_CLÉ_API&q=cat&limit=5
     ```
   - Pour rechercher des stickers, simplement lire la documentation afin de voir comment formuler votre requête correctement 😉.

### Partie 3 : Développement en JavaScript

1. **Récupérer la requête de l'utilisateur** : 
**Fait le 16 fevrier**
   - Récupérez le texte saisi dans la barre de recherche lorsque l'utilisateur clique sur un bouton.
2. **Effectuer une requête à l'API** :
   **Correctement ?** 
   - Utilisez `fetch` et `async/await` pour interagir avec l'API.

   **Fait le 16 fevrier**
   - Gérez les paramètres `q` (mot-clé de recherche) et `limit=5`.
3. **Traiter la réponse** : 
**Fait le 16 fevrier**
   - Vérifiez que l'API retourne des résultats avant d'afficher les images.
   - Si aucun résultat n'est trouvé, affichez un message dans la zone de résultats.
4. **Afficher les images dans la page** :
   **Fait le 16 fevrier**
   - Extraire l'URL des images depuis la réponse de l'API.
   - Afficher les images dans la section `#results`.

   ** A faire**
   - Nettoyer la zone d'affichage avant chaque nouvelle recherche.

**A faire **
5. **Gérer les erreurs** : 
   - Utilisez `try/catch` pour capturer les erreurs de connexion à l'API.
   - Affichez un message d'erreur en cas de problème.

### Partie 4 : Améliorations supplémentaires

- **Ajoutez une animation** pour indiquer le chargement des résultats.
  - (Vous pouvez ajouter un indicateur visuel comme un spinner et simuler un délai avec `setTimeout()` pour reproduire un temps de réponse réseau lent réaliste.)
- **Ajoutez un compteur** du nombre de résultats affichés.
- **Affichez plus d'informations** sur chaque image (ex: titre du GIF, source, auteur).
- **Ajoutez une pagination** pour voir plus de résultats.
- ***AVANCÉ : Utilisez localStorage pour enregistrer les dernières recherches.*** 

---

## Livrables

- Un dossier contenant :
  - `index.html` : Structure de la page web.
  - `styles.css` : Mise en page et styles.
  - `script.js` : Code JavaScript avec commentaires.
  - Un fichier `README.md` expliquant le fonctionnement du projet et comment l'exécuter.
  - Un dossier `assets/` contenant un **favicon** obligatoire.

NB : Vous pouvez ajouter des fichiers supplémentaires si nécessaire.

---

## Conseils

- Testez régulièrement votre code.
- Utilisez la console (`console.log()`) pour comprendre la structure des données retournées par l'API.
- Suivez les bonnes pratiques de développement (indentation, modularité, commentaires clairs).
- Expérimentez avec les différentes options de l'API pour personnaliser votre projet.

---

## Ressources utiles

- [Documentation API GIPHY](https://developers.giphy.com/docs/api#quick-start-guide)
- [Tutoriel Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [CSS Responsive Design](https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Responsive/responsive_design_basics)
