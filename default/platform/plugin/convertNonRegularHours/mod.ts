export function convertNonRegularHours(code : string) {

    if(code=='{}'){
        return "00:00"
    }

    else if(code.search('hours"""":24')>-1){
        return "23:59"
    }

    else return code
}