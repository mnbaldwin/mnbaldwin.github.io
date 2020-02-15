function diplayWindChill() {
    let temp = document.getElementById("hdnHighTemp").value;
    let windspeed = document.getElementById("hdnWindspeed").value;
    let windchill = "N/A";
    if (temp <= 50 && windspeed > 3) {
        windchill = calcWindChill(temp, windspeed) + " &#8457;";
    }
    document.getElementById("spnWindChill").innerHTML = windchill;
}

function calcWindChill(temp, windspeed) {
    let windchill = Math.round(35.74 + (.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (.4275 * temp * Math.pow(windspeed, .16)));
    return windchill;
}
