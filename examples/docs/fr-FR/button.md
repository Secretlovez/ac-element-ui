## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<el-row>
  <el-button>Défaut</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>

<el-row>
  <el-button plain>Plein</el-button>
  <el-button type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
</el-row>

<el-row>
  <el-button round>Arrondi</el-button>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" round>Success</el-button>
  <el-button type="info" round>Info</el-button>
  <el-button type="warning" round>Warning</el-button>
  <el-button type="danger" round>Danger</el-button>
</el-row>

<el-row>
  <el-button icon="ac-icon-search" circle></el-button>
  <el-button type="primary" icon="ac-icon-edit" circle></el-button>
  <el-button type="success" icon="ac-icon-check" circle></el-button>
  <el-button type="info" icon="ac-icon-message" circle></el-button>
  <el-button type="warning" icon="ac-icon-star-off" circle></el-button>
  <el-button type="danger" icon="ac-icon-delete" circle></el-button>
</el-row>
```

:::

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<el-row>
  <el-button disabled>Défaut</el-button>
  <el-button type="primary" disabled>Principal</el-button>
  <el-button type="success" disabled>Succès</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Attention</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</el-row>

<el-row>
  <el-button plain disabled>Plein</el-button>
  <el-button type="primary" plain disabled>Principal</el-button>
  <el-button type="success" plain disabled>Succès</el-button>
  <el-button type="info" plain disabled>Info</el-button>
  <el-button type="warning" plain disabled>Attention</el-button>
  <el-button type="danger" plain disabled>Danger</el-button>
</el-row>
```

:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo

```html
<el-button type="text">Bouton texte</el-button>
<el-button type="text" disabled>Bouton texte</el-button>
```

:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<el-button type="primary" icon="ac-icon-edit"></el-button>
<el-button type="primary" icon="ac-icon-share"></el-button>
<el-button type="primary" icon="ac-icon-delete"></el-button>
<el-button type="primary" icon="ac-icon-search">Recherche</el-button>
<el-button type="primary"
  >Upload<i class="ac-icon-upload ac-icon-right"></i
></el-button>
```

:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<el-button-group>` pour grouper vos boutons.

```html
<el-button-group>
  <el-button type="primary" icon="ac-icon-arrow-left"
    >Page précédente</el-button
  >
  <el-button type="primary"
    >Page suivante<i class="ac-icon-arrow-right ac-icon-right"></i
  ></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="ac-icon-edit"></el-button>
  <el-button type="primary" icon="ac-icon-share"></el-button>
  <el-button type="primary" icon="ac-icon-delete"></el-button>
</el-button-group>
```

:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<el-button type="primary" :loading="true">Chargement</el-button>
```

:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<el-row>
  <el-button>Défaut</el-button>
  <el-button size="medium">Medium</el-button>
  <el-button size="small">Small</el-button>
  <el-button size="mini">Mini</el-button>
</el-row>
<el-row>
  <el-button round>Défaut</el-button>
  <el-button size="medium" round>Medium</el-button>
  <el-button size="small" round>Small</el-button>
  <el-button size="mini" round>Mini</el-button>
</el-row>
```

:::

### Attributs

| Attribut    | Description                                    | Type    | Valeurs acceptées                                  | Défaut |
| ----------- | ---------------------------------------------- | ------- | -------------------------------------------------- | ------ |
| size        | Taille du bouton.                              | string  | medium / small / mini                              | —      |
| type        | Type du bouton.                                | string  | primary / success / warning / danger / info / text | —      |
| plain       | Détermine si le bouton est plein.              | boolean | —                                                  | false  |
| round       | Détermine si le bouton est arrondi.            | boolean | —                                                  | false  |
| circle      | Détermine si le bouton est un cercle.          | boolean | —                                                  | false  |
| loading     | Détermine si l'état de chargement est affiché. | boolean | —                                                  | false  |
| disabled    | Désactive le bouton                            | boolean | —                                                  | false  |
| icon        | Classe de l'icône.                             | string  | —                                                  | —      |
| autofocus   | Identique à l'attribut natif `autofocus`       | boolean | —                                                  | false  |
| native-type | Identique à l'attribut natif `type`            | string  | button / submit / reset                            | button |
