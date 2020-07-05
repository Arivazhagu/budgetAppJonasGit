var adminCtrl = (function () {
    class park {
        constructor(name, yob, treeCount, Area) {
            this.name = name;
            this.yob = yob;
            this.treeCount = treeCount;
            this.area = Area;
            //8. calculate tree density= number of trees/park
            this.density = (parseInt(this.treeCount) / parseInt(this.area)).toFixed(2);
        }
    }

    class street {
        constructor(streetName, streetYear, streetLength, size="Medium") {
            this.streetName = streetName;
            this.streetYear = streetYear;
            this.streetLength = streetLength;
            this.streetSize = size;
        }
    }

    //4. data structure
    let consolidatedData = {
        parkDetails: [],
        averageAge: 0,
        streetDetails:[]
    }

    let newPark = (parkObj) => {
        let newPark = new park(parkObj["name"], parkObj["yearOfBuild"], parkObj["numberOfTrees"], parkObj["area"])
        return newPark;
    }

    return {
        //5. add values to data structure
        addParkDetails: (parkObj) => {
            let newPrk = newPark(parkObj);
            consolidatedData.parkDetails.push(newPrk);
            return newPrk;
        },
        allData: consolidatedData,
        calculateThoundTrees: () => {
            let strThoundTrees = "";
            let avgAge = 0;
            consolidatedData.parkDetails.forEach((val, i) => {
                if (i !== 0 && i !== consolidatedData.parkDetails.length) {
                    strThoundTrees += ',';
                }
                if (val["treeCount"] > 1000) {
                    strThoundTrees += val["name"];
                }
                avgAge += (new Date().getFullYear() - parseInt(val["yob"]));
            })
            consolidatedData.averageAge = (parseInt(avgAge) / consolidatedData.parkDetails.length);
            return strThoundTrees;
        },
        calculateAvgAge: () => {
            return (consolidatedData.averageAge);
        },
        totalParks: () => {
            return consolidatedData.parkDetails.length;
        },
        addNewStreet: (streetDetails) => {
            let size;
            if (streetDetails.streetLength > 10) {
                size= "Large"
            } else if (streetDetails.streetLength <10) {
                size = "Small"
            }
            let newStreet = new street(streetDetails.streetname, streetDetails.streetYear, streetDetails.streetLength, size)
            consolidatedData.streetDetails.push(newStreet);
            return newStreet;
        },
        streetDetails: () => {
            return (consolidatedData.streetDetails.length);
        },
        avgOfStreets: () => {
            let avg=0;
            for (const element of consolidatedData.streetDetails) {
                avg += parseInt(element.streetLength);
            }
            return [(avg / (consolidatedData.streetDetails.length)),avg];
        },
        StreetClassification: () => {
            let classi = "";
            for (const element of consolidatedData.streetDetails) {
               classi+= `${element.streetName}, has the total length of ${element.streetLength}. This street is ${element.streetSize}.</br> `
            }
            return classi;
        }
    }
})();