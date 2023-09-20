function calculatorDeposit(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let godishenLihvenProcent = Number(input[2]) / 100;
    let natrupanaLihva = depositSum*godishenLihvenProcent;
    let lihvaza1mesec=natrupanaLihva/12;
    let sum=depositSum+depositTerm*lihvaza1mesec;
    console.log(sum);
    
}
calculatorDeposit(["200 ", "3 ", "5.7 "]);