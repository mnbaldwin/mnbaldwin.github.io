var lat_long = "lat=45.415608&lon=-116.3221144"
getCurrentStats();

function getCurrentStats() {

    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?' + lat_long + '&units=imperial&APPID=50b0166ca1ae379ced37fa0954c76dc4';

    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            document.getElementById("spnCondition").textContent = jsObject.weather[0].main;
            document.getElementById("spnHighTemp").innerHTML = Math.round(jsObject.main.temp_max) + " &#8457;";
            document.getElementById("spnHumidity").textContent = jsObject.main.humidity + '%';

            document.getElementById("spnWindSpeed").innerHTML = Math.round(jsObject.wind.speed) + "&nbsp;mph";

            let windchill = "N/A";
            if (jsObject.main.temp <= 50 && jsObject.wind.speed > 3) {
                windchill = calcWindChill(jsObject.main.temp, jsObject.wind.speed) + " &#8457;";
            }
            document.getElementById("spnWindChill").innerHTML = windchill;

        });
}

function calcWindChill(temp, windspeed) {
    let windchill = Math.round(35.74 + (.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (.4275 * temp * Math.pow(windspeed, .16)));
    return windchill;
}