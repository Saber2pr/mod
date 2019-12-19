/*
 * @Author: saber2pr
 * @Date: 2019-12-16 22:18:22
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-12-19 12:55:36
 */
var mod = (() => {
  // executor
  const callResource = src => {
    const script = document.createElement("script")
    script.src = src
    document.head.append(script)
  }

  // cache
  const cache = {}

  // context stack
  const stack = []

  const system = (res, callback) => {
    if (res in cache) {
      callback(cache[res])
    } else {
      callResource(res)
      stack.push(obj => {
        callback((cache[res] = obj))
        return obj
      })
    }
  }

  // return
  const pure = module => (stack.pop() || (_ => _))(module)

  // >>=
  const join = dep => new Promise(resolve => system(dep, resolve))

  // monad
  const monad = creator => Promise.resolve(creator(join)).then(pure)

  return monad
})()
