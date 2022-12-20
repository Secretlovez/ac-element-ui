## Icônes

Element fournit un ensemble d'icônes basiques.

### Usage

Il vous suffit d'assigner le nom de classe `ac-icon-iconName` à une balise `<i>`.

:::demo

```html
<i class="ac-icon-edit"></i>
<i class="ac-icon-share"></i>
<i class="ac-icon-delete"></i>
<el-button type="primary" icon="ac-icon-search">Chercher</el-button>
```

:::

### Icônes

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'ac-icon-' + name"></i>
      <span class="icon-name">{{'ac-icon-' + name}}</span>
    </span>
  </li>
</ul>
