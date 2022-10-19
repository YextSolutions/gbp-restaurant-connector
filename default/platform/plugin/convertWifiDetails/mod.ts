export function convertWifiDetails(code) {
    var myOutputArray = [];
    if (code.search('"publicAreaWifiAvailable":true') > -1) {
        myOutputArray.push("WIFI_IN_PUBLIC_AREAS")
    }
    if (code.search('"publicInternetTerminal":true') > -1) {
        myOutputArray.push("PUBLIC_INTERNET_TERMINAL")
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}