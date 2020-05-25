//Before starting the app we must define all the design parameters.
//All the moduleas to be defined
//Here we can have budgetController module, UI controller module, connectController which will act as a bridge for data and UI
//Each module must be defined in a IIFE, so parameters are encapsulated


var budgetController = (function () {
    function getCurrentMonth() {
        var d = new Date();
        var monthName = getMonthname((d.getMonth()) + 1);
        var year = d.getFullYear();

        return monthName + " " + year;

    }
    function getMonthname(mn) {
        switch (mn) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return "";
        }
    }

    return {
        publicgetcurrentmonth: getCurrentMonth
    }

}());

var UIcontroller = (function () {
    //UI controller Code goes here
    var domElementIds = {
        description: "descEntered",
        amount: "amountEntered",
        enterButton:"enterValue"
    };

    return {
        getInputValues: function () {
            return {
                typeOfIncome: (function () {
                    var selectedOption = document.getElementsByTagName("select")[0].selectedIndex;
                    if (selectedOption === 1) {
                        return "exp";
                    } else {
                        return "Inc";
                    }
                })(),                    
                description: document.getElementById(domElementIds.description).value,
                amount: document.getElementById(domElementIds.amount).value
            };
        },
        domElements : domElementIds
    };
})();

var GlobalController = (function (budgetCtrl, UIctrl) {            
    var mainFunction = function () {
        console.log(UIctrl.getInputValues());
        //1. get input values

        //2. Calculate the budget

        //3. update the budget

        //4. update the UI- Create elements

        //5. Update UI- overall values
    }

    function init() {
        document.getElementById("currentMonth").textContent = "Available balance in " + budgetCtrl.publicgetcurrentmonth();
        var dom = UIctrl.domElements;
        document.getElementById(dom.enterButton).addEventListener('click', mainFunction);
        window.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                mainFunction();
            }
        });
    };    

    return {
        initFunction: init
    };

})(budgetController, UIcontroller);

GlobalController.initFunction();

