function petShop(input) {
    let dogFood=Number(input[0]);
    let catFood=Number(input[1]);
    let priceForDogsFood=2.50*dogFood;
    let priceForCatsFood=4*catFood;
    let sum=priceForCatsFood+priceForDogsFood;
    console.log(`${sum} lv.`);

}
petShop(["13", "9"]);