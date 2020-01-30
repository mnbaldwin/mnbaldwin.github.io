function lastUpdated() {
    let d = new Date(document.lastModified);
    document.getElementById("spanLastUpdated").innerHTML = "Last updated: " + d.toLocaleString();
}

function toggleMenu(){
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}