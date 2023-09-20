
function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;

    if(type=="Premiere"){
        price=12.00*(columns*rows);
    }
    else if(type=="Normal"){
        price=7.50*(rows*columns);
    }
    else if(type=="Discount"){
        price=5.00*(rows*columns);
    }
    console.log(`${price.toFixed(2)} leva`);


}
cinema(["Premiere",

"10",

"12"]);