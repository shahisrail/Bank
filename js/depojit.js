    //  step-1: add event listener to the deposit button
    document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2 get the dep\      osit amount from the deposit field
    // for input field use .value to the the value inside the input field
    const depositField = document.getElementById('Deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   
    // step-3: get the current deposit total
    // for non-input(element other than input, textarea)use innertext to get the text 
    const depositTotalElement = document.getElementById('Deposit-total');
    const previousDepositTotalSting = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalSting);
    //   step-4:  add numbers to set the total deposit


    const currentDepositTotal = previousDepositTotal+ newDepositAmount;
      // set the deposit total   
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalSting = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat( previousBalanceTotalSting);  
    // step-6 calculate current balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
   
    balanceTotalElement.innerText = currentBalanceTotal;


    // step-7: clear the deposit field
    depositField.value = '';
   
})