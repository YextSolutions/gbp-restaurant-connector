export function convertHouskeeping(code) {
    var myOutputArray = [];
    if (code.search('"dailyHousekeeping":true') > -1) {
        myOutputArray.push("HOUSEKEEPING_AVAILABLE_DAILY")
    }
    else if (code.search('"housekeepingAvailable":true') > -1) {
        myOutputArray.push("HOUSEKEEPING_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}