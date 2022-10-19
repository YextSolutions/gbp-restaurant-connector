export function coverPhotoList(code) {
    var myOutputArray = [];
    var myArray = code.split('name')
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].search('COVER') > -1) {
            var mySubstring = myArray[i].slice(myArray[i].search('googleUrl'))
            var googleUrl = mySubstring.slice(12,mySubstring.search(','))
            myOutputArray.push(googleUrl)
        }
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}

export function logoPhotoList(code) {
    var myOutputArray = [];
    var myArray = code.split('name')
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].search('LOGO') > -1) {
            var mySubstring = myArray[i].slice(myArray[i].search('googleUrl'))
            var googleUrl = mySubstring.slice(12,mySubstring.search(','))
            myOutputArray.push(googleUrl)
        }
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}

export function photoList(code) {
    var myOutputArray = [];
    var myArray = code.split('name')
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].search('PHOTO') > -1) {
            var mySubstring = myArray[i].slice(myArray[i].search('googleUrl'))
            var googleUrl = mySubstring.slice(12,mySubstring.search(','))
            myOutputArray.push(googleUrl)
        }
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}

export function coverPhotoDescription(code) {
    var myOutputArray = [];
    var myArray = code.split('name')
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].search('COVER') > -1) {
            if (myArray[i].search('description') > -1) {
                var mySubstring = myArray[i].slice(myArray[i].search('description'))
                var googleUrl = mySubstring.slice(15,mySubstring.search('}')-1)
                myOutputArray.push(googleUrl)
            }
            else {
                myOutputArray.push("")
            }
        }
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}

export function logoPhotoDescription(code) {
    var myOutputArray = [];
    var myArray = code.split('name')
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].search('LOGO') > -1) {
            if (myArray[i].search('description') > -1) {
                var mySubstring = myArray[i].slice(myArray[i].search('description'))
                var googleUrl = mySubstring.slice(15,mySubstring.search('}')-1)
                myOutputArray.push(googleUrl)
            }
            else {
                myOutputArray.push("")
            }
        }
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}

export function photoDescription(code) {
    var myOutputArray = [];
    var myArray = code.split('name')
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].search('PHOTO') > -1) {
            if (myArray[i].search('description') > -1) {
                var mySubstring = myArray[i].slice(myArray[i].search('description'))
                var googleUrl = mySubstring.slice(15,mySubstring.search('}')-1)
                myOutputArray.push(googleUrl)
            }
            else {
                myOutputArray.push("")
            }
        }
    }
    var myOutputString = myOutputArray.toString()
    return myOutputString
}