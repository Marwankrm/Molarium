window.DISCIPLINES = window.DISCIPLINES || [];
window.DISCIPLINES.push({
  id: "chirurgie",
  ordre: 4,
  nom: "Chirurgie orale",
  sigle: "CH",
  couleur: "#1d6b3a",
  description: "Avulsions simples et multiples, avulsion chirurgicale, dents de sagesse, fermeture de CBS et patients sous antithrombotiques.",
  protocoles: [
    {
      id: "avulsion-simple",
      titre: "Avulsion dentaire simple",
      resume: "Avulsion d'une dent sur arcade ou d'une racine résiduelle en une séance : chlorhexidine, anesthésie, luxation, avulsion, irrigation, hémostase et suture.",
      duree: "1 séance, 20 à 30 min",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + recommandations HAS 2019 / HAS 2026 / SFCO 2015",
      maj: "2026-11",
      hopital: [
        "**Anesthésie** : para-apicale, tronculaire ou intraligamentaire, **selon les dents** ; anesthésique **articaïne Septodont avec adrénaline 1/200 000**",
        "**Chlorhexidine 0,2 %** (**Eludril Perio**, Pierre Fabre, sans alcool, flacon avec godet doseur de 10 mL) : bain de bouche avant le geste et **irrigation** du site opératoire",
        "**Kit de chirurgie** : le service dispose de **kits contenant tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.) ; tous types de daviers et de syndesmotomes ; **pièces à main chirurgicales** disponibles",
        "**Sutures** : fil **Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm), **points simples ou en croix**",
        "**Protocole hémostase, pour les patients à risque hémorragique** (SFCO 2015 : patients traités par antithrombotiques) : **Cellistypt** (cellulose oxydée résorbable) **ou Pangen** (éponge hémostatique) dans l'alvéole, puis **acide tranexamique en ampoule** : **compresse imbibée posée sur l'alvéole** ou **application directe dans l'alvéole** ; **patient non à risque** : compression et sutures",
        "**Imagerie** : panoramique et CBCT **selon le cas**",
        "**Validation par l'encadrant** : **une fois la dent extraite**",
        "**Consignes** remises au patient ; **contrôle à 7 jours**",
        "**Prescriptions** établies d'après la recommandation HAS 2026 et d'autres recommandations (à valider avec le service)"
      ],
      indications: ["Dent non conservable (carie profonde non restaurable, fracture, mobilité terminale, parodontite avancée)", "Dent temporaire persistante, dent surnuméraire accessible", "Indication orthodontique ou prothétique"],
      contreIndications: ["Infection avec signes de gravité (cellulite, trismus serré, dysphagie) : orientation hospitalière", "Patient à haut risque d'ostéonécrose des mâchoires ou d'endocardite : protocole adapté avant le geste", "Patient sous antithrombotiques : voir la fiche dédiée"],
      materiel: [
        "**Kit de chirurgie du service** : il contient **tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.)",
        "**Chlorhexidine 0,2 %** (**Eludril Perio**, Pierre Fabre, sans alcool, flacon avec godet doseur de 10 mL) : bain de bouche avant le geste (HAS 2026 : 0,1 à 0,2 %) et irrigation",
        "Anesthésique **articaïne Septodont avec adrénaline 1/200 000** et seringue",
        "Syndesmotome, élévateurs, daviers adaptés à la dent (tous types disponibles)",
        "Curette de Lucas, compresses stériles, seringue d'irrigation",
        "Hémostase locale (SFCO 2015) : éponges résorbables de collagène ou de gélatine, gaze de cellulose, colle de cyanoacrylate, sutures ; **au service, pour les patients à risque hémorragique** : **Cellistypt** ou **Pangen**, puis acide tranexamique en ampoule",
        "**Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm)"
      ],
      alertes: [
        "**Antibioprophylaxie non recommandée en population générale** pour l'avulsion d'une dent sur arcade ou d'une racine, avec ou sans alvéolectomie ou séparation de racines (HAS 2026, grade A).",
        "Elle est **recommandée chez les patients à risque infectieux augmenté** (accord d'experts) et chez les patients à **haut risque d'ostéonécrose des mâchoires** (grade C). Schéma adulte de 1re intention : **amoxicilline 2 g par voie orale, 30 à 60 min avant l'acte** (enfant : 50 mg/kg, sans dépasser 2 g).",
        "**Anesthésie intraligamentaire** : la HAS 2026 la réserve à la 2e intention, surtout chez le patient à haut risque d'ostéonécrose.",
        "Avulsion d'une dent unitaire = **chirurgie à faible risque hémorragique** : le traitement antithrombotique est poursuivi, l'hémostase locale est systématique (SFCO 2015, grade A).",
        "**Protocole hémostase du service** (Cellistypt ou Pangen, puis acide tranexamique) : **réservé aux patients à risque hémorragique**, c'est-à-dire, selon la SFCO 2015, **traités par antithrombotiques** (antiplaquettaires, anticoagulants). La recommandation ne couvre pas les autres troubles de l'hémostase (maladie constitutionnelle, thrombopénie, atteinte hépatique…) : avis du médecin référent.",
        "Vérifier la dent à avulser avec le patient et la radiographie (côté, numéro)."
      ],
      etapes: [
        { titre: "Temps 1 – Préparation", details: ["Vérification de l'identité, de la dent concernée, du consentement", "**Bain de bouche à la chlorhexidine** (HAS 2026 : 0,1 à 0,2 % ou povidone iodée 10 % avant tout geste) ; installation du patient, matériel stérile prêt"], materiel: ["chlorhexidine", "radiographie", "matériel stérile"] },
        { titre: "Temps 2 – Anesthésie", details: ["Anesthésie **para-apicale, tronculaire ou intraligamentaire selon la dent** ; vérifier l'efficacité avant de commencer", "Intraligamentaire à réserver à la 2e intention (HAS 2026)"], materiel: ["anesthésique", "seringue"] },
        { titre: "Temps 3 – Syndesmotomie et luxation", details: ["Désinsertion de l'attache gingivale (syndesmotome)", "Luxation à l'élévateur, appui sur l'os et non sur la dent voisine"], materiel: ["syndesmotome", "élévateur"] },
        { titre: "Temps 4 – Extraction", details: ["Préhension au davier au plus près du collet, mouvements adaptés à l'anatomie radiculaire", "Si résistance : chercher la cause (ankylose, courbure, hypercémentose) plutôt que forcer ; séparer les racines si besoin"], materiel: ["daviers adaptés"], validation: "dent extraite" },
        { titre: "Temps 5 – Contrôle de l'alvéole et irrigation", details: ["Curetage du tissu de granulation ; vérification de l'intégrité de la dent extraite", "**Irrigation à la chlorhexidine** ; rapprochement des berges osseuses par pression"], materiel: ["curette", "seringue d'irrigation", "chlorhexidine"] },
        { titre: "Temps 6 – Hémostase locale et suture", details: ["Compression par compresses ; si nécessaire, éponge résorbable dans l'alvéole", "**Patient à risque hémorragique** (SFCO 2015 : patient traité par antithrombotique) : **protocole hémostase** : **Cellistypt** ou **Pangen** dans l'alvéole, puis **acide tranexamique en ampoule** (compresse imbibée sur l'alvéole ou application directe)", "**Suture au fil 4-0** : point simple ou point en croix selon l'alvéole"], materiel: ["fil 4-0", "porte-aiguille et pince", "compresses", "Cellistypt ou Pangen (patient à risque)", "acide tranexamique en ampoule (patient à risque)"] },
        { titre: "Temps 7 – Consignes et prescription", details: ["**Consignes remises au patient** ; saignement persistant : appeler le **15** ou venir aux **urgences dentaires**", "Antalgiques : **paracétamol en 1re intention** ; antibiotiques uniquement dans les situations listées plus haut"], materiel: ["fiche de consignes", "ordonnance"] }
      ],
      consignes: [
        "**24 premières heures** : ne pas rincer ni cracher avec force, pas de tabac ni d'alcool, alimentation **froide ou tiède et molle**, mâcher du côté opposé.",
        "**Saignement** : compression avec une compresse propre et humide pendant 20 minutes ; si le saignement persiste, consulter en urgence.",
        "**Gonflement** : poche de glace par intermittence le jour même ; un œdème et une gêne à l'ouverture de la bouche sont normaux les premiers jours.",
        "**Hygiène** : brosser doucement les autres dents dès le soir ; **bain de bouche à la chlorhexidine 0,2 %** à partir de **48 h**, **pendant 1 semaine**.",
        "**Antalgiques** : paracétamol en première intention ; ibuprofène possible en l'absence de contre-indication et hors infection (HAS 2019) ; **patient sous anticoagulant ou antiagrégant : pas d'AINS ni d'aspirine sans avis médical** ; à adapter par le prescripteur.",
        "**Antibiotiques** : seulement s'ils sont prescrits (voir la fiche « Antibioprophylaxie et antibiothérapie ») ; les prendre comme indiqué.",
        "**Consulter** en cas de fièvre, de gonflement qui augmente, de douleur qui s'aggrave après le 3e jour (alvéolite) ou de saignement persistant ; **en urgence, appeler le 15** ; en cas de besoin, vous pouvez **venir aux urgences dentaires**.",
        "**Contrôle à 7 jours** ; les fils sont résorbables (pas de dépose nécessaire)."
      ],
      erreurs: [
        "Dent ou côté non vérifiés avant l'anesthésie",
        "Force excessive plutôt que séparation des racines ; fracture radiculaire",
        "Appui de l'élévateur sur la dent voisine ou sur une paroi fragile",
        "Alvéole non curetée ni irriguée",
        "Hémostase locale oubliée chez un patient sous antithrombotique",
        "Consignes non remises ou urgences (le 15, urgences dentaires) non rappelées"
      ],
      suivi: ["**Contrôle à 7 jours** (cicatrisation) ; fils résorbables, pas de dépose", "Contrôle téléphonique à 24-48 h pour les patients sous antithrombotiques"],
      complications: ["**Hémorragie non contrôlée par compression** : **reprise chirurgicale de l'hémostase** (anesthésie locale, curetage du caillot, révision, hémostase locale) ; **hospitalisation** si persistance (SFCO 2015)", "**Alvéolite** : soins locaux et antalgiques ; antibiotiques non systématiques (HAS 2026)", "**Communication bucco-sinusienne** : **antibiothérapie** recommandée (HAS 2026) et **avis du senior**"],
      references: [
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (adoptée le 16 juillet 2026)](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "[SFCO – Gestion péri-opératoire des patients traités par antithrombotiques en chirurgie orale (juillet 2015)](https://www.jomos.org/articles/mbcb/pdf/2015/04/mbcb150044-s.pdf)",
        "[HAS – Avulsion des 3es molaires (mai 2019) – antalgiques et consignes](https://www.has-sante.fr/upload/docs/application/pdf/2019-07/avulsion_des_3es_molaires_indications_techniques_et_modalites_-_recommandations.pdf)"
      ]
    },
    {
      id: "avulsions-multiples",
      titre: "Avulsions multiples",
      resume: "Plusieurs dents dans la même séance : planification par quadrant, risque hémorragique, régularisation osseuse, irrigation, sutures.",
      duree: "1 séance",
      niveau: "Étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + recommandations HAS 2026 / SFCO 2015 – à compléter",
      maj: "2026-11",
      hopital: [
        "**Anesthésie** : para-apicale, tronculaire ou intraligamentaire, **selon les dents** ; anesthésique **articaïne Septodont avec adrénaline 1/200 000**",
        "**Chlorhexidine 0,2 %** (**Eludril Perio**, Pierre Fabre, sans alcool, flacon avec godet doseur de 10 mL) : bain de bouche avant le geste et **irrigation** du site opératoire",
        "**Kit de chirurgie** : le service dispose de **kits contenant tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.) ; tous types de daviers et de syndesmotomes ; **pièces à main chirurgicales** disponibles",
        "**Sutures** : fil **Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm), **points simples ou en croix**",
        "**Protocole hémostase, pour les patients à risque hémorragique** (SFCO 2015 : patients traités par antithrombotiques) : **Cellistypt** (cellulose oxydée résorbable) **ou Pangen** (éponge hémostatique) dans l'alvéole, puis **acide tranexamique en ampoule** : **compresse imbibée posée sur l'alvéole** ou **application directe dans l'alvéole** ; **patient non à risque** : compression et sutures",
        "**Imagerie** : panoramique et CBCT **selon le cas**",
        "**Validation par l'encadrant** : **une fois la dent extraite**",
        "**Consignes** remises au patient ; **contrôle à 7 jours**",
        "**Prescriptions** établies d'après la recommandation HAS 2026 et d'autres recommandations (à valider avec le service)"
      ],
      indications: ["Plusieurs dents non conservables dans la même séance (assainissement avant prothèse, avant radiothérapie ou traitement à risque, parodontite avancée)", "Préparation d'une prothèse amovible ou d'une prothèse transitoire"],
      contreIndications: ["Patient à haut risque d'ostéonécrose, d'endocardite ou sous antithrombotiques : protocole adapté, fractionner les séances", "Infection avec signes de gravité : orientation hospitalière"],
      materiel: [
        "**Kit de chirurgie du service** : il contient **tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.)",
        "**Chlorhexidine 0,2 %** (bain de bouche avant le geste, irrigation)",
        "Anesthésie adaptée à chaque dent (**articaïne Septodont avec adrénaline 1/200 000**)",
        "Syndesmotomes, élévateurs et daviers selon les dents ; pince gouge ou fraise pour la régularisation osseuse",
        "**Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm) ; patient à risque hémorragique : **Cellistypt** ou **Pangen**"
      ],
      alertes: [
        "**Risque hémorragique (SFCO 2015)** : avulsions multiples **dans un même quadrant** = faible risque ; **dans plusieurs quadrants** = **risque élevé**. Chez un patient sous antithrombotique, fractionner les séances (approche segmentaire).",
        "**Antibioprophylaxie non recommandée en population générale** pour des avulsions de dents sur arcade (HAS 2026, grade A) ; recommandée en cas de dents incluses, de risque infectieux augmenté ou de haut risque d'ostéonécrose.",
        "**Alvéolectomie ou régularisation osseuse** : geste le moins traumatique possible, surtout chez les patients à haut risque d'ostéonécrose."
      ],
      etapes: [
        { titre: "Temps 1 – Planification et préparation", details: ["Plan par quadrant, ordre de passage (à définir avec l'encadrant) ; risque hémorragique évalué", "**Bain de bouche à la chlorhexidine** ; installation, matériel stérile"], materiel: ["chlorhexidine", "radiographies"] },
        { titre: "Temps 2 – Anesthésie", details: ["Anesthésie adaptée à chaque dent : para-apicale, tronculaire ou intraligamentaire (2e intention selon la HAS 2026)", "Contrôle de l'efficacité avant chaque avulsion"], materiel: ["anesthésique", "seringue"] },
        { titre: "Temps 3 – Avulsions successives", details: ["Syndesmotomie, luxation, extraction de chaque dent, dent par dent", "Si résistance : séparation des racines ou abord chirurgical (voir la fiche dédiée)"], materiel: ["syndesmotomes", "élévateurs", "daviers"], validation: "dents extraites" },
        { titre: "Temps 4 – Révision, régularisation osseuse et irrigation", details: ["Curetage de chaque alvéole ; **régularisation osseuse** des crêtes si une prothèse est prévue", "**Irrigation à la chlorhexidine**"], materiel: ["curette", "pince gouge ou fraise", "chlorhexidine"] },
        { titre: "Temps 5 – Hémostase et sutures", details: ["Compression ; éponge résorbable si besoin ; **sutures au fil 4-0** (points simples ou en croix) après rapprochement des berges", "**Patient à risque hémorragique** (SFCO 2015 : patient traité par antithrombotique) : **protocole hémostase** (Cellistypt ou Pangen, puis acide tranexamique), séances fractionnées"], materiel: ["fil 4-0", "porte-aiguille", "Cellistypt ou Pangen (patient à risque)", "acide tranexamique en ampoule (patient à risque)"] },
        { titre: "Temps 6 – Consignes et prescription", details: ["**Consignes remises au patient**, urgence : le **15** ou les **urgences dentaires**", "Prescriptions selon la HAS 2026 et le profil du patient ; antalgique de 1re intention : **paracétamol**"], materiel: ["fiche de consignes", "ordonnance"] }
      ],
      consignes: [
        "**24 premières heures** : ne pas rincer ni cracher avec force, pas de tabac ni d'alcool, alimentation **froide ou tiède et molle**, mâcher du côté opposé.",
        "**Saignement** : compression avec une compresse propre et humide pendant 20 minutes ; si le saignement persiste, consulter en urgence.",
        "**Gonflement** : poche de glace par intermittence le jour même ; un œdème et une gêne à l'ouverture de la bouche sont normaux les premiers jours.",
        "**Hygiène** : brosser doucement les autres dents dès le soir ; **bain de bouche à la chlorhexidine 0,2 %** à partir de **48 h**, **pendant 1 semaine**.",
        "**Antalgiques** : paracétamol en première intention ; ibuprofène possible en l'absence de contre-indication et hors infection (HAS 2019) ; **patient sous anticoagulant ou antiagrégant : pas d'AINS ni d'aspirine sans avis médical** ; à adapter par le prescripteur.",
        "**Antibiotiques** : seulement s'ils sont prescrits (voir la fiche « Antibioprophylaxie et antibiothérapie ») ; les prendre comme indiqué.",
        "**Consulter** en cas de fièvre, de gonflement qui augmente, de douleur qui s'aggrave après le 3e jour (alvéolite) ou de saignement persistant ; **en urgence, appeler le 15** ; en cas de besoin, vous pouvez **venir aux urgences dentaires**.",
        "**Contrôle à 7 jours** ; les fils sont résorbables (pas de dépose nécessaire)."
      ],
      erreurs: [
        "Trop de dents dans la même séance chez un patient sous antithrombotique",
        "Régularisation osseuse excessive ou traumatique",
        "Sutures sous tension, berges non rapprochées",
        "Oublier l'irrigation de chaque alvéole",
        "Consignes non remises"
      ],
      suivi: ["**Contrôle à 7 jours** (cicatrisation) ; fils résorbables, pas de dépose", "Contrôle téléphonique à 24-48 h pour les patients sous antithrombotiques"],
      references: [
        "[SFCO – Gestion péri-opératoire des patients traités par antithrombotiques en chirurgie orale (2015) – annexe 1](https://www.jomos.org/articles/mbcb/pdf/2015/04/mbcb150044-s.pdf)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 4](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)"
      ]
    },
    {
      id: "avulsion-alveolectomie-separation-racines",
      titre: "Avulsion avec alvéolectomie et séparation de racines",
      resume: "Avulsion chirurgicale en une séance : lambeau en enveloppe, alvéolectomie à la pièce à main chirurgicale, séparation des racines, irrigation à la chlorhexidine et sutures.",
      duree: "1 séance, 30 à 45 min",
      niveau: "Interne / étudiant encadré",
      statut: "brouillon",
      sourceType: "Pratique du service (CHU) + recommandations HAS 2026 / SFCO 2015 / HAS 2019 – à compléter",
      maj: "2026-11",
      hopital: [
        "**Lambeau en enveloppe** (incision intrasulculaire, sans décharge) ; le lambeau triangulaire est réservé aux dents de sagesse",
        "**Anesthésie** : para-apicale, tronculaire ou intraligamentaire, **selon les dents** ; anesthésique **articaïne Septodont avec adrénaline 1/200 000**",
        "**Chlorhexidine 0,2 %** (**Eludril Perio**, Pierre Fabre, sans alcool, flacon avec godet doseur de 10 mL) : bain de bouche avant le geste et **irrigation** du site opératoire",
        "**Kit de chirurgie** : le service dispose de **kits contenant tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.) ; tous types de daviers et de syndesmotomes ; **pièces à main chirurgicales** disponibles",
        "**Sutures** : fil **Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm), **points simples ou en croix**",
        "**Protocole hémostase, pour les patients à risque hémorragique** (SFCO 2015 : patients traités par antithrombotiques) : **Cellistypt** (cellulose oxydée résorbable) **ou Pangen** (éponge hémostatique) dans l'alvéole, puis **acide tranexamique en ampoule** : **compresse imbibée posée sur l'alvéole** ou **application directe dans l'alvéole** ; **patient non à risque** : compression et sutures",
        "**Imagerie** : panoramique et CBCT **selon le cas**",
        "**Validation par l'encadrant** : **une fois la dent extraite**",
        "**Consignes** remises au patient ; **contrôle à 7 jours**",
        "**Prescriptions** établies d'après la recommandation HAS 2026 et d'autres recommandations (à valider avec le service)"
      ],
      indications: ["Dent délabrée ou racines résiduelles non accessibles au davier", "Molaire pluriradiculée à racines divergentes, courbes ou ankylosées", "Fracture radiculaire, échec d'une avulsion simple"],
      contreIndications: ["Infection avec signes de gravité : orientation hospitalière", "Rapports étroits avec le canal alvéolaire inférieur ou le sinus non évalués : imagerie complémentaire (CBCT selon le cas)", "Patient à risque particulier (antithrombotiques, ostéonécrose, endocardite) : protocole adapté"],
      materiel: [
        "**Kit de chirurgie du service** : il contient **tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.)",
        "**Chlorhexidine 0,2 %** : bain de bouche avant et **irrigation**",
        "Anesthésique **articaïne Septodont avec adrénaline 1/200 000**",
        "Bistouri (lame), décolleur, écarteur",
        "**Pièce à main chirurgicale** (moteur chirurgical) et fraises chirurgicales **Zekrya** ; irrigation continue",
        "Élévateurs, daviers, curette de Lucas, pince gouge",
        "**Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm) ; patient à risque hémorragique : **Cellistypt** ou **Pangen**"
      ],
      alertes: [
        "**Antibioprophylaxie non recommandée en population générale** pour une avulsion de dent sur arcade, **avec ou sans alvéolectomie ou séparation de racines** (HAS 2026, grade A) ; recommandée chez les patients à risque infectieux augmenté ou à haut risque d'ostéonécrose.",
        "**Nerf lingual** (mandibule) : éviter le rétracteur sous-périosté en position linguale (HAS 2019, grade B) ; **sinus maxillaire** : prudence sur les molaires et prémolaires maxillaires (communication bucco-sinusienne).",
        "**Facteurs de risque hémorragique (SFCO 2015)** : décollement au-delà de la ligne muco-gingivale, décollement lingual, avulsion en zone inflammatoire, durée > 1 h.",
        "Patient sous antithrombotique : voir la fiche dédiée ; hémostase locale systématique."
      ],
      etapes: [
        { titre: "Temps 1 – Évaluation et préparation", details: ["Analyse de l'imagerie (racines, sinus, canal, os) ; plan opératoire : abord, alvéolectomie, séparation", "**Bain de bouche à la chlorhexidine**, installation, consentement vérifié"], materiel: ["panoramique ± CBCT", "chlorhexidine"] },
        { titre: "Temps 2 – Anesthésie et lambeau", details: ["Anesthésie **para-apicale ou tronculaire selon la dent**, vérifier l'efficacité", "**Lambeau en enveloppe** : incision intrasulculaire autour des dents, décollement muco-périosté prudent ; protection des structures nobles"], materiel: ["anesthésique", "bistouri", "décolleur", "écarteur"] },
        { titre: "Temps 3 – Alvéolectomie", details: ["**Alvéolectomie** (ostéotomie vestibulaire) à la pièce à main chirurgicale **sous irrigation** pour exposer la furcation et les racines", "Épargner l'os au maximum, notamment chez le patient à risque d'ostéonécrose"], materiel: ["pièce à main chirurgicale", "fraises chirurgicales", "irrigation"] },
        { titre: "Temps 4 – Séparation des racines et avulsion", details: ["**Section de la couronne et séparation des racines** à la fraise, puis extraction de chaque racine à l'élévateur ou au davier", "Si fragment inaccessible ou près du sinus/du nerf : s'arrêter et demander l'avis du senior"], materiel: ["fraise", "élévateurs", "daviers"], validation: "dent extraite" },
        { titre: "Temps 5 – Révision et irrigation", details: ["Curetage de l'alvéole, régularisation des arêtes osseuses (pince gouge ou fraise), contrôle de l'absence de fragment", "**Irrigation abondante à la chlorhexidine**"], materiel: ["curette", "pince gouge", "chlorhexidine"] },
        { titre: "Temps 6 – Hémostase et sutures", details: ["Repositionnement du lambeau et **sutures au fil 4-0**, points simples ou en croix", "Compression par compresses ; **patient à risque hémorragique** : **protocole hémostase** (Cellistypt ou Pangen, puis acide tranexamique)"], materiel: ["fil 4-0", "porte-aiguille", "compresses", "Cellistypt ou Pangen (patient à risque)", "acide tranexamique en ampoule (patient à risque)"] },
        { titre: "Temps 7 – Consignes et prescription", details: ["**Consignes remises au patient**, urgence : le **15** ou les **urgences dentaires**", "Prescriptions selon la HAS 2026 ; antalgique de 1re intention : **paracétamol**"], materiel: ["fiche de consignes", "ordonnance"] }
      ],
      consignes: [
        "**24 premières heures** : ne pas rincer ni cracher avec force, pas de tabac ni d'alcool, alimentation **froide ou tiède et molle**, mâcher du côté opposé.",
        "**Saignement** : compression avec une compresse propre et humide pendant 20 minutes ; si le saignement persiste, consulter en urgence.",
        "**Gonflement** : poche de glace par intermittence le jour même ; un œdème et une gêne à l'ouverture de la bouche sont normaux les premiers jours.",
        "**Hygiène** : brosser doucement les autres dents dès le soir ; **bain de bouche à la chlorhexidine 0,2 %** à partir de **48 h**, **pendant 1 semaine**.",
        "**Antalgiques** : paracétamol en première intention ; ibuprofène possible en l'absence de contre-indication et hors infection (HAS 2019) ; **patient sous anticoagulant ou antiagrégant : pas d'AINS ni d'aspirine sans avis médical** ; à adapter par le prescripteur.",
        "**Antibiotiques** : seulement s'ils sont prescrits (voir la fiche « Antibioprophylaxie et antibiothérapie ») ; les prendre comme indiqué.",
        "**Consulter** en cas de fièvre, de gonflement qui augmente, de douleur qui s'aggrave après le 3e jour (alvéolite) ou de saignement persistant ; **en urgence, appeler le 15** ; en cas de besoin, vous pouvez **venir aux urgences dentaires**.",
        "**Contrôle à 7 jours** ; les fils sont résorbables (pas de dépose nécessaire)."
      ],
      erreurs: [
        "Lambeau trop étroit : champ opératoire insuffisant ; ou décollement lingual traumatique",
        "Alvéolectomie sans irrigation ou trop étendue",
        "Fragment radiculaire laissé en place sans le documenter",
        "Sinus ou canal alvéolaire non évalués avant le geste",
        "Sutures sous tension",
        "Consignes non remises"
      ],
      suivi: ["**Contrôle à 7 jours** (cicatrisation) ; fils résorbables, pas de dépose", "Contrôle téléphonique à 24-48 h pour les patients sous antithrombotiques"],
      complications: ["**Communication bucco-sinusienne** : **antibiothérapie** (HAS 2026) et conduite selon la fiche de fermeture", "**Hypoesthésie du nerf alvéolaire inférieur ou lingual** : traçabilité et **orientation spécialisée**", "**Alvéolite, hémorragie** : voir la fiche « Avulsion dentaire simple »"],
      references: [
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableau 4](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "[HAS – Avulsion des 3es molaires (2019) – protection des nerfs, sutures](https://www.has-sante.fr/upload/docs/application/pdf/2019-07/avulsion_des_3es_molaires_indications_techniques_et_modalites_-_recommandations.pdf)",
        "[SFCO – Antithrombotiques en chirurgie orale (2015)](https://www.jomos.org/articles/mbcb/pdf/2015/04/mbcb150044-s.pdf)"
      ]
    },
    {
      id: "troisieme-molaire",
      titre: "Avulsion de dent de sagesse (incluse ou non)",
      resume: "Indications, bilan, technique opératoire, antibioprophylaxie, antalgie et consignes selon la HAS.",
      duree: "45 à 60 min",
      niveau: "Interne / étudiant encadré",
      statut: "brouillon",
      sourceType: "Recommandation HAS 2019 + HAS 2026 (antibiotiques)",
      maj: "2026-11",
      hopital: [
        "**Dent incluse ou non** : même fiche ; l'antibioprophylaxie dépend de l'inclusion (dent incluse, enclavée ou en désinclusion : recommandée ; dent sur arcade : non recommandée en population générale, HAS 2026)",
        "**Anesthésie** : tronculaire et locale, selon la dent ; anesthésique **articaïne Septodont avec adrénaline 1/200 000**",
        "**Lambeau triangulaire**",
        "**Chlorhexidine 0,2 %** (**Eludril Perio**, Pierre Fabre, sans alcool, flacon avec godet doseur de 10 mL) : bain de bouche avant le geste et **irrigation** du site opératoire",
        "**Kit de chirurgie** : le service dispose de **kits contenant tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.) ; tous types de daviers et de syndesmotomes ; **pièces à main chirurgicales**",
        "**Sutures** : fil **Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm), **points simples ou en croix**",
        "**Protocole hémostase, pour les patients à risque hémorragique** (SFCO 2015 : patients traités par antithrombotiques) : **Cellistypt** (cellulose oxydée résorbable) **ou Pangen** (éponge hémostatique) dans l'alvéole, puis **acide tranexamique en ampoule** : **compresse imbibée posée sur l'alvéole** ou **application directe dans l'alvéole** ; **patient non à risque** : compression et sutures",
        "**Imagerie** : panoramique ou rétro-alvéolaire ; **CBCT** demandé si **rapport avec le nerf** ou **difficulté visible** sur la rétro-alvéolaire ou le panoramique",
        "**Ostéotomie à la fraise avec un moteur chirurgical** (pas de piézochirurgie), fraises **Zekrya**",
        "**Pas de chlorhexidine en gel** (bain de bouche à la chlorhexidine 0,2 %)",
        "**Une seule fiche** pour la dent de sagesse incluse ou non",
        "**Validation par l'encadrant** : **une fois la dent extraite**",
        "**Consignes** remises au patient ; **contrôle à 7 jours**"
      ],
      indications: [
        "Dent **symptomatique ou pathologique** : carie non restaurable, pathologie pulpaire/périapicale non traitable, cellulite/abcès/ostéomyélite, parodontopathie en relation, fracture",
        "Péricoronarite récidivante ou résistante aux traitements conservateurs",
        "Résorption de la dent adjacente, dent perturbant l'occlusion dynamique",
        "Kyste ou tumeur associés, dent dans un trait de fracture, avant radiothérapie ou chirurgie orthognathique, avant pose d'implant à proximité",
        "Indication orthodontique ou prothétique (dent non fonctionnelle, zone d'appui d'une prothèse amovible…)"
      ],
      contreIndications: [
        "**Non-indications (HAS 2019)** : prévenir l'encombrement antérieur ; dent incluse asymptomatique sans pathologie ; dent bien positionnée, fonctionnelle, sans carie, parodonte sain → suivi à 6 mois",
        "Sujet sain de plus de 30 ans sans symptôme : avulsion systématique non recommandée (surveillance clinique et radiographique)",
        "L'inclusion ou l'ectopie ne sont pas, en soi, des critères de décision : seuls comptent le caractère symptomatique et/ou pathologique"
      ],
      materiel: [
        "**Kit de chirurgie du service** : il contient **tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.)",
        "Antiseptique : bain de bouche chlorhexidine 0,1–0,2 % ou povidone iodée 10 % avant le geste (HAS 2026)",
        "Instrumentation de chirurgie : décolleur, écarteur, pince gouge, élévateurs, daviers, curette de Lucas",
        "**Moteur chirurgical** et **fraises Zekrya**",
        "**Irrigation à la chlorhexidine** (service) ; la HAS 2019 ne retient aucune supériorité d'un produit de lavage",
        "**Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm)",
        "Chlorhexidine 0,2 % en **bain de bouche** pour les suites (HAS 2019 : gel ou rinçage, grade B) ; **pas de gel au service**"
      ],
      alertes: [
        "**Protection du nerf lingual** : l'utilisation d'un rétracteur sous-périosté en position linguale augmente le risque d'altération de la sensibilité linguale (grade B).",
        "**Protection du nerf alvéolaire inférieur** : la découpe de la dent en plusieurs fragments permet le plus souvent d'éviter l'atteinte nerveuse. La **coronectomie est réservée à des cas très exceptionnels** (risque nerveux élevé, nerf traversant des racines fusionnées, preuve CBCT) et impose le suivi des racines laissées.",
        "**Antibioprophylaxie** : recommandée pour l'avulsion d'une dent incluse, ectopique ou en désinclusion (HAS 2026, grade A) : **amoxicilline 2 g per os 30 à 60 min avant** (enfant : 50 mg/kg, max 2 g). Alternatives si allergie : clarithromycine 500 mg, azithromycine 500 mg ou pristinamycine 1 g.",
        "Patients sous antithrombotiques ou à risque d'ostéonécrose : voir les fiches dédiées. L'avulsion de dents incluses est classée **à risque hémorragique élevé** par la SFCO 2015."
      ],
      etapes: [
        { titre: "Évaluation et planification", details: ["Vérifier l'indication (symptomatique / pathologique)", "Étudier le degré de difficulté et le rapport bénéfice/risque sur panoramique ± CBCT", "Informer et obtenir le consentement signé"] },
        { titre: "Préparation", details: ["Prescription pré-opératoire remise au patient (antibioprophylaxie si indiquée, antalgiques)", "Bain de bouche antiseptique avant le geste"] },
        { titre: "Abord", details: ["Anesthésie tronculaire et locale", "**Lambeau triangulaire** muco-périosté (service) ; aucune technique de lambeau n'est privilégiée par la HAS (grade B)", "Protection du nerf lingual (éviter le rétracteur sous-périosté lingual)"] },
        { titre: "Dégagement osseux et avulsion", details: ["**Ostéotomie à la fraise (moteur chirurgical, fraises Zekrya)** sous irrigation ; la HAS 2019 ne privilégie pas la piézochirurgie faute de données suffisantes (grade B)", "Section de la dent en plusieurs fragments si nécessaire", "Coronectomie : cas très exceptionnels uniquement"], validation: "dent extraite", astuce: "La découpe en fragments protège le plus souvent le nerf alvéolaire inférieur." },
        { titre: "Révision alvéolaire et sutures", details: ["Curetage : débris dentaires, poudre d'os, granulome, reliquat de sac péricoronaire", "**Lavage de la cavité à la chlorhexidine** (service ; aucun produit n'est démontré supérieur, HAS 2019)", "**Suture du lambeau recommandée** (HAS 2019) : **fil 4-0, points simples ou en croix** (service)", "**Patient à risque hémorragique** (SFCO 2015 : patient traité par antithrombotique) : **protocole hémostase** : **Cellistypt** ou **Pangen** dans l'alvéole, puis **acide tranexamique en ampoule** (compresse imbibée sur l'alvéole ou application directe)"] },
        { titre: "Mesures locales complémentaires", details: ["**Bain de bouche à la chlorhexidine** en post-opératoire (au service : à partir de **48 h**, **pendant 1 semaine**) pour prévenir l'alvéolite (HAS 2019 : gel ou rinçage, grade B) ; pas de gel au service", "PRF et régénération tissulaire guidée : **ne pas utiliser de façon systématique**"] },
        { titre: "Prescription et consignes", details: ["Antalgie : **paracétamol en première intention** ; ibuprofène 400 mg (sans contre-indication, hors contexte infectieux) ou association ibuprofène + paracétamol, à préférer au tramadol", "Feuille de consignes post-opératoires, avec le numéro à appeler ou l'hôpital le plus proche en cas de complication grave"] }
      ],
      suivi: [
        "**Contrôle à 7 jours** (cicatrisation) ; fils résorbables, pas de dépose",
        "Patient sous AVK/antiagrégants/AOD : **contrôle téléphonique à 24-48 h** (HAS 2019)",
        "Troisièmes molaires laissées en place : contrôle clinique et panoramique **tous les 2 ans** jusqu'à édification radiculaire complète (25-30 ans)"
      ],
      complications: [
        "**Les plus fréquentes** : **douleur, œdème, trismus** ; puis saignement, infection, alvéolite, lésions nerveuses ; rarement fracture mandibulaire ou projection dans le plancher buccal, le sinus ou la fosse infra-temporale",
        "**Alvéolite sèche** : pas d'antibiotique ; alvéolite suppurée : **antibiothérapie** seulement avec signes d'extension (HAS 2026)",
        "**Communication bucco-sinusienne** : **antibiothérapie** (HAS 2026) + **avis senior**"
      ],
      references: [
        "[HAS – Avulsion des 3es molaires : indications, techniques et modalités (mai 2019)](https://www.has-sante.fr/upload/docs/application/pdf/2019-07/avulsion_des_3es_molaires_indications_techniques_et_modalites_-_recommandations.pdf)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (juillet 2026)](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "La HAS 2019 évoque une antibioprophylaxie « 1 heure avant jusqu'à cicatrisation » : la recommandation 2026, plus récente, retient une dose unique pré-opératoire pour l'adulte."
      ]
    },
    {
      id: "fermeture-cbs",
      titre: "Fermeture d'une communication bucco-sinusienne (CBS)",
      resume: "Évaluation, préparation du sinus, fermeture par lambeau d'avancement vestibulaire de Rehrmann, antibiotiques et consignes.",
      duree: "1 séance, 45 à 60 min",
      niveau: "Interne / senior",
      statut: "brouillon",
      sourceType: "Revue 2019 (Int J Implant Dent) + revues 2018-2026 + HAS 2026 + SFCO 2015",
      maj: "2026-11",
      hopital: [
        "**Technique de fermeture : lambeau d'avancement vestibulaire de Rehrmann**",
        "**Kit de chirurgie** : le service dispose de **kits contenant tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.)",
        "**Chlorhexidine 0,2 %** : bain de bouche et irrigation",
        "**Sutures** : fil **Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm), points simples ou en croix",
        "**Hémostase** : compression et sutures ; **patient à risque hémorragique** : protocole hémostase (**Cellistypt** ou **Pangen**, puis **acide tranexamique** en ampoule)",
        "**Imagerie** : panoramique et CBCT **selon le cas**",
        "**Validation par l'encadrant** : la **fermeture** de la CBS",
        "**Consignes** remises au patient ; **contrôle à 7 jours**"
      ],
      indications: ["Communication entre la cavité buccale et le sinus maxillaire après avulsion d'une molaire ou prémolaire maxillaire", "Fistule bucco-sinusienne persistante"],
      contreIndications: ["**Sinusite non traitée** : traiter l'infection avant ou en même temps (la fermeture doit se faire dans un sinus sain)", "Corps étranger dans le sinus : l'éliminer avant la fermeture"],
      materiel: [
        "**Kit de chirurgie du service** : il contient **tout le matériel chirurgical** (seringue, davier, syndesmotome, curette de Lucas, pince gouge, etc.)",
        "Sérum physiologique et seringue pour le **lavage du sinus** par la CBS",
        "Anesthésique **articaïne Septodont avec adrénaline 1/200 000** ; **chlorhexidine 0,2 %**",
        "Bistouri, décolleur, ciseaux, pince gouge",
        "**Polysorb 4-0** (Covidien, tressé résorbable, aiguille CVF-23 1/2 cercle 17 mm) ; patient à risque hémorragique : **Cellistypt** ou **Pangen**",
        "Si besoin : boule de Bichat (lambeau de graisse), membrane résorbable"
      ],
      alertes: [
        "**Seuils** : une CBS de moins de 2 mm, non épithélialisée et sans infection peut cicatriser spontanément après formation d'un caillot ; **au-delà de 5 mm ou après plus de 3 semaines**, la fermeture chirurgicale est le plus souvent nécessaire.",
        "**Fermer dans un sinus sain** : lavage au sérum physiologique par la CBS jusqu'à liquide clair et antibiotiques avant la chirurgie si le sinus est infecté.",
        "**Antibiotiques (HAS 2026)** : communication bucco-sinusienne = événement per-opératoire avec **antibiothérapie recommandée : amoxicilline 1 g × 2/j pendant 5 jours** ; sinusite maxillaire aiguë d'origine dentaire : antibiothérapie recommandée, bithérapie amoxicilline + acide clavulanique en 1re intention (tableau 14).",
        "**Risque hémorragique élevé (SFCO 2015)** : fermeture d'une CBS = chirurgie à risque élevé ; patient sous antithrombotique : voir la fiche dédiée.",
        "**Lambeau de Rehrmann** : l'avancement réduit la hauteur du vestibule, ce qui peut gêner une prothèse ou un futur traitement implantaire (revue 2019) ; en informer le patient.",
        "**Pas de bouche fermée dans le sinus** : ne pas moucher ni éternuer bouche fermée.",
        "**Données récentes (aucune recommandation officielle)** : revue systématique 2025 : CBS **< 5 mm** prises en charge de façon conservatrice (matériaux hémostatiques), **> 5 mm** fermeture chirurgicale ; méta-analyse en réseau 2024 : **boule de Bichat** supérieure au lambeau d'avancement vestibulaire pour la fermeture et le risque de récidive (technique non utilisée au service pour l'instant) ; revue Cochrane 2018 : preuve de très faible qualité (un seul essai de 20 patients). Étude rétrospective 2026 : moins de complications avec une **antibiothérapie post-opératoire**, ce qui rejoint la HAS 2026."
      ],
      etapes: [
        { titre: "Temps 1 – Évaluation", details: ["Taille de la CBS, ancienneté, écoulement ; imagerie (panoramique, **CBCT selon le cas**) pour le défaut osseux et l'état du sinus", "Décision de technique avec le senior"], materiel: ["panoramique ± CBCT"] },
        { titre: "Temps 2 – Préparation du sinus", details: ["Si sinus infecté : **drainage et lavage au sérum physiologique** par la CBS jusqu'à liquide clair", "**Antibiothérapie** avant la chirurgie si indiquée (HAS 2026)"], materiel: ["sérum physiologique + seringue"] },
        { titre: "Temps 3 – Anesthésie et lambeau", details: ["Anesthésie locale ; **bain de bouche à la chlorhexidine**", "**Lambeau d'avancement vestibulaire de Rehrmann** : lambeau muco-périosté trapézoïdal à base large, décharges divergentes vers la base ; avivement des berges de la CBS et excision du trajet fistuleux ; **incision du périoste à la base du lambeau** pour l'allonger et l'avancer sans tension"], materiel: ["anesthésique", "bistouri", "décolleur", "ciseaux"] },
        { titre: "Temps 4 – Fermeture et sutures", details: ["Avancement du lambeau **sans tension**, bord appuyé sur de l'os sain et suturé à la muqueuse palatine ; **suture au fil 4-0**, points simples ou en croix ; irrigation à la chlorhexidine", "**Pas de comblement systématique de l'alvéole** sous un lambeau de fermeture : l'utilisation d'un **agent hémostatique intra-alvéolaire** est associée à plus de complications et de fistules persistantes (étude rétrospective 2026, 505 patients ; niveau de preuve faible). Le **PRF** et les **membranes de collagène** sont des options décrites dans la littérature, à discuter avec l'encadrant", "**Patient à risque hémorragique** : l'hémostase locale reste nécessaire ; choisir l'agent et son emplacement avec l'encadrant"], materiel: ["fil 4-0", "porte-aiguille", "chlorhexidine"], validation: "fermeture de la CBS" },
        { titre: "Temps 5 – Consignes et prescription", details: ["**Consignes remises au patient** : alimentation molle, **ne pas se moucher**, éternuer **bouche ouverte**, pas d'effort ni de sport intense", "**Antibiotiques selon la HAS 2026** (amoxicilline 1 g × 2/jour pendant 5 jours ; allergie aux pénicillines : alternatives de la fiche « Antibiotiques HAS 2026 »), antalgiques (**paracétamol en 1re intention**), **lavages du nez au sérum physiologique**"], materiel: ["fiche de consignes", "ordonnance"] }
      ],
      consignes: [
        "**Pas de mouchage** pendant les premières semaines ; éternuer **la bouche ouverte** ; éviter les efforts, le sport intense, les pailles et le tabac.",
        "**Alimentation** : molle, froide ou tiède, du côté opposé.",
        "**Nez** : **lavages du nez au sérum physiologique**, comme expliqué par l'équipe.",
        "**Antibiotiques** : les prendre comme prescrits.",
        "**Hygiène** : brosser doucement ; **bain de bouche à la chlorhexidine 0,2 %** à partir de **48 h**, **pendant 1 semaine**.",
        "**Consulter** en cas d'écoulement nasal purulent, de fièvre, de douleur sinusienne ou d'un liquide qui passe par le nez ; **en urgence, appeler le 15** ; en cas de besoin, vous pouvez **venir aux urgences dentaires**.",
        "**Contrôle à 7 jours**, puis selon l'évolution."
      ],
      erreurs: [
        "Fermer sur un sinus infecté sans traitement préalable",
        "Lambeau trop petit ou sous tension, appuyé sur de l'os non sain",
        "Sinus non évalué par l'imagerie",
        "Patient non prévenu : pas de mouchage, éternuer bouche ouverte",
        "Antibiotiques non prescrits ou mal expliqués"
      ],
      suivi: ["**Contrôle à 7 jours** (cicatrisation, tension du lambeau, absence de passage d'air), puis selon l'évolution"],
      complications: ["**Désunion du lambeau, fistule persistante** : **nouvelle intervention** selon l'**avis du senior**", "**Sinusite post-opératoire** : **drainage** et **antibiothérapie** selon la HAS 2026", "**Hématome, infection** : voir la conduite du service"],
      references: [
        "[Parvini P. et al. Decision-making in closure of oroantral communication and fistula. Int J Implant Dent 2019;5](https://pmc.ncbi.nlm.nih.gov/articles/PMC6441669/)",
        "[HAS – Prescription des antibiotiques en pratique bucco-dentaire (2026) – tableaux 5 et 14](https://has-sante.fr/jcms/p_3525810/fr/prescription-des-antibiotiques-en-pratique-bucco-dentaire)",
        "[SFCO – Antithrombotiques en chirurgie orale (2015) – annexe 1](https://www.jomos.org/articles/mbcb/pdf/2015/04/mbcb150044-s.pdf)",
        "[Dipalma G. et al. Management of oro-antral communication: a systematic review of diagnostic and therapeutic strategies. Diagnostics 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11765130/)",
        "[Oliva S. et al. The treatment and management of oroantral communications and fistulas: systematic review and network meta-analysis. Dent J 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11120370/)",
        "[Bakacak M.M. et al. Postoperative antibiotics after primary surgical closure of oroantral communications: retrospective multicenter study. Clin Oral Investig 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13627183/)",
        "[Krishanappa S.K.K. et al. Interventions for treating oro-antral communications and fistulae due to dental procedures. Cochrane Database Syst Rev 2018](https://pubmed.ncbi.nlm.nih.gov/30113083/)",
        "Autres techniques décrites dans la revue (suture directe pour les très petites CBS, lambeau palatin, boule de Bichat pour les grandes CBS) : non utilisées au service pour l'instant."
      ]
    },
    {
      id: "patient-antithrombotiques",
      titre: "Patient sous antithrombotiques",
      resume: "Gestion péri-opératoire des AVK, AOD, héparines et antiagrégants selon le risque hémorragique de l'acte (SFCO 2015).",
      duree: "Selon l'acte",
      niveau: "Interne / senior",
      statut: "brouillon",
      sourceType: "Recommandation SFCO 2015 (avec la SFC et le GIHP)",
      maj: "2026-11",
      indications: ["Acte de chirurgie orale chez un patient sous AVK, AOD, héparine ou antiagrégants plaquettaires"],
      contreIndications: [
        "Plateau technique insuffisant pour gérer un saignement : acte contre-indiqué",
        "Bloc du nerf alvéolaire inférieur : déconseillé ; **bilatéral : contre-indiqué** (hématome latéro-pharyngé, dyspnée)",
        "Prélèvement symphysaire, greffe gingivale avec prélèvement palatin : contre-indiqués",
        "Patient porteur d'une **prothèse valvulaire sous AVK** : implants, chirurgie pré-implantaire et parodontale contre-indiqués"
      ],
      materiel: [
        "Hémostase chirurgicale conventionnelle : compression + sutures",
        "Hémostatiques locaux résorbables : éponges de collagène ou de gélatine, gaze de cellulose ; **au service, pour les patients à risque hémorragique : Cellistypt** (cellulose oxydée résorbable) **ou Pangen** (éponge hémostatique)",
        "Colle de cyanoacrylate",
        "**Acide tranexamique en ampoule** (mesure préventive pour les actes à faible risque hémorragique, **utilisé au service pour les patients à risque hémorragique**) : **compresse imbibée posée sur l'alvéole** ou **application directe dans l'alvéole**",
        "Pour les actes à haut risque : électrocoagulation mono ou bipolaire, colle fibrine (fibrinogène + thrombine humains)"
      ],
      alertes: [
        "**Ne jamais interrompre un antithrombotique de sa propre initiative** : l'évaluation du risque thrombotique revient au médecin prescripteur.",
        "Le chirurgien évalue le risque hémorragique de l'acte ; **l'hémostase locale est systématique** (grade A).",
        "Programmer le matin et en début de semaine ; approche segmentaire en cas d'avulsions multiples.",
        "**AINS et aspirine contre-indiqués** chez le patient sous AVK ; antalgiques : paracétamol, dérivés opiacés.",
        "Patient joignable après l'acte : continuité des soins assurée (réseau ou service hospitalier d'astreinte)."
      ],
      etapes: [
        { titre: "Classer le risque hémorragique de l'acte", details: [
          "**Sans risque** : anesthésie locale, détartrage → compression simple",
          "**Faible** : avulsion simple, avulsions multiples dans un même quadrant, chirurgie endodontique/périapicale et kystes < 3 cm, chirurgie muco-gingivale (hors prélèvement palatin), chirurgie pré-orthodontique d'une dent incluse, **implant unitaire**, dégagement d'implant, biopsie ≤ 1 cm",
          "**Élevé** : avulsions dans plusieurs quadrants, **avulsion de dent incluse**, implants multiples, élévation de sinus, greffes osseuses, fermeture de communication bucco-sinusienne, kystes > 3 cm, exérèses > 1 cm, intervention > 1 h"
        ] },
        { titre: "Antiagrégants plaquettaires (aspirine, clopidogrel…)", details: [
          "**Monothérapie : poursuite** pour tout acte de chirurgie orale (grade A pour les avulsions)",
          "**Bithérapie : poursuite** si risque hémorragique faible (grade B pour les avulsions) ; si risque élevé, avis obligatoire du médecin prescripteur",
          "Si arrêt décidé par le prescripteur (risque élevé) : clopidogrel 5 jours, prasugrel 7 jours, ticagrelor 3 à 5 jours ; l'aspirine est poursuivie",
          "Il n'existe pas d'examen biologique prédictif du risque hémorragique"
        ] },
        { titre: "AVK (warfarine, acénocoumarol, fluindione)", details: [
          "**Acte à faible risque : poursuite des AVK.** INR mesuré **idéalement dans les 24 h, au maximum 72 h avant** l'acte ; il doit être **stable et inférieur à 4** (grade A)",
          "INR ≥ 4 ou instable : **reporter l'intervention**, informer le prescripteur",
          "Acte à risque élevé : avis du prescripteur indispensable. Risque thrombotique faible : fenêtre thérapeutique 48-72 h, AVK arrêtés 24 h avant (acénocoumarol) ou 48 h avant (warfarine, fluindione), INR pré-opératoire ≤ 1,5, reprise dans les 24-48 h",
          "Risque thrombotique élevé : prise en charge hospitalière, relais par héparine à dose curative (exceptionnel)"
        ] },
        { titre: "AOD (dabigatran, rivaroxaban, apixaban)", details: [
          "**Acte à faible risque : poursuite.** Geste dans la demi-journée qui précède la prochaine prise ; préciser âge, indication, dose, nombre de prises et heure de la dernière prise",
          "Acte à risque élevé : avis du prescripteur ; risque thrombotique faible → arrêt la veille et le jour de l'intervention (fenêtre de 48 h), reprise le lendemain",
          "Éviter la clarithromycine chez le patient sous AOD",
          "Pas d'examen biologique prédictif du risque hémorragique"
        ] },
        { titre: "Héparines", details: [
          "**Acte à faible risque : poursuite**, geste dans la demi-journée qui précède la prochaine injection",
          "Acte à risque élevé : arrêt possible 6-8 h avant (HNF) ou 24 h avant (HBPM) par le prescripteur",
          "TCA ou activité anti-Xa pré-opératoire non nécessaires"
        ] },
        { titre: "Réaliser le geste", details: [
          "Gestes atraumatiques, hémostase locale **systématique** (compression, sutures, éponge de collagène/gélatine, cellulose, colle de cyanoacrylate ; acide tranexamique)",
          "Éviter le bloc du nerf alvéolaire inférieur ; privilégier les techniques mini-invasives et l'imagerie 3D pour les implants"
        ] },
        { titre: "Conduite en cas de saignement post-opératoire", details: [
          "Compression mécanique d'abord",
          "Si non contrôlé : **reprise chirurgicale de l'hémostase** (anesthésie locale, curetage du caillot ou décaillotage par aspiration, révision de la plaie, hémostase locale)",
          "Saignement persistant malgré la reprise : hospitalisation jusqu'à contrôle"
        ] }
      ],
      suivi: ["Contrôle téléphonique à 24-48 h (HAS 2019)", "INR de contrôle dans les jours suivant une prescription d'amoxicilline (± acide clavulanique), clindamycine, métronidazole, macrolides (hors spiramycine) chez le patient sous AVK", "Une antibioprophylaxie en prise unique (amoxicilline 2 g ou clindamycine 600 mg 1 h avant) ne modifie pas l'INR (SFCO 2015)"],
      references: [
        "[SFCO – Gestion péri-opératoire des patients traités par antithrombotiques en chirurgie orale, recommandations de juillet 2015 (avec la Société française de cardiologie et le GIHP)](https://www.jomos.org/articles/mbcb/pdf/2015/04/mbcb150044-s.pdf)",
        "Les annexes de la SFCO renvoient aussi aux recommandations HAS 2008 (AVK) et HAS 2013 (antiagrégants). Vérifier l'existence d'une mise à jour plus récente avant usage clinique."
      ]
    }
  ]
});
