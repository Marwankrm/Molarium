window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "dre",
  ordre: 5,
  nom: "Dentisterie restauratrice (DRE)",
  sigle: "DR",
  couleur: "#1b5fa8",
  description: "Prise en charge de la carie et restaurations directes postérieures et antérieures, avec préservation tissulaire.",
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
      materiel: ["Digue ou système d'isolation équivalent", "Fraises de préparation, instruments à main", "Matrice sectionnelle, coin, anneau", "Mordançage : gel à 37 % (**Henry Schein Etch Gel**, seringue 3 mL)", "Adhésif **G-Premio Bond** (GC, flacon de 5 mL), utilisé en **mordançage-rinçage 2 temps (MR2)**", "Protection pulpo-dentinaire si besoin : **CVI** ou **Biodentine**", "Composite(s) de restauration", "Lampe à photopolymériser", "Instruments de finition et polissage"],
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
        { titre: "Collage (mordançage-rinçage 2 temps, MR2)", details: ["**Mordançage de l'émail et de la dentine** (total-etch) à l'acide phosphorique 37 % (**Etch Gel**) pendant **10 à 15 s**, **rinçage 5 s**, séchage doux (notice GC)", "**Adhésif G-Premio Bond** : agiter le flacon, déposer quelques gouttes dans un godet, **appliquer immédiatement** avec un applicateur jetable sur l'émail et la dentine, puis **laisser 10 s**", "**Sécher 5 s à pression d'air maximale** (air sans huile, avec aspiration) : film **mince et brillant** qui ne bouge plus ; **retirer l'excédent** hors des surfaces à coller ; protéger le liquide de la lumière ; si contamination par l'eau, le sang ou la salive avant la photopolymérisation : laver, sécher et **réappliquer**", "**Photopolymérisation** (notice GC) : lampe halogène ou LED 700 mW/cm² : **10 s** (20 s si la distance dépasse 10 mm) ; LED haute puissance > 1 200 mW/cm² : **5 s** (10 s si > 10 mm)"], materiel: ["Etch Gel 37 %", "G-Premio Bond", "lampe à photopolymériser"] },
        { titre: "Stratification du composite", details: ["Incréments de faible épaisseur (≈ 2 mm)", "Reconstitution des parois puis de la table occlusale", "Photopolymérisation de chaque couche"] },
        { titre: "Finition, polissage, occlusion", details: ["Dépose digue, contrôle occlusal au papier", "Retouche des contacts prématurés", "Polissage"] }
      ],
      suivi: ["Contrôle clinique à 6-12 mois", "Conseils d'hygiène et de prévention (fluor, alimentation)"],
      complications: ["Sensibilité post-opératoire : contrôler l'occlusion et l'adaptation", "Fracture ou défaut marginal : réfection ou réparation"],
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
        { titre: "Collage (mordançage-rinçage 2 temps, MR2)", details: ["**Mordançage de l'émail et de la dentine** (total-etch) à l'acide phosphorique 37 % (**Etch Gel**) pendant **10 à 15 s**, **rinçage 5 s**, séchage doux (notice GC)", "**Adhésif G-Premio Bond** : agiter le flacon, déposer quelques gouttes dans un godet, **appliquer immédiatement** avec un applicateur jetable sur l'émail et la dentine, puis **laisser 10 s**", "**Sécher 5 s à pression d'air maximale** (air sans huile, avec aspiration) : film **mince et brillant** qui ne bouge plus ; **retirer l'excédent** hors des surfaces à coller ; protéger le liquide de la lumière ; si contamination par l'eau, le sang ou la salive avant la photopolymérisation : laver, sécher et **réappliquer**", "**Photopolymérisation** (notice GC) : lampe halogène ou LED 700 mW/cm² : **10 s** (20 s si la distance dépasse 10 mm) ; LED haute puissance > 1 200 mW/cm² : **5 s** (10 s si > 10 mm)"], materiel: ["Etch Gel 37 %", "G-Premio Bond", "lampe à photopolymériser"] },
        { titre: "Stratification", details: ["Clé en silicone ou matrice pour la face palatine", "Dentine puis émail, couche par couche", "Modelage de l'anatomie de surface"] },
        { titre: "Finition et polissage", details: ["Contrôle des contacts et de l'occlusion en propulsion", "Polissage progressif pour la brillance de surface"] }
      ],
      suivi: ["Éviter les aliments colorants dans les 24 h", "Contrôle à 6-12 mois"],
      references: [
        "[Wolff D. et al. J Adhes Dent 2024;26:185-200 – Direct Composite Restorations: Evidence-Based Clinical Practice Guideline, Part 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC11748041/)",
        "Adhésif et mordançage : pratique du service (G-Premio Bond, MR2) et [notice GC G-Premio Bond](https://gc.dental/europe/sites/europe.gc.dental/files/products/downloads/repairkit/ifu/8360_IFU_G-Premio_BOND_E.pdf)."
      ]
    }
  ]
});
