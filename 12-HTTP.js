const http = require("http")
// console.log(req) //once we go on browser & refresh then req gives bunch of info in terminal
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page")
  }
  if (req.url === "/about") {
    res.end("About us and our team")
  }
  res.end(`<h1>Oops!</h1>
   <p>We cant find the page you are looking for</p>
    <a href="/">Back to Home Page</a>`)
})

server.listen(3000)

//npm a typical node project. it calls reusablle code. this package contains js(package, dependancies, modules)
//there is no quality control in npm registry
