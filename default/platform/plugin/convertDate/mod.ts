export function handleSpecialHours(code) {

    if (code == ""){
        return ""
    }
    else{
    var returnArray = [];
    var dates = code.split('year');
    for (let i = 0; i < dates.length; i++) {
        var dateComponents = dates[i].split(':')
        for (let x = 1; x < dateComponents.length; x++) {
            var dateJustNumber = dateComponents[x].replace(/\D/g, '');
            if (dateJustNumber.length<2) {
                dateJustNumber = "0" + dateJustNumber
            }
            dateComponents[x] = dateJustNumber
        }
        returnArray.push(dateComponents[1] + '-' + dateComponents[2] + '-' + dateComponents[3])
    }
    returnArray.shift()
    var result = returnArray.toString()
    return result
}
}