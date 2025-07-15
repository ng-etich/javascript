//object in javascript is a stabd alone entity with properties and values
//objects can also have ,methods which are functions which are functions that belong to the object


const car ={
    color: "red",
    type: "sedan",
    year: 2023,
    onSale: true,
    start: function(){
        console.log("car started");
        
    },
};
//anonymous function- a function without a name

//accesing values in an object can be done using dot notation or bracket notation

console.log(car.color); //output red using dot notation
console.log(car["color"]);// output red using bracket notation

console.log(car.type);//output sedan
console.log(car.onSale);//output true
//calling a method/FUNCTION
car.start();




