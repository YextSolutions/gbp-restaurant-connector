export function mondayClosed(code : string) {

    if (code.search('MONDAY') > -1) {
        return false
    }

    else if (code.search('TUESDAY') > -1 ||code.search('WEDNESDAY') > -1 ||code.search('THURSDAY') > -1 ||code.search('FRIDAY') > -1 ||code.search('SATURDAY') > -1 ||code.search('SUNDAY') > -1){
        return true
    }

}


export function tuesdayClosed(code : string) {

        if (code.search('TUESDAY') > -1) {
            return false
        }
    
        else if (code.search('MONDAY') > -1 ||code.search('WEDNESDAY') > -1 ||code.search('THURSDAY') > -1 ||code.search('FRIDAY') > -1 ||code.search('SATURDAY') > -1 ||code.search('SUNDAY') > -1) {
            return true
        }
}

export function wednesdayClosed(code : string) {

    if (code.search('WEDNESDAY') > -1) {
        return false
    }

else if (code.search('TUESDAY') > -1 ||code.search('MONDAY') > -1 ||code.search('THURSDAY') > -1 ||code.search('FRIDAY') > -1 ||code.search('SATURDAY') > -1 ||code.search('SUNDAY') > -1) {
        return true
    }
}

export function thursdayClosed(code : string) {

    if (code.search('THURSDAY') > -1) {
        return false
    }

    else if (code.search('TUESDAY') > -1 ||code.search('WEDNESDAY') > -1 ||code.search('MONDAY') > -1 ||code.search('FRIDAY') > -1 ||code.search('SATURDAY') > -1 ||code.search('SUNDAY') > -1) {
        return true
    }
}

export function fridayClosed(code : string) {

    if (code.search('FRIDAY') > -1) {
        return false
    }

    else if (code.search('TUESDAY') > -1 ||code.search('WEDNESDAY') > -1 ||code.search('THURSDAY') > -1 ||code.search('MONDAY') > -1 ||code.search('SATURDAY') > -1 ||code.search('SUNDAY') > -1) {
        return true
    }
}

export function saturdayClosed(code : string) {

    if (code.search('SATURDAY') > -1) {
        return false
    }

    else if (code.search('TUESDAY') > -1 ||code.search('WEDNESDAY') > -1 ||code.search('THURSDAY') > -1 ||code.search('FRIDAY') > -1 ||code.search('MONDAY') > -1 ||code.search('SUNDAY') > -1) {
        return true
    }
}

export function sundayClosed(code : string) {

    if (code.search('SUNDAY') > -1) {
        return false
    }

    else if (code.search('TUESDAY') > -1 ||code.search('WEDNESDAY') > -1 ||code.search('THURSDAY') > -1 ||code.search('FRIDAY') > -1 ||code.search('SATURDAY') > -1 ||code.search('MONDAY') > -1) {
        return true
    }
}