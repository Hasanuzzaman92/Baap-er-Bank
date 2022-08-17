document.getElementById('withdraw-btn').addEventListener('click', function (){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalElement.innerText);

    const prevWithdrawTotal = withdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = prevWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    const updatedBalanceTotal = balanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = updatedBalanceTotal;

})