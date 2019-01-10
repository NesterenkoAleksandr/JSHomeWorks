/**
 * Факториал числа
 * @param {number} n - число
 * @returns {number} - факториал
 */
function factorial(n) {
    return !n ? 1 : n * factorial(n - 1);
}
/**
 * Произведение чисел
 * @param {object} args - аргументы
 * @returns {number}
 */
function multiply(...args) {
    return !args.length ? 0 : args.reduce((res, val) => res *= val, 1);
}
/**
 * Строка-перевертыш
 * @param {string} str - изначальная строка
 * @returns {string} - строка-перевертыш
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}
