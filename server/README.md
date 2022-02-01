# 💥 SERVEUR 💥

Ce dossier contient la partie serveur du projet GEPUSOAF en **Java**, réalisé avec le framework `Spring Boot 2`.  
Il a été réalisé avec l'IDE [IntelliJ Ultimate 2021.2.3](https://www.jetbrains.com/fr-fr/idea/download/#section=windows)&nbsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png" alt="drawing" width="20"/>. Il est préférable de l'utiliser à des fins de compatibilité.  

## Comment le faire fonctionner en local ? ✨

Pour un meilleur fonctionnement, suivre les étapes suivant dans l'ordre ❗

### Ouverture dans l'IDE &nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/IntelliJ_IDEA_Icon.svg/1024px-IntelliJ_IDEA_Icon.svg.png" alt="drawing" width="20"/>

1. Ouvrir l'IDE `IntelliJ Ultimate`, si possible à jour avec la dernière version en date (2021.2.3).
2. Après avoir cloné ce repository, ouvrir le dossier `/server` (dans la racine de ce projet).
3. Les dépendances et les fichiers vont s'indexer tout seul par IntelliJ. 
4. Au cas où, se rendre dans `server\pom.xml` et faire un `Ctrl+Maj+O` pour mettre à jour les dépendances.
5. Pendant l'indexation des dépendances et des fichiers, on peut s'occuper de la base de données !

### Base de données 💾

1. Le serveur est fait pour tourner avec une base de données en local. Lancer sa base en local avec [XAMPP](https://www.apachefriends.org/fr/download.html) ou [WAMPServer](https://www.wampserver.com/en/download-wampserver-64bits/).
2. Une fois la base lancée, lancer le script `src\main\resources\data.sql` dans votre SGBD.
🚨 Avant de lancer le script, décommentez les lignes suivantes :
#### **`data.sql`**
```sql
CREATE DATABASE bdd_geststages;
USE bdd_geststages ;

CREATE USER 'usergs'@'%' IDENTIFIED BY 'mdpGS';
GRANT ALL PRIVILEGES ON bdd_geststages.* TO 'usergs'@'%';
```
| 👉 | Certains SGBD ne gèrent pas les deux dernières instructions `CREATE USER ...` à cause des droits. <br/> Laisser commenter ces deux lignes si le script ne se lance pas correctement.  |
|---------------|:------------------------|

---

3. Se rendre sur IntelliJ dans le fichier `src\main\resources\application.yml`.  
Vérifiez que les informations de connexion sont les bonnes.  
Par défaut (si besoin : modifier `username` et `password` par vos identifiants en base) :
#### **`application.yml`**
```yml
datasource:
  url: jdbc:mysql://localhost:3306/bdd_geststages
  username: usergs
  password: mdpGS
```

### Lancement de l'application ▶️

1. Pour lancer l'application, se rendre dans `src\main\java\com\gepusoaf\GepusoafApplication.java`  
Cliquer sur l'un des deux boutons suivants :  
![image](https://user-images.githubusercontent.com/64494563/152053809-82941c58-4993-4597-b21e-a32ddd196d47.png)

2. L'application s'est ajoutée à votre liste de configurations IntelliJ. On peut le voir dans le coin supérieur droit :  
![image](https://user-images.githubusercontent.com/64494563/152053944-8f721c2a-4087-4537-963f-1a935e2a792f.png)  
L'application vient de se lancer dans l'onglet ![image](https://user-images.githubusercontent.com/64494563/152054025-dced0b20-f7d2-4aaf-a46c-311c90ef85a0.png). 
Si tout fonctionne bien, la console affiche les messages suivants :  
  
#### **`console`**  
![image](https://user-images.githubusercontent.com/64494563/152054206-727a6474-715a-498a-b0ac-78adc66b126c.png)

3. L'application est lancée sur le port `:8080` par défaut. Pour tester si tout fonctionne bien se rendre dans votre navigateur sur une des routes :  
http://localhost:8080/api/entreprises ➡️ retourne la liste des entreprises. Début de la réponse : 

<details>
  <summary>Résultat (json)</summary>
  
  ```json
[{
    "numEntreprise": 1,
    "raisonSociale": "Webzine Maker (Campusplex)",
    "nomContact": "Antoine Dupont",
    "nomResp": "Antoine Dupont",
    "rueEntreprise": "12 Rue Général Fiorella",
    "cpEntreprise": 20000,
    "villeEntreprise": "Ajaccio",
    "telEntreprise": "01 02 03 04 05",
    "faxEntreprise": "01 02 03 04 05",
    "email": "contact@infos.fr",
    "observation": "",
    "siteEntreprise": "http://www.wmaker.net/",
    "niveau": "BAC+1/BAC+2",
    "enActivite": true,
    "specialites": [
      {
        "numSpec": 1,
        "libelle": "SLAM"
      },
      {
        "numSpec": 2,
        "libelle": "SISR"
      }
    ]
  },
  ...
```
  
</details>

4. Le serveur est lancé ! Maintenant, place au [client](https://github.com/remi-martinez/gepusoaf/tree/master/client) 🎉
  
## Ça ne fonctionne pas ! 😣

Vérifiez les points suivants :

✔ **La base de données est bien connectées ?**  
Vous pouvez faire un test de connexion dans IntelliJ avec l'onglet ![image](https://user-images.githubusercontent.com/64494563/152055835-b09ffcac-85a9-499f-9d17-3ff41b4c414a.png) sur le côté droit, en ajoutant une datasource au projet.  
  
✔ **Au moment du build, j'obtiens l'erreur `invalid target source`** :  
Votre version du JDK n'est peut-être pas la bonne. IntelliJ vous propose probablement de télécharger la version du JDK adéquate dans un bandeau bleu.  
Vous pouvez vous rendre dans `File > Project Structure (Ctrl+Alt+Maj+S) > Project` et vérifier que le Project SDK est bien lié (par défaut : `11.0.12`)

✔ **Une méthode dans le code n'est pas reconnue ?**  
Il manque peut-être une dépendance. Retournez dans le `pom.xml`, et vérifiez qu'il n'y a rien en rouge.  
Sinon, modifiez la version de la dépendance en rouge et cliquez sur ![image](https://user-images.githubusercontent.com/64494563/152056155-3032554c-1175-4a34-a43b-8987b2c3d591.png) pour faire un `Load Maven Changes`.
