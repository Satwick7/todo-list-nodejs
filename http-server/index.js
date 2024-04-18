const http = require("http");
const fs = require("fs");

let projectContent = "";
let homeContent = "";
let registrationContent = "";

fs.readFile("home.html",(err,home)=>{
    if(err) {
        throw err;
    }
    homeContent = home;
})

fs.readFile("project.html",(err,project)=>{
    if(err) {
        throw err;
    }
    projectContent = project;
})

fs.readFile('registration.html',(err,regs)=>{
    if(err) {
        throw err;
    }
    registrationContent = regs;
})

http.createServer((req,res)=>{
    let url = req.url;
    res.writeHeader(200,{"Content-Type":"text/html"});
    switch(url) {
        case "/project":
            res.write(projectContent);
            res.end();
            break;
        case "/registration":
            res.write(registrationContent);
            res.end();
            break;
        default:
            res.write(homeContent);
            res.end();
            break;
    }
}).listen(4000);