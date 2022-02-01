# 💼 CLIENT 💼

Ce dossier contient la partie client du projet GEPUSOAF en **JavaScript**, réalisé avec le framework `React 17`.  
Il a été réalisé avec l'IDE [Webstorm 2021.2.3](https://www.jetbrains.com/fr-fr/webstorm/download/)&nbsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WebStorm_Icon.png/1024px-WebStorm_Icon.png" alt="drawing" width="20"/>. Il est préférable de l'utiliser à des fins de compatibilité.  
Notez cependant qu'il est possible d'utiliser [IntelliJ Ultimate 2021.2.3](https://www.jetbrains.com/fr-fr/idea/download/#section=windows)&nbsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png" alt="drawing" width="20"/>, qui marche tout aussi bien.

## Comment le faire fonctionner en local ? ✨

Pour un meilleur fonctionnement, suivre les étapes suivant dans l'ordre ❗

### Ouverture dans l'IDE $nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WebStorm_Icon.png/1024px-WebStorm_Icon.png" alt="drawing" width="20"/>  

1. Ouvrir l'IDE `WebStorm`, si possible à jour avec la dernière version en date (2021.2.3).
2. Après avoir cloné ce repository, ouvrir le dossier `/client` (dans la racine de ce projet).
3. Les dépendnaces et les fichiers vont s'indexer tout seul par WebStorm.
4. Se rendre dans `client\package.json` pour afficher toutes les dépendances du projet et vérifier qu'il n'y a pas d'erreur.
5. Si l'IDE vous propose de faire un `npm install` à travers une fenêtre de ce genre, cliquez sur `Run 'npm install'` :
<img src="https://user-images.githubusercontent.com/64494563/152064009-999ab7ae-ffa6-477b-95ad-a6937951dd5d.png" width="300"/>

Sinon, allez dans ![image](https://user-images.githubusercontent.com/64494563/152064553-066d9fe7-008a-4723-a116-bda167d76ebd.png)
 verifiez que vous êtes bien dans le dossier `client` en faisant un `cd client` et lancez un `npm install`.

| 👉 | Le `npm install` peut prendre plusieurs minutes au début.
|---------------|------------------------|

7. Attendre la fin du `npm install`, puis de l'indexation.

### Configuration du client 📄  

Se rendre dans le fichier `client\src\config.json`. Il y a plusieurs paramètres :
#### **`config.json`**
```json
{
  "apiUrl": "https://gepusoaf.herokuapp.com/api",
  "apiUrlLocal": "http://localhost:8080/api",
  "isLocal": true,
  "forceLogin": false
}
```

| 👉 | `apiUrl` correspond à l'url de l'API du back hebergé sur [Heroku](https://www.heroku.com/) pour ne pas avoir à lancer le back en local à chaque fois pendant le développement |
|---------------|------------------------|
| 👉 | `apiUrlLocal` correspond à l'API du back en local, une fois lancé dans IntelliJ ([voir les instructions pour le back en local](https://github.com/remi-martinez/gepusoaf/blob/master/server/README.md))|
| 👉 | `isLocal` définit si le client va se connecter sur le back en local ou sur le serveur. A laisser à `true` par défaut.|
| 👉 | `forceLogin` force la connexion en cas de débug. Vous serez connecté en tant que Rémi Martinez, étudiant.|

S'assurer que `apiUrlLocal` est bien renseigné, que `"isLocal": true` et `"forceLogin": false`.

### Lancement de l'application ▶️

1. Aller dans `client\package.json`
2. Cliquer sur le bouton de la ligne suivante :  
![image](https://user-images.githubusercontent.com/64494563/152062694-827d05c8-6b06-4cf6-a679-6c0b225a4f9f.png)

L'application s'est ajoutée à votre liste de configurations WebStorm. On peut le voir dans le coin supérieur droit :  
![image](https://user-images.githubusercontent.com/64494563/152062810-f50db5ba-480b-431f-beb7-8499dc9e0bba.png)  
L'application vient de se lancer dans l'onglet ![image](https://user-images.githubusercontent.com/64494563/152063754-d5a2dc0e-f343-46cd-b681-132b2c6473a7.png)  
Si tout fonctionne bien, la console affiche les messages suivants :  
  
#### **`console`**  
![image](https://user-images.githubusercontent.com/64494563/152063730-4df23385-0af6-4dd8-8e4e-0da8eafb256b.png)

3. L'application est lancée sur le port `:3000` par défaut. Pour tester si tout fonctionne bien, se rendre dans votre navigateur : 
http://localhost:3000/ ➡️ affiche le site ! 🎉 

4. Connectez-vous en tant qu'étudiant : avec login = `benpas01` ; mdp = `benpas01` par exemple.  
Ou en tant que professeur : avec login = `shaann01` ; mdp = `shaann01` ⭐



 
