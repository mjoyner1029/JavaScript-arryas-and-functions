// JavaScript Banking System

// Initial balance
let balance = 0;

// Function to handle deposits
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited $${amount}. New balance: $${balance}`);
        updateBalanceDisplay();
    } else {
        console.log("Deposit amount must be positive.");
    }
}

// Function to handle withdrawals
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${balance}`);
            updateBalanceDisplay();
        } else {
            console.log("Insufficient funds.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

// Function to check the current balance
function checkBalance() {
    console.log(`Current balance: $${balance}`);
    updateBalanceDisplay();
}

// Function to update the balance display on the page
function updateBalanceDisplay() {
    const balanceAmount = document.getElementById('balance-amount');
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

// Event listeners for buttons
document.getElementById('deposit-button').addEventListener('click', () => {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    deposit(depositAmount);
});

document.getElementById('withdraw-button').addEventListener('click', () => {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    withdraw(withdrawAmount);
});

document.getElementById('check-balance-button').addEventListener('click', () => {
    checkBalance();
});

// Initialize the balance display on page load
updateBalanceDisplay();
