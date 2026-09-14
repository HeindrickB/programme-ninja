/* =============================================================
   PROGRAMME NINJA — DONNÉES DU PARCOURS
   -------------------------------------------------------------
   Ce fichier contient TOUT le contenu du programme.
   Tu peux l'éditer à la main, ou passer par le "Mode gérant"
   dans l'application (menu ☰ en haut à gauche).

   TYPES DE QUÊTE
     'square' = carré    -> étape OBLIGATOIRE pour atteindre le point suivant
     'circle' = rond     -> étape OPTIONNELLE (bonus, non bloquante)
     'gear'   = engrenage-> POINT CLÉ (débloque le chapitre suivant)

   size  : importance visuelle. 0.6 = petit, 1 = normal, 1.5 = imposant
   deps  : liste des id de quêtes à valider AVANT celle-ci
           (toutes obligatoires : logique ET -> ce sont elles qui bloquent)
   liens : flèches entrantes NON bloquantes (typiquement depuis un rond
           optionnel). La flèche est dessinée, elle s'allume en bordeaux
           quand on cherche le chemin, mais elle n'empêche pas de valider.
   x, y  : position sur l'arbre (pixels). Modifiable au doigt en mode gérant.
   video : URL YouTube / Vimeo / .mp4  (laisser "" si pas encore tournée)
   ============================================================= */

