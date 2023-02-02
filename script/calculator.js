let calculation ="";
let storedCalc="";
let stackCalc=[];
let storedOperation=[];
let cumulativeArr=[];

function populateCalc(rawVal){
    console.log("butts");
    floatVal=parseFloat(rawVal);
    console.log(floatVal);
    stackCalc.push(floatVal);
    console.log(stackCalc)
}
function currentCalc(index,cumuNum){
    let nextItem = stackCalc[index+1];
    let operation = storedOperation[index];
    console.log("-------------")
    console.log(cumuNum)
    console.log(operation)
    console.log(nextItem)
    
    console.log("------------------")
    let outcome=0;
    switch(operation){
        case "+":
            console.log("+");
            outcome=cumuNum+nextItem;
            return outcome;
        case "-":
            console.log("-");
            outcome=cumuNum-nextItem;
            return outcome;
        case "/":
            console.log("/");
            outcome=cumuNum/nextItem;
            return outcome;
        case "*":
            console.log("*");
            outcome=cumuNum*nextItem;
            console.log(outcome);
            return outcome;
    }
    return NaN;
}

function myEval(){
    let outcome =stackCalc[0];
    if (storedOperation){
        for (let i =0;i<storedOperation.length;i++){
            outcome= currentCalc(i,outcome);
        }
    }
    return outcome;
}

function calculateResult(){
    let resultMyEval= myEval().toString();
    console.log("result",resultMyEval)
    calculation=resultMyEval
    // document.getElementById("calculator-content").textContent="jjjjjjjjjjjjjj"
    // document.getElementById("calculator-content").textContent = resultMyEval;
    calculation="";
    return resultMyEval;
}

function readIn(id){
    let value=document.getElementById(id).value;
    if(value==="clear" || value==="delete"){
        if(value==="clear"){
            calculation=""
            storedCalc=""
            stackCalc=[]
            storedOperation=[]
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
        floatValue = parseFloat(value);
        // console.log(floatValue)
        calculation+=value;
        
        if(!isNaN(floatValue)){
            console.log("inif")
            storedCalc+=value;
        }
        else{
            console.log("inelse")
            if(value=="."){
                console.log("ininin")
                storedCalc+=value;
            }
            else{
                populateCalc(storedCalc);
                console.log("storednum",storedCalc)
                storedCalc="";
                if(value=="="){
                    
                    calculation=calculateResult()
                    stackCalc=[]
                    storedOperation=[]
                }
                else{
                    storedOperation.push(value);
                }
            }
        }
        document.getElementById("calculator-content").textContent = calculation;
    }
}