//PATH MODULE
const itspath = require("path")
// console.log(itspath)
console.log(itspath.sep)
//path jjoin method 1.create a new folder 2.sub folder 3.create a txt file now back here and use path.join method
const filepath = itspath.join("/content", "subfolder", "test.txt")
console.log(filepath)
//if u want only that file then
const base = itspath.basename(filepath)
console.log(base)
//path.result returns an absolute path (as our application is run on diff envi so we need this)
const absolute = itspath.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute)
