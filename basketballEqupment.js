function basketballEqupment(input) {
    let yearlytacs=Number(input[0]);

    let sneakersPrice=yearlytacs-yearlytacs*0.4;
    let equpmentPrice=sneakersPrice-sneakersPrice*0.2;
    let basketballPrice=equpmentPrice*0.25;
    let accessoriesPrice=basketballPrice * 0.2;
    
    let sum=sneakersPrice + equpmentPrice + basketballPrice +accessoriesPrice + yearlytacs;
    console.log(sum);


}
basketballEqupment(["365 "]);