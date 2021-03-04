
function square(v){
    return new Promise(function(resolve, reject){
      resolve(v*v);
    });
}

function qsquare(v,y){
  console.log("qsquare-y",y);
  console.log("qsquare-v",v);
    return new Promise(function(resolve, reject){
      resolve(v*v*v*v);
    });
}

function* promiseGen(t){
  var y=yield square(t);
  console.log("in generator :",y);
//  val inter=y.then()
   var u=yield qsquare(t,y);
   console.log("in generator :",u);
   return u;
}
console.log("--------------");
let o=promiseGen(3);
let val1=o.next().value;
console.log(val1);
console.log(o.next(val1).value);
o.next();
//console.log(o.next().value);