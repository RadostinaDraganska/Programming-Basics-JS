function schoolSupplies(input) {
    let penNum=Number(input[0]);
    let markersNum=Number(input[1]);
    let litresCleaner=Number(input[2]);
    let percentDiscount=Number(input[3]);

    let priceForPens=penNum * 5.80;
    let priceForMarkers=markersNum * 7.20;
    let priceForlitresCleaner= litresCleaner * 1.20;
    let sum=priceForMarkers + priceForPens + priceForlitresCleaner;
    let discount=(percentDiscount * sum)/100;
    let finalSum=sum-discount;

    console.log(finalSum);



}
schoolSupplies(["4 ",

"2 ",

"5 ",

"13 "]);