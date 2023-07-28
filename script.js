
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation")
const equalsToBtn = document.querySelector(".equalsTo");
const cancelBtn = document.querySelector(".cancel");
const displayDiv = document.querySelector(".display");

//-----------------------------------------------------//
    displayDiv.style.display = "flex";
    displayDiv.style.flexWrap = "wrap";
    displayDiv.style.fontSize = "50px";
    displayDiv.style.justifyContent = "flex-End";
    displayDiv.style.alignItems = "center"; 
    displayDiv.style.padding = "2px";

//-----------------------------------------------------//

numberBtn.forEach(button => button.addEventListener('click',handleNumber));
operationBtn.forEach(button => button.addEventListener('click', handleOperation));
equalsToBtn.addEventListener('click', handleEqualsTo);
cancelBtn.addEventListener('click', handleCancel);

let operands = [];
let operations = [];

function handleNumber(){
    const number = this.textContent;
    displayDiv.textContent+=number;
}

function handleOperation(){
    const operation = this.textContent;
    operands.push(Number(displayDiv.textContent));
    operations.push(operation);
    displayDiv.textContent = '';
/*  =>  Error if {displayDiv.textContent = '';} is changed to 
                {displayDiv.textContent+=operation;}
    =>  when an operation button is clicked the display does not show previous operand
*/ 
}
function handleEqualsTo(){
    operands.push(Number(displayDiv.textContent));
    let result = operands[0];
    for(let i=0;i<operations.length;i++){
        const operation  = operations[i];
        const nextOperand = operands[i+1];

        if(operation === "+"){
            result+=nextOperand;
        }
        if(operation === "-"){
            result-=nextOperand;
        }
        if(operation === "*"){
            result*=nextOperand;
        }
        if(operation === "/"){
            result/=nextOperand;
        }
    }
    if (Number.isFinite(result)) {
        result = result.toFixed(2);
    }
    displayDiv.textContent = result;
    operands =[];
    operations = [];
}
function handleCancel(){
    displayDiv.textContent = "";
}






