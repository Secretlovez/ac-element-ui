## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<el-row>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>

<el-row>
  <el-button plain>Plain</el-button>
  <el-button type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
</el-row>

<el-row>
  <el-button round>Round</el-button>
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

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<el-row>
  <el-button disabled>Default</el-button>
  <el-button type="primary" disabled>Primary</el-button>
  <el-button type="success" disabled>Success</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Warning</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</el-row>

<el-row>
  <el-button plain disabled>Plain</el-button>
  <el-button type="primary" plain disabled>Primary</el-button>
  <el-button type="success" plain disabled>Success</el-button>
  <el-button type="info" plain disabled>Info</el-button>
  <el-button type="warning" plain disabled>Warning</el-button>
  <el-button type="danger" plain disabled>Danger</el-button>
</el-row>
```

:::

### Text Button

Buttons without border and background.

:::demo

```html
<el-button type="text">Text Button</el-button>
<el-button type="text" disabled>Text Button</el-button>
```

:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<el-button type="primary" icon="ac-icon-edit"></el-button>
<el-button type="primary" icon="ac-icon-share"></el-button>
<el-button type="primary" icon="ac-icon-delete"></el-button>
<el-button type="primary" icon="ac-icon-search">Search</el-button>
<el-button type="primary"
  >Upload<i class="ac-icon-upload ac-icon-right"></i
></el-button>
```

:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<el-button-group>` to group your buttons.

```html
<el-button-group>
  <el-button type="primary" icon="ac-icon-arrow-left">Previous Page</el-button>
  <el-button type="primary"
    >Next Page<i class="ac-icon-arrow-right ac-icon-right"></i
  ></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="ac-icon-edit"></el-button>
  <el-button type="primary" icon="ac-icon-share"></el-button>
  <el-button type="primary" icon="ac-icon-delete"></el-button>
</el-button-group>
```

:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<el-button type="primary" :loading="true">Loading</el-button>
```

:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<el-row>
  <el-button>Default</el-button>
  <el-button size="medium">Medium</el-button>
  <el-button size="small">Small</el-button>
  <el-button size="mini">Mini</el-button>
</el-row>
<el-row>
  <el-button round>Default</el-button>
  <el-button size="medium" round>Medium</el-button>
  <el-button size="small" round>Small</el-button>
  <el-button size="mini" round>Mini</el-button>
</el-row>
```

:::

### Attributes

| Attribute   | Description                            | Type    | Accepted values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | ???       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | ???       |
| plain       | determine whether it's a plain button  | boolean | ???                                                  | false   |
| round       | determine whether it's a round button  | boolean | ???                                                  | false   |
| circle      | determine whether it's a circle button | boolean | ???                                                  | false   |
| loading     | determine whether it's loading         | boolean | ???                                                  | false   |
| disabled    | disable the button                     | boolean | ???                                                  | false   |
| icon        | icon class name                        | string  | ???                                                  | ???       |
| autofocus   | same as native button's `autofocus`    | boolean | ???                                                  | false   |
| native-type | same as native button's `type`         | string  | button / submit / reset                            | button  |
