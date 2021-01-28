const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-section");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})