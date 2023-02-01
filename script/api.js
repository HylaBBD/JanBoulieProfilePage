let clickedButton = false;

async function accessAPI() {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const data = await response.json();
    console.log(data.activity);
    const boredomAct = data.activity;
    let shownp = document.getElementById("shown-p");
    shownp.textContent="Sorry about that ;) Here's something to do if you are bored:"

    document.getElementById("shown-h1").textContent = "Xd"
    document.getElementById("activity").textContent = boredomAct;
}

async function buttonClicked() {
    if (clickedButton) {
        await accessAPI()
    }
    else {
        let navId = document.getElementById("video");
        if (navId.className === "") {
            navId.classList.add("show-video");
        } else {
            navId.className = "";
            clickedButton = true;
        }
    }
}

