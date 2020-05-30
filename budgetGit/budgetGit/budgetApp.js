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

    //any function attached to the prototype of construcot will be inherited, without making a fresh copy on "new" object
    var income = function (id, type, desc, amount) {
        this.id = id;
        this.type = type;
        this.description = desc;
        this.amount = amount;
    }

    var expense = function (id, type, desc, amount) {
        this.id = id;
        this.type = type;
        this.description = desc;
        this.amount = amount;
    }

    var allDetails = {
        allItems: {
            Inc: [],
            exp: []
        },
        totals: {
            income: 0,
            expense: 0
        }
    }

    return {
        publicgetcurrentmonth: getCurrentMonth,
        addNewItem: function (inputObj) {
            var id = allDetails.allItems[inputObj.typeOfIncome].length + 1;
            if (inputObj.typeOfIncome === "exp") {
                newItem = new expense(id, inputObj["typeOfIncome"], inputObj["description"], inputObj["amount"])
            } else if (inputObj.typeOfIncome === "Inc") {
                newItem = new income(id, inputObj["typeOfIncome"], inputObj["description"], inputObj["amount"])
            }
            allDetails.allItems[inputObj.typeOfIncome].push(newItem);
            return newItem;
        },
        allData: allDetails
    }

}());

var UIcontroller = (function () {
    //UI controller Code goes here
    var domElementIds = {
        description: "descEntered",
        amount: "amountEntered",
        enterButton: "enterValue"
    };

    function updateNewItemInUI(id, type, desc, Amount) {
        var html;
        html = '<div id="%type%--%id%" class="addedElement">'+
                    '<div class="row">'+
                        '<div class="col-2">%id%</div>'+
                        '<div class="col-8 overflow-hidden">%desc%</div>'+
                        '<div class="col-2" > %Amount%</div >'+
                    '</div >'+
                 '</div > ';
        html = (((((html.replace("%id%", id)).replace("%desc%", desc)).replace("%Amount%", Amount)).replace("%id%",id)).replace("%type%",type));
        console.log(html);
        document.getElementById(type).insertAdjacentHTML("beforeend", html);
    }

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
        domElements: domElementIds,
        updateNewItem: updateNewItemInUI
    };
})();

var GlobalController = (function (budgetCtrl, UIctrl) {
    var mainFunction = function () {
        var newItem;
        //1. get input values
        var inputObj = UIctrl.getInputValues();

        //2. Calculate the budget
        newItem = budgetCtrl.addNewItem(inputObj);

        //3. update the budget
        UIctrl.updateNewItem(newItem.id, newItem.type, newItem.description, newItem.amount);
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

