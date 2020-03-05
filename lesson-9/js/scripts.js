function lastUpdated() {
  let d = new Date(document.lastModified);
  document.getElementById("spanLastUpdated").innerHTML = "Last updated: " + d.toLocaleString();
}

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function main() {
  lastUpdated();
  toggleBanner();
  //diplayWindChill();
}

function toggleBanner() {
  var d = new Date();
  if (d.getDay() == 5) {
    document.getElementById("topleftbanner").className = "topleftbanneron";
  }
}

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}