const httpServer =require("http");
const file= require("fs");
const readLine=require("readline");

file.readFile("arrow.html",function(error,data){

if(error){
    console.log("There is a problem in opening a file");
    console.error(error);
}else{
    console.log(data);
}

});

//console.log(httpServer);