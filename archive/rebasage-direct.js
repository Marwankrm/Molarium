// Fiche archivée : « Rebasage direct d'une prothèse amovible (au fauteuil) », retirée du site à la demande de l'utilisateur et conservée ici.
// Pour la remettre en ligne : copier l'objet ci-dessous à la fin du tableau `protocoles` de data/prothese-amovible.js (après la fiche « pap-chassis »),
// puis, si besoin, rétablir dans data/materiaux.js le renvoi vers la fiche (« Voir la fiche Rebasage direct »).
window.ARCHIVE = window.ARCHIVE || {};
window.ARCHIVE.rebasageDirect = 
    {
      id: "rebasage-direct",
      titre: "Rebasage direct d'une prothèse amovible (au fauteuil)",
      resume: "Réadapter l'intrados d'une prothèse existante en une séance : rebasage dur (GC Reline), rebasage souple temporaire (Coe-Soft) ou conditionnement tissulaire (F.I.T.T.). Solution temporaire en attendant un rebasage au laboratoire ou une nouvelle prothèse.",
      duree: "1 séance",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Notices fabricants (GC, Kerr) + thèse (Lille, 2022) ; pratique du service à préciser",
      maj: "2026-11",
      alertes: [
        "**Le rebasage direct est une solution temporaire** : la méthode de référence est le **rebasage indirect au laboratoire** ; au fauteuil, le matériau est moins durable, plus rugueux et sa polymérisation se fait en bouche (chaleur, monomère irritant).",
        "**Ne pas retirer la prothèse avant la prise** (déformation du matériau) : respecter strictement les temps de la notice.",
        "**Liquides inflammables** (GC Reline, bonding agent, Coe-Soft, F.I.T.T.) : éloigner toute source de chaleur ; gants, masque et lunettes de protection.",
        "**Rebaser une prothèse dont la dimension verticale, l'occlusion ou les dents sont à refaire** n'a pas de sens : il faut refaire la prothèse."
      ],
      indications: [
        "Perte de rétention ou de stabilité d'une prothèse qui était bien adaptée (résorption des crêtes, modification des tissus de soutien)",
        "**Prothèse immédiate** dont les tissus ont cicatrisé : réadaptation en attendant la prothèse d'usage",
        "**Tissus de soutien traumatisés ou non adhérents** : mise en condition tissulaire (F.I.T.T.) avant une empreinte ou une prothèse définitive",
        "Extension d'un bord de prothèse (GC Reline)",
        "Patient qui ne peut pas être privé de sa prothèse ou qui ne peut pas attendre un rebasage au laboratoire (situation exceptionnelle)"
      ],
      contreIndications: [
        "**Allergie connue aux méthacrylates** : GC Reline, Coe-Soft (et aux **salicylates** pour le Coe-Soft)",
        "**F.I.T.T.** (notice Kerr 2024 affichée au service) : **aucune contre-indication connue** ; ne pas l'utiliser en cas d'**allergie connue au méthacrylate** ; **pas de matériau à l'eugénol** avec ce produit (gêne le durcissement) ; **restrictions d'utilisation** : inflammations sévères et infections fongiques (texte partiellement masqué sur la photo)",
        "Prothèse dont la **dimension verticale** ou l'**occlusion en relation centrée** est incorrecte : la refaire plutôt que la rebaser (critères de la thèse de Lille)"
      ],
      materiel: [
        "**GC Reline** (rebasage dur) : poudre, liquide, **bonding agent**, godets, doseurs, pinceau, spatule plastique",
        "**Coe-Soft** (rebasage souple temporaire) : poudre, liquide, **Coe Lubricant**",
        "**F.I.T.T.** (Kerr, conditionneur tissulaire) : poudre, liquide, **séparateur**",
        "Vaseline ou Coe Lubricant, coton-tige, godet de mélange, spatule",
        "Fraise résine, lame de bistouri, spatule chauffée, instrument pour retirer les excès",
        "Papier à articuler, révélateur de pression (**Coltène PSI**)",
        "Gants, masque, lunettes de protection"
      ],
      etapes: [
        { titre: "Étape 1 – Évaluer la prothèse et choisir le matériau", details: [
          "Vérifier le **centrage, la dimension verticale et l'occlusion** de la prothèse ; repérer les extensions",
          "**Tissus sains et prothèse correcte** : rebasage dur (**GC Reline**) ou souple temporaire (**Coe-Soft**)",
          "**Tissus traumatisés ou à remettre en état** : **F.I.T.T.** (conditionneur tissulaire), renouvelé jusqu'à la cicatrisation",
          "Choix entre dur et souple selon la situation [[à préciser : critères du service]]"
        ], materiel: ["prothèse", "papier à articuler", "Coltène PSI"], astuce: "Un matériau **souple** (Coe-Soft) n'est utilisé que sur de courtes durées (moins de 6 mois d'après la thèse de Lille) : il absorbe l'eau et perd son élasticité." },
        { titre: "Étape 2 – Préparer la prothèse", details: [
          "**Évider et dépolir** la zone à rebaser ; **nettoyer et sécher** soigneusement la prothèse",
          "**Soulager** les contre-dépouilles et les zones de pression (F.I.T.T.)",
          "Enduire de **vaseline ou de Coe Lubricant** (au coton-tige) les **dents artificielles** et les faces vestibulaires et linguales : **pas dans les 3 mm du bord périphérique** (GC Reline, Coe-Soft). Avec le F.I.T.T. : fine couche de **séparateur** sur les faces labiales et buccales, **pas sur les surfaces à rebaser**",
          "**Si un F.I.T.T. a été posé avant un rebasage dur** : le déposer à la **fraise résine** (puis sablage si possible, d'après la thèse de Lille)"
        ], materiel: ["fraise résine", "vaseline / Coe Lubricant / séparateur", "coton-tige"], astuce: "Une marge de **3 mm** sans lubrifiant au bord de la prothèse : c'est là que le rebasage se lie à la base." },
        { titre: "Temps 3A – Rebasage dur au GC Reline", details: [
          "**Bonding agent** au pinceau sur la zone à rebaser ; **sécher à l'air environ 10 s** (volatil : refermer le flacon)",
          "Mélange standard : **1,8 g de poudre (1re graduation du doseur) pour 1 mL de liquide (1re graduation de la pipette)** ; mélanger doucement **15 s** (bord à étendre : mélange un peu plus épais)",
          "Étaler à la **spatule plastique** sur toute la surface en contact avec les tissus",
          "**Insérer la prothèse environ 1 min après le début du mélange** ; occlusion légère ; **mobiliser les joues et les lèvres** pour enregistrer le jeu musculaire",
          "**Sans contre-dépouille** : retirer les excès en bouche et laisser la prothèse **jusqu'à la prise complète (environ 5 min 30 depuis le début du mélange)**",
          "**Avec contre-dépouilles ou prothèse partielle** : retirer la prothèse à l'**état caoutchouteux (environ 2 à 2 min 30)**, retirer les excès, **remettre en bouche avant l'échauffement** ; hors de la bouche, eau chaude **40 à 50 °C pendant 3 min**",
          "**Retirer la prothèse vers 5 min 30**, finir et polir"
        ], materiel: ["GC Reline", "bonding agent", "godet, doseurs, pinceau, spatule plastique"], astuce: "**Sortie de bouche à l'état caoutchouteux** si des contre-dépouilles existent : après l'échauffement, la prothèse est difficile à désinsérer." },
        { titre: "Temps 3B – Rebasage souple temporaire au Coe-Soft", details: [
          "Mélange : **2 mesures rases de poudre (11 g) dans 8 cc de liquide** ; durée du mélange [[à préciser : temps de mélange et consistance avant application]]",
          "Étaler sur **toute la surface à rebaser**",
          "Insérer comme pour une empreinte ; le patient **mord doucement** ; **après 3 min**, mouvements des lèvres et des joues pour l'enregistrement périphérique",
          "Retirer la prothèse, **rincer à l'eau froide**, retirer les excès ; **repositionner** et demander au patient de **mordre fermement en occlusion pendant 5 min** ; retirer et rincer à nouveau à l'eau froide",
          "**Finition** après la prise complète : retirer les excès ; adoucir les bords à la **spatule chauffée**"
        ], materiel: ["Coe-Soft", "Coe Lubricant", "spatule chauffée"], astuce: "Prévenir le patient : **ni brosse ni produit abrasif** sur le rebasage souple ; nettoyage sous l'eau froide, au coton humide." },
        { titre: "Temps 3C – Conditionnement tissulaire au F.I.T.T.", details: [
          "**Prévenir le patient** qu'il peut ressentir une **piqûre** à l'insertion (elle disparaît en quelques secondes) ; **séparateur F.I.T.T.** en fine couche sur les faces labiales et buccales, **pas sur les surfaces d'appui**",
          "Doses : **grand gobelet gradué (7 mL) pour la poudre, petit gobelet (5 mL) pour le liquide** ; le rapport n'est **pas critique** : **environ 1 dose de poudre pour 1 de liquide** (mélange fin, précision maximale) à **environ 1,5 dose pour 1** (plus de corps) ; **liquide dans le gobelet mélangeur, poudre ajoutée** à la spatule métallique, **lentement et sans cesse** (pas de bulles) ; **mélanger environ 1 min**",
          "Étaler dans la prothèse ; ajouter du matériau à la petite spatule sur les bords pour former le **pourtour périphérique**",
          "**Rinçage buccal à l'eau froide**, mise en place, léger mouvement d'occlusion ; **faire jouer les muscles 1 à 2 min**, retirer les excès, remettre la prothèse",
          "**Retirer après 2 à 3 min**, couper les excès avec un **instrument coupant chaud** sans détruire le rouleau périphérique ; si la base de la prothèse apparaît (zone de pression), **soulager à travers le F.I.T.T. à la fraise carbure** ; **rincer et sécher** les zones soulagées avant d'**ajouter un petit mélange** là où il manque de produit",
          "**Replacer et contrôler après 2 à 3 min** ; pour une empreinte fonctionnelle immédiate, **couler le modèle tout de suite**"
        ], materiel: ["F.I.T.T. (poudre, liquide)", "séparateur", "fraise résine"], astuce: "Le F.I.T.T. se **renouvelle** pendant la phase de cicatrisation (jusqu'à plusieurs semaines d'après la thèse de Lille) et suit les modifications fonctionnelles pendant une douzaine de jours." },
        { titre: "Étape 4 – Contrôle et consignes", details: [
          "Contrôler **occlusion, bords, appuis** (révélateur de pression **Coltène PSI**), absence de **bulles** et de **zones douloureuses** ; retouches si besoin",
          "**Finition et polissage** (rebasage dur) ; vérifier l'absence d'**irritation de la muqueuse** (chaleur, monomère)",
          "**Consignes** au patient et **rendez-vous de contrôle** [[à préciser : délai de contrôle au service]]"
        ], materiel: ["papier à articuler", "Coltène PSI", "fraises et polissage"] }
      ],
      annexes: [
        {
          titre: "Quel matériau de rebasage choisir ?", court: "Choix du matériau", icone: "list",
          intro: "Repères tirés des notices des fabricants et de la thèse de Lille (2022). Le choix entre dur et souple dépend de la situation : critères du service à préciser.",
          table: {
            cols: ["Matériau", "Nature", "Indication (notice)", "Points clés"],
            rows: [
              ["**GC Reline**", "Résine acrylique **dure** (liquide sans méthacrylate de méthyle)", "Rebasage dur et extension de bords, au fauteuil", "1,8 g de poudre pour 1 mL de liquide ; **bonding agent** ; prise en environ **5 min 30**"],
              ["**Coe-Soft**", "Résine acrylique **souple, temporaire**", "Rebasage temporaire d'une prothèse en résine, au fauteuil", "2 mesures de poudre (11 g) pour 8 cc de liquide ; **3 min** puis **5 min** en occlusion ; **ni brosse ni abrasif** ; courtes durées (moins de 6 mois)"],
              ["**F.I.T.T. (Kerr)**", "Conditionneur tissulaire / empreinte fonctionnelle", "Empreintes fonctionnelles, rebasages thérapeutiques temporaires, conditionnement des tissus", "**environ 1 dose de poudre pour 1 de liquide** (fin) à **1,5 pour 1** (plus de corps) ; **mélange environ 1 min** ; **aucune contre-indication connue** (notice 2024), pas de matériau à l'eugénol"]
            ]
          },
          sections: [
            { titre: "Avantages et limites du rebasage direct", items: [
              "**Avantages** : une seule séance, économique, adaptation comparable à celle d'un rebasage indirect (thèse de Lille)",
              "**Limites** : polymérisation en bouche (chaleur, monomère), goût et odeur, matériau plus rugueux (colonisation microbienne, colorations), **moins durable** qu'un rebasage au laboratoire",
              "**Facteurs opérateur** : retrait avant la prise complète (déformation), tissus périphériques mal mobilisés (bord de mauvaise qualité), notice non respectée (défaut de liaison avec la base)"
            ] }
          ]
        }
      ],
      consignes: [
        "**Rebasage souple (Coe-Soft)** : **ne pas utiliser de brosse ni de produit abrasif** sur le rebasage ; nettoyer sous l'eau froide, en essuyant avec un coton humide.",
        "**Rebasage dur ou souple** : un matériau **temporaire** ; revenir aux **contrôles** prévus, ne pas retoucher la prothèse soi-même.",
        "**F.I.T.T.** : ne pas utiliser de **brosse ni de dentifrice abrasif sur la muqueuse** jusqu'au prochain rendez-vous (notice 2024) ; la prothèse rebasée **peut être portée pendant plusieurs jours** ; port de nuit [[à préciser : consigne du service]].",
        "**Douleur, brûlure ou irritation** après la pose, ou rebasage qui se décolle : revenir consulter."
      ],
      suivi: [
        "**Contrôle régulier** pendant la phase de cicatrisation ; **renouvellement du F.I.T.T.** si l'adaptation ou la rétention diminue",
        "**Suite à prévoir** : rebasage au laboratoire (méthode de référence) ou nouvelle prothèse d'usage"
      ],
      complications: [
        "**Brûlure ou irritation de la muqueuse** (chaleur de polymérisation, monomère, alcool) : risque propre au rebasage direct ; respecter les temps de la notice et contrôler la muqueuse",
        "**Prothèse difficile à désinsérer** (contre-dépouilles, retrait après l'échauffement) : la retirer à l'état caoutchouteux",
        "**Rebasage qui se décolle** : liaison insuffisante (surface non dépolie, bonding agent absent, lubrifiant sur la zone à rebaser)"
      ],
      erreurs: [
        "Désinsérer la prothèse **avant la prise** complète du matériau",
        "**Lubrifiant** appliqué sur la zone à rebaser, ou **pas de marge de 3 mm** au bord",
        "**Dents artificielles non protégées** (vaseline ou Coe Lubricant)",
        "**Surface non dépolie** ou non séchée avant le rebasage",
        "**Rapport poudre/liquide non respecté** (valeurs de la notice)",
        "**Bords non mobilisés** (joues et lèvres) pendant la prise",
        "Rebaser une prothèse à **DVO ou occlusion incorrecte**"
      ],
      references: [
        "[GC – notice GC Reline (rebasage dur chairside), révision 08/2019](https://www.gama.se/storage/6BDA6C3A6CF4861F1DB7B9A770A299F758373CF17EBBD220C0E4539FF80202E9/3ad90c766715487e857e5ef5c348dac8/pdf/media/78b43f7492214e58bf4776dbf95a65e2/IFU_Reline_W.pdf)",
        "[GC – notice Coe-Soft, révision 02/2024](https://gc.dental/europe/sites/europe.gc.dental/files/products/downloads/coesoft/ifu/22019_IFU_Coe_Soft_W.pdf)",
        "Kerr – notice F.I.T.T. **2024 affichée au service** (ratio, gobelets, contre-indications) ; ancienne notice : [rév. 06-16](https://www.proclinic.es/media/proclinic-es/annexes/99608_ifu_es_en_de_fr_it.pdf)",
        "[Messai F. Le rebasage en prothèse amovible : les différents protocoles cliniques et de laboratoire. Thèse, Université de Lille, 2022](https://pepite-depot.univ-lille.fr/LIBRE/Th_Chirdent/2022/2022ULILC051.pdf)",
        "Choix du matériau et séquence au service : à valider avec l'encadrant."
      ]
    };
