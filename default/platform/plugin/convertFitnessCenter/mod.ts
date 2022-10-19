export function convertFitnessCenter(code) {
    var myOutputArray = [];
    if (code.search('"freeFitnessCenter":true') > -1) {
        myOutputArray.push("FITNESS_CENTER_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"fitnessCenter":true') > -1) {
        myOutputArray.push("FITNESS_CENTER_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}