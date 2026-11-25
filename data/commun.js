window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "tronc-commun",
  ordre: 90,
  nom: "Tronc commun",
  sigle: "TC",
  couleur: "#52606d",
  description: "Consultation initiale, évaluation du risque médical, hygiène et asepsie : les bases communes à toutes les disciplines.",
  protocoles: [
    {
      id: "consultation-initiale",
      titre: "Consultation initiale et évaluation du risque médical",
      resume: "Anamnèse, examen clinique, examens complémentaires, diagnostic et plan de traitement avant tout acte.",
      duree: "30 à 45 min",
      niveau: "Tous niveaux",
      statut: "brouillon",
      maj: "2026-11",
      indications: ["Tout nouveau patient du service", "Patient revu après un intervalle long ou une modification de son état de santé"],
      contreIndications: ["Urgence vitale : prise en charge médicale immédiate (appel du 15) avant toute anamnèse détaillée"],
      materiel: ["Dossier patient informatisé et questionnaire médical", "Plateau d'examen (miroir, sonde, précelle), sonde parodontale", "Radiographies rétro-alvéolaires ou panoramique selon l'indication"],
      alertes: [
        "Rechercher systématiquement : **allergies** (latex, anesthésiques, antibiotiques), **antithrombotiques**, **bisphosphonates / dénosumab**, antécédent de **radiothérapie cervico-faciale**, **cardiopathie à risque d'endocardite**, grossesse.",
        "Un patient à risque médical élevé relève d'un avis du médecin référent **avant** les actes invasifs.",
        "**Lésion muqueuse très suspecte** à l'examen : contacter un **chirurgien oral du service**.",
        "Classer le patient pour la prescription d'antibiotiques (population générale / risque infectieux augmenté / haut risque d'ostéonécrose des mâchoires) : voir la fiche « Antibioprophylaxie et antibiothérapie »."
      ],
      etapes: [
        { titre: "Accueil et motif de consultation", details: ["Recueillir le motif dans les mots du patient", "Évaluer la douleur (EVA) et l'urgence", "Vérifier l'identité et le consentement aux soins pédagogiques"] },
        { titre: "Anamnèse médicale", details: ["Antécédents médicaux, chirurgicaux, familiaux", "Traitements en cours (liste exhaustive, dont automédication)", "Allergies et intolérances", "Habitudes : tabac, alcool, hygiène bucco-dentaire, bruxisme"], astuce: "Faire signer / dater le questionnaire médical et le mettre à jour à chaque consultation de contrôle." },
        { titre: "Examen clinique", details: ["Examen extra-oral : asymétrie, adénopathies, ATM", "Examen des muqueuses (dépistage cancer buccal)", "Bilan dentaire : caries, restaurations, mobilités, occlusion", "Bilan parodontal : indices de plaque et de saignement, sondage"] },
        { titre: "Examens complémentaires", details: ["Imagerie adaptée (principe ALARA)", "Tests de vitalité pulpaire si besoin (spray au froid **CryoPulp**, Septodont)", "Photographies, modèles d'étude selon le plan de traitement"] },
        { titre: "Diagnostic et plan de traitement", details: ["Poser le diagnostic et hiérarchiser : urgences → étiologique → réhabilitation → maintenance", "Présenter les alternatives et obtenir le consentement éclairé", "Planifier les séances et orienter vers les disciplines concernées"] }
      ],
      suivi: ["Remettre au patient le plan de traitement et les consignes d'hygiène adaptées", "Planifier les rendez-vous de contrôle"]
    },
    {
      id: "antibiotiques-has-2026",
      titre: "Antibioprophylaxie et antibiothérapie en pratique bucco-dentaire",
      resume: "Indications, molécules et posologies de la recommandation HAS 2026 : qui, quand, quel schéma.",
      duree: "Aide à la prescription",
      niveau: "Tous niveaux",
      statut: "brouillon",
      sourceType: "Recommandation HAS 2026",
      maj: "2026-11",
      indications: ["Avant tout acte bucco-dentaire invasif pour décider d'une antibioprophylaxie", "Devant une infection d'origine bucco-dentaire pour décider d'une antibiothérapie curative"],
      contreIndications: ["Patients à **risque d'endocardite infectieuse** : recommandation HAS 2024 dédiée « Prise en charge bucco-dentaire des patients à risque d'endocardite infectieuse »", "Cellulite avec signes systémiques, ostéomyélite, ostéonécrose infectée : prise en charge hospitalière, voie IV possible"],
      materiel: [
        "Antiseptique avant tout geste : bain de bouche **chlorhexidine 0,1 à 0,2 %** ou **povidone iodée 10 %**",
        "Amoxicilline (antibiotique de 1re intention) ; alternatives : clarithromycine, azithromycine, pristinamycine, clindamycine, céphalosporines selon l'indication"
      ],
      alertes: [
        "L'antibioprophylaxie n'est indiquée que pour des actes à **risque infectieux significatif** ; elle n'est pas justifiée pour tous les actes.",
        "L'antibiothérapie curative s'ajoute à un **geste local** (drainage, débridement, détartrage/surfaçage, pulpectomie, avulsion) : grade A.",
        "**Pas d'antibiotique local** en pratique bucco-dentaire, ni systématique avec un anti-inflammatoire.",
        "Les prescriptions hors AMM sont sous la seule responsabilité du prescripteur, qui informe le patient.",
        "Mentionner sur l'ordonnance la **délivrance à l'unité** des antibiotiques de prophylaxie."
      ],
      etapes: [
        { titre: "Antibioprophylaxie : schéma de 1re intention (adulte)", details: [
          "**Amoxicilline 2 g par voie orale, 30 à 60 min avant l'acte**, prise unique",
          "Voie injectable : amoxicilline IV 2 g, au plus tôt 60 min avant et avant l'incision",
          "Oubli ou urgence : possible jusqu'à **2 h après** le geste",
          "Enfant : amoxicilline 50 mg/kg, sans dépasser 2 g"
        ] },
        { titre: "Allergie avérée aux pénicillines (par ordre de préférence)", details: ["Clarithromycine 500 mg", "Azithromycine 500 mg", "Pristinamycine 1 g", "Voie injectable : céfazoline 1 g, ceftriaxone 1 g ou clindamycine IV 900 mg"] },
        { titre: "Cas avec antibioprophylaxie post-opératoire", details: [
          "Communication bucco-sinusienne, accident d'hypochlorite, emphysème cervico-facial, plaie fortement souillée ou morsure : **amoxicilline 1 g × 2/jour pendant 5 jours** (plaie souillée/morsure : amoxicilline + acide clavulanique 1 g/125 mg × 3/jour pendant 5 jours)",
          "Acte exposant l'os chez un patient à haut risque d'ostéonécrose : amoxicilline 2 g 1 h avant, puis 500 mg × 3/jour pendant 7 jours"
        ] },
        { titre: "Principales indications d'antibioprophylaxie (population générale)", details: [
          { t: "**Recommandée**", sub: ["Avulsion de dent incluse, ectopique ou en désinclusion (grade A)", "Autotransplantation", "Greffe osseuse et élévation sinusienne pré-implantaires"] },
          { t: "**Non recommandée**", sub: ["Avulsion de dent sur arcade/racines (grade A)", "Endodontie (pulpotomie, traitement et reprise, chirurgie apicale)", "Sondage", "Détartrage", "Surfaçage", "Soins restaurateurs", "Digue", "Prothèse et empreintes", "Anesthésies locales", "Radiographies", "Orthodontie collée"] },
          { t: "Pose d'implant", sub: ["Non recommandée en systématique", "Envisageable selon le profil du patient (antécédent de complication d'ostéo-intégration, os peu vascularisé) ou la complexité (> 3 implants, avulsion-implantation immédiate, durée > 1 h 30)"] }
        ] },
        { titre: "Antibiothérapie curative : quand ?", details: [
          { t: "**Non recommandée**", sub: ["Pulpite", "Parodontite apicale chronique", "Gingivite", "Parodontite (cas général)", "Alvéolite sèche", "Mucosite péri-implantaire", "Péricoronarite sans extension"] },
          { t: "**Recommandée**", sub: ["Infection avec extension locale (suppuration), régionale (tuméfaction, trismus) ou systémique (lymphadénopathie, fièvre)", "Cellulite", "Ostéite/ostéomyélite", "Sinusite maxillaire aiguë d'origine dentaire", "Infection de greffe", "Maladie parodontale nécrosante avec atteinte systémique"] },
          "Parodontite aiguë/abcès apical/abcès parodontal : non recommandée sauf patient à haut risque d'endocardite, risque infectieux augmenté, signes d'extension, ou geste local impossible",
          "Parodontite stades III/IV avec inadéquation plaque/destruction et ratio perte osseuse/âge > 1 : antibiothérapie après la dernière séance d'instrumentation"
        ] },
        { titre: "Antibiothérapie curative : schéma adulte de 1re intention", details: [
          "**Amoxicilline 1 g × 3/jour pendant 3 jours** (prolonger de 2 jours si symptômes persistants)",
          "Allergie : clarithromycine 500 mg × 2/j, azithromycine 500 mg × 1/j ou pristinamycine 1 g × 2/j, pendant 3 jours",
          "Bithérapie en 1re intention **exceptionnelle** : parodontite III/IV (critères ci-dessus), sinusite maxillaire aiguë d'origine dentaire, ostéite/ostéomyélite, ostéonécrose infectée (amoxicilline + acide clavulanique, 1 g/125 mg × 3/j ; ostéite/ostéomyélite ≥ 14 jours)",
          "**Réévaluation à 3 jours** (consultation, téléconsultation ou téléphone) ; échec d'une 2e intention bien menée : avis infectiologique"
        ] },
        { titre: "Adaptations", details: ["Insuffisance rénale : adapter les prescriptions prolongées au DFG (les prises uniques pré-opératoires ne nécessitent pas d'adaptation)", "Grossesse : amoxicilline, clarithromycine, azithromycine, métronidazole utilisables quel que soit le stade", "Enfant : posologies au poids (cf. tableaux 12 et 15 de la recommandation) ; pas de comprimés à avaler avant 6 ans"] }
      ],
      references: [
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire, recommandation de bonne pratique (décision n° 2026.0133/DC/SBP du 16 juillet 2026)](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "[HAS – Prise en charge bucco-dentaire des patients à risque d'endocardite infectieuse (2024)](https://has-sante.fr/jcms/p_3301328/fr/prise-en-charge-bucco-dentaire-des-patients-a-haut-risque-d-endocardite-infectieuse)",
        "Document non intégralement repris ici : se référer aux tableaux 1 à 15 de la recommandation avant toute prescription."
      ]
    },
    {
      id: "asepsie-hygiene",
      titre: "Hygiène, asepsie et préparation du poste de soins",
      resume: "Préparation du fauteuil, gestion des instruments et des déchets entre deux patients.",
      duree: "10 min entre patients",
      niveau: "Tous niveaux",
      statut: "brouillon",
      maj: "2026-11",
      indications: ["Avant et après chaque patient", "Fin de vacation"],
      materiel: ["Équipements de protection individuelle (tenue, masque, lunettes ou visière, gants)", "Lingettes / solution détergente-désinfectante de surface", "Conteneurs à objets piquants-coupants (OPCT) et sacs DASRI", "Bacs de pré-désinfection des instruments"],
      alertes: ["Appliquer les **précautions standard** à tous les patients, sans exception.", "Toute exposition au sang (piqûre, projection) : **laver, désinfecter, puis contacter immédiatement** le référent AES du service selon la procédure en vigueur."],
      etapes: [
        { titre: "Hygiène des mains et EPI", details: ["Friction hydro-alcoolique avant et après les gants", "Mettre masque, lunettes ou visière, gants adaptés"] },
        { titre: "Préparation du poste", details: ["Surfaces désinfectées et, si prévu, protégées par barrières à usage unique", "Purger les lignes d'eau du fauteuil selon la procédure du service", "Déposer les instruments stériles sur un champ propre, sans les toucher avant le soin"] },
        { titre: "Pendant le soin", details: ["Limiter les aérosols : aspiration chirurgicale performante, digue quand c'est possible", "Ne pas manipuler dossier, écran ou téléphone avec des gants souillés"] },
        { titre: "Fin de soin : gestion des instruments", details: ["Trier immédiatement : OPCT dans le conteneur dédié", "Pré-désinfection puis transfert vers la stérilisation, en respectant le circuit marche-en-avant", "Ne jamais recapuchonner une aiguille à deux mains"] },
        { titre: "Désinfection du fauteuil", details: ["Retirer les protections jetables", "Nettoyer puis désinfecter l'ensemble des surfaces touchées (respecter le temps de contact du produit)", "Évacuer les déchets : DASRI / DAOM selon la filière"] }
      ],
      references: ["Guide de prévention des infections liées aux soins en chirurgie dentaire et en stomatologie (DGS)"]
    }
  ]
});
