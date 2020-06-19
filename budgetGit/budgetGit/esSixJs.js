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

//Destructuring
//Read values of an array or object into different constants
let concepts = ["es6", "ArrowFunction", "Destructure"];
const [first, second, third] = concepts;
//above creates 3 constants with 3 values of array assigned to it.
console.log(first, second, third);

let objConcepts = {
    es: "ES6",
    functionArrow: "ArrowFunction"
}
//to read object we use curly brace
const { es, functionArrow } = objConcepts;
console.log(es, functionArrow);

//assign alias
const { es: esV, functionArrow: fnAr } = objConcepts;
console.log(esV, fnAr);

//retirementFunction
function calcRetirement(dob) {
    let current = new Date().getFullYear();
    let age = current - dob;
    return [age, 65 - age];
}

const [age, retirement] = calcRetirement(1992);
console.log(age, retirement);

//1. nodelist to array conversion
//2. for loop simplified
//3. find index, find from array

//let boxes = document.querySelectorAll(".box");
//let boxesArray = Array.from(boxes);
//foreach loop doesnt support continue and break statements. only return can be used with for each loop of javascript

//for (var i = 0; i < boxesArray.length; i++) {
    //if (boxesArray[i].classList.value.includes("bg-info")) {
    //    break;
    //}
    //document.querySelector(`.${(boxesArray[i].className).split(" ")[5]}`).setAttribute("style", "background-color: dodgerblue !important");
    //boxesArray[i].textContent = "I\ 'm changed to blue";
//}

//ES6
//this is same as foreach of C#- for each box in boxesarray
//for (const box of Array.from(document.querySelectorAll(".box"))) {
//    if (box.className.split(" ")[5] === "bg-info") {
//        break;
//    }
//    box.setAttribute("style", `background-color:dodgerblue !important`);    
//}
for (const box of Array.from(document.querySelectorAll(".box"))) {
    if (box.className.includes("bg-info")) {
        break;
    }
    box.setAttribute("style", `background-color:dodgerblue !important`);
    box.textContent="I\'m changed"
}

var ageArray = ["10", "21", "22", "3", "9"];
console.log(ageArray.find((el) => el > 20));
console.log(ageArray.findIndex((el) => el > 20));

//Spread operator
//1. can be used to replace apply operator
//2. Two different array can be merged into one array
//3. multiple nodes can be merged to single nodelist
let spreadFunction = (a, b, c, d, e) => {
    return a + b + c + d + e;
}

let testSpreadFunction = spreadFunction(20, 10, 30, 24);
console.log(testSpreadFunction);
let spreadArray = [20, 10, 30, 24, 25];
let result = spreadFunction.apply(null, spreadArray);
console.log(result);

let result2 = spreadFunction(...spreadArray);
console.log(`result 2 ${result2}`);

let family1 = ["Arivu", "Akshaya", "papa1", "papa2"];
let family2 = ["Appa", "Amma", "anbu", "muthu"];
console.log([...family1, "Shakshi", "anni", ...family2]);

let boxnodes = document.querySelectorAll(".box");
let heading = document.querySelector("h1");
let newNodeList = [heading, ...boxnodes];
console.log(Array.from(newNodeList));
newNodeList.forEach((cur) => {
    cur.style.color = "purple";
})

//Rest parameters
//Same as spread, but the place is different
//During function call spread is used
//On function arguments "rest parametes" are used

//rest convertes the remaining areguments into array and feeds inside the function as array
//this replaces the arguments objecct which usually captures all the incoming arguments.
//for spread and rest arguments - syntax is same
//spread - all the values of an array is sent separately
//rest params - separated argumentsare sent as array
var restParameters = (limit, ...ages) => {
    console.log(`limit is ${limit}`);
    var greater = ages.map((age) => ((2020 - age) > 25))
    console.log(greater);
}

restParameters(21, 1990, 1992, 1999);

//default parameters
//javascript allows running the function without specifying all the parameters

