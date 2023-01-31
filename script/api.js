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

async function accessAPI() {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    console.log(data.activity);
    const boredomAct = data.activity;
    let shownp = document.getElementById("shown-p");
    let hiddenp = document.getElementById("boredom");
        if(hiddenp.className==="boredom"){
            hiddenp.className += " visible";
            shownp.className += "boredom";
        }            

    document.getElementById("dog-fact").textContent = boredomAct;
}

function buttonClicked() {
    if (clickedButton) {
        accessAPI()
    }
    else {
        let navId = document.getElementById("video");
        if (navId.className === "") {
            navId.className += "show-video";
        } else {
            navId.className = "";
            clickedButton = true;
        }
    }
}

