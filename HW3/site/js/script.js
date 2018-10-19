// Задачи на циклы
// 1. Дана строка “I am in the easycode”. Сделать первые буквы каждого слова в верхнем регистре. Использовать for или while
let str = "I am in the easycode";
let res = "";

for (let i = 0; i < str.length; i++) {
	res += str[i - 1] === " " || i === 0 ? str[i].toUpperCase() : str[i];
}

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш 
//    (то есть последняя буква становится первой, предпоследняя - второй итд)
let str1 = "tseb eht ma i";
let res1 = "";

for (let i = str1.length + 1; --i; ) {
	res1 += str1[i-1];
}
console.log(res1);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. 
//    С помощью циклов вычислить факториал числа 10.
let n = 10;
let factorial = 1;

while (n) factorial *= n--;
console.log(factorial);

// 5. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с 
//    большой буквы, а пробелы удалены
let str3 = "JavaScript is a pretty good language";
let res3 = "";

for (let i = 0; i < str3.length; i++) {
	if (str3[i] !== " ") {
		res3 += str3[i - 1] === " " || i === 0 ? str3[i].toUpperCase() : str3[i];
	}	
}

// 6. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль.
for (let i = 1; i <= 15; i++) {	
	if (i % 2) console.log(i);	
}

// На основе строки “Hello world” сделать новую строку, где после каждой буквы, кроме пробела и последней, будет стоять символ *. 
let string = "Hello world";
let result = "";

for (let i = 0; i < string.length; i++) {
	result += string[i] + (i < string.length - 1 && string[i] !== " " ? "*" : ""); 
}
