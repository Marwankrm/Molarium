window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "pedodontie",
  ordre: 7,
  nom: "Odontologie pédiatrique",
  sigle: "PE",
  couleur: "#c2255c",
  description: "Soins de l'enfant : carie profonde des dents temporaires (EAPD), pulpotomie, scellement de sillons.",
  protocoles: [
    {
      id: "carie-profonde-temporaire",
      titre: "Carie profonde sur dent temporaire",
      resume: "Arbre décisionnel EAPD : fluorure diamine d'argent, technique de Hall, curetage sélectif, coiffage indirect, pulpotomie et choix des matériaux de restauration.",
      duree: "Selon la technique",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Guidance EAPD 2022",
      maj: "2026-11",
      indications: ["Lésion carieuse profonde sur molaire temporaire, pulpe vitale"],
      contreIndications: ["Signes d'atteinte pulpaire irréversible ou de nécrose : voir pulpotomie / pulpectomie / avulsion", "Enfant très coopérant requis pour les techniques complexes : adapter selon le comportement"],
      materiel: [
        "**Fluorure diamine d'argent (SDF) 38 %** : 1 à 2 applications par an",
        "**Couronnes préformées métalliques** (technique de Hall)",
        "Ciments verre ionomère, verre ionomère à haute viscosité, verre ionomère modifié par résine",
        "Compomères, composites hybrides ou bulk-fill",
        "Lampe à photopolymériser calibrée"
      ],
      alertes: [
        "**Utiliser la technique la moins invasive** permettant un résultat prévisible.",
        "Un **bon scellement coronaire** est essentiel pour préserver une pulpe vitale.",
        "Ne plus utiliser l'amalgame sur dent temporaire (convention de Minamata) ; ne pas utiliser le formocrésol en pulpotomie.",
        "L'ART (restauration atraumatique) n'est pas recommandé pour les caries multi-faces."
      ],
      etapes: [
        { titre: "Évaluer", details: ["Risque carieux, comportement de l'enfant", "Radiographie : profondeur de la lésion, état de la furcation et du périapex", "Symptômes pulpaires (douleur spontanée, fistule, mobilité)"] },
        { titre: "Mesures non invasives", details: ["**SDF 38 %** : une à deux fois par an, avantage pour l'arrêt de la carie, meilleurs résultats avec deux applications annuelles ; intéressant chez l'enfant à haut risque carieux ou très jeune pour retarder un traitement invasif"] },
        { titre: "Technique de Hall", details: ["Couronne préformée métallique posée **sans anesthésie ni élimination de la carie** : réduit le risque de douleur et d'échec de la restauration ; mieux acceptée par enfants et parents", "Les couronnes préformées sont aussi recommandées sur les molaires temporaires traitées endodontiquement"] },
        { titre: "Élimination sélective du tissu carié", details: ["**Curetage sélectif (en une étape) ou en deux temps** : à envisager pour les lésions atteignant le tiers ou le quart interne de la dentine, en l'absence de signes de pulpite irréversible, afin d'éviter l'exposition pulpaire", "Coiffage indirect : taux de succès élevé"] },
        { titre: "Pulpotomie (si exposition ou pulpite réversible)", details: ["Recommandée : taux de succès élevés", "Médicaments équivalents : **MTA** ou **sulfate ferrique** ; formocrésol à abandonner ; **hydroxyde de calcium : le moins performant, déconseillé**", "Coiffage direct : usage limité (dents asymptomatiques, conditions non infectieuses)", "Pulpectomie : pas en 1re intention sur molaire temporaire vitale ; envisageable plutôt que l'avulsion si perte d'espace ou absence de successeur"] },
        { titre: "Restauration", details: [
          "**Classe I** : verre ionomère (GIC, HVGIC, RMGIC), compomère ou composite hybride / bulk-fill",
          "**Classe II** : compomère, composite hybride ou bulk-fill ; HVGIC/RMGIC avec prudence ; **verre ionomère renforcé de métal et glass carbomer non recommandés**",
          "Multi-faces : privilégier la couronne préformée"
        ], astuce: "Lampe calibrée et polymérisation suffisante (en tenant compte de la couche inhibée par l'oxygène)." },
        { titre: "Suivi", details: ["Le critère de succès principal est **clinique** ; ne pas réintervenir sur un seul échec radiographique"] }
      ],
      references: [
        "[Duggal M. et al. Best clinical practice guidance for treating deep carious lesions in primary teeth: an EAPD policy document. Eur Arch Paediatr Dent 2022;23:659-666](https://pmc.ncbi.nlm.nih.gov/articles/PMC9637614/)"
      ]
    },
    {
      id: "pulpotomie-temporaire",
      titre: "Pulpotomie sur molaire temporaire",
      resume: "Pulpotomie d'une molaire temporaire à pulpe vitale : indications, médicament, restauration étanche.",
      duree: "30 à 40 min",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Guidance EAPD 2022 + recommandation HAS 2026",
      maj: "2026-11",
      indications: ["Carie profonde avec exposition pulpaire sur dent temporaire", "Pulpe coronaire inflammatoire, pulpe radiculaire saine"],
      contreIndications: ["Abcès, fistule, mobilité pathologique", "Résorption radiculaire avancée", "Lésion de la furcation", "Enfant à risque d'endocardite : prise en charge selon la recommandation dédiée"],
      alertes: [
        "**Pas d'antibioprophylaxie en population générale** pour la pulpotomie de dent temporaire (HAS 2026, accord d'experts) ; recommandée au cas par cas chez l'enfant à risque infectieux augmenté.",
        "Médicament : **MTA ou sulfate ferrique** (résultats comparables) ; **ne pas utiliser le formocrésol** (toxicité) ni l'hydroxyde de calcium (moins bons résultats).",
        "**Consentement des représentants légaux.**"
      ],
      materiel: ["Digue", "Fraises, curette", "Médicament de pulpotomie : MTA ou sulfate ferrique [[produit utilisé au CHU à préciser]]", "Matériau de restauration étanche : couronne préformée ou composite/compomère [[à préciser]]"],
      etapes: [
        { titre: "Évaluation et accord", details: ["Radiographie, évaluation du comportement", "Information et consentement des parents"] },
        { titre: "Anesthésie et isolation", details: ["Anesthésie locale adaptée à l'enfant", "Digue"] },
        { titre: "Exérèse de la pulpe coronaire", details: ["Ouverture de la chambre", "Amputation de la pulpe coronaire (curette ou fraise)", "Hémostase par compression"], astuce: "Une hémostase non obtenue rapidement oriente vers une pulpectomie ou une avulsion." },
        { titre: "Application du médicament", details: ["Placer le médicament choisi sur les moignons radiculaires [[protocole du produit]]", "Obturer la chambre"] },
        { titre: "Restauration définitive", details: ["Étanchéité immédiate : couronne préformée ou restauration adhésive", "Contrôle radiographique"] }
      ],
      suivi: ["Évaluation **clinique** à 6 mois puis annuelle", "Surveillance jusqu'à l'exfoliation"],
      references: [
        "[EAPD – Best clinical practice guidance for deep carious lesions in primary teeth (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9637614/)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 1](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "scellement-sillons",
      titre: "Scellement de sillons",
      resume: "Mesure préventive sur molaires définitives à risque : sélection, isolation, collage, contrôle.",
      duree: "15 à 20 min / dent",
      niveau: "Étudiant",
      statut: "brouillon",
      sourceType: "À compléter par le service",
      maj: "2026-11",
      indications: ["Molaires permanentes à sillons profonds chez un enfant à risque carieux", "Dents récemment sorties"],
      contreIndications: ["Lésion carieuse cavitaire (restauration nécessaire)", "Isolation impossible"],
      etapes: [
        { titre: "Sélection et nettoyage", details: ["Évaluer le risque carieux", "Nettoyage des sillons et rinçage"] },
        { titre: "Isolation", details: ["Digue ou cotons et aspiration continue", "Séchage soigneux"] },
        { titre: "Mordançage et collage", details: ["Mordançage / adhésif selon le produit [[à préciser]]", "Application du matériau de scellement : **Fuji Triage** (CVI de protection des sillons, teinte rose photopolymérisable) ou composite fluide **Tetric EvoFlow**, présents au service [[à confirmer lequel]] ; photopolymérisation"] },
        { titre: "Contrôle", details: ["Rétention et occlusion", "Contrôle à chaque visite"] }
      ],
      references: ["Aucune source externe n'a encore été intégrée à cette fiche : protocole et matériaux du service à renseigner."]
    }
  ]
});
