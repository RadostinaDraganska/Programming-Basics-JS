/*съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди.
 Когато се изчислява колко пъти Иванчо ще се забави,
  в резултат на съпротивлението на водата, резултатът трябва да се закръгли надолу до най-близкото цяло число.

Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд.*/

function swimmingWorldRecord(input) {
    let recordInSeconds=Number(input[0]);
    let distanceInMetres=Number(input[1]);
    let timeInSecondsFor1Metre=Number(input[2]);
    let time=timeInSecondsFor1Metre * distanceInMetres;

    

    if(time<recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    }else if(time>=recordInSeconds){
        let secodsNeeded=time-recordInSeconds;
        console.log(`No, he failed! He was ${secodsNeeded.toFixed(2)} seconds slower.`);
    }




}
swimmingWorldRecord(["10464",

"1500",

"20"]);