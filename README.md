# Gestion des Tâches et des Projets

Ce projet est une application web de gestion des tâches et des projets, développée avec Vue.js 3 et Vite. Elle permet de gérer efficacement les tâches et les projets associés, tout en offrant une interface utilisateur intuitive grâce à l'utilisation de Bootstrap. La gestion des états est réalisée avec Pinia, et la navigation entre les différentes sections est gérée avec Vue Router.

## Fonctionnalités

### Tâches
- **Ajouter une nouvelle tâche** : Permet d'ajouter une tâche en spécifiant son nom, sa description, ses dates de début et de fin, ainsi que le projet associé.
- **Lister toutes les tâches** : Affiche toutes les tâches dans un tableau, avec des options pour modifier, visualiser ou supprimer chaque tâche.
- **Voir les détails d'une tâche** : Permet d'afficher les détails complets d'une tâche sélectionnée.
- **Mettre à jour une tâche** : Offre la possibilité de modifier les informations d'une tâche existante.
- **Supprimer une tâche** : Permet de supprimer une tâche de la liste.

### Projets
- **Ajouter un nouveau projet** : Permet d'ajouter un projet en spécifiant son nom, ses dates de début et de fin.
- **Lister tous les projets** : Affiche tous les projets dans un tableau, avec des options pour modifier, visualiser ou supprimer chaque projet.
- **Voir les détails d'un projet** : Permet d'afficher les détails complets d'un projet sélectionné.
- **Mettre à jour un projet** : Offre la possibilité de modifier les informations d'un projet existant.
- **Supprimer un projet** : Permet de supprimer un projet de la liste.

## Attributs des Tâches

- **Nom** : Le nom de la tâche.
- **Description** : Une description détaillée de la tâche.
- **Date de début** : La date à laquelle la tâche commence.
- **Date de fin** : La date à laquelle la tâche est prévue pour se terminer.
- **Projet** : Le projet auquel la tâche est associée (sélectionné parmi les projets existants).

## Attributs des Projets

- **Nom** : Le nom du projet.
- **Date de début** : La date à laquelle le projet commence.
- **Date de fin** : La date à laquelle le projet est prévu pour se terminer.

## Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

### Installation du Projet

1. **Cloner le dépôt :**

```sh
   git clone https://github.com/AssaBaradji/Gestion_taches.git
   cd gestion_taches
```

## Installer les dépendances :

```sh
npm install
```

# Configuration

## Lancer le serveur de développement :

```sh
npm run dev
```
## Installer Pinia :

```sh
npm install pinia
```

## Installer Vue Router :
```sh
npm install vue-router@4
```
## Installer Bootstrap :

```sh
npm install bootstrap
 ```
## Configuration

## Importer Bootstrap dans votre projet :

- Dans src/main.js, ajoutez l'import de Bootstrap CSS :

- javascript

import 'bootstrap/dist/css/bootstrap.min.css';

## Lancer le serveur de développement :
```sh
npm run dev
```
## Documentation des Composants

**Tâches**

**AjouterTache** : Ce composant permet d'ajouter une nouvelle tâche à la liste en remplissant un formulaire avec les attributs nécessaires.
**ListeTaches** : Ce composant affiche la liste des tâches avec des options pour visualiser, modifier ou supprimer chaque tâche.
**ModditerTache** : Ce composant permet de modifier les informations d'une tâche existante.

**Projets**

**AjouterProjet** : Ce composant permet d'ajouter un nouveau projet avec les informations nécessaires.
**ListeProjets** : Ce composant affiche la liste des projets avec des options pour visualiser, modifier ou supprimer chaque projet.
**ModiterProjet** : Ce composant permet de modifier les informations d'un projet existant.

## Navigation

L'application utilise Vue Router pour gérer la navigation entre les différentes sections (Tâches, Projets). Chaque section est accessible depuis la barre de navigation, ce qui permet un accès rapide aux fonctionnalités associées.
Auteur

## Auteur
- Hama Houllah Mangassouba https://github.com/Mangassouba
- Assa Ousman Baradji https://github.com/AssaBaradji