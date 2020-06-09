//Before starting the app we must define all the design parameters.
//All the moduleas to be defined
//Here we can have budgetController module, UI controller module, connectController which will act as a bridge for data and UI
//Each module must be defined in a IIFE, so parameters are encapsulated


var budgetController = (function () {
    function getCurrentMonth() {
        var d = new Date();
        var months = ["January", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var monthName = months[d.getMonth()];
        var year = d.getFullYear();
        return monthName + " " + year;
    }
    
    //any function attached to the prototype of construct will be inherited, without making a fresh copy on "new" object
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
        this.percentageOfExpense = -1;
    }

    expense.prototype.expensePercentage = function (income) {
        if (income > 0) {
            this.percentageOfExpense = Math.round((this.amount / income) * 100);
        } else {
            this.percentageOfExpense = -1;
        }        
    }
    var allDetails = {
        allItems: {
            Inc: [],
            exp: []
        },
        totals: {
            Inc: 0,
            exp: 0
        },
        budget: {
            BalanceAmount: 0
        },
        Percentage: {
            percentageOfSpendings: 0
        }
    }
    function calculateBalance() {
        var balance = allDetails.totals.Inc - allDetails.totals.exp;
        allDetails.budget.BalanceAmount = balance;
    }
    function updatePercentage() {
        if (allDetails.totals.Inc > 0) {
            allDetails.Percentage.percentageOfSpendings = ((allDetails.totals.exp) / (allDetails.totals.Inc)) * 100;
        }else {
            allDetails.Percentage.percentageOfSpendings = -1;
        }
        
    }
    function detailsToUpdateUI() {
        return {
            SumOfIncome: allDetails.totals.Inc,
            SumOfExpenses: allDetails.totals.exp,
            BalanceAmount: allDetails.budget.BalanceAmount,
            percentageOfExpenditure: Math.ceil(allDetails.Percentage.percentageOfSpendings)
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
        allData: allDetails,
        calculateBudget: function (type) {
            var ValuesOfType;
            var total = 0;
            //get the total data update the totals
            ValuesOfType = allDetails.allItems[type];
            ValuesOfType.forEach(function(currentVal) {
                total += currentVal.amount;
            })
            allDetails.totals[type] = total;    
            calculateBalance();
            updatePercentage();
            var detailsToUpdate = detailsToUpdateUI();
            return {
                detailsToUpdate
            }
        },
        deleteItemFromDataStructure: function (type, id) {
            var typeArray, indexOfElement;
            typeArray = allDetails.allItems[type].map(function (currentValue) {
                return currentValue.id;
            });
            indexOfElement = typeArray.indexOf(id);
            allDetails.allItems[type].splice(indexOfElement, 1);
        },
        topPartDetails: detailsToUpdateUI,
        updateExpensePercentage: function () {
            var expenseArray = allDetails.allItems.exp;
            expenseArray.forEach(function (current) {
                current.expensePercentage(allDetails.totals.Inc);
            });
        },
        getExpensesPercentage: function () {
            var expensePercentages, percentages;
            expensePercentages = allDetails.allItems.exp;
            percentages = expensePercentages.map(function (current) {
                return current.percentageOfExpense;
            })
            return percentages;
        }
    }
}());

var UIcontroller = (function () {
    //UI controller Code goes here
    var domElementIds = {
        typeSelecter: "typeSelecter",
        description: "descEntered",
        amount: "amountEntered",
        enterButton: "enterValue",
        budgetLabel: "costLabel",
        incomeLabel: "incomeLabel",
        expenseLabel: "expenseLabel",
        percentLabel: "percentLabel",
        dltAccessor: "deleteAccessor",
        percentLabelexp: ".perLabel"
    };
    var numberFormatting = function (number, type) {
        var numSplit, num, decimal;
        number = Math.abs(number);
        number = number.toFixed(2);
        numSplit = number.split(".");
        num = numSplit[0];
        decimal = numSplit[1];
        if (num.length > 3) {
            num = num.substring(0, num.length - 3) + "," + num.substring(num.length - 3);
        }
        if (type === "Inc") {
            num = "+ " + num;
        } else {
            num = "- " + num;
        }
        return num + "." + decimal
    }

    function updateNewItemInUI(id, type, desc, Amount) {
        var html, color;
        Amount = numberFormatting(Amount, type);
        if (type === "Inc") {
            color = "green";
            html = '<div id="%type%--%id%" class="addedElement changeVisibility--%id%-%type%">' +
                '<div class="row" style="margin-top: 4px;">' +
                '<div class="col-8 overflow-hidden">%desc%</div>' +
                '<div class="col-3 overflow-auto p-0 text-center" style="color:%color%" > %Amount%</div >' +
                '<div class="col-1" style="padding:0;margin:0;">' +
                '<i class="fa fa-trash-o text-danger" id="deleteIcon--%id%-%type%" style="opacity:0;cursor:pointer;" ></i ></div >' +
                '</div >' +
                '</div > ';
        } else {
            color = "red";
            html = '<div id="%type%--%id%" class="addedElement changeVisibility--%id%-%type%">' +
                '<div class="row" style="margin-top:4px;margin-bottom:-8px;">' +
                '<div class="col-7 overflow-hidden">%desc%</div>' +
                '<div class="col-3 overflow-auto p-0 text-center" style="color:%color%" > %Amount%</div >' +
                '<div class="col-1 p-0">' +
                '<label class="border border-danger rounded perLabel bg-danger text-white" style="font-size:10px;width:100%;text-align:center;font-weight:bold;"> 2%</label></div>' +
                '<div class="col-1 p-0 text-center" style="padding:0;margin:0;">' +                
                '<i class="fa fa-trash-o text-danger" id="deleteIcon--%id%-%type%" style="opacity:0;cursor:pointer;" ></i ></div >' +
                '</div >' +
                '</div >';
        }        
        html = ((((((html.replace("%id%", id)).replace("%desc%", desc)).replace("%Amount%", Amount)).replace("%id%", id)).replace("%type%", type)).replace("%color%", color));        
        html = html.replace("%id%", id);
        html = html.replace("%id%", id);
        html = html.replace("%type%", type);
        html = html.replace("%type%", type);
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
                amount: parseFloat(document.getElementById(domElementIds.amount).value)
            };
        },
        domElements: domElementIds,
        updateNewItem: updateNewItemInUI,
        clearFields: function () {
            var fieldsToClear;
            fieldsToClear = document.querySelectorAll("#"+domElementIds.description+ ",#"+domElementIds.amount);
            fieldsToClear.forEach(function (currentValue, currentIndex, fullList) {                
                currentValue.value = "";
            });    
            fieldsToClear[0].focus();
        },
        changedType: function () {
            var fieldsToChangeColor;
            fieldsToChangeColor = document.querySelectorAll("#" + domElementIds.typeSelecter + ",#" + domElementIds.description + ",#" + domElementIds.amount);
            fieldsToChangeColor.forEach(function (currentValue) {
                currentValue.classList.toggle("changeToRed");
            });
            document.querySelector("#enterValue").classList.toggle("text-danger");
        },
        updateTopBudget: function (budgetObj) {
            
            document.querySelector("." + domElementIds.budgetLabel).textContent = numberFormatting(budgetObj.BalanceAmount, budgetObj.BalanceAmount > 0 ? "Inc" : "Exp");
            document.querySelector("." + domElementIds.incomeLabel).textContent = numberFormatting(budgetObj.SumOfIncome,"Inc");
            document.querySelector("." + domElementIds.expenseLabel).textContent = numberFormatting(budgetObj.SumOfExpenses,"Exp");
            if (budgetObj.percentageOfExpenditure > 0) {
                document.querySelector("." + domElementIds.percentLabel).textContent = budgetObj.percentageOfExpenditure+"%";            
            } else {
                document.querySelector("." + domElementIds.percentLabel).textContent = "---";            
            }
            
        },
        makeDeleteButtonVisible: function (id,type) {
            document.getElementsByClassName("changeVisibility--"+id+"-"+type)[0].onmouseover = function () {
                document.getElementById("deleteIcon--" + id + "-" + type).style.opacity = 1;                
                document.getElementById("deleteIcon--" + id + "-" + type).style.transition = "opacity 0.2s";                
            }
            document.getElementsByClassName("changeVisibility--" + id + "-" + type)[0].onmouseout = function () {
                document.getElementById("deleteIcon--" + id + "-" + type).style.opacity = 0;                
                document.getElementById("deleteIcon--" + id + "-" + type).style.transition = "opacity 0.2s";                
            }            
        },
        deleteItem: function (id) {
            var itemToDelete;
            itemToDelete = document.getElementById(id);
            itemToDelete.parentElement.removeChild(itemToDelete);
        },
        updateExpensePercentage: function (percentages) {
            var percentNodes = document.querySelectorAll(domElementIds.percentLabelexp);
            percentNodes.forEach(function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
                
            });
        },
        numberFormatting: numberFormatting
    };
})();

