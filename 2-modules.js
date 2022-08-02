//Modules - Encapsulated COde (only share minimum)
//CommonJS(LIBRARY) - every file in node is module (by default)
// const secret = "SUPER SECRET"
// const john = "England"
// const peter = "America"

// const sayHi = (fname) => {
//   console.log(`hello mr. ${fname}`)
// }

const names = require(`./4-firstmodule`)
const sayHi = require(`./5-secondmodule`)
const any = require(`./anotherway`)
require(`./7-mindgranade`)

// console.log(any)
// console.log(names)
// sayHi("susan")
// sayHi(names.john)
// sayHi(names.peter)
