//to display num in input box

function displayNum(num){
    result.value+=num;
    console.log(num);
}

//clear text box
function clearBox(){
    result.value='';
}

//evaluate expression
function evaluateExpression(){
    // exp=result.value;
    // out=eval(exp);
    // result.value=output;
    result.value=eval(result.value);
}

//remove last item
function removeLast(){
    currentExp=result.value;
    result.value=currentExp.slice(0,-1);
}