var GlobalController = (function (budgetCtrl, UIctrl) {
    var mainFunction = function () {
        var newItem, expensePercentages;
        //1. get input values
        var inputObj = UIctrl.getInputValues();

        if (inputObj.description !== "" && inputObj.amount !== 0 && !isNaN(inputObj.amount)) {
            //2. Calculate the budget
            newItem = budgetCtrl.addNewItem(inputObj);

            //3. update the budget
            UIctrl.updateNewItem(newItem.id, newItem.type, newItem.description, newItem.amount);
            UIctrl.makeDeleteButtonVisible(newItem.id, newItem.type);
            //4. Clear input fields
            UIctrl.clearFields();

            //5. CalculateTotalsAndPercentage
                    //Architect -> SOC -> modules -> Function shud return only one value -> 
                    //-Function should return only one value
                    //- Go to respeective modules and update the global variable- 1 function
            var results = budgetCtrl.calculateBudget(inputObj.typeOfIncome);            
                    //- Go to the global variable fetch the values - 2nd function
                    //- Multiple values can be return using object

            //6. update the UI
            //7. Update UI- overall values
            UIctrl.updateTopBudget(results.detailsToUpdate);
            
            //Event Delegation
            //Use 1. If the element is not present when the page loaded but added later. 
            //If we want to attach an event with the newly added element then we can use event delegation
            //Use 2. When the event is triggered on an element, 
            //the same event bubbles upto the parent element and the parent element clearly knows from where the event triggred
            //If the parent has some event, using the target element the event can be applied on child            

            //Update percentage of each expense
            budgetCtrl.updateExpensePercentage();
            expensePercentages = budgetCtrl.getExpensesPercentage();
            UIctrl.updateExpensePercentage(expensePercentages);
        }       
    }
    var deleteItem = function (event) { 
        var idOfItemtoDelete,type, id,splittedValues;
        //8. Delete element
            //parent element - add listener
            //find the target element
        idOfItemtoDelete = (event.target.parentNode.parentNode.parentNode.id);
        splittedValues = idOfItemtoDelete.split("--", 2);
        type = splittedValues[0];
        id = parseInt(splittedValues[1]);
            //Delete from data structure
        budgetCtrl.deleteItemFromDataStructure(type, id);
            //Delete from UI
        UIctrl.deleteItem(idOfItemtoDelete);
        var results = budgetCtrl.calculateBudget(type);
        UIctrl.updateTopBudget(results.detailsToUpdate);
            //9. Update data structure

            //10. Update UI bottom

            //11. Update UI Top
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
        document.getElementsByClassName(dom.dltAccessor)[0].addEventListener('click', deleteItem);
        document.getElementById(dom.typeSelecter).addEventListener('change', UIctrl.changedType);
    };
   
    return {
        initFunction: init
    };

})(budgetController, UIcontroller);

GlobalController.initFunction();

