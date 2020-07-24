class allItems {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class parks extends allItems {
    constructor(name, age, area, numberOfTrees) {
        super(name, age);
        this.area = area;// in square kilometer
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} park has the tree density of ${density}`);
    }
}

class street extends allItems {
    constructor(name, age, length, size =3 ) {
        super(name, age);
        this.length = length;
        this.size = size;
    }

    sizeClassification() {
        let classify = new Map();
        classify.set(1, 'Small');
        classify.set(2, 'Medium');
        classify.set(3, 'Large');
        classify.set(4, 'XL');
        classify.set(5, 'XXL');
        console.log(`${this.name} street build in ${(new Date().getFullYear())-(this.age)}, has the age of ${classify.get(this.size)}`);
    }
}

let park1 = [new parks("vocPark", 25, 20, 1000), new parks("vocPark1", 25, 20, 1000), new parks("vocPark2", 25, 20, 1001)];
let streets = [new street("vocStreet", 25, 1000,1), new street("vocStreet1", 25, 1000,4), new street("vocStreet2", 25, 1001)];

function logDensities(parkArray) {
    console.log(`===========PARKS============`);
    parkArray.forEach((val) => {
        val.treeDensity();
    });
}

function findAverage(numbersArr) {    
    let avg = numbersArr.reduce((total, current) => {
       total = total + current;
       return total;
    }, 0);
    return avg;    
}

function mapper(array, param) {
    let count = array.map((val) => {
        return val[param];
    })
    return count;
}

function parkReport(parksArr){
    logDensities(parksArr);
    let ages = parksArr.map((val) => {
        return val.age;
    })
    let count = mapper(parksArr, 'numberOfTrees');

    let avg = findAverage(ages);
    console.log(`Average age of all ${parksArr.length} parks is ${avg / (parksArr.length)}.`);

    function tree(count) {
        return count > 1000;
    }

    console.log(`${parksArr[(count.findIndex(tree))].name} has more than 1000 trees`);
}

function streetReport(streetArray) {
    console.log(`===========STREETS============`);
    streetArray.forEach((val) => {
        val.sizeClassification();
    });
    let lengths = mapper(streetArray, "length");
    let total = findAverage(lengths);
    console.log(`${streetArray.length} streets has the total length of ${total} and the avearage length of ${total/(streetArray.length)}`);
}

parkReport(park1);
streetReport(streets);
