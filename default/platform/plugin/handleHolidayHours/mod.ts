export function specialHoursStartDate(code) {
    var outputArray=[];
    var periods = code.split('startDate');
    for (let i = 1; i < periods.length; i++) {
        var year = periods[i].substring(10,14)
        var month = periods[i].substring(23,periods[i].search("d")-2)
        if (month.length < 2) {
            month = "0" + month
        }
        var day = periods[i].substring(periods[i].search("day")+5,periods[i].search("}"))
        if (day.length < 2) {
            day = "0" + day
        }
        outputArray.push(year + "-" + month + "-" + day)
    }
    var returnString = outputArray.toString()
    return returnString
}

export function specialHoursOpenIntervalStart(code) {
    var outputArray=[];
    var periods = code.split('startDate');
    for (let i = 1; i < periods.length; i++) {
        if (periods[i].search("openTime")==-1 || periods[i].search('openTime":{}') > -1){
            outputArray.push("")
        }
        else {
            var hour = periods[i].substring(periods[i].search("hours")+7,periods[i].search("hours")+9)
            if (hour.charAt(1) == "}" || hour.charAt(1) == ",") {
                hour = "0" + hour.charAt(0)
            }
            if (periods[i].substring(1,65).search("minutes")>-1) {
                var minutes = periods[i].substring(periods[i].search("minutes")+9,periods[i].search("endDate")-3)
                if (minutes.length<2) {
                    minutes = "0" + minutes
                }
                outputArray.push(hour + ":" + minutes)
            }
            else{
                outputArray.push(hour + ":00")
            }

        }
    }
    var returnString = outputArray.toString()
    return returnString
}

export function specialHoursOpenIntervalClose(code) {
    var outputArray=[];
    var periods = code.split('startDate');
    for (let i = 1; i < periods.length; i++) {
        if (periods[i].search("closeTime")==-1 || periods[i].search('closeTime":{}') > -1){
            outputArray.push("")
        }
        else {
            var hour = periods[i].substring(periods[i].search('closeTime":{"hours"')+20,periods[i].search('closeTime":{"hours"')+22)
            if (hour.charAt(1) == "}" || hour.charAt(1) == ",") {
                hour = "0" + hour.charAt(0)
            }
            if (periods[i].substring(80).search("minutes")>-1) {
                var minutes = periods[i].substring(periods[i].search('closeTime":{"hours"')+33,periods[i].search('closeTime":{"hours"')+35)
                if (minutes.charAt(1) == "}" || minutes.charAt(1) == ",") {
                    minutes = "0" + minutes.charAt(0)
                }
                outputArray.push(hour + ":" + minutes)
            }
            else {
                outputArray.push(hour + ":00")
            }
        }
    }
    var returnString = outputArray.toString()
    return returnString
}

export function specialHoursIsClosed(code) {
    var outputArray=[];
    var periods = code.split('startDate');
    for (let i = 1; i < periods.length; i++) {
        if (periods[i].search('"closed":true') > -1) {
            outputArray.push(true)
        }
        else if (periods[i].search('closeTime":{}') > -1 && periods[i].search('openTime":{}') > -1) {
            outputArray.push(true)
        }
        else {
            outputArray.push("")
        }

    }
    var returnString = outputArray.toString()
    return returnString
}