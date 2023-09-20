function aquarium(input) {
    let lenght=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let percent=Number(input[3])/100;

    let capacity=(lenght * width * height)/1000;
    let newcapacity=capacity-capacity*percent;

    console.log(newcapacity);

}
aquarium(["85 ",

"75 ",

"47 ",

"17 "]);