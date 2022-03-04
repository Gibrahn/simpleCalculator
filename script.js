
function calculatingTotal(price, quantity){
    let subtotal= price * quantity;
    return subtotal;
}
function calculatingTaxes(subtotalParam){
    let taxes = subtotalParam *0.16;
    total = taxes + subtotalParam;
    return total;
    
}

//use fucntion
let laptop=calculatingTotal(1000,3);
let speakers=calculatingTotal(200,2);


console.log(calculatingTaxes(laptop));
console.log(calculatingTaxes(speakers));

