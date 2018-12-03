class Message {
    constructor() {
        this._messageContainer;
    }

    /**
     * init - метод для установки начальных настроек
     * @returns {void}
     */
    init() {
        this._setContainer();
    }

    /**
     * show - метод выводит сообщение на страницу  
     * @param {string} text - текст сообщения
     * @param {string} error - признак того, что выводится сообщение об ошибке
     * @returns {void}
     */
    show({text, error}) {
        const template = Message._createMessageTemplate(text, error);
        this._messageContainer.insertAdjacentHTML("afterbegin", template);
    }

    /**
     * _setContainer - метод добавляет на страницу контейнер для вывода сообщений 
     * @returns {void}
     */
    _setContainer() {
        const template = "<div class='message-container'></div>";
        document.body.insertAdjacentHTML("afterbegin", template);
        this._messageContainer = document.querySelector(".message-container");
    }

    /**
     * _createMessageTemplate - статический метод для формирования шаблона сообщения
     * @param {string} text - текст сообщения
     * @param {string} error - признак того, что выводится сообщение об ошибке
     * @returns {string} - сформированный шаблон для вывода сообщения на страницу
     */
    static _createMessageTemplate(text, error) {
        return `
            <div class="alert ${error ? 'alert-danger' : 'alert-success'}">${text}</div>
        `;
    }
}