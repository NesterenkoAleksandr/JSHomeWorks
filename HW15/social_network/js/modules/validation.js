class Validation {
    constructor(form) {
        this._form = form;
        this._inputs = this._form.querySelectorAll("[data-pattern]");
    }

    /**
     * init - метод для установки начальных настроек
     * @returns {void}
     */
    init() {
        this._setEvents();
    }

    /**
     * check - метод сопоставляет значения указанных полей с их шаблонами  
     * @returns {boolean} - результат проверки
     */
    check() {
        let state = true;

        this._inputs.forEach((input) => {
            const regExp = new RegExp(input.dataset.pattern);
            if (!regExp.test(input.value)) {
                input.classList.add("is-invalid");
                state = false;
            }
        });

        return state;
    }

    /**
     * _setEvents - метод добавляет обработчик события "focus" указанным полям 
     * @returns {void}
     */
    _setEvents() {
        this._inputs.forEach((input) => input.addEventListener("focus", (e) => this._onFocusHandler(e)));
    }

    /**
     * _onFocusHandler - метод удаляет с элемента класс "is-invalid"
     * @returns {void}
     */
    _onFocusHandler(e) {
        e.target.classList.remove("is-invalid");
    }
}