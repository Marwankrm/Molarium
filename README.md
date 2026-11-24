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
- `hopital` : notes sur la pratique du service. **Non affichées** sur le site (conservées dans les fichiers) : les informations utiles sont reprises dans les étapes, le matériel et les consignes.
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
- Thème clair uniquement, taille du texte réglable, impression / PDF (toutes les sections sont dépliées à l'impression).

## Composants tiers

- **Motion** (version « mini », `js/motion-mini.js`, licence MIT, voir `js/motion-LICENSE.md`) : micro-animations, désactivées si l'appareil demande moins d'animations.
- **Figtree** (police, `css/fonts/`, licence SIL OFL 1.1) : hébergée avec le site, aucune requête vers un service externe.


## Page « Matériaux »
`data/materiaux.js` contient la synthèse des matériaux du service (indications, contre-indications, méthode, source) affichée sur `#/materiaux`. Chaque produit porte un statut de source : `lue` (notice du fabricant lue), `part` (notice partielle) ou `abs` (notice non trouvée). Même balisage que les fiches (`**gras**`). À valider par l'encadrant.

## Photos des produits (page « Matériaux »)

Les photos de `img/materiaux/` ont été récupérées sur les sites des fabricants ou de revendeurs (liste, crédit et lien de chaque photo dans `data/materiaux-img.js`). Elles restent la propriété de leurs détenteurs et ne sont là qu'à titre d'illustration pédagogique, sans but commercial ; elles seront retirées sur simple demande. Pour ajouter ou remplacer une photo : déposer le fichier dans `img/materiaux/<id du produit>.jpg` et ajouter la ligne correspondante dans `data/materiaux-img.js`.
