export function convertPetsAllowed(code) {
    var myOutputArray = [];
    if (code.search('"petsAllowedFree":true') > -1) {
        myOutputArray.push("PETS_WELCOME_FOR_FREE")
    }
    else if (code.search('"petsAllowed":true') > -1) {
        myOutputArray.push("PETS_WELCOME")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}