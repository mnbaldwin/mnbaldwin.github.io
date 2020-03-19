const requestURL = 'http://localhost/PoliAPI//Official/GetOfficials/1';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const officials = jsonObject;
        for (let i = 0; i < officials.length; i++) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let pOfficeName = document.createElement('p');            
            let image = document.createElement('img');

            h2.textContent = "Name: " + officials[i].Name;            
            pOfficeName.textContent = "Office Name: " + officials[i].OfficeName;            
                                    
            if(officials[i].PhotoUrl != ""){
                image.setAttribute('src', officials[i].PhotoUrl);            
            }
            else
            {
                image.setAttribute('src', 'img/placeholder.png');            
            }
            image.setAttribute('alt', officials[i].name);

            card.appendChild(h2);
            card.appendChild(pOfficeName);            
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });