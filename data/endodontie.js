window.DISCIPLINES = window.DISCIPLINES || [];

// Repères sur les limes ProTaper Gold : fiche technique Dentsply Sirona (tip card) et mode d'emploi.
var PTG_ANNEXE = {
  titre: "Limes ProTaper Gold : repères", court: "Limes ProTaper Gold", icone: "tooth",
  intro: "Taille de pointe en 1/100 mm et conicité de la pointe (fiche technique Dentsply Sirona). La conicité varie le long de la lame : tailles à vérifier sur les limes du service.",
  table: {
    cols: ["Lime", "Pointe / conicité", "Rôle"],
    rows: [
      ["**S1**", "18/100 mm, 2 %", "Lime de mise en forme : prépare le canal du collet vers l'apex, en brossant"],
      ["**S2**", "20/100 mm, 4 %", "Lime de mise en forme : même rôle que la S1, un peu plus large, en brossant"],
      ["**SX**", "19/100 mm, 4 %", "Lime courte : entrée du canal, racine courte, éloigner le canal d'une furcation (selon le cas)"],
      ["**F1**", "20/100 mm, 7 %", "Lime de finition, sans brossage, à la longueur de travail"],
      ["**F2**", "25/100 mm, 8 %", "Lime de finition : **préparation apicale habituelle au service (25/100)**"],
      ["**F3**", "30/100 mm, 9 %", "Lime de finition : si le canal est plus large"]
    ]
  }
};
window.DISCIPLINES.push({
  id: "endodontie",
  ordre: 3,
  ordreSections: ["s-indic", "s-etapes", "s-suivi", "s-consignes", "s-compl", "s-annexe", "s-alertes", "s-erreurs", "s-refs", "s-todo"],
  nom: "Endodontie",
  sigle: "EN",
  couleur: "#b3262e",
  description: "Traitement endodontique, retraitement et urgences pulpaires et péri-apicales : irrigation, médication intracanalaire, obturation.",
  protocoles: [
    {
      id: "traitement-endodontique",
      titre: "Traitement endodontique",
      resume: "Le plus souvent en une seule séance : accès, digue, mise en forme aux limes rotatives ProTaper Gold, irrigation, essayage de la gutta, obturation par thermocompaction et restauration coronaire. Une 2e séance avec hydroxyde de calcium si nécessaire.",
      duree: "Le plus souvent 1 séance ; 2 séances si nécessaire",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      annexes: [PTG_ANNEXE],
      sourceType: "Pratique du service (CHU) + consensus d'experts 2024 + recommandation HAS 2026 + revue 2022 (douleur post-opératoire)",
      maj: "2026-11",
      hopital: [
        "Traitement **très souvent réalisé en une seule séance** ; **2e séance** en cas de **manque de temps, de suintement ou de douleur** (avec **hydroxyde de calcium** entre les séances)",
        "**Mise en forme** : limes rotatives **ProTaper Gold (Dentsply Sirona)**, séquence **SX, S1, S2, F1, F2, F3**, préparation apicale **en général jusqu'au 25/100 (F2)**",
        "**Localisateur d'apex** utilisé",
        "**Irrigation** : hypochlorite de sodium ; **pas de chlorhexidine** ; **activation manuelle de l'irrigant** (pas d'équipement d'activation)",
        "**Obturation par thermocompaction**, matériel **Dentsply Sirona** ; **cônes ProTaper Gold Conform Fit** (Dentsply Sirona) assortis aux limes ; ciment canalaire (Pulp Canal Sealer EWT, Kerr)",
        "**Étanchéité provisoire** : matériau d'obturation temporaire : **IRM** (Dentsply Sirona), ou **CVI photopolymérisable** pour une étanchéité totale",
        "**EDTA** : **CanalPro EDTA 17 %** (Coltène) ; **hydroxyde de calcium** : **Supracal** (R&S), pâte prête à l'emploi en seringue",
        "**Validation par l'encadrant** : longueur de travail, essayage de la gutta (maître-cône) et obturation",
        "**3 radiographies** : **pré-opératoire**, **essayage de la gutta**, **contrôle d'obturation**"
      ],
      indications: ["Pulpite irréversible", "Nécrose pulpaire avec ou sans parodontite apicale", "Traitement pré-prothétique nécessitant un ancrage radiculaire"],
      contreIndications: ["Dent non restaurable", "Fracture radiculaire verticale", "Dent sans intérêt stratégique chez un patient à risque (avis senior)"],
      materiel: [
        "Digue, clamps, cadre",
        "Hypochlorite de sodium **R&S 2,5 %** (Magnum Dental, flacon de 500 mL)",
        "**CanalPro EDTA 17 %** (Coltène, flacon de 500 mL) ; eau pour rincer entre les irrigants",
        "Seringue 5 mL à embout **Luer-Lock** et aiguille **30 G** (Ø externe 0,298–0,320 mm), à ouverture latérale (réduit l'extrusion apicale) ; aiguilles du service : **Access** (30 G, 25 mm), **NaviTip** double sideport (Ultradent), **IrriFlex** (30 G) ; **Capillary Tips** (Ultradent) pour **aspirer** (jamais pour délivrer un irrigant)",
        "Limes rotatives **ProTaper Gold (Dentsply Sirona)** : S1, S2, F1, F2 (SX et F3 si besoin) ; limes manuelles de cathétérisme (jusqu'au 15/100) et gel d'EDTA (**Glyde File Prep**, Dentsply Sirona) ; localisateur d'apex **NSK iPex II**",
        "**Cônes ProTaper Gold Conform Fit** (Dentsply Sirona), assortis aux limes, et matériel de **thermocompaction (Dentsply Sirona)** ; **ciment canalaire des étudiants : Pulp Canal Sealer EWT** (Kerr)",
        "Hydroxyde de calcium en pâte prête à l'emploi en seringue (**Supracal**, R&S), si 2e séance",
        "**IRM** (Dentsply Sirona, poudre 40 g et liquide 15 mL) ou **CVI photopolymérisable** (étanchéité totale) pour l'étanchéité coronaire",
        "Radiographies : 3 (pré-opératoire, essayage de la gutta, contrôle d'obturation)"
      ],
      alertes: [
        "**Digue obligatoire** pendant l'irrigation (protège la muqueuse, évite l'ingestion de l'irrigant) : elle se pose **après la cavité d'accès**, avant tout contact avec l'hypochlorite.",
        "**Ne jamais forcer l'irrigant** vers l'apex : aiguille libre dans le canal, mouvements verticaux de faible amplitude, **sans pression excessive**. L'extrusion d'hypochlorite cause une lésion des tissus péri-apicaux.",
        "**Rincer à l'eau entre les irrigants** : l'EDTA fait perdre à l'hypochlorite son pouvoir de dissolution tissulaire ; **ne pas terminer par l'EDTA** (il continue à ramollir la dentine).",
        "**Respecter la longueur de travail** (mise en forme, irrigation, obturation) : éviter l'extrusion de débris, d'irrigant, de gutta-percha ou de ciment, principales causes de douleurs post-opératoires.",
        "Accident d'exposition à l'hypochlorite : antibiothérapie post-opératoire recommandée (amoxicilline 1 g × 2/j pendant 5 jours, HAS 2026).",
        "Antibioprophylaxie non recommandée pour le traitement endodontique en population générale (HAS 2026).",
        "**Une séance ou deux ?** Au service, le traitement est **très souvent fait en une seule séance**. Une 2e séance avec hydroxyde de calcium est surtout envisagée pour une dent avec lésion péri-apicale, fistule ou exsudat, ou si le temps manque. **Au service : 2e séance en cas de manque de temps, de suintement ou de douleur.** Une méta-analyse de 2017 trouve plus de flare-ups après une séance unique (preuve faible), sans différence de complications ni de douleur."
      ],
      etapes: [
        { titre: "Temps 1 (séance 1, le plus souvent séance unique) – Anesthésie et cavité d'accès (avant la digue)", details: [
          "**Anesthésie locale**",
          "Dépose des anciennes restaurations et des caries ; reconstruction d'une paroi si besoin",
          "**Cavité d'accès réalisée AVANT la pose de la digue**, directe aux orifices : faire l'accès après avoir posé la digue expose à un **risque de perforation**"
        ], materiel: ["cassette de fraises « Soins » (Komet)"] },
        { titre: "Temps 2 – Pose de la digue, repérage et négociation des canaux", details: [
          "**Pose de la digue**, désinfection du champ",
          "**Dès l'ouverture de la chambre sous digue : injecter l'hypochlorite** pour remplir la chambre et les canaux",
          "Repérer les orifices",
          "**Cathétérisme manuel** avec des limes **jusqu'au 15/100** (10 puis 15), **avant les limes rotatives**, avec du **gel d'EDTA** (**Glyde File Prep** : ne pas l'injecter sous pression, une dose par patient)",
          "Obtenir un **chemin de glisse** lisse et reproductible : la notice ne l'autorise que dans ces conditions"
        ], materiel: ["digue et clamps", "hypochlorite", "seringue Luer-Lock + aiguille 30 G", "limes manuelles de cathétérisme (jusqu'au 15/100)", "gel d'EDTA (Glyde File Prep)"] },
        { titre: "Temps 3 – Longueur de travail", details: [
          "**Mesure au localisateur d'apex** (**NSK iPex II**)",
          "**Confirmation par radiographie**"
        ], materiel: ["localisateur d'apex NSK iPex II", "radiographies"], validation: "longueur de travail" },
        { titre: "Temps 4 – Mise en forme et irrigation", details: [
          "**S1 puis S2** jusqu'à la longueur de travail, avec un **mouvement de brossage à la remontée**, en s'éloignant de la furcation",
          "**SX** si besoin : entrée du canal, racine courte, éloigner le canal d'une furcation",
          "**F1 puis F2** (**F3** si le canal est plus large) : **sans brossage**, une seule fois à la longueur de travail, **1 seconde au plus**",
          "**Vitesse 300 tr/min**, couple selon la notice Dentsply Sirona : **S1 et SX 5,1 N·cm**, **S2 et F1 1,5 N·cm**, **F2 et F3 3,1 N·cm** (réglages du moteur)",
          "Préparation apicale **en général jusqu'au 25/100 (F2)**",
          "**Pression apicale minimale** : ne jamais forcer",
          "**Entre chaque lime** : **2 mL d'hypochlorite par canal**",
          "Au total : **10 à 20 mL d'hypochlorite par canal**",
          "Aiguille placée **à 2 mm de la longueur de travail**"
        ], materiel: ["ProTaper Gold", "moteur endodontique", "hypochlorite", "seringue Luer-Lock + aiguille 30 G"] },
        { titre: "Temps 5 – Irrigation finale et séchage", details: [
          "**Hypochlorite 1 min**, puis **EDTA 17 % 1 min**, puis **hypochlorite 30 s** (plus de 5 mL par canal)",
          "**Activer la solution manuellement** : cône de gutta-percha (ou lime) adapté à la taille du canal, mouvements de va-et-vient dans le canal rempli d'irrigant (consensus 2024)",
          "**Rinçage à l'eau entre chaque irrigant**",
          "Séchage (rinçage à l'éthanol 95 %, 3 mL par canal, possible)"
        ], materiel: ["hypochlorite, EDTA 17 %, eau", "pointes de papier (ProTaper Gold, Maxima ISO 45-80)"] },
        { titre: "Temps 6 – Essayage de la gutta", details: [
          "**Cône de gutta-percha assorti à la dernière lime**",
          "**Radiographie d'essayage**",
          "**Canal très infecté (fistule, exsudat) ou temps insuffisant : ne pas obturer.** Poser l'hydroxyde de calcium (**Supracal**, R&S) sur toute la longueur de travail, étanchéifier avec l'**IRM** ou un **CVI photopolymérisable** (étanchéité totale), puis poursuivre en séance 2"
        ], materiel: ["cônes de gutta-percha", "radiographies"], validation: "essayage de la gutta" },
        { titre: "Temps 7 – Obturation", details: [
          "**Obturation par thermocompaction** (Dentsply Sirona) avec le ciment endodontique",
          "**Ciment canalaire des étudiants : Pulp Canal Sealer EWT (Kerr)**, à l'oxyde de zinc-eugénol : **une cuillère de poudre pour une goutte de liquide**, mélange en cercles jusqu'à une pâte **lisse, non collante, sans grains d'argent** ; application à la lime ou au Lentulo puis enrobage du cône ; **ne pas trop remplir le canal** ; plus de 6 h de temps de travail sur le bloc, prise en bouche en moins de 2 h (notice Kerr)",
          "**Radiographie de contrôle**"
        ], materiel: ["matériel de thermocompaction", "ciment canalaire (Pulp Canal Sealer EWT, Kerr)", "cônes de gutta-percha", "radiographies"], validation: "obturation" },
        { titre: "Temps 8 – Restauration coronaire", details: [
          "**Restauration coronaire étanche immédiate** : **IRM** (matériau d'obturation temporaire) ou **CVI photopolymérisable** pour une étanchéité totale",
          "Restauration définitive (onlay, couronne) dans les meilleurs délais"
        ], materiel: ["IRM (poudre et liquide)", "CVI photopolymérisable", "lampe à photopolymériser"], astuce: "L'étanchéité coronaire conditionne le succès à long terme. **L'IRM contient de l'eugénol** (oxyde de zinc-eugénol renforcé) : le retirer complètement avant une restauration collée ou scellée, car l'eugénol gêne la prise et l'adhésion de certains matériaux." },
        { titre: "Temps 9 (séance 2, si nécessaire) – Retrait de l'hydroxyde de calcium et obturation", details: [
          "**Quand ?** Au service : manque de temps, suintement (exsudat) ou douleur ; plus généralement canal infecté avec lésion ou fistule. Intervalle entre les séances : **1 à 2 semaines**",
          "**Dépose de l'étanchéité provisoire** puis de l'hydroxyde de calcium, par **irrigation abondante** (limes de calibrage si besoin)",
          "**Irrigation finale** : hypochlorite, EDTA, hypochlorite (**activation manuelle**), rinçage à l'eau ; séchage",
          "**Essayage de la gutta**",
          "**Obturation par thermocompaction**, radiographie de contrôle",
          "**Restauration coronaire étanche immédiate**"
        ], materiel: ["hypochlorite, EDTA, eau", "cônes de gutta-percha", "matériel de thermocompaction", "ciment canalaire (Pulp Canal Sealer EWT, Kerr)", "IRM ou CVI photopolymérisable", "radiographies"], validation: "essayage de la gutta et obturation" }
      ],
      consignes: [
        "**Douleurs après le traitement : elles sont fréquentes**, le plus souvent maximales dans les premières 24 à 48 heures.",
        "**Antalgiques** : **paracétamol en première intention**, en l'absence de contre-indication.",
        "**Consulter en urgence** en cas de gonflement, fièvre, douleur qui augmente ou difficulté à ouvrir la bouche ou à avaler.",
        "**Dent fragilisée** : éviter de mâcher dessus jusqu'à la restauration définitive.",
        "**Pansement provisoire** : s'il se détache ou se fracture, reprendre rendez-vous rapidement (risque de recontamination).",
        "**Restauration définitive** : à faire sans tarder (onlay ou couronne).",
        "**Contrôles** à 6 et 12 mois."
      ],
      erreurs: [
        "Traiter **sans digue** ou avec une digue non étanche",
        "Accès insuffisant : canaux manqués (**MV2** des molaires maxillaires), instruments qui travaillent mal",
        "**Longueur de travail** mal déterminée (sur- ou sous-instrumentation, extrusion)",
        "Irrigation **sous pression** ou aiguille coincée ; terminer par l'EDTA ; oublier le rinçage à l'eau entre irrigants",
        "Obturation trop courte ou trop longue (extrusion de gutta ou de ciment)",
        "Restauration coronaire non étanche ou différée",
        "Ne pas prévenir le patient des douleurs post-opératoires et de la conduite à tenir"
      ],
      suivi: ["Contrôle clinique et radiologique à 6 et 12 mois"],
      complications: [
        "**Extrusion d'hypochlorite** : douleur immédiate, œdème, ecchymose → **arrêt de l'irrigation**, antalgie, **avis senior**, antibiothérapie (HAS 2026)",
        "**Extrusion d'hydroxyde de calcium ou de ciment** : **surveillance clinique et radiologique** ; **chirurgie endodontique** en cas de symptômes persistants ou d'atteinte du sinus ou du nerf",
        "**Fracture d'instrument, perforation** : **arrêter**, documenter, **avis du senior**"
      ],
      references: [
        "[Dentsply Sirona – ProTaper Gold : fiche technique (tip card)](https://assets.dentsplysirona.com/master/product-procedure-brand-categories/endodontics/product-categories/full-solutions/protaper-gold-solution/product-info/END-TipCard-ProTaper-Gold-web.pdf)", "[Dentsply Sirona – ProTaper Gold : mode d'emploi (version US, 2021)](https://assets.dentsplysirona.com/master/product-procedure-brand-categories/endodontics/product-categories/full-solutions/protaper-gold-solution/ifu/END-IFU-PROTAPER-GOLD-EN-2021-02.pdf)", "[Zou X. et al. Expert consensus on irrigation and intracanal medication in root canal therapy. Int J Oral Sci 2024;16:23](https://pmc.ncbi.nlm.nih.gov/articles/PMC10907616/)",
        "[Di Spirito F. et al. Post-operative endodontic pain management: an overview of systematic reviews. Healthcare 2022;10:760](https://pmc.ncbi.nlm.nih.gov/articles/PMC9141195/)",
        "[Schwendicke F., Göstemeyer G. Single-visit or multiple-visit root canal treatment. BMJ Open 2017;7](https://pmc.ncbi.nlm.nih.gov/articles/PMC5293988/)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026)](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "retraitement-endodontique",
      titre: "Retraitement endodontique",
      resume: "Le plus souvent en une seule séance : évaluation, accès puis digue, désobturation au Desocclusol Orange (Acteon) et aux limes, mise en forme ProTaper Gold, obturation par thermocompaction et restauration coronaire. Une 2e séance avec hydroxyde de calcium si nécessaire.",
      duree: "Le plus souvent 1 séance ; 2 séances si nécessaire",
      niveau: "Interne / étudiant encadré",
      statut: "brouillon",
      annexes: [PTG_ANNEXE],
      sourceType: "Pratique du service (CHU) + revues systématiques + consensus 2024 + HAS 2026",
      maj: "2026-11",
      hopital: [
        "Retraitement **très souvent réalisé en une seule séance** ; **2e séance** en cas de **manque de temps, de suintement ou de douleur** (avec **hydroxyde de calcium** entre les séances)",
        "**Desocclusol Orange** (Acteon), solvant à l'huile essentielle d'orange",
        "**Mise en forme** : limes rotatives **ProTaper Gold (Dentsply Sirona)**, séquence **SX, S1, S2, F1, F2, F3**, préparation apicale **en général jusqu'au 25/100 (F2)** ; instruments de désobturation [[à préciser]]",
        "**Localisateur d'apex** utilisé",
        "**Irrigation** : hypochlorite de sodium ; **pas de chlorhexidine** ; **activation manuelle de l'irrigant** (pas d'équipement d'activation)",
        "**Obturation par thermocompaction**, matériel **Dentsply Sirona** ; **cônes ProTaper Gold Conform Fit** (Dentsply Sirona) assortis aux limes ; ciment canalaire (Pulp Canal Sealer EWT, Kerr)",
        "**Étanchéité provisoire** : matériau d'obturation temporaire : **IRM** (Dentsply Sirona), ou **CVI photopolymérisable** pour une étanchéité totale",
        "**EDTA** : **CanalPro EDTA 17 %** (Coltène) ; **hydroxyde de calcium** : **Supracal** (R&S), pâte prête à l'emploi en seringue",
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
      materiel: [
        "Digue, clamps ; ultrasons et fraises pour la dépose de la restauration, de la couronne ou du tenon",
        "**Desocclusol Orange (Acteon)** ; instruments de désobturation [[à préciser]]",
        "Limes rotatives **ProTaper Gold (Dentsply Sirona)** (SX, S1, S2, F1, F2, F3) ; localisateur d'apex **NSK iPex II**",
        "**Hypochlorite de sodium R&S 2,5 %** (Magnum Dental), **CanalPro EDTA 17 %** (Coltène), eau, aiguille 30 G Luer-Lock",
        "Matériel de **thermocompaction (Dentsply Sirona)**, **cônes ProTaper Gold Conform Fit** (Dentsply Sirona) assortis aux limes, ciment canalaire (Pulp Canal Sealer EWT, Kerr)",
        "**Hydroxyde de calcium** en pâte prête à l'emploi en seringue (**Supracal**, R&S), si 2e séance",
        "**IRM** ou **CVI photopolymérisable** pour l'étanchéité ; matériau de réparation de perforation [[à préciser]]",
        "Radiographies : 3 (pré-opératoire, essayage de la gutta, contrôle d'obturation)"
      ],
      alertes: [
        "**Digue indispensable** ; reconstruire une paroi si nécessaire pour l'étanchéité.",
        "**Le retraitement est plus long et moins prévisible** qu'un traitement initial : informer le patient des douleurs post-opératoires fréquentes, des risques (perforation, fracture d'instrument, canal non négociable) et des alternatives.",
        "**Instruments fracturés** : l'échec de retrait est plus fréquent dans le **tiers apical (21 %)** que dans le tiers moyen ou coronaire (8,8 %) (méta-analyse 2024) ; ne pas forcer et demander l'avis du senior.",
        "**Solvants** : les données ne montrent pas de différence sur la douleur post-opératoire ni la prise d'antalgiques (peu d'essais randomisés) ; le **Desocclusol Orange** (solvant à l'huile essentielle d'orange, qui dissout les ciments à l'oxyde de zinc-eugénol et la gutta) est utilisé au service.",
        "**Antibioprophylaxie** : non recommandée pour la reprise de traitement en population générale ; recommandée chez les patients à risque infectieux augmenté ; non recommandée chez les patients à haut risque d'ostéonécrose (HAS 2026, tableau 1).",
        "**Rincer à l'eau entre les irrigants** ; **EDTA jamais en dernier** ; irrigation **sans pression**."
      ],
      etapes: [
        { titre: "Temps 1 (séance 1, le plus souvent séance unique) – Évaluation et dépose", details: [
          "**Évaluation** : radiographie, CBCT si besoin, qualité de l'obturation, fuite coronaire, lésion",
          "**Dépose de la restauration, de la couronne ou du tenon** si nécessaire (ultrasons)"
        ], materiel: ["radiographies", "ultrasons et fraises"] },
        { titre: "Temps 2 – Anesthésie, accès (avant la digue) puis isolation", details: [
          "**Anesthésie locale**",
          "**Accès** aux canaux **AVANT la pose de la digue** : faire l'accès après avoir posé la digue expose à un **risque de perforation**",
          "**Pose de la digue**, désinfection du champ"
        ], materiel: ["cassette de fraises « Soins » (Komet)", "digue et clamps"] },
        { titre: "Temps 3 – Désobturation et longueur de travail", details: [
          "**Désobturation de la gutta-percha** au **Desocclusol Orange** (Acteon) et aux instruments [[à préciser]]",
          "**Repérage des canaux manqués**, négociation",
          "**Perméabilisation jusqu'à la longueur de travail** (localisateur d'apex, radiographie)",
          "Retrait des fragments ou réparation d'une perforation selon la situation [[matériau du service]]"
        ], materiel: ["Desocclusol Orange (Acteon)", "localisateur d'apex NSK iPex II", "radiographies"], validation: "longueur de travail" },
        { titre: "Temps 4 – Mise en forme et irrigation", details: [
          "**Cathétérisme manuel** jusqu'au 15/100 avant les limes rotatives, avec du **gel d'EDTA** (**Glyde File Prep** : ne pas l'injecter sous pression, une dose par patient)",
          "**S1 puis S2** jusqu'à la longueur de travail, avec un **mouvement de brossage à la remontée**, en s'éloignant de la furcation",
          "**SX** si besoin : entrée du canal, racine courte, éloigner le canal d'une furcation",
          "**F1 puis F2** (**F3** si le canal est plus large) : **sans brossage**, une seule fois à la longueur de travail, **1 seconde au plus** ; apex en général jusqu'au 25/100",
          "**Pression apicale minimale** : ne jamais forcer",
          "**Vitesse 300 tr/min**, couple selon la notice Dentsply Sirona : **S1 et SX 5,1 N·cm**, **S2 et F1 1,5 N·cm**, **F2 et F3 3,1 N·cm** (réglages du moteur)",
          "**Irrigation abondante** : hypochlorite, **2 mL par canal entre chaque lime**"
        ], materiel: ["ProTaper Gold", "moteur endodontique", "gel d'EDTA", "limes manuelles de cathétérisme (jusqu'au 15/100)", "hypochlorite"] },
        { titre: "Temps 5 – Irrigation finale et séchage", details: [
          "**Hypochlorite 1 min**, puis **EDTA 17 % 1 min**, puis **hypochlorite 30 s**",
          "**Activer la solution manuellement** : cône de gutta-percha (ou lime) adapté à la taille du canal, mouvements de va-et-vient dans le canal rempli d'irrigant (consensus 2024)",
          "**Rinçage à l'eau entre chaque irrigant**",
          "Séchage"
        ], materiel: ["hypochlorite, EDTA, eau", "pointes de papier"] },
        { titre: "Temps 6 – Essayage de la gutta", details: [
          "**Cône de gutta-percha assorti à la dernière lime**",
          "**Radiographie d'essayage**",
          "**Désobturation longue, lésion étendue, fistule ou exsudat : ne pas obturer.** Poser l'hydroxyde de calcium radio-opaque aqueux sur toute la longueur de travail, étanchéifier avec l'**IRM** ou un **CVI photopolymérisable** (étanchéité totale), puis poursuivre en séance 2"
        ], materiel: ["cônes de gutta-percha", "radiographies"], validation: "essayage de la gutta" },
        { titre: "Temps 7 – Obturation", details: [
          "**Obturation par thermocompaction**",
          "**Radiographie de contrôle**"
        ], materiel: ["thermocompaction", "ciment canalaire (Pulp Canal Sealer EWT, Kerr)", "cônes de gutta-percha", "radiographies"], validation: "obturation" },
        { titre: "Temps 8 – Restauration coronaire", details: [
          "**Restauration coronaire étanche immédiate**",
          "Restauration définitive (onlay, couronne) dans les meilleurs délais"
        ], materiel: ["IRM (poudre et liquide)", "CVI photopolymérisable", "lampe à photopolymériser"], astuce: "La restauration coronaire étanche est aussi importante que l'obturation pour le succès du retraitement." },
        { titre: "Temps 9 (séance 2, si nécessaire) – Retrait de l'hydroxyde de calcium et obturation", details: [
          "**Quand ?** Retraitement avec lésion étendue, fistule ou exsudat (médication à l'hydroxyde de calcium indiquée), travail inachevé en séance 1. Au service : manque de temps, suintement ou douleur. Intervalle entre les séances : **1 à 2 semaines**",
          "**Dépose de l'étanchéité provisoire** puis de l'hydroxyde de calcium, par **irrigation abondante**",
          "**Irrigation finale** : hypochlorite, EDTA, hypochlorite (**activation manuelle**), rinçage à l'eau ; séchage",
          "**Essayage de la gutta**",
          "**Obturation par thermocompaction**, radiographie de contrôle",
          "**Restauration coronaire étanche immédiate**"
        ], materiel: ["hypochlorite, EDTA, eau", "cônes de gutta-percha", "thermocompaction", "ciment canalaire (Pulp Canal Sealer EWT, Kerr)", "IRM ou CVI photopolymérisable", "radiographies"], validation: "essayage de la gutta et obturation" }
      ],
      consignes: [
        "**Douleurs après un retraitement : fréquentes**, surtout dans les premières 24 à 48 heures.",
        "**Antalgiques** : **paracétamol en première intention**, en l'absence de contre-indication.",
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
        "**Perforation** : **arrêter**, documenter, réparer selon le matériau du service ; **avis du senior**",
        "**Fracture d'instrument** : ne pas forcer ; **avis du senior**",
        "**Flare-up ou douleur persistante** : contrôler l'étanchéité, l'occlusion et les canaux ; reconsidérer la stratégie (chirurgie apicale)",
        "**Accident d'hypochlorite** : voir la fiche « Traitement endodontique »"
      ],
      references: [
        "[Dentsply Sirona – ProTaper Gold : fiche technique (tip card)](https://assets.dentsplysirona.com/master/product-procedure-brand-categories/endodontics/product-categories/full-solutions/protaper-gold-solution/product-info/END-TipCard-ProTaper-Gold-web.pdf)", "[Dentsply Sirona – ProTaper Gold : mode d'emploi (version US, 2021)](https://assets.dentsplysirona.com/master/product-procedure-brand-categories/endodontics/product-categories/full-solutions/protaper-gold-solution/ifu/END-IFU-PROTAPER-GOLD-EN-2021-02.pdf)", "[Dioguardi M. et al. Comparison of endodontic failures between nonsurgical retreatment and endodontic surgery: systematic review and meta-analysis. Medicina 2022;58:894](https://pmc.ncbi.nlm.nih.gov/articles/PMC9324533/)",
        "[Dioguardi M. et al. Analysis of endodontic successes and failures in the removal of fractured endodontic instruments during retreatment. Healthcare 2024;12:1390](https://pmc.ncbi.nlm.nih.gov/articles/PMC11276083/)",
        "[Shah T. et al. Endodontic retreatment efficacy with and without solvents: a systematic review. J Conserv Dent Endod 2023;26](https://pmc.ncbi.nlm.nih.gov/articles/PMC10823971/)",
        "[Scardini I.L. et al. Postoperative pain following nonsurgical endodontic retreatment. Iran Endod J 2023;18](https://pmc.ncbi.nlm.nih.gov/articles/PMC10155107/)",
        "[Di Spirito F. et al. Post-operative endodontic pain management: an overview of systematic reviews. Healthcare 2022;10:760](https://pmc.ncbi.nlm.nih.gov/articles/PMC9141195/)",
        "[Zou X. et al. Expert consensus on irrigation and intracanal medication in root canal therapy. Int J Oral Sci 2024;16:23](https://pmc.ncbi.nlm.nih.gov/articles/PMC10907616/) — le consensus décrit aussi la chlorhexidine 2 % (non utilisée au service) et l'activation de l'irrigant : manuelle au service (cône de gutta-percha ou lime), sans équipement d'activation",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 1](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
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
      materiel: ["Anesthésique local", "Matériel d'endodontie et digue", "Hydroxyde de calcium si séance différée", "Antalgiques : paracétamol en 1re intention (posologie ANSM)"],
      alertes: [
        "**Drapeaux rouges → hospitalisation** : cellulite avec dysphagie ou difficultés respiratoires (majorées en décubitus), extension loco-régionale, crépitation sous-cutanée, ostéomyélite, ostéonécrose infectée.",
        "**Le traitement de la cause (drainage, pulpectomie, avulsion) est prioritaire.** L'antibiothérapie s'ajoute au geste local, elle ne le remplace pas (grade A).",
        "**Pulpite : antibiothérapie non recommandée.** Parodontite apicale aiguë, abcès apical aigu, flare-up : antibiotiques uniquement chez les patients à haut risque d'endocardite ou à risque infectieux augmenté, ou en présence de signes d'extension locale (suppuration), régionale (tuméfaction, trismus) ou systémique (adénopathie, fièvre), ou si le geste local est impossible (HAS 2026).",
        "Pas d'antibiotique systématique associé à un anti-inflammatoire."
      ],
      etapes: [
        { titre: "Interrogatoire de la douleur", details: ["Début, durée, déclenchement, irradiation, soulagement", "Intensité (EVA)"] },
        { titre: "Examen clinique et tests", details: ["Inspection, palpation, percussion", "Test au froid (spray **CryoPulp**, Septodont, menthe) ou test électrique selon le cas", "Sondage parodontal (diagnostic différentiel parodontal ou fêlure)"] },
        { titre: "Radiographie", details: ["Rétro-alvéolaire ± panoramique"] },
        { titre: "Diagnostic", details: ["Pulpite irréversible symptomatique", "Nécrose avec parodontite apicale aiguë, abcès apical aigu", "Origine non dentaire (douleur projetée, sinusite…)"] },
        { titre: "Geste local", details: ["Pulpite : pulpectomie ou pulpotomie d'urgence [[conduite du service]]", "Nécrose/abcès : accès, mise en forme/drainage canalaire, drainage par incision si collection", "Si l'accès canalaire est impossible (ancrage, obturation) : antibiothérapie possible avec traitement étiologique programmé au plus tôt"] },
        { titre: "Antibiothérapie si indiquée (adulte, 1re intention)", details: ["**Amoxicilline 1 g × 3/jour pendant 3 jours** (prolonger de 2 jours si symptômes persistants)", "Allergie : clarithromycine 500 mg × 2/j, azithromycine 500 mg × 1/j ou pristinamycine 1 g × 2/j, 3 jours", "**Réévaluation à 3 jours** ; 2e intention : amoxicilline + métronidazole 1 g/500 mg × 3/j ou amoxicilline + acide clavulanique 1 g/125 mg × 3/j"] },
        { titre: "Consignes", details: ["Rendez-vous de traitement définitif", "Signes à surveiller : gonflement, fièvre, trismus, gêne à la déglutition → consulter en urgence"] }
      ],
      references: [ "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026)](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"]
    }
  ]
});
