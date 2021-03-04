const express=require("express");
const filters=require("./filters.js");

const personService=express();

const port=5000
//it has to be at top , interpreted language

//following are the middleware/filters 

//application level middleware

/*function logging(req,res,next){
    console.log("Application level log@:",Date.now());
    next();
    }*/
    
    personService.use(filters.logging);
    personService.use(function (req, res, next) {
        console.log('Time:', Date.now());
        //res.send("ok bok");
        next();
      });
    

personService.get("/ping",(req,res)=>{
res.send("Service is Alive!!!!")
});

//#http://expressjs.com/en/api.html#app.param
//this can be used for the parameter validation
personService.param('id', function (req, res, next, id) {
    console.log('CALLED FOR ID',id);
    next();
  });
  

  personService.param(['id', 'name'], function (req, res, next, value) {
    console.log('CALLED FOR ID AND NAME', value);
    next();
  })
  
  personService.get('/person/:id/:name', function (req, res, next) {
    console.log('/person/:id/:name', req.params.id,req.params.name);
   
    res.send("/person/:id/:name");
  });

  personService.get('/person/:id', function (req, res, next) {
    console.log('called person')
   res.send("called /person");
  });

  personService.get('/admin/:id', function (req, res, next) {
    console.log('called admin')
   res.send("called /admin");
  })





personService.listen(port,()=>{
console.log("Server is starting on ",port);
});