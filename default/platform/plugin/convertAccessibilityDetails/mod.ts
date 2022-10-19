export function convertAccessibilityDetails(code) {
    var myOutputArray = [];
    if (code.search('"mobilityAccessibleParking":true') > -1) {
        myOutputArray.push("ACCESSIBLE_PARKING")
    }
    if (code.search('"mobilityAccessibleElevator":true') > -1) {
        myOutputArray.push("ACCESSIBLE_ELEVATOR")
    }
    if (code.search('"mobilityAccessiblePool":true') > -1) {
        myOutputArray.push("ACCESSIBLE_POOL")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}