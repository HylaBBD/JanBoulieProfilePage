// const factContent = document.getElementById("dog-fact");

// async function getFact() {
//     const response = await fetch("http://dog-api.kinduff.com/api/facts");
//     let responseFact = await response.json();
//     console.log(responseFact);

//     if (response) {
//         factOUt(responseFact);
//     }
// }
// function factOUt(fact) {
//     let factFormat =
//         `<p>${fact.facts}<p>`;

//     factContent.innerHTML = factFormat;

// }

let clickedButton = false;
function buttonClicked() {
    if(clickedButton){
        
    }
    else{
        var navId = document.getElementById("video");
        if (navId.className === "") {
          navId.className += "show-video";
        } else {
          navId.className = "";
          clickedButton=true;
        } 
    }
  }