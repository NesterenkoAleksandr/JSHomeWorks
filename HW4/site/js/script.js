// Функция. Задачи
// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: 
// multiply(1, 2, 3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() = 0
function multiply() {
	if (!arguments.length) return 0;
	let res = 1;
	for (let i = 0; i < arguments.length; i++) {
		res *= arguments[i];
	}
	return res;
}
// console.log(multiply(1, 2, 3));
// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) = “tset”.
function reverseString(string) {
	let res = "";
	for (let i = string.length; i--; ) {
		res += string[i];
	}
	return res;
}
// console.log(reverseString('test'));

// 4. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
//    где каждый символ разделен пробелом и заменен на юникод-значение символа:
//    getCodeStringFromText(‘hello’) = “104 101 108 108 111”
//    подсказка: для получения кода используйте специальный метод
function unicodeString(string) {
	let res = "";
	for (let i = 0, max = string.length; i < max; i++) {
		res += string.charCodeAt(i) + (i < string.length - 1 ? " " : "");
	}
	return res;
}

// Решение задачи методами массива (использование метода forEach в большинстве случаев не оптимальный)
function unicodeStringForEach(string) {
	let res = [];
	string.split("").forEach((item) => res.push(item.charCodeAt()));
	return res.join(" ");
}

console.log(unicodeStringForEach("hello"));

// Массивы. Задачи на методы
// 1. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива: 
//    doubleArray([1,2,3]) = [1,2,3,1,2,3]
function doubleArray(array) {
	let res = array.slice();
	for (item of array) {
		res.push(item);
	}
	return res;
}

// Решение задачи с помощью метода массива - concat().
function doubleArrayConcat(array) {
	return array.concat(array);
}

// 2. Получить последний элемент массива (массив не менять). Использовать функцию
function getLastItemOfArray(array) {
	return array[array.length - 1];
}

// 3. Создать функцию, которая принимает число N и возвращает массив, заполненный числами от 1 до N: getArray(10); 
// [1,2,3,4,5,6,7,8,9,10]
function getArray(n) {
	let array = [];
	for (let i = 1; i <= n; i++) {
		array.push(i);
	}
	return array;
}

// 4. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, 
//    а возвращает массив из оставшихся значений: 
//    	changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
function changeCollection() {
	let res = [];
	for (let i = 0, max = arguments.length; i < max; i++) {
		arguments[i].shift();
		res.push(arguments[i]);
	}
	return res;
}

