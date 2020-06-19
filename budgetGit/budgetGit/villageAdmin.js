//UI Controller
var uiCtrl = (function () {
})();

//admin Controller
var adminCtrl = (function () {
})();

//Global controller
var globalCtrl = (function (uiCtrl, adminCtrl) {

    var mainfunction = function () {
        console.log("From global function");
    }

    var initFunction = function () {
        console.log("App started");
        mainfunction();
    }
    
    return {       
        init: initFunction
    }

}) ();
 
//init will be avaialble in the global function
//init will be the only function call outside controllers
//global will have the UI and Admin controller function avaialble
//UI and Admin will return all the functions with IIFE

globalCtrl.init();