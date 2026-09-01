# Prompt à donner à Claude

Copie-colle tout ce qui suit dans un nouveau chat Claude, en joignant
`index.html`, `programme.js` et `LISEZ-MOI.md`.

---

Je reprends un projet existant : une application web de progression pour l'entraînement
au **parcours ninja** (type Ninja Warrior, pour des pratiquants en salle de ninja qui
visent des compétitions françaises et internationales). Je te joins les fichiers.
Lis-les entièrement avant de proposer quoi que ce soit.

## Ce qu'est l'application

Un arbre de quêtes calqué sur le système **FTB Quests** des modpacks Minecraft, qui mène
un pratiquant du niveau zéro (aucune force, aucun grip) jusqu'à l'un des meilleurs niveaux
français, chapitre par chapitre.

**Trois formes, trois rôles :**
- **■ Carré** — étape obligatoire. Il faut la valider pour atteindre la suivante.
- **● Rond** — bonus optionnel. Intéressant mais ne bloque jamais la progression.
- **✦ Engrenage** — point clé. Marque la fin d'un chapitre et débloque le suivant.
  Un engrenage validé suffit à ouvrir le chapitre d'après, même si les carrés et ronds
  du chapitre ne sont pas tous faits.

**Taille des icônes** : proportionnelle à l'importance de l'étape. Le carré « Grip/Force »
est nettement plus gros que « 20 secondes de dead hang » ; l'engrenage « Balancier »
est plus gros que le carré « Timing ».

**Flèches** : elles indiquent le sens de progression. Trait plein = dépendance bloquante
(`deps`). Pointillés = lien optionnel venant d'un rond (`liens`) : la flèche est dessinée
et s'allume dans le chemin rouge, mais elle n'empêche jamais de valider.
Si trois flèches pleines convergent vers une étape, il faut valider les trois.

**États visuels :**
- gris foncé = pas encore accessible (étape précédente non validée)
- gris clair = réalisable maintenant, pas encore validée
- vert = validée, avec effet sonore (court pour un carré/rond, long et épique pour un engrenage)

**Interactions tactiles :** un doigt = se déplacer, deux doigts = zoomer, appui court sur
une icône = fiche détaillée (objectif, critères, vidéo de démonstration), **appui long sur
une icône verrouillée** = tout le chemin manquant s'allume en rouge bordeaux jusqu'à elle.
☰ en haut à gauche = tiroir des chapitres et annexes, tous consultables même verrouillés,
pour voir ce qui attend plus loin.

**Fond** : mosaïque sobre de petits carrés gris-vert légèrement nuancés, dans l'esprit
de l'interface FTB Quests.

## Architecture

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'application : HTML, CSS et JavaScript dans un seul fichier. Aucune dépendance externe, aucun framework. |
| `programme.js` | **Tout le contenu** : chapitres, quêtes, textes, critères, positions, liens vidéo. C'est ici qu'on ajoute ou modifie des étapes. |
| `sw.js`, `manifest.webmanifest`, `icon.svg` | Installation sur téléphone (PWA) et fonctionnement hors-ligne. |

Le tout est hébergé gratuitement sur GitHub Pages. **Contrainte forte : le projet doit
rester à coût zéro et sans serveur.** Tout est enregistré dans le `localStorage` du
téléphone, via un objet `Store` isolé en haut du script — c'est le seul endroit à réécrire
si on passe un jour à un cloud avec comptes utilisateurs. `Store` gère cinq clés séparées :
la progression, les préférences (son on/off, code gérant, dernier chapitre), le programme
édité par le gérant (surcharge `programme.js`), le thème `THEME` (couleurs) et les sons
personnalisés `SOUND`.

Il existe un **espace gérant** protégé par un code (par défaut `1234`) qui permet, sans
toucher au code : éditer les quêtes (y compris une **image personnalisée** en plus de
l'emoji, champ `iconImg` = data URI), coller les liens vidéo YouTube, déplacer les icônes
au doigt, créer et **supprimer** des étapes, **créer/renommer/supprimer des chapitres**,
**relier ou déconnecter deux quêtes directement sur le canevas** (mode « 🔗 Lier », avec
détection des cycles), personnaliser l'**apparence** (couleurs par forme carré/rond/
engrenage, états verrouillé/validé, flèches, surbrillance — objet `THEME`) et les **sons**
(validation par type + ambiance en boucle — objet `SOUND`, jamais de sons FTB Quests/
Minecraft réels, protégés), et exporter/importer le programme en JSON.

## Comment je veux que tu travailles

- **Le contenu d'entraînement passe avant le code.** Les critères de validation du
  chapitre 1 et du chapitre 2 sont volontairement laissés à `["À définir"]` : je les écris
  moi-même depuis le mode gérant. Ne les remplis pas à ma place sauf si je te le demande
  explicitement — et si un jour je te le demande, dis-moi sur quoi tu te bases.
- **Ne casse pas les conventions existantes** : mêmes noms de champs (`id`, `type`, `size`,
  `deps`, `liens`, `x`, `y`, `titre`, `desc`, `criteres`, `video`, `iconImg` — cette dernière
  facultative, data URI d'une image qui remplace l'emoji `icon`), même style de code,
  même vocabulaire français dans les commentaires.
- **Pas de dépendance nouvelle**, pas de framework, pas de service payant.
- Quand tu modifies du contenu, privilégie `programme.js`. Ne touche à `index.html` que si
  c'est une vraie évolution du moteur.
- Après une modification de l'arbre, vérifie qu'aucun `deps` ne pointe vers un id inexistant,
  qu'il n'y a pas de cycle, et que les icônes ne se chevauchent pas (distance entre deux
  nœuds > somme de leurs rayons ; rayon = 46 × `size`).
- Si tu n'as pas d'outil pour éditer mes fichiers, renvoie-moi le bloc complet à remplacer,
  en me disant précisément où il commence et où il finit.

## Ce qui reste à faire

1. J'écris moi-même les vrais critères de validation du chapitre 1 et du chapitre 2, depuis
   le mode gérant (ou directement dans `programme.js`).
2. Terminer le chapitre 2 : les enchaînements sont transcrits, les descriptions restent à
   écrire. Il est marqué `brouillon: true`.
3. Concevoir les chapitres suivants, jusqu'au meilleur niveau français (possible maintenant
   directement dans l'appli via « 🗂 + Nouveau chapitre »).
4. Tourner et rattacher les vidéos de démonstration (une par quête).

Commence par lire les fichiers et me dire ce que tu comprends de l'arbre du chapitre 1,
que je vérifie qu'on parle bien de la même chose. Pose-moi des questions si quelque chose
est ambigu.
