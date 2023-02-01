let calculation ="";

function readIn(id){
    let value=document.getElementById(id).value
    if(value==="clear" || value==="delete"){
        if(value==="clear"){
            calculation=""
            document.getElementById("calculator-content").textContent = "ENTER CALCULATION"
        }
        else{
            calculation.slice(0,-1);
        }
    }
    else{
        calculation+=value;
        document.getElementById("calculator-content").textContent = calculation;
    }

}