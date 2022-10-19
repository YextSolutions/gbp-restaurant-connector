export function restaurantCategoryFilter(code) {
    
    var restaurantCategories = ["2202","1159","1160","2203","2204","1322915","1197","2205","2206","2207","1161","1151","1162","1163","2209","1502014","2210","1164","2211","2212","1166","1169","1059512","1171","2213","1172","1375138","1173","1174","1322918","2214","1175","1059516","1059498","1059497","1170","2215","2216","1322916","2217","2218","1176","1322917","2305","1177","2219","1187","2227","2228","1179","1180","1181","2230","2231","2232","981590","981590","1182","1183","1184","1375159","1185","1167","410","1186","1343516","1343516","2233","2234","1188","1189","1190","1191","2235","1192","1193","1194","2236","2237","2249","1196528","1195","1196","2238","2239","2240","2241","1502013","1133","1198","2242","2243","411","1165","1322919","152","1059502","1199","1061249","2244","1200","1201","1061250","1202","2246","2247","1203","1204","1206","2248","2250","1208","1209","2251","1505412","2252","1210","1211"]
    if (restaurantCategories.includes(code)) {
        return true
    }
    else {
        return false
    }


}


export function healthcareProfessionalCategoryFilter(code) {
    
    var healthcareProfessionalCategories = ["1120591","1505518","1135560","1255","2159","1257","1258"]
    if (healthcareProfessionalCategories.includes(code)) {
        return true
    }
    else {
        return false
    }


}

export function healthcareFacilityCategoryFilter(code) {
    
    var healthcareFacilityCategories = ["1272","1354","1274","1135557","1135204","1277","1276","1256","2255","1135558","1325","1135555","1370","1275","1503536","169"]
    if (healthcareFacilityCategories.includes(code)) {
        return true
    }
    else {
        return false
    }


}


export function hotelCategoryFilter(code) {
    
    var healthcareFacilityCategories = ["2114","1946","1089336","1278606","1089337","1086672","1322999","1089340","1086671","1089341","2093","1947"]
    if (healthcareFacilityCategories.includes(code)) {
        return true
    }
    else {
        return false
    }


}

export function atmCategoryFilter(code) {
    
    var atmCategories = ["2288"]
    if (atmCategories.includes(code)) {
        return true
    }
    else {
        return false
    }


}