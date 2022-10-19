export function convertPrivateCarService(code) {
    var myOutputArray = [];
    if (code.search('"freePrivateCarService":true') > -1) {
        myOutputArray.push("PRIVATE_CAR_SERVICE_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"privateCarService":true') > -1) {
        myOutputArray.push("PRIVATE_CAR_SERVICE_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}