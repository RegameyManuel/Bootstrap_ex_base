# Les différentes Media Features des Media Queries

Les **media features** sont des caractéristiques spécifiques des appareils ou des environnements d'affichage que vous pouvez tester dans vos media queries pour appliquer des styles CSS conditionnellement. Elles permettent de créer des designs réactifs qui s'adaptent à diverses situations.

Voici une liste des media features les plus courantes, avec des explications pour chacune :

---

## 1. `width` et `height`

- **`width`** : correspond à la largeur de la zone d'affichage (viewport) en unités CSS (habituellement en pixels).
- **`height`** : correspond à la hauteur de la zone d'affichage en unités CSS.

**Utilisation :**

```css
@media (max-width: 600px) {
  /* Styles pour les écrans dont la largeur est inférieure ou égale à 600px */
}
```

---

## 2. `device-width` et `device-height`

- **`device-width`** : largeur de l'écran physique de l'appareil.
- **`device-height`** : hauteur de l'écran physique de l'appareil.

**Remarque :** Ces propriétés sont moins utilisées car les valeurs peuvent varier en fonction de la densité de pixels et ne reflètent pas toujours la taille réelle d'affichage.

---

## 3. `orientation`

Indique l'orientation du viewport.

- **Valeurs possibles :**
  - `portrait` : la hauteur est supérieure ou égale à la largeur.
  - `landscape` : la largeur est supérieure à la hauteur.

**Utilisation :**

```css
@media (orientation: landscape) {
  /* Styles pour les écrans en mode paysage */
}
```

---

## 4. `aspect-ratio` et `device-aspect-ratio`

- **`aspect-ratio`** : ratio entre la largeur et la hauteur du viewport.
- **`device-aspect-ratio`** : ratio entre la largeur et la hauteur de l'écran physique.

**Utilisation :**

```css
@media (aspect-ratio: 16/9) {
  /* Styles pour les écrans avec un ratio de 16:9 */
}
```

---

## 5. `resolution`

Spécifie la résolution de l'écran ou du périphérique de sortie.

- **Unités :**
  - `dpi` : dots per inch (points par pouce).
  - `dpcm` : dots per centimeter (points par centimètre).
  - `dppx` : dots per pixel (points par pixel CSS), où 1dppx = 96dpi.

**Utilisation :**

```css
@media (min-resolution: 2dppx) {
  /* Styles pour les écrans haute résolution (rétine) */
}
```

---

## 6. `color`

Indique le nombre de bits par canal couleur de l'appareil.

- **Utilisation :**

```css
@media (min-color: 8) {
  /* Styles pour les écrans avec au moins 8 bits par canal couleur */
}
```

---

## 7. `monochrome`

Spécifie le nombre de bits par pixel pour les appareils monochromes.

- **Utilisation :**

```css
@media (monochrome) {
  /* Styles pour les écrans monochromes */
}
```

---

## 8. `inverted-colors`

Indique si le système d'exploitation inverse les couleurs pour améliorer la lisibilité.

- **Valeurs possibles :**
  - `none` : les couleurs ne sont pas inversées.
  - `inverted` : les couleurs sont inversées.

**Utilisation :**

```css
@media (inverted-colors: inverted) {
  /* Styles pour les appareils avec couleurs inversées */
}
```

---

## 9. `prefers-color-scheme`

Indique la préférence de l'utilisateur pour un thème clair ou sombre.

- **Valeurs possibles :**
  - `light` : l'utilisateur préfère un thème clair.
  - `dark` : l'utilisateur préfère un thème sombre.

**Utilisation :**

```css
@media (prefers-color-scheme: dark) {
  /* Styles pour le mode sombre */
}
```

---

## 10. `prefers-reduced-motion`

Indique si l'utilisateur préfère réduire les animations pour des raisons d'accessibilité.

- **Valeurs possibles :**
  - `no-preference` : pas de préférence particulière.
  - `reduce` : l'utilisateur préfère réduire les animations.

**Utilisation :**

```css
@media (prefers-reduced-motion: reduce) {
  /* Styles pour minimiser les animations */
}
```

---

## 11. `pointer`

Décrit la précision du dispositif de pointage principal.

- **Valeurs possibles :**
  - `none` : pas de dispositif de pointage.
  - `coarse` : dispositif de pointage de faible précision (ex : écran tactile).
  - `fine` : dispositif de pointage de haute précision (ex : souris).

**Utilisation :**

```css
@media (pointer: coarse) {
  /* Styles adaptés aux écrans tactiles */
}
```

---

## 12. `hover`

Indique si le dispositif de pointage principal permet de survoler les éléments.

- **Valeurs possibles :**
  - `none` : pas de capacité de survol.
  - `hover` : supporte le survol.

**Utilisation :**

```css
@media (hover: hover) {
  /* Styles pour dispositifs supportant le survol (ex : effets au survol) */
}
```

---

## 13. `any-pointer` et `any-hover`

- **`any-pointer`** : vérifie tous les dispositifs de pointage disponibles.
- **`any-hover`** : vérifie si **n'importe quel** dispositif de pointage supporte le survol.

**Utilisation :**

```css
@media (any-pointer: fine) {
  /* Styles si **au moins un** dispositif de pointage est précis */
}
```

---

## 14. `update`

