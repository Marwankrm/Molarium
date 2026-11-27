// Synthèse des matériaux du service (notices des fabricants lues ou partielles, thèses). Générée à partir des photos du tiroir et des notices ; à valider par l'encadrant.
// statut : "lue" (notice lue), "part" (notice partielle), "abs" (notice non trouvée). Même balisage que les fiches : **gras**.
window.MATERIAUX = {
 "sections": [
  {
   "id": "provisoires",
   "titre": "Provisoires, scellement et résines",
   "produits": [
    {
     "id": "irm-dentsply-sirona",
     "nom": "IRM (Dentsply Sirona)",
     "type": "Ciment à l'oxyde de zinc-eugénol renforcé (ISO 3107, type II)",
     "statut": "lue",
     "ind": [
      "Obturation **intermédiaire** (temporaire, moins d'un an) directe",
      "Base sous une restauration définitive **sans résine** (amalgame, or)"
     ],
     "ci": [
      "Hypersensibilité à l'**eugénol** ou au **PMMA**",
      "**Coiffage pulpaire direct**",
      "**Base sous adhésif, composite ou ciment contenant de la résine**"
     ],
     "met": [
      "**Digue** recommandée ; en cavité profonde, dentine à moins de 1 mm de la pulpe recouverte d'un liner d'hydroxyde de calcium durcissant (**Dycal**)",
      "Prise initiale environ **5 min** après le début du mélange ; chaleur, humidité et excès de poudre l'accélèrent",
      "Ajuster l'occlusion à la fraise ronde, pas de polissage ; **déposer et restaurer au plus tard dans l'année**",
      "Version capsules : activation puis amalgamateur (temps selon l'appareil). Version poudre/liquide : se reporter à la notice correspondante (non lue ici)"
     ],
     "ret": [
      "L'eugénol **gêne la prise des (méth)acrylates** : ne pas laisser d'IRM sous un composite ou un ciment résine",
      "**Ne convient pas comme obturation canalaire** ; données insuffisantes pour un usage en canal (ciment, pansement, médicament, réparation)"
     ],
     "src": [
      {
       "t": "Notice Dentsply Sirona IRM (multilingue)",
       "u": "https://proclinic.es/media/proclinic-es/annexes/Is_3018_es_fr_pt_en_it_pl.pdf"
      }
     ],
     "alias": [
      "IRM"
     ]
    },
    {
     "id": "cvi-photopolym-risable-fuji-ii-lc-capsul",
     "nom": "CVI photopolymérisable : Fuji II LC capsules (GC)",
     "type": "Verre ionomère modifié par résine (capsule)",
     "statut": "lue",
     "ind": [
      "Cavités de classes III, V et classe I limitée",
      "Dents temporaires, reconstitution, restauration radio-opaque, gériatrie",
      "**Base ou liner**"
     ],
     "ci": [
      "**Coiffage pulpaire direct** (utiliser l'hydroxyde de calcium)",
      "Allergie connue au verre ionomère"
     ],
     "met": [
      "Conditionneur (**GC Cavity Conditioner**) puis rinçage et séchage **sans dessécher**",
      "Capsule : la secouer, **enfoncer le piston 2 s**, mélanger **10 s** (≈ 4 000 tr/min) tout de suite",
      "Capsule dans l'applicateur, **2 clics**, injecter en évitant les bulles ; **temps de travail 3 min 15 à 23 °C**",
      "**Photopolymériser 20 s** ; profondeur de polymérisation 1,8 mm (teinte A2) : **par couches** au-delà",
      "Finition sous spray ; vernis final (**Fuji Varnish**, **Fuji Coat LC** ou **G-Coat Plus**)"
     ],
     "ret": [
      "La notice ne cite **pas** l'obturation provisoire d'un accès endodontique : cet usage est celui du **Fuji Triage** (voir plus bas)"
     ],
     "src": [
      {
       "t": "Notice GC Fuji II LC capsules (Europe)",
       "u": "https://gc.dental/europe/sites/europe.gc.dental/files/products/downloads/fuji2lc/ifu/4795_IFU_Fuji_II_LC_Capsules_E.pdf"
      }
     ],
     "alias": [
      "Fuji II LC",
      "CVI photopolymérisable"
     ]
    },
    {
     "id": "fuji-triage-gc-capsule",
     "nom": "Fuji Triage (GC), capsule",
     "type": "Verre ionomère à prise rapide (teinte rose photopolymérisable)",
     "statut": "part",
     "ind": [
      "Protection des sillons, des surfaces radiculaires et de l'émail immature",
      "Hypersensibilité",
      "**Obturation provisoire d'un accès endodontique**, restauration intermédiaire"
     ],
     "ci": [
      "**Coiffage pulpaire direct**",
      "Allergie connue au verre ionomère"
     ],
     "met": [
      "Activer la capsule **juste avant** le mélange et l'utiliser aussitôt, en couche mince",
      "Teinte rose photopolymérisable (lampe de plus de 700 mW/cm²)",
      "Protéger avec un vernis (Fuji Varnish ou Coat LC) quand la surface devient mate"
     ],
     "ret": [
      "Résumé de la notice (sources secondaires) : temps de travail et de prise à vérifier sur la notice du lot"
     ],
     "src": [
      {
       "t": "Notice GC Fuji Triage (Amérique)",
       "u": "https://www.gc.dental/america/sites/america.gc.dental/files/products/downloads/gcfujitriage/ifu/gc-fuji-triage-ifu.pdf"
      }
     ],
     "alias": [
      "Fuji Triage"
     ]
    },
    {
     "id": "unifast-trad-gc",
     "nom": "Unifast Trad (GC)",
     "type": "Résine acrylique autopolymérisable (poudre et liquide)",
     "statut": "lue",
     "ind": [
      "Réparation de prothèses",
      "**Couronnes provisoires**",
      "Porte-empreintes individuels (dents isolées), plaques orthodontiques, attelles"
     ],
     "ci": [
      "Allergie connue aux **méthacrylates**"
     ],
     "met": [
      "**1 g de poudre pour 0,5 mL de liquide** (premières graduations)",
      "Mélanger **10 à 15 s** ; consistance pâteuse à 20-30 s ; **tout terminer en 2 min** après le début du mélange",
      "Teinte ivoire pour les couronnes, rose pour les gencives"
     ],
     "ret": [
      "Liquide **très inflammable** ; ne pas mélanger avec les composants d'une autre marque"
     ],
     "src": [
      {
       "t": "Notice GC Unifast Trad (01/2024)",
       "u": "https://www.gc.dental/europe/sites/europe.gc.dental/files/products/downloads/unifasttrad/ifu/23896_IFU_Unifast_TRAD_W_Rev.%2001_2024.pdf"
      }
     ],
     "alias": [
      "Unifast Trad",
      "Unifast"
     ]
    },
    {
     "id": "temp-bond-et-temp-bond-ne-kerr",
     "nom": "Temp-Bond et Temp-Bond NE (Kerr)",
     "type": "Ciments provisoires à l'oxyde de zinc, avec et sans eugénol (type I)",
     "statut": "lue",
     "ind": [
      "Scellement provisoire de couronnes, bridges, inlays, onlays et attelles"
     ],
     "ci": [
      "**Temp-Bond** contient de l'eugénol : pas de patient allergique à l'eugénol",
      "**Temp-Bond NE** peut contenir des traces d'eugénol",
      "Pas de contact avec la pulpe"
     ],
     "met": [
      "Tube : **longueurs égales** de base et d'accélérateur, mélanger environ **30 s**",
      "Sécher la dent et la restauration, **couche mince** dans la restauration provisoire, sceller fermement",
      "Après la prise, retirer l'excès au détartreur",
      "Temps de travail au moins 1 min 30 (tube) et prise en 7 min au plus"
     ],
     "ret": [
      "On peut obtenir un ciment **moins dur** en ajoutant jusqu'à 25 % de vaseline blanche"
     ],
     "src": [
      {
       "t": "Notice Kerr Temp-Bond / Temp-Bond NE",
       "u": "https://admin3334.webygroup.sk/obchod_homedir/data/3129/prilohy/nav-ifu-temp-bond-temp-bond-ne-20170719-ml.pdf"
      }
     ],
     "alias": [
      "Temp-Bond NE",
      "Temp-Bond",
      "TempBond"
     ]
    },
    {
     "id": "durelon-3m",
     "nom": "Durelon (3M)",
     "type": "Ciment polycarboxylate de zinc (poudre et liquide, ou capsules)",
     "statut": "part",
     "ind": [
      "Scellement de couronnes, bridges, inlays et onlays",
      "Fond de cavité"
     ],
     "ci": [
      "Non adapté aux armatures en **titane** (étiquette allemande et italienne)"
     ],
     "met": [
      "Libère du fluor, adhère à l'émail et à la dentine, pH proche de la neutralité",
      "Rapport poudre/liquide et temps de travail : **notice complète non obtenue**"
     ],
     "ret": [
      "Notice d'utilisation à consulter avant tout usage"
     ],
     "src": [
      {
       "t": "Fiche produit 3M Canada",
       "u": "https://3mcanada.ca/3M/en_CA/p/d/v000154694"
      }
     ],
     "alias": [
      "Durelon"
     ]
    },
    {
     "id": "pattern-resin-ls-gc",
     "nom": "Pattern Resin LS (GC)",
     "type": "Résine acrylique pour maquettes (calcinable)",
     "statut": "lue",
     "ind": [
      "Chapes coniques de couronnes télescopiques, inlay, barres et crochets, bridge Maryland",
      "Attelle provisoire de soudure",
      "Reconstitution coronaire en bouche, suprastructures implantaires"
     ],
     "ci": [
      "Sensibilisation possible : arrêter en cas de réaction allergique"
     ],
     "met": [
      "**Technique au pinceau** : pinceau humecté de liquide, pris dans la poudre, déposé grain par grain",
      "Prise en **3 min** à 23 °C ; séparateur sur un modèle plâtre"
     ],
     "ret": [
      "Contient du **méthacrylate de méthyle** ; liquide **très inflammable** ; éviter le contact muqueux en bouche"
     ],
     "src": [
      {
       "t": "Notice GC Pattern Resin",
       "u": "https://www.gc.dental/europe/sites/europe.gc.dental/files/products/downloads/patternresin/ifu/IFU_Pattern_Resin_W.pdf"
      }
     ],
     "alias": [
      "Pattern Resin LS",
      "Pattern Resin"
     ]
    },
    {
     "id": "tenons-dentoclic-itena-clinical",
     "nom": "Tenons Dentoclic (Itena Clinical)",
     "type": "Tenons métalliques en inox 316L et titane TA6V, tenons calcinables, forets",
     "statut": "lue",
     "ind": [
      "**Tenon métallique** (inox ou titane) : **tenon provisoire** et **tenon d'empreinte** pour l'inlay-core, par voie indirecte",
      "**Tenon calcinable** correspondant : **à envoyer au laboratoire** avec l'empreinte, pour la coulée de l'inlay-core"
     ],
     "ci": [
      "Tenons **calcinables** : ni empreinte, ni reconstitution corono-radiculaire directe"
     ],
     "met": [
      "Forets : **Gates ou Largo** (gutta), **pilotes**, puis cylindro-coniques ou coniques ; contre-angle lent, **10 000 tr/min au plus**",
      "Vérifier l'intégrité de la racine, garder des parois dentinaires suffisantes",
      "**Empreinte** : tenon métallique en place ; envoyer au laboratoire le **tenon calcinable de même référence**",
      "**Provisoire** : tenon métallique de même diamètre, ciment provisoire **seulement sur les bords de la couronne**"
     ],
     "ret": [
      "**Ne pas oublier d'envoyer le tenon calcinable correspondant au laboratoire**",
      "Le calcinable est plus fin de 2/100 mm : toujours l'associer au métallique de même référence",
      "Tenons métalliques à stériliser avant usage (autoclave 134 °C, 18 min) ; calcinables non stérilisables"
     ],
     "src": [
      {
       "t": "Notice Dentoclic",
       "u": "https://dvd-dental.com/content/documents/54-970/VafR1BVF4k9TEt6e3DayRhx4LRbRfbei.pdf"
      }
     ],
     "alias": [
      "Dentoclic"
     ]
    },
    {
     "id": "forets-cylindro-coniques-dentoclic-itena",
     "nom": "Forets cylindro-coniques Dentoclic (Itena Clinical)",
     "type": "Forets pour contre-angle, pour préparer le logement du tenon radiculaire (boîtes de 4 forets par diamètre)",
     "statut": "lue",
     "instrument": true,
     "alias": [
      "forets cylindro-coniques",
      "foret cylindro-conique",
      "forets cylindro-coniques Itena"
     ],
     "ind": [
      "**Préparer le logement du tenon radiculaire** selon le choix du praticien",
      "Au service : **RMIPP**, pour mettre le canal **aux dimensions du tenon cylindro-conique**, après la désobturation aux Gates et Largo"
     ],
     "ci": [],
     "met": [
      "**Un diamètre par couleur** : violet **1 mm**, blanc **1,2 mm**, jaune **1,3 mm**, rouge **1,4 mm**, bleu **1,5 mm**, vert **1,6 mm**, noir **1,7 mm**",
      "Choisir le foret de la **même couleur que le tenon** (correspondance colorimétrique forets / tenons)",
      "Le diamètre du tenon se choisit avec le **gabarit de la notice** posé sur la **radiographie périapicale**"
     ],
     "ret": [
      "**Remplacer les forets toutes les 40 à 60 utilisations** ; **stérilisables à l'autoclave** (134 °C, 18 min)"
     ],
     "src": [
      {
       "t": "Itena Clinical, Dentoclic Forets",
       "u": "https://itena-clinical.com/produit/dentoclic-forets/"
      },
      {
       "t": "Notice Dentoclic Fibre de verre (Itena Clinical)",
       "u": "https://itena-clinical.com/wp-content/uploads/2026/06/DENTOCLIC_Notice_FDV_IND-8.pdf"
      }
     ]
    },
    {
     "id": "silan-it-itena-clinical",
     "nom": "Silan-IT (Itena Clinical)",
     "type": "Agent de couplage pour céramique : silane monocomposant (flacon de 5 mL)",
     "statut": "lue",
     "ind": [
      "**Primaire** : adhésion durable entre le composite de scellement et les restaurations en **vitrocéramique ou céramique à base d'oxyde**, en **métal**, en **composite** et les restaurations avec **tenon en fibre de verre**",
      "Au service : **silane du tenon fibré** (RMIPP, inlay-core, tenon)"
     ],
     "ci": [
      "Ne convient pas en cas d'**exposition pulpaire** ni de pulpite nécessitant un traitement",
      "**Hypersensibilité** possible à un composant",
      "La résine de méthacrylate non polymérisée peut provoquer une **dermatite de contact** : éviter la peau, les yeux et les tissus mous"
     ],
     "met": [
      "Appliquer une quantité suffisante dans l'**intrados** de la restauration en porcelaine **mordancée ou sablée**, ou sur la structure en céramique **sablée** (zircone, alumine) ; pour le tenon fibré : sur **toute la surface** du tenon",
      "Laisser **immobile 60 secondes**, **sans toucher la surface avec les doigts**",
      "**Sécher à l'air**",
      "Micro-brosse **à usage unique** (une par patient) ; **reboucher le flacon aussitôt** (solvants inflammables, évaporation rapide)",
      "Compatible avec les adhésifs photopolymérisables ou à prise duale"
     ],
     "ret": [
      "Ne plus utiliser si **rien ne sort du flacon** alors qu'il en reste, ou si une **résine d'aspect soyeux** apparaît à l'application",
      "Conservation : **2 à 25 °C**, à l'abri de la lumière, **2 ans** à partir de la fabrication"
     ],
     "src": [
      {
       "t": "Notice Silan-IT (Itena Clinical), reçue du service",
       "u": "#/materiaux"
      },
      {
       "t": "Fiche produit Itena Clinical (04/2024)",
       "u": "#/materiaux"
      },
      {
       "t": "Fiche de la RMIPP (site)",
       "u": "#/prothese-fixee/rmipp"
      }
     ],
     "alias": [
      "Silan-IT"
     ]
    },
    {
     "id": "relyx-unicem-2",
     "nom": "RelyX Unicem 2 (3M)",
     "type": "Ciment résine auto-adhésif (cartouche avec embout mélangeur et Endo Tip)",
     "statut": "part",
     "ind": [
      "Au service : **scellement du tenon fibré, pour la RMIPP uniquement** (annotation du service)"
     ],
     "ci": [
      "Notice du fabricant **non lue** : contre-indications à vérifier"
     ],
     "met": [
      "Installer l'**embout mélangeur** puis l'**Endo Tip** ; **purger** une petite quantité avant utilisation",
      "Injecter **du fond du canal vers la partie coronaire**, en retirant progressivement l'embout (évite les bulles)",
      "Enduire légèrement le tenon de ciment, l'insérer **immédiatement, pression constante** ; retirer les excès avant la polymérisation finale",
      "**Photopolymériser 40 s** ; tenon opaque : la prise chimique suffit, photopolymériser la partie coronaire si possible"
     ],
     "ret": [
      "Les autres collages se font au **Panavia V5**"
     ],
     "src": [
      {
       "t": "Fiche de la RMIPP (site)",
       "u": "#/prothese-fixee/rmipp"
      }
     ],
     "alias": [
      "RelyX Unicem 2",
      "RelyX"
     ]
    },
    {
     "id": "panavia-v5-kuraray",
     "nom": "Panavia V5 (Kuraray) : prétraitement et collage",
     "type": "Ciment résine de collage avec Tooth Primer et Clearfil Ceramic Primer Plus",
     "statut": "lue",
     "ind": [
      "Collage des restaurations prothétiques sur émail ou dentine (inlay-core, inlays, onlays, couronnes, zircone)"
     ],
     "ci": [
      "Notice complète non lue (feuilles du fabricant affichées au service, la feuille de collage est floue sur la photo)"
     ],
     "met": [
      "**Tooth Primer** : appliquer sur la dent, laisser agir **20 s**, sécher",
      "**Clearfil Ceramic Primer Plus** : appliquer et sécher, sur **métal, zircone, piliers, vitrocéramique, tenons en fibre de verre et composites**",
      "**Métal, zircone, piliers** : **sablage**, rincer, sécher, puis Clearfil Ceramic Primer Plus",
      "**Vitrocéramique** : **acide fluorhydrique**, rincer, sécher, puis Clearfil Ceramic Primer Plus ; **si le laboratoire a déjà appliqué l'HF : acide phosphorique seulement** pour nettoyer la céramique",
      "**Tenons en fibre de verre** : gel de mordançage **K-Etchant**, rincer, sécher, puis Clearfil Ceramic Primer Plus ; **composites** : sablage, K-Etchant, rinçage, séchage, Clearfil Ceramic Primer Plus",
      "**Temps** (feuille du service) : travail **2 min** après le premier apport (23 °C), **60 s** après insertion en bouche (37 °C) ; **tack-cure 3-5 s** pour retirer l'excès ; polymérisation finale **10 s** (LED) ou **3 min** en auto (37 °C)"
     ],
     "ret": [
      "Teinte **opaque** : prise chimique uniquement",
      "Détails du collage : voir les fiches de prothèse fixée du site"
     ],
     "src": [
      {
       "t": "Feuille Kuraray affichée au service (12/2014)",
       "u": "https://plandent.fi/globalassets/catalog-resources/fi1/tarvikkeet/protetiikka/kiinnityssementit/panavia_v5-dfu-kuvilla.pdf"
      }
     ],
     "alias": [
      "Panavia V5"
     ]
    },
    {
     "id": "g-cem-linkforce-gc",
     "nom": "G-CEM LinkForce (GC), avec G-Multi Primer et G-Premio Bond",
     "type": "Ciment résine de collage (photopolymérisable), primaire pour restauration et adhésif GC",
     "statut": "part",
     "ind": [
      "**Collage des tenons et des inlay-core** (feuille du service « Technique de collage pour tenons et inlay core »)",
      "**Collage des inlays, onlays, couronnes et bridges** (feuille « … pour inlays, onlays, couronnes & bridges »)"
     ],
     "ci": [],
     "met": [
      "**Tenon ou inlay-core, préparation de la restauration** : nettoyer à l'**alcool**, appliquer le **G-Multi Primer**, sécher à la seringue à air",
      "**Espace canalaire** : nettoyer au **NaOCl ou à l'EDTA**, rincer et sécher soigneusement ; mélanger **G-Premio Bond et DCA, ratio 1:1** ; appliquer dans le canal, laisser agir **20 s** ; sécher **sous pression d'air maximum 5 s** ; retirer les excès d'adhésif à la pointe de papier",
      "**Collage du tenon** : extraire le **G-CEM LinkForce** dans le canal, insérer **aussitôt** le tenon, retirer les excès ; **photopolymériser 20 s** par surface ou joint (halogène/LED 700 mW/cm²) ; laisser en place **4 min** après l'insertion, puis poursuivre la reconstitution",
      "**Inlay, onlay, couronne, bridge, essayage** : retirer le provisoire, nettoyer soigneusement ; vérifier l'ajustage et l'occlusion (au besoin avec la **G-CEM LinkForce Try-In Paste**) ; retirer la restauration et **rincer à l'eau**",
      "**Préparation de la restauration** (selon le fabricant) : **céramique vitreuse** : mordançage à l'**acide fluorhydrique**, rinçage, séchage ; **céramique hybride ou composite** : **sablage** (pour Cerasmart ; sinon acide fluorhydrique), soufflage, rinçage, séchage ; puis, pour toutes, **G-Multi Primer** et séchage à la seringue à air",
      "**Préparation de la dent** : rincer et sécher la dent préparée ; mordançage au choix : **auto-mordançage, mordançage sélectif ou mordançage total**, puis rincer et sécher",
      "**Mode photopolymérisable** : appliquer le **G-Premio Bond**, patienter **10 s**, sécher **sous pression d'air maximum 5 s**, **photopolymériser 10 s** (halogène/LED 700 mW/cm²)"
     ],
     "ret": [
      "Source : les **deux feuilles affichées au service** (photo) ; la partie « alternative : prise duale » de la 2e feuille n'est pas lisible sur la photo",
      "Le site indique par ailleurs le **Panavia V5** et le **RelyX Unicem 2** pour le collage : à faire coïncider avec l'usage réel du service"
     ],
     "src": [
      {
       "t": "Feuilles de protocole du service (GC) : collage des tenons et inlay-core, collage des inlays, onlays, couronnes et bridges",
       "u": "#/materiaux"
      }
     ],
     "alias": [
      "G-CEM LinkForce",
      "G-Multi Primer",
      "G-Premio Bond"
     ]
    },
    {
     "id": "porcelain-etch-et-silane-ultradent",
     "nom": "Porcelain Etch & Silane (Ultradent)",
     "type": "Acide fluorhydrique tamponné en gel et silane monocomposant",
     "statut": "lue",
     "ind": [
      "Mordançage de la céramique fracturée (réparation) et des facettes, couronnes ou inlays en céramique au cabinet",
      "Mordançage de couronnes en céramique avant le collage de brackets"
     ],
     "ci": [
      "Allergies : se reporter au document sur les allergènes du produit ; en cas de réaction, rincer abondamment à l'eau et faire consulter le médecin"
     ],
     "met": [
      "Aviver la céramique à la fraise diamantée (retirer les anciens composites) ; **digue ou barrière gingivale** pour protéger les tissus",
      "**Porcelain Etch 90 s** ; **aspiration à haut débit** pendant tout le mordançage ; aspirer l'acide, rincer, sécher : aspect **givré**",
      "**Ultra-Etch 5 s** pour retirer les sels de céramique, rincer, sécher",
      "**Silane 60 s** (sécher à l'air sans huile si la surface n'est pas sèche), puis adhésif et matériau de restauration"
     ],
     "ret": [
      "L'HF **irrite les voies respiratoires** : lunettes, gants, embouts à usage unique",
      "Si l'acide touche **dentine ou émail**, il diminue l'effet de l'acide phosphorique : mordancer d'abord les tissus voisins"
     ],
     "src": [
      {
       "t": "Notice Ultradent affichée au service",
       "u": "#/materiaux"
      }
     ],
     "alias": [
      "Porcelain Etch"
     ]
    }
   ]
  },
  {
   "id": "restauration",
   "titre": "Protection pulpaire, verres ionomères et restauration",
   "produits": [
    {
     "id": "gc-cavity-conditioner",
     "nom": "GC Cavity Conditioner",
     "type": "Acide polyacrylique à 20 % (conditionneur de cavité)",
     "statut": "lue",
     "ind": [
      "Éliminer la boue dentinaire et conditionner émail et dentine **avant un verre ionomère**"
     ],
     "ci": [
      "Allergie connue à l'acide polyacrylique"
     ],
     "met": [
      "Appliquer **10 s** à la boulette de coton ou à l'éponge",
      "**Rincer abondamment**, sécher **sans dessécher**",
      "Appliquer ensuite le verre ionomère ou verre hybride",
      "Refermer le flacon aussitôt"
     ],
     "ret": [
      "Ne pas confondre avec le **Dentin Conditioner** (acide polyacrylique à 10 %, 20 s)"
     ],
     "src": [
      {
       "t": "Notice GC Cavity Conditioner (10/2024)",
       "u": "https://www.gc.dental/europe/sites/europe.gc.dental/files/products/downloads/cavityconditioner/ifu/IFU_Cavity_Conditioner_W_0508513TZ.pdf"
      }
     ],
     "alias": [
      "GC Cavity Conditioner",
      "Cavity Conditioner"
     ]
    },
    {
     "id": "henry-schein-etch-gel-37",
     "nom": "Etch Gel 37 % (Henry Schein)",
     "type": "Gel d'acide phosphorique à 37 % (seringue de 3 mL, embout courbe)",
     "statut": "part",
     "ind": [
      "Mordançage de l'émail et de la dentine en **mordançage-rinçage** (total-etch) avant l'adhésif",
      "Au service : mordançage avant le **G-Premio Bond** (fiches de composite)"
     ],
     "ci": [
      "Produit **corrosif** (mention « Danger ») : **brûlures graves de la peau** et **lésions oculaires graves** ; peut aussi corroder les **métaux**",
      "**Ne pas respirer** les vapeurs ni les brouillards ; ne pas manger, boire ni fumer en l'utilisant ; se laver les mains après",
      "Porter **lunettes**, **gants** et vêtements de protection ; protéger le patient (digue, lunettes) pour éviter tout contact avec la peau, les yeux et les muqueuses"
     ],
     "met": [
      "Temps utilisés dans les fiches du site : **10 à 15 s**, **rinçage 5 s**, séchage doux (notice GC du G-Premio Bond)",
      "Fiche produit Henry Schein : gel de faible viscosité, **autolimitant** (arrête le mordançage à la bonne profondeur)",
      "**En cas de contact** : **peau** : laver abondamment à l'eau **au moins 20 minutes** et retirer les vêtements souillés ; **yeux** : rincer à l'eau claire **20 à 30 minutes** (retirer les lentilles), avis médical immédiat ; **ingestion** : rincer la bouche, **ne pas faire vomir**, avis médical ou centre antipoison",
      "**Stockage** : dans le flacon d'origine, au frais, dans un endroit ventilé et fermé à clé ; éviter le contact avec les **métaux** et les oxydants",
      "**Déversement** : absorber avec un matériau inerte (argile) et éliminer comme déchet spécial"
     ],
     "ret": [
      "Les temps varient selon les fabricants (30 s sur émail pour certains gels) : **vérifier la notice de la seringue**",
      "La fiche de sécurité reçue concerne l'**Etch Gel 40 %** de Henry Schein (acide phosphorique 38 à 42 %, gel bleu, pH 1 à 1,5), version nord-américaine : **à vérifier** qu'elle correspond bien à votre seringue à 37 %"
     ],
     "src": [
      {
       "t": "Fiche de sécurité Henry Schein, Etch Gel 40 % (mai 2020)",
       "u": "#/materiaux"
      },
      {
       "t": "Fiche produit Henry Schein",
       "u": "https://henryschein.co.uk/dental-gb/products/henry-schein-etch-gel-37.aspx?hssc=4"
      }
     ],
     "alias": [
      "Etch Gel"
     ]
    },
    {
     "id": "dycal-dentsply-sirona",
     "nom": "Dycal (Dentsply Sirona)",
     "type": "Hydroxyde de calcium autodurcissant, radio-opaque (deux pâtes)",
     "statut": "lue",
     "ind": [
      "**Coiffage pulpaire direct et indirect**",
      "Liner de protection sous obturations, ciments et autres bases"
     ],
     "ci": [
      "Hypersensibilité aux **sulfonamides** ou à un composant"
     ],
     "met": [
      "**Volumes égaux** de base et de catalyseur (1,17 g pour 1,00 g)",
      "Mélanger **immédiatement** avec l'applicateur Dycal jusqu'à couleur homogène, **en 10 s au plus**, sans trop spatuler",
      "Cavité **sèche** ; appliquer vite, **éviter les grosses quantités** et ne pas toucher les bords",
      "Prise en **2 min 30 à 3 min 30** sur le bloc (23 °C), plus rapide en bouche ; retirer l'excès aux bords"
     ],
     "ret": [
      "Ne pas régler la prise en changeant la quantité de catalyseur ; **n'inhibe pas** la polymérisation des acryliques et composites",
      "Les produits contenant de l'**acétone** altèrent l'hydroxyde de calcium"
     ],
     "src": [
      {
       "t": "Notice Dycal",
       "u": "https://www.proclinic.es/media/proclinic-es/annexes/3010_instrucciones.pdf"
      }
     ],
     "alias": [
      "Dycal"
     ]
    },
    {
     "id": "biodentine-septodont",
     "nom": "Biodentine (Septodont), capsules",
     "type": "Substitut dentinaire bioactif à base de silicate tricalcique (capsule de poudre + monodose de liquide)",
     "statut": "lue",
     "ind": [
      "**Coiffage pulpaire** et **pulpotomie** : très utilisée au service chez l'enfant et chez l'adulte",
      "**Restauration dentinaire** définitive sous composite, inlay ou onlay ; restauration amélo-dentinaire non définitive ; lésions profondes ou volumineuses (technique sandwich) ; lésions cervicales",
      "**Racine** : réparation des perforations radiculaires et du plancher pulpaire, résorptions perforantes internes et externes ; **apexification** ; obturation apicale rétrograde"
     ],
     "ci": [
      "**Allergie** à un constituant",
      "**Limites** : grandes pertes de substance soumises à de fortes contraintes ; **restauration esthétique du secteur antérieur** ; **dents à pulpite irréversible** (évaluer d'abord la vitalité pulpaire)"
     ],
     "met": [
      "**Mélange en capsule** : taper la capsule pour détasser la poudre, l'ouvrir sur le support blanc, verser **5 gouttes** de la monodose, refermer",
      "Placer sur un **vibreur** (Technomix, Tac 400, Silamat, CapMix, Rotomix, Ultramat…) à **4 000-4 200 oscillations/min**, **30 secondes**",
      "Ouvrir et vérifier la consistance : si plus épaisse souhaitée, attendre **30 s à 1 min** sans dépasser le temps de travail ; récupérer avec la spatule du coffret, ou un porte-amalgame",
      "**Coiffage** : digue, retirer la dentine cariée (garder la dentine affectée), **hémostase indispensable**, placer la Biodentine **directement sur la pulpe exposée sans compression**",
      "**Pulpotomie** : excision de la pulpe camérale, hémostase, Biodentine placée dans la chambre pulpaire, bien adaptée aux parois",
      "**Perforations** : champ opératoire, canal rincé à l'hypochlorite et séché, Biodentine mise en place puis comprimée au fouloir, radiographie de contrôle",
      "**Biodentine XP (cartouche, mixeur et pistolet Biodentine)** : coiffage direct en 2 sessions (**protocole Bio-Bulk Fill**, Septodont) : hémostase par compression à l'**hypochlorite 1-6 %**, injection en remontant lentement jusqu'en haut de la cavité, **sous-occlusion**, radiographie ; **6 semaines plus tard** : retirer **2 mm** de Biodentine, mordançage de l'émail et de la Biodentine (MR3 ou MR2) ou SAM1, composite",
      "**Éviter l'eau et les fluides** pendant la prise initiale (**12 minutes**) ; attendre la fin de la prise avant de déposer la matrice ; un vernis sur la surface améliore les propriétés et facilite la dépose",
      "**Vérifier l'occlusion** ; **d'une semaine à six mois** plus tard, préparer la cavité pour la restauration définitive : la Biodentine restante peut rester en profondeur, compatible avec tous les adhésifs",
      "Rincer et nettoyer rapidement les instruments"
     ],
     "ret": [
      "**Usage unique**, un seul patient ; conserver à l'abri de l'humidité",
      "Boîte de 5 capsules et 5 monodoses (ou 15 selon le conditionnement)",
      "Aucun effet indésirable connu à ce jour (notice)"
     ],
     "src": [
      {
       "t": "Notice Biodentine capsules (Septodont), copie d'un distributeur",
       "u": "https://www.proclinic.es/media/proclinic-es/annexes/19062_biodentine.pdf"
      },
      {
       "t": "Septodont, Protocole Bio-Bulk Fill – Coiffage direct en 2 sessions (Biodentine XP, octobre 2024), fiche reçue du service",
       "u": "#/materiaux"
      }
     ],
     "alias": [
      "Biodentine"
     ]
    },
    {
     "id": "calcimol-lc-voco",
     "nom": "Calcimol LC (Voco)",
     "type": "Hydroxyde de calcium photopolymérisable monocomposant, radio-opaque",
     "statut": "lue",
     "ind": [
      "**Coiffage pulpaire indirect**",
      "Fond de cavité sous tous les matériaux d'obturation"
     ],
     "ci": [
      "Précaution de la notice : sur la dentine à moins de 0,5 mm de la pulpe et pour le **coiffage direct**, utiliser plutôt un produit d'hydroxyde de calcium à base d'eau"
     ],
     "met": [
      "Surfaces dentaires **bien sèches**, sans contamination",
      "Seringue : appliquer directement, ne pas retirer le piston",
      "Fond de plus de 1 mm : **par couches, 20 s minimum** de lumière bleue chacune",
      "Retirer l'excès **avant** la photopolymérisation, à l'instrument rotatif après"
     ],
     "ret": [
      "Ne pas l'utiliser au niveau des bords de l'obturation",
      "Adhésif possible avant l'application si l'on veut une meilleure adhésion"
     ],
     "src": [
      {
       "t": "Notice Voco Calcimol LC",
       "u": "https://www.adamdental.com.au/Documents/Brand%20Management/Voco/Web%20Docs/Calcimol%20LC%20IFU.pdf"
      }
     ],
     "alias": [
      "Calcimol LC",
      "Calcimol"
     ]
    },
    {
     "id": "ionofil-molar-ac-voco",
     "nom": "Ionofil Molar AC (Voco)",
     "type": "Verre ionomère en capsule",
     "statut": "lue",
     "ind": [
      "Défauts en V, érosions cervicales ou radiculaires, **classe V**",
      "Dents temporaires (surtout classe I)",
      "Classe II **sans contrainte occlusale** (préparation tunnel)",
      "Reconstitution, fond, **traitement temporaire de longue durée** des classes I et II"
     ],
     "ci": [
      "Hypersensibilité aux composants (acide polyacrylique, silicate de fluor)"
     ],
     "met": [
      "Épaisseur d'au moins 1 mm, éviter les bords en plume ; dentine restante de plus de 1,5 mm : pas de liner supplémentaire",
      "**Activer** la capsule 2 s (activateur), mélanger environ **10 s** (4 000-4 500 osc/min)",
      "Appliquer dans les **30 s** après le mélange ; **temps de travail 2 min, prise 4 min** (version Quick : 1,5 min et 2,5 min)",
      "Finition au plus tôt à 7 min (Quick : 2,5 min), puis vernis de protection"
     ],
     "ret": [
      "Zones proches de la pulpe : **hydroxyde de calcium** pour éviter l'irritation"
     ],
     "src": [
      {
       "t": "Notice Voco Ionofil Molar AC / Quick",
       "u": "https://www.adamdental.com.au/Documents/Brand%20Management/Voco/Web%20Docs/voco-ionofil-molar-ac-quick_ifu_e1.pdf"
      }
     ],
     "alias": [
      "Ionofil Molar AC",
      "Ionofil"
     ]
    },
    {
     "id": "equia-forte-ht-fil-et-equia-forte-coat-g",
     "nom": "EQUIA Forte HT Fil et EQUIA Forte Coat (GC)",
     "type": "Verre hybride de restauration (capsule) et vernis résine photopolymérisable",
     "statut": "lue",
     "ind": [
      "Classe I, classe II (avec ou sans contrainte), restauration intermédiaire, classe V et surfaces radiculaires, reconstitution",
      "**Coat** : sceller, renforcer et protéger la restauration"
     ],
     "ci": [
      "Coiffage pulpaire direct",
      "Allergie au verre ionomère ou aux méthacrylates",
      "Coat : antécédent d'hypersensibilité aux acrylates ou méthacrylates"
     ],
     "met": [
      "Rapport poudre/liquide 0,40/0,13 ; capsule activée, **mélange 10 s**, extrusion **dans les 10 s**",
      "**Temps de travail 1 min 30** (23 °C) ; **finition à 2 min 30** après le début du mélange",
      "Pendant les 2 min 30 : éviter l'humidité et le dessèchement, sinon appliquer tout de suite le Coat",
      "**Coat** : surface sèche (sans dessécher), appliquer dans la minute suivant le dosage, **ne pas souffler**, photopolymériser **20 s**"
     ],
     "ret": [
      "Le Coat ne se combine pas avec des **désensibilisants** ni des matériaux à l'**eugénol**",
      "Ne pas photopolymériser sur les tissus mous (échauffement)"
     ],
     "src": [
      {
       "t": "Notice GC EQUIA Forte HT",
       "u": "https://gc.dental/europe/sites/europe.gc.dental/files/products/downloads/equiaforteht/ifu/22004_IFU_EQUIA_Forte_HT_W.pdf"
      }
     ],
     "alias": [
      "EQUIA Forte HT Fil",
      "EQUIA Forte"
     ]
    },
    {
     "id": "sdr-flow-dentsply-sirona",
     "nom": "SDR flow+ (Dentsply Sirona)",
     "type": "Composite fluide « bulk fill » photopolymérisable",
     "statut": "part",
     "ind": [
      "Base en classes I et II, **couches de 4 mm** au plus, à recouvrir d'un composite universel (laisser au moins 2 mm)"
     ],
     "ci": [
      "Hypersensibilité aux résines méthacrylates"
     ],
     "met": [
      "Lumière bleue 440-480 nm ; temps selon la teinte (tableau de la notice, non lu)"
     ],
     "ret": [
      "Manipuler le moins possible : l'instrument perturbe l'auto-nivellement"
     ],
     "src": [
      {
       "t": "Notice SDR flow+",
       "u": "https://assets.dentsplysirona.com/flagship/en/explore/restorative/sdr_flow_plus_eu-version/RES-IFU-SDRflow-plus-multilingual-2018-03-30.pdf"
      }
     ],
     "alias": [
      "SDR flow+",
      "SDR flow"
     ]
    },
    {
     "id": "tetric-evoflow-ivoclar",
     "nom": "Tetric EvoFlow (Ivoclar)",
     "type": "Composite fluide",
     "statut": "part",
     "ind": [
      "Blocage de contre-dépouilles, attelles de dents mobiles, collage de restaurations indirectes translucides, réparations"
     ],
     "ci": [
      "Allergie à un composant",
      "Champ **non sec**"
     ],
     "met": [
      "Couches de **2 mm au plus** (1,5 mm pour les teintes dentine)",
      "Version Bulk Fill : 4 mm, à recouvrir d'un composite"
     ],
     "ret": [
      "Ne pas laisser la matière non polymérisée en contact avec la peau, les muqueuses ou les yeux"
     ],
     "src": [
      {
       "t": "Notices Ivoclar Tetric EvoFlow",
       "u": "https://icde-fr.ivoclar.com/zoolu-website/media/document/838/Tetric+EvoFlow"
      }
     ],
     "alias": [
      "Tetric EvoFlow"
     ]
    },
    {
     "id": "filtek-3m-capsules-bright-natural-warm",
     "nom": "Filtek Easy Match (3M / Solventum), capsules Bright, Natural, Warm",
     "type": "Composite universel simplifié à 3 teintes (capsules ou seringues), nanochargé",
     "statut": "lue",
     "ind": [
      "**Restaurations antérieures et postérieures** avec une sélection de teinte simplifiée : **3 teintes** seulement",
      "Restauration en **teinte unique** (pas conçu pour les restaurations multiteintes ; pour cela, Filtek Supreme Ultra)"
     ],
     "ci": [
      "**Pas un composite bulk fill** : couches de **2 mm maximum**",
      "Éviter toute **lumière directe** avant la polymérisation (lampe du fauteuil, lampe de loupe) : utiliser un pare-lumière sur le bloc de mélange",
      "Contient du **bis-GMA** (pas de BPA ajouté) ; pour un produit sans dérivé de BPA : Filtek Universal ou One Bulk Fill (3M)"
     ],
     "met": [
      "**Choix de la teinte** : **Naturelle (N)** pour la majorité des patients (A2, A3, C2, D3, D4) ; **Lumineuse (L)** pour blanchiment, A1, B1, B2, C1, D2 ; **Chaleureuse (C)** pour A3.5, A4, B3, B4, C3, C4 (correspondance VITA classique)",
      "**Couches de 2 mm au maximum** ; **photopolymérisation** : **10 s** avec une lampe LED de 1 000 à 2 000 mW/cm², **20 s** avec une lampe halogène (couche de 2 mm, les 3 teintes)",
      "Matériau ferme et non collant (ne colle pas aux instruments) ; opacité **naturellement adaptative** : translucidité de type émail sur les bords",
      "Dentine décolorée à masquer : **opacifiant rose** du Filtek Universal, appliqué sous le composite (couche de 1 mm)",
      "Compatible avec le composite fluide **Filtek Supreme** (teintes correspondantes)"
     ],
     "ret": [],
     "src": [
      {
       "t": "FAQ Filtek Easy Match (Solventum, 2024), reçue du service",
       "u": "#/materiaux"
      }
     ],
     "alias": [
      "Filtek Easy Match",
      "Filtek"
     ]
    },
    {
     "id": "caries-marker-voco",
     "nom": "Caries Marker (Voco)",
     "type": "Solution colorée de détection de la dentine infectée",
     "statut": "lue",
     "ind": [
      "Révéler la carie résiduelle après curetage, vérifier qu'elle est retirée, repérer des canaux oblitérés ou des microfissures"
     ],
     "ci": [
      "Allergie aux composants (propylène glycol)"
     ],
     "met": [
      "Enlever d'abord la dentine ramollie",
      "Mouiller la cavité **5 à 10 s (pas plus)**, rincer au spray",
      "La dentine cariée devient rouge vif ; éliminer, **répéter jusqu'à l'absence de coloration**"
     ],
     "ret": [
      "**Pas à proximité de la pulpe** (confusion avec du sang)",
      "Tache la peau et les vêtements"
     ],
     "src": [
      {
       "t": "Notice Voco Caries Marker",
       "u": "https://www.adamdental.com.au/Documents/Brand%20Management/Voco/Web%20Docs/caries-marker_ifu_e1.pdf"
      }
     ],
     "alias": [
      "Caries Marker"
     ]
    },
    {
     "id": "palodent-360-dentsply-sirona",
     "nom": "Palodent 360 (Dentsply Sirona)",
     "type": "Matrices circonférentielles à usage unique",
     "statut": "lue",
     "ind": [
      "Restaurations directes de classe II, surtout sans dent adjacente, avec peu de structure ou avec une dent déplacée"
     ],
     "ci": [
      "Non lues"
     ],
     "met": [
      "Serrage **à la main uniquement** (molette)",
      "Éviter toute pression apicale excessive (lésion parodontale)",
      "Séparation préalable possible (anneau Palodent V3 ou coin de bois)"
     ],
     "ret": [
      "Bandes non stériles, à usage unique"
     ],
     "src": [
      {
       "t": "Dentsply Sirona Palodent 360",
       "u": "https://www.dentsplysirona.com/en-nz/categories/restorative/palodent-dental-matrix-systems/palodent-360.html"
      }
     ],
     "alias": [
      "Palodent 360",
      "Palodent"
     ]
    },
    {
     "id": "sof-lex-3m-strips-et-disques-stripmat-po",
     "nom": "Sof-Lex (3M), strips et disques ; Stripmat (Polydentia)",
     "type": "Finition et polissage ; bandes de polyester",
     "statut": "lue",
     "ind": [
      "**Finition et polissage** des restaurations (strips et disques Sof-Lex) ; **Stripmat** : bande polyester pour la matrice et la mise en forme"
     ],
     "ci": [],
     "met": [
      "Sof-Lex : strips de finition (réf. 1954) et de polissage ; disques fins",
      "Stripmat : bande polyester de 0,05 mm"
     ],
     "ret": [],
     "src": [],
     "alias": [
      "Sof-Lex",
      "Stripmat"
     ]
    }
   ]
  },
  {
   "id": "endo",
   "titre": "Endodontie",
   "produits": [
    {
     "id": "pulp-canal-sealer-ewt-kerr",
     "nom": "Pulp Canal Sealer EWT (Kerr)",
     "type": "Ciment canalaire à l'oxyde de zinc-eugénol, temps de travail prolongé",
     "statut": "lue",
     "ind": [
      "**Obturation permanente** du canal avec des cônes (ISO 6876)"
     ],
     "ci": [
      "Aucune connue, mais l'**eugénol** peut **irriter la peau, les yeux et la muqueuse** et provoquer une **réaction allergique** chez quelques patients : prudence",
      "En cas de contact avec la peau ou la muqueuse : retirer le produit et rincer abondamment à l'eau ; **yeux** : rincer immédiatement et consulter ; **ingestion** : faire boire beaucoup d'eau"
     ],
     "met": [
      "**Une cuillère de poudre** (première graduation) et **une goutte de liquide** sur le bloc",
      "Incorporer la poudre au liquide sur 1 à 2 cm, **en cercles en appuyant**, jusqu'à une pâte lisse, non collante, sans grains d'argent",
      "Appliquer au Lentulo ou à la lime, enduire le cône, l'enfoncer **lentement**",
      "EWT : temps de travail **supérieur à 6 h** sur le bloc (à 21-27 °C et 40-60 % d'humidité), prise en bouche en **moins de 2 h** (à 37 °C) ; la chaleur et l'humidité accélèrent la prise",
      "**Prise trop rapide** : ajouter un peu de liquide en humidifiant la pointe de la spatule ; **prise trop lente ou absente** : chercher une contamination du liquide, de la poudre ou du bloc ; garder le compte-gouttes propre et sec, reboucher les flacons"
     ],
     "ret": [
      "**Ne pas trop remplir** le canal (lésion péri-apicale) ; l'**argent** peut colorer la dent ; **digue** recommandée",
      "Inflammation péri-apicale possible les premiers jours",
      "Bloc de mélange **à usage unique, pour un seul patient** ; conservation au frais et au sec, à l'abri de la chaleur et de l'humidité ; ne pas utiliser un produit périmé"
     ],
     "src": [
      {
       "t": "Notice Pulp Canal Sealer / EWT (SybronEndo, Kerr), reçue du service",
       "u": "#/materiaux"
      },
      {
       "t": "Notice Kerr (copie en ligne)",
       "u": "https://www.adamdental.com.au/Documents/Brand%20Management/Kerr/Pulp%20Canal%20Sealer/Instructions.pdf"
      }
     ],
     "alias": [
      "Pulp Canal Sealer EWT",
      "Pulp Canal Sealer"
     ]
    },
    {
     "id": "desocclusol-orange-acteon",
     "nom": "Desocclusol Orange (Acteon)",
     "type": "Solvant des ciments d'obturation de type eugénate (huile essentielle d'orange douce, plus de 90 %)",
     "statut": "lue",
     "ind": [
      "Retraitement endodontique : dissoudre les ciments **oxyde de zinc-eugénol** et la gutta"
     ],
     "ci": [
      "**Allergie cutanée** possible (huile essentielle d'orange) et **irritation de la peau** : éviter le contact, **gants** et lunettes de protection, vêtement de protection",
      "**Liquide inflammable** (point d'éclair 47 °C) : à l'écart de la chaleur, des flammes et des étincelles ; ne pas fumer",
      "**Ne pas avaler** : peut être mortel en cas d'ingestion avec pénétration dans les voies respiratoires ; **ne pas faire vomir**, appeler un centre antipoison ou un médecin",
      "Ne pas respirer les vapeurs ; très toxique pour les organismes aquatiques : **ne pas rejeter dans l'évier**"
     ],
     "met": [
      "Mode d'emploi du retraitement **non trouvé** (la fiche de sécurité reçue ne le donne pas) : au service, utilisé **avant les limes** ProTaper Universal Retreatment",
      "**Peau** : laver immédiatement à l'eau ; **yeux** : rincer abondamment à l'eau **au moins 15 minutes**, paupières écartées, puis consulter un ophtalmologiste",
      "**Stockage** : flacon d'origine bien fermé, à l'abri de la lumière et de la chaleur, **sous 25 °C** ; incompatible avec l'**eau**",
      "**Déversement** : absorber avec un matériau inerte (sable), laver à l'eau la zone souillée"
     ],
     "ret": [
      "Fiche de sécurité Acteon (FDS 226 022, 2017) : liquide orange, insoluble dans l'eau, densité 0,8"
     ],
     "src": [
      {
       "t": "Fiche de sécurité Desocclusol Orange (Acteon), reçue du service",
       "u": "#/materiaux"
      },
      {
       "t": "Fiche produit Acteon",
       "u": "https://www.medicalexpo.com/prod/acteon-group/product-71216-1161024.html"
      }
     ],
     "alias": [
      "Desocclusol Orange",
      "Desocclusol"
     ]
    },
    {
     "id": "glyde-file-prep-dentsply-sirona",
     "nom": "Glyde File Prep (Dentsply Sirona)",
     "type": "Gel d'EDTA et de peroxyde de carbamide",
     "statut": "lue",
     "ind": [
      "Nettoyage et mise en forme canalaire : **lubrifie les limes**, chélate les zones calcifiées, bouillonne avec l'hypochlorite"
     ],
     "ci": [
      "Ne pas l'utiliser **hors du canal** (muqueuse, peau)"
     ],
     "met": [
      "Après accès et pulpectomie, **irriguer à l'hypochlorite**",
      "Déposer le gel à l'entrée du canal ou sur une petite lime",
      "Enrober **chaque lime rotative** ; **irriguer toutes les 2 limes**",
      "Rinçage final, sécher, obturer"
     ],
     "ret": [
      "**Ne pas injecter sous pression** ; une dose par patient",
      "Conservation de 2 à 26 °C ; plus épais au froid"
     ],
     "src": [
      {
       "t": "Notice Glyde",
       "u": "https://admin3334.webygroup.sk/obchod_homedir/data/3129/prilohy/man-end-glyde-ifu-multilingual.pdf"
      }
     ],
     "alias": [
      "Glyde File Prep"
     ]
    },
    {
     "id": "supracal-r-s",
     "nom": "Supracal (R&S)",
     "type": "Pâte d'hydroxyde de calcium prête à l'emploi (seringue 2 mL)",
     "statut": "lue",
     "ind": [
      "Pâte d'hydroxyde de calcium ; coiffage pulpaire cité dans la brochure R&S"
     ],
     "ci": [
      "Non trouvées"
     ],
     "met": [
      "Si la pâte épaissit dans le capuchon : 1 ou 2 gouttes d'eau distillée"
     ],
     "ret": [
      "Notice d'utilisation non trouvée : demander celle de la boîte"
     ],
     "src": [
      {
       "t": "Brochure R&S hydroxydes de calcium",
       "u": "https://directdentalsupplies.nl/storage/uploads/products/rs-calcium-hydroxides-20171030-1258.pdf"
      }
     ],
     "alias": [
      "Supracal"
     ]
    },
    {
     "id": "navitip-capillary-tips-ultradent-irrifle",
     "nom": "NaviTip, Capillary Tips (Ultradent), IrriFlex, aiguilles d'irrigation Access",
     "type": "Embouts et canules d'irrigation et d'aspiration",
     "statut": "lue",
     "ind": [
      "**NaviTip** : délivrer l'irrigant près de l'apex, du fond vers le haut ; **Capillary Tips** : **aspirer** (jamais délivrer un irrigant)",
      "IrriFlex et aiguilles Access (30 G, 25 mm) : irrigation canalaire"
     ],
     "ci": [
      "Non lues"
     ],
     "met": [
      "NaviTip : usage unique, 29 ou 30 G, raccord Luer-lock",
      "Capillary Tips : sur l'adaptateur de vide Luer"
     ],
     "ret": [
      "Notices d'IrriFlex et des aiguilles Access **non trouvées**"
     ],
     "src": [
      {
       "t": "Ultradent NaviTip",
       "u": "https://www.ultradent.com/products/categories/endodontics/sealing/navitip-tips"
      }
     ],
     "alias": [
      "NaviTip",
      "Capillary Tips",
      "IrriFlex"
     ]
    },
    {
     "id": "c-nes-de-papier-protaper-gold-et-maxima-",
     "nom": "Cônes de papier ProTaper Gold et Maxima (ISO 45-80) ; hypochlorite R&S",
     "type": "Séchage des canaux ; irrigant",
     "statut": "lue",
     "ind": [
      "Notices **non trouvées**"
     ],
     "ci": [],
     "met": [
      "Les cônes de papier sont livrés stériles (étiquette Maxima ISO 45-80)"
     ],
     "ret": [
      "Concentration de l'hypochlorite non précisée sur le site, comme convenu"
     ],
     "src": []
    },
    {
     "id": "protaper-universal-retreatment-dentsply-sirona",
     "nom": "ProTaper Universal Retreatment D1-D3 (Dentsply Sirona)",
     "type": "Limes rotatives de désobturation (rotation continue)",
     "statut": "lue",
     "ind": [
      "**Retrait de l'obturation canalaire** (gutta-percha, obturateurs à base de support, ciments) lors d'un **retraitement**"
     ],
     "ci": [
      "Ne pas forcer en cas de blocage : avis du senior"
     ],
     "met": [
      "Utiliser les trois limes **en séquence** : **D1** (30/100, 9 %, 16 mm, pointe coupante) pour le tiers **coronaire**, **D2** (25/100, 8 %, 18 mm) pour le tiers **moyen**, **D3** (20/100, 7 %, 22 mm) pour le tiers **apical**",
      "**Vitesse** : **500 à 700 tr/min** pour la gutta-percha et les obturateurs à base de support ; **300 tr/min** pour les ciments (pâtes)",
      "Moteur à **contrôle de couple** (la notice ne donne pas de valeur de couple pour ces limes)",
      "**Chemin initial** aux petites limes manuelles avec solvant, instrument chauffant ou ultrasons ; appuyer **doucement la D1 sans engager la dentine**",
      "**Retirer les limes souvent**, inspecter et nettoyer les spires, puis réinsérer ; continuer tant que du matériau est visible entre les lames",
      "Dans le tiers apical d'une anatomie complexe : limes manuelles et solvant (**Desocclusol Orange** au service) ; mise en forme ensuite aux **ProTaper Gold**"
     ],
     "ret": [
      "Limes à **usage unique**, pour un seul patient ; la chaleur et la friction aident à retirer l'obturation",
      "Radiographies bien angulées et accès rectiligne avant de commencer"
     ],
     "src": [
      {
       "t": "Mode d'emploi ProTaper Universal (Dentsply Sirona)",
       "u": "https://www.dentsplysirona.com/content/dam/dentsply/pim/manufacturer/Endodontics/Glide_Path__Shaping/Rotary__Reciprocating_Files/Shaping/ProTaper_Universal_Retreatment_Files/ProTaper-Universal-Endodontic-System-rvyvmdf-en-1402"
      },
      {
       "t": "Fiche technique du retraitement ProTaper Universal (Dentsply Sirona)",
       "u": "https://www.dentsplysirona.com/content/dam/master/regions-countries/north-america/product-procedure-brand/endodontics/product-categories/restoration/retreatment-files/documents/END-Step-By-Step-ProTaper-Universal-Retreatment-Files-EN.pdf"
      },
      {
       "t": "Fiche produit Dentsply Sirona France",
       "u": "https://www.dentsplysirona.com/fr-fr/acheter/product-page.html/BP-300165/protaper-universal-lime-en-rotation-continue-de-retraitement.html"
      }
     ],
     "alias": [
      "ProTaper Universal Retreatment",
      "D1",
      "D2",
      "D3"
     ]
    },
    {
     "id": "protaper-gold-dentsply-sirona",
     "nom": "ProTaper Gold (Dentsply Sirona)",
     "type": "Limes rotatives NiTi de mise en forme : S1, S2, SX, F1, F2, F3",
     "statut": "lue",
     "instrument": true,
     "alias": [
      "ProTaper Gold",
      "S1",
      "S2",
      "SX",
      "F1",
      "F2",
      "F3"
     ],
     "ind": [
      "**Mise en forme et nettoyage** du système canalaire, dans une zone où le **chemin de glisse** est confirmé, lisse et reproductible"
     ],
     "ci": [
      "**Stériles et à usage unique** : ne jamais les réutiliser"
     ],
     "met": [
      "**S1** (18/100, conicité 2 %) et **S2** (20/100, 4 %) : mise en forme, **mouvement de brossage** à la remontée",
      "**SX** (19/100, 4 %) : entrée du canal, racine courte, éloigner le canal d'une furcation, si besoin",
      "**F1** (20/100, 7 %), **F2** (25/100, 8 %) et **F3** (30/100, 9 %) : finition, **sans brossage**, une seule fois à la longueur de travail, **1 seconde au plus**",
      "**Vitesse 300 tr/min** ; couple : **S1 et SX 5,1 N·cm**, **S2 et F1 1,5 N·cm**, **F2 et F3 3,1 N·cm**",
      "Préparation apicale **en général jusqu'au 25/100 (F2)** ; pression apicale minimale, ne jamais forcer"
     ],
     "ret": [
      "Irriguer, **récapituler** et ré-irriguer après chaque lime ; **inspecter les spires** de la lime"
     ],
     "src": [
      {
       "t": "Fiche technique ProTaper Gold (Dentsply Sirona)",
       "u": "https://assets.dentsplysirona.com/master/product-procedure-brand-categories/endodontics/product-categories/full-solutions/protaper-gold-solution/product-info/END-TipCard-ProTaper-Gold-web.pdf"
      }
     ]
    },
    {
     "id": "gates-glidden-dentsply-maillefer",
     "nom": "Gates-Glidden (Dentsply Maillefer)",
     "type": "Forets d'élargissement coronaire, en acier inoxydable, pour contre-angle",
     "statut": "lue",
     "instrument": true,
     "alias": [
      "Gates-Glidden",
      "Gates Glidden",
      "Gates"
     ],
     "ind": [
      "**Élargir la partie coronaire du canal** (enlèvement de matière dentaire en masse)",
      "Au service : **désobturation partielle** avant le logement d'un tenon (**Gates 1, 2, 3**, puis Largo 1, 2, 3)"
     ],
     "ci": [],
     "met": [
      "S'utilisent dans **tout contre-angle**",
      "**Encoches** pour repérer la taille ; **code couleur ISO** qui indique le diamètre de coupe",
      "Longueurs : **standard 32 mm** et **court 28 mm** (court : canaux postérieurs)",
      "Tailles **1 à 6**, boîtes de 6 ; diamètres de coupe : **n° 1 0,50 mm**, **n° 2 0,70 mm**, **n° 3 0,90 mm**, n° 4 1,10 mm"
     ],
     "ret": [
      "Foret à tige rigide : à garder dans la **partie rectiligne** du canal"
     ],
     "src": [
      {
       "t": "Catalogue Dentsply Maillefer",
       "u": "https://www.maillefer.com/wp-content/uploads/2016/10/2016-Maillefer-Catalog.pdf"
      }
     ]
    },
    {
     "id": "largo-peeso-dentsply-maillefer",
     "nom": "Largo (réamer de Peeso, Dentsply Maillefer)",
     "type": "Réamers en acier inoxydable pour contre-angle",
     "statut": "lue",
     "instrument": true,
     "alias": [
      "Largo",
      "Peeso"
     ],
     "ind": [
      "**Élargir la partie cervicale du canal**, préparer l'entrée du canal et **retirer la gutta-percha pour le logement d'un tenon**",
      "Au service : après les Gates, pour **calibrer le logement** du tenon (**Largo 1, 2, 3**)"
     ],
     "ci": [],
     "met": [
      "S'utilisent dans **tout contre-angle**",
      "**Encoches** pour repérer la taille",
      "Longueurs : **standard 32 mm** et **court 28 mm**",
      "Tailles **1 à 6**, boîtes de 6 ; diamètres : **n° 1 0,70 mm**, **n° 2 0,90 mm**, **n° 3 1,10 mm**"
     ],
     "ret": [
      "Partie coupante plus longue que celle des Gates : risque de **perforation latérale** dans un canal courbe, donc à garder dans la partie rectiligne"
     ],
     "src": [
      {
       "t": "Catalogue Dentsply Maillefer",
       "u": "https://www.maillefer.com/wp-content/uploads/2016/10/2016-Maillefer-Catalog.pdf"
      }
     ]
    }
   ]
  },
  {
   "id": "prothese",
   "titre": "Prothèse amovible : empreintes, enregistrement et rebasage",
   "produits": [
    {
     "id": "repin-pentron",
     "nom": "Repin (Pentron)",
     "type": "Pâte d'empreinte à l'oxyde de zinc-eugénol (deux pâtes)",
     "statut": "lue",
     "ind": [
      "**Empreinte des maxillaires édentés dans un porte-empreinte individuel** pour prothèses complètes",
      "Fixation provisoire de couronnes, bridges et tenons"
     ],
     "ci": [
      "Non décrites ; l'**eugénol** peut provoquer des allergies chez des patients très sensibles"
     ],
     "met": [
      "**Volumes égaux (1 : 1)** des deux pâtes sur un bloc, quantité selon l'empreinte",
      "Mettre dans le porte-empreinte individuel, **mouvements fonctionnels** demandés au patient",
      "Retirer l'empreinte après environ **2 min** et couler au plâtre"
     ],
     "ret": [
      "Cadre de pâte thermoplastique (Dentiplast) recommandé pour les rugosités palatines"
     ],
     "src": [
      {
       "t": "Notice Repin",
       "u": "https://admin3334.webygroup.sk/obchod_homedir/data/3129/prilohy/nav-ifu-repin-20160127-ml.pdf"
      }
     ],
     "alias": [
      "Repin"
     ]
    },
    {
     "id": "p-te-de-kerr-verte",
     "nom": "Pâte de Kerr verte",
     "type": "Pâte thermoplastique à modeler",
     "statut": "part",
     "ind": [
      "Joint périphérique et empreintes mixtes en prothèse complète ; fixation de la maquette sur la fourchette de l'arc facial"
     ],
     "ci": [
      "Non lues"
     ],
     "met": [
      "Pâte verte : ramollissement vers **50-51 °C** (rouge et blanche : 55-57 °C)",
      "Bâton **réchauffé à la flamme**, modelage **secteur par secteur**"
     ],
     "ret": [
      "Source : thèses d'odontologie (Nantes 2007, Lille 2022), pas une notice de fabricant"
     ],
     "src": [
      {
       "t": "Fromentin, thèse Nantes 2007",
       "u": "https://archive.bu.univ-nantes.fr/pollux/fichiers/download/9dfb26a1-0492-468d-9bf9-93915e7556b1"
      }
     ],
     "alias": [
      "pâte de Kerr"
     ]
    },
    {
     "id": "impregum-penta-super-quick-3m-adh-sif-po",
     "nom": "Impregum Penta Super Quick (3M) ; adhésif polyéther 3M",
     "type": "Polyéther (Pentamix) ; adhésif de porte-empreinte",
     "statut": "lue",
     "ind": [
      "Empreintes d'inlay, onlay, facette, couronne et bridge ; empreintes de fixation et d'implants ; surtout **préparations unitaires ou de deux éléments**"
     ],
     "ci": [
      "Allergie au polyéther ou à ses allergènes"
     ],
     "met": [
      "Dosage et mélange au **Pentamix 2 ou plus récent** (ou Garant Dispenser)",
      "**Temps de travail 0:45, prise en bouche 2:00**",
      "Adhésif : **couche mince**, séchage d'**au moins 1 min** avant de remplir le porte-empreinte"
     ],
     "ret": [
      "Stockage 18-25 °C, jamais au réfrigérateur ; embouts **Penta rouges** d'origine (étiquette de la boîte)"
     ],
     "src": [
      {
       "t": "Notice 3M Impregum Penta Super Quick",
       "u": "https://www.adamdental.com.au/Documents/3M%20IFU/Impregum%20Penta%20Soft%20Quick%20IFU.pdf"
      },
      {
       "t": "FAQ 3M adhésif polyéther",
       "u": "https://www.adamdental.com.au/Documents/3M%20IFU/Polyether%20Adhesive%20FAQs.pdf"
      }
     ],
     "alias": [
      "Impregum Penta Super Quick",
      "Impregum Penta"
     ]
    },
    {
     "id": "impregum-f-3m",
     "nom": "Impregum F (3M)",
     "type": "Polyéther de consistance moyenne, hydrophile",
     "statut": "abs",
     "ind": [
      "Notice **non trouvée**"
     ],
     "ci": [],
     "met": [
      "Pour les polyéthers 3M en général : ne pas dépasser les temps de la notice, ne pas réfrigérer"
     ],
     "ret": [
      "Demander la notice de la boîte"
     ],
     "src": [],
     "alias": [
      "Impregum F"
     ]
    },
    {
     "id": "express-2-3m-espe-putty-soft-light-body-",
     "nom": "Express 2 (3M ESPE) : Putty Soft, Light Body, Regular Body",
     "type": "Silicone par addition (VPS)",
     "statut": "part",
     "ind": [
      "Empreintes de préparations ; **technique putty/wash en deux temps**"
     ],
     "ci": [
      "Non lues pour Express 2"
     ],
     "met": [
      "Notice Express de première génération lue : putty en volumes égaux, **mélange d'environ 30 s**, porte-empreinte posé **en moins de 60 s**",
      "Gants en **vinyle** (certains gants inhibent la prise du putty)",
      "Putty Soft Regular Set : **1 min 30** de travail, **3 min 30** en bouche (fiche 3M)"
     ],
     "ret": [
      "Valeurs de la première génération : à confirmer sur la notice Express 2"
     ],
     "src": [
      {
       "t": "Notice Express VPS (3M)",
       "u": "https://www.adamdental.com.au/Documents/3M%20IFU/Express%20VPS%20IFU.pdf"
      }
     ],
     "alias": [
      "Express 2"
     ]
    },
    {
     "id": "futar-d-kettenbach",
     "nom": "Futar D (Kettenbach)",
     "type": "Silicone par addition (VPS) pour enregistrement de l'occlusion, en cartouche 50 mL (ISO 4823)",
     "statut": "lue",
     "ind": [
      "**Enregistrement de l'occlusion** de grande précision : détermination des rapports intermaxillaires",
      "Les **Futar D** donnent un **articulé rigide** en silicone (dureté Shore D 43) : variantes **D Fast** (travaux courts) et **D Slow** (travaux étendus)",
      "Patients soignés dans le cadre d'un traitement bucco-dentaire"
     ],
     "ci": [
      "**Ne jamais l'utiliser pour une empreinte classique** : la dureté finale empêche le retrait de la bouche et peut entraîner une **avulsion accidentelle**",
      "**Allergie connue** à un composant (platine, 4-méthoxyphénol) ou allergie de contact",
      "Ne pas laisser de résidus dans la gouttière ou la cavité buccale ; ne pas avaler ; yeux : rincer immédiatement à l'eau",
      "**Gants en latex à éviter** : ils perturbent la prise ; tester la compatibilité de tout autre gant",
      "Le **soufre actif**, le **chlorure d'aluminium** et les composés azotés (fils de rétraction au sulfate ferrique, polysulfures) perturbent la prise : **rincer abondamment** la zone avant"
     ],
     "met": [
      "**Cartouche dans le pistolet Applyfix 4 DS-50 (1:1 / 2:1)**, encoches de la base vers le bas ; retirer le bouchon, **purger une petite quantité** pour que les deux pâtes sortent de façon régulière, puis visser l'**embout mélangeur**",
      "**Injecter directement** sur les surfaces occlusales du patient ou sur les **bourrelets occlusaux**",
      "**Temps à 23 °C** (depuis le début du mélange) : **Futar D** : préparation **30 s**, mise en bouche **1 min 30**, fin de prise **2 min** ; **D Fast** : **15 s**, **45 s**, **1 min** ; **D Slow** : **1 min 30**, **3 min**, **4 min 30**",
      "Respecter **scrupuleusement** les temps : un matériau utilisé loin de 23 °C change nettement la prise",
      "Après usage : remettre le bouchon ; avant de reprendre la cartouche, vérifier que les orifices ne sont pas bouchés par du matériau durci",
      "**Pistolet** : retirer la cartouche, essuyer la pâte non durcie à l'alcool, désinfection par trempage (glutaraldéhyde recommandé)",
      "**Désinfection de l'enregistrement** : par exemple glutaraldéhyde à 2 %, selon le mode d'emploi du désinfectant"
     ],
     "ret": [
      "**Variante utilisée au service à confirmer** : D, D Fast ou D Slow (temps différents)",
      "Stockage : au sec, à l'abri du soleil, à température ambiante ; ne pas utiliser après la date de péremption",
      "Éviter le contact avec les vêtements (ne part pas au nettoyage chimique) ; ne pas jeter les résidus à l'évier ; matériau durci à jeter selon les règles locales"
     ],
     "src": [
      {
       "t": "Mode d'emploi Futar (Kettenbach, mise à jour juillet 2025), reçu du service",
       "u": "#/materiaux"
      },
      {
       "t": "Aegis Dental, Futar D",
       "u": "https://www.aegisdentalnetwork.com/id/products/kettenbach/futar-d-slow"
      }
     ],
     "alias": [
      "Futar D",
      "Futar"
     ]
    },
    {
     "id": "algiretard-au-calbenium",
     "nom": "Algiretard au Calbenium",
     "type": "Spray conservateur et désinfectant pour empreintes à l'alginate",
     "statut": "part",
     "ind": [
      "Conserver une empreinte à l'alginate **jusqu'à 72 h** sans dessiccation (étiquette)"
     ],
     "ci": [
      "Non lues"
     ],
     "met": [
      "Solution prête à l'emploi : **pulvériser** sur l'empreinte, laisser agir **2 min** (texte partiel de l'étiquette)"
     ],
     "ret": [
      "Notice complète non trouvée"
     ],
     "src": [
      {
       "t": "Fiche distributeur",
       "u": "https://esadental.it/en/products/algiretard-calbenium-200ml-100-buste-airel"
      }
     ],
     "alias": [
      "Algiretard"
     ]
    },
    {
     "id": "aluwax",
     "nom": "Aluwax",
     "type": "Cire d'enregistrement de l'occlusion",
     "statut": "abs",
     "ind": [
      "Notice du fabricant **non trouvée**"
     ],
     "ci": [],
     "met": [
      "Les thèses la décrivent sur des **encoches** du bourrelet, en petite quantité (voir la fiche RIM)"
     ],
     "ret": [],
     "src": [
      {
       "t": "Étude 2024 (PMC)",
       "u": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11000910"
      }
     ],
     "alias": [
      "Aluwax"
     ]
    },
    {
     "id": "arc-facial-quick-fag",
     "nom": "Arc facial Quick (FAG Dentaire)",
     "type": "Arc facial auriculaire pour transférer la position du maxillaire à l'articulateur",
     "statut": "lue",
     "ind": [
      "**Enregistrer la position du maxillaire** du patient par rapport au crâne et la **transférer à l'articulateur** (mise en articulateur du modèle maxillaire), lors des rapports intermaxillaires"
     ],
     "ci": [],
     "met": [
      "Fourni avec l'**arc facial** et **une fourchette plastique jetable** ; en accessoires : fourchettes jetables, fourchette en inox, support de fourchette, **embouts auriculaires jetables**, appui nasal",
      "**1.** Mettre en place et **stabiliser la fourchette** en bouche",
      "**2.** Mettre en place l'**arc facial** et le **bloquer**",
      "**3.** Mettre en place l'**appui nasal** et **serrer**",
      "**4.** **Serrer** le dispositif qui solidarise la fourchette à l'arc : l'arc facial est **en place**",
      "Les vidéos pas à pas sont dans le menu **« Tuto arc facial »** de la fiche de prothèse adjointe complète"
     ],
     "ret": [
      "Embouts auriculaires et fourchettes plastiques : **à usage unique**"
     ],
     "src": [
      {
       "t": "Notice de l'arc facial Quick (FAG Dentaire)",
       "u": "https://www.fag-dentaire.com/wp-content/uploads/2022/05/arc-facial-2022-notice-2.pdf"
      },
      {
       "t": "Fiche produit FAG Dentaire",
       "u": "https://www.fag-dentaire.com/produit/arc-facial-quick/"
      },
      {
       "t": "Série de vidéos (Aix-Marseille)",
       "u": "https://amupod.univ-amu.fr/ecole-de-medecine-dentaire/pour-toutes-les-promos-utilisation-de-larticulateur-quick-master-b2/"
      }
     ],
     "alias": [
      "arc facial Quick",
      "arc facial"
     ]
    },
    {
     "id": "articulateur-quick-master-fag",
     "nom": "Articulateur Quick Master (FAG Dentaire)",
     "type": "Articulateur semi-adaptable magnétique « Split Cast » (modèle B2)",
     "statut": "lue",
     "ind": [
      "**Monter les modèles** maxillaire et mandibulaire en position (relation centrée) pour fabriquer les prothèses ; **simuler les mouvements** mandibulaires",
      "Utilisé dans les facultés françaises d'odontologie : **référence française** des articulateurs"
     ],
     "ci": [],
     "met": [
      "Articulateur **semi-adaptable**, conception **arcon**, référencé Francfort, distance inter-condylienne de **110 mm**",
      "**Pentes condyliennes** réglables de **0° à 70°** ; **angles de Bennett** à 0°, 10°, 15° et 20° ; propulsion de 0 à 6 mm ; blocage en **relation centrée**",
      "**Montage du modèle maxillaire** avec un **arc facial** ou une table de transfert ; système **Split Cast** (plaques magnétiques) pour mettre et retirer facilement les modèles",
      "Version **LAB 25** : pentes condyliennes préprogrammées à 25°, angles de Bennett réglables",
      "Plâtre de mise en articulateur et plaques de montage magnétiques en consommables"
     ],
     "ret": [
      "Articulateur **étalonné en usine** : le manipuler avec soin (une mauvaise manipulation peut demander un réétalonnage)",
      "Programmation fine possible avec l'axiographe Quick-Axis"
     ],
     "src": [
      {
       "t": "Fiche produit Quick Master B2 (FAG Dentaire)",
       "u": "https://www.fag-dentaire.com/produit/articulateur-dentaire-magnetique/"
      },
      {
       "t": "Mode d'emploi du Quick Master B2 (FAG Dentaire)",
       "u": "https://www.fag-dentaire.com/wp-content/uploads/2022/06/mode-demploi-articulateur-quick-master-b2.pdf"
      }
     ],
     "alias": [
      "articulateur Quick Master",
      "Quick Master"
     ]
    },
    {
     "id": "gc-reline-coe-soft-f-i-t-t-rebasage",
     "nom": "GC Reline, Coe-Soft, F.I.T.T. : rebasage",
     "type": "Rebasage dur, rebasage souple, conditionneur tissulaire",
     "statut": "lue",
     "ind": [
      "**GC Reline** : rebasage dur et extension de bords",
      "**Coe-Soft** : rebasage souple temporaire",
      "**F.I.T.T.** : empreintes fonctionnelles, rebasages thérapeutiques, conditionnement des tissus"
     ],
     "ci": [
      "Allergie aux méthacrylates (Reline, Coe-Soft) et aux salicylates (Coe-Soft)",
      "**F.I.T.T.** (notice Kerr 2024 du service) : **aucune contre-indication connue** ; pas d'allergie connue au **méthacrylate** ; **pas de matériau à l'eugénol** avec ce produit ; restrictions : inflammations sévères et infections fongiques",
      "Ancienne notice F.I.T.T. (06-2016) : mention du **dibutylphtalate** (ni grossesse, ni enfant) : **absente de la notice 2024** affichée au service"
     ],
     "met": [],
     "ret": [
      "Rebasage direct = solution temporaire ; référence = rebasage indirect au laboratoire (thèse de Lille, 2022)",
      "**F.I.T.T. (notice 2024)** : environ **1 dose de poudre pour 1 de liquide** (fin) à **1,5 pour 1** (plus de corps) ; gobelets gradués 7 mL (poudre) et 5 mL (liquide) ; mélange d'environ 1 min ; retrait 2 à 3 min après la pose ; peut être porté plusieurs jours"
     ],
     "src": [],
     "alias": [
      "GC Reline",
      "Coe-Soft",
      "F.I.T.T."
     ]
    },
    {
     "id": "gc-tri-plaque-id-gel",
     "nom": "GC Tri Plaque ID Gel",
     "type": "Révélateur de plaque en gel",
     "statut": "lue",
     "ind": [
      "Montrer la plaque au patient (**rose ou rouge** : plaque récente ; **bleu clair** : plaque de plus de 48 h, très acidogène)"
     ],
     "ci": [
      "Allergie aux **hydroxybenzoates** (conservateurs)"
     ],
     "met": [
      "Appliquer au microbrush, au coton ou à la brosse",
      "Nettoyer l'embout, refermer aussitôt",
      "Faire ensuite enseigner l'hygiène au patient"
     ],
     "ret": [
      "Stockage 8-25 °C, à l'abri de la lumière"
     ],
     "src": [
      {
       "t": "Notice GC Tri Plaque ID Gel",
       "u": "https://www.proclinic.es/media/proclinic-es/annexes/tri_plaque_id_gel_ifu_es_en_de_fr_it.pdf"
      }
     ],
     "alias": [
      "Tri Plaque ID Gel"
     ]
    }
   ]
  }
 ],
 "choix": [
  {
   "t": "Provisoire d'un accès endodontique",
   "x": "**IRM** ou **CVI photopolymérisable** (choix du service). Lire les limites : l'IRM contient de l'**eugénol** (le retirer avant un composite ou un ciment résine) ; en laboratoire, aucun matériau n'est parfait et une **double couche** améliore l'étanchéité. Pas d'essai clinique trouvé comparant IRM et CVI."
  },
  {
   "t": "Obturation canalaire",
   "x": "**Pulp Canal Sealer EWT** (ciment ZOE, digue, ne pas trop remplir). **Retraitement** : **Desocclusol Orange** (solvant, mode d'emploi à obtenir)."
  },
  {
   "t": "Mise en forme canalaire",
   "x": "**Glyde File Prep** avec l'hypochlorite : lubrifie les limes ; irriguer toutes les 2 limes."
  },
  {
   "t": "Protection de la pulpe",
   "x": "**Coiffage direct et pulpotomie** (enfant et adulte) : **Biodentine**, très utilisée au service ; **Dycal** (hydroxyde de calcium) possible. **Coiffage indirect ou liner** : **Biodentine**, **Dycal** ou **Calcimol LC** (photopolymérisable, pas à moins de 0,5 mm de la pulpe). **Base** : **CVI** (Fuji II LC, Ionofil Molar AC), jamais sur la pulpe directement."
  },
  {
   "t": "Restauration directe",
   "x": "**Composite** (Filtek, Tetric EvoFlow, SDR flow+ en base de 4 mm) avec adhésif **G-Premio Bond**. **CVI** : **EQUIA Forte** (classes I, II, V), **Ionofil Molar AC** (classe V, classe II non occlusale), **Fuji II LC** (classes III, V). Conditionner la dentine au **Cavity Conditioner** avant un CVI."
  },
  {
   "t": "Couronne provisoire et scellement provisoire",
   "x": "**Unifast Trad** pour fabriquer la couronne, **Temp-Bond NE** pour la sceller (sans eugénol, mais des traces sont possibles ; en cas d'allergie à l'eugénol, éviter le Temp-Bond classique)."
  },
  {
   "t": "Tenon et reconstitution",
   "x": "**Dentoclic** : voie **indirecte** (métallique pour l'empreinte, calcinable pour le labo) ou **directe** (titane scellé). Calcinable jamais en direct."
  },
  {
   "t": "Empreinte secondaire en prothèse complète",
   "x": "**Repin** (ZOE) dans le porte-empreinte individuel, après le **joint périphérique à la pâte de Kerr verte**."
  },
  {
   "t": "Empreinte de préparation unitaire",
   "x": "**Impregum Penta Super Quick** (polyéther, 45 s de travail) ou silicone **Express 2** en putty/wash."
  },
  {
   "t": "Enregistrement de l'occlusion",
   "x": "Chez l'**édenté** : **Aluwax** ou **pâte de Kerr** (pratique du service), vérifier la DVO au compas. Le **Futar D** (silicone) est une option plus précise, avec une prise rigide."
  },
  {
   "t": "Rebasage",
   "x": "**GC Reline** (dur), **Coe-Soft** (souple temporaire), **F.I.T.T.** (tissus à remettre en état)."
  }
 ]
};
