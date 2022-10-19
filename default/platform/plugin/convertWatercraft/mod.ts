export function convertWatercraft(code) {
    var myOutputArray = [];
    if (code.search('"freeWatercraftRental":true') > -1) {
        myOutputArray.push("WATERCRAFT_RENTALS_FOR_FREE")
    }
    else if (code.search('"watercraftRental":true') > -1) {
        myOutputArray.push("WATERCRAFT_RENTALS")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}