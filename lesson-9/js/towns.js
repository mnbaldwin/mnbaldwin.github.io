const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name.toUpperCase() == "PRESTON" || towns[i].name.toUpperCase() == "SODA SPRINGS" || towns[i].name.toUpperCase() == "FISH HAVEN") {

                let card = document.createElement("section");
                let divText = document.createElement("div");
                let divPhoto = document.createElement("div");
                let h2TownName = document.createElement("h1");
                let pMotto = document.createElement("p");
                let pYearFounded = document.createElement("p");
                let pPopulation = document.createElement("p");
                let pAnnualRainfall = document.createElement("p");
                let imageTownPhoto = document.createElement('img');
                
                card.setAttribute("class", "town");
                divText.setAttribute("class", "town_text")
                divPhoto.setAttribute("class", "town_photo")
                h2TownName.textContent = towns[i].name;
                pMotto.textContent = towns[i].motto;
                pMotto.setAttribute("class","motto");
                pYearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
                pPopulation.textContent = "Population: " + towns[i].currentPopulation;
                pAnnualRainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall + " inches";

                imageTownPhoto.setAttribute('src', "/images/small_" + towns[i].photo);            
                imageTownPhoto.setAttribute('alt', towns[i].name + ' Photo');

                divText.appendChild(h2TownName);
                divText.appendChild(pMotto);
                divText.appendChild(pYearFounded);
                divText.appendChild(pPopulation);
                divText.appendChild(pAnnualRainfall);
                divPhoto.appendChild(imageTownPhoto);
                card.appendChild(divText);
                card.appendChild(divPhoto);                

                document.querySelector('div.town_cards').appendChild(card);
            }
        }
    });