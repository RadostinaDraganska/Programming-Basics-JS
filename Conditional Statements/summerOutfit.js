
// Напишете функция, която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече.
// Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата.

// Функцията получава два аргумента:

// · Градусите - цяло число в интервала [10…42]

// · Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"
//10 <= градуси <= 18     Outfit = Sweatshirt Shoes =  Outfit = Shirt Shoes = Moccasins Outfit = Shirt Shoes = Moccasins
//18 < градуси <= 24      Outfit = Shirt Shoes = Moccasins Outfit = T-Shirt Shoes = Sandals Outfit = Shirt Shoes = Moccasins
//градуси >= 25           Outfit = T-Shirt Shoes = Sandals Outfit = Swim Suit Shoes = Barefoot Outfit = Shirt Shoes = Moccasins

function summerOutfit(input){
    let degrees=Number(input[0]);
    let timeOfTheDay=input[1];
    let outfit='';
    let shoes='';

    if(timeOfTheDay==="Morning"){
        else if(10 <= degrees <=18){
           outfit='Sweatshirt';
           shoes='Sneakers';
        }
        
        if(18 < degrees <= 24){
            outfit = 'Shirt';
            shoes = 'Moccasins';
            
        }
        else{
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }

    }else if(timeOfTheDay==="Afternoon"){
        if(10 <=degrees <=18){
            outfit='Shirt';
            shoes = 'Moccasins';
        }
        if(18<degrees<=24){
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
        else{
            outfit ='Swim' + 'Suit';
            shoes = 'Barefoot';
        }

    }else if(timeOfTheDay==="Evning"){
        if(10 <=degrees <=18){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
        if(18<degrees<=24){
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
        else{
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}
summerOutfit(["22",

"Afternoon"]);
