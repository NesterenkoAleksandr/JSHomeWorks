// Конструкторы. Задачи
// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать 
//    марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает 
//    марку, и второй метод, который возвращает год производства машины (год текущий минус возраст 
//    машины, использовать Date для получения текущего года)  ... 
//    var lexus = new Car(‘lexus’, 2); 
//    lexus.получитьМарку(); // “Lexus” 
//    lexus.получитьГодВыпуска(); // 2014 (2016-2);  
//    Марка машины всегда должна возвращаться с большой буквы!

/**
 * Car - конструктор для производства автомобилей
 * @param {string} brand - марка автомобиля 
 * @param {number} age - возраст автомобиля
 * @returns {object}
 */
function Car(brand, age) {
  // Марка автомобиля это строка
  this._brand = typeof brand === 'string' ? brand : '';
  // Возраст автомобиля это число больше или равное нулю
  this._age = typeof age === 'number' && age >= 0 ? age : 0;

  /**
   * getBrand - возвращает марку автомобиля
   * @returns {string} - марка автомобиля
   */  
  this.getBrand = () => this._brand[0].toUpperCase() + this._brand.substr(1);

  /**
   * getIssueYear - возвращает год выпуска автомобиля 
   * @returns {number} - год выпуска автомобиля
   */
  this.getIssueYear = () => new Date().getFullYear() - this._age;
}

const lexus = new Car("lexus", 2);

// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из 
//    строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой 
//    другой метод). 
//    Конструктор при инициализации получает строку и имеет следующие методы:
//      a. показать оригинальную строку
//      b. показать зашифрованную строку
//      c. стереть все данные - метод должен удалить все строки
//    Строки не должны быть доступны через this, только с помощью методов.

/**
 * EncryptString - конструктор для шифрования строки
 * @param {string} string - строка, которую необходимо зашифровать
 * @returns {object}
 */
function EncryptString(string = '') {
  // Переменная для хранения итогового значения
  let _str = _encryptStr(typeof string === "string" ? string : '');

  /**
   * getDecryptedStr - показать оригинальную строку
   * @returns {string} - оригинальная строка
   */
  this.getDecryptedStr = () => _decryptStr(_str);

  /**
   * getEncryptedStr - показать зашифрованную строку
   * @returns {string} - зашифрованная строка
   */
  this.getEncryptedStr = () => _str;

  /**
   * clearStr - очищает значение строки
   * @returns {string} - пусиая строка
   */
  this.clearStr = () => _str = '';

  /**
   * _encryptStr - метод "Зашифровать строку"
   * @param {string} string - строка, которую необходимо зашифровать
   * @returns {string} - зашифрованная строка
   */
  function _encryptStr(string) {
    return string.split('').reverse().map((item) => item.charCodeAt()).join(',');
  }

   /**
   * _decryptStr - метод "Расшифровать строку"
   * @param {string} string - строка, которую необходимо расшифровать
   * @returns {string} - расшифрованная строка
   */
  function _decryptStr(string) {
    return string.split(',').reverse().map((item) => String.fromCharCode(item)).join('');
  } 
}

const encStr = new EncryptString("EncryptString - конструктор для шифрования строки");


// 3. Создать класс, который создает экземпляры, работающие со строкой и имеет следующие свойства и методы:
//      a. свойство “строка” будет содержать строку
//      b. методы для получения и установки строки
//      c. метод для получения длины строки
//      d. при вызове toString()  вернуть строку
//      e. при приведении объекта к числу вернуть длину строки

// var str = new КлассСтрока(‘test’); 
// str.получить(); // ‘test’ 
// +str; // 4 
// str.toString(); // ‘test’

class classString {
  constructor(value) {
    this.string = value;
  }

  /**
   * setString - установить новое значение свойства "строка"
   * @param {string} value - новая строка
   * @returns {object} - this
   */
  setString(value) {
    this.string = value;
    return this;
  }

  /**
   * getString - получить значение свойства "строка"
   * @returns {string} - значение свойства "строка"
   */
  getString() {
    return this.string;
  }

  /**
   * getLength - получить длину строку
   * @returns {number} - длина текущего значения свойства "строка"
   */ 
  getLength() {
    return this.string.length;
  }

  /**
   * toString - приведение к строке
   * @returns {string} - текущее значение свойства "строка"
   */
  toString(){
    return this.string;
  }

  /**
   * valueOf - приведение к числу
   * @returns {number} - длина текущего значения свойства "строка"
   */
  valueOf() {
    return this.getLength();
  }  
}

const str = new classString('test');
