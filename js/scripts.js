function lastUpdated() {
    let d = new Date(document.lastModified);
    document.getElementById("spanLastUpdated").innerHTML = "Last updated: " + d.toLocaleString();
  }