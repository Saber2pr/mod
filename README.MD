# mod

a module style for js.

> do you know monad? :)

```html
<script src="https://saber2pr.top/mod/mod.min.js"></script>
```

# API

1. define a module:

```js
// ./add.js
mod(() => {
  const add = (a, b) => a + b
  return add
})
```

2. import a module

```js
// ./main.js
mod(async require => {
  // import module
  const add = await require("./add.js")

  console.log(add(1, 2))
})
```

> It looks like the do-block in haskell?

# License

MIT

> Author: saber2pr
