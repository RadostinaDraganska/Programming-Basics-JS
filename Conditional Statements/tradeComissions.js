// Напишете функция, която получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на 
// търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка.
//  При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error".
// percent*salesCount=Comissions
//0 ≤ s ≤ 500       500 < s ≤ 1 000      1 000 < s ≤ 10 000      s > 10 000
//4.5% 7.5% 10% 13%

function tradeComissions(input) {
    let city = input[0];
    let salesCount = Number(input[1]);
    let comission = 0;
    switch (city) {
        case "Sofia":
            if (salesCount < 0) {
                console.log("error");
            } else if (salesCount >= 0 && salesCount <= 500) {
                comission = 0.05 * salesCount;
            } else if (salesCount > 500 && salesCount <= 1000) {
                comission = 0.07 * salesCount;
            } else if (salesCount > 1000 && salesCount <= 10000) {
                comission = 0.08 * salesCount;
            } else {
                comission = 0.12 * salesCount;
            }

            break;

        case "Varna":
            if (salesCount < 0) {
                console.log("error");
            } else if (salesCount >= 0 && salesCount <= 500) {
                comission = 0.045 * salesCount;
            } else if (salesCount > 500 && salesCount <= 1000) {
                comission = 0.075 * salesCount;
            } else if (salesCount > 1000 && salesCount <= 10000) {
                comission = 0.10 * salesCount;
            } else {
                comission = 0.13 * salesCount;
            }

            break;

        case "Plovdiv":
            if (salesCount < 0) {
                console.log("error");
            } else if (salesCount >= 0 && salesCount <= 500) {
                comission = 0.055 * salesCount;
            } else if (salesCount > 500 && salesCount <= 1000) {
                comission = 0.08 * salesCount;
            } else if (salesCount > 1000 && salesCount <= 10000) {
                comission = 0.12 * salesCount;
            } else {
                comission = 0.145 * salesCount;
            }
            break;
        default:
            console.log("error");

    } if (comission) {
        console.log(comission.toFixed(2));
    }


}


tradeComissions(["Kaspichan", "-50"])