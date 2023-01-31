function dropDown() {
    var navId = document.getElementById("navigation");
    if (navId.className === "") {
      navId.className += " responsive";
    } else {
      navId.className = "";
    }
  }