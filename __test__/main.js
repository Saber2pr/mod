mod(async req => {
  const log = await req("./log.js")
  document.body.innerText = log(1, 2)
})