function defaultParamFn(p1, p2, p3="karaikudi", p4 =true) {
    this.name = p1;
    this.age = p2;
    this.native = p3;
    this. married = p4
}

let arivu = new defaultParamFn("Arivu", "28");

console.log(arivu.native);
console.log((arivu.native === "karaikudi") ? true : false);

//Maps
//New data structure used to store key value pairs
//set, get, delete, has, map.entries(), looping possible

let question = new Map();
question.set("Question", "Latest version of javascript?");
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "That is correct!");
question.set(false, "Wrong answer!, please try again");

console.log(question.get("Question"));

//question.delete(4);
if (question.has(4)) {
    //console.log(`Question 4 present here!`)
}

for (const [key, val] of question.entries()) {
    if (typeof(key) === "number") {
        console.log(`${key} : ${val}`);
    }    
}
let answer = parseInt(prompt(question.get("Question")));
console.log(question.get((answer === question.get("correct"))));
*/
//let opts=[];
//question.forEach((val, key) => {
//    //console.log(`${key} : ${val}`);
//    if (typeof (key) === "number") {
//        //opts[key-1] = `${key} : ${val}`;
//        console.log(`${key} : ${val}`);
//    }
//})
/*
let answer = parseInt(prompt(question.get("Question")));
console.log(question.get((answer === question.get("correct"))));
for (var i = 0; i < 5; i++) {
    insertAdjacentHtml(i+1,opts);
}


document.addEventListener("click", (event) => {   
    if (parseInt(event.target.id) === question.get("correct")) {
        event.target.classList.toggle("bg-success");
        // event.target.p
        console.log(question.get(true));
    } else {
        //event.target.classList.toggle("bg-warning");
        console.log(question.get(false));
    }
});

function insertAdjacentHtml(sno, opts){
    let html = `<div class="container">
            <div class="row m-2 border border-secondary rounded">
                <div class="col-1 sno border"> ${sno}  </div>
                <div class="col-9 question"> 
                    <div class="row">
                        <div class="col-12 font-weight-bold">${question.get("Question")}</div>
                    </div>
                    <div class="row"> 
                        <div id=1 class="col-3 opt">${opts[0]}</div>
                        <div id=2 class="col-3 opt">${opts[1]}</div>
                        <div id=3 class="col-3 opt">${opts[2]}</div>                                         
<div id=4 class="col-3 opt">${opts[3]}</div>                    
                    </div>
                </div>
                <div class="col-2 comments${sno} text-center m-0 p-0"> comments  </div>
            </div>
        </div>`;
    document.querySelector(".container").insertAdjacentHTML("beforeend", html);
}
*/

//maps for loop to be tested

//Classes in es6
//classes are replacing the function constructor of ES5
//Functions need not to be added to prototype, they can stay inside the classes itself
//static function will not be inheritad but can be used from the class itself
//there is no hoisting of in ES6, we must define class before calling it
//All the functions created in the class actually goes to the prototype 
//we must also learn ES5 since most of the projets on the internet already working on ES5 only
class person {
    constructor(name, dob, age=28){
        this.name = name;
        this.dob = dob;
        this.age = age;
    }

    calculateRetirement() {
        let date = new Date();
        console.log(`Age: ${date.getFullYear() - this.dob} `);
        console.log(`Years to retire: ${65-(date.getFullYear() - this.dob)} `);
    }

    static writeWishes() {
        console.log("Hello world!");
    }
}

let arivu = new person("Arivu", 1992);
arivu.calculateRetirement();
person.writeWishes();

//subclass accepts the parameters of super class, and uses super method to inherit the methods and properties
//subclass created with "extends" key word and super class name is used with that.
class athlete extends person {
    constructor(name, dob, age = 28, olymbic, medals) {
        super(name, dob, age = 28);
        this.olymbic = olymbic;
        this.medals = medals;
    }
    wonmedal() {
        this.medals++;
    }
}

let athlete1 = new athlete("usain", 1980, 40, true, 10);
athlete1.wonmedal();
console.log(athlete1.medals);


