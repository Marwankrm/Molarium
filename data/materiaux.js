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
     ]
    },
    {
     "id": "tenons-dentoclic-itena-clinical",
     "nom": "Tenons Dentoclic (Itena Clinical)",
     "type": "Tenons en inox 316L et titane TA6V, tenons calcinables, forets",
     "statut": "lue",
     "ind": [
      "Soutenir une reconstitution temporaire ou définitive après traitement radiculaire, par voie directe ou indirecte"
     ],
     "ci": [
      "Tenons **calcinables** : ni empreinte, ni reconstitution corono-radiculaire directe"
     ],
     "met": [
      "Forets : **Gates ou Largo** (gutta), **pilotes**, puis cylindro-coniques ou coniques ; contre-angle lent, **10 000 tr/min au plus**",
      "Vérifier l'intégrité de la racine, garder des parois dentinaires suffisantes",
      "**Indirect** : tenon métallique pour l'empreinte, tenon calcinable correspondant au labo ; provisoire avec un tenon de même diamètre, ciment provisoire **seulement sur les bords de la couronne**",
      "**Direct** : tenon en titane scellé définitivement"
     ],
     "ret": [
      "Le calcinable est plus fin de 2/100 mm : toujours l'associer au métallique de même référence",
      "Tenons métalliques à stériliser avant usage (autoclave 134 °C, 18 min) ; calcinables non stérilisables"
     ],
     "src": [
      {
       "t": "Notice Dentoclic",
       "u": "https://dvd-dental.com/content/documents/54-970/VafR1BVF4k9TEt6e3DayRhx4LRbRfbei.pdf"
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
      "Produit **corrosif** (pictogramme sur l'étiquette) : éviter le contact avec la peau, les yeux et les muqueuses ; notice du fabricant **non trouvée**"
     ],
     "met": [
      "Temps utilisés dans les fiches du site : **10 à 15 s**, **rinçage 5 s**, séchage doux (notice GC du G-Premio Bond)",
      "Fiche produit Henry Schein : gel de faible viscosité, **autolimitant** (arrête le mordançage à la bonne profondeur)"
     ],
     "ret": [
      "Les temps varient selon les fabricants (30 s sur émail pour certains gels) : **vérifier la notice de la seringue**"
     ],
     "src": [
      {
       "t": "Fiche produit Henry Schein",
       "u": "https://henryschein.co.uk/dental-gb/products/henry-schein-etch-gel-37.aspx?hssc=4"
      }
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
     ]
    },
    {
     "id": "filtek-3m-capsules-bright-natural-warm",
     "nom": "Filtek (3M), capsules Bright, Natural, Warm",
     "type": "Composite universel en capsules",
     "statut": "abs",
     "ind": [
      "Notice **non trouvée** pour la gamme de vos photos"
     ],
     "ci": [],
     "met": [
      "Teintes regroupées en Bright (B), Natural (N) et Warm (W) selon l'étiquette du tiroir"
     ],
     "ret": [
      "Envoyer une photo de la boîte pour identifier la gamme exacte"
     ],
     "src": []
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
     ]
    },
    {
     "id": "palodent-360-dentsply-sirona",
     "nom": "Palodent 360 (Dentsply Sirona)",
     "type": "Matrices circonférentielles à usage unique",
     "statut": "part",
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
     ]
    },
    {
     "id": "sof-lex-3m-strips-et-disques-stripmat-po",
     "nom": "Sof-Lex (3M), strips et disques ; Stripmat (Polydentia)",
     "type": "Finition et polissage ; bandes de polyester",
     "statut": "abs",
     "ind": [
      "Notices **non trouvées**"
     ],
     "ci": [],
     "met": [
      "Sof-Lex : strips de finition (réf. 1954) et de polissage ; disques fins",
      "Stripmat : bande polyester de 0,05 mm"
     ],
     "ret": [],
     "src": []
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
      "Aucune connue (mais il contient de l'**eugénol**)"
     ],
     "met": [
      "**Une cuillère de poudre** (première graduation) et **une goutte de liquide** sur le bloc",
      "Incorporer la poudre au liquide sur 1 à 2 cm, **en cercles en appuyant**, jusqu'à une pâte lisse, non collante, sans grains d'argent",
      "Appliquer au Lentulo ou à la lime, enduire le cône, l'enfoncer **lentement**",
      "EWT : **plus de 6 h** de temps de travail sur le bloc, prise en bouche en **moins de 2 h**"
     ],
     "ret": [
      "**Ne pas trop remplir** le canal (lésion péri-apicale) ; l'**argent** peut colorer la dent ; **digue** recommandée",
      "Inflammation péri-apicale possible les premiers jours"
     ],
     "src": [
      {
       "t": "Notice Kerr Pulp Canal Sealer / EWT",
       "u": "https://www.adamdental.com.au/Documents/Brand%20Management/Kerr/Pulp%20Canal%20Sealer/Instructions.pdf"
      }
     ]
    },
    {
     "id": "desocclusol-orange-acteon",
     "nom": "Desocclusol Orange (Acteon)",
     "type": "Solvant pour retraitement (huile essentielle d'orange)",
     "statut": "part",
     "ind": [
      "Retraitement endodontique : dissoudre les ciments **oxyde de zinc-eugénol** et la gutta"
     ],
     "ci": [
      "Non lues (dispositif de classe IIa, usage professionnel)"
     ],
     "met": [
      "Mode d'emploi **non trouvé**"
     ],
     "ret": [
      "Répond au « à préciser » de la fiche de retraitement sur l'instrument de désobturation : à confirmer avec le service"
     ],
     "src": [
      {
       "t": "Fiche produit Acteon",
       "u": "https://www.medicalexpo.com/prod/acteon-group/product-71216-1161024.html"
      }
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
     ]
    },
    {
     "id": "supracal-r-s",
     "nom": "Supracal (R&S)",
     "type": "Pâte d'hydroxyde de calcium prête à l'emploi (seringue 2 mL)",
     "statut": "part",
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
     ]
    },
    {
     "id": "navitip-capillary-tips-ultradent-irrifle",
     "nom": "NaviTip, Capillary Tips (Ultradent), IrriFlex, aiguilles d'irrigation Access",
     "type": "Embouts et canules d'irrigation et d'aspiration",
     "statut": "part",
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
     ]
    },
    {
     "id": "c-nes-de-papier-protaper-gold-et-maxima-",
     "nom": "Cônes de papier ProTaper Gold et Maxima (ISO 45-80) ; hypochlorite R&S",
     "type": "Séchage des canaux ; irrigant",
     "statut": "abs",
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
     "statut": "part",
     "ind": [
      "**Retrait de l'obturation canalaire** (gutta-percha, obturateurs à base de support, ciments) lors d'un **retraitement**"
     ],
     "ci": [
      "Ne pas forcer en cas de blocage : avis du senior"
     ],
     "met": [
      "Utiliser les trois limes **en séquence** : **D1** (30/100, 9 %, 16 mm, pointe coupante) pour pénétrer, **D2** (25/100, 8 %, 18 mm) pour le tiers moyen, **D3** (20/100, 7 %, 22 mm) pour le tiers apical",
      "D2 et D3 ont une pointe non coupante",
      "Désobturation associée au **Desocclusol Orange** (Acteon) au service",
      "Mise en forme ensuite aux **ProTaper Gold**"
     ],
     "ret": [
      "Fiche produit seulement : **vitesse et couple à confirmer** dans la notice et sur le moteur du service"
     ],
     "src": [
      {
       "t": "Dentsply Sirona France – fiche produit",
       "u": "https://www.dentsplysirona.com/fr-fr/acheter/product-page.html/BP-300165/protaper-universal-lime-en-rotation-continue-de-retraitement.html"
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
     "src": []
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
     ]
    },
    {
     "id": "futar-d-kettenbach",
     "nom": "Futar D (Kettenbach)",
     "type": "Silicone par addition pour enregistrement de l'occlusion",
     "statut": "part",
     "ind": [
      "Enregistrements occlusaux précis"
     ],
     "ci": [
      "Non lues"
     ],
     "met": [
      "**30 s** de temps de travail, **1 min 30** de prise en bouche à 23 °C (résumés du fabricant)"
     ],
     "ret": [
      "Notice complète non lue"
     ],
     "src": [
      {
       "t": "Aegis Dental, Futar D",
       "u": "https://www.aegisdentalnetwork.com/id/products/kettenbach/futar-d-slow"
      }
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
     "ret": [
      "Une étude in vitro la trouve **moins précise sur la dimension verticale** que le polyéther et le silicone"
     ],
     "src": [
      {
       "t": "Étude 2024 (PMC)",
       "u": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11000910"
      }
     ]
    },
    {
     "id": "hygenic-bite-wafers-coltene-alminax-rose",
     "nom": "Hygenic Bite Wafers (Coltene) ; Alminax rose (Kemdent) ; Pinnacle Modelling Wax (Dentsply Sirona)",
     "type": "Cires d'occlusion et de modelage",
     "statut": "part",
     "ind": [
      "**Hygenic Bite Wafers** : enregistrement de la relation entre dents du haut et du bas, **indiqués chez les patients **dentés**",
      "Alminax : cire d'enregistrement d'occlusion ; Pinnacle : cire de modelage"
     ],
     "ci": [
      "Hygenic : aucune contre-indication connue"
     ],
     "met": [
      "Hygenic : ramollir au besoin à l'eau tiède, **laisser refroidir avant de retirer**, excès avec un instrument chaud, refroidissement final à l'eau froide"
     ],
     "ret": [
      "Hygenic : **jeter la cire cassante** (risque d'inhalation) ; **pas de cire chaude** (brûlures)",
      "Notices d'Alminax et de Pinnacle **non trouvées**"
     ],
     "src": [
      {
       "t": "Notice Coltene cires Hygenic",
       "u": "https://products.coltene.com/DE/ZW/media/DOC_IFU_20005530A-08-23-Wax-IFU_IND.pdf?sprache=EN"
      }
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
     "met": [
      "Voir la **fiche « Rebasage direct »** du site (étapes détaillées pour les trois produits)"
     ],
     "ret": [
      "Rebasage direct = solution temporaire ; référence = rebasage indirect au laboratoire (thèse de Lille, 2022)",
      "**F.I.T.T. (notice 2024)** : environ **1 dose de poudre pour 1 de liquide** (fin) à **1,5 pour 1** (plus de corps) ; gobelets gradués 7 mL (poudre) et 5 mL (liquide) ; mélange d'environ 1 min ; retrait 2 à 3 min après la pose ; peut être porté plusieurs jours"
     ],
     "src": [
      {
       "t": "Fiche du site : Rebasage direct",
       "u": "#/prothese-amovible/rebasage-direct"
      }
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
   "x": "**Coiffage direct** : **Dycal** (hydroxyde de calcium). **Coiffage indirect ou liner** : **Dycal** ou **Calcimol LC** (photopolymérisable, pas à moins de 0,5 mm de la pulpe). **Base** : **CVI** (Fuji II LC, Ionofil Molar AC), jamais sur la pulpe directement."
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
   "x": "Chez l'**édenté** : **Aluwax** ou **pâte de Kerr** (pratique du service), vérifier la DVO au compas. Les **Hygenic Bite Wafers** sont indiqués pour les patients **dentés**. Le **Futar D** (silicone) est une option plus précise, notice à compléter."
  },
  {
   "t": "Rebasage",
   "x": "**GC Reline** (dur), **Coe-Soft** (souple temporaire), **F.I.T.T.** (tissus à remettre en état) : voir la fiche « Rebasage direct »."
  }
 ]
};
