# Vue3 Circle Progressbar

 highly customizable circle progressbar for vue 3

 if you want to use the same component in vue 2 project, go to [vue2-circle-progressbar](https://www.npmjs.com/package/@lastsecond/vue2-circle-progressbar).

## Installation
npm: `npm install @lastsecond/vue3-circle-progressbar`.

yarn: `yarn add @lastsecond/vue3-circle-progressbar`.

## How to use
The component can be registered as both global and local.

### Global registration

add the component and its style to vue instance in `main.js`.

```js
import { createApp } from 'vue';
import App from './App.vue';
import CircleProgressbar from '@lastsecond/vue3-circle-progressbar';
import '@lastsecond/vue3-circle-progressbar/style.css';

const app = createApp(App);

app.use(CircleProgressbar);

app.mount('#app');
```

now circle progressbar can be used as a component in the vue template.

```vue
<template>
  <div>
    my circle progressbar: <CircleProgressbar :value="progressValue" />
  </div>
</template>

<script setup>
  const progressValue = ref(35);
</script>
```

### Local registration

import the component and its style to the vue component you want to use

```vue
<template>
  <div>
    my circle progressbar: <CircleProgressbar :value="progressValue" />
  </div>
</template>

<script setup>
  import { CircleProgressbar } from '@lastsecond/vue3-circle-progressbar';
  import '@lastsecond/vue3-circle-progressbar/style.css';

  const progressValue = ref(35);
</script>
```

## Props

| prop              | type      | default       | description                                   |
| ----------------- | --------- | ------------- | --------------------------------------------- |
| value             | `Number`  | `0`           | value should be a number between 0 to 100     |
| stroke-color      | `String`  | `'lightgrey'` | color of empty progressbar                    |
| progress-color    | `String`  | `'#FE7A67'`   | color of progressbar                          |
| background-color  | `String`  | `'white'`     | circle background color                       |
| stroke-width      | `Number`  | `20`          | progressbar width                             |
| container-width   | `Number`  | `200`         | svg viewbox size                              |
| show-default-text | `Boolean` | `false`       | show `{value}%` in center of default template |

## Slots

| slot    | description                                 |
| ------- | ------------------------------------------- |
| default | place of this slot is inside of progressbar |

## Example

```vue
<template>
  <CircleProgressbar 
    :value="30"
    stroke-color="#f00"
    progress-color="yellow"
    background-color="#000"
    :stroke-width="10"
    :container-width="100"
  >
    <div class="custom-class">this text is inside of svg</div>
  </CircleProgressbar>
</template>
```
