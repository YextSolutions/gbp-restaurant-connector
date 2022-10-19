export function convertWifiAvailable(code) {
    var myOutputArray = [];
    if (code.search('"freeWifi":true') > -1) {
        myOutputArray.push("WIFI_AVAILABLE_FOR_FREE")
    }
    else if (code.search('"wifiAvailable":true') > -1) {
        myOutputArray.push("WIFI_AVAILABLE")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}