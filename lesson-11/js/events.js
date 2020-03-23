const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let cityName = document.getElementById("cityName").value;
let towns = null;
let currentEvent = 0;
let maxEvent = 0
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        towns = jsonObject['towns'];
         for (let i = 0; i < towns.length; i++) {
             if (towns[i].name.toUpperCase() == cityName.toUpperCase()) {
                
                let head = document.createElement("h2");
                head.textContent ="Upcoming Events";
                document.querySelector('div.events').appendChild(head);
                maxEvent = towns[i].events.length -1;
                        
                     let pText = document.createElement("p");
                     pText.setAttribute("id", "pEvent");
                     pText.textContent = towns[i].events[currentEvent];
                     document.querySelector('div.events').appendChild(pText);
     
                currentEvent++;
                                                                        
             }
         }
    });

function changeEvent(){
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name.toUpperCase() == cityName.toUpperCase()) {
            
            // let head = document.createElement("h2");
            // head.textContent ="Upcomping Events";
            // document.querySelector('div.events').appendChild(head);
                        
            let pText = document.getElementById("pEvent");    
            pText.textContent = towns[i].events[currentEvent];
            //document.querySelector('div.events').appendChild(pText);
                                                                    
        }
    }
    if (currentEvent == maxEvent){
        currentEvent = 0;
    }
    else{
        currentEvent++;
    }
}
setInterval(changeEvent, 4000);

