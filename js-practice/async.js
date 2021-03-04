//console.log("ganesh");

function greet(name){
    return "Hello "+name;
}

console.log(greet("ganesh"));

async function greetAsync(name){
    
    return "Hello Async " +name;
}

console.log(greetAsync("ganesh"));

greetAsync("ganesh").then(val=>console.log(val));


greetAsync("ganesh").then(console.log);

function getPersonalInfo(url,id){
    return new Promise((success,failure)=>{
    
        setTimeout(()=>{
            if(id%2==0){
                console.log("resolved personal");
              success("Perosonal Info :" +id);
             } else{
            failure("failure" +id);
             }
        },3000);


    });
}


function getBankInfo(url,id,personalinfoData){
    return new Promise((success,failure)=>{
    
        setTimeout(()=>{
            if(id%2==0){
                console.log("resolved bank");
              success("Bank Info :" +id);
            }else{
            failure("failure" +id);
            }
        },2000);


    });
}

/*getPersonalInfo('\personalinfo',2)
.then(val=>getBankInfo('\bankinfo',2,val))
.then(console.log); */

async function awaitAsyncDemo(){
 const personalinfoData= await getPersonalInfo('\personalInfo',2);
 const bankinfoData= await getBankInfo('\getbankinfo',2,personalinfoData);

 console.log(bankinfoData);
}

awaitAsyncDemo();