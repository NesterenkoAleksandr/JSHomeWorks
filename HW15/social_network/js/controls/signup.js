// Init Auth Service
const auth = new AuthService();

// Init Message Module
const message = new Message();
message.init();

// Sign Up UI
const form = document.forms["signUpForm"];
const emailInput = form.elements["email"];
const passwordInput = form.elements["password"];
const nickNameInput = form.elements["nick_name"];
const fNameInput = form.elements["first_name"];
const lNameInput = form.elements["last_name"];
const phoneInput = form.elements["phone"];
const genderSelect = form.elements["gender"];
const cityInput = form.elements["city"];
const countryInput = form.elements["country"];
const birthDayInput = form.elements["day_of_birth"];
const birthMonthInput = form.elements["month_of_birth"];
const birthYearInput = form.elements["year_of_birth"];

// Sign Up handler
/**
 * submitHandler - функция для обработки события "submit" формы регистрации пользователя на сайте
 * @param {object} e - event
 * @returns {void}
 */
function submitHandler(e) {
    e.preventDefault();

    const validation = new Validation(form);
    validation.init();

    if (!validation.check()) return console.error("Validation error.");
    
    auth.signUp(emailInput.value, passwordInput.value, nickNameInput.value, fNameInput.value, lNameInput.value, phoneInput.value
    	, genderSelect.value, cityInput.value, countryInput.value, birthDayInput.value, birthMonthInput.value, birthYearInput.value)
        .then((res) => {
            if (!res.error) {                
                window.location = "login.html";
            } else {
                message.show({text: res.message, error: res.error});
            }
        });
}

// Set event
form.addEventListener("submit", submitHandler);