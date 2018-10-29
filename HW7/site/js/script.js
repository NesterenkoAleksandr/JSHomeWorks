// DOM: задачи
// 1. Создать функцию, которая принимает два элемента. Функция проверяет, 
//    является ли первый элемент родителем для второго: 
//    isParent(parent, child); 

/**
 * isParent - функция проверяет является ли первый элемент родителем для второго 
 * @param {HTMLElement} parent - родительский элемент
 * @param {HTMLElement} child - дочерний элемент
 * @returns {Boolean} - результат проверки, является ли child потомком parent 
 */
const isParent = (parent, child) => {
	return parent.contains(child);
}

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
let links = Array.prototype.slice.call(document.links).filter(link => !link.closest('ul'));

// 3. Найти элемент, который находится перед и после списка ul
let ul = document.querySelector('ul');
let prev_element = ul.previousElementSibling;
let next_element = ul.nextElementSibling;

// 4. Посчитать количество элементов li в списке
let count = ul.getElementsByTagName('li').length;

// Nodes: задачи
// 1. Найти в коде список ul и добавить класс “list”
ul.classList.add("list");

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
document.querySelector('ul ~ a').setAttribute("id", "link");

// 3. На li через один (начиная с самого первого) установить класс “item”
ul.querySelectorAll("li").forEach((element, index) => {
	if (!(index % 2)) element.classList.add("item");
});

// 4. На все ссылки в примере установить класс “custom-link”
document.querySelectorAll("a").forEach((element) => element.classList.add("custom-link"));

// Манипуляция содержимым: задачи
// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ 
//    и текстом ‘item’ + номер li: 
// 	<ul>    
// 		<li>
// 			<a href="#">Link1</a>
// 		</li>    
// 		…    
// 		<li class="new-item">
// 			item 4
// 		</li>    
// 		<li class="new-item">
// 			item 5
// 		</li> 
// 	</ul>
for (let i = 1; i < count; i++) {
	ul.insertAdjacentHTML('beforeend', '<li class = "new-item">item ' + (count + i) +'</li>');	
}

// 2. Создать три элемента strong и добавить их в конец ссылок, которые находятся внутри 
//    списка ul (в каждую ссылку один - strong)
let strong = document.createElement("strong");
strong.insertAdjacentText("beforeend", "!!!");

ul.querySelectorAll("a").forEach((element, index) => {
	if (index > 2) return false;
	element.appendChild(strong.cloneNode(true));

});

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). 
//    В src добавьте реальный url к картинке
let img = document.createElement("img");
img.setAttribute("src", "img/technology.png");
img.setAttribute("alt", "technology");
document.body.insertBefore(img, document.body.firstChild);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let mark = document.querySelector('mark');
mark.classList.add("green");
mark.insertAdjacentText("beforeend", "green");

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
Array.from(ul.children).sort((prev, next) => {
	if (prev.textContent > next.textContent) return -1;
	if (prev.textContent < next.textContent) return 1;
	return 0;
}).forEach(element => ul.appendChild(element));
