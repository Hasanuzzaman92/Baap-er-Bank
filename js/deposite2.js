document.getElementById('deposit-btn').addEventListener('click', function (){
    const depositeField = document.getElementById('deposit-field');
    const newDepositeAmount = parseFloat(depositeField.value);

    depositeField.value = '';
    
    const depositTotalElement = document.getElementById('deposit-total');
    const DepositTotal = parseFloat(depositTotalElement.innerText);

    const prevDepositTotal = DepositTotal + newDepositeAmount;
    depositTotalElement.innerHTML = prevDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    const updatedBalanceTotal = balanceTotal + newDepositeAmount;

    balanceTotalElement.innerText = updatedBalanceTotal;
})