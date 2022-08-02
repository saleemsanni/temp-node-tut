//interacting with file system & module we have 1.blocking(syncranuosly) 2.Non-Blocking(A-syncranuosly)

// const {readFileSync} = require('fs')
// const fs = require('fs')
// fs.readFileSync(path)

const { readFileSync, writeFileSync } = require("fs")
console.log(`start`)
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

console.log(first, second)

//wwriting 1.while wriiting it asks 2 parameters. 1.file name(if file not there node will creat a new file) 2.value
writeFileSync(
  "./content/result-sync.txt",
  `Here is the value passing from created file:${first}, ${second}`,
  { flag: "a" }
)
console.log(`done with the task`)
console.log(`starting the next task`)
//in case to APPEND a file then pass it in at the last in above line
//TASK TAKE LONGER TIMEeventually if a user is accessing it then no other user are able to access it as its busy but in async
