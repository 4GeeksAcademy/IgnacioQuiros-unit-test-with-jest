let fromEuroToDollar = function (valueInEuro){
    let euroValue = valueInEuro * 1.07;
    return euroValue;
}
let fromDollarToYen = function (valueInDollar){
    let euroValue = valueInDollar * 156.5;
    return euroValue;
}
let fromYenToPound = function (valueInYen){
    let euroValue = valueInYen * 0.87;
    return euroValue;
}

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};