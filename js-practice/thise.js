function globalFun(){
	console.log(this===global);
}


 globalFunExpr=()=>{
	console.log(this); //{}
}

globalFun();
globalFunExpr();

var arr=[1,2,4,5];

arr.forEach(function(ele){
 console.log(this===global ,ele); //true, num
});

var car={
	models:[1,2,3,4],
	make:"maruti",
	display:function(){
	 console.log(this.make); //maruti this refers to the car object
     this.models.forEach(function(ele){
      console.log(this.make,ele); //undefined , 1 2 3 4 5casue this is global 
	 });	 
	},
	displayWithThis:function(){
		console.log(this.make); //maruti this refers to the car object
		this.models.forEach(function(ele){
		 console.log(this.make,ele); //maruti :1,2,3 5 casue this is now car, thanks to foreach 
		},this);	 
	   },
	displayWithFatArrow:()=>{   //not expected to use arrow functions as methods
		console.log(this.make); //undefined
		this.models.forEach(function(ele){ //error
		 console.log(this.make,ele); 
		});	 
	   }
}

console.log(car.make); //maruti
car.display();
car.displayWithThis();
car.displayWithFatArrow();


