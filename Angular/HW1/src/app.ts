/**
 * Факториал числа 
 * @param {number} n - число
 * @returns {number} - факториал
 */
function factorial (n: number): number {
    return !n ? 1 : n * factorial(n - 1);
}

/**
 * Произведение чисел
 * @param {object} args - аргументы
 * @returns {number}
 */
function multiply(...args: number[]): number {
    return !args.length ? 0 : args.reduce((res: number, val: number) => res *= val, 1);
}

/**
 * Строка-перевертыш
 * @param {string} str - изначальная строка
 * @returns {string} - строка-перевертыш
 */
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

/**
 * Интерфейс для классов, которые представляют пользователя Администратор.
 * 
 * @interface
 */
interface AminInterface {
    name: string;
    email: string;
    password: string;
    type?: string;
}