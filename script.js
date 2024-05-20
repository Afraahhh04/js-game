const prompt = require('prompt-sync')();
//new method
const deposit=()=>{
    console.log('welcome');
    let totalAmount = 0;
    let keepGoing = true;

    while (keepGoing) {
    const amount = prompt('enter deposit amount :');

// checking if input is number
if (isNaN(amount) || amount.trim() === ''){
    console.log('error:please enter a valid number');
    continue;
}
totalAmount += Number(amount);
console.log(`Current total deposit amount: $${totalAmount}`); //shows the current total amount

const continueDeposit = prompt('do you want to deposit more? (yes/no):')
if ( continueDeposit !=='yes') {
    keepGoing = false;
}
    }
    return totalAmount;
}
    console.log(`Final deposit amount: $${deposit()}`);



//1) add a loop in deposit function to allow multiple deposits instead of just one
//2) add a condition to chech input is number or not else show error message
