module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    let unitsPlaces = [
        'zero',
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    
    let decimalPlaces = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    
    let decimalNumbers = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    let numbers = "";
    let hundred = Math.floor((number / 100) % 10);
    let tens = Math.floor((number % 100) / 10);
    let units = Math.floor(number % 10);

    if (hundred > 0) {
        numbers += unitsPlaces[hundred] + ' hundred ';
    }

    if (tens > 0) {
        if ((Math.floor(number % 100) > 9) && (Math.floor(number % 100) < 20)) {
            numbers += decimalNumbers[Math.floor((number % 100) % 10)];
        } else {
            numbers += decimalPlaces[tens - 1] + " ";
        }
    }

    if (units > 0) {
        if ((Math.floor(number % 100) > 20) || (Math.floor(number % 100) < 10)) {
            numbers += unitsPlaces[units];
        }
    }
    return numbers.trim();
}
