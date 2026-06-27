# 🐶 doggoSummoner()

> Invoque ton compagnon canin d'un clic. / Summon your doggo in one click.

Un mini-projet web interactif réalisé dans le cadre du **Bloc 1 d'Ada Tech School**. L'utilisateur entre son prénom, choisit un chien, et l'invoque avec un effet de magie pixel art. ⚡

*An interactive web mini-project built as part of **Ada Tech School's Bloc 1**. The user enters their name, picks a dog, and summons it with a pixel-art magic effect.* ⚡

---

## 🇫🇷 Français

### Aperçu

`doggoSummoner()` est une page web construite avec **HTML, CSS et JavaScript** (sans framework). Elle met en pratique la manipulation du DOM, la gestion d'événements, l'animation de sprites en CSS, et le basculement entre deux écrans (formulaire / résultat).

### Fonctionnalités

- Formulaire d'invocation avec saisie du prénom et choix du chien
- Quatre compagnons animés (Golden Retriever, Akita, Saint-Bernard, Husky)
- Animation de marche en pixel art (spritesheet animé via `steps()`)
- Effet magique d'invocation déclenché au summon
- Écran de résultat personnalisé, avec retour au formulaire
- Esthétique rétro : police pixel, palette crème & vert

### Stack technique

- **HTML5** — structure sémantique (`form`, `section`, `footer`)
- **CSS3** — Flexbox, `@keyframes`, animation `steps()`, variables de couleurs, `image-rendering: pixelated`
- **JavaScript** — manipulation du DOM, `addEventListener`, template literals, `setTimeout`

### Grandes phases du projet

1. **Structure & formulaire** — mise en place du HTML sémantique et du formulaire d'invocation
2. **Logique JavaScript** — récupération des valeurs, construction du message, bascule formulaire ↔ résultat
3. **Identité visuelle** — palette pixel, polices rétro, centrage Flexbox
4. **Sprites animés** — intégration et animation des chiens en `steps()`
5. **Effet magique** — superposition et déclenchement de l'effet au summon
6. **Finitions** — ajustements visuels, crédits artistes, nettoyage du code

### Lancer le projet

Ouvrir `index.html` dans un navigateur (idéalement avec l'extension **Live Server** sur VS Code).

---

## 🇬🇧 English

### Overview

`doggoSummoner()` is a web page built with **HTML, CSS, and JavaScript** (no framework). It puts into practice DOM manipulation, event handling, CSS sprite animation, and screen switching (form / result).

### Features

- Summoning form with name input and dog selection
- Four animated companions (Golden Retriever, Akita, Saint Bernard, Husky)
- Pixel-art walk animation (animated spritesheet via `steps()`)
- Magic summoning effect triggered on submit
- Personalized result screen, with a way back to the form
- Retro aesthetic: pixel font, cream & green palette

### Tech stack

- **HTML5** — semantic structure (`form`, `section`, `footer`)
- **CSS3** — Flexbox, `@keyframes`, `steps()` animation, color variables, `image-rendering: pixelated`
- **JavaScript** — DOM manipulation, `addEventListener`, template literals, `setTimeout`

### Project milestones

1. **Structure & form** — semantic HTML and summoning form setup
2. **JavaScript logic** — reading values, building the message, toggling form ↔ result
3. **Visual identity** — pixel palette, retro fonts, Flexbox centering
4. **Animated sprites** — integrating and animating the dogs with `steps()`
5. **Magic effect** — overlaying and triggering the effect on summon
6. **Polish** — visual tweaks, artist credits, code cleanup

### Run the project

Open `index.html` in a browser (ideally with the **Live Server** extension in VS Code).

---

## 🎨 Crédits / Credits

Tous les assets pixel art sont sous licence libre (CC0 / usage gratuit). / All pixel-art assets are under free licenses (CC0 / free to use).

- 🐕 **Chiens / Dogs** — [LuizMelo](https://luizmelo.itch.io/pet-dogs-pack)
- 🦴 **Accessoires / Props** — [Revouger](https://revouger.itch.io/pet-props)
- ⚡ **Effets magiques / Magic effects** — [ansimuz](https://ansimuz.itch.io/gothicvania-magic-pack-9)

Polices / Fonts — [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) & [VT323](https://fonts.google.com/specimen/VT323) (Google Fonts)

---

*Projet réalisé à [Ada Tech School](https://www.adatechschool.fr/) — Bloc 1. / Built at Ada Tech School — Bloc 1.*