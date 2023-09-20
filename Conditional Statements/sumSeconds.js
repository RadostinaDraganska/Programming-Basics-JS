
function sumSeconds(input) {
    let firstCompetitorSeconds=Number(input[0]); 
    let secondCompetitorSeconds=Number(input[1]);
    let thirdCompetitorSeconds=Number(input[2]);

    let totalSeconds=firstCompetitorSeconds + secondCompetitorSeconds + thirdCompetitorSeconds;
    let minutes=Math.floor(totalSeconds / 60);
    let seconds=totalSeconds % 60;

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }else{
        console.log(`${minutes}:${seconds}`);

    }
    

}
sumSeconds(["50", "50", "49"]);