export function convertRoomService(code) {
    var myOutputArray = [];
    if (code.search('"twentyFourHourRoomService":true') > -1) {
        myOutputArray.push("ROOM_SERVICE_AVAILABLE_24_HOURS")
    }
    else if (code.search('"roomService":true') > -1) {
        myOutputArray.push("ROOM_SERVICE_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}