let calculation ="";

function readIn(id){
    let value=document.getElementById(id).value
    if(value==="clear" || value==="delete"){
        if(value==="clear"){
            calculation=""
            document.getElementById("calculator-content").textContent = "ENTER CALCULATION"
        }
        else{
            calculation = calculation.slice(0,calculation.length-1);
            document.getElementById("calculator-content").textContent = calculation;
            if(calculation=""){
                document.getElementById("calculator-content").textContent = "ENTER CALCULATION"
            }
        }
    }
    else{
        calculation+=value;
        document.getElementById("calculator-content").textContent = calculation;
    }

}

function calculateResult(){
    result = eval(calculation)
    document.getElementById("calculator-content").textContent = " = "  + result
    calculation="";
}