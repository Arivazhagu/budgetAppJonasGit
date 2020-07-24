function fn1() {
    console.log("First function");
}

function fn2() {
    setTimeout(() => {console.log("Second Function");},2000)   
}

function fn3() {
    fn1();
    fn2();
    console.log("Third function");
}

//fn3();

//Dom events, set time out, etc are separate web APIs
//when the event is called, call back function is taken to the web API,
//Say for example a call back to be called only on click, then the event loop will wait for the click to happen, and it sends the function to the execution context
//All the other API calls are queued, and execution context is created for each callback.
//API call means, the method is not present inside the javascript engine, but present externally.

//Callback hell

//function callBackHell() {
//    setTimeout(() => {
//        let ids = [123, 456, 789, 778];
//        console.log(ids);
//        setTimeout((idOfFood) => {
//            let foods = {name:"Full meals", publisher:"chettinadu"}
//            console.log(`${idOfFood} : ${foods.name}`);
//            setTimeout(publisher => {
//                let foods2 = {name:"biryani", publisher:"Thalapakatty"}
//                console.log(`${publisher} : ${foods2.name}`);
//            }, 2000,foods.publisher);
//        }, 2000, ids[2]);
//    },2000)
//}

//callBackHell();

//Promises
//Whenever external API is called, then they are wrapped inside promises. IF the request is complete then the promise is resolved else rejected.
//promises are created with "new" key word, 
//Any promise accepts a  call back function with two parameters which are called Resolved, rejected
//Resolved and rejected are two different functions which are capable of returning the values passed to them as parameters
//When a api call or any external call completes successfully resolved function is called which return the required object.
//Returned promise has two methids called "then" and "catch"
//then method accepts a call back function, which has access to the "resolved" item.
//catch method also accepts a call back, which has access to the values returned from "Reject".
//inside then we can call another api call, and the resolved is returned to the caller "then", which further gets another subsequent "then" method
//set time out - accepts a callback function, and executes it after user defined interval

//const prom = new Promise((res, rec) => {
//    res("Promised!");
//})

//console.log(prom);
//whenever a new promise arrives in the execution context, promise is executed.

//unless something changes, use const instead of let
const getReceipeIds = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve([123,124,125,126,127])
        },1500)
    })
}

const getReceipe = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const receipe = { name: "biryani", publisher: "Thalapakkati" };
            resolve(`${id} : ${receipe.name}`)
        },1500,id)
    })
}

const getPublishers = (pub) => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const publisherObj = {
                "1":"Biryani","2":"Onion","3":"Thalichcha"
            }
            resolve(publisherObj);
        },1500,pub)
    })
}

//const ids = getReceipeIds();
//ids
//    .then(ids => {
//        console.log(ids);
//        return getReceipe(ids[2]);
//    })
//    .then(receipe => {
//        console.log(receipe);
//        return getPublishers(receipe);
//    })
//    .then(publiserFoods => {
//        console.log(publiserFoods);
//    })
//    .catch(error => {
//        console.log("Error!!")
//    })

//Async-Await- syntactical sugar for consuming promise
//like an api call, a function can run behind the screen with out waiting for the normal flow is called async function
//async function runs ascyncronously and producess result
//awai keyword is used only inside async function, await keyword will stop the execution of code which is not possible in the normal function
//calling multiple promises inside a single function is now possible with await keyword, instead of calling inside first then, second then,etc..

//async function getidAW() {
//    const ids = await getReceipeIds();
//    console.log(ids);
//    const receipes = await getReceipe(123);
//    console.log(receipes);
//    const publishers = await getPublishers("Thala");
//    console.log(publishers);

//    return receipes;
//    //Async function will only return promises
//}

//getidAW().then(result => {
//    console.log(`${result} is the best`);
//})

//getidAW();

//consume API using fetch method.
//fetch metod will return promise, and the promise can be read using then method
//API usually returns JSON, and the JSON can be converted to object using .json method, which will return another promise and read by then method.
//this can be added inside a function to reuse the code

let result;

function getCrawlRate(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(res => {
        console.log(res);
        return res.json();
    }).then(res => {
        console.log(`${res.title} has the current crawl rate of of ${res.sources[0].crawl_rate}`);
        }).catch(err => {
            console.log(err);
        })
}

getCrawlRate(2487956);
getCrawlRate(2487956);

//asyncAwait on fetch method
//async method usually runs in the background, when ever encountered in the execution context.
//async method do not use then and catch, instead await is used. 
//try catch can be used to capture the error in async function
//async function will always return promise, if we need to read the return properties of  async function, "then" method will come handy.
// with async await we can remove calling multiple then methods.
//1. Create asyc 2. use try catch 3. await fetch 4. return the data from async 5. read using then

async function getCrawlRateAW(woeid) {
    try {
        
        const apiData = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const jsonTOObj = await apiData.json();
        console.log(` max temp at ${jsonTOObj.title} is ${jsonTOObj.consolidated_weather[0].max_temp} and the min temp is ${jsonTOObj.consolidated_weather[0].min_temp}`);
        //throw Error;
        return jsonTOObj;
    } catch (e) {
        console.log(`Manual error ${e}`);
    }    
    //console.log(jsonTOObj);
}
getCrawlRateAW(2487956).then(res => {
    console.log(res.title);
})
//getCrawlRateAW(2487956);
//AJAX- Asynchronuos Javascript and XML