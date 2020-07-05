var uiCtrl = (function () {
    //2. get park details. Return object

    let domString = {
        name: ".name",
        yearOfBuild: ".startYear",
        numberOfTrees: ".numberOfTree",
        area: ".Area",
        modalMessageDiv: ".message",
        identifierToAddHtml: ".identifier",
        report: ".report",
        thousand: ".thousand",
        age: ".age",
        streetName: "#streetName",
        streetYear: "#streetYear",
        streetLength: "#streetLength",
        identifierToAddStreet: ".streetIdentifier",
        streetAverage: ".streetAverage",
        streetSizeClassi: ".streetSizeClassi"
    }

    let domValues = () => {
        let name, yearOfBuild, numberOfTrees, area;
        let dom = domString;
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

    let streetDetails = () => {
        let streetname, streetYear, streetLength;
        streetname = document.querySelector(domString.streetName).value;
        streetYear = document.querySelector(domString.streetYear).value;
        streetLength = document.querySelector(domString.streetLength).value;

        return {
            streetname: streetname,
            streetYear: streetYear,
            streetLength: streetLength
        }
    }

    let Modal = (message) => {
        let dom = domString;
        document.querySelector(dom.modalMessageDiv).textContent = message;
        document.getElementById('demoModal').click();
    }

    function getParkDetails() {
        let inputval = (domValues());
        return inputval;
    }

    function addNewhtml(parkObj) {
        let el = document.querySelector(domString.identifierToAddHtml);
        el.insertAdjacentHTML("beforeend", `<div class="col-4">
                        <div class="card mb-3" style="width: 12rem; background-color:#ee8d940f">
                            <div class="card-body">
                                <h5 class="card-title">Park- ${parkObj["name"]}</h5>
                                <p class="card-text">YOB- ${new Date().getFullYear() - parseInt(parkObj["yob"])}</p>
                                <p class="card-text">Area- ${parkObj["treeCount"]}</p>
                                <p class="card-text">NO.Trees- ${parkObj["area"]}</p>
                            </div>
                        </div>
                    </div>`);
        addNewReportElement(parkObj["name"], parkObj["density"], parkObj["area"]);
    }

    function addNewStreet(streetDetails) {
        let el = document.querySelector(domString.identifierToAddStreet);
        el.insertAdjacentHTML("beforeend", `<div class="col-3">
                        <div class="card m-0 p-0" style="width: 10rem;">
                            <div class="card-body">
                                <h5 class="card-title">Street: ${streetDetails.streetName}</h5>
                                <p class="card-text">YOB: ${streetDetails.streetYear}</p>
                                <p class="card-text">Length: ${streetDetails.streetLength}</p>                                
                            </div>
                        </div>
                    </div>`);
    }

    function addNewReportElement(name, density, area) {
        let el2 = document.querySelector(domString.report);
        el2.insertAdjacentHTML("beforeend", `<div>${name} has the tree density of ${density} trees per square kilometer. </div>`);
    }
    function addAgeElement(age) {
        let el2 = document.querySelector(domString.age);
        el2.textContent = "";
        el2.insertAdjacentHTML("beforeend", `<div>${age} is the average age of all parks </div>`);
    }
    return {
        getParkDetails: getParkDetails,
        callmodal: Modal,
        addNewHtml: addNewhtml,
        addthousandTree: (thousandTrees) => {
            if (thousandTrees) {
                let el = document.querySelector(domString.thousand);
                el.textContent = "";
                el.insertAdjacentHTML("beforeend", `<div>${thousandTrees} have more than 1000 trees. </div>`);
            }
        },
        getStreetDetails: streetDetails,
        ageEl: addAgeElement,
        addNewStreet: addNewStreet,
        addAvgOfStreet: (avg, count) => {
            let elStreet = document.querySelector(domString.streetAverage);
            elStreet.textContent = "";
            elStreet.insertAdjacentHTML("beforeend", `<div>Total of ${count} streets are present. ${avg[0]} is the average age of all Streets. Total length is ${avg[1]} </div>`);
        },
        addClassificaionsOfStreet: (streetsArr) => {
            let elStreet = document.querySelector(domString.streetSizeClassi);
            elStreet.textContent = "";
            elStreet.insertAdjacentHTML("beforeend", `<div>${streetsArr}</div>`);
        }
    }
    //7. create UI for new report
})();