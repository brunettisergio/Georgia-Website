let firstNameValid = false,
	lastNameValid = false,
	emailValid = false,
	firstNameWidget = document.querySelector("#firstNameInput"),
	lastNameWidget = document.querySelector("#lastNameInput"),
	emailWidget = document.querySelector("#emailInput"),
	emailConfirmationWidget = document.querySelector("#emailConfirmationInput"),
	formWidget = document.querySelector("#contactForm");

firstNameWidget.addEventListener(
	"input",
	validateName(firstNameWidget.value, 0)
);
lastNameWidget.addEventListener(
	"input",
	validateInput(lastNameWidget.value, 1)
);
emailWidget.addEventListener("input", validateInput(emailWidget.value, 2));
emailConfirmationWidget.addEventListener(
	"input",
	validateInput(emailConfirmationWidget.value, 2)
);
formWidget.addEventListener("submit", checkForm);

function validateInput(input, option) {
	switch (option) {
		case 0:
			if (input.trim().length > 0 && isNaN(input)) firstNameValid = true;
			else {
				firstNameWidget.style.border = "5px solid";
				firstNameWidget.style.borderColor = "red";
			}
			break;

		case 1:
			if (input.trim().length > 0 && isNaN(input)) lastNameValid = true;
			else {
				lastNameWidget.style.border = "5px solid";
				lastNameWidget.style.borderColor = "red";
			}
			break;

		case 2:
			if (input.trim().length > 0 && emailFormat.test(input))
				emailWidget = true;
			else {
				emailWidget.style.border = "5px solid";
				emailWidget.style.borderColor = "red";
			}
			break;
	}
}

function checkForm(event) {
	if (!firstNameValid || !lastNameValid || !emailValid) {
		event.preventDefault();
	}
}
