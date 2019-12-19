mod(async require => {
  const add = await require("./add.js")
  const log = (a, b) => "result:" + add(a, b)
  return log
})
