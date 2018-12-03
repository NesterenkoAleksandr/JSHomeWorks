// Init Auth Service
const auth = new AuthService();
// Init Message Module
const message = new Message();
message.init();

// Login UI
const form = document.forms["loginForm"];
const emailInput = form.elements["email"];
const passwordInput = form.elements["password"];

const resetForm = document.forms["resetForm"];
const resetEmailInput = resetForm.elements["reset-email"];
const resetClose = document.querySelector('.close');

// Handlers
/**
 * submitHandler - функция для обработки события "submit" формы аутентификации на сайте
 * @param {object} e - event
 * @returns {void}
 */
function submitHandler(e) {
    e.preventDefault();

    const validation = new Validation(form);
    validation.init();

    if (!validation.check()) return console.error("Validation error.");
    
    auth.login(emailInput.value, passwordInput.value)
        .then((res) => {
            if (!res.error) {
                localStorage.setItem("social_user_id", res.id);
                localStorage.setItem("social_user_token", res.token);
                window.location = "index.html";
            } else {
                message.show({text: res.message, error: res.error});
            }
        });
}

/**
 * resetPasswordHandler - функция для обработки события "submit" формы сброса пароля
 * @param {object} e - event
 * @returns {void}
 */
function resetPasswordHandler(e) {
    e.preventDefault();

    const validation = new Validation(resetForm);
    validation.init();

    if (!validation.check()) return console.error("Validation error.");

    auth.resetPassword(resetEmailInput.value)
        .then((res) => {
            if (!res.error) {
                message.show({text: res.message});

                // Закрытие модального окна
                resetClose.click();

                resetEmailInput.value = "";
            } else {
                message.show({text: res.message, error: res.error});
            }
        });
}

// Set events
form.addEventListener("submit", submitHandler);
resetForm.addEventListener("submit", resetPasswordHandler);