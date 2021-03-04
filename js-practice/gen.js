function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
  }
  
  var gen = logGenerator();
  
  // the first call of next executes from the start of the function
  // until the first yield statement
  gen.next();             // 0
  gen.next('pretzel');    // 1 pretzel
  gen.next('california'); // 2 california
  gen.next('mayonnaise'); // 3 mayonnaise

  function work1(v){
      console.log("1-");
      return ++v;
  }
  function work2(v){
      console.log("2-",v);
    return v*v;
}
  function* valueGenerator(k) {
    let y=yield work1(k);
    yield work2(y);
    //console.log(2, yield);
    //console.log(3, yield);
  }
var vgen=valueGenerator(3);
  var t=vgen.next().value;  
console.log(t);

t=vgen.next(t).value;  
console.log(t);

function square(v){
    return new Promise(function(resolve, reject){
      resolve(v*v);
    });
}

function qsquare(v){
    return new Promise(function(resolve, reject){
      resolve(v*v*v*v);
    });
}

function* promiseGen(t){
  var y=yield square(t);
  console.log("in generator :",y);
   var u=yield qsquare(t);
   console.log("in generator :",u);
   return u;
}

let o=promiseGen(4);
let val1=o.next().value;
console.log(val1);
console.log(o.next(val1).value);
//console.log(o.next().value);