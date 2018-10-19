// Функция. Задачи
// 6. Создать две функции и дать им осмысленные названия:
//    первая функция принимает массив и колбэк
//    вторая функция (колбэк) обрабатывает каждый элемент массива
//    Первая функция возвращает строку “New value: ” и обработанный массив:

//    firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], secondFunc) → “New value: MyNameIsTrinity”
//    firstFunc([10, 20, 30], secondFunc) → “New value: 100, 200, 300,”
//    firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], secondFunc) → 
//    “New value: Jhon is 45, Aaron is 20,” 
//    firstFunc([‘abc’, ‘123’], secondFunc) → “New value: cba, 321,” // строки инвертируются
//    firstFunc([1,2,3], function(number) { return number + 5 + ‘, ’;}); // 'New value: 6, 7, 8,'

//    Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) 
//    и возвращает результат его обработки.

function arrayToString(arr, callback) {
	let res = "New value: ";
	for (let item of arr) {
		 res += callback(item);
	}
	return res.slice(-2) === ", " ? res.slice(0, -1) : res;
}

function toStringWithCapitalLetters(item) {
	return item[0].toUpperCase() + item.slice(1);
}

function toStringWithIncreaseBy10(item) {
	return item * 10 + ", ";
}

function toStringFromObject(item) {
	return item.name + " is " + item.age + ", ";
}

function toStringWithReverse(item) {
	return item.split("").reverse().join("") + ", ";
}

console.log(arrayToString(['my', 'name', 'is', 'Trinity'], toStringWithCapitalLetters));
console.log(arrayToString([10, 20, 30], toStringWithIncreaseBy10));
console.log(arrayToString([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], toStringFromObject));
console.log(arrayToString(['abc', '123'], toStringWithReverse));
console.log(arrayToString([1,2,3], function(number) { return number + 5 + ', ';}));


// Массивы. Задачи
// 1. Дана произвольная строка “bcdaeflmjgkhi” - упорядочить буквы по алфавиту и вернуть строку с буквами 
//    в обратном порядке ("mlkjihgfedcba"). Оформить в виде функции.
function reverseSortedString(string) {
	return string.split("").sort().reverse().join("");
}

// 2. Отсортировать массив [2, 4, 7, 1, -2, 10, -9] в обратном порядке: 
// [10, 7, 4, 2, 1, -2, -9]. Используйте функцию.
let arrDesc = [2, 4, 7, 1, -2, 10, -9].sort((prev, next) => next - prev);
console.log(arrDesc);

// 3. Написать функцию, которая принимает три аргумента: произвольный массив и два числа, первое из которых означает 
//    начальный номер элемента в массиве, второе - конечный номер. Функция должна вернуть новый массив, состоящий из 
//    элементов первой коллекции согласно аргументам (с - по): 
//    getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4) = ["c", "d", "e"]
//    Исходный массив не менять. Циклы не использовать.
function getNewArray(array, start, last) {
	return array.slice(start, last + 1);
}

// 4. Удвоить все элементы массива, не используя циклы
// [‘one’, 2, ‘three’, 4] → [‘one’, 2, ‘three’, 4, ‘one’, 2, ‘three’, 4]
let arrDouble = ['one', 2, 'three', 4];
console.log(arrDouble.concat(arrDouble));

// 5. Удалить из [1,2,3,4,5] второй и третий элементы (3,4)
let charsDel = [1,2,3,4,5];
charsDel.splice(2, 2);

// 6. Удалить из [1,2,3,4,5] второй и третий элементы (3,4) и на их место вставить ‘three’, ‘four’
let charsIns = [1,2,3,4,5];
charsIns.splice(2, 2, "three", "four");

// 7. Вставить в произвольный массив после третьего элемента любое значение, например:  
//    ['I', 'am', 'an', 'array'] → ["I", "am", "an", "awesome", "array"]
let arrIns = ['I', 'am', 'an', 'array'];
arrIns.splice(3, 0, "awesome");

// 8. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы 
//    (размер массива определяется его длиной):  
//    [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
let arrArrays = [[14, 45], [1], ['a', 'c', 'd']];
arrArrays.sort((prev, next) => prev.length - next.length);
console.log(arrArrays);

// 9.	Создать копию произвольного массива (slice, concat)
array = [1,2,3,4,5,6,7];
let arraySlice = array.slice();
let arrayConcat = array.concat();

// 10.	Есть массив объектов:
//		[
//			{cpu: 'intel', info: {cores:2, сache: 3}},
//			{cpu: 'intel', info: {cores:4, сache: 4}},
//			{cpu: 'amd', info: {cores:1, сache: 1}},
//			{cpu: 'intel', info: {cores:3, сache: 2}},
//			{cpu: 'amd', info: {cores:4, сache: 2}}
//		]
//		Отсортировать их по возрастающему количеству ядер (cores).
let arrCPU = [
				{cpu: 'intel', info: {cores:2, сache: 3}},
				{cpu: 'intel', info: {cores:4, сache: 4}},
				{cpu: 'amd', info: {cores:1, сache: 1}},
				{cpu: 'intel', info: {cores:3, сache: 2}},
				{cpu: 'amd', info: {cores:4, сache: 2}}
			 ];
arrCPU.sort((prev, next) => prev.info.cores - next.info.cores || prev.info.сache - next.info.сache);

// 11.	Создать функцию, которая будет принимать массив продуктов и две цены. 
// 		Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и отсортировать от дешевых к дорогим:   
// 		const products = [
// 	  		{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
// 	  		{title: 'prod3', price: 15}, {title: 'prod4', price: 25}, 
// 	  		{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
// 	  		{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// 		];
// 		filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
const products = [
					{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
					{title: 'prod3', price: 15}, {title: 'prod4', price: 25}, 
					{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
					{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
				 ];
function filterCollection(array, minPrice, maxPrice) {
	let res = array.filter(value => value.price >= minPrice && value.price <= maxPrice);

	return res.sort((prev, next) => prev.price - next.price);	
};