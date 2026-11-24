window.DISCIPLINES = window.DISCIPLINES || [];

// Protocole de prise des RIM : fiche du service (d'après les recommandations CNEP / SFO 2026), commun aux trois protocoles.
var RIM_PA = {
  steps: function (pap) {
    return [
      "**1. Repères faciaux** : tracer **2 points cutanés** (sous-nasal et menton) pour mesurer les dimensions verticales au compas.",
      "**2. Mesure de la DVR** (bouche au repos, **sans base d'occlusion**) : relaxation du patient (épaules, bâillement, eau en bouche puis déglutition), puis mesure au compas. **Répéter 3 fois et prendre la moyenne.**",
      "**3. Calcul de la DVO (étape clé)** : **DVO = DVR − espace libre (2 à 3 mm)**. Elle donne la hauteur cible du bourrelet mandibulaire ; elle n'est **jamais estimée à l'œil**.",
      "**4. Base maxillaire, réglages** : adaptation pleine ; soutien labial ; plan de Fox parallèle à la ligne bipupillaire et au plan de Camper ; son **F/V** (la lèvre inférieure effleure le bourrelet) ; tracer la ligne interincisive (philtrum), la ligne du sourire et la position des canines.",
      "**5. Base mandibulaire** : vérifier la pleine adaptation, puis ajuster la hauteur du bourrelet à la **DVO calculée**.",
      "**6. Contrôle des deux bases ensemble** : absence d'interférences en ORC ; si interférences, **meuler en commençant par le maxillaire**.",
      "**7. Triangles de Patterson (dièdres)** : dièdres divergents dans le bourrelet maxillaire, en regard des **5 et 6**, qui servent de cales mécaniques anti-glissement.",
      "**8. Enregistrement de l'ORC** : **pâte de Kerr** (thermoplastique) sur le bourrelet mandibulaire en regard des 5 et 6 ; chauffer, placer, **guider le patient en ORC en lui demandant de mettre la langue au palais, en arrière**" + (pap ? " (matériau d'enregistrement : Futar, cire, Aluwax ou pâte de Kerr selon la préférence de l'opérateur)." : " (l'Aluwax reste possible selon la préférence de l'opérateur)."),
      "**9. Vérification finale de la DVO (étape souvent oubliée)** : reprendre le compas **après la fermeture sur la pâte de Kerr** et vérifier que la DVO obtenue = DVR − espace libre."
    ];
  },
  materiel: ["bases d'occlusion + bourrelets de cire", "règle de Fox, plan de Camper", "compas ou pied à coulisse", "crayon pour repères cutanés", "pâte de Kerr et source de chaleur", "instrument pour tailler les dièdres (Patterson)"],
  alerte: "**La DVO n'est jamais estimée à l'œil : elle se calcule.** DVO = DVR − espace libre (2 à 3 mm). Les RIM enregistrent la position mandibulaire (ORC) et la dimension verticale (DVO) **avant** la pose des dents : c'est l'étape qui conditionne toute la suite.",
  erreurs: [
    "**Ne pas calculer la DVO** (DVR mesurée sans soustraire l'espace libre) : DVO trop haute, problèmes phonétiques, douleurs musculaires, claquement des dents. Toujours DVO = DVR − 2 à 3 mm",
    "**Mesurer la DVR avec les bourrelets en bouche** : mesure faussée. La mesurer sans base d'occlusion, bouche au repos",
    "**Plan de Fox non parallèle à la ligne bipupillaire** : asymétrie esthétique évidente à la remise. Vérifier à la règle de Fox, de face et de profil",
    "**Oublier le son F/V** : bourrelet trop court ou trop long. La lèvre inférieure doit effleurer le bord du bourrelet maxillaire",
    "**Interférences non éliminées avant l'enregistrement** : fausse position d'ORC enregistrée. Vérifier l'absence de prématurité avant la pâte de Kerr",
    "**Pas de vérification de la DVO après la pâte de Kerr** : on ne sait pas si l'enregistrement est à la bonne DVO. Reprendre le compas après la fermeture sur la pâte de Kerr"
  ],
  annexes: [
    {
      titre: "RIM : définitions essentielles", court: "Définitions RIM", icone: "book",
      table: {
        cols: ["Terme", "Définition", "Valeur / repère clinique"],
        rows: [
          ["DVR (dimension verticale de repos)", "Position mandibulaire au repos neuromusculaire ; muscles élévateurs et abaisseurs en équilibre tonico-postural", "Mesure au compas sur repères cutanés"],
          ["DVO (dimension verticale d'occlusion)", "Distance entre les 2 repères cutanés en occlusion, prothèses en bouche", "**DVO = DVR − espace libre (2 à 3 mm)**"],
          ["Espace libre (freeway space)", "Écart entre DVO et DVR ; espace phonétique et fonctionnel indispensable", "2 à 3 mm (± 1 mm)"],
          ["ORC (occlusion en relation centrée)", "Position mandibulaire la plus reproductible : condyles en position antéro-supérieure (charnière)", "Langue au palais, en arrière ; manipulation bimanuelle"],
          ["Bourrelet d'occlusion", "Cire ou résine sur la base d'occlusion, simulant les futures dents prothétiques", "Guide le plan prothétique et la DVO"],
          ["Plan de Fox", "Plan prothétique maxillaire, parallèle à la ligne bipupillaire", "Vérifié avec la règle de Fox"],
          ["Plan de Camper", "Plan prothétique de référence crânienne : épine nasale antérieure → tragus", "Le plan de Fox doit lui être parallèle"]
        ]
      }
    },
    {
      titre: "RIM : repères cliniques à connaître", court: "Repères RIM", icone: "clip",
      sections: [
        { titre: "Repères du bourrelet maxillaire", items: ["**Ligne interincisive** : milieu du philtrum", "**Ligne haute du sourire** : jonction gencive/dent visible lors du sourire forcé", "**Position des canines** : ligne passant par l'aile du nez"] },
        { titre: "Son F/V : vérification du plan incisif", texte: "Demander au patient de prononcer « feu » ou « veux ». La lèvre inférieure doit **effleurer légèrement le bord libre du bourrelet maxillaire**. Si elle passe sous le bourrelet : bourrelet trop court. Si elle ne l'atteint pas : trop long." },
        { titre: "Méthodes de relaxation pour la DVR", items: ["Relâchement des épaules", "Bâillement provoqué", "Eau en bouche puis déglutition", "Ouverture et fermeture plusieurs fois"], alerte: "**Mesurer 3 fois et prendre la moyenne** : une valeur isolée n'est pas fiable." },
        { titre: "Triangles de Patterson : mécanisme", texte: "Les dièdres divergents créés dans le bourrelet maxillaire, en regard des 5 et 6, **s'engagent dans la pâte de Kerr mandibulaire** à la fermeture. Ils bloquent mécaniquement tout glissement et rendent la position parfaitement reproductible." },
        { titre: "Guidage en ORC", items: ["**Méthode réflexe** : demander au patient de mettre la **langue au palais, en arrière** (pointe vers le palais mou)", "**Méthode bimanuelle de Dawson** : pouce sous le menton, doigts guidant l'arc de fermeture en charnière", "**Vérification** : mouvement de charnière pure de la mandibule, sans propulsion"] }
      ]
    },
    {
      titre: "RIM : points essentiels à retenir", court: "Points clés RIM", icone: "check",
      sections: [
        { titre: "À retenir", items: [
          "**DVO = DVR − espace libre (2 à 3 mm)** : calcul obligatoire, jamais estimé",
          "Mesurer la DVR **sans base d'occlusion**, patient détendu",
          "**Son F/V** : la lèvre inférieure effleure le bourrelet, ce qui valide le plan incisif",
          "**Plan de Fox // plan de Camper** (épine nasale antérieure → tragus)",
          "**Triangles de Patterson** : cales anti-glissement pour l'enregistrement de l'ORC",
          "**Éliminer les interférences avant** l'enregistrement à la pâte de Kerr",
          "**Toujours vérifier la DVO au compas après** la fermeture sur la pâte de Kerr",
          "**ORC** : arc de charnière pur, langue au palais, en arrière"
        ] }
      ]
    }
  ],
  ref: "Fiche « Prise des RIM – PAC » du service (d'après les recommandations CNEP / SFO, 2026)."
};
window.DISCIPLINES.push({
  id: "prothese-amovible",
  ordre: 1,
  nom: "Prothèse amovible",
  sigle: "PA",
  couleur: "#7a3e9d",
  description: "Prothèse adjointe complète (PAC), partielle sans châssis (base résine) et partielle à châssis métallique, protocole séance par séance .",
  protocoles: [
    {
      id: "pac-bimaxillaire",
      titre: "Prothèse adjointe complète (PAC) bimaxillaire",
      resume: "Protocole en 6 séances : empreintes primaires, empreintes secondaires, rapports intermaxillaires, essayage, pose, contrôles.",
      duree: "6 séances",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + pratique courante (ouvrages de prothèse complète)",
      maj: "2026-11",
      hopital: [
        "**Empreintes primaires** : alginate dans des porte-empreintes du commerce",
        "**Porte-empreintes individuels (PEI)** : fabriqués par le laboratoire ou par l'étudiant",
        "**Empreinte secondaire** : joint périphérique à la **pâte de Kerr** (réalisé avant), puis empreinte à la **pâte d'oxyde de zinc-eugénol** ; **joint postérieur maxillaire** réalisé",
        "**Rapports intermaxillaires** : enregistrement de la relation centrée à l'**Aluwax** ou à la **pâte de Kerr** ; dimension verticale de repos moins espace libre d'inocclusion, contrôle phonétique",
        "**Arc facial** utilisé pour le montage des modèles sur l'**articulateur semi-adaptable** : gamme **FAG Dentaire** (articulateur **Quick Master**, arc facial **Quick**)",
        "**Teinte** : choisie avec un **teintier**",
        "**Occlusion équilibrée bilatéralement**",
        "**Mise en bouche** : zones de compression repérées avec le **Coltène PSI**",
        "**Résine de base** : choisie par le laboratoire",
        "**Le patient porte la prothèse jusqu'au contrôle à 48 h**",
        "**Contrôles à 48 h, 1 semaine et 1 mois**",
        "**Contrôle à 48 h** : recueil des **doléances du patient**, **révélateur de pression (Coltène PSI)** pour repérer les zones de compression, **retouches à la fraise**",
        "**Délai laboratoire** : **7 jours minimum** entre deux séances qui nécessitent un travail du laboratoire",
        "**Validation par l'encadrant** : empreintes, rapports intermaxillaires (RIM), essayage et pose",
        "**6 séances** : nombre validé par le service"
      ],
      indications: ["Édentement total maxillaire et mandibulaire", "Dents restantes à pronostic défavorable, avulsées ou à avulser avant réhabilitation", "Patient informé des alternatives (dont prothèse sur implants)"],
      contreIndications: ["Lésions muqueuses non diagnostiquées ou non cicatrisées", "Foyers infectieux ou racines résiduelles non traités", "Absence de motivation ou de capacité d'adaptation du patient (à discuter)"],
      materiel: [
        "**Empreintes primaires** : porte-empreintes du commerce maxillaire et mandibulaire, alginate",
        "**Porte-empreintes individuels (PEI)** en résine",
        "**Joint périphérique** : pâte de Kerr",
        "**Empreinte secondaire** : pâte d'oxyde de zinc-eugénol",
        "**Rapports intermaxillaires** : bases d'occlusion + bourrelets de cire, **Aluwax** ou pâte de Kerr, règle de Fox, plan de Camper, compas ou pied à coulisse, **arc facial**, **teintier**",
        "Articulateur semi-adaptable **FAG Quick Master** et arc facial **FAG Quick**",
        "Dents prothétiques ; résine de base choisie par le laboratoire",
        "**Coltène PSI**, papier à articuler"
      ],
      alertes: [
        "Vérifier l'**absence de lésion muqueuse suspecte** avant toute empreinte ; **si une lésion est très suspecte, contacter un chirurgien oral du service**.",
        "Prévenir le patient que l'adaptation dure **plusieurs semaines**.",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Séance 1 – Examen et empreintes primaires", details: [
          "Examen clinique et radiologique (panoramique) : muqueuses, crêtes, freins, brides, tubérosités, salive ; plan de traitement et consentement",
          "**Empreintes primaires** maxillaire et mandibulaire à l'**alginate** dans des porte-empreintes du commerce, désinfection puis coulée des modèles primaires"
        ], materiel: ["porte-empreintes du commerce", "alginate, bol et spatule", "désinfectant d'empreintes"], validation: "empreintes primaires", astuce: "Au laboratoire (ou par l'étudiant) : confection des porte-empreintes individuels sur les modèles primaires." },
        { titre: "Séance 2 – Empreintes secondaires", details: [
          "**Essayage et ajustage des PEI**, puis **joint périphérique à la pâte de Kerr**, modelé par les mouvements fonctionnels (déglutition, ouverture, mimique, protrusion de la langue) ; **joint postérieur maxillaire**",
          "**Empreinte secondaire à la pâte d'oxyde de zinc-eugénol**, maxillaire puis mandibulaire ; vérification de l'absence de zones de compression"
        ], materiel: ["PEI", "pâte de Kerr et source de chaleur", "pâte d'oxyde de zinc-eugénol", "fraise à résine pour retouches"], validation: "empreintes secondaires", astuce: "Au laboratoire : coulée des modèles de travail et confection des bases d'occlusion avec bourrelets de cire." },
        { titre: "Séance 3 – Rapports intermaxillaires (RIM)", details: [
          "**Orienter les bourrelets** : plan d'occlusion parallèle au plan de Camper en arrière et à la ligne bipupillaire en avant ; bord libre visible 1 à 2 mm sous la lèvre supérieure au repos ; **arc facial** pour le montage du modèle maxillaire sur l'articulateur",
          "**Dimension verticale d'occlusion (DVO)** : dimension verticale de repos moins l'espace libre d'inocclusion, contrôle phonétique ; **relation centrée** enregistrée à l'**Aluwax** ou à la **pâte de Kerr**, en guidant le patient en ORC : **langue au palais, en arrière** ; repères de la ligne médiane, de la ligne du sourire et des canines ; choix de la teinte au **teintier**, de la forme et de la taille des dents"
        ], materiel: ["bases d'occlusion + bourrelets de cire", "règle de Fox, plan de Camper", "arc facial", "Aluwax ou pâte de Kerr", "teintier", "compas ou pied à coulisse"], validation: "RIM", astuce: "Au laboratoire : montage sur articulateur et montage des dents sur cire." },
        { titre: "Séance 4 – Essayage des dents montées sur cire", details: [
          "Contrôler **esthétique, phonétique, DVO et occlusion** (occlusion équilibrée bilatéralement) ; faire valider le montage par le patient (miroir)",
          "Corrections éventuelles du montage ; validation avant polymérisation"
        ], materiel: ["prothèses sur cire", "miroir", "spatule à cire et source de chaleur", "teintier"], validation: "essayage", astuce: "Au laboratoire : mise en moufle, polymérisation de la résine, finition et polissage." },
        { titre: "Séance 5 – Mise en bouche", details: [
          "Vérifier l'intrados avec le **Coltène PSI** et retoucher les zones de compression ; contrôler les bords, la rétention et la stabilité",
          "**Équilibration occlusale** (papier à articuler, relation centrée et excursions) ; consignes d'hygiène et d'utilisation"
        ], materiel: ["Coltène PSI", "papier à articuler", "fraises et pièce à main pour retouches", "fiche de consignes patient"], validation: "pose" },
        { titre: "Séance 6 – Contrôle à 48 h puis suivi (1 semaine, 1 mois)", details: [
          "Contrôle à **48 h** : recueillir les **doléances** du patient ; **révélateur de pression (Coltène PSI)** pour repérer les zones de compression ; **retouches à la fraise** ; nouveau contrôle de l'occlusion",
          "Contrôles à **1 semaine** et **1 mois** ; évaluer l'intérêt d'un rebasage ou d'un projet implantaire"
        ], materiel: ["Coltène PSI", "papier à articuler", "fraises pour retouches"] }
      ],
      consignes: [
        "**Adaptation** : la prothèse demande **plusieurs semaines** d'adaptation ; salivation et gêne sont normales les premiers jours.",
        "**Port les premiers jours** : porter la prothèse jusqu'au contrôle de 48 h pour repérer les zones douloureuses.",
        "**Alimentation** : commencer par des aliments mous coupés en petits morceaux, **mâcher des deux côtés en même temps**, éviter les aliments durs ou collants au début.",
        "**Parole** : lire à voix haute pour s'habituer ; la prononciation se normalise en quelques jours à quelques semaines.",
        "**Douleurs ou blessures** : ne pas retoucher soi-même la prothèse ; revenir au contrôle. Porter la prothèse quelques heures avant le rendez-vous pour que la zone gênante soit visible.",
        "**Hygiène** : brosser la prothèse après les repas avec une brosse dédiée et du **savon doux** (pas de dentifrice abrasif), **au-dessus d'un lavabo rempli d'eau ou d'une serviette** pour éviter qu'elle ne casse en tombant ; brosser doucement gencives, palais et langue avec une brosse souple.",
        "**Nettoyage complet** : une fois par jour, associer le **brossage** et le **trempage dans un produit nettoyant pour prothèse** (selon la notice du produit) ; **rincer abondamment** avant de la remettre en bouche. L'association brossage + produit chimique est plus efficace que l'un des deux seul.",
        "**La nuit** : **retirer la prothèse chaque nuit** (le port nocturne favorise les levures *Candida* et la stomatite sous prothèse) ; la conserver **humide** : eau fraîche ou solution nettoyante pour prothèse ; ne jamais la laisser sécher ni la plonger dans l'eau bouillante.",
        "**Adhésif pour prothèse (crème, poudre)** : inutile si la prothèse est bien adaptée ; il peut améliorer la rétention et la mastication, mais **ne remplace pas** un rebasage ou une prothèse inadaptée : si elle bouge ou blesse, **revenir consulter**. Si utilisé, **retirer tous les résidus chaque jour**.",
        "**Cassure, fêlure ou perte de dent de la prothèse** : ne pas réparer soi-même (pas de colle), consulter.",
        "**Contrôles** : à 48 h, 1 semaine, 1 mois puis une fois par an."
      ],
      erreurs: [
        "Porte-empreinte individuel **trop court ou trop long** : joint périphérique absent ou blessures",
        "Empreinte avec **surcompression** de la muqueuse (matériau trop épais, PEI mal dégagé)",
        "**DVO trop haute** (fatigue, claquement des dents) ou **trop basse** (aspect vieilli, commissures labiales)",
        "Plan d'occlusion mal orienté, ligne médiane non repérée, arc facial non utilisé",
        "Passer à l'étape suivante **sans validation de l'encadrant** (empreintes, RIM, essayage, pose)",
        "Oublier l'**équilibration occlusale** ou le contrôle à 48 h"
      ],
      suivi: ["Contrôle annuel (muqueuses, adaptation, usure)", "Rebasage si perte de rétention liée à la résorption des crêtes"],
      complications: ["**Blessure muqueuse** : **retouche ciblée de l'intrados**", "**Manque de rétention** : vérifier le joint périphérique, envisager un rebasage"],
      references: [
        "[Papadiochou S., Polyzois G. Hygiene practices in removable prosthodontics: a systematic review. Int J Dent Hyg 2018](https://pubmed.ncbi.nlm.nih.gov/29120113/) · [Schmutzler A. et al. Cleaning of removable dental prostheses: a systematic review. J Evid Based Dent Pract 2021](https://pubmed.ncbi.nlm.nih.gov/34922732/) · [Felton D. et al. Evidence-based guidelines for the care and maintenance of complete dentures (ACP). J Prosthodont 2011](https://pubmed.ncbi.nlm.nih.gov/21324026/) · [McReynolds D.E. et al. Denture stomatitis: an interdisciplinary clinical review. J Prosthodont 2023](https://pubmed.ncbi.nlm.nih.gov/36988151/)",
        "[Denture adhesives: network meta-analysis (Clin Oral Investig 2024)](https://pubmed.ncbi.nlm.nih.gov/38183500/) : crèmes et poudres améliorent la rétention mandibulaire et la force de mastication (certitude modérée), surtout sur prothèses neuves bien adaptées.",
        "Pompignoli M., Doukhan D., Raux D. Prothèse complète : clinique et laboratoire (ouvrage de référence)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "Séquence et produits confirmés par le service ; consignes et erreurs fréquentes rédigées d'après la pratique courante, à valider."
      ]
    },
    {
      id: "pap-resine",
      titre: "Prothèse adjointe partielle (PAP) sans châssis métallique",
      resume: "Protocole en 6 séances : examen et empreinte primaire, empreinte secondaire à l'alginate, rapports intermaxillaires (Futar), essayage, pose, contrôles.",
      duree: "6 séances",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + pratique courante",
      maj: "2026-11",
      hopital: [
        "**Indication** : prothèse transitoire proposée lorsqu'il faut **extraire des dents** et que les **crêtes vont être modifiées**",
        "**Empreinte secondaire à l'alginate**, dans un **porte-empreinte individuel (PEI)** fabriqué par le laboratoire ou par l'étudiant",
        "**Rapports intermaxillaires pas toujours nécessaires**, mais l'occlusion doit toujours être enregistrée avec le **Futar**",
        "**Articulateur** utilisé ; teinte au **teintier** ; résine choisie par le laboratoire",
        "**Validation par l'encadrant** : empreintes, rapports intermaxillaires, essayage et pose",
        "**Suite** : la prothèse transitoire est **remplacée par la prothèse définitive après 3 à 4 mois**",
        "**Contrôles à 48 h, 1 semaine et 1 mois** ; **6 séances** : nombre validé",
        "**Contrôle à 48 h** : recueil des **doléances du patient**, **révélateur de pression (Coltène PSI)** pour repérer les zones de compression, **retouches à la fraise**",
        "**Délai laboratoire** : **7 jours minimum** entre deux séances qui nécessitent un travail du laboratoire",
      ],
      indications: ["Situations où des **extractions sont nécessaires** et où les crêtes vont évoluer (prothèse transitoire)", "Remplacement provisoire des dents manquantes avant la prothèse définitive (châssis métallique ou autre)"],
      contreIndications: ["Hygiène bucco-dentaire insuffisante non améliorable", "Pathologie parodontale non stabilisée sur les dents d'appui"],
      materiel: [
        "Porte-empreintes du commerce (empreinte primaire), **alginate**",
        "**Porte-empreinte individuel (PEI)** pour l'empreinte secondaire",
        "**Futar** (enregistrement de l'occlusion) ; bases d'occlusion en résine et cire si l'occlusion n'est pas stable",
        "Articulateur semi-adaptable **FAG Quick Master** ; **teintier**",
        "Dents prothétiques ; résine choisie par le laboratoire",
        "Crochets (type choisi avec le laboratoire)",
        "**Coltène PSI**, papier à articuler"
      ],
      alertes: [
        "Prothèse transitoire : prévenir le patient qu'elle sera **remplacée par la prothèse définitive après 3 à 4 mois**, une fois la cicatrisation et l'évolution des crêtes terminées.",
        "Une **base résine** s'appuie surtout sur la muqueuse et sur les crochets : insister sur l'hygiène et le suivi des dents d'appui.",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Séance 1 – Examen et empreinte primaire", details: [
          "Examen clinique, radiologique et parodontal ; **classification de l'édentement** ; dents à extraire, dents d'appui et type de crochets ; plan de traitement et consentement",
          "**Empreinte primaire à l'alginate** des deux arcades, coulée des modèles"
        ], materiel: ["porte-empreintes du commerce", "alginate", "désinfectant d'empreintes"], validation: "empreinte primaire", astuce: "Au laboratoire (ou par l'étudiant) : confection du porte-empreinte individuel sur le modèle primaire." },
        { titre: "Séance 2 – Empreinte secondaire à l'alginate", details: [
          "Essayage du **porte-empreinte individuel** : contrôle de l'extension et du dégagement des freins",
          "**Empreinte secondaire à l'alginate** dans le PEI ; choix de la teinte au **teintier** et de la forme des dents"
        ], materiel: ["PEI", "alginate", "teintier"], validation: "empreinte secondaire", astuce: "Au laboratoire : modèle de travail, bases d'occlusion avec bourrelets de cire si nécessaire." },
        { titre: "Séance 3 – Rapports intermaxillaires", details: [
          "**Pas toujours nécessaire** (si les dents restantes assurent un calage stable) ; **l'occlusion est dans tous les cas enregistrée avec le Futar**",
          "Si l'occlusion n'est pas stable : bases d'occlusion et bourrelets de cire, dimension verticale et relation de référence ; repères esthétiques ; montage sur articulateur"
        ], materiel: ["Futar", "bases d'occlusion et bourrelets de cire (si besoin)", "règle de Fox"], validation: "enregistrement des rapports intermaxillaires", astuce: "Au laboratoire : montage des dents sur cire sur articulateur." },
        { titre: "Séance 4 – Essayage des dents montées", details: [
          "Contrôler **esthétique, phonétique, occlusion** et appuis sur les dents restantes ; validation par le patient",
          "Corrections éventuelles avant polymérisation"
        ], materiel: ["prothèse sur cire", "miroir", "papier à articuler"], validation: "essayage", astuce: "Au laboratoire : mise en résine, pose des crochets, finition et polissage." },
        { titre: "Séance 5 – Mise en bouche", details: [
          "**Pose** : contrôle de l'insertion, des crochets, de l'intrados (**Coltène PSI**), retouches ; **équilibration occlusale**",
          "Instructions d'hygiène et de manipulation, consignes remises au patient"
        ], materiel: ["Coltène PSI", "papier à articuler", "fraises et pièce à main", "fiche de consignes patient"], validation: "pose" },
        { titre: "Séance 6 – Contrôle à 48 h puis suivi (1 semaine, 1 mois)", details: [
          "Contrôle à **48 h** : recueillir les **doléances** du patient ; **révélateur de pression (Coltène PSI)** ; **retouches à la fraise** ; contrôle de l'occlusion",
          "Contrôles à **1 semaine** et **1 mois** : appuis, crochets ; planification de la **prothèse définitive** à **3 à 4 mois**, une fois les crêtes stabilisées"
        ], materiel: ["Coltène PSI", "papier à articuler", "fraises pour retouches"] }
      ],
      consignes: [
        "**Prothèse transitoire** : elle sera **remplacée par la prothèse définitive après 3 à 4 mois**, une fois les gencives cicatrisées ; prévoir des rendez-vous de contrôle réguliers.",
        "**Mise en place et retrait** : insérer et retirer la prothèse **avec les doigts**, en appuyant sur la base ; **ne pas mordre pour la mettre en place** ; ne pas tirer ni plier les crochets.",
        "**Alimentation** : aliments mous coupés en petits morceaux au début, mastication des deux côtés.",
        "**Parole** : lire à voix haute ; l'adaptation prend quelques jours.",
        "**Douleurs ou blessures** : ne pas retoucher soi-même ; revenir au contrôle, en portant la prothèse quelques heures avant.",
        "**Hygiène** : brosser la prothèse après les repas avec une brosse dédiée et du savon doux, **au-dessus d'un lavabo rempli d'eau** ; brossage soigneux des dents restantes, notamment celles qui portent les crochets.",
        "**Nettoyage complet** : une fois par jour, associer le **brossage** et le **trempage dans un produit nettoyant pour prothèse** (selon la notice du produit) ; **rincer abondamment** avant de la remettre en bouche. L'association brossage + produit chimique est plus efficace que l'un des deux seul.",
        "**La nuit** : **retirer la prothèse chaque nuit** (le port nocturne favorise les levures *Candida* et la stomatite sous prothèse) ; la conserver **humide** : eau fraîche ou solution nettoyante pour prothèse ; ne jamais la laisser sécher ni la plonger dans l'eau bouillante.",
        "**Si la prothèse bouge ou blesse** : revenir consulter plutôt que de la fixer avec un adhésif ; ne pas la retoucher soi-même.",
        "**Contrôles** : à 48 h, 1 semaine, 1 mois."
      ],
      erreurs: [
        "Dents d'appui non assainies (caries, parodonte) avant la pose",
        "Crochets mal positionnés (appui gingival, gêne) ou non vérifiés avant l'essayage",
        "**Occlusion non enregistrée au Futar**, même quand les rapports intermaxillaires ne sont pas pris",
        "Passer à l'étape suivante sans validation de l'encadrant",
        "Ne pas prévenir le patient du caractère **provisoire** de la prothèse"
      ],
      suivi: ["Contrôle régulier jusqu'à la prothèse définitive", "Hygiène stricte des dents d'appui"],
      references: [
        "[Papadiochou S., Polyzois G. Hygiene practices in removable prosthodontics: a systematic review. Int J Dent Hyg 2018](https://pubmed.ncbi.nlm.nih.gov/29120113/) · [Schmutzler A. et al. Cleaning of removable dental prostheses: a systematic review. J Evid Based Dent Pract 2021](https://pubmed.ncbi.nlm.nih.gov/34922732/) · [Felton D. et al. Evidence-based guidelines for the care and maintenance of complete dentures (ACP). J Prosthodont 2011](https://pubmed.ncbi.nlm.nih.gov/21324026/) · [McReynolds D.E. et al. Denture stomatitis: an interdisciplinary clinical review. J Prosthodont 2023](https://pubmed.ncbi.nlm.nih.gov/36988151/)",
        "Séquence et produits confirmés par le service ; consignes et erreurs fréquentes rédigées d'après la pratique courante, à valider.",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "pap-chassis",
      titre: "Prothèse adjointe partielle (PAP) à châssis métallique",
      resume: "Protocole en 6 séances avec châssis métallique : empreintes d'étude, empreinte secondaire à l'alginate, essayage du châssis, rapports intermaxillaires, essayage des dents, pose. (Correspond à la « PAP avec incrustation métallique » du service.)",
      duree: "6 séances",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + pratique courante",
      maj: "2026-11",
      hopital: [
        "Correspond à la « PAP avec incrustation métallique » du service",
        "**Empreintes d'étude** à l'alginate dans des porte-empreintes du commerce",
        "**Conception du châssis** réalisée par le **laboratoire**",
        "**Préparations des dents d'appui** (plans guides, taquets) : **seulement quand c'est nécessaire**",
        "**Empreinte secondaire à l'alginate, dans un porte-empreinte individuel (PEI)** fabriqué par le laboratoire ou l'étudiant ; **pas d'empreinte de correction des selles terminales**",
        "**Châssis métallique** : alliage choisi par le laboratoire ; **pas de test d'allergie au nickel**",
        "**Validation par l'encadrant** : empreintes, rapports intermaxillaires, essayage et pose",
        "**Contrôles à 48 h, 1 semaine et 1 mois** ; **6 séances** : nombre validé",
        "**Contrôle à 48 h** : recueil des **doléances du patient**, **révélateur de pression (Coltène PSI)** pour repérer les zones de compression, **retouches à la fraise**",
        "**Délai laboratoire** : **7 jours minimum** entre deux séances qui nécessitent un travail du laboratoire",
      ],
      indications: ["Édentement partiel étendu ou terminal (classes de Kennedy-Applegate)", "Prothèse définitive après une éventuelle prothèse transitoire", "Alternative à un bridge ou à un traitement implantaire (refus, contre-indication, coût)"],
      contreIndications: ["Hygiène bucco-dentaire insuffisante non améliorable", "Pathologie parodontale non stabilisée", "Dents d'appui à pronostic défavorable"],
      materiel: [
        "Empreintes d'étude : porte-empreintes du commerce, **alginate**",
        "Fraises de préparation (plans guides, logements de taquets) : seulement si nécessaire",
        "**Porte-empreinte individuel (PEI)** et **alginate** pour l'empreinte secondaire",
        "Châssis métallique coulé par le laboratoire",
        "Bases cire et bourrelets ; enregistrement de l'occlusion : **Futar, cire, Aluwax ou pâte de Kerr** selon la préférence de l'opérateur ; **teintier**",
        "Dents prothétiques ; résine choisie par le laboratoire",
        "Articulateur semi-adaptable **FAG Quick Master** ; **Coltène PSI**, papier à articuler"
      ],
      alertes: [
        "La PAP n'est réalisée **qu'après assainissement** de la bouche.",
        "Alliage au **nickel** : demander au patient s'il connaît une allergie au nickel (pas de test systématique au service).",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026).",
        "Le laboratoire conçoit le châssis : transmettre une **fiche de prescription** complète."
      ],
      etapes: [
        { titre: "Séance 1 – Examen, empreintes d'étude et projet", details: [
          "Examen clinique, radiologique et parodontal ; **classification de l'édentement** ; **empreintes d'étude à l'alginate**, enregistrement de l'occlusion, montage sur articulateur",
          "**Étude des modèles** (axe d'insertion, zones de dépouille) et **fiche de prescription transmise au laboratoire, qui conçoit le châssis**"
        ], materiel: ["porte-empreintes du commerce", "alginate", "matériau d'enregistrement de l'occlusion", "fiche de prescription"], validation: "empreintes d'étude", astuce: "Au laboratoire : modèles d'étude coulés, conception du châssis, porte-empreinte individuel (PEI) pour la séance 2." },
        { titre: "Séance 2 – Préparations (si nécessaire) et empreinte secondaire", details: [
          "**Préparations** des dents d'appui **seulement si nécessaire** : plans guides, logements de taquets (plancher arrondi, sans bord vif)",
          "**Empreinte secondaire** à l'**alginate dans le PEI** (essayage du PEI au préalable), maxillaire et mandibulaire ; enregistrement de l'occlusion si besoin ; choix de la teinte au **teintier**"
        ], materiel: ["PEI", "alginate", "fraises de préparation (si besoin)", "teintier"], validation: "empreinte secondaire", astuce: "Au laboratoire : modèle de travail et coulée du châssis métallique." },
        { titre: "Séance 3 – Essayage du châssis", details: [
          "Contrôler l'**insertion, la désinsertion, la stabilité**, la mise en place complète des taquets, l'absence de contact prématuré et de blessure",
          "Contrôler l'**adaptation sur les dents d'appui et sur la muqueuse** (Coltène PSI) ; corrections ou renvoi au laboratoire si nécessaire"
        ], materiel: ["châssis", "Coltène PSI", "papier à articuler"], validation: "essayage du châssis", astuce: "Au laboratoire : confection des bases cire et des bourrelets sur le châssis." },
        { titre: "Séance 4 – Rapports intermaxillaires", details: [
          "**Enregistrement des rapports intermaxillaires** avec le châssis et les bases d'occlusion (dimension verticale et relation de référence)",
          "Choix des dents au **teintier** : teinte, forme, taille ; repères esthétiques"
        ], materiel: ["châssis + bases d'occlusion", "Futar, cire, Aluwax ou pâte de Kerr", "teintier"], validation: "rapports intermaxillaires", astuce: "Au laboratoire : montage des dents sur cire." },
        { titre: "Séance 5 – Essayage des dents montées", details: [
          "Contrôler **esthétique, phonétique, occlusion** et appuis ; validation par le patient",
          "Corrections éventuelles avant polymérisation"
        ], materiel: ["prothèse sur cire", "miroir", "papier à articuler"], validation: "essayage", astuce: "Au laboratoire : mise en résine, finition, polissage." },
        { titre: "Séance 6 – Mise en bouche", details: [
          "**Pose** : contrôle de l'insertion, des crochets et des appuis (**Coltène PSI**), retouches ; **équilibration occlusale**",
          "Instructions d'hygiène et de manipulation ; contrôles à **48 h, 1 semaine et 1 mois**",
          "Contrôle à **48 h** : **doléances** du patient, **révélateur de pression (Coltène PSI)**, **retouches à la fraise**"
        ], materiel: ["Coltène PSI", "papier à articuler", "fraises et pièce à main", "fiche de consignes patient"], validation: "pose" }
      ],
      consignes: [
        "**Mise en place et retrait** : insérer et retirer la prothèse **avec les doigts**, en appuyant sur la base ; **ne jamais mordre pour la mettre en place** ; ne pas plier ni tirer les crochets.",
        "**Port** : habituation progressive ; une légère gêne les premiers jours est normale.",
        "**Alimentation** : aliments mous au début, mastication des deux côtés ; éviter les aliments très durs ou collants.",
        "**Douleurs ou blessures** : ne pas retoucher soi-même ; revenir au contrôle.",
        "**Hygiène** : brosser la prothèse après les repas avec une brosse dédiée et du savon doux, **au-dessus d'un lavabo rempli d'eau** ; brosser très soigneusement les dents d'appui (brossettes interdentaires) avec un dentifrice fluoré.",
        "**Nettoyage complet** : une fois par jour, associer le **brossage** et le **trempage dans un produit nettoyant pour prothèse** (selon la notice du produit) ; **rincer abondamment** avant de la remettre en bouche. L'association brossage + produit chimique est plus efficace que l'un des deux seul.",
        "**La nuit** : **retirer la prothèse chaque nuit** (le port nocturne favorise les levures *Candida* et la stomatite sous prothèse) ; la conserver **humide** : eau fraîche ou solution nettoyante pour prothèse ; ne jamais la laisser sécher ni la plonger dans l'eau bouillante.",
        "**Si la prothèse bouge ou blesse** : revenir consulter plutôt que de la fixer avec un adhésif ; ne pas la retoucher soi-même.",
        "**Signes à signaler** : démangeaisons, rougeur ou irritation de la muqueuse au contact du métal.",
        "**Contrôles** : à 48 h, 1 semaine, 1 mois puis une fois par an."
      ],
      erreurs: [
        "Axe d'insertion non étudié sur les modèles : prothèse qui ne s'insère pas ou gêne",
        "Taquets mal logés ou contacts prématurés non retouchés avant l'essayage",
        "Préparations des dents d'appui inutiles ou oubliées quand elles sont nécessaires",
        "Dents d'appui non assainies avant la prise d'empreinte",
        "Fiche de prescription incomplète transmise au laboratoire",
        "Passer à l'étape suivante sans validation de l'encadrant"
      ],
      suivi: ["Hygiène stricte des dents d'appui et de la prothèse", "Contrôle des appuis, des crochets et des selles (rebasage éventuel) à chaque visite de maintenance"],
      references: [
        "[Papadiochou S., Polyzois G. Hygiene practices in removable prosthodontics: a systematic review. Int J Dent Hyg 2018](https://pubmed.ncbi.nlm.nih.gov/29120113/) · [Schmutzler A. et al. Cleaning of removable dental prostheses: a systematic review. J Evid Based Dent Pract 2021](https://pubmed.ncbi.nlm.nih.gov/34922732/) · [Felton D. et al. Evidence-based guidelines for the care and maintenance of complete dentures (ACP). J Prosthodont 2011](https://pubmed.ncbi.nlm.nih.gov/21324026/) · [McReynolds D.E. et al. Denture stomatitis: an interdisciplinary clinical review. J Prosthodont 2023](https://pubmed.ncbi.nlm.nih.gov/36988151/)",
        "Séquence et produits confirmés par le service ; consignes et erreurs fréquentes rédigées d'après la pratique courante, à valider.",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    }
  ]
});

