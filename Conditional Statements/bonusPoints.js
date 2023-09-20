
function bonusPoints(input) {
    let startingPoints=Number(input[0]);
    let bonus=0;
    let total=0;

    if(startingPoints <= 100){
        bonus=5;
        total=bonus+startingPoints
        
    }
    else if(startingPoints <= 1000){
        bonus=0.2 * startingPoints;
        total=bonus+startingPoints;
       
    }
    else {
        bonus=0.1 * startingPoints;
        total=bonus + startingPoints;
        
    }
    if(startingPoints % 2==0){
        bonus=1+bonus;
        total=bonus + startingPoints;
       
    } 
    else if(startingPoints % 10 == 5 ){
        bonus=bonus + 2;
        total=bonus + startingPoints;
        

    }
    console.log(bonus);
    console.log(total);


}
bonusPoints(["15875"]);