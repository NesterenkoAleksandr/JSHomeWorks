class UserUI {
    constructor() {
        this._container = document.querySelector(".users-wrapper");
    }

    /**
     * addUser - метод выводит на веб-страницу данные о пользователе
     * @param {object} user - данные о пользователе
     * @returns {void}
     */
    addUser(user) {
        const template = UserUI._createTemplate(user);
        this._container.insertAdjacentHTML("beforeend", template);
    }

    /**
     * showEmptyMsg - метод для вывода на веб-страницу предупреждения, в случае отсутствия данных для отображения 
     * @returns {void}
     */
    showEmptyMsg() {
        this._container.insertAdjacentHTML("beforeend", UserUI._emtyContainerTemplate());
    }

    /**
     * _createTemplate - статический метод для формирования шаблона вывода данных на веб-страницу
     * @param {object} user - данные о пользователе
     * @returns {string} - шаблон разметки заполненый переданными данными
     */
    static _createTemplate(user) {
        return `
        <details id="user-${user.id}">
            <summary class="font-weight-bold">${user.name}</summary>
            <ul>
                <li><span class="font-weight-bold">Username:</span> ${user.username}</li>
                <li><span class="font-weight-bold">Email:</span> <a href="mailto:${user.email}">${user.email}</a></li>
                <li><span class="font-weight-bold">Address:</span> ${user.address.suite}, ${user.address.street}, ${user.address.city}, 
                ${user.address.zipcode}, ${user.address.geo.lat}/${user.address.geo.lng}</li>
                <li><span class="font-weight-bold">Phone:</span> <a href="tel:${user.phone}">${user.phone}</a></li>
                <li><span class="font-weight-bold">Website:</span> <a href="${user.website}">${user.website}</a></li>
                <li><span class="font-weight-bold">Company:</span> ${user.company.name}; "${user.company.catchPhrase}"; "${user.company.bs}"</li>
            </ul>
        </details>
        `
    }

    /**
     * _emtyContainerTemplate - статический метод для формирования шаблона предупреждения, в случае отсутствия данных для отображения
     * @returns {string} - шаблон разметки в случае отсутствия данных
     */
    static _emtyContainerTemplate() {
        return `<div class="alert alert-info">Нет данных.</div>`
    }
}