// Intégration de la fiche RIM dans les trois protocoles de prothèse amovible.
(function () {
  var disc = window.DISCIPLINES.filter(function (d) { return d.id === 'prothese-amovible'; })[0];
  if (!disc) return;
  function find(id) { return disc.protocoles.filter(function (p) { return p.id === id; })[0]; }
  function step(p, start) { return p.etapes.filter(function (e) { return e.titre.indexOf(start) === 0; })[0]; }
  function addCommon(p, extraAlerte) {
    p.alertes = [RIM_PA.alerte].concat(extraAlerte ? [extraAlerte] : [], p.alertes || []);
    p.erreurs = (p.erreurs || []).filter(function (x) { return x.indexOf('**DVO trop haute**') !== 0; }).concat(RIM_PA.erreurs);
    p.annexes = RIM_PA.annexes;
    p.references = [RIM_PA.ref].concat(p.references || []);
  }
  function mat(a, b) { var out = a.slice(); b.forEach(function (x) { if (out.indexOf(x) < 0) out.push(x); }); return out; }

  var pac = find('pac-bimaxillaire');
  if (pac) {
    var s3 = step(pac, 'Séance 3');
    s3.details = RIM_PA.steps(false).concat(["**Après les RIM** : **arc facial** pour le montage du modèle maxillaire sur l'articulateur ; choix de la **teinte** au teintier, de la forme et de la taille des dents"]);
    s3.materiel = mat(RIM_PA.materiel, ["arc facial", "Aluwax (selon préférence)", "teintier"]);
    pac.hopital = pac.hopital.map(function (h) {
      return h.indexOf('**Rapports intermaxillaires** : enregistrement') === 0
        ? "**Rapports intermaxillaires (RIM)** : **DVO = DVR − espace libre (2 à 3 mm)**, calculée et jamais estimée ; **triangles de Patterson** et enregistrement de la relation centrée à la **pâte de Kerr** (ou à l'**Aluwax** selon la préférence) ; vérification de la DVO au compas après l'enregistrement"
        : h;
    });
    addCommon(pac);
  }
  var pap = find('pap-resine');
  if (pap) {
    var s3b = step(pap, 'Séance 3');
    s3b.details = s3b.details.concat(["**Protocole des RIM** (identique à la PAC) lorsqu'ils sont nécessaires :"], RIM_PA.steps(true));
    s3b.materiel = mat(s3b.materiel, RIM_PA.materiel);
    addCommon(pap, "**En PAP**, le protocole complet des RIM ci-dessous s'applique lorsque les dents restantes ne donnent pas de calage occlusal stable ; sinon, l'occlusion est enregistrée au **Futar**.");
  }
  var chassis = find('pap-chassis');
  if (chassis) {
    var s4 = step(chassis, 'Séance 4');
    s4.details = ["**Enregistrement des rapports intermaxillaires** avec le châssis et les bases d'occlusion, selon le **protocole des RIM** (identique à la PAC) :"].concat(RIM_PA.steps(true), ["Choix des dents au **teintier** : teinte, forme, taille ; repères esthétiques"]);
    s4.materiel = mat(s4.materiel, RIM_PA.materiel);
    addCommon(chassis, "**En PAP à châssis**, les RIM se font sur le châssis et les bases d'occlusion ; adapter le protocole à la situation (dents restantes, calage occlusal) avec l'encadrant.");
  }
})();
