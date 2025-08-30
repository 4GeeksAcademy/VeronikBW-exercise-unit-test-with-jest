const sum = (a,b) => {
    return a + b
}

console.log(sum(3,7))
module.exports = {sum};

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

//fromDollarToYen
//1 dollar = 0.93 euros

const fromDollarToYen = function(valueinDollar) {
    let valueInEuro = valueinDollar * 0.93;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen
}

module.exports = {sum, fromDollarToYen} 

//fromYenToPound