const http = require('http')
const fs = require('fs')

// get all files

const homePage = fs.readFileSync('./navbar-app/index.html')
const homeStyle = fs.readFileSync('./navbar-app/styles.css')
const homeLogo = fs.readFileSync('./navbar-app/logo.svg')
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {

    const url = req.url

    // home page
    if(url === '/') {
        res.writeHead(200, { 'content-type':'text/html'})
        res.write(homePage)
        res.end()
    } 
    // home style
    else if(url === '/styles.css') {
        res.writeHead(200, { 'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    } 
    // home logo
    else if(url === '/logo.svg') {
        res.writeHead(200, { 'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    } 
    // home logic
    else if(url === '/browser-app.js') {
        res.writeHead(200, { 'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    } 
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type':'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    } 
    // page not found 404
    else {
        res.writeHead(404, { 'content-type':'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }

})

server.listen(5000)
