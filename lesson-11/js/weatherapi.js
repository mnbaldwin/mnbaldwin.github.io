let cityId = document.getElementById("cityId").value;
getCurrentStats(cityId);
getFiveDayForecast(cityId);

function getCurrentStats() {
        
    let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=imperial&APPID=50b0166ca1ae379ced37fa0954c76dc4';
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
//            console.log(jsObject);            
            document.getElementById("spnCondition").textContent = jsObject.weather[0].main;
            document.getElementById("spnHighTemp").innerHTML = Math.round(jsObject.main.temp_max) + " &#8457;";
            document.getElementById("spnHumidity").textContent = jsObject.main.humidity + '%';

            document.getElementById("spnWindSpeed").textContent = Math.round(jsObject.wind.speed) + " mph";

            let windchill = "N/A";
            if (jsObject.main.temp <= 50 && jsObject.wind.speed > 3) {
                windchill = calcWindChill(jsObject.main.temp, jsObject.wind.speed) + " &#8457;";
            }
            document.getElementById("spnWindChill").innerHTML = windchill;

        });
}

function getFiveDayForecast() {
    let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&units=imperial&APPID=50b0166ca1ae379ced37fa0954c76dc4';
    
    let weekday = [];

    weekday[0]="Mon";
    weekday[1]="Tues";
    weekday[2]="Wed";
    weekday[3]="Thur";
    weekday[4]="Fri";
    weekday[5]="Sat";
    weekday[6]="Sun";

    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            //console.table(jsonObject);
            
            for (let i = 0; i < jsonObject.list.length; i++) {            
                
                if (jsonObject.list[i].dt_txt.includes("18:00:00")) {
                    let div = document.createElement('div');                    
                    let h3 = document.createElement('h3');
                    let image = document.createElement('img');
                    let pTemp = document.createElement('p');            
                    let d = new Date(jsonObject.list[i].dt * 1000);                                    
                    
                    h3.textContent = weekday[d.getDay()];
                    image.setAttribute("src","https://openweathermap.org/img/w/" + jsonObject.list[i].weather[0].icon + ".png");
                    image.setAttribute("alt", jsonObject.list[i].weather[0].description)
                    pTemp.innerHTML = Math.round(jsonObject.list[i].main.temp) + " &#8457;";
                    div.appendChild(h3);
                    div.appendChild(image);
                    div.appendChild(pTemp);              
                    document.getElementById("fivedayforecast").appendChild(div);
                }
            }
        });
}

function calcWindChill(temp, windspeed) {
    let windchill = Math.round(35.74 + (.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (.4275 * temp * Math.pow(windspeed, .16)));
    return windchill;
}