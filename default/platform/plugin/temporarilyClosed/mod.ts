export async function temporarilyClosed(openInfo: string) : string {
   
    if (openInfo.search("TEMPORARILY") > -1) {
        var myArray = openInfo.split(":")
        if (myArray[5].charAt(2) == ",") {
            myArray[5] = "0" + myArray[5]
        }
        if (myArray[6].charAt(2) == "}") {
            myArray[6] = "0" + myArray[6]
        }
        var reopenDate = myArray[4].substring(0,4) + ":" + myArray[5].substring(0,2) + ":" + myArray[6].substring(0,2)
        return reopenDate
    }
    else {
        var blankString = ""
        return blankString
    }

}





//{"status":"CLOSED_PERMANENTLY","canReopen":true,"openingDate":{"year":2018,"month":8,"day":12}}