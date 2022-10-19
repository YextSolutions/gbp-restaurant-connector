export function convertAdditionalHours(code) {
    var outputArray = []
    var periods = code.split(',')
    if (code == "") {
        return ""
    }
    else if(code=='{}'){
        return "00:00"
    }

    else if(code.search('hours"""":24')>-1){
        return "23:59"
    }
    else {
        for (let i = 0; i < periods.length; i++) {
        if (periods[i].search('minutes') > -1) {
            var subPeriods = periods[i].split(',')
            var hour = subPeriods[0].replace(/[^0-9]/g, '')
            var minutes = subPeriods[1].replace(/[^0-9]/g, '')
            if (hour.length < 2) {
                hour = "0" + hour
            }
            if (minutes.length < 2) {
                minutes = "0" + minutes
            }
            outputArray.push(hour + ":" + minutes)

        }
        else {
            var hour = periods[i].replace(/[^0-9]/g, '')
            if (hour.length < 2) {
                hour = "0" + hour + ":00"
                outputArray.push(hour)
            }
            else {
                hour = hour + ':00'
                outputArray.push(hour)
            }
        }
    }
    var returnString = outputArray.toString()
    return returnString   
    }
}