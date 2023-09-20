

function godzillaVsKong(input) {
    let filmBudget=Number(input[0]);
    let statistNum=Number(input[1]);
    let statistOutfitPrice=Number(input[2]);
    let decor=0.1 * filmBudget;

    if(statistNum > 150){
        statistOutfitPrice=statistOutfitPrice-0.1 * statistOutfitPrice;
    }
    let sum=statistOutfitPrice * statistNum + decor;

    if (sum>filmBudget){
        let moneyNeeded=sum - filmBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }else if(sum<=filmBudget){
        let moneyLeft=filmBudget-sum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }



}
godzillaVsKong(["9587.88",

"222",

"55.68"]);