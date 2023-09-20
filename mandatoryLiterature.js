function mandatoryLiterature(input) {
    let allPagesNum=Number(input[0]);
    let pagesForHour=Number(input[1]);
    let daysNeeded=Number(input[2]);
    let timeWhileReading=allPagesNum/pagesForHour;
    let hoursReading=timeWhileReading/daysNeeded;
    console.log(hoursReading)


}
mandatoryLiterature(["432 ",

"15 ",

"4 "]);