

var arr=[1,4,6,3,7,8,10];
arr.forEach(ele=>console.log(ele));

arr.map(ele=>ele*2).forEach(ele=>console.log(ele));

var sum = arr.reduce((a, b) => a + b);
console.log(sum);

	console.log('ganesh');

	const obj={
		"name" : "ganesh",
		"lname" :"jadhav"
	};

 
	console.log ( obj.name);

class Car{

	constructor(val){
  this.model=val.name;
  this.price=val.price;
	}

	display(){
		console.log('model' +this.model);
	}
}

wagenor=new Car({name : "maruti-wagenor",price:200});
wagenor.display();

