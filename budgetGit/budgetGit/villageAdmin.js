//UI Controller is in another js file
//admin Controller is in another file
//Global controller
var globalCtrl = (function (uiCtrl, adminCtrl) {
    var mainfunction = function () {
        console.log("From global function");
        //1. get parkdetails from uiCtrl
        document.querySelector("#addPark").addEventListener("click", () => {
            var objPark = uiCtrl.getParkDetails();
            if (adminCtrl.totalParks() >= 3) {
                console.log("Only 3 parks are present");
                uiCtrl.callmodal("Only 3 parks are for the current town!");
                return;
            }else if (objPark) {
                console.log(objPark)
            }else {
                console.log("All fields are Mandatory!");
                uiCtrl.callmodal("Park details - All fields are Mandatory!");
                return;
            }
            //3. send park details to adminCtrl
            let newpark = adminCtrl.addParkDetails(objPark);
            //6. create UI elements
            uiCtrl.addNewHtml(newpark);    

            let thousandTrees = adminCtrl.calculateThoundTrees();
            uiCtrl.addthousandTree(thousandTrees);     
            uiCtrl.ageEl(adminCtrl.calculateAvgAge());
        })   
        document.querySelector("#addStreet").addEventListener("click", () => {
            let streetDetails = uiCtrl.getStreetDetails();
            let countOfStreet = adminCtrl.streetDetails();
            if (countOfStreet >= 4) {
                console.log("Only 4 parks are present");
                uiCtrl.callmodal("Only 4 parks are available in the current town!");
                return;
            } else if ((streetDetails.streetLength !== "") && (streetDetails.streetname !== "") && (streetDetails.streetYear !== "")) {
                let newStreet = adminCtrl.addNewStreet(streetDetails);
                uiCtrl.addNewStreet(newStreet);
                let average = adminCtrl.avgOfStreets();
                let classi = adminCtrl.StreetClassification();
                uiCtrl.addAvgOfStreet(average, countOfStreet + 1);
                uiCtrl.addClassificaionsOfStreet(classi);
            } else {
                uiCtrl.callmodal("Street Details - All fields are mandatory");
            }                       
        })        
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

})(uiCtrl, adminCtrl);

//init will be avaialble in the global function
//init will be the only function call outside controllers
//global will have the UI and Admin controller function avaialble
//UI and Admin will return all the functions with IIFE

globalCtrl.init();