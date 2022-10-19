export function convertBuffet(code) {
    var myOutputArray = [];
    if (code.search('"buffet":true') > -1) {
        myOutputArray.push("BUFFET")
    }
    if (code.search('"dinnerBuffet":true') > -1) {
        myOutputArray.push("BUFFET_DINNER")
    }
    if (code.search('"breakfastBuffet":true') > -1) {
        myOutputArray.push("BUFFET_BREAKFAST")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}