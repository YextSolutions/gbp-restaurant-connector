export function convertAirportShuttle(code) {
    var myOutputArray = [];
    if (code.search('"freeAirportShuttle":true') > -1) {
        myOutputArray.push("AIRPORT_SHUTTLE_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"airportShuttle":true') > -1) {
        myOutputArray.push("AIRPORT_SHUTTLE_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}