// login button event handler

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-section");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// diposit/widthraw button event handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function () {

    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount)

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance");
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentDeposit").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
})