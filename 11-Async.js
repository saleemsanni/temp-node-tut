//Async
const { readFile, writeFile } = require("fs")

console.log(`start`)
readFile(`./content/first.txt`, "utf8", (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile(`./content/second.txt`, "utf8", (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    writeFile(
      `./content/result-async.txt`,
      `A-sync folder created passing values of: ${first}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log(`done with this task`)
      }
    )
  })
})
console.log(`starting next taks`)
// the task is ready
// NODE OFFLOADS THIS TASK AND IS READY FOR SERVING OTHER USERS
// Alternatives for this long code are using promises and async await
