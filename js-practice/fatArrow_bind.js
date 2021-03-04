
const person={

	name:"ganesh",
	lname :"jadhav",
	printFullName: function (){
		return this.name + ":" +this.lname;
	}
};

console.log(person.printFullName());
//printAnyThing();

function printAnyThing(){
	console.log(this);
}

let trybind=printAnyThing.bind(person.printFullName());
trybind();

let funPointer=person.printFullName;
let y=funPointer.bind(person);
console.log(funPointer());
console.log(y());

//this refers at the time of calling of a function and not at the time of function declaration 
// this keyword is like context, the context is depend upon the calling time.