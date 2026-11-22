# Protocoles cliniques – Odontologie · CHU Dijon Bourgogne

Site statique (HTML/CSS/JS, aucune dépendance, aucun build).

## Utilisation

- En local : ouvrir `index.html` dans un navigateur.
- En ligne : déposer le dossier tel quel sur n'importe quel hébergement statique (GitHub Pages, Netlify, serveur de l'établissement…).

## Ajouter ou modifier un protocole

Les contenus sont dans `data/`, un fichier par discipline.

- **Modifier** : éditer le fichier de la discipline (ex. `data/endodontie.js`).
- **Ajouter un protocole** : ajouter un objet dans le tableau `protocoles` (copier un existant).
- **Ajouter une discipline** : copier un fichier de `data/`, changer `id`, `nom`, `sigle`, `couleur`, `ordre`, puis ajouter la balise `<script src="data/xxx.js"></script>` dans `index.html`.

Champs d'un protocole : `id`, `titre`, `resume`, `duree`, `niveau`, `statut`, `sourceType`, `maj`, `hopital`, `indications`,
`contreIndications`, `prerequis`, `materiel`, `alertes`, `etapes` (`titre`, `details`, `astuce`), `suivi`, `complications`, `references`.

- Par séance (`etapes`) : `materiel` (liste du matériel de la séance) et `validation` (étape à faire valider par l'encadrant).
- `consignes` (consignes au patient) et `erreurs` (erreurs fréquentes) : sections affichées en fin de fiche.
- `hopital` : liste de lignes décrivant **la pratique et les matériaux du CHU** ; affichée en tête de fiche dans un encadré « Pratique au CHU de Dijon ».
- `sourceType` : origine du contenu (badge vert « Source : … »).
- `annexes` : sections de référence (`titre`, `court`, `icone`, `intro`, `table:{cols,rows}`, `sections:[{titre, texte, items, alerte}]`) affichées après le déroulement.
- Dans les textes : `**gras**`, `[[zone à compléter]]` (surbrillance orange) et `[texte du lien](https://…)`.

## Validation

Tous les protocoles sont en `statut: "brouillon"` (badge « À valider »). Une fois relu par le référent du service,
passer à `statut: "valide"` et renseigner `validePar: "Dr X"` : le badge devient « Validé ».

## Fonctions

- **Ordinateur** : menu latéral par discipline, sommaire de la fiche, recherche instantanée (touche `/`).
- **Téléphone** : barre de navigation en bas, sections repliables, sommaire défilant, suivi des étapes avec barre de progression fixe, option « Écran allumé » pendant un soin.
- **Préparer la séance** : liste de matériel à cocher, par séance ou générale, mémorisée sur l'appareil et copiable.
- **Favoris** et **récemment consultés** (mémorisés sur l'appareil).
- **Points à préciser** : page qui rassemble automatiquement toutes les zones `[[à préciser]]` des fiches, avec un bouton pour copier la liste.
- Mode sombre, taille du texte réglable, impression / PDF (toutes les sections sont dépliées à l'impression).
