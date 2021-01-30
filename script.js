// login button event handler

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-section");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// diposit button event handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber("depositAmount")

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

    //widthraw button event handler start vedio from 7m 25s
    const widthrawBtn = document.getElementById("addWithdraw");
    widthrawBtn.addEventListener('click', function () {
        const widthrawNumber = getInputNumber("withdrawAmount");
        console.log(widthrawNumber);
    })

    function getInputNumber(id) {
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }

    
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}