const requestURL = 'data/guide_data.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const guides = jsonObject['guides'];
        for (let i = 0; i < guides.length; i++) {
            

                let card = document.createElement("section");
                let divText = document.createElement("div");               
                let h2GuideName = document.createElement("h2");                
                let pYearsOfExperience = document.createElement("p");
                let pCertificationLevel = document.createElement("p");
                let pEmail = document.createElement("p");
                let pBio = document.createElement("div");
                let imageGuide = document.createElement('img');
                               
                card.setAttribute("class", "guide");
                divText.setAttribute("class", "guide_text")            
                h2GuideName.textContent = guides[i].name;
                pYearsOfExperience.innerHTML = "Years of Experience: " + guides[i].years_of_experience;
                pBio.innerHTML = guides[i].biography;            
                pCertificationLevel.innerHTML = "Certifications Level: " + guides[i].certification_level;
                pEmail.innerHTML = "&#x1F584; " + guides[i].email_address;                
                
                imageGuide.setAttribute('src', "images/" + guides[i].picture);            
                imageGuide.setAttribute('alt', guides[i].name + ' Photo');

                divText.appendChild(h2GuideName);
                
                divText.appendChild(pYearsOfExperience);
                divText.appendChild(pCertificationLevel);                
                divText.appendChild(pBio);
                divText.appendChild(pEmail);                
                card.appendChild(divText);
                card.appendChild(imageGuide); 
                                                                              
                document.querySelector('div.guide_cards').appendChild(card);            
        }
    });