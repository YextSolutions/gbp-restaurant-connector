export function convertAllInclusive(code) {
    var myOutputArray = [];
    if (code.search('"allInclusiveOnly":true') > -1) {
        myOutputArray.push("ALL_INCLUSIVE_RATES_ONLY")
    }
    else if (code.search('"allInclusiveAvailable":true') > -1) {
        myOutputArray.push("ALL_INCLUSIVE_RATES_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}