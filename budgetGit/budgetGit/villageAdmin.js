//UI Controller
var uiCtrl = (function () {
    //2. get park details. Return object

    let domString = () => {
        return {
            name: ".name",
            yearOfBuild: ".startYear",
            numberOfTrees: ".numberOfTree",
            area: ".Area",
            modalMessageDiv:".message"
        }            
    }

    let domValues=() => {
        let name, yearOfBuild, numberOfTrees, area;
        let dom = domString();
        name = document.querySelector(dom.name);
        yearOfBuild = document.querySelector(dom.yearOfBuild);
        numberOfTrees = document.querySelector(dom.numberOfTrees);
        area = document.querySelector(dom.area);
        
        if (name.value !== "" && yearOfBuild.value !== "" && numberOfTrees.value !== "" && area.value !== "") {
            return {
                name: name.value,
                yearOfBuild: yearOfBuild.value,
                numberOfTrees: numberOfTrees.value,
                area: area.value  
            }            
        } else {
            return null;
        }        
    }
    
    let Modal = (message) => {
        let dom = domString();
        document.querySelector(dom.modalMessageDiv).textContent = message;
        document.getElementById('demoModal').click();
    }

    function getParkDetails() {
        let inputval = (domValues());
        return inputval;
    }
    return {
        getParkDetails: getParkDetails,
        callmodal: Modal
    }
    //7. create UI for new report
})();

//admin Controller
var adminCtrl = (function () {
    let consolidatedData = {
       parkDetails : []
    }

    return {
        addParkDetails: (parkObj) => {
            consolidatedData.parkDetails.push(parkObj);
        },
        allData: consolidatedData
    }
    //4. data structure
    //5. add values to data structure

})();

//Global controller
var globalCtrl = (function (uiCtrl, adminCtrl) {
    var mainfunction = function () {
        console.log("From global function");
        //1. get parkdetails from uiCtrl
        document.querySelector("#addPark").addEventListener("click", () => {
            var objPark = uiCtrl.getParkDetails();
            if (objPark) {
                console.log(objPark)
            } else {
                console.log("All fields are Mandatory!");
                uiCtrl.callmodal("All fields are Mandatory!");
                return;
            }
            adminCtrl.addParkDetails(objPark);
        })
        //3. send park details to adminCtrl
        //6. create UI elements
        //8. calculatr tree density= number of trees/park
        //9. Calculate average age = total age / number of park
        //10. name of park which has more than 1000 trees
    }

    var initFunction = function () {
        console.log("App started");
        mainfunction();
    }
    
    return {       
        init: initFunction
    }

}) (uiCtrl, adminCtrl);
 
//init will be avaialble in the global function
//init will be the only function call outside controllers
//global will have the UI and Admin controller function avaialble
//UI and Admin will return all the functions with IIFE

globalCtrl.init();