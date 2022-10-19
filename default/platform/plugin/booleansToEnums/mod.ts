function myFunction(code) {
    var outputArray : string[] = []
    var myList = code.split(",")
    for (let i = 0; i<myList.length; i++) {
        if (myList[i].search("true") == -1) {
            myList[i].replace('true', '')
            myList[i].replace('true', '')
            myList[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
            var myString : string = myList[i]
            outputArray.push(myString)
        }
    }
    var outputString = outputArray.toString()
    return outputString
}