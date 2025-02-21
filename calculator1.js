const displayText = document.getElementById("valuePara");
displayText.value = "" ; 
let num1=0,symbol,num2=0 ; 

function addNum(num){
    displayText.value += num ;
    displayText.textContent += num;  
}

function addSymbolCal(sym){
    num1 = parseFloat(displayText.value);  
    displayText.value = "";
    displayText.textContent = ""; 
    symbol = sym ;  
}

function clearAllNum(){
    displayText.value = "";
    displayText.textContent = ""; 
}

function calculate(){
    num2 = parseFloat(displayText.value);  
    
    let result; 

    switch(symbol){
        case "+": result =  num1+num2  ; break ;
        case "-": result = num1-num2 ; break ;
        case "*": result = num1*num2 ; break ;
        case "/": result = num1/num2 ; break ;
        case "%": result = num1*(num2/100); break; 
    }

    displayText.value = `${result}` ; 
    displayText.textContent = `${result}` ; 

}