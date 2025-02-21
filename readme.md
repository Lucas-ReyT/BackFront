# Gestion de Librairie

Ce projet est une application de gestion de librairie simple, construite avec React pour le frontend et utilisant une base de données MongoDB. L'application permet de gérer une collection de livres avec des fonctionnalités de création, lecture, mise à jour et suppression (CRUD).



## Fonctionnalités

- **Affichage de la liste des livres** : Voir tous les livres disponibles.
- **Ajout de livres** : Ajouter un nouveau livre à la liste.
- **Lecture des détails d'un livre** : Voir les détails d'un livre spécifique.
- **Mise à jour des livres** : Modifier les détails d'un livre existant.
- **Suppression de livres** : Supprimer un livre de la liste.

## Prérequis

- Node.js et npm (ou yarn)
- Docker et Docker Compose

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/Lucas-ReyT/BackFront.git
   cd gestion-librairie

## Installer les dépendances :

npm install

## Utilisation

    Démarrer l'application :

    npm start

    Ouvrir l'application dans le navigateur :
        L'application devrait s'ouvrir automatiquement à http://localhost:3000.


## API
Endpoints

    GET /api/books : Récupérer la liste de tous les livres.
    GET /api/books/:id : Récupérer les détails d'un livre spécifique.
    POST /api/books : Ajouter un nouveau livre.
    PUT /api/books/:id : Mettre à jour les détails d'un livre existant.
    DELETE /api/books/:id : Supprimer un livre.

## Méthodes HTTP

    GET : Récupérer des données.
    POST : Ajouter des données.
    PUT : Mettre à jour des données.
    DELETE : Supprimer des données.

## Paramètres

    GET /api/books : Aucun paramètre requis.
    GET /api/books/:id : id (ID du livre).
    POST /api/books : Corps de la requête JSON avec les champs title, author, publishedYear.
    PUT /api/books/:id : Corps de la requête JSON avec les champs title, author, publishedYear.
    DELETE /api/books/:id : id (ID du livre).

## Codes de réponse

    200 OK : Requête réussie.
    201 Created : Ressource créée avec succès.
    204 No Content : Ressource supprimée avec succès.
    400 Bad Request : Requête mal formée.
    404 Not Found : Ressource non trouvée.
    500 Internal Server Error : Erreur serveur.