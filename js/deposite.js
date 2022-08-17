document.getElementById('deposit-btn').addEventListener('click', function (){
    const newDepositeAmount = getInputValueById('deposit-field');
    const prevDepositTotal = getElementValueById('deposit-total');
    const updatedDepositTotal = prevDepositTotal + newDepositeAmount;
    setElementValue('deposit-total', updatedDepositTotal);
    const prevBalanceTotal = getElementValueById('balance-total');
    const updatedBalanceTotal = prevBalanceTotal + newDepositeAmount;
    setElementValue('balance-total', updatedBalanceTotal);

})