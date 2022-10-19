export function convertValetParkingAvailable(code) {
    var myOutputArray = [];
    if (code.search('"freeValetParking":true') > -1) {
        myOutputArray.push("VALET_PARKING_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"valetParkingAvailable":true') > -1) {
        myOutputArray.push("VALET_PARKING_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}