Indique la fréquence à laquelle l'affichage est mis à jour.

- **Valeurs possibles :**
  - `none` : l'affichage n'est pas mis à jour après le rendu initial.
  - `slow` : l'affichage est mis à jour de manière peu fréquente.
  - `fast` : l'affichage est mis à jour rapidement.

---

## 15. `scripting`

Indique la disponibilité du scripting (JavaScript).

- **Valeurs possibles :**
  - `none` : JavaScript est désactivé.
  - `initial-only` : JavaScript est disponible pendant le chargement initial.
  - `enabled` : JavaScript est pleinement disponible.

---

## 16. `display-mode`

Décrit le mode d'affichage de l'application (particulièrement pour les applications web progressives).

- **Valeurs possibles :**
  - `fullscreen` : l'application occupe tout l'écran.
  - `standalone` : l'application fonctionne de manière autonome.
  - `minimal-ui` : l'application a une interface utilisateur minimale.
  - `browser` : l'application est affichée dans le navigateur.

**Utilisation :**

```css
@media (display-mode: standalone) {
  /* Styles pour les applications web progressives */
}
```

---

## 17. `prefers-contrast`

Indique la préférence de l'utilisateur pour le niveau de contraste.

- **Valeurs possibles :**
  - `no-preference` : pas de préférence particulière.
  - `more` : l'utilisateur préfère un contraste élevé.
  - `less` : l'utilisateur préfère un contraste faible.
  - `custom` : l'utilisateur a défini un niveau de contraste personnalisé.

---

## 18. `light-level`

Indique le niveau de luminosité ambiante perçue par l'appareil.

- **Valeurs possibles :**
  - `dim` : faible luminosité.
  - `normal` : luminosité normale.
  - `washed` : forte luminosité (ex : en plein soleil).

---

## 19. `forced-colors`

Indique si le système force une palette de couleurs spécifique, souvent pour des raisons d'accessibilité.

- **Valeurs possibles :**
  - `none` : pas de couleurs forcées.
  - `active` : les couleurs sont forcées.

**Utilisation :**

```css
@media (forced-colors: active) {
  /* Styles pour les environnements avec couleurs forcées */
}
```

---

## 20. `prefers-reduced-transparency`

Indique si l'utilisateur préfère réduire la transparence des éléments.

- **Valeurs possibles :**
  - `no-preference` : pas de préférence particulière.
  - `reduce` : l'utilisateur préfère réduire la transparence.

---

## 21. `color-gamut`

Décrit l'étendue des couleurs que l'appareil peut afficher.

- **Valeurs possibles :**
  - `srgb` : l'appareil supporte le gamut sRGB.
  - `p3` : l'appareil supporte le gamut Display P3.
  - `rec2020` : l'appareil supporte le gamut Rec. 2020.

**Utilisation :**

```css
@media (color-gamut: p3) {
  /* Styles pour les appareils avec un gamut de couleurs étendu */
}
```

---

## 22. `contrast`

**Remarque :** Cette media feature est dépréciée au profit de `prefers-contrast`.

---

## 23. `grid`

Indique si l'appareil est un périphérique à grille (par exemple, un terminal textuel).

- **Valeurs possibles :**
  - `0` : l'appareil n'est pas basé sur une grille.
  - `1` : l'appareil est basé sur une grille.

---

## Combinaison de Media Features

Vous pouvez combiner plusieurs media features à l'aide d'opérateurs logiques :

- **`and`** : pour combiner plusieurs conditions.
  
  ```css
  @media (min-width: 600px) and (orientation: landscape) {
    /* Styles pour les écrans larges en mode paysage */
  }
  ```

- **`,` (virgule)** : pour séparer des media queries alternatives (équivalent de "ou").
  
  ```css
  @media (max-width: 600px), (orientation: portrait) {
    /* Styles pour les petits écrans ou en mode portrait */
  }
  ```

- **`not`** : pour appliquer les styles lorsque la media query ne correspond pas.
  
  ```css
  @media not all and (monochrome) {
    /* Styles pour les écrans en couleur */
  }
  ```

- **`only`** : utilisé pour cibler des navigateurs récents qui comprennent les media queries.

  ```css
  @media only screen and (min-width: 800px) {
    /* Styles pour les écrans d'au moins 800px de large */
  }
  ```

---

## Exemples Pratiques

### Exemple 1 : Adapter le Design aux Préférences de l'Utilisateur

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
}
```

### Exemple 2 : Mode Sombre Automatique

```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #ffffff;
  }
}
```

### Exemple 3 : Styles Spécifiques pour les Écrans Tactiles

```css
@media (hover: none) and (pointer: coarse) {
  /* Augmenter la taille des boutons pour les écrans tactiles */
  button {
    padding: 1em;
  }
}
```

---

## Conclusion

Les media features des media queries sont des outils puissants pour créer des interfaces utilisateur adaptatives et accessibles. En comprenant et en utilisant ces différentes caractéristiques, vous pouvez optimiser l'expérience utilisateur sur une large gamme d'appareils et de préférences individuelles.

---

## Ressources Supplémentaires

- [MDN Web Docs - Utilisation des Media Queries](https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries)
- [W3C - Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/)
- [Can I use - Support des Media Features](https://caniuse.com/css-mediaqueries)