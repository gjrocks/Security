const httpServer =require("http");
const file= require("fs");
const readLine=require("readline");

const fileReadByLine=readLine.createInterface({
    input:file.createReadStream("arrow.html"),
    output:process.stdout,
    terminal:false

});

fileReadByLine.on("line",(line)=>{
    console.log(line);
});

//console.log(httpServer);