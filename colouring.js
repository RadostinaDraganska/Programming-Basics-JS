function colouring(input) {
    let nailon=Number(input[0]);
    let paint=Number(input[1]);
    let thinner=Number(input[2]);
    let hoursForWork=Number(input[3]);

    let priceForNailon=nailon * 1.50;
    let priceForPaint=paint * 14.50;
    let priceForThinner=thinner * 5;
    priceForPaint=priceForPaint+priceForPaint*0.1;
    priceForNailon=priceForNailon+2*1.50;

    let sum= priceForNailon + priceForPaint + priceForThinner + 0.40;
    let newSum= sum + (0.30*sum)*hoursForWork;

    console.log(newSum);


}
colouring(["10 ",

"11 ",

"4 ",

"8 "]);