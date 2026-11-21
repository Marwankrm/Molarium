window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "endodontie",
  ordre: 3,
  nom: "Endodontie",
  sigle: "EN",
  couleur: "#b3262e",
  description: "Traitement endodontique, retraitement et urgences pulpaires et péri-apicales : irrigation, médication intracanalaire, obturation.",
  protocoles: [
    {
      id: "traitement-endodontique",
      titre: "Traitement endodontique",
      resume: "Le plus souvent en une seule séance, sous digue : accès, mise en forme aux limes rotatives ProTaper Gold, irrigation, essayage de la gutta, obturation par thermocompaction et restauration coronaire. Une 2e séance avec hydroxyde de calcium si nécessaire.",
      duree: "Le plus souvent 1 séance ; 2 séances si nécessaire",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + consensus d'experts 2024 + recommandation HAS 2026 + revue 2022 (douleur post-opératoire)",
      maj: "2026-11",
      hopital: [
        "Traitement **très souvent réalisé en une seule séance** ; **2e séance** en cas de **manque de temps, de suintement ou de douleur** (avec **hydroxyde de calcium** entre les séances)",
        "**Mise en forme** : limes rotatives **ProTaper Gold (Dentsply Sirona)**, séquence **SX, S1, S2, F1, F2, F3**, préparation apicale **en général jusqu'au 25/100 (F2)** [[moteur, vitesse et couple à préciser]]",
        "**Localisateur d'apex** utilisé [[modèle non précisé]]",
        "**Irrigation** : hypochlorite de sodium à la concentration indiquée dans la fiche (2,5 à 5,25 %) [[concentration exacte à préciser]] ; **pas de chlorhexidine** ; **pas d'activation de l'irrigant** (pas d'équipement)",
        "**Obturation par thermocompaction**, matériel **Dentsply Sirona** [[références à préciser]] ; **cônes de gutta-percha assortis aux ProTaper Gold** ; ciment endodontique [[non précisé]]",
        "**Étanchéité provisoire** : verre ionomère (CVI, **EQUIA Forte HT Fil** de GC) ou résine composite",
        "**EDTA** : **CanalPro EDTA 17 %** (Coltène) ; **hydroxyde de calcium** : **Hycal**, pâte prête à l'emploi en seringue",
        "**Validation par l'encadrant** : longueur de travail, essayage de la gutta (maître-cône) et obturation",
        "**3 radiographies** : **pré-opératoire**, **essayage de la gutta**, **contrôle d'obturation**"
      ],
      indications: ["Pulpite irréversible", "Nécrose pulpaire avec ou sans parodontite apicale", "Traitement pré-prothétique nécessitant un ancrage radiculaire"],
      contreIndications: ["Dent non restaurable", "Fracture radiculaire verticale", "Dent sans intérêt stratégique chez un patient à risque (avis senior)"],
      prerequis: ["Diagnostic pulpaire et péri-apical établi", "Radiographie pré-opératoire exploitable", "Évaluation de la restaurabilité de la dent", "Consentement éclairé, patient prévenu que **des douleurs post-opératoires sont fréquentes**"],
      materiel: [
        "Digue, clamps, cadre",
        "Hypochlorite de sodium **2,5 à 5,25 %** (concentrations cliniques décrites : 0,5 à 8,25 % ; au-delà de 2,5 % : dissolution tissulaire) [[concentration exacte du CHU à préciser]]",
        "**CanalPro EDTA 17 %** (Coltène, flacon de 500 mL) ; eau pour rincer entre les irrigants",
        "Seringue 5 mL à embout **Luer-Lock** et aiguille **30 G** (Ø externe 0,298–0,320 mm), à ouverture latérale (réduit l'extrusion apicale)",
        "Limes rotatives **ProTaper Gold (Dentsply Sirona)** (SX, S1, S2, F1, F2, F3) ; limes manuelles de cathétérisme [[à préciser]] ; localisateur d'apex [[modèle à préciser]]",
        "**Cônes de gutta-percha assortis aux ProTaper Gold** et matériel de **thermocompaction (Dentsply Sirona)** [[références à préciser]] ; ciment endodontique [[à préciser]]",
        "Hydroxyde de calcium en pâte prête à l'emploi en seringue (**Hycal**), si 2e séance",
        "Verre ionomère (**EQUIA Forte HT Fil**, GC, capsule teinte A2 [[à confirmer : utilisé pour l'étanchéité]]) ou résine composite pour l'étanchéité coronaire",
        "Radiographies : 3 (pré-opératoire, essayage de la gutta, contrôle d'obturation)"
      ],
      alertes: [
        "**Digue obligatoire** pendant l'irrigation (protège la muqueuse, évite l'ingestion de l'irrigant).",
        "**Ne jamais forcer l'irrigant** vers l'apex : aiguille libre dans le canal, mouvements verticaux de faible amplitude, **sans pression excessive**. L'extrusion d'hypochlorite cause une lésion des tissus péri-apicaux.",
        "**Rincer à l'eau entre les irrigants** : l'EDTA fait perdre à l'hypochlorite son pouvoir de dissolution tissulaire ; **ne pas terminer par l'EDTA** (il continue à ramollir la dentine).",
        "**Respecter la longueur de travail** (mise en forme, irrigation, obturation) : éviter l'extrusion de débris, d'irrigant, de gutta-percha ou de ciment, principales causes de douleurs post-opératoires.",
        "Accident d'exposition à l'hypochlorite : antibiothérapie post-opératoire recommandée (amoxicilline 1 g × 2/j pendant 5 jours, HAS 2026).",
        "Antibioprophylaxie non recommandée pour le traitement endodontique en population générale (HAS 2026).",
        "**Une séance ou deux ?** Au service, le traitement est **très souvent fait en une seule séance**. Une 2e séance avec hydroxyde de calcium est surtout envisagée pour une dent avec lésion péri-apicale, fistule ou exsudat, ou si le temps manque. **Au service : 2e séance en cas de manque de temps, de suintement ou de douleur.** Une méta-analyse de 2017 trouve plus de flare-ups après une séance unique (preuve faible), sans différence de complications ni de douleur."
      ],
      etapes: [
        { titre: "Séance 1 (le plus souvent séance unique) – Accès, mise en forme, irrigation, obturation et restauration", details: [
          "**Anesthésie locale**, dépose des anciennes restaurations et caries, reconstruction d'une paroi si besoin, **pose de la digue**, désinfection du champ ; **cavité d'accès** directe aux orifices ; **dès l'ouverture de la chambre, injecter l'hypochlorite** pour remplir chambre et canaux, puis repérer les orifices et négocier les canaux",
          "**Longueur de travail** au localisateur d'apex, confirmée par radiographie ; **mise en forme aux ProTaper Gold** avec **2 mL d'hypochlorite par canal entre chaque lime**, **10 à 20 mL au total par canal**, aiguille **à 2 mm de la longueur de travail** ; **séquence ProTaper Gold SX, S1, S2, F1, F2, F3**, préparation apicale **en général jusqu'au 25/100 (F2)** [[le consensus conseille au moins n° 30 dans un canal infecté pour que l'aiguille 30 G atteigne le tiers apical : à discuter avec l'encadrant]]",
          "**Irrigation finale** : **hypochlorite 1 min, EDTA 17 % 1 min, hypochlorite 30 s** (plus de 5 mL par canal), **rinçage à l'eau entre chaque irrigant**, séchage (rinçage à l'éthanol 95 %, 3 mL/canal, possible)",
          "**Essayage de la gutta (cône assorti à la dernière lime)** et radiographie ; **obturation par thermocompaction** (Dentsply Sirona) avec le ciment endodontique [[à préciser]], radiographie de contrôle ; **restauration coronaire étanche immédiate** (verre ionomère ou résine composite), puis restauration définitive (onlay, couronne) dans les meilleurs délais"
        ], materiel: ["digue et clamps", "fraises d'accès", "hypochlorite, EDTA 17 %, eau", "seringue Luer-Lock + aiguille 30 G", "localisateur d'apex", "ProTaper Gold", "cônes de gutta-percha", "matériel de thermocompaction", "ciment endodontique [[à préciser]]", "verre ionomère ou résine composite", "radiographies"], validation: "longueur de travail, essayage de la gutta et obturation", astuce: "Sans équipement d'activation, une agitation manuelle (lime ou cône de gutta-percha ajusté) est décrite par le consensus [[à discuter avec l'encadrant]]. Canal très infecté (fistule, exsudat) ou temps insuffisant : ne pas obturer ; poser l'hydroxyde de calcium radio-opaque sur toute la longueur de travail, étanchéifier au verre ionomère ou à la résine composite et poursuivre en séance 2." },
        { titre: "Séance 2 (si nécessaire) – Retrait de l'hydroxyde de calcium et obturation", details: [
          "**Quand ?** au service : **manque de temps, suintement (exsudat) ou douleur** ; plus généralement canal infecté avec lésion ou fistule ; intervalle entre les séances : **1 à 2 semaines**",
          "Dépose de l'étanchéité provisoire et de l'hydroxyde de calcium par **irrigation abondante** (limes de calibrage si besoin), **irrigation finale** (hypochlorite, EDTA, hypochlorite, rinçage à l'eau), séchage, **essayage de la gutta**, **obturation par thermocompaction**, radiographie de contrôle et **restauration coronaire étanche immédiate**"
        ], materiel: ["hypochlorite, EDTA, eau", "cônes de gutta-percha", "matériel de thermocompaction", "ciment endodontique [[à préciser]]", "verre ionomère ou résine composite", "radiographies"], validation: "essayage de la gutta et obturation", astuce: "L'étanchéité coronaire conditionne le succès à long terme." }
      ],
      consignes: [
        "**Douleurs après le traitement : elles sont fréquentes** (environ 1 patient sur 5 est gêné dans sa vie quotidienne, et jusqu'à 10 % gardent une douleur jusqu'à 6 mois selon une revue) ; elles sont le plus souvent maximales dans les premières 24 à 48 heures.",
        "**Antalgiques** : paracétamol en première intention, en l'absence de contre-indication ; la prescription et les doses sont à adapter par le prescripteur [[prescription du service à préciser]].",
        "**Consulter en urgence** en cas de gonflement, fièvre, douleur qui augmente ou difficulté à ouvrir la bouche ou à avaler.",
        "**Dent fragilisée** : éviter de mâcher dessus jusqu'à la restauration définitive.",
        "**Pansement provisoire** : s'il se détache ou se fracture, reprendre rendez-vous rapidement (risque de recontamination).",
        "**Restauration définitive** : à faire sans tarder (onlay ou couronne).",
        "**Contrôles** à 6 et 12 mois."
      ],
      erreurs: [
        "Traiter **sans digue** ou avec une digue non étanche",
        "Accès insuffisant : canaux manqués (MB2 des molaires maxillaires), instruments qui travaillent mal",
        "**Longueur de travail** mal déterminée (sur- ou sous-instrumentation, extrusion)",
        "Irrigation **sous pression** ou aiguille coincée ; terminer par l'EDTA ; oublier le rinçage à l'eau entre irrigants",
        "Obturation trop courte ou trop longue (extrusion de gutta ou de ciment)",
        "Restauration coronaire non étanche ou différée",
        "Ne pas prévenir le patient des douleurs post-opératoires et de la conduite à tenir"
      ],
      suivi: ["Contrôle clinique et radiologique à 6 et 12 mois"],
      complications: [
        "Extrusion d'hypochlorite : douleur immédiate, œdème, ecchymose → arrêt de l'irrigation, antalgie, avis senior, antibiothérapie (HAS 2026)",
        "Extrusion d'hydroxyde de calcium ou de ciment : surveillance clinique et radiologique ; chirurgie endodontique en cas de symptômes persistants ou d'atteinte du sinus/du nerf",
        "Fracture d'instrument, perforation : arrêter, documenter, avis du senior"
      ],
      references: [
        "[Zou X. et al. Expert consensus on irrigation and intracanal medication in root canal therapy. Int J Oral Sci 2024;16:23](https://pmc.ncbi.nlm.nih.gov/articles/PMC10907616/)",
        "[Di Spirito F. et al. Post-operative endodontic pain management: an overview of systematic reviews. Healthcare 2022;10:760](https://pmc.ncbi.nlm.nih.gov/articles/PMC9141195/) — douleur post-endodontique fréquente (environ 1 patient sur 5 gêné au quotidien)",
        "[Schwendicke F., Göstemeyer G. Single-visit or multiple-visit root canal treatment. BMJ Open 2017;7](https://pmc.ncbi.nlm.nih.gov/articles/PMC5293988/)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026)](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "Duncan H.F. et al. ESE S3-level clinical practice guideline: treatment of pulpal and apical disease. Int Endod J 2023;56 Suppl 3:238-295 (doi 10.1111/iej.13974) : **texte non consulté pour cette fiche**, à intégrer.",
        "Prescription d'antalgiques : aucune recommandation française spécifique à l'endodontie trouvée ; à définir par le service."
      ]
    },
    {
      id: "retraitement-endodontique",
      titre: "Retraitement endodontique",
      resume: "Le plus souvent en une seule séance, sous digue : évaluation, désobturation au solvant à l'orange (Dentsply Sirona) et aux limes, mise en forme ProTaper Gold, obturation par thermocompaction et restauration coronaire. Une 2e séance avec hydroxyde de calcium si nécessaire.",
      duree: "Le plus souvent 1 séance ; 2 séances si nécessaire",
      niveau: "Interne / étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + revues systématiques + consensus 2024 + HAS 2026",
      maj: "2026-11",
      hopital: [
        "Retraitement **très souvent réalisé en une seule séance** ; **2e séance** en cas de **manque de temps, de suintement ou de douleur** (avec **hydroxyde de calcium** entre les séances)",
        "**Solvant à l'orange** (huile d'orange), de la **même marque : Dentsply Sirona**",
        "**Mise en forme** : limes rotatives **ProTaper Gold (Dentsply Sirona)**, séquence **SX, S1, S2, F1, F2, F3**, préparation apicale **en général jusqu'au 25/100 (F2)** [[moteur, vitesse et couple à préciser]] ; instruments de désobturation [[à préciser]]",
        "**Localisateur d'apex** utilisé [[modèle non précisé]]",
        "**Irrigation** : hypochlorite de sodium (2,5 à 5,25 %) [[concentration exacte à préciser]] ; **pas de chlorhexidine** ; **pas d'activation de l'irrigant** (pas d'équipement)",
        "**Obturation par thermocompaction**, matériel **Dentsply Sirona** ; **cônes de gutta-percha assortis aux ProTaper Gold** ; ciment endodontique [[non précisé]]",
        "**Étanchéité provisoire** : verre ionomère (CVI, **EQUIA Forte HT Fil** de GC) ou résine composite",
        "**EDTA** : **CanalPro EDTA 17 %** (Coltène) ; **hydroxyde de calcium** : **Hycal**, pâte prête à l'emploi en seringue",
        "**Validation par l'encadrant** : longueur de travail, essayage de la gutta (maître-cône) et obturation",
        "**3 radiographies** : **pré-opératoire**, **essayage de la gutta**, **contrôle d'obturation**"
      ],
      indications: [
        "Dent déjà traitée avec **parodontite apicale persistante ou symptomatique**",
        "Traitement initial de **qualité insuffisante** (obturation courte ou inhomogène, canal manqué) associé à une lésion ou à un projet prothétique",
        "**Fuite coronaire** prolongée avant une restauration, avec risque de contamination du canal"
      ],
      contreIndications: [
        "Dent **non restaurable** ou fracture radiculaire verticale",
        "Patient à haut risque d'ostéonécrose ou d'endocardite : mesures spécifiques avant tout geste (voir fiche antibiotiques)",
        "Retraitement non indispensable si la dent est asymptomatique, sans lésion et correctement obturée"
      ],
      prerequis: [
        "**Cause de l'échec identifiée** (radiographie, éventuel CBCT, examen de la restauration coronaire)",
        "Évaluation de la **restaurabilité** et du pronostic ; **alternatives expliquées** : retraitement non chirurgical, chirurgie apicale (échecs comparables à long terme selon une méta-analyse), extraction",
        "Consentement éclairé, patient prévenu que **des douleurs post-opératoires sont fréquentes**"
      ],
      materiel: [
        "Digue, clamps ; ultrasons et fraises pour la dépose de la restauration, de la couronne ou du tenon",
        "**Solvant à l'orange (Dentsply Sirona)** ; instruments de désobturation [[à préciser]]",
        "Limes rotatives **ProTaper Gold (Dentsply Sirona)** (SX, S1, S2, F1, F2, F3) ; localisateur d'apex [[modèle à préciser]]",
        "**Hypochlorite de sodium 2,5–5,25 %** [[concentration exacte à préciser]], **CanalPro EDTA 17 %** (Coltène), eau, aiguille 30 G Luer-Lock",
        "Matériel de **thermocompaction (Dentsply Sirona)**, **cônes de gutta-percha assortis aux ProTaper Gold**, ciment endodontique [[à préciser]]",
        "**Hydroxyde de calcium** en pâte prête à l'emploi en seringue (**Hycal**), si 2e séance",
        "Verre ionomère (**EQUIA Forte HT Fil**, GC) ou résine composite ; matériau de réparation de perforation [[à préciser]]",
        "Radiographies : 3 (pré-opératoire, essayage de la gutta, contrôle d'obturation)"
      ],
      alertes: [
        "**Digue indispensable** ; reconstruire une paroi si nécessaire pour l'étanchéité.",
        "**Le retraitement est plus long et moins prévisible** qu'un traitement initial : informer le patient des douleurs post-opératoires fréquentes, des risques (perforation, fracture d'instrument, canal non négociable) et des alternatives.",
        "**Instruments fracturés** : l'échec de retrait est plus fréquent dans le **tiers apical (21 %)** que dans le tiers moyen ou coronaire (8,8 %) (méta-analyse 2024) ; ne pas forcer et demander l'avis du senior.",
        "**Solvants** : les données ne montrent pas de différence sur la douleur post-opératoire ni la prise d'antalgiques (peu d'essais randomisés) ; le solvant à l'orange est utilisé au service.",
        "**Antibioprophylaxie** : non recommandée pour la reprise de traitement en population générale ; recommandée chez les patients à risque infectieux augmenté ; non recommandée chez les patients à haut risque d'ostéonécrose (HAS 2026, tableau 1).",
        "**Rincer à l'eau entre les irrigants** ; **EDTA jamais en dernier** ; irrigation **sans pression**."
      ],
      etapes: [
        { titre: "Séance 1 (le plus souvent séance unique) – Évaluation, désobturation, mise en forme, obturation et restauration", details: [
          "**Évaluation** (radiographie, CBCT si besoin, qualité de l'obturation, fuite coronaire, lésion) ; **dépose de la restauration, de la couronne ou du tenon** si nécessaire (ultrasons) ; anesthésie, **digue**, accès",
          "**Désobturation** de la gutta-percha au **solvant à l'orange** et aux instruments [[à préciser]], **repérage des canaux manqués**, négociation et **perméabilisation jusqu'à la longueur de travail** (localisateur d'apex, radiographie) ; retrait des fragments ou réparation d'une perforation selon la situation [[matériau du service]]",
          "**Mise en forme aux ProTaper Gold** (SX, S1, S2, F1, F2, F3 ; apex en général jusqu'au 25/100) avec irrigation abondante (hypochlorite 2 mL/canal entre chaque lime) ; **irrigation finale** hypochlorite 1 min, EDTA 17 % 1 min, hypochlorite 30 s, **rinçage à l'eau entre chaque irrigant** ; séchage",
          "**Essayage de la gutta (cône assorti à la dernière lime)** et radiographie ; **obturation par thermocompaction**, radiographie de contrôle ; **restauration coronaire étanche immédiate**, puis restauration définitive (onlay, couronne) dans les meilleurs délais"
        ], materiel: ["digue", "ultrasons et fraises", "solvant à l'orange (Dentsply Sirona)", "ProTaper Gold", "localisateur d'apex", "hypochlorite, EDTA, eau", "cônes de gutta-percha et thermocompaction", "ciment endodontique [[à préciser]]", "verre ionomère ou résine composite", "radiographies"], validation: "longueur de travail, essayage de la gutta et obturation", astuce: "Si la désobturation est longue, lésion étendue, fistule ou exsudat : ne pas obturer ; poser l'hydroxyde de calcium radio-opaque aqueux sur toute la longueur de travail, étanchéifier au verre ionomère ou à la résine composite et poursuivre en séance 2." },
        { titre: "Séance 2 (si nécessaire) – Retrait de l'hydroxyde de calcium et obturation", details: [
          "**Quand ?** retraitement avec lésion étendue, fistule ou exsudat (la médication à l'hydroxyde de calcium est alors indiquée), travail inachevé en séance 1 ; **au service : manque de temps, suintement ou douleur** ; intervalle entre les séances : **1 à 2 semaines**",
          "Dépose de l'étanchéité provisoire et de l'hydroxyde de calcium par **irrigation abondante**, **irrigation finale** (hypochlorite, EDTA, hypochlorite, rinçage à l'eau), séchage, **essayage de la gutta**, **obturation par thermocompaction**, radiographie de contrôle et **restauration coronaire étanche immédiate**"
        ], materiel: ["hypochlorite, EDTA, eau", "cônes de gutta-percha et thermocompaction", "ciment endodontique [[à préciser]]", "verre ionomère ou résine composite", "radiographies"], validation: "essayage de la gutta et obturation", astuce: "La restauration coronaire étanche est aussi importante que l'obturation pour le succès du retraitement." }
      ],
      consignes: [
        "**Douleurs après un retraitement : fréquentes**, surtout dans les premières 24 à 48 heures ; elles sont plus marquées qu'après un traitement initial dans certaines séries.",
        "**Antalgiques** : paracétamol en première intention, en l'absence de contre-indication ; la prescription et les doses sont à adapter par le prescripteur [[prescription du service à préciser]].",
        "**Gonflement, fièvre, difficulté à ouvrir la bouche ou à avaler** : consulter en urgence.",
        "**Dent fragilisée** : éviter de mâcher dessus jusqu'à la restauration définitive.",
        "**Pansement provisoire** : s'il se détache, reprendre rendez-vous rapidement.",
        "**Contrôles** cliniques et radiologiques à 6 mois et à 1 an."
      ],
      erreurs: [
        "Ne pas rechercher la **cause de l'échec** (canal manqué, fuite coronaire, fracture, restaurabilité)",
        "Travailler sans digue ou avec une restauration provisoire non étanche",
        "**Forcer un instrument** dans un canal calcifié ou dévié (perforation, fracture d'instrument, marche)",
        "Irrigation sous pression, EDTA en dernier, oubli du rinçage à l'eau entre irrigants",
        "Ne pas expliquer au patient les alternatives, le pronostic et les douleurs possibles",
        "Restauration coronaire différée ou non étanche"
      ],
      suivi: ["Contrôle clinique et radiologique à 6 mois et 1 an, puis selon l'évolution de la lésion"],
      complications: [
        "Perforation : arrêter, documenter, réparer selon le matériau du service ; avis du senior",
        "Fracture d'instrument : ne pas forcer ; avis du senior",
        "Flare-up ou douleur persistante : contrôler l'étanchéité, l'occlusion et les canaux ; reconsidérer la stratégie (chirurgie apicale)",
        "Accident d'hypochlorite : voir la fiche « Traitement endodontique »"
      ],
      references: [
        "[Dioguardi M. et al. Comparison of endodontic failures between nonsurgical retreatment and endodontic surgery: systematic review and meta-analysis. Medicina 2022;58:894](https://pmc.ncbi.nlm.nih.gov/articles/PMC9324533/)",
        "[Dioguardi M. et al. Analysis of endodontic successes and failures in the removal of fractured endodontic instruments during retreatment. Healthcare 2024;12:1390](https://pmc.ncbi.nlm.nih.gov/articles/PMC11276083/)",
        "[Shah T. et al. Endodontic retreatment efficacy with and without solvents: a systematic review. J Conserv Dent Endod 2023;26](https://pmc.ncbi.nlm.nih.gov/articles/PMC10823971/)",
        "[Scardini I.L. et al. Postoperative pain following nonsurgical endodontic retreatment. Iran Endod J 2023;18](https://pmc.ncbi.nlm.nih.gov/articles/PMC10155107/)",
        "[Di Spirito F. et al. Post-operative endodontic pain management: an overview of systematic reviews. Healthcare 2022;10:760](https://pmc.ncbi.nlm.nih.gov/articles/PMC9141195/)",
        "[Zou X. et al. Expert consensus on irrigation and intracanal medication in root canal therapy. Int J Oral Sci 2024;16:23](https://pmc.ncbi.nlm.nih.gov/articles/PMC10907616/) — le consensus décrit la chlorhexidine 2 % et l'activation de l'irrigant, non utilisées au service",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 1](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "Le guideline ESE (Duncan et al. 2023) n'a pas pu être consulté. Produits non précisés et validations à confirmer par le service."
      ]
    },
    {
      id: "urgence-endodontique",
      titre: "Urgence endodontique (pulpite, abcès)",
      resume: "Démarche diagnostique, geste local prioritaire et place limitée des antibiotiques (HAS 2026).",
      duree: "30 à 45 min",
      niveau: "Tous niveaux",
      statut: "brouillon",
      sourceType: "Recommandation HAS 2026 + pratique courante",
      maj: "2026-11",
      indications: ["Douleur spontanée, pulsatile ou nocturne", "Tuméfaction ou signes d'infection d'origine dentaire"],
      contreIndications: ["Signes de gravité : prise en charge hospitalière"],
      materiel: ["Anesthésique local", "Matériel d'endodontie et digue", "Hydroxyde de calcium si séance différée", "Antalgiques [[palier et molécules du service à préciser]]"],
      alertes: [
        "**Drapeaux rouges → hospitalisation** : cellulite avec dysphagie ou difficultés respiratoires (majorées en décubitus), extension loco-régionale, crépitation sous-cutanée, ostéomyélite, ostéonécrose infectée.",
        "**Le traitement de la cause (drainage, pulpectomie, avulsion) est prioritaire.** L'antibiothérapie s'ajoute au geste local, elle ne le remplace pas (grade A).",
        "**Pulpite : antibiothérapie non recommandée.** Parodontite apicale aiguë, abcès apical aigu, flare-up : antibiotiques uniquement chez les patients à haut risque d'endocardite ou à risque infectieux augmenté, ou en présence de signes d'extension locale (suppuration), régionale (tuméfaction, trismus) ou systémique (adénopathie, fièvre), ou si le geste local est impossible (HAS 2026).",
        "Pas d'antibiotique systématique associé à un anti-inflammatoire."
      ],
      etapes: [
        { titre: "Interrogatoire de la douleur", details: ["Début, durée, déclenchement, irradiation, soulagement", "Intensité (EVA)"] },
        { titre: "Examen clinique et tests", details: ["Inspection, palpation, percussion", "Test au froid / électrique selon le cas", "Sondage parodontal (diagnostic différentiel parodontal ou fêlure)"] },
        { titre: "Radiographie", details: ["Rétro-alvéolaire ± panoramique"] },
        { titre: "Diagnostic", details: ["Pulpite irréversible symptomatique", "Nécrose avec parodontite apicale aiguë, abcès apical aigu", "Origine non dentaire (douleur projetée, sinusite…)"] },
        { titre: "Geste local", details: ["Pulpite : pulpectomie ou pulpotomie d'urgence [[conduite du service]]", "Nécrose/abcès : accès, mise en forme/drainage canalaire, drainage par incision si collection", "Si l'accès canalaire est impossible (ancrage, obturation) : antibiothérapie possible avec traitement étiologique programmé au plus tôt"] },
        { titre: "Antibiothérapie si indiquée (adulte, 1re intention)", details: ["**Amoxicilline 1 g × 3/jour pendant 3 jours** (prolonger de 2 jours si symptômes persistants)", "Allergie : clarithromycine 500 mg × 2/j, azithromycine 500 mg × 1/j ou pristinamycine 1 g × 2/j, 3 jours", "**Réévaluation à 3 jours** ; 2e intention : amoxicilline + métronidazole 1 g/500 mg × 3/j ou amoxicilline + acide clavulanique 1 g/125 mg × 3/j"] },
        { titre: "Consignes", details: ["Rendez-vous de traitement définitif", "Signes à surveiller : gonflement, fièvre, trismus, gêne à la déglutition → consulter en urgence"] }
      ],
      references: ["[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026)](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"]
    }
  ]
});
