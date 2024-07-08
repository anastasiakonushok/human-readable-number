module.exports = function toReadable(number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return units[0];

    let readable = '';

    if (number >= 100) {
        let hundreds = Math.floor(number / 100);
        readable += units[hundreds] + ' hundred';
        number %= 100;
        if (number > 0) {
            readable += ' ';
        }
    }

    if (number >= 20) {
        let ten = Math.floor(number / 10);
        readable += tens[ten];
        number %= 10;
        if (number > 0) {
            readable += ' ';
        }
    }

    if (number >= 10 && number < 20) {
        readable += teens[number - 10];
    } else if (number > 0 && number < 10) {
        readable += units[number];
    }

    return readable.trim();
}
