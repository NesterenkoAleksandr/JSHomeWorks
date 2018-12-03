class CustomHttp {
    /**
     * get - метод получения данных с сервера
     * @param {string} url - адрес ресурса с данными
     * @param {object} callback - функция принимающая и обрабатывающая полученные данные
     * @returns {void}
     */
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.addEventListener("load", () => {
        	if (xhr.readyState == 4 && xhr.status == 200) {
            	callback(JSON.parse(xhr.responseText));
            }
        });

        xhr.send();
    }
}