window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "prothese-fixee",
  ordre: 2,
  nom: "Prothèse fixée",
  sigle: "PF",
  couleur: "#b8501a",
  description: "Inlay-core, RMIPP, scellements de couronnes (zircone, céramo-métallique), inlay, onlay et endo-couronne : un protocole par acte.",
  protocoles: [

    {
      id: "inlay-core",
      titre: "Inlay-core (reconstitution corono-radiculaire coulée)",
      resume: "Reconstitution coulée en métal sur dent dépulpée, choisie quand les parois restantes sont insuffisantes, scellée au Panavia V5. 2 séances : préparation et empreinte, puis essayage et scellement.",
      duree: "2 séances",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + notice fabricant Panavia V5 + pratique courante",
      maj: "2026-11",
      hopital: [
        "**Inlay-core coulé en métal** (alliage non précisé)",
        "**Scellement au Panavia V5** (feuilles de prétraitement et de collage Panavia V5 affichées au service)",
        "**2 séances** : préparation et empreinte, puis essayage, scellement et préparation de la couronne (déduit du protocole)",
        "Choisi **plutôt qu'une RMIPP lorsque les parois restantes ne sont pas assez nombreuses**",
        "**Empreinte du logement** : **directe** (résine) et **indirecte** (silicone) sont toutes deux utilisées",
        "**Validation par l'encadrant** : empreintes, essayage et pose"
      ],
      indications: ["Dent dépulpée avec **peu de parois restantes** (reconstitution par tenon fibré non envisageable)", "Rétention insuffisante pour la couronne prévue"],
      contreIndications: ["Traitement endodontique de qualité insuffisante ou lésion périapicale non traitée", "Racine fragile ou absence de ferrule non améliorable"],
      materiel: [
        "Digue ; désobturation : **Gates 1, 2, 3** et **Largo 1, 2, 3**",
        "Empreinte du logement : **directe** (résine à maquette **GC Pattern Resin LS**, dont la notice prévoit l'usage en bouche pour une maquette de reconstitution) ou **indirecte** (**Express 2** ou **Impregum Penta Super Quick**, avec tenon d'empreinte) ; antagoniste à l'**alginate**",
        "**Tenon métallique Dentoclic** (Itena Clinical, inox ou titane) : **tenon d'empreinte** et **tenon provisoire** (de même diamètre) ; **envoyer au laboratoire le tenon calcinable correspondant** ; résine de provisoire **Unifast Trad** ; ciment provisoire **Temp-Bond** ou **Temp-Bond NE**, **seulement sur les bords de la couronne** et pas sur le tenon (notice Dentoclic)",
        "Inlay-core coulé en métal",
        "**Panavia V5 Paste** (Universal A2 ou Clear), **Panavia V5 Tooth Primer**, **Clearfil Ceramic Primer Plus** ; sablage à l'alumine, bain ultrasonique, lampe à photopolymériser"
      ],
      alertes: [
        "Conserver au moins **4 à 5 mm de gutta-percha** apicale pour l'étanchéité.",
        "Rechercher une **ferrule** de 1,5 à 2 mm : facteur clé de pronostic.",
        "Travailler sous **digue** lors de la désobturation et du scellement.",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Séance 1 – Préparation canalaire et empreinte", details: [
          { t: "**Évaluation**", sub: ["Radiographie", "Ferrule", "Parois résiduelles"] },
          { t: "**Désobturation partielle sous digue**, en gardant 4 à 5 mm de gutta-percha", sub: ["Utiliser les **Gates 1, 2, 3**, puis les **Largo 1, 2, 3**, sans amincir les parois"] },
          "**Préparation coronaire**",
          "**Empreinte du logement** et de la préparation coronaire (**Express 2** (silicone) ou **Impregum Penta Super Quick** (polyéther))",
          "**Empreinte de l'antagoniste** à l'**alginate**",
          "**Empreinte de l'occlusion** avec le **Futar D**",
          { t: "**Réalisation de la provisoire** avec un **tenon provisoire**", sub: ["Tenon : **tenon métallique Dentoclic** provisoire (de même diamètre que le tenon d'empreinte)", "Provisoire : résine **Unifast Trad**", "Si besoin de la sceller : **Temp-Bond** ou **Temp-Bond NE**, seulement sur les bords de la couronne, pas sur le tenon"] }
        ], materiel: ["digue", "Gates 1, 2, 3 et Largo 1, 2, 3", "résine à maquette **Pattern Resin LS** ou silicone d'empreinte", "**Futar D** (enregistrement de l'occlusion)", "résine de provisoire **Unifast Trad**"], validation: "préparation et empreinte", astuce: "**Envoyer au laboratoire le tenon calcinable correspondant** au tenon d'empreinte. Au laboratoire : coulée de l'inlay-core en métal." },
        { titre: "Séance 2 – Essayage et scellement", details: [
          { t: "**Essayage** de l'inlay-core", sub: ["Adaptation", "Insertion", "Parois", "Contrôle radiographique si besoin"] },
          { t: "**Préparation de l'inlay-core**", sub: ["Sablage à l'alumine", "Nettoyage aux ultrasons", "Séchage", "Application du **Clearfil Ceramic Primer Plus**"] },
          { t: "**Préparation du logement** sous digue", sub: ["**Tooth Primer** pendant 20 s", "Retirer l'excès de liquide", "Séchage"] },
          { t: "**Scellement au Panavia V5** (notice, tenons métalliques)", sub: ["Pâte sur l'inlay-core ou sur la dent", "Mise en place **rapide avec une légère vibration**", "Excès étalé sur la base coronaire et la tête du tenon", "Photopolymérisation (teinte opaque : prise de 3 min)"] },
          "**Préparation de la dent 6 minutes après la pose** pour enchaîner la couronne"
        ], materiel: ["inlay-core", "digue", "sablage", "Clearfil Ceramic Primer Plus", "Panavia V5 Tooth Primer", "Panavia V5 Paste", "lampe à photopolymériser", "radiographie"], validation: "essayage et scellement", astuce: "Si la préparation de la couronne est faite dans la même séance, attendre 6 minutes après la pose de l'inlay-core." }
      ],
      consignes: [
        "**Provisoire** : éviter de mordre dans des aliments durs ; s'il se décolle, prendre rendez-vous rapidement.",
        "Signaler toute douleur, gonflement ou sensation de dent haute après la pose.",
        "Hygiène habituelle ; la couronne définitive sera réalisée ensuite."
      ],
      erreurs: [
        "Désobturation trop profonde (< 4 mm de gutta-percha restante) : perte d'étanchéité",
        "Logement trop large : paroi radiculaire amincie, risque de fracture",
        "Absence de ferrule non compensée",
        "Pas de digue lors du scellement"
      ],
      references: [
        "[Kuraray Noritake – PANAVIA V5, fiche protocole (12/2014), indication « scellement de tenons » : tenon métallique et tenon fibré](https://plandent.fi/globalassets/catalog-resources/fi1/tarvikkeet/protetiikka/kiinnityssementit/panavia_v5-dfu-kuvilla.pdf) — à comparer à la notice en vigueur",
        "Séquence rédigée d'après la pratique courante ; **le Panavia V5 pour l'inlay-core est confirmé** par les feuilles affichées au service (prétraitement : métal = sablage, rinçage, séchage puis Clearfil Ceramic Primer Plus).",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "rmipp",
      titre: "RMIPP – reconstitution avec matériau inséré en phase plastique (tenon fibré)",
      resume: "Reconstitution corono-radiculaire par tenon fibré collé et composite, quand les parois restantes sont suffisantes. Protocole en 1 séance d'après la feuille affichée au service.",
      duree: "1 séance (préparation de la couronne possible dans la même séance)",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Protocole affiché au service (CHU) : scellement du tenon fibré et faux-moignon au composite Bulk Fill",
      maj: "2026-11",
      hopital: [
        "**RMIPP** = reconstitution avec **matériau inséré en phase plastique**, avec **tenon fibré**",
        "Choisie lorsqu'il reste **au moins 2 parois coronaires** (0,8 mm d'épaisseur, 1,5 mm de hauteur) après la préparation périphérique ; sinon : **inlay-core**",
        "**Préparation de la couronne dans la même séance**, en fonction du temps restant",
        "**Validation par l'encadrant** : empreintes, essayage et pose"
      ],
      indications: [{ t: "Dent dépulpée avec **parois résiduelles suffisantes**", sub: ["**Au moins 2 parois coronaires** après la préparation périphérique de la dent", "Chaque paroi : **épaisseur d'au moins 0,8 mm** et **hauteur d'au moins 1,5 mm**"] }, "**Ferrule** présente", "Rétention insuffisante pour la couronne prévue sans reconstitution"],
      contreIndications: ["Parois restantes insuffisantes : inlay-core", "Traitement endodontique de qualité insuffisante ou lésion périapicale non traitée", "Racine fragile ou absence de ferrule non améliorable"],
      materiel: [
        "Digue, matrice et cales",
        "Désobturation : **Gates 1, 2, 3** et **Largo 1, 2, 3** ; **forets cylindro-coniques Itena** (de la couleur du tenon)",
        "Tenon fibré",
        "**Silane Silan-IT** (Itena) pour le tenon fibré ; ciment résine auto-adhésif **RelyX Unicem 2** (3M) avec embout mélangeur et **Endo Tip** ; pointes de papier, alcool",
        "Adhésif **G-Premio Bond** et composite **Bulk Fill** de reconstitution ; lampe à photopolymériser"
      ],
      alertes: [
        "Conserver au moins **4 à 5 mm de gutta-percha** apicale pour l'étanchéité.",
        "Rechercher une **ferrule** de 1,5 à 2 mm.",
        "Attention aux ciments endodontiques à l'**eugénol**, qui peuvent gêner le collage.",
        "**RelyX Unicem 2 : pour la RMIPP uniquement** (mention du service) ; les autres collages se font au **Panavia V5**.",
        "Travailler sous **digue** pour le collage.",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Temps 1 – Évaluation et préparation du logement", details: [
          { t: "**Évaluation**", sub: ["Radiographie", "Parois restantes : au moins 2 parois coronaires de 0,8 mm d'épaisseur et 1,5 mm de hauteur, après la préparation périphérique", "Ferrule"] },
          "**Isolation sous digue**",
          "Élimination des anciennes restaurations et des tissus fragiles",
          { t: "**Désobturation partielle** en gardant 4 à 5 mm de gutta-percha", sub: ["Utiliser les **Gates 1, 2, 3**, puis les **Largo 1, 2, 3**"] },
          { t: "**Forage du logement** avec les **forets cylindro-coniques Itena**", sub: ["Ils mettent le canal **aux dimensions du tenon cylindro-conique** utilisé pour la RMIPP", "Foret de la **même couleur que le tenon choisi** (code couleur Itena)"] },
          "**Rincer**, puis **sécher avec des pointes de papier**, sans dessécher excessivement la dentine",
          { t: "**Essayage du tenon fibré** à sec, avant tout adhésif", sub: ["Le tenon doit être **flottant** : il descend **passivement, sans forcer**, jusqu'à la profondeur voulue", "Vérifier la **longueur** et l'**émergence** à la hauteur prévue pour le moignon", "**Radiographie** pour contrôler la position", "**Nettoyer le tenon à l'alcool**, puis sécher"] }
        ], materiel: ["digue", "Gates 1, 2, 3 et Largo 1, 2, 3", "forets cylindro-coniques Itena", "tenon fibré", "radiographie"], validation: "essayage du tenon" },
        { titre: "Temps 2 – Collage du tenon", details: [
          "**Traitement du tenon fibré** : silane (**Silan-IT**) sur **toute la surface** du tenon ; laisser agir **60 s** sans toucher la surface avec les doigts (notice Itena) ; sécher à l'**air**",
          "**Préparation du ciment** : installer l'embout mélangeur puis l'**Endo Tip** sur le **RelyX Unicem 2** ; **purger une petite quantité** avant utilisation",
          "**Injection** du ciment **du fond du canal vers la partie coronaire**, en **retirant progressivement l'embout** pendant l'injection (évite les bulles)",
          "**Mise en place du tenon** : enduire légèrement le tenon de ciment, l'insérer **immédiatement avec une pression constante** ; **retirer soigneusement les excès** avant la polymérisation finale",
          "**Photopolymérisation : 40 s** (la mention « pour un tenon translucide » est barrée sur la feuille du service) ; **tenon opaque** : la polymérisation chimique assure la prise, photopolymériser la partie coronaire si possible",
          "**Section de l'excédent coronaire du tenon après le scellement**, avec un instrument diamanté sous irrigation d'eau"
        ], materiel: ["Silan-IT", "RelyX Unicem 2 + embout mélangeur + Endo Tip", "lampe à photopolymériser"] },
        { titre: "Temps 3 – Reconstitution coronaire en phase plastique", details: [
          "**Après stabilisation du tenon**, appliquer l'**adhésif G-Premio Bond**, puis réaliser le **faux-moignon** au **composite Bulk Fill** de reconstitution, selon les recommandations du fabricant ; **photopolymériser chaque incrément** si nécessaire ; **finaliser la forme** avant la préparation prothétique (matrice si nécessaire)",
          "Contrôle de l'occlusion ; **préparation de la couronne dans la même séance si le temps le permet** (voir la fiche couronne), sinon à la séance suivante"
        ], materiel: ["G-Premio Bond", "composite Bulk Fill", "matrice et cales", "fraises de finition"] }
      ],
      consignes: [
        "Signaler toute douleur, gonflement ou sensation de dent haute après la pose.",
        "Éviter de mordre dans des aliments très durs avant la pose de la couronne.",
        "Hygiène habituelle ; la couronne définitive sera réalisée ensuite."
      ],
      erreurs: [
        "Désobturation trop profonde (< 4 mm de gutta-percha restante)",
        "Collage sans digue ou sur logement contaminé (salive, sang, eugénol)",
        "Absence de ferrule non compensée",
        "Logement trop large : paroi radiculaire amincie"
      ],
      references: [
        "Séquence d'après la **feuille « Scellement du tenon fibré avec silanisation et reconstitution du faux-moignon au composite Bulk Fill »** affichée au service (annotations manuscrites : RelyX Unicem 2 pour la RMIPP uniquement ; silane = Silan-IT ; adhésif = G-Premio Bond).",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "scellement-zircone",
      titre: "Scellement d'une couronne en zircone",
      resume: "Essayage puis assemblage de la couronne en zircone : scellement au CVI (GC Fuji PLUS) ou collage au Panavia V5 avec Clearfil Ceramic Primer Plus et Tooth Primer.",
      duree: "1 séance",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + notice fabricant Panavia V5 + littérature",
      maj: "2026-11",
      hopital: [
        "**Deux modes d'assemblage** : **scellement au CVI** (ciment verre ionomère) ou **collage** avec le système **Panavia V5**",
        "**Produits de collage** : **Panavia V5 Paste** (seringue double avec embout mélangeur ; teintes **Universal A2** et **Clear**), **Panavia V5 Tooth Primer** (4 mL) et **Clearfil Ceramic Primer Plus** (2 mL)",
        "**Traitement de surface de la couronne** : **sablage** puis **primer**",
        "**Validation par l'encadrant** : essayage et pose",
        "**CVI de scellement : GC Fuji PLUS** (capsule). **L'EQUIA Forte HT Fil est un ciment de restauration, pas un ciment de scellement** : ne pas l'utiliser pour sceller une couronne"
      ],
      indications: ["Pose d'une couronne unitaire en zircone"],
      contreIndications: ["Collage impossible si la préparation ne peut pas être isolée (contamination par la salive ou le sang)", "Occlusion non contrôlée ou couronne mal adaptée : renvoyer au laboratoire"],
      materiel: [
        "**Panavia V5 Paste** (Universal A2 ou Clear) et embout mélangeur",
        "**Clearfil Ceramic Primer Plus** et **Panavia V5 Tooth Primer** ; godet de mélange, micro-brosses",
        "Sablage à l'alumine de l'intrados (taille des particules et pression : selon la notice du fabricant de la zircone) ; bain ultrasonique",
        "Lampe à photopolymériser (longueur d'onde 400-515 nm) ; sonde",
        "Isolation : digue ou coton/fil de rétraction et aspiration",
        "**CVI de scellement GC Fuji PLUS** (capsule) et **GC Fuji PLUS Conditioner**, malaxeur et applicateur de capsules : pas l'EQUIA Forte, qui est un matériau de restauration",
        "Fil dentaire, papier à articuler"
      ],
      alertes: [
        "**Isolation** : indispensable pour le **collage** (la notice du fabricant impose de **maintenir l'isolation 3 minutes** après la pose). Digue si la préparation le permet ; sinon fil de rétraction, cotons et aspiration, avec une isolation rigoureuse.",
        "**Nettoyer l'intrados après l'essayage** : une méta-analyse (Silva 2022) montre que le **sablage à l'alumine** rend la meilleure adhésion après contamination salivaire, devant le nettoyant du commerce et l'eau.",
        "Le primer de la zircone doit contenir du **MDP** (cas du Clearfil Ceramic Primer Plus) ; ne pas utiliser d'acide fluorhydrique sur la zircone.",
        "**EQUIA Forte HT Fil et scellement de couronne** : c'est un **verre ionomère de restauration** (association verre ionomère + vernis EQUIA Forte Coat), indiqué par GC pour les restaurations directes, y compris les classes II. Aucune source consultée ne le présente comme **ciment de scellement** ; la littérature distingue les CVI **de scellement** (rapport poudre/liquide bas, faible épaisseur de film : [Updates on the clinical application of GIC, 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11725089/)) des CVI de restauration (rapport poudre/liquide élevé). Pour sceller : CVI de scellement (**GC Fuji PLUS**, indiqué par GC pour les couronnes en zircone) ou collage.",
        "**Si scellement au Fuji PLUS** : pas de matériau à l'**eugénol** (il gêne la prise et l'adhésion : retirer tout résidu de ciment provisoire à l'eugénol) ; le **Conditioner** (2 % de chlorure ferrique) ne s'associe pas à des produits contenant de l'épinéphrine (coloration des tissus).",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Temps 1 – Dépose du provisoire et essayage à sec", details: [
          "Dépose du provisoire et **nettoyage de la préparation** ; **essayage à sec** : contacts proximaux, adaptation marginale, occlusion, esthétique",
          "Validation par le patient et par l'encadrant avant l'assemblage"
        ], materiel: ["sonde", "fil dentaire", "papier à articuler"], validation: "essayage" },
        { titre: "Temps 2 – Choix du mode d'assemblage : CVI ou collage", details: [
          "**Critère usuel : la géométrie de la préparation.** Préparation **rétentive** (parois hautes, peu de conicité) : scellement au CVI possible ; préparation **courte ou très conique**, ou si on veut la rétention maximale : **collage**",
        ], materiel: ["radiographie ou modèle pour juger la hauteur de préparation"] },
        { titre: "Temps 3A – Collage au Panavia V5 (protocole du fabricant)", details: [
          "**1.** Sabler l'intrados à l'alumine, **nettoyer aux ultrasons** et sécher ; **2.** appliquer le **Clearfil Ceramic Primer Plus** et sécher ; **3.** appliquer le **Panavia V5 Tooth Primer** sur la dent, **laisser 20 secondes**, sécher",
          "**4.** Dispenser la pâte **Panavia V5** (embout mélangeur) dans la couronne et la mettre en place (temps de travail : 2 min après dispensation à 23 °C, **60 s** une fois la pâte en bouche) ; **5.** éliminer l'excès : soit **photopolymérisation de 3 à 5 s** puis sonde, soit retrait au pinceau puis photopolymérisation des marges ; **6.** **maintenir l'isolation 3 minutes**, ou photopolymériser (couronne translucide)"
        ], materiel: ["sablage", "Clearfil Ceramic Primer Plus", "Panavia V5 Tooth Primer", "Panavia V5 Paste", "lampe à photopolymériser", "sonde"], astuce: "Temps de photopolymérisation selon la lampe : LED haute intensité (> 1 500 mW/cm²) 2 × 3 à 5 s ; LED 800-1 400 mW/cm² 10 s ; halogène (> 400 mW/cm²) 10 s. La teinte opaque se prend en auto uniquement. Fiche fabricant de 12/2014 : vérifier la notice en vigueur." },
        { titre: "Temps 3B – Scellement au CVI", details: [
          "**CVI de scellement GC Fuji PLUS** (ciment verre ionomère renforcé de résine, en capsules) : indiqué pour les couronnes en zircone et céramo-métalliques",
          "**Nettoyer la préparation** à la pierre ponce et à l'eau ; **GC Fuji PLUS Conditioner 20 s** (boulette de coton ou éponge), **rincer abondamment**, éliminer l'excès d'eau **sans dessécher** (surface humide et brillante)",
          "**Activer la capsule** (secouer, enfoncer complètement le piston et le maintenir 2 s), puis **mélanger 10 s** au malaxeur à capsules",
          "**Charger l'applicateur** de capsules, **2 clics**, injecter directement dans la couronne",
          "**Garnir l'intrados et mettre en place immédiatement** : temps de travail **2 min** après le début du malaxage (à 23 °C), pression modérée",
          "**Éliminer les excès** quand le ciment devient caoutchouteux (sonde, fil dentaire) ; finition possible **4 min 15 s** après la mise en place"
        ], materiel: ["GC Fuji PLUS (capsule)", "GC Fuji PLUS Conditioner", "malaxeur à capsules", "applicateur de capsules", "boulettes de coton", "sonde", "fil dentaire"] },
        { titre: "Temps 4 – Contrôle final", details: [
          "Contrôle de l'**occlusion** (statique et dynamique) et retouches ; contrôle des contacts proximaux au fil dentaire",
          "Consignes au patient ; **contrôle à 1-2 semaines**, puis à **6 mois** et **chaque année** (calendrier des essais cliniques sur les restaurations collées)"
        ], materiel: ["papier à articuler", "fraises de finition"], validation: "pose" }
      ],
      consignes: [
        "Éviter les aliments très durs ou collants pendant les premières heures.",
        "Signaler toute gêne à la morsure : l'occlusion peut être retouchée.",
        "Hygiène soigneuse du collet ; passer le fil ou la brossette interdentaire à la limite de la couronne.",
        "Contrôles réguliers."
      ],
      erreurs: [
        "Intrados contaminé par la salive après l'essayage et non resablé avant le collage",
        "Isolation insuffisante ou levée avant les 3 minutes imposées par la notice",
        "Primers appliqués dans le mauvais ordre (Ceramic Primer Plus sur la couronne, Tooth Primer sur la dent, 20 s)",
        "Excès de ciment laissé dans le sulcus",
        "Occlusion non contrôlée avant la sortie du patient"
      ],
      references: [
        "[Kuraray Noritake – PANAVIA V5, fiche protocole (flow chart, 12/2014), copie distributeur : zircone, tooth primer 20 s, isolation 3 min, temps de polymérisation](https://plandent.fi/globalassets/catalog-resources/fi1/tarvikkeet/protetiikka/kiinnityssementit/panavia_v5-dfu-kuvilla.pdf) — à comparer à la notice en vigueur",
        "[Shihabi S., Chrcanovic B.R. Clinical outcomes of tooth-supported monolithic zirconia vs. porcelain-veneered zirconia FDP, with a focus on cement type. Clin Oral Investig 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10560185/)",
        "[Silva N.R.D. et al. Which zirconia surface-cleaning strategy improves adhesion of resin composite cement after saliva contamination? J Adhes Dent 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC11734274/)",
        "[Lupu I.C. et al. Bonding strategies for zirconia fixed restorations: a scoping review. Biomimetics 2025;10:632](https://pmc.ncbi.nlm.nih.gov/articles/PMC12468000/)",
        "Le choix entre CVI et collage n'est pas régi par une recommandation officielle trouvée : le critère de géométrie est une règle usuelle à valider par le service.",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "scellement-ccm",
      titre: "Scellement d'une couronne céramo-métallique",
      resume: "Essayage puis scellement de la couronne céramo-métallique au CVI de scellement GC Fuji PLUS.",
      duree: "1 séance",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + notice GC Fuji PLUS",
      maj: "2026-11",
      hopital: [
        "**Ciment de scellement : GC Fuji PLUS** (CVI en capsules)"
      ],
      indications: ["Pose d'une couronne unitaire céramo-métallique"],
      contreIndications: ["Occlusion non contrôlée ou couronne mal adaptée : renvoyer au laboratoire"],
      materiel: [
        "Ciment de scellement **GC Fuji PLUS** (capsule) et **GC Fuji PLUS Conditioner** ; malaxeur et applicateur de capsules",
        "Isolation : coton et écarteurs",
        "Sonde, fil dentaire, papier à articuler"
      ],
      alertes: [
        "**Fuji PLUS et eugénol** : ne pas utiliser avec des matériaux contenant de l'eugénol, qui gênent la prise et l'adhésion du ciment ; retirer tout résidu de ciment provisoire à l'eugénol.",
        "**GC Fuji PLUS Conditioner** : contient 2 % de chlorure ferrique ; ne pas l'associer à des produits contenant de l'épinéphrine (risque de coloration des tissus).",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Temps 1 – Dépose du provisoire et essayage à sec", details: [
          "Dépose du provisoire et **nettoyage de la préparation** ; **essayage à sec** : contacts proximaux, adaptation marginale, occlusion, esthétique",
          "Validation par le patient et par l'encadrant avant le scellement"
        ], materiel: ["sonde", "fil dentaire", "papier à articuler"], validation: "essayage" },
        { titre: "Temps 2 – Scellement", details: [
          "**Nettoyer la préparation** à la pierre ponce et à l'eau ; **GC Fuji PLUS Conditioner 20 s** (boulette de coton ou éponge), **rincer abondamment**, éliminer l'excès d'eau **sans dessécher** (surface humide et brillante)",
          "**Activer la capsule** (secouer, enfoncer complètement le piston et le maintenir 2 s), puis **mélanger 10 s** au malaxeur à capsules",
          "**Charger l'applicateur**, **2 clics**, injecter dans la couronne ; **mise en place immédiate** (temps de travail **2 min** après le début du malaxage à 23 °C), pression modérée",
          "**Éliminer les excès** quand le ciment devient caoutchouteux (fil dentaire, sonde) ; finition possible **4 min 15 s** après la mise en place"
        ], materiel: ["GC Fuji PLUS (capsule)", "GC Fuji PLUS Conditioner", "malaxeur à capsules", "applicateur de capsules", "fil dentaire", "sonde"] },
        { titre: "Temps 3 – Contrôle final", details: [
          "Contrôle de l'**occlusion** et retouches ; contrôle des contacts proximaux",
          "Consignes au patient"
        ], materiel: ["papier à articuler", "fraises de finition"], validation: "scellement" }
      ],
      consignes: [
        "Éviter les aliments très durs ou collants pendant les premières heures.",
        "Signaler toute gêne à la morsure.",
        "Hygiène soigneuse du collet ; passer le fil ou la brossette interdentaire.",
        "Contrôles réguliers."
      ],
      erreurs: [
        "Excès de ciment laissé dans le sulcus",
        "Préparation non nettoyée avant le scellement",
        "Occlusion non contrôlée avant la sortie du patient"
      ],
      references: [
        "[Notice GC Fuji PLUS Capsules](https://gc.dental/europe/sites/europe.gc.dental/files/products/downloads/fujiplus/ifu/22867_IFU_Fuji_PLUS_Capsules_W.pdf) : indications, conditionnement de la dent, malaxage et temps de travail.",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "inlay",
      titre: "Inlay (céramique ou composite, collé)",
      resume: "Restauration partielle intra-coronaire sans recouvrement des cuspides : préparation, empreinte au silicone, essayage et collage. 2 à 3 séances.",
      duree: "2 à 3 séances",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + pratique courante – à compléter",
      maj: "2026-11",
      hopital: [
        "**Matériau** : céramique ou composite",
        "**Assemblage par collage au Panavia V5**",
        "**Empreinte de la préparation** : **Express 2** (silicone) ou **Impregum Penta Super Quick** (polyéther)",
        "**2 ou 3 séances**"
      ],
      indications: ["Lésion carieuse ou restauration étendue d'une dent postérieure sans cuspide fragilisée", "Remplacement d'une restauration défectueuse"],
      contreIndications: ["Cuspides fragilisées : onlay", "Isolation impossible (collage)", "Parafonction non contrôlée"],
      materiel: [
        "Fraises de préparation",
        "Empreinte de la préparation : **Express 2** ou **Impregum Penta Super Quick** ; **alginate** pour l'antagoniste",
        "Composite provisoire **Telio Onlay** (Ivoclar, seringue de 2,5 g, teinte universelle) et ciment provisoire **Kerr** (Temporary Cement + accélérateur)",
        "Isolation (digue) ; **Panavia V5 Paste** (Universal A2 ou Clear), **Panavia V5 Tooth Primer**, **Clearfil Ceramic Primer Plus**",
        "Traitement de l'intrados : céramique silicatée (ex. disilicate de lithium) : **acide fluorhydrique** **Porcelain Etch** (Ultradent, gel tamponné : **90 s**, aspiration à haut débit pendant le mordançage, aspirer, rincer, sécher jusqu'à un aspect givré) ; **si le laboratoire a déjà mordancé à l'HF : acide phosphorique seulement**, pas de second mordançage ; composite : **sablage, gel de mordançage K-Etchant, rinçage, séchage**",
        "Lampe à photopolymériser (longueur d'onde 400-515 nm)",
        "Teintier"
      ],
      alertes: [
        "Prendre la **teinte avant** l'anesthésie.",
        "Le collage exige une **isolation parfaite** (digue).",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Séance 1 – Préparation, empreinte et provisoire", details: [
          "Anesthésie, dépose de l'ancienne restauration ou élimination de la carie ; **préparation de la cavité** : parois légèrement divergentes, angles arrondis, **sans recouvrement des cuspides** ; **isthme d'au moins 1,5 mm de large**, parois divergentes de 6 à 12°, **épaisseur occlusale de 1,5 à 2 mm** pour la céramique comme pour le composite (le fabricant du disilicate de lithium GC admet 1 mm de profondeur et de largeur au minimum) ; teinte au teintier",
          "**Empreinte de la préparation** (**Express 2** (silicone) ou **Impregum Penta Super Quick** (polyéther) ; rétraction si limite sous-gingivale : pâte **Expasyl** et son pistolet, Acteon), empreinte de l'antagoniste à l'**alginate**, occlusion ; **provisoire**"
        ], materiel: ["fraises de préparation", "Express 2 ou Impregum Penta Super Quick", "alginate", "teintier", "matériau de provisoire"], validation: "préparation et empreinte", astuce: "Au laboratoire : confection de l'inlay en céramique ou en composite." },
        { titre: "Séance 2 – Essayage et collage", details: [
          "Dépose du provisoire, **essayage à sec** : adaptation, contacts proximaux, teinte ; validation du patient",
          "**Collage au Panavia V5 sous isolation** (notice, inlays/onlays) : intrados traité (céramique silicatée : **Porcelain Etch** 90 s, rinçage, séchage ; composite : sablage, **K-Etchant**, rinçage, séchage) puis **Clearfil Ceramic Primer Plus** ; **Tooth Primer 20 s** sur la dent, séchage ; pâte Panavia V5, mise en place, **excès retiré après 3 à 5 s de photopolymérisation** (ou au pinceau) ; **isolation maintenue 3 minutes** ou photopolymérisation ; finition et **contrôle de l'occlusion**"
        ], materiel: ["isolation (digue)", "Porcelain Etch (céramique) ou sablage et K-Etchant (composite)", "Clearfil Ceramic Primer Plus", "Panavia V5 Tooth Primer", "Panavia V5 Paste", "lampe", "papier à articuler"], validation: "essayage et collage", astuce: "Nettoyer l'intrados après l'essayage (sablage ou protocole du fabricant) avant le primer : la salive diminue l'adhésion." },
        { titre: "Séance 3 (éventuelle) – Contrôle et retouches", details: [
          "**Contrôle à 1-2 semaines** : occlusion et contacts, état de la limite de collage ; **retouches** si besoin",
          "Consignes d'hygiène ; **contrôles suivants à 6 mois, puis chaque année**"
        ], materiel: ["papier à articuler", "sonde", "fil dentaire"] }
      ],
      consignes: [
        "**Provisoire** : éviter les aliments durs ou collants ; s'il se décolle, prendre rendez-vous rapidement.",
        "Une légère sensibilité au froid peut apparaître quelques jours ; consulter si elle persiste.",
        "Signaler toute gêne à la morsure.",
        "Hygiène soigneuse ; fil dentaire ou brossette interdentaire à la limite de la restauration."
      ],
      erreurs: [
        "Isolation insuffisante lors du collage",
        "Cavité à parois non expulsives ou angles vifs (fracture de la céramique, difficultés d'insertion)",
        "Épaisseur de matériau insuffisante dans les zones d'appui",
        "Excès de colle non éliminé",
        "Occlusion non contrôlée"
      ],
      references: [
        "[Kuraray Noritake – PANAVIA V5, fiche protocole (12/2014) : inlays/onlays, Tooth Primer 20 s, isolation 3 min](https://plandent.fi/globalassets/catalog-resources/fi1/tarvikkeet/protetiikka/kiinnityssementit/panavia_v5-dfu-kuvilla.pdf) — à comparer à la notice en vigueur",
        "[Disilicate de lithium vs composite CAD/CAM en onlays : préparation (isthme 1,5 mm, épaisseur occlusale 1,5 à 2 mm, cuspides recouvertes de 1,5 mm au moins), PMC7790784](https://pmc.ncbi.nlm.nih.gov/articles/PMC7790784/)",
        "[GC Initial LiSi Block – manuel technique : épaisseurs minimales du disilicate de lithium (inlay, onlay)](https://www.gc.dental/america/sites/america.gc.dental/files/products/downloads/gcinitiallisiblock/technical%20manual/gc-initial-lisi-block-technical-manual.pdf)",
        "Calendrier de contrôle (1-2 semaines, 6 mois, puis annuel) d'après les essais cliniques sur inlays et onlays : Özsoy A. et al. J Adhes Sci Technol 2016 (onlays et overlays en composite) ; Tagtekin D. et al. Oper Dent 2009 (onlays en céramique). Aucune recommandation officielle trouvée.",
        "Séquence rédigée d'après la pratique courante (3e séance et produit de traitement de l'intrados à confirmer par le service).",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "onlay",
      titre: "Onlay (céramique ou composite, collé)",
      resume: "Restauration partielle qui recouvre une ou plusieurs cuspides : préparation, empreinte au silicone, essayage et collage. 2 à 3 séances.",
      duree: "2 à 3 séances",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + pratique courante – à compléter",
      maj: "2026-11",
      hopital: [
        "**Matériau** : céramique ou composite",
        "**Assemblage par collage au Panavia V5**",
        "**Empreinte de la préparation** : **Express 2** (silicone) ou **Impregum Penta Super Quick** (polyéther)",
        "**2 ou 3 séances**"
      ],
      indications: ["Dent postérieure avec **cuspides fragilisées** à recouvrir", "Dent dépulpée nécessitant une protection cuspidienne"],
      contreIndications: ["Perte de substance trop importante : couronne", "Isolation impossible (collage)", "Parafonction non contrôlée"],
      materiel: [
        "Fraises de préparation",
        "Empreinte de la préparation : **Express 2** ou **Impregum Penta Super Quick** ; **alginate** pour l'antagoniste",
        "Composite provisoire **Telio Onlay** (Ivoclar, seringue de 2,5 g, teinte universelle) et ciment provisoire **Kerr** (Temporary Cement + accélérateur)",
        "Isolation (digue) ; **Panavia V5 Paste** (Universal A2 ou Clear), **Panavia V5 Tooth Primer**, **Clearfil Ceramic Primer Plus**",
        "Traitement de l'intrados : céramique silicatée (ex. disilicate de lithium) : **acide fluorhydrique** **Porcelain Etch** (Ultradent, gel tamponné : **90 s**, aspiration à haut débit pendant le mordançage, aspirer, rincer, sécher jusqu'à un aspect givré) ; **si le laboratoire a déjà mordancé à l'HF : acide phosphorique seulement**, pas de second mordançage ; composite : **sablage, gel de mordançage K-Etchant, rinçage, séchage**",
        "Lampe à photopolymériser (longueur d'onde 400-515 nm)",
        "Teintier"
      ],
      alertes: [
        "Prendre la **teinte avant** l'anesthésie.",
        "Le collage exige une **isolation parfaite** (digue).",
        "Vérifier l'**épaisseur de matériau** sur les cuspides recouvertes (selon céramique ou composite).",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Séance 1 – Préparation, empreinte et provisoire", details: [
          "Anesthésie, dépose de l'ancienne restauration ou élimination de la carie ; **préparation avec recouvrement des cuspides fragilisées** : réduction cuspidienne d'**au moins 1,5 mm** et **épaisseur occlusale de 1,5 à 2 mm** pour la céramique comme pour le composite (le fabricant du disilicate de lithium GC admet environ 1 mm, épaulement d'au moins 1 mm), angles arrondis, parois divergentes de 6 à 12° ; teinte au teintier",
          "**Empreinte de la préparation** (**Express 2** (silicone) ou **Impregum Penta Super Quick** (polyéther) ; rétraction si limite sous-gingivale : pâte **Expasyl** et son pistolet, Acteon), empreinte de l'antagoniste à l'**alginate**, occlusion ; **provisoire**"
        ], materiel: ["fraises de préparation", "Express 2 ou Impregum Penta Super Quick", "alginate", "teintier", "matériau de provisoire"], validation: "préparation et empreinte", astuce: "Au laboratoire : confection de l'onlay en céramique ou en composite." },
        { titre: "Séance 2 – Essayage et collage", details: [
          "Dépose du provisoire, **essayage à sec** : adaptation, contacts proximaux, occlusion, teinte ; validation du patient",
          "**Collage au Panavia V5 sous isolation** (notice, inlays/onlays) : intrados traité (céramique silicatée : **Porcelain Etch** 90 s, rinçage, séchage ; composite : sablage, **K-Etchant**, rinçage, séchage) puis **Clearfil Ceramic Primer Plus** ; **Tooth Primer 20 s** sur la dent, séchage ; pâte Panavia V5, mise en place, **excès retiré après 3 à 5 s de photopolymérisation** (ou au pinceau) ; **isolation maintenue 3 minutes** ou photopolymérisation ; finition et **contrôle de l'occlusion**"
        ], materiel: ["isolation (digue)", "Porcelain Etch (céramique) ou sablage et K-Etchant (composite)", "Clearfil Ceramic Primer Plus", "Panavia V5 Tooth Primer", "Panavia V5 Paste", "lampe", "papier à articuler"], validation: "essayage et collage", astuce: "Nettoyer l'intrados après l'essayage (sablage ou protocole du fabricant) avant le primer : la salive diminue l'adhésion." },
        { titre: "Séance 3 (éventuelle) – Contrôle et retouches", details: [
          "**Contrôle à 1-2 semaines** : occlusion et contacts, état de la limite de collage ; **retouches** si besoin",
          "Consignes d'hygiène ; **contrôles suivants à 6 mois, puis chaque année**"
        ], materiel: ["papier à articuler", "sonde", "fil dentaire"] }
      ],
      consignes: [
        "**Provisoire** : éviter les aliments durs ou collants ; s'il se décolle, prendre rendez-vous rapidement.",
        "Une légère sensibilité au froid peut apparaître quelques jours ; consulter si elle persiste.",
        "Signaler toute gêne à la morsure.",
        "Hygiène soigneuse ; fil dentaire ou brossette interdentaire à la limite de la restauration."
      ],
      erreurs: [
        "Réduction cuspidienne insuffisante : matériau trop mince, risque de fracture",
        "Isolation insuffisante lors du collage",
        "Parois non expulsives ou angles vifs",
        "Excès de colle non éliminé",
        "Occlusion non contrôlée"
      ],
      references: [
        "[Kuraray Noritake – PANAVIA V5, fiche protocole (12/2014) : inlays/onlays, Tooth Primer 20 s, isolation 3 min](https://plandent.fi/globalassets/catalog-resources/fi1/tarvikkeet/protetiikka/kiinnityssementit/panavia_v5-dfu-kuvilla.pdf) — à comparer à la notice en vigueur",
        "[Disilicate de lithium vs composite CAD/CAM en onlays : préparation (isthme 1,5 mm, épaisseur occlusale 1,5 à 2 mm, cuspides recouvertes de 1,5 mm au moins), PMC7790784](https://pmc.ncbi.nlm.nih.gov/articles/PMC7790784/)",
        "[GC Initial LiSi Block – manuel technique : épaisseurs minimales du disilicate de lithium (inlay, onlay)](https://www.gc.dental/america/sites/america.gc.dental/files/products/downloads/gcinitiallisiblock/technical%20manual/gc-initial-lisi-block-technical-manual.pdf)",
        "Calendrier de contrôle (1-2 semaines, 6 mois, puis annuel) d'après les essais cliniques sur inlays et onlays : Özsoy A. et al. J Adhes Sci Technol 2016 (onlays et overlays en composite) ; Tagtekin D. et al. Oper Dent 2009 (onlays en céramique). Aucune recommandation officielle trouvée.",
        "Séquence rédigée d'après la pratique courante (3e séance et produit de traitement de l'intrados à confirmer par le service).",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "endo-couronne",
      titre: "Endo-couronne en zircone",
      resume: "Restauration monobloc en zircone ancrée dans la chambre pulpaire d'une dent dépulpée, collée sans tenon. Brouillon en 2 séances : préparation et empreinte, puis essayage et collage.",
      duree: "2 séances (déduit)",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + revue de la littérature + notice Panavia V5 – à compléter",
      maj: "2026-11",
      hopital: [
        "**Matériau : zircone**",
        "Collage selon le protocole de la **zircone** (feuille de prétraitement Panavia V5 du service : sablage, rinçage, séchage, puis **Clearfil Ceramic Primer Plus** ; **Tooth Primer** sur la dent)",
        "**2 séances** (déduit du protocole : préparation et empreinte, puis essayage et collage) [[à confirmer]]"
      ],
      indications: [
        "Dent dépulpée très délabrée, **molaire** surtout",
        "**Espace inter-occlusal limité** ou couronne clinique courte, quand une ferrule est difficile à obtenir",
        "Alternative à un inlay-core ou une RMIPP suivi d'une couronne (moins invasive, plus rapide)"
      ],
      contreIndications: [
        "**Perte importante de structure sous la jonction amélo-cémentaire** (adhésion impossible)",
        "**Chambre pulpaire peu profonde** (certaines études retiennent au moins 2 mm ; pas de recommandation établie)",
        "**Parafonction** marquée (anatomie occlusale abrupte, usure, facettes)",
        "Prémolaires et dents antérieures : usage discuté (surface de collage réduite, forces non axiales)"
      ],
      materiel: [
        "Fraises diamantées : cylindro-conique (conicité de l'ordre de 7° pour la chambre) et fraise boule/roue pour la table occlusale",
        "Empreinte de la préparation : **Express 2** (silicone, 3M ESPE) ou **Impregum Penta Super Quick** (polyéther) ; **alginate** pour l'antagoniste ; fabrication de la zircone",
        "Provisoire : résine **Unifast Trad**, ciment provisoire **Temp-Bond** ou **Temp-Bond NE**",
        "**Panavia V5 Paste**, **Tooth Primer**, **Clearfil Ceramic Primer Plus**, sablage à l'alumine, lampe à photopolymériser",
        "Isolation : digue"
      ],
      alertes: [
        "**Pas de tenon** : la rétention vient de la chambre pulpaire et du collage ; la qualité de l'**isolation** et du protocole de collage est déterminante.",
        "**La zircone ne peut pas être mordancée** : le collage repose sur le sablage et un primer à base de MDP.",
        "**Résidus de ciment endodontique à l'eugénol** : ils peuvent gêner la polymérisation de la colle ; nettoyer les parois de la chambre.",
        "Éliminer soigneusement les **excès de colle**, surtout si la limite est sous-gingivale ; radiographie de contrôle si besoin.",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Séance 1 – Préparation, empreinte et provisoire", details: [
          "Évaluation (radiographie, profondeur de la chambre, hauteur résiduelle) ; **réduction occlusale d'au moins 2 mm** pour la céramique, **marge à 90° en « butt-joint »** (bande de 1 à 2 mm), marges idéalement supra-gingivales ; suppression de l'émail non soutenu",
          "**Chambre pulpaire** : parois sans contre-dépouille avec la fraise cylindro-conique (conicité ≈ 7°), parois lisses et continues avec la cavité d'accès ; ciment de scellement endodontique retiré dans la chambre ; **empreinte** (silicone **Express 2** ou polyéther **Impregum Penta Super Quick**), antagoniste à l'**alginate**, occlusion et **provisoire** (**Unifast Trad**, **Temp-Bond**)"
        ], materiel: ["fraises diamantées", "empreinte (Express 2 ou Impregum Penta Super Quick)", "alginate (antagoniste)", "provisoire (Unifast Trad, Temp-Bond)"], validation: "préparation et empreinte", astuce: "Au laboratoire (ou en CFAO au service) : fabrication de l'endo-couronne en zircone." },
        { titre: "Séance 2 – Essayage et collage", details: [
          "Dépose du provisoire, nettoyage ; **essayage à sec** : adaptation interne et marginale, contacts proximaux, occlusion, teinte ; validation",
          "**Collage de la zircone** : sablage de l'intrados puis ultrasons, **Clearfil Ceramic Primer Plus**, **Tooth Primer 20 s** sur la dent, pâte **Panavia V5**, excès retiré après 3 à 5 s de photopolymérisation, **isolation maintenue 3 minutes** ; contrôle de l'occlusion"
        ], materiel: ["sablage", "Clearfil Ceramic Primer Plus", "Panavia V5 Tooth Primer", "Panavia V5 Paste", "digue", "lampe", "papier à articuler"], validation: "essayage et collage" }
      ],
      consignes: [
        "Éviter les aliments très durs, surtout du côté de la dent traitée, les premiers jours.",
        "Signaler toute gêne à la morsure, douleur ou sensation que la restauration bouge.",
        "Hygiène soigneuse du collet ; fil ou brossette interdentaire.",
        "Contrôles réguliers (la dent traitée est fragilisée)."
      ],
      erreurs: [
        "Chambre pulpaire peu profonde ou parois insuffisantes pour la rétention",
        "Parois de la chambre avec contre-dépouilles (insertion impossible, adaptation médiocre)",
        "Collage sans isolation correcte, ou intrados non resablé après l'essayage",
        "Résidus de ciment à l'eugénol dans la chambre",
        "Parafonction non contrôlée (fracture)"
      ],
      references: [
        "[Kuraray Noritake – PANAVIA V5, fiche protocole (12/2014) : zircone](https://plandent.fi/globalassets/catalog-resources/fi1/tarvikkeet/protetiikka/kiinnityssementit/panavia_v5-dfu-kuvilla.pdf) — à comparer à la notice en vigueur",
        "Séquence déduite du protocole du service (zircone, Panavia V5) et de la littérature : nombre de séances, empreinte et fabrication à confirmer.",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "couronne-unitaire",
      titre: "Couronne unitaire – préparation, empreinte et provisoire",
      resume: "Séances préalables au scellement : examen et projet, puis préparation avec empreinte et provisoire dans une séance à part. Le scellement fait l'objet de fiches dédiées (zircone, céramo-métallique). Produits à confirmer par le service.",
      duree: "2 séances avant le scellement",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique courante – à compléter par le service",
      maj: "2026-11",
      indications: ["Délabrement coronaire ne permettant plus une restauration directe ou une pièce partielle", "Dent dépulpée fragilisée", "Rétablissement de l'esthétique ou de la fonction"],
      contreIndications: ["Parodonte non assaini", "Dent non conservable ou hygiène insuffisante", "Parafonction non contrôlée (précautions, gouttière)"],
      materiel: [
        "Examen : sonde, miroir, radiographie rétro-alvéolaire, alginate pour modèles d'étude",
        "Fraises de préparation",
        "Rétraction gingivale : fil(s) rétracteur(s)",
        "Empreinte de la préparation : **Express 2** (silicone) ou **Impregum Penta Super Quick** (polyéther) ; **alginate** pour l'arcade antagoniste",
        "Provisoire : résine **Unifast Trad**, clé en silicone, ciment provisoire **Temp-Bond** ou **Temp-Bond NE**",
        "Teintier",
        "Ciment d'assemblage : **scellement** au **Fuji PLUS** ou **collage** au **Panavia V5**, selon le matériau (prétraitement : feuille Panavia V5 du service)",
        "Papier à articuler, sonde, fil dentaire"
      ],
      alertes: [
        "Vérifier la **vitalité** et l'état endodontique avant de préparer.",
        "Respecter l'**espace biologique** : ne pas agresser l'attache épithélio-conjonctive.",
        "Prendre la **teinte avant** l'anesthésie et la préparation (dent hydratée, lumière naturelle).",
        "**Pas d'antibioprophylaxie** pour les soins prothétiques ni les prises d'empreintes en population générale (HAS 2026)."
      ],
      etapes: [
        { titre: "Séance 1 – Examen, plan de traitement et teinte", details: [
          "Examen clinique, radiologique, occlusal et parodontal ; choix du **matériau** de la couronne (céramo-métallique, tout-céramique, zircone…) selon les contraintes et l'esthétique ; consentement et devis",
          "**Empreinte d'étude** à l'alginate (modèles, éventuelle clé en silicone), **choix de la teinte** au teintier et photographies si besoin"
        ], materiel: ["sonde, miroir, radiographie", "alginate", "teintier", "appareil photo (si besoin)"], validation: "plan de traitement", astuce: "Au laboratoire : modèles d'étude, éventuel projet esthétique (wax-up)." },
        { titre: "Séance 2 – Préparation, empreinte et provisoire", details: [
          "**Anesthésie locale** puis **préparation** : réduction occlusale et axiale respectant l'épaisseur du matériau, faible convergence des parois, **limite cervicale** nette et arrondie respectant le parodonte",
          "**Rétraction gingivale**, **empreinte de précision** (**Express 2** (silicone) ou **Impregum Penta Super Quick** (polyéther)), empreinte de l'antagoniste à l'**alginate** et enregistrement de l'occlusion ; **provisoire** réalisé avec la clé en silicone, ajusté puis posé au ciment provisoire"
        ], materiel: ["fraises de préparation", "fil rétracteur", "matériau d'empreinte (Express 2 ou Impregum Penta Super Quick)", "alginate (antagoniste)", "résine (Unifast Trad) et clé en silicone pour provisoire", "ciment provisoire (Temp-Bond)"], validation: "préparation et empreinte", astuce: "Au laboratoire : coulée du modèle de travail et confection de la couronne." },
        { titre: "Séance 3 – Essayage et scellement", details: [
          "Voir les fiches **Scellement d'une couronne en zircone** ou **Scellement d'une couronne céramo-métallique** selon le matériau",
          "Contrôle de l'occlusion, consignes au patient et suivi"
        ], materiel: ["voir la fiche de scellement correspondante"] }
      ],
      consignes: [
        "**Provisoire** : éviter les aliments durs ou collants et mastiquer de l'autre côté ; brosser doucement ; **s'il se décolle, le conserver et prendre rendez-vous rapidement** (la dent peut migrer).",
        "**Sensibilités** : un peu de sensibilité au froid ou au chaud est possible les premiers jours ; consulter si elle persiste ou si la douleur est spontanée.",
        "**Après la pose** : éviter de mordre dans des aliments très durs les premières heures ; contrôler que la morsure est confortable, sinon revenir.",
        "**Hygiène** : brossage soigneux du collet ; passer le fil ou la brossette interdentaire à la limite de la couronne.",
        "**Contrôles réguliers** chez le chirurgien-dentiste."
      ],
      erreurs: [
        "Dent non assainie ou traitement endodontique non vérifié avant de préparer",
        "Réduction insuffisante (couronne trop épaisse, esthétique ou occlusion compromises) ou excessive (fragilisation, sensibilités)",
        "Limite cervicale imprécise ou agressant l'espace biologique ; **rétraction gingivale insuffisante** (empreinte inexploitable)",
        "Provisoire mal adapté ou occlusion non contrôlée (gingivite, migration de la dent)",
        "Excès de ciment laissé dans le sulcus",
        "Teinte prise après l'anesthésie ou dent déshydratée"
      ],
      suivi: ["Hygiène adaptée aux limites cervicales", "Contrôle lors du suivi annuel"],
      complications: ["**Sensibilité post-opératoire** : vérifier l'occlusion et l'adaptation", "**Descellement** : refaire un assemblage après nettoyage et analyse de la rétention", "**Gingivite ou récession autour de la couronne** : hygiène, ajustement"],
      references: [
        "Séquence rédigée d'après la pratique courante (valeurs et produits à confirmer par le service).",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 8](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    }
  ]
});
