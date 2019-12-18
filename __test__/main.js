mod(async require => {
  // import module
  const add = await require("./add.js")
  const log = await require("./log.js")

  log(add(1, 2))
})
