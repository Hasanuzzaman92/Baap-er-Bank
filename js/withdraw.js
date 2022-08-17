document.getElementById('withdraw-btn').addEventListener('click', function (){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const withdrawTotal = getElementValueById('withdraw-total');
    const updatedWithdrawTotal = withdrawTotal + newWithdrawAmount;
    setElementValue('withdraw-total', updatedWithdrawTotal);
    const balanceTotal = getElementValueById('balance-total');
    updatedBalanceTotal = balanceTotal - newWithdrawAmount;
    setElementValue('balance-total', updatedBalanceTotal);
})