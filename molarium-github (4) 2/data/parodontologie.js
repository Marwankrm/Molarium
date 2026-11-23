window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "parodontologie",
  ordre: 6,
  nom: "Parodontologie",
  sigle: "PD",
  couleur: "#0b6e7f",
  description: "Examen parodontal, motivation à l'hygiène, gingivite, détartrage, surfaçage, réévaluation, chirurgie, maintenance et urgences parodontales.",
  protocoles: [
    {
      id: "examen-parodontal",
      titre: "Examen parodontal initial",
      resume: "Recueil des données cliniques et radiologiques dans le logiciel Logos, diagnostic (stade, grade) et plan de traitement par étapes.",
      duree: "1 séance, 45 à 60 min",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + classification 2018 + guideline EFP S3 2020",
      maj: "2026-11",
      hopital: [
        "**Charting** réalisé sur le logiciel **Logos** [[version à préciser]]",
        "**Relevés** : plaque, saignement, profondeur de poche, niveau d'attache, mobilité, atteinte de furcation",
        "**Radiographies** : bilan long cône, panoramique et bite-wings",
        "**Diagnostic de stade et de grade** posé",
        "**Validation par l'encadrant** : après le sondage"
      ],
      indications: ["Tout nouveau patient du service", "Suspicion de maladie parodontale (saignement, mobilité, migration, récession, halitose)"],
      prerequis: ["Questionnaire médical à jour (voir fiche « Consultation initiale »)", "Radiographies disponibles ou prescrites"],
      materiel: [
        "Sonde parodontale graduée [[marque à préciser]]",
        "Logiciel **Logos** pour le charting parodontal",
        "Radiographies : **bilan long cône, panoramique, bite-wings**",
        "Révélateur de plaque [[produit à préciser]] ; miroir, sonde, précelle"
      ],
      alertes: [
        "Informer le patient du **diagnostic, des causes, des facteurs de risque, des alternatives et des risques/bénéfices**, y compris les conséquences d'un refus de traitement ; convenir d'un plan de soins personnalisé (EFP).",
        "Facteurs de risque à rechercher : **tabac** et **diabète** (leur contrôle fait partie de l'étape 1), stress, génétique, médicaments.",
        "Chaque patient parodontal doit être inclus dans un programme de **maintenance** après le traitement actif."
      ],
      etapes: [
        { titre: "Temps 1 – Anamnèse ciblée", details: ["Antécédents parodontaux, familiaux ; **diabète (HbA1c), tabagisme** (quantité, durée)", "Médicaments gingivo-hyperplasiants, traitements immunosuppresseurs"], materiel: ["questionnaire médical"] },
        { titre: "Temps 2 – Examen clinique et sondage", details: ["**Indices de plaque et de saignement**, mobilité, atteinte de furcation (classes I à III), récessions, défauts intra-osseux", "**Sondage 6 sites par dent** : profondeur de poche, niveau d'attache clinique, saignement au sondage ; saisie dans **Logos**"], materiel: ["sonde parodontale", "Logos", "révélateur de plaque [[à préciser]]"], validation: "sondage" },
        { titre: "Temps 3 – Examen radiologique", details: ["**Bilan long cône, panoramique et bite-wings** : niveau osseux, lésions intra-osseuses, furcations", "Facteurs rétentifs de plaque : tartre, débords de restauration"], materiel: ["radiographies"] },
        { titre: "Temps 4 – Diagnostic et plan de traitement", details: ["Classification 2018 : **stade (I à IV)** selon la sévérité et la complexité ; **grade (A à C)** selon la vitesse de progression et les facteurs de risque", "**Plan par étapes (EFP)** : étape 1 hygiène et facteurs de risque, étape 2 instrumentation, étape 3 sites non répondeurs, étape 4 maintenance ; consentement"], materiel: ["Logos", "fiche d'information"], astuce: "Consigner stade et grade dans le dossier : ils orientent le plan de traitement." }
      ],
      consignes: [
        "**Diagnostic expliqué** : maladie de la gencive et de l'os, qui se soigne mais demande une hygiène quotidienne rigoureuse et un suivi.",
        "**Facteurs de risque** : l'arrêt du tabac et l'équilibre du diabète font partie du traitement.",
        "**Prochaines étapes** : motivation à l'hygiène, puis traitement de la gencive en séances."
      ],
      erreurs: [
        "Sondage incomplet (moins de 6 sites par dent) ou saisie incomplète dans Logos",
        "Facteurs de risque (tabac, diabète) non recherchés",
        "Stade et grade non consignés ; plan de traitement non expliqué au patient",
        "Pas de validation de l'encadrant après le sondage"
      ],
      references: [
        "[Sanz M. et al. Treatment of stage I-III periodontitis – The EFP S3 level clinical practice guideline. J Clin Periodontol 2020;47 Suppl 22:4-60](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)",
        "Caton J.G. et al. Classification des maladies parodontales et péri-implantaires, 2018 : texte non consulté, à intégrer."
      ]
    },
    {
      id: "motivation-hygiene",
      titre: "Séance de motivation à l'hygiène",
      resume: "Étape 1 du traitement : enseignement du contrôle de plaque, brossettes interdentaires, facteurs de risque (tabac, diabète).",
      duree: "1 séance",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Guideline EFP S3 2020 + pratique courante – à compléter par le service",
      maj: "2026-11",
      hopital: [
        "**Choix des brosses et brossettes** : variable selon l'étudiant [[pas de produit imposé]]"
      ],
      indications: ["Tout patient atteint de gingivite ou de parodontite, **avant** l'instrumentation sous-gingivale", "Réinstructions à chaque séance de maintenance"],
      materiel: [
        "Révélateur de plaque [[produit à préciser]]",
        "Brosse à dents (manuelle ou électrique), **brossettes interdentaires** de tailles adaptées, éventuellement fil dentaire [[produits au choix de l'étudiant]]",
        "Miroir, modèle ou typodont de démonstration [[à préciser]]",
        "Fiche de conseils d'hygiène [[à préciser]]"
      ],
      alertes: [
        "**Les pratiques d'hygiène sont déterminantes à toutes les étapes** du traitement (EFP).",
        "L'**entretien motivationnel** ou la thérapie cognitivo-comportementale n'ont pas montré d'impact significatif : privilégier la démonstration pratique et le suivi.",
        "**Arrêt du tabac** et **contrôle du diabète** : recommandés dès l'étape 1."
      ],
      etapes: [
        { titre: "Séance – Indices de plaque et enseignement de l'hygiène", details: [
          "**Révélation de plaque**, relevé de l'indice de plaque et de saignement ; montrer les zones à problème au miroir",
          "**Démonstration du brossage**, choix et essai des **brossettes interdentaires** (taille mesurée avec la sonde) ; conseils sur le tabac et le diabète"
        ], materiel: ["révélateur de plaque", "brosse", "brossettes interdentaires", "miroir"], astuce: "Le patient doit refaire le geste devant l'étudiant : c'est la démonstration qui compte." }
      ],
      consignes: [
        "**Brossage** : deux à trois fois par jour, en insistant sur le collet des dents ; brosse souple ou électrique selon les conseils reçus.",
        "**Espaces entre les dents** : **brossettes interdentaires** chaque soir, de la bonne taille ; le fil dentaire seul n'est pas le premier choix en maintenance (EFP).",
        "**Saignement des gencives** : normal au début, il diminue en quelques jours avec une bonne hygiène ; ne pas arrêter de brosser.",
        "**Tabac et diabète** : en parler avec le médecin ; leur contrôle améliore la cicatrisation.",
        "**Prochains rendez-vous** : traitement de la gencive en séances."
      ],
      erreurs: [
        "Enseigner sans faire refaire le geste au patient",
        "Brossettes de taille inadaptée (trop petites ou trop grosses)",
        "Passer à l'instrumentation sous-gingivale sans contrôle de plaque satisfaisant",
        "Oublier le tabac et le diabète"
      ],
      references: ["[Sanz M. et al. EFP S3 guideline, J Clin Periodontol 2020 – étape 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)"]
    },
    {
      id: "gingivite",
      titre: "Gingivite",
      resume: "Traitement de la gingivite induite par la plaque : contrôle de plaque par le patient, détartrage, antibiotiques non recommandés (HAS 2026).",
      duree: "1 à 2 séances",
      niveau: "Étudiant",
      statut: "brouillon",
      sourceType: "Recommandation HAS 2026 + guideline EFP S3 2020 + pratique courante – à compléter par le service",
      maj: "2026-11",
      indications: ["Gencive rouge, œdématiée, saignant au sondage ou au brossage, **sans perte d'attache**"],
      contreIndications: ["Perte d'attache ou poches : diagnostic de parodontite (voir les fiches de traitement parodontal)"],
      materiel: ["Révélateur de plaque", "Brosse, brossettes interdentaires", "Détartreur ultrasonique et curettes", "Cupule et pâte à polir [[à préciser]]"],
      alertes: [
        "**Gingivite : antibiothérapie non recommandée** (HAS 2026, grade B). **Pas d'antibioprophylaxie** pour le détartrage ni le polissage en population générale (HAS 2026).",
        "Éliminer les **facteurs rétentifs de plaque** (tartre, débords de restauration)."
      ],
      etapes: [
        { titre: "Séance 1 – Diagnostic, motivation et détartrage", details: ["**Sondage** (absence de perte d'attache), indices de plaque et de saignement ; **enseignement de l'hygiène** (voir la fiche « Motivation à l'hygiène »)", "**Détartrage supra-gingival et polissage** ; suppression des facteurs rétentifs"], materiel: ["sonde parodontale", "révélateur de plaque", "ultrasons", "cupule et pâte à polir"], validation: "sondage" },
        { titre: "Séance 2 (si nécessaire) – Contrôle", details: ["Nouveau relevé de plaque et de saignement ; renforcement de l'hygiène", "Si la gencive reste inflammatoire : rechercher une cause locale ou générale"], materiel: ["sonde parodontale", "révélateur de plaque"] }
      ],
      consignes: [
        "**Brossage** soigneux deux à trois fois par jour et **brossettes interdentaires** ; le saignement doit diminuer en quelques jours.",
        "**Bain de bouche** : seulement s'il est prescrit (**Eludril Perio** (chlorhexidine 0,20 %)) ; pas d'antibiotiques pour la gingivite.",
        "**Contrôle** : revenir pour vérifier que la gencive est saine."
      ],
      erreurs: ["Confondre gingivite et parodontite (sondage oublié)", "Prescrire des antibiotiques", "Détartrer sans enseigner l'hygiène"],
      references: [
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableaux 2 et 13](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "[Sanz M. et al. EFP S3 guideline, J Clin Periodontol 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)",
        "Chapple I.L. et al. Primary prevention of periodontitis: managing gingivitis. J Clin Periodontol 2015 : texte non consulté, à intégrer."
      ]
    },
    {
      id: "detartrage-polissage",
      titre: "Détartrage et polissage",
      resume: "Élimination professionnelle du tartre et du biofilm supra-gingival, polissage et suppression des facteurs rétentifs de plaque.",
      duree: "1 séance",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Guideline EFP S3 2020 + recommandation HAS 2026 + pratique courante – à compléter par le service",
      maj: "2026-11",
      indications: ["Gingivite, et étape 1 du traitement parodontal (contrôle professionnel de plaque)", "Séances de maintenance"],
      materiel: ["Détartreur ultrasonique **Satelec** (pièce à main **Newtron Slim**) et inserts", "Curettes manuelles [[à préciser]]", "Cupule et pâte à polir [[produits à préciser]]", "Révélateur de plaque", "Irrigant : eau (ultrasons)"],
      alertes: [
        "**Pas d'antibioprophylaxie** pour le détartrage, le sondage et le polissage en population générale (HAS 2026).",
        "Le **contrôle professionnel de la plaque et des facteurs rétentifs** est un élément fondamental de l'étape 1 (EFP)."
      ],
      etapes: [
        { titre: "Séance – Détartrage supra-gingival et polissage", details: ["Indices de plaque et de saignement ; **détartrage supra-gingival aux ultrasons**, complété à la curette si besoin", "**Polissage** des surfaces ; suppression des facteurs rétentifs de plaque ; enseignement de l'hygiène"], materiel: ["ultrasons + inserts", "curettes", "cupule et pâte à polir", "révélateur de plaque"] }
      ],
      consignes: [
        "**Sensibilité** : sensibilité au froid possible quelques jours ; dentifrice pour dents sensibles si besoin.",
        "**Saignement** léger normal le jour même.",
        "**Hygiène** : brossage et brossettes interdentaires comme appris ; prochain rendez-vous selon le plan de traitement."
      ],
      erreurs: ["Détartrage sans enseignement de l'hygiène", "Facteurs rétentifs (débords) non traités", "Insert ou puissance inadaptés (lésions de l'émail ou des restaurations)"],
      references: [
        "[Sanz M. et al. EFP S3 guideline, J Clin Periodontol 2020 – étape 1 : PMPR](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 2](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "surfacage-radiculaire",
      titre: "Surfaçage radiculaire (instrumentation sous-gingivale)",
      resume: "Étape 2 du traitement : sondage, anesthésie et instrumentation sous-gingivale aux inserts parodontaux, en 2 séances pour une bouche entière.",
      duree: "2 séances pour une bouche entière (selon le patient)",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + guideline EFP S3 2020 + recommandation HAS 2026",
      maj: "2026-11",
      hopital: [
        "**Séances** : **2 séances pour une bouche entière** selon le patient",
        "**Instrumentation** : **inserts parodontaux dédiés** (ultrasons)",
        "**Irrigation** : possible à la **chlorhexidine** ou au sérum physiologique ; **bain de bouche** prescrit (**Eludril Perio** (chlorhexidine 0,20 %))",
        "**Antibiotiques** : selon la recommandation **HAS 2026**",
        "**Validation par l'encadrant** : **après le sondage** et **après le surfaçage**"
      ],
      indications: ["Parodontite de stade I à III (étape 2 pour tous)"],
      contreIndications: ["Patient à haut risque d'endocardite : prise en charge selon la recommandation HAS 2024", "Pathologie systémique instable : avis médical"],
      materiel: [
        "**Inserts parodontaux** dédiés pour ultrasons **Satelec** (pièce à main **Newtron Slim**) ; curettes manuelles [[à préciser]] ; pierre d'affûtage",
        "Anesthésique local [[produit à préciser]] ; sonde parodontale",
        "**Chlorhexidine** (**Eludril Perio** (chlorhexidine 0,20 %)) ou sérum physiologique pour l'irrigation",
        "Bain de bouche prescrit : **Eludril Perio** (chlorhexidine 0,20 %)"
      ],
      alertes: [
        "**Antibiotiques systémiques en routine : non recommandés** en complément de l'instrumentation (EFP, grade A). HAS 2026 : antibiothérapie recommandée **après la dernière séance d'instrumentation** pour une **parodontite stade III/IV avec inadéquation entre le biofilm et la destruction et ratio perte osseuse/âge > 1** ; maladie nécrosante avec atteinte systémique.",
        "**Non suggérés** en adjuvants : lasers, thérapie photodynamique, doxycycline sub-antimicrobienne, probiotiques ; **non recommandés** : gels de statines, AINS, oméga-3, gel de metformine.",
        "**Pas d'antibiotique local** (HAS 2026). **Pas d'antibioprophylaxie** pour le sondage, le détartrage et le surfaçage en population générale (HAS 2026).",
        "**Chlorhexidine** : en bain de bouche pendant une période limitée, elle peut être envisagée en adjuvant (recommandation ouverte, EFP).",
        "Bouche entière en 24 h ou par quadrants : modalités équivalentes (EFP)."
      ],
      etapes: [
        { titre: "Séance 1 – Sondage, anesthésie et surfaçage de la première moitié de la bouche", details: [
          "**Sondage de contrôle** et indices ; validation par l'encadrant ; **anesthésie** de la zone [[technique à préciser]]",
          "**Surfaçage** de la première moitié de la bouche aux **inserts parodontaux** (curettes en complément), **irrigation à la chlorhexidine ou au sérum** ; validation après le surfaçage [[moitié droite/gauche à confirmer]]"
        ], materiel: ["sonde parodontale", "anesthésique", "inserts parodontaux", "curettes", "chlorhexidine ou sérum"], validation: "sondage, puis surfaçage" },
        { titre: "Séance 2 – Surfaçage de la seconde moitié et consignes", details: [
          "**Anesthésie** et **surfaçage** de la seconde moitié de la bouche ; irrigation ; validation par l'encadrant après le surfaçage",
          "**Consignes** et **prescription d'un bain de bouche** (**Eludril Perio** (chlorhexidine 0,20 %)) ; rendez-vous de réévaluation [[délai à préciser]]"
        ], materiel: ["anesthésique", "inserts parodontaux", "curettes", "chlorhexidine ou sérum", "ordonnance"], validation: "surfaçage" }
      ],
      consignes: [
        "**Sensibilité** au froid et au chaud possible plusieurs jours ; dentifrice pour dents sensibles.",
        "**Saignement** léger et gencive sensible les premiers jours ; poursuivre le brossage doux.",
        "**Alimentation** : éviter les aliments très chauds, durs ou épicés tant que l'anesthésie persiste et que la gencive est sensible.",
        "**Bain de bouche** : **Eludril Perio** (chlorhexidine 0,20 %) selon l'ordonnance.",
        "**Hygiène** : brossettes interdentaires comme appris ; l'efficacité du traitement dépend de l'hygiène à la maison.",
        "**Prochains rendez-vous** : réévaluation puis maintenance.",
        "**Consulter** en cas de gonflement, de douleur forte ou de fièvre."
      ],
      erreurs: [
        "Instrumenter sans contrôle de plaque satisfaisant",
        "Pas de validation de l'encadrant après le sondage ou après le surfaçage",
        "Surfaçage incomplet des poches profondes ou des furcations",
        "Prescrire un antibiotique en dehors des cas de la HAS 2026",
        "Oublier de programmer la réévaluation"
      ],
      suivi: ["**Réévaluation** après une cicatrisation suffisante [[délai à préciser]]"],
      references: [
        "[Sanz M. et al. EFP S3 guideline, J Clin Periodontol 2020 – étape 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableaux 2, 13 et 14](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "reevaluation-parodontale",
      titre: "Réévaluation parodontale",
      resume: "Contrôle de la réponse à l'instrumentation : sondage complet, indices, décision entre maintenance et étape 3.",
      duree: "1 séance",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Guideline EFP S3 2020 + pratique courante – à compléter par le service",
      maj: "2026-11",
      indications: ["Après une cicatrisation suffisante suivant l'instrumentation sous-gingivale [[délai du service à préciser]]"],
      materiel: ["Sonde parodontale [[marque à préciser]]", "Logiciel Logos", "Révélateur de plaque", "Radiographies si besoin"],
      alertes: ["**Objectifs de santé** : aucune poche **≥ 5 mm avec saignement** et aucune poche profonde **≥ 6 mm** ; si atteints, passage en maintenance ; sinon, étape 3 (EFP)."],
      etapes: [
        { titre: "Séance – Sondage complet et décision", details: ["**Sondage 6 sites par dent**, indices de plaque et de saignement, saisie dans **Logos** et comparaison avec l'examen initial", "**Décision** : maintenance si objectifs atteints ; sinon ré-instrumentation ciblée ou chirurgie (étape 3) ; consignes d'hygiène"], materiel: ["sonde parodontale", "Logos", "révélateur de plaque"], validation: "sondage" }
      ],
      consignes: ["**Résultat** du traitement expliqué au patient ; objectifs et prochaines étapes ; **maintenance** à rythme personnalisé."],
      erreurs: ["Réévaluation trop précoce, avant la cicatrisation", "Sondage incomplet", "Absence de décision écrite (maintenance ou étape 3)"],
      references: ["[Sanz M. et al. EFP S3 guideline, J Clin Periodontol 2020 – réévaluation après l'étape 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)"]
    },
    {
      id: "chirurgie-parodontale",
      titre: "Chirurgie parodontale (étape 3)",
      resume: "Prise en charge des sites non répondeurs : ré-instrumentation, lambeau d'accès, chirurgie résectrice ou régénératrice. Réalisée au service par des praticiens formés.",
      duree: "Selon l'acte",
      niveau: "Praticien formé / spécialiste (pas les étudiants de 4e et 5e année)",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + guideline EFP S3 2020 + HAS 2026",
      maj: "2026-11",
      hopital: [
        "**Chirurgie parodontale réalisée au service**, **mais pas par les étudiants de 4e et 5e année**"
      ],
      indications: [
        "Poches > 4 mm avec saignement et/ou poches profondes ≥ 6 mm persistant à la réévaluation après l'étape 2",
        "Lésions intra-osseuses et lésions de furcation"
      ],
      contreIndications: ["**Chirurgie non indiquée chez les patients n'atteignant pas un contrôle de plaque suffisant**", "Les actes de chirurgie parodontale sont contre-indiqués chez les patients traités pour une pathologie maligne ou irradiés ≥ 40 Gy (HAS 2026, certains actes)"],
      alertes: [
        "La chirurgie doit être réalisée par un praticien **avec formation spécifique supplémentaire** ou un spécialiste (EFP).",
        "Antibioprophylaxie : non recommandée en population générale pour la chirurgie d'assainissement, l'élongation coronaire ou la chirurgie plastique ; recommandée au cas par cas pour les patients à risque infectieux augmenté ou à haut risque d'ostéonécrose (HAS 2026)."
      ],
      etapes: [
        { titre: "Poches résiduelles modérées (4-5 mm)", details: ["Répéter l'instrumentation sous-gingivale, avec ou sans lambeau d'accès, dans un contexte d'étapes 1 et 2 de qualité et de maintenance fréquente"] },
        { titre: "Poches résiduelles profondes (≥ 6 mm)", details: ["**Lambeau d'accès** recommandé (différents dessins possibles)", "Chirurgie résectrice : possible, avec risque d'augmentation de la récession"] },
        { titre: "Défauts intra-osseux ≥ 3 mm", details: ["**Chirurgie régénératrice** recommandée", "Régénération : **membranes** ou **dérivés de la matrice amélaire**, avec ou sans greffe d'origine osseuse ; lambeaux de préservation papillaire"] },
        { titre: "Lésions de furcation", details: ["Traitement parodontal recommandé sur molaires de classes II et III avec poches résiduelles : **l'atteinte de furcation n'est pas une raison d'extraction**", "Classe II mandibulaire et classe II vestibulaire maxillaire : régénération recommandée ; classe III et lésions complexes : tunnelisation, séparation ou résection radiculaire possibles"] },
        { titre: "Réévaluation après l'étape 3", details: ["Mêmes objectifs : aucune poche ≥ 5 mm avec saignement, aucune poche ≥ 6 mm ; puis maintenance"] }
      ],
      consignes: ["Consignes post-opératoires, bain de bouche et contrôle selon l'acte réalisé [[à préciser avec le praticien qui opère]]."],
      erreurs: ["Opérer un patient sans contrôle de plaque satisfaisant", "Chirurgie réalisée par un opérateur non formé", "Maintenance non planifiée après la chirurgie"],
      references: [
        "[Sanz M. et al. EFP S3 guideline, J Clin Periodontol 2020 – étape 3](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 2](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "reevaluation-maintenance",
      titre: "Maintenance parodontale (étape 4)",
      resume: "Soins de soutien parodontal : rythme à partir de 3 mois, contenu des séances, hygiène et adjuvants.",
      duree: "1 séance, 30 à 45 min",
      niveau: "Étudiant",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + guideline EFP S3 2020",
      maj: "2026-11",
      hopital: [
        "**Rythme de maintenance : à partir de 3 mois** [[à confirmer : rythme exact]]"
      ],
      indications: ["Tous les patients après un traitement actif réussi : risque élevé de récidive ou de progression"],
      alertes: ["**L'adhésion à la maintenance est déterminante** pour la stabilité parodontale à long terme.", "Objectifs de santé : aucune poche > 4 mm avec saignement, aucune poche profonde ≥ 6 mm."],
      materiel: ["Sonde parodontale, ultrasons **Satelec Newtron Slim** et inserts", "Brossettes interdentaires adaptées aux espaces", "Éventuellement brosse électrique (alternative possible à la brosse manuelle)", "Dentifrice ou bain de bouche antiseptique si indiqué : chlorhexidine, huiles essentielles, chlorure de cétylpyridinium (suggérés par l'EFP)"],
      etapes: [
        { titre: "Fréquence des visites", details: ["Intervalle **à partir de 3 mois**, jusqu'à 12 mois au maximum, personnalisé selon le profil de risque et l'état parodontal (EFP)"] },
        { titre: "Contenu de la séance", details: ["Instructions d'hygiène répétées et individualisées, incluant le nettoyage interdentaire", "**Débridement mécanique professionnel de plaque** (suggéré), sondage des sites à risque, réévaluation"] },
        { titre: "Hygiène à domicile", details: ["Brossage complété par **brossettes interdentaires** (recommandé) ; **fil dentaire non suggéré** en 1er choix chez le patient en maintenance"] },
        { titre: "À ne pas faire", details: ["Doxycycline sub-antimicrobienne et thérapie photodynamique en complément : non suggérés ; remplacer le débridement mécanique par un laser Er:YAG : non suggéré"] },
        { titre: "Facteurs de risque", details: ["Maintenir les interventions d'arrêt du tabac et de contrôle du diabète"] }
      ],
      consignes: ["**Rendez-vous réguliers** à vie : la maintenance évite la récidive.", "**Hygiène** quotidienne avec brossettes interdentaires ; signaler tout saignement, mobilité ou gonflement."],
      erreurs: ["Intervalle trop espacé pour un patient à risque", "Pas de sondage lors de la séance", "Abandon du suivi par le patient non relancé"],
      references: ["[Sanz M. et al. EFP S3 guideline, J Clin Periodontol 2020 – étape 4](https://pmc.ncbi.nlm.nih.gov/articles/PMC7891343/)"]
    },
    {
      id: "abces-parodontal-urgence",
      titre: "Abcès parodontal et urgences parodontales",
      resume: "Prise en charge d'un abcès parodontal ou d'une maladie parodontale nécrosante : geste local, antibiotiques selon la HAS 2026, orientation.",
      duree: "1 séance, 30 à 45 min",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Recommandation HAS 2026 + pratique courante – à compléter par le service",
      maj: "2026-11",
      indications: ["Tuméfaction gingivale douloureuse avec poche profonde et suppuration (abcès parodontal)", "Douleur, ulcération des papilles, halitose (maladie parodontale nécrosante)", "Lésion endo-parodontale"],
      contreIndications: ["Signes de gravité (trismus, dysphagie, tuméfaction cervico-faciale, fièvre élevée) : orientation hospitalière"],
      materiel: ["Anesthésique local [[à préciser]]", "Sonde parodontale, curettes et inserts ultrasoniques fins", "Sérum physiologique ou chlorhexidine (**Eludril Perio** (chlorhexidine 0,20 %)) pour l'irrigation", "Test de vitalité pulpaire (diagnostic différentiel endodontique)"],
      alertes: [
        "**Le geste local est prioritaire** : drainage et débridement ; l'antibiothérapie s'ajoute au geste local (HAS 2026, grade A).",
        "**Abcès parodontal et abcès endo-parodontal** : antibiothérapie **non recommandée** sauf patient à haut risque d'endocardite ou à risque infectieux augmenté, signe d'extension locale, régionale ou systémique (adénopathie, fièvre), ou geste local impossible.",
        "**Maladie parodontale nécrosante** : antibiotiques si **atteinte systémique** ; sans atteinte systémique, uniquement chez le patient à haut risque d'endocardite ou à risque infectieux augmenté.",
        "**Schéma adulte de 1re intention** : **amoxicilline 1 g × 3/j pendant 3 jours** ; réévaluation à 3 jours (HAS 2026).",
        "**Drapeaux rouges** : cellulite, trismus, dysphagie, fièvre → hospitalisation."
      ],
      etapes: [
        { titre: "Temps 1 – Diagnostic", details: ["Sondage, mobilité, suppuration ; **test de vitalité** et radiographie pour distinguer une origine parodontale, endodontique ou combinée", "Évaluation de l'état général (fièvre, adénopathies, trismus)"], materiel: ["sonde parodontale", "test de vitalité", "radiographie"] },
        { titre: "Temps 2 – Geste local", details: ["Anesthésie ; **drainage** par la poche ou incision, **débridement** doux à l'insert et aux curettes, irrigation", "Lésion endodontique associée : traitement endodontique (voir les fiches d'endodontie)"], materiel: ["anesthésique", "inserts fins", "curettes", "irrigation"] },
        { titre: "Temps 3 – Prescription et suite", details: ["Antibiotiques **seulement dans les cas de la HAS 2026** ; antalgiques [[prescription du service]] ; bain de bouche (**Eludril Perio** (chlorhexidine 0,20 %))", "**Contrôle à 48-72 h** puis traitement parodontal complet après l'urgence [[délai à confirmer]]"], materiel: ["ordonnance"] }
      ],
      consignes: [
        "**Hygiène** douce mais maintenue ; ne pas arrêter le brossage.",
        "**Antibiotiques** (si prescrits) : les prendre jusqu'au bout.",
        "**Consulter en urgence** en cas de gonflement qui augmente, de fièvre, de difficulté à ouvrir la bouche ou à avaler.",
        "**Rendez-vous** de contrôle puis traitement de la maladie parodontale."
      ],
      erreurs: ["Prescrire un antibiotique sans geste local", "Passer à côté d'une origine endodontique", "Ne pas rechercher les signes de gravité", "Ne pas programmer le traitement parodontal ensuite"],
      references: [
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableaux 13 et 14](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "Herrera D. et al. Acute periodontal lesions and endo-periodontal lesions. J Clin Periodontol 2018 : texte non consulté, à intégrer."
      ]
    }
  ]
});
