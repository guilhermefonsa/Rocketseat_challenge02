// Dependecias
const express = require('express')
const nunjucks = require('nunjucks')

// variaveis
const server = express()
const courses = require("./data")


// Chamadas de dependencias
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.listen(5000, function () {
  console.log("server is running")
})

// Rotas

server.get("/", function (req, res) {
  const data = {
    img_url:"https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg",
    title: "Rocketseat",
    description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
    techs: [
      "JavaScript ",
      "Node.js ",
      "React ",
      "React Native "]
    }
  


  return res.render("about", {data})
})

server.get("/courses", function (req, res) {
  return res.render("courses", { items: courses })
})

server.use(function (req, res) {
  res.status(404).render("not-found")
})