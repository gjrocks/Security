//this.name="ganesh";
//console.log(this.name);

const myFun=function(name){

	console.log(this===global); //true

}

myFun({name:"Aarvi"});
//this for the inner function
const myobj={
	name:"ganesh",
	lname:"jadhav",
	getFullName:function(){
		return this.name+this.lname;
	},
	getOtherFunction:function(){
    let that=this;
		function myUpper(){
			return that.lname+that.name;
		}
		return myUpper();
	},
	getOtherFunctionArrow:function(){
  
		myUpper= ()=>{
			return this.lname+this.name;
		}
		return myUpper();
	}
};

console.log(myobj.getOtherFunctionArrow()); //jadhavganesh

function outer(){
	function inner(){
		console.log(this===global); 
	}

	return inner;
}

outer()();

function outerReturnFunExpr(){
var	innerFunExpr=()=>{
		console.log(this===global); //true
	}

	return innerFunExpr;
}

var outerExprReturnFunExpr=()=>{
	console.log(this); //{}
	var	innerFunExpr3=()=>{
			console.log(this===global); //false
		}
	
		return innerFunExpr3;
	}
	outerExprReturnFunExpr()();

	