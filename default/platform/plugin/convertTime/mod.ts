export function convertTime(code : string) {

var intervals = code.split('}')
var outputIntervals : string[] = []

for (let i = 0; i < intervals.length; i ++) {

    if (intervals[i] == '') {
        outputIntervals.push('')
    }

    else if (intervals[i].search('hours"":24')>-1 ) {
        outputIntervals.push("23:59")
    }

    else if (intervals[i] == '{'){
        outputIntervals.push("00:00")
    }

    else if (intervals[i] == '"') {
        var test = ""
    }

    else {
    if (intervals[i].search('minutes') > -1 ) {
        var myArray = intervals[i].split('m')
        var finalTime :string[] = [];
        for (let i = 0; i < myArray.length; i++) {
            var thenum = myArray[i].replace(/[^0-9]/g, '');
            if (thenum.length<2) {
                thenum = "0" + thenum
            }
            finalTime.push(thenum);
        }
        outputIntervals.push(finalTime[0] + ":" + finalTime[1]);
    }

    else {
        var hour = intervals[i].replace(/[^0-9]/g, '') 
        if (hour.length < 2) {
            hour = "0"+hour
        }
        outputIntervals.push(hour + ":00")
    }
    }
}

var myFinalString = outputIntervals.toString()
if (myFinalString.charAt(myFinalString.length-1)==','){
    return myFinalString.slice(0,-1)
}
else {
    return myFinalString
}

}