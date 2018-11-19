const Timer = function () {
    let timer_container;
    let end_time_container;
    let countdown;
    /**
     * init - инициализировать наш модуль
     * @param {object} settings - обьект состоящий из полей timer_container и end_time_container
     * @returns {object} - текущий контекст
     */
    function init(settings) {
        timer_container = document.querySelector(settings.timer_container);
        end_time_container = document.querySelector(settings.timer_end_date_container);
        return this;
    }

    /**
     * start - запускать таймер на указанное время в секундах
     * @param {number} seconds - колличество секунд 
     * @returns {void}
     */
    function start(seconds) {
        if (!seconds || typeof seconds !== "number") return console.log("Please provide seconds");

        clearInterval(countdown);

        const now = Date.now();
        const end = now + seconds * 1000;

        _display_time_left(seconds);
        _display_end_time(end);

        // Вывести в разметку таймер и дату окончания работы таймера
        countdown = setInterval(() => {
            const second_left = Math.round((end - Date.now()) / 1000);

            _display_time_left(second_left);
            
            if (second_left <= 0) {
                _beep();
                return clearInterval(countdown);
            }
        }, 1000);        
    } 

    /**
     * stop - принудительно останавливать таймер
     * @returns {void}
     */
    function stop() {
        clearInterval(countdown);
        timer_container.textContent = "";
        end_time_container.textContent = "";
    }

    /**
     * _display_time_left - обновляет на веб-странице оставшееся время работы таймера 
     * @param {number} seconds - колличество секунд 
     * @returns {void}
     */
    function _display_time_left(seconds) {
        const display = _seconds_to_dhms(seconds)
        timer_container.textContent = display;
        document.title = display;
    }

    /**
     * _display_end_time - отображает на веб-странице дату окончания работы таймера  
     * @param {number} timestamp - дата, когда прекратит работу таймер 
     * @returns {void}
     */
    function _display_end_time(timestamp) {
        const end_date = new Date(timestamp);

        const display = `Be back at ${end_date.toLocaleString('en-US', {
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric', 
            hour12: false 
        })}`
        end_time_container.textContent = display;
    }

    /**
     * _seconds_to_dhms - переводит секунды в строку формата d h:m:s 
     * @param {number} seconds - колличество секунд
     * @returns {string} - строка формата d h:m:s
     */
    function _seconds_to_dhms(seconds) {
        // Выделить из "seconds" дни, часы, минуты и секунды
        let days     = Math.floor(seconds / 86400);
            seconds -= days * 86400;
        let hours    = Math.floor(seconds / 3600);
            seconds -= hours * 3600;
        let minutes  = Math.floor(seconds / 60);
            seconds  = Math.floor(seconds % 60);

        // Шаблоны отображения дней, часов, минут и секунд
        const day_disp = days > 0 ? `${days} ${days > 1 ? 'days ' : 'day '}` : "";
        const hours_disp = days > 0 || hours > 0 ? `${hours}:` : "";
        const minutes_disp = days > 0 || hours > 0 || minutes > 0 ? `${minutes < 10 ? '0' : ''}${minutes}:` : "";
        const seconds_disp = `${seconds < 10 ? '0' : ''}${seconds}`;

        return day_disp + hours_disp + minutes_disp + seconds_disp;
    }

    /**
     * _beep - подает звуковой сигнал об окончании работы таймера 
     * @returns {void}
     */
    function _beep() {
        const audio = new Audio('audio/bell.mp3');
        audio.loop = false;
        audio.play(); 
    }

    return  {
        init,
        start, 
        stop
    }
}

/**
 * onClickHandler - запускает таймер с указанным колличеством секунд 
 * @param {HTMLElement} e - элемент на котором произошло событие
 * @returns {void}
 */
function onClickHandler(e) {
    let seconds = Number(this.dataset.time);
    my_timer1.start(seconds);
}

// Инициализация таймера
const my_timer1 = Timer().init({
    timer_container: ".display__time-left",
    timer_end_date_container: ".display__end-time"
});

// Коллекция всех элементов имеющих аттрибут [data-time], на веб-странице
const btns = document.querySelectorAll("[data-time]");
// Элемент для отключения таймера 
const reset_btn = document.querySelector(".stop__button");

// Обработка нажатия на элементы имеющие аттрибут [data-time]
btns.forEach(btn => btn.addEventListener("click", onClickHandler));
//  Обработка нажатия на элемент для отключения таймера 
reset_btn.addEventListener("click", my_timer1.stop);
// Перехват отправки формы
document.forms["custom"].addEventListener("submit", function(e) {
    e.preventDefault();
    // Определение, указанного пользователем, значения времени работы таймера
    let minutes = Number(this.elements["minutes"].value);

    if (minutes > 0) my_timer1.start(minutes * 60);

    // Очистка, указанного пользователем, значения времени работы таймера
    this.elements["minutes"].value = "";
});


