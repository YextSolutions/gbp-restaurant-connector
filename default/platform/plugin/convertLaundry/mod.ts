export function convertLaundry(code) {
    var myOutputArray = [];
    if (code.search('"fullServiceLaundry":true') > -1) {
        myOutputArray.push("FULL_SERVICE")
    }
    else if (code.search('"selfServiceLaundry":true') > -1) {
        myOutputArray.push("SELF_SERVICE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}