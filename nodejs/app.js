let express = require("express");
const fs = require("fs");
let app = express();
let jsonParse= express.json();
app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});
app.post("/postuser",jsonParse,function (request,response){
    if(!request.body) return response.sendStatus(400);
    let login = request.body.login;
    let password = request.body.password;
    var item = {Login:login,Password:password};
    let fs = require('fs');
    fs.readFile('user.json','utf8',function readFileCallback(err,data){
        if(err){
            console.log(err);
        }else {
            let arr = [];

            try {
                arr = JSON.parse(data);

            } catch (error) {
                console.log(error);
                arr = [];
            }

            if (!(arr.filter(i=>JSON.stringify( Object.entries(i).sort()) == JSON.stringify(Object.entries(item).sort())).length > 0)) {
                arr.push(item);
                json = JSON.stringify(arr);
                fs.writeFileSync('user.json', json);
                response.json({"login": "Registered"});
            } else {
                response.json({"login": "Error"});
            }
        }

    });
});
app.listen('3000')
