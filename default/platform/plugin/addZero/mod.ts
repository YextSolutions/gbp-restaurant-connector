export async function addZero(timePeriod: string): string {

    if (timePeriod.length == 1) {
        var result = "0" + timePeriod
        return result
    }
    else {
        return timePeriod
    }
}

