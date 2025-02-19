
// array to display number buttons 
const numberButtonArray = [
    {id:1,value:1,displayText:1},{id:2,value:2,displayText:2},{id:3,value:3,displayText:3},{id:4,value:4,displayText:4},
    {id:5,value:5,displayText:5},{id:6,value:6,displayText:6},{id:7,value:7,displayText:7},{id:8,value:8,displayText:8},
    {id:9,value:9,displayText:9},{id:10,value:0,displayText:"C"},{id:11,value:0,displayText:0}
]

//array to display symbols buttons 
const symbolButtonArray = [
    {id:12,displayText:"AC"},{id:13,displayText:"%"},{id:14,displayText:"+"},{id:15,displayText:"-"},{id:16,displayText:"x"},{id:17,displayText:"/"},
    {id:18,displayText:"."},{id:19,displayText:"="}
]





// getting the value para element 
let valueParaEl = document.getElementById("valuePara"); 
valueParaEl.textContent = 0; 

let previousVal = 0; 

const numBtnContainerEl = document.getElementById("numBtnContainer");
const symbolBtnContainerEl = document.getElementById("symbolsBtnContainer");

// create and append the number button to numBtnContainerEl 
function createNumberButtons(details){
    const {value,id,displayText} = details;
    let buttonEl= document.createElement("button"); 
    buttonEl.textContent = displayText; 
    buttonEl.id = id; 
    buttonEl.value = value;
    buttonEl.classList.add("num-button");

    buttonEl.onclick = function(){
        if(id == 10){
            valueParaEl.textContent = 0; 
        }
        if(id != 10){
            basicRuleForDisplayNum(value);
        }
    }

    numBtnContainerEl.appendChild(buttonEl);

}

// Displaying number buttons 
numberButtonArray.map((eachArr)=>{ 
    createNumberButtons(eachArr);
})


function basicRuleForDisplayNum(num){
    if( (valueParaEl.textContent != 0)  &&  (valueParaEl.textContent.length <= 9) ) {
        valueParaEl.textContent += num;
    }
    if(valueParaEl.textContent == 0){
        valueParaEl.textContent = num ;
    }

}


// create and append symbols buttons to symbolBtnContainerEl 

function createSymbolsButton(details){
    const {id,displayText} = details

    let symButtonEl = document.createElement("button");
    symButtonEl.textContent = displayText;
    symButtonEl.value = displayText;
    symButtonEl.id = id;
    symButtonEl.classList.add("symbol-button");


    symButtonEl.onclick= function(event){
        symbolButtonRulesToDisplay(event);
    }


    symbolBtnContainerEl.appendChild(symButtonEl);

}

symbolButtonArray.map((eachArr)=>{
    createSymbolsButton(eachArr);
})


function symbolButtonRulesToDisplay(event){
    const selectedButton = event.target.value
    


    if(selectedButton == "AC"){
        valueParaEl.textContent = 0; 
        previousVal = 0; 
    }

    if(selectedButton == "+"){
        let newValue = previousVal + parseInt(valueParaEl.textContent) ; 

        valueParaEl.textContent = newValue ; 
        previousVal = newValue ; 




        /* const newValue = parseInt(previousVal) + parseInt(valueParaEl.textContent)  ;  
        console.log(newValue);
        valueParaEl.textContent = newValue;
        previousVal =newValue ; */ 
    }



}
