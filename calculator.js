function calculation(){
    console.log("Calculating...");

    //get values from  the prompt and store them in two varibles
    let number1 = Number(prompt("Enter value 1: "));
    let number2 = Number(prompt("Enter value 2: "));
    //do the operations and store rhe results in vars(you need four vars)
    let sum = number1 + number2;
    let sub = number1 - number2;
    let multi = number1 * number2;
    let div = number1 / number2;
    //display in html
    document.getElementById("add").innerHTML=`<p> The sum is:${sum}</p>`;
    document.getElementById("sub").innerHTML=`<p> The substraction is:${sub}</p>`;
    document.getElementById("multi").innerHTML=`<p> The multiplication is:${multi}</p>`;
    document.getElementById("div").innerHTML=`<p> The division is:${div}</p>`;
}

