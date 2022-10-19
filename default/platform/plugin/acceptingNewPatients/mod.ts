export function acceptingNewpatients(code) {
    var outputArray = []
    var myArray = code.split('"name"')
    for (let i = 0; i<myArray.length; i++) {
        if (myArray[i].search('accepts_new_patients') > -1 && myArray[i].search('true')) {
            outputArray.push(true)
        }
    }
    var outputString = outputArray.toString()
    return outputString
}