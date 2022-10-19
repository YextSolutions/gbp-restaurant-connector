export function roomService(code) {
    var myOutputArray = [];
    if (code.search('"roomService":true') > -1) {
        myOutputArray.push("ROOM_SERVICE_AVAILABLE")
    }
    if (code.search('"twentyFourHourRoomService":true') > -1) {
        myOutputArray.push("ROOM_SERVICE_AVAILABLE_24_HOURS")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}