let balance = 1000;
let pin = 123;
function showBalanceSection() {
    if (pin === 123) {
        document.getElementById('demo').innerHTML = 'Your balance is: Rs' + balance;
    }   
    else{
        document.getElementById('demo').innerHTML = 'Invalid pin';
    }
}

function showWithdrawSection() {
    let amount = Number(prompt('Enter the amount to withdraw:'));
    let userPin = prompt('Enter your pin:');
    if (userPin == pin) {
    if (amount > balance) {
        document.getElementById('demo').innerHTML = 'Insufficient balance';
    }
    else if (amount % 100 == 0){
        balance = balance - amount;
        document.getElementById('demo').innerHTML = 'Withdrawal successful. Your new balance is: Rs' + balance;
    }
    else {
        document.getElementById('demo').innerHTML = 'Invalid amount. Please enter a multiple of 100.';
    }
}
else {
    document.getElementById('demo').innerHTML = 'Invalid pin';
}
}

function showDepositSection() {
    let amount = Number(prompt('Enter the amount to deposit:'));
    let userPin = prompt('Enter your pin:');
    if (userPin == pin) {
        if (amount % 100 == 0) {
            balance = balance + amount;
            document.getElementById('demo').innerHTML = 'Deposit successful. Your new balance is: Rs' + balance;
        } else {
            document.getElementById('demo').innerHTML = 'Invalid amount. Please enter a multiple of 100.';
        }
    } else {
        document.getElementById('demo').innerHTML = 'Invalid pin';
    }
}