/*
Basic Functionality:
1. Must display to textbox
2. Must be able to clear textbox display
3. Must be able to evaluate valid equation inputs
*/
function display(value){
    document.getElementById("result").value += value;
}

function clearDisplay(){
    document.getElementById("result").value = "";
}

function calculate(){

    var currentVal = document.getElementById("result").value;
    try{
        var finalVal = eval(currentVal); //Bonus TODO: Handle cases where eval is bad
        document.getElementById("result").value = finalVal;
    }
    
    catch (error){
        if(error instanceof SyntaxError){
            document.getElementById("result").value = "ERROR";
        }
    }
    
}

//BONUS TODO: Add table below for history of operations
