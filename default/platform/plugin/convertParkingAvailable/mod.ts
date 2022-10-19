export function convertParkingAvailable(code) {
    var myOutputArray = [];
    if (code.search('"freeParking":true') > -1) {
        myOutputArray.push("PARKING_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"parkingAvailable":true') > -1) {
        myOutputArray.push("PARKING_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}