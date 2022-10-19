export function convertFrontDesk(code) {
    var myOutputArray = [];
    if (code.search('"twentyFourHourFrontDesk":true') > -1) {
        myOutputArray.push("FRONT_DESK_AVAILABLE_24_HOURS")
    }
    else if (code.search('"frontDesk":true') > -1) {
        myOutputArray.push("FRONT_DESK_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}