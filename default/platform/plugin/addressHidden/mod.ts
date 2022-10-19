export async function addressHidden(businessType: string): string {
    if (businessType == "CUSTOMER_LOCATION_ONLY" || businessType == "BUSINESS_TYPE") {
        return "true"
    }
    else {
        return "false"
    }

}