// Массивы. Задачи
// 1. Решить задание из 11-й задачи лекции №7 "Массивы" с использованием filter() (вместо цикла)
const products = [
					{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
					{title: 'prod3', price: 15}, {title: 'prod4', price: 25}, 
					{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
					{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
				 ];
/**
 * filterCollection - функция выбирает из массива продукцию,
 * цена которую попадает в диапазон между minPrice и maxPrice
 * @param {array} array - массив товаров 
 * @param {number} minPrice - нижний предел цены на товары
 * @param {number} maxPrice - верхний предел цены на товары
 * @returns {void}
 */
function filterCollection(array, minPrice, maxPrice) {
	return array.filter(value => value.price >= minPrice && value.price <= maxPrice).sort((prev, next) => prev.price - next.price);	
};

// 2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//    каждый элемент которого будет хранить информацию о числе и его
//    четности:
//    [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
/**
 * checkOdd - функция определяет четность и нечетность значений элементов массива
 * @param {array} array - массив чисел 
 * @returns {void}
 */
function checkOdd(array) {
	return array.map(element => ({digit: element, odd: !!(element % 2)}));
}

// 3. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы,
//    равные нулю. Если да - вернуть false
/**
 * isNotMatterEqualZero - функция определяет содержит ли массив элементы
 * со значением равным нулю
 * @param {array} array - массив чисел 
 * @returns {void}
 */
function isNotMatterEqualZero(array) {
	return array.every(element => element !== 0);
}

// 4. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what']
//    хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
/**
 * isThereMoreThan3LettersWord - функция определяет содержит ли массив элементы
 * со значением длина которого больше 3 символов
 * @param {array} array - массив строк 
 * @returns {void}
 */
function isThereMoreThan3LettersWord(array) {
	return array.some(element => element.length > 3);
}

// Массивы. Задачи: опционально
// 5. Дан массив объектов, где каждый объект содержит информацию о
//    букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
//    [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
//     {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//     {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
//    Напишите функцию, которая из элементов массива соберет и вернёт
//    строку, основываясь на index каждой буквы. Например:
//    [{char:"i",index: 1}, {char:"H",index:0}, {char:"!",index:2}] → “Hi!”
//    Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения строки
//    Как можно решить эту же задачу, не используя сортировку и reduce()?
/**
 * stringFromArray - функция служит для того, чтобы из элементов массива, где каждый обьект содержит информацию
 * о букве и месте ее положения в строке, собирать и вернуть строку, основываясь на index каждой буквы
 * @param {array} array - массив обьектов 
 * @returns {void}
 */
const array = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
               {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
               {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

function stringFromArray(array) {
	return array.concat().sort((prev, next) => prev.index - next.index).reduce((prev, item) => prev + item.char, '');
}

/**
 * stringFromArrayV2 - функция служит для того, чтобы из элементов массива, где каждый обьект содержит информацию
 * о букве и месте ее положения в строке, собирать и вернуть строку, основываясь на index каждой буквы
 * @param {array} array - массив обьектов 
 * @returns {void}
 */
function stringFromArrayV2(array) {
	let res = [];
	res.length = array.length;
	array.forEach((element) => res.splice(element.index, 1, element.char));
	return res.join('');
}

/**
 * stringFromArrayV3 - функция служит для того, чтобы из элементов массива, где каждый обьект содержит информацию
 * о букве и месте ее положения в строке, собирать и вернуть строку, основываясь на index каждой буквы
 * @param {array} array - массив обьектов 
 * @returns {void}
 */
function stringFromArrayV3(array) {
	let res = " ".repeat(array.length);
	for (item of array) {
		res = replaceAt(res, item.index, item.char);
	}
	return res;
}

/**
 * replaceAt - функция для замены в строке символа на определенной позиции
 * @param {string} string - изначальная строка
 * @param {number} index - позиция заменяемого символа
 * @param {symbol} replace - символ на который необходимо произвести замену
 * @returns {string}
 */
function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}