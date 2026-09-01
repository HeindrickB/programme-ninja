# Programme Ninja — mode d'emploi

## Essayer tout de suite
Double-clique sur **index.html**. Tout fonctionne, y compris les sons.
(Le mode hors-ligne « installé » ne s'active qu'une fois le dossier mis en ligne — voir plus bas.)

## Mettre sur téléphone, gratuitement
1. Crée un compte sur **github.com**, puis un dépôt public (ex. `programme-ninja`).
2. Glisse-dépose les 5 fichiers de ce dossier dedans (`index.html`, `programme.js`, `sw.js`, `manifest.webmanifest`, `icon.svg`).
3. Onglet **Settings → Pages → Source : `main` / racine** → *Save*.
4. Deux minutes plus tard, tu as une adresse du type `https://tonpseudo.github.io/programme-ninja/`.
5. Sur le téléphone, ouvre cette adresse, puis **Partager → Sur l'écran d'accueil**.
   L'appli s'installe comme une vraie appli, plein écran, et fonctionne sans réseau
   (utile : le wifi des salles est souvent mauvais).

Coût total : 0 €. Alternative équivalente : Netlify Drop (glisser le dossier sur netlify.com/drop).

## Utilisation
| Geste | Effet |
|---|---|
| Un doigt qui glisse | se déplacer dans l'arbre |
| Deux doigts | zoomer / dézoomer |
| Appui court sur une icône | ouvrir la fiche (objectif, critères, vidéo) |
| **Appui long sur une icône verrouillée** | le chemin manquant s'allume en bordeaux |
| ☰ en haut à gauche | chapitres et annexes (consultables même verrouillés) |
| ⊹ en haut à droite | bascule vue d'ensemble / retour sur ta progression |

**Formes** — ■ carré = obligatoire · ● rond = bonus optionnel · ✦ engrenage = point clé (débloque le chapitre suivant).
**Couleurs** — gris foncé = pas encore accessible · gris clair = réalisable maintenant · vert = validé.
**Flèches** — trait plein = bloquant · pointillés = lien optionnel (un rond ne bloque jamais).

## Espace gérant
☰ → **🔧 Espace gérant** → code **1234** (à changer dès que possible, bouton *Changer le code
gérant* dans la fiche d'une quête).

Une fois dedans, en ouvrant n'importe quelle quête tu peux modifier titre, type, taille,
icône (emoji **ou image personnalisée**), description, critères, **lien vidéo**, et les
flèches entrantes (obligatoires / optionnelles). Le bouton **Supprimer cette quête** la
retire et nettoie proprement toutes les flèches et prérequis qui pointaient vers elle.

Le bandeau orange en bas donne accès à :
- **Déplacer : ON** → tu fais glisser les icônes au doigt pour repositionner l'arbre
- **🔗 Lier : ON** → touche une quête source puis une quête cible pour créer une flèche
  (on te demande si elle est bloquante ou optionnele) ; touche une flèche existante pour
  la supprimer. L'appli refuse toute connexion qui créerait une dépendance circulaire.
- **+ Quête** → créer une nouvelle étape
- **🎨 Apparence** → couleur de fond et de bordure de chaque forme (carré / rond /
  engrenage), des états verrouillé/validé, des flèches et de la surbrillance du chemin
- **🔊 Sons** → remplacer le son de validation des quêtes, celui des points clés, et
  ajouter une ambiance sonore en boucle (voir plus bas)
- **Exporter / Importer** le programme en `.json` (c'est ta sauvegarde, et le moyen de
  transmettre tes modifications à un autre téléphone)

**Chapitres** (dans le tiroir ☰, uniquement visible en mode gérant) :
- **🗂 + Nouveau chapitre** en bas de la liste
- **✏️ Renommer / requis** sur un chapitre → titre, sous-titre, et la quête à valider pour
  le débploquer (laisser vide = toujours accessible)
- **🗑 Supprimer** un chapitre → retire ses quêtes et nettoie les flèches/prérequis qui
  pointaient vers elles ailleurs dans le programme (il doit rester au moins un chapitre)

### Ajouter tes vidéos
Le plus simple et gratuit : mettre chaque démonstration sur YouTube en **non répertoriée**,
puis coller le lien dans le champ *Lien vidéo* de la quête. Un lien Vimeo ou un `.mp4`
hébergé fonctionne aussi.

## Fichiers
- `index.html` — l'application (rien à modifier)
- `programme.js` — **tout le contenu du parcours** : quêtes, textes, positions, vidéos.
  Modifiable à la main ou via l'espace gérant.
- `sw.js`, `manifest.webmanifest`, `icon.svg` — installation et mode hors-ligne

## Points à savoir
- La progression, l'apparence, les sons et tes modifications de programme sont enregistrés
  **sur le téléphone** (aucun compte, aucun serveur, aucun coût). Changement de téléphone =
  tout est perdu → pense à exporter le programme en `.json` avant de changer d'appareil.
  Passer plus tard à un cloud ne demande de réécrire qu'un seul bloc, `Store`, en haut du
  script de `index.html`. Tout le reste est déjà prévu pour.
- Les sons par défaut sont **synthétisés**, pas repris de FTB Quests / Minecraft : ces
  fichiers sont protégés par le droit d'auteur et ne peuvent pas être redistribués dans une
  appli. Le principe visuel/sonore est respecté (court pour une quête, long et montant pour
  un engrenage), mais tu peux déposer **tes propres sons** (enregistrés, achetés avec
  licence, ou libres de droits) depuis **🔊 Sons** en mode gérant — ils remplacent alors la
  synthèse. Garde des fichiers courts et légers (quelques centaines de Ko) : ils sont stockés
  sur le téléphone, qui a une capacité limitée pour ce genre de stockage.
- Idem pour les **images d'icônes personnalisées** : une trop grande quantité de photos
  haute résolution peut remplir cet espace de stockage. Si l'appli affiche « stockage plein »,
  exporte ton programme en `.json`, allège quelques images, puis réimporte.
- Le **chapitre 2 est un brouillon** transcrit de ton schéma : les enchaînements sont là,
  les descriptions et critères restent à écrire.
- Les **critères de validation du chapitre 1** ont été volontairement laissés à
  « À définir » : c'est toi qui les rédigeras, quête par quête, depuis le mode gérant.
