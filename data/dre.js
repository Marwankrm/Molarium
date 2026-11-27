window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "dre",
  ordre: 5,
  nom: "Dentisterie restauratrice (DRE)",
  sigle: "DR",
  couleur: "#1b5fa8",
  description: "Prise en charge de la carie, coiffage pulpaire et restaurations directes postérieures et antérieures, avec préservation tissulaire.",
  protocoles: [
    {
      id: "composite-posterieur",
      titre: "Restauration composite postérieure (classes I et II)",
      resume: "Indications selon le guideline S3 DGZ/DGZMK, isolation, préparation a minima, collage et restauration stratifiée.",
      duree: "45 à 60 min",
      niveau: "Étudiant",
      statut: "brouillon",
      sourceType: "Guideline S3 allemand 2024 (indications) + pratique du service (adhésif, mordançage) + notice GC",
      maj: "2026-11",
      indications: ["Lésion carieuse cavitaire ou lésion non cavitaire progressive", "Remplacement d'une restauration défectueuse", "Délabrement limité nécessitant une restauration directe"],
      contreIndications: ["Isolation impossible", "Contraintes occlusales majeures non contrôlées (privilégier restauration indirecte)", "Allergie aux composants du matériau"],
      materiel: ["Digue ou système d'isolation équivalent", "Cassette de fraises « Soins » (**Komet**) : fraises diamantées et fraises carbure ; instruments à main", "Matrices sectionnelles **Palodent 360** (Dentsply Sirona) : matrices 3,5 / 4,5 / 5,5 mm, anneaux, coins WedgeGuards", "Mordançage : gel à 37 % (**Henry Schein Etch Gel**, seringue 3 mL)", "Adhésif **G-Premio Bond** (GC, flacon de 5 mL), utilisé en **mordançage-rinçage 2 temps (MR2)**", "Protection pulpo-dentinaire si besoin : **CVI** ou **Biodentine**", "Composite(s) de restauration", "Lampe à photopolymériser", "Instruments de finition et polissage"],
      alertes: [
        "**Guideline S3 (DGZ/DGZMK 2024)** : le composite peut être utilisé pour les restaurations directes de classes I et II ; en alternative, le **verre ionomère** (autorisé par le fabricant en postérieur permanent) dans des indications précises : petites cavités, coopération limitée, risque carieux élevé.",
        "**Inlay composite indirect déconseillé** si la cavité peut être restaurée en direct (preuve modérée) ; si la restauration directe est impossible : céramique indirecte ou restauration coulée métallique.",
        "Remplacement de cuspide : composite direct possible ; composite indirect envisageable (compliance limitée, accès difficile, réhabilitation fonctionnelle complexe).",
        "L'isolation conditionne la **qualité du collage** : ne pas coller en milieu humide.",
        "**Notice du G-Premio Bond** : l'adhésif est un matériau photopolymérisable (le composite photopolymérisable se place après la photopolymérisation de l'adhésif ; un composite dual doit aussi être photopolymérisé). **Pour un coiffage pulpaire direct, la notice indique d'utiliser de l'hydroxyde de calcium.**",
        "Contrôler la **puissance de la lampe** régulièrement.",
        "Antibioprophylaxie non recommandée pour les soins restaurateurs sans atteinte pulpaire (HAS 2026)."
      ],
      etapes: [
        { titre: "Diagnostic et choix thérapeutique", details: ["Évaluer le risque carieux du patient", "Choix : surveillance, traitement non invasif, ou restauration", "Radiographie rétro-alvéolaire / bite-wing si besoin"] },
        { titre: "Anesthésie et isolation", details: ["Anesthésie selon la profondeur", "Pose de la digue, matrice si nécessaire"] },
        { titre: "Préparation", details: ["Accès à la lésion, élimination sélective du tissu carié", "Cavité conservatrice, angles internes arrondis", "Protection pulpo-dentinaire si proximité pulpaire : **CVI** ou **Biodentine**"], astuce: "Ne pas retirer la dentine sans nécessité : élimination sélective, notamment près de la pulpe." },
        { titre: "Mise en place de la matrice", details: ["Adapter la matrice et le coin pour un point de contact serré", "Vérifier l'étanchéité cervicale"] },
        { titre: "Collage (mordançage-rinçage 2 temps, MR2)", details: ["**Mordançage de l'émail et de la dentine** (total-etch) à l'acide phosphorique 37 % (**Etch Gel**) pendant **10 à 15 s**, **rinçage 5 s**, séchage doux (notice GC)", "**Adhésif G-Premio Bond** : agiter le flacon, déposer quelques gouttes dans un godet, **appliquer immédiatement** avec un applicateur jetable sur l'émail et la dentine, puis **laisser 10 s**", { t: "**Sécher 5 s à pression d'air maximale** (air sans huile, avec aspiration)", sub: ["Film **mince et brillant** qui ne bouge plus", "**Retirer l'excédent** hors des surfaces à coller", "Protéger le liquide de la lumière", "Si contamination par l'eau, le sang ou la salive avant la photopolymérisation : laver, sécher et **réappliquer**"] }, { t: "**Photopolymérisation** (notice GC)", sub: ["Lampe halogène ou LED 700 mW/cm² : **10 s** (20 s si la distance dépasse 10 mm)", "LED haute puissance > 1 200 mW/cm² : **5 s** (10 s si > 10 mm)"] }], materiel: ["Etch Gel 37 %", "G-Premio Bond", "lampe à photopolymériser"] },
        { titre: "Stratification du composite", details: ["Incréments de faible épaisseur (≈ 2 mm)", "Reconstitution des parois puis de la table occlusale", "Photopolymérisation de chaque couche"] },
        { titre: "Finition, polissage, occlusion", details: ["Dépose digue, contrôle occlusal au papier", "Retouche des contacts prématurés", "Polissage"] }
      ],
      suivi: ["Contrôle clinique à 6-12 mois", "Conseils d'hygiène et de prévention (fluor, alimentation)"],
      complications: ["**Sensibilité post-opératoire** : contrôler l'occlusion et l'adaptation", "**Fracture ou défaut marginal** : **réfection ou réparation**"],
      references: [
        "[Wolff D. et al. Direct Composite Restorations on Permanent Teeth in the Anterior and Posterior Region – An Evidence-Based Clinical Practice Guideline, Part 1. J Adhes Dent 2024;26:185-200](https://pmc.ncbi.nlm.nih.gov/articles/PMC11748041/)",
        "Ce guideline porte sur les **indications**, pas sur le protocole opératoire. Adhésif et mordançage : pratique du service (G-Premio Bond, MR2) et [notice GC G-Premio Bond](https://gc.dental/europe/sites/europe.gc.dental/files/products/downloads/repairkit/ifu/8360_IFU_G-Premio_BOND_E.pdf)."
      ]
    },
    {
      id: "composite-anterieur",
      titre: "Restauration composite antérieure (classes III, IV, V)",
      resume: "Indications selon le guideline S3, teinte, isolation, stratification anatomique et finition.",
      duree: "60 à 90 min",
      niveau: "Étudiant",
      statut: "brouillon",
      sourceType: "Guideline S3 allemand 2024 (indications) + pratique du service (adhésif, mordançage) + notice GC",
      maj: "2026-11",
      indications: ["Carie proximale ou cervicale antérieure", "Fracture coronaire limitée", "Amélioration de l'esthétique (forme, teinte, diastème)"],
      contreIndications: ["Perte de substance étendue (envisager facettes ou couronnes)", "Parodonte non assaini"],
      materiel: ["Teintier du composite choisi", "Digue ou matrice transparente", "Composites émail / dentine, adhésif **G-Premio Bond** et **Etch Gel 37 %** (mordançage-rinçage 2 temps)", "Instruments de modelage, disques et pointes de polissage"],
      alertes: [
        "**Choisir la teinte avant l'isolation** (dent hydratée, sous lumière naturelle).",
        "**Guideline S3 (2024)** : composite direct **à utiliser** pour les classes III et IV (grade A) ; **verre ionomère à ne pas utiliser** en restauration permanente de classes III et IV.",
        "Corrections de forme antérieures : composite direct à utiliser, démarche **mini-invasive** préservant la structure dentaire ; facettes céramiques en alternative.",
        "Classe V : composite possible si le contrôle de la contamination et le protocole adhésif sont assurés ; **adhésif 2 temps automordançant, 3 temps mordançage-rinçage ou universel** ; verre ionomère (modifié) en alternative."
      ],
      etapes: [
        { titre: "Analyse esthétique", details: ["Choix de la teinte (dent humide), photographies", "Étude de l'anatomie, de la symétrie et de l'occlusion"] },
        { titre: "Isolation et préparation", details: ["Digue ou isolation alternative", "Préparation conservatrice, biseau limité de l'émail"] },
        { titre: "Collage (mordançage-rinçage 2 temps, MR2)", details: ["**Mordançage de l'émail et de la dentine** (total-etch) à l'acide phosphorique 37 % (**Etch Gel**) pendant **10 à 15 s**, **rinçage 5 s**, séchage doux (notice GC)", "**Adhésif G-Premio Bond** : agiter le flacon, déposer quelques gouttes dans un godet, **appliquer immédiatement** avec un applicateur jetable sur l'émail et la dentine, puis **laisser 10 s**", { t: "**Sécher 5 s à pression d'air maximale** (air sans huile, avec aspiration)", sub: ["Film **mince et brillant** qui ne bouge plus", "**Retirer l'excédent** hors des surfaces à coller", "Protéger le liquide de la lumière", "Si contamination par l'eau, le sang ou la salive avant la photopolymérisation : laver, sécher et **réappliquer**"] }, { t: "**Photopolymérisation** (notice GC)", sub: ["Lampe halogène ou LED 700 mW/cm² : **10 s** (20 s si la distance dépasse 10 mm)", "LED haute puissance > 1 200 mW/cm² : **5 s** (10 s si > 10 mm)"] }], materiel: ["Etch Gel 37 %", "G-Premio Bond", "lampe à photopolymériser"] },
        { titre: "Stratification", details: ["Clé en silicone ou matrice pour la face palatine", "Dentine puis émail, couche par couche", "Modelage de l'anatomie de surface"] },
        { titre: "Finition et polissage", details: ["Contrôle des contacts et de l'occlusion en propulsion", "Polissage progressif pour la brillance de surface"] }
      ],
      suivi: ["Éviter les aliments colorants dans les 24 h", "Contrôle à 6-12 mois"],
      references: [
        "[Wolff D. et al. J Adhes Dent 2024;26:185-200 – Direct Composite Restorations: Evidence-Based Clinical Practice Guideline, Part 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC11748041/)",
        "Adhésif et mordançage : pratique du service (G-Premio Bond, MR2) et [notice GC G-Premio Bond](https://gc.dental/europe/sites/europe.gc.dental/files/products/downloads/repairkit/ifu/8360_IFU_G-Premio_BOND_E.pdf)."
      ]
    },
    {
      id: "coiffage-pulpaire",
      titre: "Coiffage pulpaire (indirect et direct)",
      resume: "Préserver la vitalité pulpaire d'une dent permanente à carie profonde : curetage sélectif et coiffage indirect si la pulpe n'est pas exposée, coiffage direct (ou pulpotomie) si elle l'est. Biodentine au service. Dents permanentes ; dents temporaires : voir la fiche pédodontie.",
      duree: "45 à 60 min",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Guideline S3 EFCD-ESE-ORCA 2026 + notice Biodentine + pratique du service (matériaux) – à compléter par le service",
      maj: "2026-11",
      hopital: [
        "**Biodentine** : très utilisée au service pour le **coiffage pulpaire** et la **pulpotomie**, chez l'enfant et chez l'adulte",
        "**Dycal** (hydroxyde de calcium) possible ; **Calcimol LC** pour le coiffage indirect ou le liner",
        "**Validation par l'encadrant** : avant de placer le matériau sur la pulpe"
      ],
      indications: [
        { t: "**Coiffage indirect** (pulpe non exposée)", sub: ["Carie profonde sur dent permanente **sans symptôme ou avec une pulpite réversible**", "Curetage **sélectif** (ou en deux temps) pour éviter l'exposition de la pulpe"] },
        { t: "**Coiffage direct** (pulpe exposée en cours de curetage)", sub: ["Dent permanente **sans symptôme ou avec une pulpite réversible**", "Alternative : **pulpotomie** partielle ou totale"] },
        "**Pulpite irréversible** : la **pulpotomie** (partielle ou totale) est une alternative acceptable à la pulpectomie"
      ],
      contreIndications: [
        "**Pulpite irréversible** : coiffage direct non indiqué (pulpotomie, ou traitement endodontique selon l'état de la pulpe)",
        "**Nécrose pulpaire**, lésion périapicale, abcès : traitement endodontique",
        "**Isolation impossible** à la digue : le protocole ne peut pas être appliqué",
        "**Allergie** à un constituant du matériau",
        "**Secteur antérieur** : certains ciments silicate de calcium peuvent colorer la dent ; en informer le patient"
      ],
      materiel: [
        "Digue, loupes (grossissement)",
        "Curettes, fraises à grosse boule et instruments à main stériles",
        "Solution antimicrobienne de rinçage et boulettes de coton stériles",
        "**Biodentine** (Septodont) en capsule et vibreur ; **Dycal** (hydroxyde de calcium) ; **Calcimol LC** (liner photopolymérisable)",
        "Base : **CVI** (Fuji II LC, Ionofil Molar AC), jamais directement sur la pulpe",
        "Restauration : adhésif **G-Premio Bond**, **Etch Gel 37 %** et composite (voir la fiche composite postérieure)",
        "Test de vitalité, radiographies"
      ],
      alertes: [
        "**Protocole renforcé** pour toute exposition pulpaire : **digue**, **lavage antimicrobien**, **grossissement** et **matériau adapté**. Sans lui, le taux de succès peut baisser nettement (S3 2026).",
        "**Ciment silicate de calcium** (Biodentine) à préférer à l'**hydroxyde de calcium** pour le coiffage direct et la pulpotomie : meilleurs résultats cliniques (S3 2026).",
        "**Liner : pas systématique** après un curetage sélectif (S3 2026).",
        "**Hémostase indispensable** avant de placer la Biodentine sur la pulpe ; placer **sans compression** (notice).",
        "Sur la dentine à **moins de 0,5 mm** de la pulpe ou pour un coiffage direct, éviter le Calcimol LC.",
        "**Pas d'antibioprophylaxie** pour les soins endodontiques et la pulpotomie en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Temps 1 – Diagnostic", details: [
          { t: "**Symptômes**", sub: ["Douleur provoquée brève (pulpite réversible)", "Douleur spontanée ou prolongée (pulpite irréversible)"] },
          "**Test de vitalité** et percussion",
          "**Radiographie** : profondeur de la carie, distance à la pulpe, état de la zone périapicale"
        ], materiel: ["test de vitalité", "radiographies"] },
        { titre: "Temps 2 – Anesthésie et isolation", details: [
          "**Anesthésie locale**",
          "**Digue** : isolation indispensable",
          "Loupes si disponibles"
        ], materiel: ["anesthésie locale", "digue", "loupes"] },
        { titre: "Temps 3 – Élimination du tissu carié", details: [
          { t: "**Carie profonde**", sub: ["**Curetage sélectif** jusqu'à la dentine molle, en une étape, ou **en deux temps** (stepwise)", "Éviter le curetage complet jusqu'à la dentine dure au fond de la cavité : il augmente le risque d'exposition"] },
          "Si la pulpe est exposée : passer au coiffage direct (temps 5) ; sinon coiffage indirect (temps 4)"
        ], materiel: ["curettes", "fraises à grosse boule"] },
        { titre: "Temps 4 – Coiffage indirect (pulpe non exposée)", details: [
          { t: "**Liner non systématique**", sub: ["Si on en place un : **Biodentine**, **Dycal** ou **Calcimol LC** (pas à moins de 0,5 mm de la pulpe)", "**CVI** en base, jamais directement sur la pulpe"] },
          "Poursuivre par la **restauration étanche** (temps 6)"
        ], materiel: ["Biodentine", "Dycal", "Calcimol LC", "CVI"] },
        { titre: "Temps 5 – Coiffage direct (pulpe exposée)", details: [
          { t: "**Hémostase**", sub: ["Lavage antimicrobien et boulette stérile sur la pulpe", "Sans hémostase, ne pas placer le matériau : envisager la pulpotomie"] },
          { t: "**Biodentine** : placer directement sur la pulpe exposée", sub: ["Mélange en capsule : 5 gouttes de la monodose, vibreur 4 000 à 4 200 oscillations/min pendant 30 s", "**Sans compression** sur la pulpe", "Éviter l'eau et les fluides pendant la prise initiale (**12 minutes**)"] },
          "Variante : **Dycal** (hydroxyde de calcium)"
        ], materiel: ["Biodentine, capsule et vibreur", "Dycal", "boulettes stériles", "solution de rinçage antimicrobienne"], validation: "avant de placer le matériau sur la pulpe" },
        { titre: "Temps 6 – Restauration étanche", details: [
          "**Restauration coronaire étanche** sur le matériau : composite sous digue (collage au **G-Premio Bond**, fiche composite postérieure)",
          "Vérifier l'occlusion",
          "La Biodentine restante peut rester en profondeur ; **d'une semaine à six mois** plus tard, on peut préparer la cavité pour la restauration définitive"
        ], materiel: ["Etch Gel 37 %", "G-Premio Bond", "composite", "lampe à photopolymériser"] },
        { titre: "Temps 7 – Contrôle", details: [
          "**Contrôle clinique** : douleur, gonflement, test de vitalité",
          "**Radiographie de contrôle** : aucune lésion périapicale"
        ], materiel: ["test de vitalité", "radiographies"] }
      ],
      suivi: ["Contrôle clinique et radiographique **après 6 à 12 mois**, avec test de vitalité (les études suivent les dents au moins 12 mois)"],
      consignes: [
        "**Sensibilité** : possible pendant quelques jours, surtout au froid ; elle doit diminuer.",
        "**Revenir sans attendre** en cas de douleur spontanée ou nocturne, de gonflement ou de goût désagréable.",
        "Éviter de mastiquer sur la dent traitée tant que la restauration définitive n'est pas posée.",
        "Hygiène habituelle ; **contrôle** à prévoir dans les mois qui suivent."
      ],
      complications: [
        "**Douleur spontanée ou persistante** : pulpite irréversible, pulpotomie ou traitement endodontique",
        "**Nécrose pulpaire ou lésion périapicale** : traitement endodontique",
        "**Perte d'étanchéité** de la restauration : reprendre la restauration sous digue",
        "**Coloration de la dent** après un ciment silicate de calcium, surtout en antérieur"
      ],
      erreurs: [
        "Travailler **sans digue**",
        "Placer le matériau **sans hémostase** de la pulpe exposée",
        "**Comprimer** la Biodentine sur la pulpe",
        "Placer un **CVI ou un composite directement sur la pulpe**",
        "Faire un coiffage direct sur une **pulpite irréversible** sans envisager la pulpotomie",
        "Curetage **complet** jusqu'à la dentine dure dans une carie très profonde",
        "Oublier le **contrôle** à 6-12 mois"
      ],
      references: [
        "[Schwendicke F., Kosan E. et al. Deep Caries Management: EFCD-ESE-ORCA S3-Level Clinical Practice Guideline (2026)](https://pmc.ncbi.nlm.nih.gov/articles/PMC13102370/)",
        "[Duncan H.F. et al. European Society of Endodontology position statement: Management of deep caries and the exposed pulp. Int Endod J 2019;52:923-934](https://pubmed.ncbi.nlm.nih.gov/30664240/)",
        "Notice Biodentine (Septodont) et fiche Matériaux du site ; hémostase par lavage antimicrobien : protocole renforcé du guideline S3, concentration et durée à voir avec l'encadrant.",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    }
  ]
});
