function callToService(url,data){


const personPromise=new Promise(function(success,failure){
console.log("url :",url);
console.log("data :",data);

setTimeout(()=>{
if(data%2==0){
    console.log("success:");
    success(data*data);
}else{
    console.log("failure:");
    failure("failure for data" +data);
}
    
},2000);
  

});

return personPromise;
}

const retPromise=callToService("http://something.com",3);

retPromise.then((data)=>console.log("RET:",data),(data)=>console.log("ERROR",data));