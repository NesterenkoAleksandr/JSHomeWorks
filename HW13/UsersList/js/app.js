/**
 * generateUsers - функция для формирования списка пользователей и вывода его на веб-страницу
 * @param {array} users - массив обьектов типа "user"
 * @returns {void}
 */
function generateUsers(users) {
    const ui = new UserUI();
    if (!users.length) return ui.showEmptyMsg();
    users.forEach(user => ui.addUser(user));
}

// Адрес ресурса с данными
const apiUrl = "https://jsonplaceholder.typicode.com";

const http = new CustomHttp();
// Обращение к серверу за данными и вывод их на веб-страницу 
http.get(`${apiUrl}/users`, (res) => {
    // Вывод полученных данных на веб-страницу
    generateUsers(res);
});

