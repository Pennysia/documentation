---
title: Blogging Like a Hacker
description: Something together
lang: en-US
layout: doc
footer: true
lastUpdated: true
outline: 1
---

# Hello Swap

::: info
This is an info box.
:::

::: danger FUCKKKK
This is an info box.
:::


::: details Click me to toggle the code
```js
console.log('Hello, VitePress!')
```
:::


```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```


```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```