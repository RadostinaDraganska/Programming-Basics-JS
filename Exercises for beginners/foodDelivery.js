function foodDelivery(input) {
let chickenMenus=Number(input[0]);
let fishMenus=Number(input[1]);
let vegetarianMenus=Number(input[2]);

let chickenMenusPrice=chickenMenus * 10.35;
let fishMenusPrice=fishMenus * 12.40;
let vegetarianMenusPrice=vegetarianMenus * 8.15;

let all=chickenMenusPrice + fishMenusPrice + vegetarianMenusPrice;
let desert=0.2*all;
let delivery=2.50;

let sum=all + desert + delivery;
console.log(sum);
}
foodDelivery(["9 ",

"2 ",

"6 "]);