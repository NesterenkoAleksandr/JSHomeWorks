// Замыкание. Задачи
// 3. Создайте функцию которая бы умела делать: 
//		minus(10)(6); // 4 
//		minus(5)(6);  // -1 
//		minus(10)();  // 10 
//		minus()(6);   // 6 
//		minus()();    // 0
/**
 * minus - функция определяет разницу между переданными значениями своего аргумента и вложенной функции
 * @param {number} value - аргумент основной функции
 * @param {number} val - аргумент вложенной функции
 * @returns {number} - возвращает разницу между значениями аргументов
 */
const minus = function(value) {
	return function(val) {
		return (typeof value === "number" ? value : 0) - (typeof val === "number" ? val : 0);
	};
};

// 4. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:  
//		function MultiplyMaker …  
//      const multiply = MultiplyMaker(2);  
//		multiply(2);  // 4 (2 * 2) 
//		multiply(1);  // 4 (4 * 1) 
//		multiply(3);  // 12 (4 * 3) 
//		multiply(10); // 120 (12 * 10)
/**
 * multiplyMaker - функция определяет результат умножения предыдущего и текущего переданного значения параметра "value"
 * @param {number} value - число, которое необходимо умножить на предыдущее значение этого параметра
 * @returns {number} - возвращает результат умножения предыдущего и текущего значения параметра "value"
 */
function multiplyMaker(value) {
	value = typeof value === "number" ? value : 1;
	return function(val) {
		return value *= (typeof val === "number" ? val : 1);
	};
} 

// Экземпляр функции MultiplyMaker
const multiply = multiplyMaker(2);

// 5. Реализовать модуль, который работает со строкой и имеет методы:
//    a. установить строку
//    	 	i. если передано пустое значение, то установить пустую строку
// 			ii. если передано число, число привести к строке
// 	  b. получить строку
//    c. получить длину строки
//    d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’); 
// модуль.получитьСтроку(); // ‘abcde’ 
// модуль.получитьДлину(); // 5
const mdlStr = (function() {
	// Закрытые члены
	// Закрытое поле, в котором хранится текущее значение строки
	let value;

	/**
	 * setString - метод устанавливает текущее значение строки
	 * @param {string} val - значение, которое необходимо присвоить "value"
	 * @returns {object} - возвращает текущий котекст
	 */
	function setString(val) {
		value = String(val || '');
		return this;
	}

	/**
	 * getString - метод возвращает текущее значение строки
	 * @returns {string} - возвращает текущее значение поля "value"
	 */
	function getString() {
		return value;
	}

	/**
	 * getLength - метод определяет длину текущего значения строки
	 * @returns {number} - возвращает длину текущего значения поля "value"
	 */
	function getLength() {
		return value.length;
	}

	/**
	 * getReverse - метод возвращает текущее значение строки в обратном порядке
	 * @returns {string} - возвращает текущее значение поля "value" в обратном порядке
	 */
	function getReverse() {
		return value.split('').reverse().join('');
	}

	return {
		// Открытие доступа к определенным методам.
		setString,
		getString,
		getLength,
		getReverse
	}
}());

// 6. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить 
//    в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в 
//    обычной переменной, не в this) 
//    модуль.установитьЗначение(10); // значение = 10 
//    модуль.прибавить(5); // значение += 5 
//    модуль.умножить(2); // значение *= 2 
//    модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить) 