const PROGRAMME = {
  version: 1,
  titre: "Programme Ninja",
  chapitres: [

    /* ==========================================================
       CHAPITRE 0 — INFORMATIONS IMPORTANTES
       ========================================================== */
    {
      id: "ch_mtv49t3o",
      numero: 0,
      titre: "Informations importantes",
      sousTitre: "",
      requis: [],
      quetes: [
        {
          id: "ch_mtv49t3o_mtzgvd9t",
          type: "square", size: 1.5, icon: "⭐",
          titre: "Bienvenue",
          x: 50, y: 220,
          deps: [],
          desc: "Ici commence un arbre de progression complet, pensé pour t'emmener d'un niveau débutant total jusqu'aux meilleurs niveaux français en ninja. Le but de cette appli est simple : faire découvrir cette discipline au plus grand nombre, et montrer tout ce qu'il est possible d'apprendre en suivant le bon chemin.\n\nIl n'y a pas d'ordre imposé pour valider les quêtes — mais une trame générale se dessine, et une vraie progression se construit chapitre après chapitre.\n\nQuand tu maîtrises ce qui est décrit dans une quête, appuie sur « valider » pour débloquer ce qui suit. Essaie tout de suite : valide cette quête pour voir la suite apparaître.",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtv49t3o_mtzhl1wh",
          type: "square", size: 1.5, icon: "⭐",
          titre: "Fonctionnement de l'application",
          x: 376, y: 219,
          deps: ["ch_mtv49t3o_mtzgvd9t"],
          desc: "Trois formes t'accompagnent dans l'arbre. Le rond : souvent un bonus, jamais obligatoire pour avancer. Le carré : une étape à valider pour progresser. L'engrenage : un point clé, une compétence charnière vraiment importante à maîtriser. Plus une icône est grande, plus elle est importante à apprendre.\n\nEntre deux quêtes, une flèche en pointillé ne bloque rien : c'est une piste bonus. Une flèche pleine verrouille la suite tant que l'étape précédente n'est pas validée.\n\nTu peux zoomer, dézoomer et te déplacer librement dans l'arbre. Pour voir en un coup d'œil ce qu'il te reste à faire sur une progression, reste appuyé sur une icône : le chemin restant s'illumine en rouge.\n\nEn haut à gauche, la liste des chapitres — navigue où tu veux si tu es curieux. En haut à droite, un bouton te donne une vue d'ensemble du chapitre en cours.\n\nLes cases grises claires sont déjà accessibles et peuvent être validées. Les cases grises foncées sont encore verrouillées par une étape précédente.",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtv49t3o_mtzhq5xm",
          type: "square", size: 1.5, icon: "⭐",
          titre: "Gratuit et sans pub",
          x: 710, y: 219,
          deps: ["ch_mtv49t3o_mtzhl1wh"],
          desc: "Programme Ninja est gratuite, sans aucune publicité, et le restera. J'y ai passé énormément de temps en dehors de mes heures de travail, simplement pour faire plaisir à la communauté ninja et rendre cette discipline plus accessible à tous.\n\nSi l'appli t'aide et que tu as envie de me remercier pour ce travail, un petit geste est toujours possible — jamais demandé, jamais obligatoire.",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtv49t3o_mtzhr1nc",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Bon entraînement",
          x: 1064, y: 219,
          deps: ["ch_mtv49t3o_mtzhq5xm"],
          desc: "Bravo, tu viens de terminer ce premier chapitre ! Le vrai programme commence maintenant : bon entraînement, et bonne chance dans ta quête, ninja 🥷",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtv49t3o_mtzhsgpv",
          type: "circle", size: 1.5, icon: "•",
          titre: "Follow",
          x: 889, y: -19,
          deps: [],
          liens: ["ch_mtv49t3o_mtzhq5xm"],
          desc: "Envie de voir plus de ninja ? Retrouve-moi sur YouTube et Instagram : entraînements, astuces et coulisses. Un abonnement ne coûte rien et ça aide énormément à faire grandir tout ça 🙏",
          criteres: [],
          video: ""
        }
      ]
    },

    /* ==========================================================
       CHAPITRE 1 — LES BASES
       ========================================================== */
    {
      id: "ch1",
      numero: 1,
      titre: "Les bases",
      sousTitre: "Du grip zéro au lâché regrab barre à barre",
      requis: [],                 // toujours accessible
      quetes: [

        /* ---- Bloc grip / force ---- */
        {
          id: "c1_dead_hang",
          type: "square", size: 0.9, icon: "⏱",
          titre: "20 secondes de dead hang",
          x: 205, y: 121,
          deps: [],
          desc: "Suspension passive sur barre fixe, bras tendus, épaules relâchées puis engagées. C'est le tout premier test d'endurance de la main.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_changement_prise",
          type: "square", size: 0.9, icon: "🔄",
          titre: "Changement de prise",
          x: 462, y: 120,
          deps: [],
          desc: "Passer de pronation à supination (et inversement) en suspension, une main après l'autre, sans poser les pieds.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_traction_australienne",
          type: "square", size: 0.9, icon: "🧗",
          titre: "Traction australienne stricte",
          x: 334, y: 740,
          deps: [],
          desc: "Traction horizontale corps gainé, barre basse. La porte d'entrée avant la vraie traction.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_demi_traction",
          type: "square", size: 0.9, icon: "💪",
          titre: "Demi-traction avec kipping",
          x: 333, y: 542,
          deps: ["c1_traction_australienne"],
          desc: "Traction partielle avec élan des jambes : on cherche à casser l'angle des bras et à monter le menton vers la barre.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_traction_complete",
          type: "circle", size: 0.85, icon: "🏅",
          titre: "Traction complète stricte",
          x: 167, y: 541,
          deps: ["c1_demi_traction"],
          desc: "Bonus très rentable : la traction stricte, sans élan. Elle accélère énormément tout le reste du programme.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_grip_force",
          type: "square", size: 1.45, icon: "✊",
          titre: "Grip / Force",
          x: 333, y: 331,
          deps: ["c1_dead_hang", "c1_changement_prise", "c1_demi_traction"],
          desc: "Étape charnière du chapitre. Ta main et ton dos peuvent enfin encaisser du volume. Tout le ninja repose là-dessus.",
          criteres: ["À définir"],
          video: ""
        },

        /* ---- Bloc timing / jambes ---- */
        {
          id: "c1_montee_genou",
          type: "square", size: 0.8, icon: "🦵",
          titre: "Montée de genou",
          x: 500, y: 840,
          deps: [],
          desc: "En suspension, remonter les genoux vers la poitrine. Base du gainage suspendu.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_montee_genou_deplie",
          type: "square", size: 0.85, icon: "🦿",
          titre: "Montée de genou dépliée",
          x: 500, y: 665,
          deps: ["c1_montee_genou"],
          desc: "Même mouvement, mais on déplie les jambes en fin de course : c'est ce geste qui crée l'énergie du balancier.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_talon_fesse",
          type: "circle", size: 0.75, icon: "🔥",
          titre: "Talon-fesse",
          x: 760, y: 665,
          deps: [],
          desc: "Bonus : ramener les talons vers les fesses en suspension. Améliore la coordination du bas du corps sous barre.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_timing",
          type: "square", size: 1, icon: "⏲",
          titre: "Timing",
          x: 630, y: 525,
          deps: ["c1_montee_genou_deplie"],
          liens: ["c1_talon_fesse"],
          desc: "Synchroniser la montée de genou dépliée avec l'oscillation du corps. Sans timing, pas de balancier.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_regrip",
          type: "circle", size: 0.85, icon: "🖐",
          titre: "Regrip sur barre",
          x: 630, y: 120,
          deps: [],
          desc: "Bonus : relâcher et reprendre la barre au même endroit, en suspension. Prépare tous les lâchés du programme.",
          criteres: ["À définir"],
          video: ""
        },

        /* ---- POINT CLÉ 1 ---- */
        {
          id: "c1_balancier",
          type: "gear", size: 1.55, icon: "🌀",
          titre: "Balancier sur barre fixe",
          x: 631, y: 331,
          deps: ["c1_grip_force", "c1_timing"],
          liens: ["c1_regrip"],
          desc: "POINT CLÉ. Le balancier est le moteur de tout le ninja : c'est lui qui envoie le corps d'un obstacle à l'autre. Tant qu'il n'est pas propre, aucun lâché ne sera fiable.",
          criteres: ["À définir"],
          video: ""
        },

        /* ---- Bloc lâchés ---- */
        {
          id: "c1_lache_barre_fixe",
          type: "square", size: 1.05, icon: "➡",
          titre: "Lâché barre fixe",
          x: 930, y: 330,
          deps: ["c1_balancier"],
          desc: "Premier vrai lâché : on se laisse partir en avant depuis le balancier et on réceptionne au sol, debout.",
          criteres: ["À définir"],
          video: ""
        },

        {
          id: "c1_lache_precision",
          type: "circle", size: 1.15, icon: "🎯",
          titre: "Lâché précision (barre → box)",
          x: 930, y: 105,
          deps: ["c1_lache_barre_fixe"],
          desc: "Branche bonus de distance. On lâche la barre et on réceptionne pieds joints sur une box placée de plus en plus loin. Chaque distance est une quête bonus à part.",
          criteres: ["À définir"],
          video: ""
        },
        { id:"c1_prec_4", type:"circle", size:0.6, icon:"4", titre:"Précision 4 pas",  x: 715, y: 20, deps: ["c1_lache_precision"], desc:"Réception sur box à 4 longueurs de pied.", criteres: ["À définir"], video:"" },
        { id:"c1_prec_5", type:"circle", size:0.6, icon:"5", titre:"Précision 5 pas",  x: 830, y: -45, deps: ["c1_prec_4"], desc:"Réception sur box à 5 longueurs de pied.", criteres: ["À définir"], video:"" },
        { id:"c1_prec_6", type:"circle", size:0.6, icon:"6", titre:"Précision 6 pas",  x: 955, y: -60, deps: ["c1_prec_5"], desc:"Réception sur box à 6 longueurs de pied.", criteres: ["À définir"], video:"" },
        { id:"c1_prec_7", type:"circle", size:0.6, icon:"7", titre:"Précision 7 pas",  x: 1075, y: -40, deps: ["c1_prec_6"], desc:"Réception sur box à 7 longueurs de pied.", criteres: ["À définir"], video:"" },
        { id:"c1_prec_8", type:"circle", size:0.6, icon:"8", titre:"Précision 8 pas",  x: 1175, y: 30, deps: ["c1_prec_7"], desc:"Réception sur box à 8 longueurs de pied.", criteres: ["À définir"], video:"" },

        {
          id: "c1_lache_touche",
          type: "square", size: 1.05, icon: "👆",
          titre: "Lâché touché",
          x: 1200, y: 330,
          deps: ["c1_lache_barre_fixe"],
          desc: "On lâche, on va toucher la barre suivante d'une main, et on retombe. Étape de confiance avant le vrai regrab.",
          criteres: ["À définir"],
          video: ""
        },
        {
          id: "c1_saut_regrab",
          type: "square", size: 1, icon: "🤸",
          titre: "Saut Regrab",
          x: 1200, y: 530,
          deps: ["c1_lache_barre_fixe"],
          desc: "Depuis le sol, sauter et attraper une barre en suspension franche. Apprend à absorber le choc de réception dans les mains et les épaules.",
          criteres: ["À définir"],
          video: ""
        },

        /* ---- POINT CLÉ 2 — fin de chapitre ---- */
        {
          id: "c1_lache_regrab",
          type: "gear", size: 1.6, icon: "🔗",
          titre: "Lâché Regrab barre à barre",
          x: 1500, y: 330,
          deps: ["c1_lache_touche", "c1_saut_regrab"],
          desc: "POINT CLÉ DE FIN DE CHAPITRE. Lâcher une barre et en attraper une autre, avec au minimum 4 longueurs de pied entre les deux. C'est le geste signature du ninja : il ouvre le Chapitre 2.",
          criteres: ["À définir"],
          video: ""
        },
        { id:"c1_regrab_5", type:"circle", size:0.6, icon:"5", titre:"Regrab 5 pas", x: 1320, y: 140, deps: ["c1_lache_regrab"], desc:"Lâché regrab barre à barre à 5 longueurs de pied.", criteres: ["À définir"], video:"" },
        { id:"c1_regrab_6", type:"circle", size:0.6, icon:"6", titre:"Regrab 6 pas", x: 1430, y: 75, deps: ["c1_regrab_5"], desc:"Lâché regrab barre à barre à 6 longueurs de pied.", criteres: ["À définir"], video:"" },
        { id:"c1_regrab_7", type:"circle", size:0.6, icon:"7", titre:"Regrab 7 pas", x: 1555, y: 70, deps: ["c1_regrab_6"], desc:"Lâché regrab barre à barre à 7 longueurs de pied.", criteres: ["À définir"], video:"" },
        { id:"c1_regrab_8", type:"circle", size:0.6, icon:"8", titre:"Regrab 8 pas", x: 1670, y: 130, deps: ["c1_regrab_7"], desc:"Lâché regrab barre à barre à 8 longueurs de pied.", criteres: ["À définir"], video:"" }
      ]
    },

    /* ==========================================================
       CHAPITRE 2 — ÇA COMMENCE À DEVENIR SÉRIEUX
       (brouillon transcrit du schéma manuscrit — à relire/ajuster)
       ========================================================== */
    {
      id: "ch2",
      numero: 2,
      titre: "Ça commence à devenir sérieux",
      sousTitre: "Prises variées, gibbon, sangles et première compétition",
      requis: ["c1_lache_regrab"],
      brouillon: true,
      quetes: [

        /* ---- Point clé repris automatiquement du Chapitre 1 ----
           Se valide tout seul dès que "c1_lache_regrab" est validé.
           Sert de point de départ visible à ce chapitre. */
        {
          id: "c1_lache_regrab_ch2",
          type: "gear", size: 1.4, icon: "🔗",
          titre: "Lâché Regrab barre à barre",
          x: 400, y: 330,
          deps: [],
          carryFrom: "c1_lache_regrab",
          desc: "Reprise automatique du Chapitre 1 : le geste signature qui ouvre ce chapitre.",
          criteres: [],
          video: ""
        },

        {
          id: "c2_grip_force",
          type: "square", size: 1.45, icon: "✊",
          titre: "Grip / Force (niveau 2)",
          x: 713, y: 332,
          deps: ["c1_lache_regrab_ch2", "c2_gibbon_matche"],
          desc: "Nouveau socle de force : la main doit maintenant tenir sur des supports qui ne sont plus des barres.",
          criteres: ["À définir"],
          video: ""
        },

        /* --- Colonne des supports --- */
        { id:"c2_reglettes",     type:"square", size:1, icon:"▤", titre:"Réglettes",        x: 1042, y: 159, deps: ["c2_grip_force"], desc:"Suspension sur réglettes (petites prises d'escalade).", criteres:["À définir"], video:"" },
        { id:"c2_demi_sphere",   type:"square", size:1, icon:"◗", titre:"Demi-sphère",      x: 1041, y: 305, deps: ["c2_grip_force"], desc:"Suspension sur demi-sphères.", criteres:["À définir"], video:"" },
        { id:"c2_barre_pivot",   type:"square", size:1, icon:"⟳", titre:"Barre pivotante",  x: 1042, y: 459, deps: ["c2_grip_force"], desc:"Suspension sur barre qui tourne librement.", criteres:["À définir"], video:"" },
        { id:"c2_boules",        type:"square", size:1, icon:"⚫", titre:"Boules",           x: 1045, y: 611, deps: ["c2_grip_force"], desc:"Suspension sur boules suspendues.", criteres:["À définir"], video:"" },
        { id:"c2_nunchaku",      type:"square", size:1, icon:"⌇", titre:"Nunchaku",         x: 1046, y: 753, deps: ["c2_grip_force"], desc:"Suspension sur nunchakus.", criteres:["À définir"], video:"" },
        { id:"ch2_mtvdysge",     type:"square", size:1, icon:"⭐", titre:"Lock off 2 bras",  x: 1044, y: 9,   deps: ["c2_grip_force"], desc:"", criteres:[], video:"" },
        { id:"ch2_mtvdzlog",     type:"square", size:1, icon:"⭐", titre:"Lock off 1 bras",  x: 1329, y: 11,  deps: ["ch2_mtvdysge"], desc:"", criteres:[], video:"" },

        /* --- Branche précision (depuis la reprise du Chapitre 1) --- */
        { id:"ch2_mtwlqzbh",    type:"circle", size:0.6, icon:"⭐", titre:"9 pas",  x: 261, y: 195, deps: ["c1_lache_regrab_ch2"], desc:"", criteres:[], video:"" },
        { id:"ch2_mtwlrplm",    type:"circle", size:0.6, icon:"⭐", titre:"10 pas", x: 348, y: 121, deps: ["ch2_mtwlqzbh"], desc:"", criteres:[], video:"" },
        { id:"ch2_mtwlrqfj",    type:"circle", size:0.6, icon:"⭐", titre:"11 pas", x: 454, y: 122, deps: ["ch2_mtwlrplm"], desc:"", criteres:[], video:"" },
        { id:"ch2_mtwlrr4x",    type:"circle", size:0.6, icon:"⭐", titre:"12 pas", x: 532, y: 197, deps: ["ch2_mtwlrqfj"], desc:"", criteres:[], video:"" },

        /* --- Lâché regrab sur chaque support --- */
        { id:"c2_lr_reglette",   type:"square", size:1, icon:"➡", titre:"Lâché regrab réglette",       x: 1328, y: 161, deps: ["c2_reglettes"],   desc:"Lâcher et attraper une réglette.", criteres:["À définir"], video:"" },
        { id:"c2_lr_demi",       type:"square", size:1, icon:"➡", titre:"Lâché regrab demi-sphère",    x: 1327, y: 305, deps: ["c2_demi_sphere"], desc:"Lâcher et attraper une demi-sphère.", criteres:["À définir"], video:"" },
        { id:"c2_lr_pivot",      type:"square", size:1, icon:"➡", titre:"Lâché regrab barre pivotante",x: 1327, y: 458, deps: ["c2_barre_pivot"], desc:"Lâcher et attraper une barre pivotante.", criteres:["À définir"], video:"" },
        { id:"c2_lr_boules",     type:"square", size:1, icon:"➡", titre:"Lâché regrab boules",         x: 1328, y: 611, deps: ["c2_boules"],      desc:"Lâcher et attraper une boule.", criteres:["À définir"], video:"" },
        { id:"c2_lr_nunchaku",   type:"square", size:1, icon:"➡", titre:"Lâché regrab nunchaku",       x: 1329, y: 751, deps: ["c2_nunchaku"],    desc:"Lâcher et attraper un nunchaku.", criteres:["À définir"], video:"" },

        /* --- Branche gibbon --- */
        { id:"c2_gibbon_matche", type:"square", size:1,    icon:"🐒", titre:"Gibbon matché",        x: 264, y: 646, deps: ["c1_balancier_ch2"], desc:"Déplacement en gibbon avec les deux mains sur la même prise.", criteres:["À définir"], video:"" },
        { id:"c2_gibbon_1bras",  type:"circle", size:0.95, icon:"🐒", titre:"Gibbon sur barre 1 bras", x: 74, y: 648, deps: ["c2_gibbon_matche"], desc:"Gibbon barre à barre à un seul bras.", criteres:["À définir"], video:"" },
        { id:"c2_gibbon_boules", type:"circle", size:0.9,  icon:"⚫", titre:"Gibbon sur boules",    x: 571, y: 611, deps: ["c2_gibbon_matche", "c2_boules"],   desc:"Gibbon sur des boules.", criteres:["À définir"], video:"" },
        { id:"c2_gibbon_nunch",  type:"circle", size:0.9,  icon:"⌇", titre:"Gibbon sur nunchaku",  x: 570, y: 747, deps: ["c2_gibbon_matche", "c2_nunchaku"], desc:"Gibbon sur nunchakus.", criteres:["À définir"], video:"" },
        { id:"c2_gibbon_anneau", type:"circle", size:0.9,  icon:"⭕", titre:"Gibbon sur anneau",    x: 374, y: 868, deps: ["c2_gibbon_matche"], desc:"Gibbon sur anneaux.", criteres:["À définir"], video:"" },

        /* --- Branche balancier / sangles ---
           "c1_balancier_ch2" est repris automatiquement du Chapitre 1 : il
           se valide seul dès que le point clé d'origine l'est, et sert de
           point de départ visible à cette branche. */
        { id:"c1_balancier_ch2", type:"gear", size:1.2, icon:"🌀", titre:"Balancier sur barre fixe", x: 112, y: 1032, deps: [], carryFrom:"c1_balancier", desc:"Reprise automatique du Chapitre 1 : ce point clé est déjà acquis, il sert de socle à cette branche du Chapitre 2.", criteres:[], video:"" },
        { id:"c2_balancier_sangle", type:"square", size:1.05, icon:"🪢", titre:"Balancier sur sangle avec élan de base", x: 420, y: 1030, deps: ["c1_balancier_ch2"], desc:"Reproduire le balancier sur une sangle suspendue.", criteres:["À définir"], video:"" },
        { id:"c2_balancier_pm",  type:"circle", size:0.9, icon:"🪢", titre:"Balancier sur sangle point mort", x: 268, y: 1196, deps: ["c2_balancier_sangle"], desc:"Balancier sur sangle en partant à l'arrêt, sans élan.", criteres:["À définir"], video:"" },
        { id:"c2_balancier_cote",type:"square", size:0.95, icon:"↔", titre:"Balancier de côté", x: 640, y: 900, deps: ["c2_balancier_sangle"], desc:"Balancier latéral.", criteres:["À définir"], video:"" },
        { id:"c2_lache_cote",    type:"square", size:0.95, icon:"↗", titre:"Lâché de côté", x: 843, y: 902, deps: ["c2_balancier_cote"], desc:"Lâcher depuis un balancier latéral.", criteres:["À définir"], video:"" },
        { id:"c2_lr_cote_barre", type:"square", size:1, icon:"➡", titre:"Lâché regrab côté à barre", x: 1051, y: 902, deps: ["c2_lache_cote"], desc:"Lâché latéral vers une barre.", criteres:["À définir"], video:"" },
        { id:"c2_lr_cote_cote",  type:"square", size:1, icon:"➡", titre:"Lâché regrab côté à côté", x: 1329, y: 902, deps: ["c2_lr_cote_barre"], desc:"Lâché latéral d'une prise latérale vers une autre.", criteres:["À définir"], video:"" },
        { id:"c2_prec_sangle",   type:"square", size:1, icon:"🎯", titre:"Lâché précision sangle → box (8 pas)", x: 940, y: 1057, deps: ["c2_balancier_sangle"], desc:"Lâcher une sangle et réceptionner sur une box à 8 pas.", criteres:["À définir"], video:"" },
        { id:"c2_lr_sangle",     type:"square", size:1, icon:"➡", titre:"Lâché regrab sangle (8 pas)", x: 1328, y: 1057, deps: ["c2_prec_sangle"], desc:"Lâcher une sangle et attraper la suivante.", criteres:["À définir"], video:"" },
        { id:"c2_chgt_dir_2",    type:"square", size:1.05, icon:"🔀", titre:"Changement de direction — 2 points d'accroche", x: 1057, y: 1404, deps: ["c2_balancier_sangle"], desc:"Changer de direction en s'appuyant sur deux points d'accroche.", criteres:["À définir"], video:"" },
        { id:"c2_chgt_dir_1",    type:"circle", size:0.95, icon:"🔀", titre:"Changement de direction — 1 point d'accroche", x: 1240, y: 1536, deps: ["c2_chgt_dir_2"], desc:"Version avancée, sur un seul point d'accroche.", criteres:["À définir"], video:"" },

        /* --- POINT CLÉ : fondamentaux acquis --- */
        {
          id: "c2_fondamentaux",
          type: "gear", size: 1.6, icon: "🥷",
          titre: "Fondamentaux acquis",
          x: 1882, y: 751,
          deps: ["c2_lr_reglette", "c2_lr_demi", "c2_lr_pivot", "c2_lr_boules", "c2_lr_nunchaku", "c2_lr_cote_cote", "c2_lr_sangle", "c2_chgt_dir_2", "ch2_mtvdzlog"],
          desc: "POINT CLÉ. Tu maîtrises tous les supports et tous les types de lâché. Tu peux entrer sur un parcours de compétition sans être surpris par un obstacle.",
          criteres: ["Toutes les branches obligatoires du chapitre validées"],
          video: ""
        },
        {
          id: "c2_premiere_compet",
          type: "square", size: 1.2, icon: "🏁",
          titre: "Faire sa 1ère compétition",
          x: 1882, y: 1125,
          deps: ["c2_fondamentaux"],
          desc: "POINT CLÉ DE FIN DE CHAPITRE. Le passage à l'acte : s'inscrire et courir une vraie compétition de parcours ninja.",
          criteres: ["Participer à une compétition officielle, quel que soit le résultat"],
          video: ""
        },
        { id:"c2_podium_3", type:"circle", size:0.85, icon:"🥉", titre:"Arriver 3ème",  x: 2055, y: 1297, deps: ["c2_premiere_compet"], desc:"Monter sur la 3ème marche d'une compétition.", criteres:["Podium confirmé"], video:"" },
        { id:"c2_podium_2", type:"circle", size:0.9,  icon:"🥈", titre:"Arriver 2ème",  x: 2054, y: 952, deps: ["c2_premiere_compet"], desc:"Monter sur la 2ème marche d'une compétition.", criteres:["Podium confirmé"], video:"" },
        { id:"c2_podium_1", type:"circle", size: 0.9,    icon:"🥇", titre:"Arriver 1er",   x: 2055, y: 1122, deps: ["c2_premiere_compet"], desc:"Gagner une compétition.", criteres:["Victoire confirmée"], video:"" }
      ]
    },

    /* ==========================================================
       CHAPITRE 3 — LE TECHNICIEN
       ========================================================== */
    {
      id: "ch_mtvv70mg",
      numero: 3,
      titre: "Le technicien",
      sousTitre: "",
      requis: ["c2_fondamentaux"],
      quetes: [
        {
          id: "ch_mtvv70mg_mtvvbghn",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Fondamentaux acquis",
          x: 651, y: 688,
          deps: [],
          carryFrom: "c2_fondamentaux",
          desc: "",
          criteres: [],
          video: ""
        },
        { id:"ch_mtvv70mg_mtvve8e4", type:"square", size:1.45, icon:"⭐", titre:"Tech objets", x: 169, y: 163, deps: ["ch_mtvv70mg_mtvvbghn", "ch_mtvv70mg_mtvwbgpe", "ch_mtvv70mg_mtvwbsmq", "ch_mtvv70mg_mtvwbtae", "ch_mtvv70mg_mtvwbtxn", "ch_mtvv70mg_mtvwbubs"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvwbgpe", type:"square", size:1.2, icon:"⭐", titre:"Rodeo Rope", x: 0, y: -199, deps: ["ch_mtvv70mg_mtwnwq81", "ch_mtvv70mg_mtwnwv9w"], liens: ["ch_mtvv70mg_mtwnuyrh"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvwbsmq", type:"square", size:1.2, icon:"⭐", titre:"Anneaux", x: 168, y: 621, deps: ["ch_mtvv70mg_mtwnajg4", "ch_mtvv70mg_mtwn9vir", "ch_mtvv70mg_mtwnb3hl"], liens: ["ch_mtvv70mg_mtwnb6ot"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvwbtae", type:"square", size:1.2, icon:"⭐", titre:"Flying bar", x: -339, y: 162, deps: ["ch_mtvv70mg_mtvx99au", "ch_mtvv70mg_mtvxfssg"], liens: ["ch_mtvv70mg_mtvx96u3", "ch_mtvv70mg_mtvxnj1g", "ch_mtvv70mg_mtvxnjyu", "ch_mtvv70mg_mtvxr2fo", "ch_mtvv70mg_mtvxvcko"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvwbtxn", type:"square", size:1.2, icon:"⭐", titre:"Metal Cane / Talon", x: -342, y: 538, deps: ["ch_mtvv70mg_mtvyccog"], liens: ["ch_mtvv70mg_mtvyc5jw"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvwbubs", type:"square", size:1.2, icon:"⭐", titre:"Batarang", x: -346, y: 1026, deps: ["ch_mtvv70mg_mtwl1t9r"], liens: ["ch_mtvv70mg_mtwl14ur"], desc:"", criteres: [], video:"" },
        {
          id: "ch_mtvv70mg_mtvwey04",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Technicien professionnel",
          x: 661, y: -768,
          deps: ["ch_mtvv70mg_mtvve8e4", "ch_mtvv70mg_mtvwgbct", "ch_mtvv70mg_mtvx06c5", "ch_mtvv70mg_mtzg0m6a"],
          desc: "",
          criteres: [],
          video: ""
        },
        { id:"ch_mtvv70mg_mtvwg8z8", type:"square", size:1.45, icon:"⭐", titre:"Links Classiques à vague", x: 655, y: 73, deps: ["ch_mtvv70mg_mtzfvvfz"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvwgbct", type:"square", size:1.45, icon:"⭐", titre:"Lâché + Tech", x: 1162, y: 163, deps: ["ch_mtvv70mg_mtvvbghn", "ch_mtvv70mg_mtzgmr92", "ch_mtvv70mg_mtzgmsjp", "ch_mtvv70mg_mtzgmvsj", "ch_mtvv70mg_mtzgmwsb"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvx06c5", type:"square", size:1.3, icon:"⭐", titre:"Tech Spécifique", x: 1126, y: 782, deps: ["ch_mtvv70mg_mtvvbghn", "ch_mtvv70mg_mtwo5pdp", "ch_mtvv70mg_mtwo5l5l", "ch_mtvv70mg_mtwo58rr", "ch_mtvv70mg_mu0ztros"], liens: ["ch_mtvv70mg_mtwoa6q3"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvx96u3", type:"circle", size:0.8, icon:"⭐", titre:"Flying bar Elastique", x: -576, y: -34, deps: ["ch_mtvv70mg_mtvx99au"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvx99au", type:"square", size:0.9, icon:"⭐", titre:"Flying bar classique", x: -815, y: 159, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvx99l8", type:"square", size:0.8, icon:"⭐", titre:"Salmon ladder Up", x: -577, y: -205, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvxfssg", type:"square", size:0.8, icon:"⭐", titre:"Salmon ladder Down", x: -340, y: -70, deps: ["ch_mtvv70mg_mtvx99l8"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvxnj1g", type:"circle", size:0.8, icon:"⭐", titre:"Flying bar précision", x: -575, y: 87, deps: ["ch_mtvv70mg_mtvx99au"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvxnjyu", type:"circle", size:0.8, icon:"⭐", titre:"Flying bar 180° avec la barre", x: -574, y: 208, deps: ["ch_mtvv70mg_mtvx99au"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvxr2fo", type:"circle", size:0.8, icon:"⭐", titre:"Reverse catch", x: -574, y: 347, deps: ["ch_mtvv70mg_mtvx99au"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvxvcko", type:"circle", size:0.8, icon:"⭐", titre:"Superman Lâché", x: -341, y: 347, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvy0zg5", type:"circle", size:0.7, icon:"⭐", titre:"2 crans", x: -705, y: -308, deps: ["ch_mtvv70mg_mtvx99l8"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvy28zl", type:"circle", size:0.7, icon:"⭐", titre:"3 crans", x: -579, y: -373, deps: ["ch_mtvv70mg_mtvy0zg5"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvy29ku", type:"circle", size:0.7, icon:"⭐", titre:"4 crans", x: -457, y: -309, deps: ["ch_mtvv70mg_mtvy28zl"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvyc5jw", type:"circle", size:0.8, icon:"⭐", titre:"Demi-tour", x: -343, y: 726, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvyccog", type:"square", size:0.8, icon:"⭐", titre:"Lâché précision", x: -498, y: 538, deps: ["ch_mtvv70mg_mtvygfj8"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvygfj8", type:"square", size:0.8, icon:"⭐", titre:"Lâché vers l'avant sortie de face", x: -656, y: 537, deps: ["ch_mtvv70mg_mtvygj6p"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvygj6p", type:"square", size:0.8, icon:"⭐", titre:"Lâché vers l'avant sortie de côté", x: -812, y: 536, deps: ["ch_mtvv70mg_mtvygkpr"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvygkpr", type:"square", size:0.8, icon:"⭐", titre:"Lâché 180°", x: -813, y: 724, deps: ["ch_mtvv70mg_mtvygl9f"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvygl9f", type:"square", size:0.8, icon:"⭐", titre:"Lâché 90°", x: -657, y: 724, deps: ["ch_mtvv70mg_mtvyglry"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtvyglry", type:"square", size:0.8, icon:"⭐", titre:"Glisser", x: -497, y: 724, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwl14ur", type:"circle", size:0.8, icon:"⭐", titre:"Demi-tour", x: -344, y: 865, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwl1jxd", type:"square", size:0.8, icon:"⭐", titre:"Saut sur barre", x: -498, y: 863, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwl1n38", type:"square", size:0.8, icon:"⭐", titre:"Lâché avant atterrissage avant", x: -803, y: 939, deps: ["ch_mtvv70mg_mtwl1qp1"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwl1ph9", type:"square", size:0.8, icon:"⭐", titre:"Lâché avant atterrissage côté", x: -660, y: 1024, deps: ["ch_mtvv70mg_mtwl1n38"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwl1qp1", type:"square", size:0.8, icon:"⭐", titre:"Batarang classique", x: -658, y: 861, deps: ["ch_mtvv70mg_mtwl1jxd"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwl1t9r", type:"square", size:0.8, icon:"⭐", titre:"Lâché côté atterrissage côté", x: -498, y: 1023, deps: ["ch_mtvv70mg_mtwl1ph9"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwn9vir", type:"square", size:0.8, icon:"⭐", titre:"Transfert devant à derrière", x: -68, y: 744, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnajg4", type:"square", size:0.8, icon:"⭐", titre:"Reverse skyhook", x: 72, y: 819, deps: ["ch_mtvv70mg_mtwnajug"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnajug", type:"square", size:0.8, icon:"⭐", titre:"Skyhook classique", x: -14, y: 980, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnb3hl", type:"square", size:0.8, icon:"⭐", titre:"Sortie un anneaux de côté", x: 260, y: 819, deps: ["ch_mtvv70mg_mtwnb3w5"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnb3w5", type:"square", size:0.8, icon:"⭐", titre:"Sortie doubles anneaux de côtés", x: 327, y: 979, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnb6ot", type:"circle", size:0.8, icon:"⭐", titre:"Sortie reverse à avant", x: 392, y: 743, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnuyrh", type:"circle", size:0.8, icon:"⭐", titre:"Transfert devant à derrière", x: 178, y: -310, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnvaf3", type:"square", size:0.8, icon:"⭐", titre:"Skyhook classique", x: -291, y: -426, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnwq81", type:"square", size:0.8, icon:"⭐", titre:"Reverse skyhook", x: -155, y: -313, deps: ["ch_mtvv70mg_mtwnvaf3"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnwus2", type:"square", size:0.8, icon:"⭐", titre:"Saut + catch", x: 1, y: -542, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwnwv9w", type:"square", size:0.8, icon:"⭐", titre:"Lâché barre à barré", x: 1, y: -388, deps: ["ch_mtvv70mg_mtwnwus2"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwo58rr", type:"square", size:0.8, icon:"⭐", titre:"Throwback", x: 1367, y: 630, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwo5l5l", type:"square", size:0.8, icon:"⭐", titre:"Coffin lâché", x: 1441, y: 831, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwo5pdp", type:"square", size:0.8, icon:"⭐", titre:"Spinning Disc", x: 1269, y: 952, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwo6j1n", type:"circle", size:0.7, icon:"⭐", titre:"Avec Objets", x: 1498, y: 475, deps: ["ch_mtvv70mg_mtwo58rr"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwo7fn9", type:"circle", size:0.7, icon:"⭐", titre:"Freestyle", x: 1568, y: 587, deps: ["ch_mtvv70mg_mtwo58rr"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwo7gaq", type:"circle", size:0.7, icon:"⭐", titre:"Avec objets", x: 1620, y: 781, deps: ["ch_mtvv70mg_mtwo5l5l"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwo7gfu", type:"circle", size:0.7, icon:"⭐", titre:"180° demi-tour", x: 1618, y: 906, deps: ["ch_mtvv70mg_mtwo5l5l"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtwoa6q3", type:"circle", size:0.7, icon:"⭐", titre:"Freestyle", x: 963, y: 956, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzfsqke", type:"square", size:0.9, icon:"⭐", titre:"Plat ventre", x: 652, y: 437, deps: ["ch_mtvv70mg_mtvvbghn"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzfvvfz", type:"square", size:0.9, icon:"⭐", titre:"Bras tendus", x: 652, y: 275, deps: ["ch_mtvv70mg_mtzfsqke"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzg0m6a", type:"square", size:1.45, icon:"⭐", titre:"Links Spécifiques", x: 655, y: -156, deps: ["ch_mtvv70mg_mtvwg8z8", "ch_mtvv70mg_mtzg1gn6", "ch_mtvv70mg_mtzg1h52"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzg1gn6", type:"square", size:1.05, icon:"⭐", titre:"Underbar", x: 476, y: -159, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzg1h52", type:"square", size:1.05, icon:"⭐", titre:"Speed link", x: 834, y: -154, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzg3i2p", type:"square", size:0.8, icon:"⭐", titre:"Changements directions en link", x: 826, y: 75, deps: ["ch_mtvv70mg_mtvwg8z8"], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzgmr92", type:"square", size:0.8, icon:"⭐", titre:"Soulever/enlever un objet", x: 1281, y: -110, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzgmsjp", type:"square", size:0.8, icon:"⭐", titre:"Up for grab", x: 1445, y: 42, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzgmvsj", type:"square", size:0.8, icon:"⭐", titre:"Pousser avec les pieds ou les mains", x: 1444, y: 258, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mtzgmwsb", type:"square", size:0.8, icon:"⭐", titre:"Changements de mains", x: 1279, y: 425, deps: [], desc:"", criteres: [], video:"" },
        { id:"ch_mtvv70mg_mu0ztros", type:"square", size:0.8, icon:"⭐", titre:"Tiktok", x: 1126, y: 1012, deps: [], desc:"", criteres: [], video:"" }

      ]
    },

    /* ==========================================================
       CHAPITRE 4 — FIN ?
       ========================================================== */
    {
      id: "ch_mtzhwcf0",
      numero: 4,
      annexe: false,
      titre: "Fin ? ",
      sousTitre: "Tous les points clés de ton parcours, réunis au même endroit.",
      requis: [],
      quetes: [
        {
          id: "ch_mtzhwcf0_mtzhwkwh",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Bon entraînement",
          x: 50, y: 220,
          deps: [],
          carryFrom: "ch_mtv49t3o_mtzhr1nc",
          desc: "Reprise automatique de l'introduction : le tout premier point clé validé sur ce programme.",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtzhwcf0_mtzhx408",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Balancier sur barre fixe",
          x: 308, y: 218,
          deps: [],
          carryFrom: "c1_balancier",
          desc: "Reprise automatique du Chapitre 1 : le moteur de tout le ninja.",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtzhwcf0_mtzhx58w",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Lâché regrab barre à barre",
          x: 580, y: 218,
          deps: [],
          carryFrom: "c1_lache_regrab",
          desc: "Reprise automatique du Chapitre 1 : le geste signature qui ouvre le Chapitre 2.",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtzhwcf0_mtzhx70f",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Fondamentaux acquis",
          x: 841, y: 218,
          deps: [],
          carryFrom: "c2_fondamentaux",
          desc: "Reprise automatique du Chapitre 2 : tous les supports et tous les lâchés maîtrisés.",
          criteres: [],
          video: ""
        },
        {
          id: "ch_mtzhwcf0_mtzhx81c",
          type: "gear", size: 1.6, icon: "⭐",
          titre: "Technicien professionnel",
          x: 1111, y: 220,
          deps: [],
          carryFrom: "ch_mtvv70mg_mtvwey04",
          desc: "Reprise automatique du Chapitre 3 : la maîtrise technique complète.",
          criteres: [],
          video: ""
        }
      ]
    }
  ]
};

if (typeof module !== "undefined") module.exports = PROGRAMME;
