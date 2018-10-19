// Объект. Задачи
// 1. Создать объект с полем product, равным ‘iphone’.
let obj = {
    product: 'iphone'
};

// 2. Добавить в объект из предыдущей задачи поле price, равное 1000 и поле currency, равное ‘dollar’.
obj.price = 1000;
obj.currency = 'dollar';

// 3. Добавить поле details, которое будет содержать объект с полями model и color (значения этим полям придумайте сами).
obj.details = {model:'7', color:'white'};

console.log(obj);

// Присваивание. Задачи
// 1. Записать в коротком виде:
// a = a + 10, b = b * 18, c = c - 10
// x = a + x, y = y * z, i = i * 5 * y

let a = 2;
a += 10; // a = a + 10
console.log(a); // 12

let b = 3;
b *= 18; // b = b * 18
console.log(b); // 54

let c = 4;
c -= 10; // c = c - 10
console.log(c); // -6

let x = 5;
x += a; // x = a + x
console.log(x); // 17

let y = 6;
let z = 7;
y *= z; // y = y * z
console.log(y); // 42

let i = 8;
i *= 5 * y// i = i * 5 * y
console.log(i); // 8 * 5 * 42 = 1680

// 2. Как возвести переменную в квадрат? Использовать короткую запись.

z *= z; // z = z * z
console.log(z); // 49

// Условные операторы. Задачи
// Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let visibility = 'hidden';

if (visibility === 'hidden') {
	visibility = 'visible';
} else {
	visibility = 'hidden';
}
console.log(visibility);

// Используя if, записать условие
// 1. если переменная равна нулю, присвоить ей 1
// 2. если меньше нуля - строку “less then zero”
// 3. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать короткую запись)

let res = -1;

if (res === 0) {
	res = 1;
} else if (res < 0) {
	res = 'less then zero';
} else {
	res *= 10; 
}

console.log(res);

// Преобразование типов. Задачи
// Чему равно а, почему?

// let a = 0 || 'string'; 
console.log( 0 || 'string'); // будет равно 'string' потому, что 0 = false и 'string' = true (запинается на правде)

// let a = 1 && 'string';
console.log(1 && 'string'); // 'string' (поскольку 1 = true и 'string' = true, то возвращается последняя правда)

// let a = null || 25;
console.log(null || 25); // 25, запинание на первой правде (null = false, а 25 = true)

// let a = null && 25;
console.log(null && 25); // null, запинание на первой лжи (null = false, а 25 = true)

// let a = null || 0 || 35;
console.log(null || 0 || 35); // 35, запинание на первой правде (null = false, 0 = false и 35 = true)

// let a = null && 0 && 35;
console.log(null && 0 && 35); // null, запинание на первой лжи (null = false, 0 = false и  35 = true)

// Что отобразится в консоли. Почему?
// 12 + 14 + '12'
console.log(12 + 14 + '12'); // сначала идет сложение 12 + 14 = 26, а потом конкатенация 26 + '12' = '2612'

// 3 + 2 - '1'
console.log(3 + 2 - '1'); // 3 + 2 - 1 = 4 ('1' преобразовывается в 1)

// '3' + 2 - 1
console.log('3' + 2 - 1); 	// сначала идет конкатенация '3' + 2 = '32', а потом преобразование '32' в 32
							// и вычитание 32 - 1 = 31

// true + 2
console.log(true + 2); // 1 + 2 = 3 (true преобразовывается в 1)

// +'10' + 1
console.log(+'10' + 1); // 10 + 1 = 11 (+'10' преобразовывается в 10)

// undefined + 2
console.log(undefined + 2); // NaN + 2 = NaN (Number(undefined) = NaN)

// null + 5
console.log(null + 5); // null + 5 = 5 (null = 0)

// true + undefined
console.log(true + undefined); // 1 + NaN = NaN (Number(undefined) = NaN)