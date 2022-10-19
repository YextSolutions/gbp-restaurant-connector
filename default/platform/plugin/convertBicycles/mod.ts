export function convertBicycle(code) {
    var myOutputArray = [];
    if (code.search('"freeBicycleRental":true') > -1) {
        myOutputArray.push("BICYCLE_RENTALS_FOR_FREE")
    }
    else if (code.search('"bicycleRental":true') > -1) {
        myOutputArray.push("BICYCLE_RENTALS")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}