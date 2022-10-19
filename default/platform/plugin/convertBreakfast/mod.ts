export function convertBreakfast(code) {
    var myOutputArray = [];
    if (code.search('"freeBreakfast":true') > -1) {
        myOutputArray.push("BREAKFAST_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"breakfast":true') > -1) {
        myOutputArray.push("BREAKFAST_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}