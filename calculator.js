function calculation(){
    console.log("Calculating...");

    //get values from  the prompt and store them in two varibles
    let number1 = Number(prompt("Enter value 1: "));
    //do the operations and store rhe results in vars(you need four vars)
    let sum = number1 + 10;

    //display in html
    document.getElementById("results").innerHTML=
    
    `<p> The sum is:${sum}</p>`;
}

