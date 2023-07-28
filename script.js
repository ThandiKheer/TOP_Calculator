/*const btnEqualsTo = document.querySelector(".equalsTo");
const btnDivide= document.querySelector(".divide");
const btnZero = document.querySelector(".zero");
const btnCancel = document.querySelector(".cancel");

const btnPlus = document.querySelector(".plus");
const btnThree = document.querySelector(".three");
const btnTwo = document.querySelector(".two");
const btnOne = document.querySelector(".one");

const btnMinus = document.querySelector(".minus");
const btnSix = document.querySelector(".six");
const btnFive = document.querySelector(".five");
const btnFour = document.querySelector(".four");

const btnMultiply = document.querySelector(".multiply");
const btnNine = document.querySelector(".nine");
const btnEight = document.querySelector(".eight");
const btnSeven = document.querySelector(".seven");

const displayDiv = document.querySelector(".display");

//-----------------NUMBER-----------------------------------
btnZero.addEventListener('click', display);
btnOne.addEventListener('click', display);
btnTwo.addEventListener('click', display);
btnThree.addEventListener('click', display);
btnFour.addEventListener('click', display);
btnFive.addEventListener('click', display);
btnSix.addEventListener('click', display);
btnSeven.addEventListener('click', display);
btnEight.addEventListener('click', display);
btnNine.addEventListener('click', display);


//------------------OPERATORS---------------------------------
btnPlus.addEventListener('click', display);
btnMinus.addEventListener('click', display);
btnMultiply.addEventListener('click', display);
btnDivide.addEventListener('click', display);
btnEqualsTo.addEventListener('click', display);
btnCancel.addEventListener('click', display);







//----------------------------------------------------------------
let operand1 = 0;
let operand2 = 0;
let operation = "";
function display(){
   
    
    if(this.classList.contains("one")){
        operand1 = 1;
        displayDiv.textContent = "1";
    }
    if(this.classList.contains("two")){
        operand2 = 2;
        displayDiv.textContent = "2";
    }
    if(this.classList.contains("three")){
        operand2 = 3;
        displayDiv.textContent = "3";
    }
    if(this.classList.contains("four")){
        operand2 = 4;
        displayDiv.textContent = "4";
    }
    if(this.classList.contains("five")){
        operand2 = 5;
        displayDiv.textContent = "5";
    }
    if(this.classList.contains("six")){
        operand2 = 6;
        displayDiv.textContent = "6";
    }
    if(this.classList.contains("seven")){
        operand2 = 7;
        displayDiv.textContent = "7";
    }
    if(this.classList.contains("eight")){
        operand2 = 8;
        displayDiv.textContent = "8";
    }
    if(this.classList.contains("nine")){
        operand2 = 9;
        displayDiv.textContent = "9";
    }
    if(this.classList.contains("ten")){
        operand2 = 10;
        displayDiv.textContent = "10";
    }
    if(this.classList.contains("zero")){
        console.log("hello");
        operand = "0";
        displayDiv.textContent = "0";
    }
    if(this.classList.contains("equalsTo")){
        const result = finalResult( operand1, operand2, operation );
        displayDiv.textContent = `${result}`;
    }
}

function finalResult(value1 , value2 , operation){
    let result = 0;
    if(operation === "+"){
        result = value1 + value2;
        return result;
    }
}*/
//--------------------------------------------

const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation")
const equalsToBtn = document.querySelector(".equalsTo");
const displayDiv = document.querySelector(".display");

numberBtn.forEach(button => button.addEventListener('click',handleNumber));
//operationBtn.forEach(button => button.addEventListener('click', handleOperation));
//equalsToBtn.addEventListener('click', handleEqualsTo);

function handleNumber(){
    console.log("hello");
    const number = this.textContent;
    
    displayDiv.textContent+=number;
    console.log(number);
}