//    Также можно вызывать методы цепочкой: 
//    модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
const calc = (function () {
	// Закрытые члены
	// Закрытое поле, в котором хранится конечный результат вычисления
	let value;

	/**
	 * plusValue - метод прибавляет значение переданного параметра к конечному результату вычисления
	 * @param {number} val - значение, которое необходимо прибавить к "value"
	 * @returns {number} - возвращает результат прибавления значения "val" к "value"
	 */
	function plusValue(val) {
		value += val;
		return this;
	}

	/**
	 * minusValue - метод отнимает значение переданного параметра от конечного результата вычисления
	 * @param {number} val - значение, которое необходимо отнять от значения "value"
	 * @returns {number} - возвращает разницу между "value" и "val"
	 */
	function minusValue(val) {
		value -= val;
		return this;
	}

	/**
	 * multiplyValue - метод умножает значение переданного параметра на значение конечного результата вычисления
	 * @param {number} val - значение, которое необходимо умножить на значения "value"
	 * @returns {number} - возвращает результат умножения значения "value" на "val"
	 */
	function multiplyValue(val) {
		value *= val;
		return this;
	}

	/**
	 * powValue - метод возводит значение конечного результата вычисления в указанную степень
	 * @param {number} val - степень, в которую необходимо возвести значения "value"
	 * @returns {number} - возвращает результат возведение значения "value" в степень "val"
	 */
	function powValue(val) {
		value = Math.pow(value, val);
		return this;
	}

	/**
	 * divideValue - метод делит значение конечного результата вычисления на значение переданного параметра
	 * @param {number} val - значение, на которое необходимо разделить значения "value"
	 * @returns {number} - возвращает результат деления значения "value" на значение "val"
	 */
	function divideValue(val) {
		value /= val;
		return this;
	}

	/**
	 * setValue - метод устанавливает текущее значение конечного результата вычисления
	 * @param {number} val - значение, которое необходимо присвоить "value"
	 * @returns {object} - возвращает текущий котекст
	 */
	function setValue(val) {
		value = typeof val === "number" ? val : 0;
		return this;
	}

	/**
	 * getValue - метод возвращает конечный результат вычисления
	 * @returns {number} - возвращает текущее значение поля "value"
	 */
	function getValue() {
		return Number(value.toFixed(2));
	}

	return {
		// Открытие доступа к определенным методам.
		plusValue,
		minusValue,
		multiplyValue,
		powValue,
		divideValue,
		setValue,
		getValue
	}
}());

// this. Задачи
// 2. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать 
// метод для получения общей  стоимости всех товаров (цена * количество продуктов)
const product = {
	price: 100, 
	quantity: 5, 
	getAmount: function(){return this.price * this.quantity}
};

// 3. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество 
// деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, 
// но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.
const component = {
	price: 10, 
	quantity: 17
};
component.getAmount = product.getAmount;

// 4. Даны объект и функция:
// let sizes = {width: 5, height: 10}, 
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
let sizes = {width: 5, height: 10},
    getSquare = function () {return this.width * this.height};
let square = getSquare.call(sizes);

// 5. Дан массив let numbers = [4,12, 0, 10, -2, 4]. Используя ссылку на массив numbers и Math.min, 
//    найти минимальный элемент массива
let numbers = [4, 12, 0, 10, -2, 4];
let min = Math.min.apply(null, numbers); 

// 6. const element = {
// 	  	height: '15px',
// 	  	marginTop: '5px',
// 	  	marginBottom: '5px',
// 	  	getFullHeight: function () {
// 	  		return this.height + this. marginTop + this.marginBottom; // эта часть с ошибкой
// 	  	}
// };
// Исправить метод getFullHeight таким образом, чтобы можно было вычислить сумму трех слагаемых (высота плюс отступы).
// Для другого объекта block {height: '5px', marginTop: '3px', marginBottom: '3px'} вычислить полную высоту getFullHeight, 
// используя для этого объект element. В объект ничего не дописывать.
const element = {
  	height: '15px',
  	marginTop: '5px',
  	marginBottom: '5px',
  	getFullHeight: function () {
  		return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom); 
  	}
};

const block = {height: '5px', marginTop: '3px', marginBottom: '3px'};
let elementHeight = element.getFullHeight();
let blockHeight = element.getFullHeight.call(block);

// 7. let element = {height: 25, getHeight: function () {return this.height;}};
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
let element_1 = {
	height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element_1.getHeight.bind(element_1);