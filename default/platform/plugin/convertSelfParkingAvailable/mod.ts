export function convertSelfParkingAvailable(code) {
    var myOutputArray = [];
    if (code.search('"freeSelfParking":true') > -1) {
        myOutputArray.push("SELF_PARKING_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"selfParkingAvailable":true') > -1) {
        myOutputArray.push("SELF_PARKING_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}