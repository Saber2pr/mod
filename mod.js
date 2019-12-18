/*
 * @Author: saber2pr
 * @Date: 2019-12-16 22:18:22
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-12-18 17:44:00
 */
const mod = (() => {
  // executor
  const importScript = src => {
    const script = document.createElement("script")
    script.src = src
    document.head.append(script)
    return () => document.head.removeChild(script)
  }

  // cache
  const cache = {}

  // context stack
  const stack = []

  // return
  const exports = module => module && stack.pop()(module)

  // >>=
  const require = (dep, callback) => {
    if (dep in cache) {
      callback(cache[dep])
    } else {
      importScript(dep)
      stack.push(api => callback((cache[dep] = api)))
    }
  }

  // monad
  const mod = creator =>
    Promise.resolve(
      creator(dep => new Promise(resolve => require(dep, resolve)))
    ).then(exports)

  return mod
})()
