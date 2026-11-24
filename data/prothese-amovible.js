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
  description: "Prothèse adjointe complète (PAC), partielle sans châssis (base résine) et partielle à châssis métallique, protocole séance par séance ; rebasage direct au fauteuil.",
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
      prerequis: ["Avulsions cicatrisées et chirurgie pré-prothétique réalisée si nécessaire", "Consentement éclairé", "**Délai laboratoire : 7 jours minimum** entre deux séances qui nécessitent un travail du laboratoire"],
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
      complications: ["Blessure muqueuse : retouche ciblée de l'intrados", "Manque de rétention : vérifier le joint périphérique, envisager un rebasage"],
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
      prerequis: ["Plan de traitement établi : dents à extraire, prothèse définitive envisagée", "Bilan radiologique et parodontal, consentement éclairé", "**Délai laboratoire : 7 jours minimum** entre deux séances qui nécessitent un travail du laboratoire"],
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
      prerequis: ["Assainissement préalable : caries, parodonte, avulsions, restaurations défectueuses", "Bilan radiologique et parodontal, consentement éclairé", "**Délai laboratoire : 7 jours minimum** entre deux séances qui nécessitent un travail du laboratoire"],
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
    },
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
      prerequis: [
        "Examen de la prothèse et des muqueuses : **dimension verticale, occlusion, extensions**",
        "**Matériau choisi selon la situation** (voir le tableau des matériaux)",
        "Accord de l'encadrant avant de commencer [[à préciser : validation de l'indication et du matériau par l'encadrant]]"
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
