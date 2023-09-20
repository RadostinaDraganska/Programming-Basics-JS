function toyShop(input) {
    let tripPrice=Number(input[0]);
    let puzzels=Number(input[1]);
    let dolls=Number(input[2]);
    let teddybears=Number(input[3]);
    let minions=Number(input[4]);
    let trucks=Number(input[5]);
    let sum=0;

    let puzzelsPrice=puzzels * 2.60;
    let dollsPrice=dolls * 3;
    let teddybearsPrice=teddybears * 4.10;
    let minionsPrice=minions * 8.20;
    let trucksPrice=trucks * 2;

     sum=puzzelsPrice + dollsPrice + teddybearsPrice + minionsPrice + trucksPrice;
    let numberToys=puzzels + dolls + teddybears +minions +trucks;
    

    if (numberToys >= 50){
        let discount=0.25 * sum;
        sum=sum-discount;

    }
    sum=sum- 0.1*sum;
    if(sum>=tripPrice){
        let moneyLeft=sum-tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else if(sum<tripPrice){
        let moneyNeeded=tripPrice-sum;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }


}
toyShop(["320", "8", "2", "5", "5", "1"]);