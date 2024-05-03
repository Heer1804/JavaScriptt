const account = {
    username: 'user',
    pin: '1234',
    balance: 1000 
};

function login() {
    const username = document.getElementById('username').value;
    const pin = document.getElementById('pin').value;

    if (username === account.username && pin === account.pin) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        alert('Invalid username or PIN');
    }
}

// Function to check balance
function checkBalance() {
    const message = `Your current balance is: $${account.balance.toFixed(2)}`;
    displayResult(message);
}

// Function to deposit money
function deposit() {
    const amount = prompt('Enter the amount to deposit:');
    const depositAmount = parseFloat(amount);

    if (!isNaN(depositAmount) && depositAmount > 0) {
        account.balance += depositAmount;
        displayResult(`You have deposited $${depositAmount.toFixed(2)}. Your new balance is $${account.balance.toFixed(2)}`);
    } else {
        alert('Invalid deposit amount');
    }
}

// Function to withdraw money
function withdraw() {
    const amount = prompt('Enter the amount to withdraw:');
    const withdrawAmount = parseFloat(amount);

    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount > account.balance) {
            alert('Insufficient balance');
        } else {
            account.balance -= withdrawAmount;
            displayResult(`You have withdrawn $${withdrawAmount.toFixed(2)}. Your new balance is $${account.balance.toFixed(2)}`);
        }
    } else {
        alert('Invalid withdrawal amount');
    }
}

// Function to display a message and a "back" button
function displayResult(message) {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('message').innerText = message;
}

// Function to go back to the main menu
function backToMenu() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

// Function to exit the ATM
function exit() {
    alert('Thank you for using the ATM. Goodbye!');
    document.getElementById('login').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('pin').value = '';
}
