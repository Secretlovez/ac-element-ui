## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `ac-icon-iconName`.

:::demo

```html
<i class="ac-icon-edit"></i>
<i class="ac-icon-share"></i>
<i class="ac-icon-delete"></i>
<el-button type="primary" icon="ac-icon-search">Search</el-button>
```

:::

### Icons

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'ac-icon-' + name"></i>
      <span class="icon-name">{{'ac-icon-' + name}}</span>
    </span>
  </li>
</ul>
