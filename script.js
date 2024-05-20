const prompt = require('prompt-sync')();
//new method
const deposit=()=>{
    console.log('welcome');
    const amount = prompt('enter deposit amount');
    return amount;
    }

    console.log (deposit());



//1) add a loop in deposit function to allow multiple deposits instead of just one
//2) add a condition to chech input is number or not else show error message
