

const loanCalculator = ()=>{
    loanAmount = document.getElementById('loan-amount').value;
    intrestRate = document.getElementById('intrest-rate').value;
    monthpayValue = document.getElementById('monthly-pay').value;
    
    // console.log(loanAmount);
    intrestRate = (loanAmount * (intrestRate * 0.01)) / monthpayValue;
    monthlyPayment = (loanAmount / monthpayValue + intrestRate).toFixed(2);

    document.querySelector('.payment').innerHTML = ` Monthly Payment: ${monthlyPayment}`;


}






loanCalculator();

