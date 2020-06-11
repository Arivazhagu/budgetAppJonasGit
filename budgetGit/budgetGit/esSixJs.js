/*
console.log("Application has started!");
// let and constants
//es5
var name5 = ("Arivu");
name5 = ("Arivu1");
//console.log(name5);

//Constants must be initialized straight away on declaration.
//es6
//const name6 = "Alagu";
//name6 = "Alagu1";
//console.log(name6);

//Const values cannot be reassigned

//Var is function scoped
// let and const are block scoped. This makes the scoping as same as C#


function licence(passed) {    
    if (passed) {
        var name22 = "john"        
    }
    //console.log(name22 + " Passed");
}
licence(true);

function licence(passed) {
    let name23;
    if (passed) {
        name23 = "john"
    }
    //console.log(name23 + " Passed");
}
licence(true);

//let is wrapped here in the if block, so not available outside
//function licence(passed) {
//    if (passed) {
//        let name23 = "john"
//    }
//    console.log(name23 + " Passed");
//}
//licence(true);

//same name can be used inside and outside loop, inside the loop it is initiated with let key word. Both variables will become different
//This is different from C#. same variable name can be used inside and outside.

let j = 2;

for (let i = 0; i < 5; i++) {
    //this i not available outside- same as C#
    //j available inside -same as C#
    //console.log(i+j);
}

//console.log(i);

//Though let and Const are hoisted, they will not be accessible for use before declaration.
//Undefined error will not be thrown.
//this worls same as C#

//Creating blocks are much simpler. Simpler IIFE can be replaced with blocks of two curly braces

{
    let a = 1;
    console.log(a);
}
//console.log(a);

//Template literal
//inside back tick, add $ sign and curly brace to include the variables

let firstName = 'John';
let lastName = 'Miller';
let test = `Name is ${firstName} ${lastName}`;

console.log(test);
//StartsWith, endswith, includes, repeat
console.log(test.startsWith("Name"));
console.log(test.endsWith("Miller"));
console.log(test.includes("John"));
console.log(`${test} ; `.repeat(5));


//Arrow function
//1 variable
let dob = [1992, 1993, 1994, 1995];
let ages = dob.map(cur => `Current age is ${ 2020 - cur}`);
console.log(ages);

//---------= inputParam => return statement
let newAge = ct => `current age is ${2020 - ct}`;
console.log(newAge(1992));

//2 variables
ages = dob.map((current, index) => `current value is ${current} and the index is ${index}`);
console.log(ages);

// caluculate and return different value

let calcVal = (name, dob) => {
    let currentYear, age, balanceYear;
    const retirementAge = 60;
    currentYear = new Date().getFullYear();
    age = currentYear - dob;
    balanceYear = retirementAge - age;
    return `${name} has balance of ${balanceYear} years before retirement`;
};

console.log(calcVal("Arivu", 1992));


//lexical scoping- function defined iside the object has access to the object using this key word
//A function defined inside a object, can call a new function which does not have access to the object using 'this' key word
//ex: For loop defined inside a function will have a call back function
//map method which will return an array, will expect a call back function- these two function will not have access to object
//To by pass this, "this" can be stored in a variable and used inside the function
//or use bind method with this key word which will pass the this to the function

//Arrow function on lexcical scoping
//Arrow function also has access to lexical scoping
//When a regular function called inside a "function of an object" do not have access to "this", use arrow function inside which has access to this.
//but when both inner and outer function changed to arrow function, then the issue will come again.

var greenObject5 = {
    color: "Green",
    width: "30%",
    ES6: "Arrow function",
    Parameters: "In-Parantehsis",
    addEventListener: function () {
        let self = this;
        document.querySelector(".green").addEventListener("click", function () {
            alert('i\'m ' + self.color);
        })
    }
}

//greenObject.addEventListener();

var greenObject6 = {
    color: "Green",
    width: "30%",
    ES6: "Arrow function",
    Parameters: "In-Parantehsis",
    addEventListener: function () {        
        document.querySelector(".green").addEventListener("click", () => alert(`i\'m  ${this.color}`));
    }
}

//greenObject6.addEventListener();

var greenObject6 = {
    color: "Green",
    width: "30%",
    ES6: "Arrow function",
    Parameters: "In-Parantehsis",
    addEventListener: function (friends) {
        var friendArr = friends.map(function (current) {
           return `${current} is friend with ${this.color}`
        }.bind(this))
        return friendArr;
    }
}
//console.log(greenObject6.addEventListener(["Arivu", "Akshaya"]));

var greenObject66 = {
    color: "Green",
    width: "30%",
    ES6: "Arrow function",
    Parameters: "In-Parantehsis",
    addEventListener: function (friends) {
        var friendArr = friends.map((current) => {
            return `${current} is friend with ${this.color}`
        })
        return friendArr;
    }
}
console.log(greenObject66.addEventListener(["Arivu", "Akshaya"]));
*/