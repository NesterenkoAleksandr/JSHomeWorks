// Строки. Задачи
let string = 'some test string'; 

// 1. Получить первую и последнюю буквы строки
console.log(string[0]);
console.log(string[string.length-1]);

// 2. Сделать первую и последнюю буквы в верхнем регистре
console.log(string[0].toUpperCase());
console.log(string[string.length-1].toUpperCase());

// 3. Найти положение слова ‘string’ в строке
console.log(string.indexOf('string'));

// 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log(string.indexOf(' ', string.indexOf(' ') + 1));

// 5. Получить строку с 5-го символа длиной 4 буквы (прим. пятый символ - это четвертый индекс)
console.log(string.substr(4, 4));

// 6. Получить строку с 5-го по 9-й символы
console.log(string.slice(5, 9));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
let res = string.slice(0, -6);
console.log(res);

// 8. Из двух переменных a=20 и b=16 (где 20 и 16 - числа) получить переменную string, в которой будет содержаться текст “2016”
let a = 20,
	b = 16;
res = String(a) + String(b);
console.log(res);

// Числа. Задачи
// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
console.log(+Math.PI.toFixed(2));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));

// 3. Работа с Math.random:
// 		a. получить случайное число и округлить его до двух цифр после запятой
// 		b. получить случайное целое число от 0 до X
const X = 10;
console.log(+Math.random().toFixed(2));
console.log(Math.floor(Math.random() * X)); // 0<=n<X
console.log(Math.floor(Math.random() * (X + 1))); // 0<=n<=X

// 4.	 Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let k = 10;
console.log((0.6 * k + 0.7 * k) / k);
console.log(+(0.6 + 0.7).toFixed(1));

// 5.	Получить число из строки ‘100$’ 
console.log(parseInt('100$'));
