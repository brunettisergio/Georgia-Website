const firstNameWidget = document.querySelector("#firstName"),
	lastNameWidget = document.querySelector("#lastName"),
	emailWidget = document.querySelector("#email"),
	emailConfirmationWidget = document.querySelector("#emailConfirmation"),
	messageWidget = document.querySelector("#message"),
	submitBtnWidget = document.querySelector("#submitBtn");

firstNameWidget.addEventListener("focusout", event => {
	let input = firstNameWidget.value.trim();

	if (!(input.length > 0 && input.length < 16 && isNaN(input))) {
		firstNameWidget.style.border = "2px solid";
		firstNameWidget.style.borderColor = "red";
	} else {
		firstNameWidget.style.border = "";
		firstNameWidget.style.borderColor = "";
	}
});

lastNameWidget.addEventListener("focusout", event => {
	let input = lastNameWidget.value.trim();

	if (!(input.length > 0 && input.length < 16 && isNaN(input))) {
		lastNameWidget.style.border = "2px solid";
		lastNameWidget.style.borderColor = "red";
	} else {
		lastNameWidget.style.border = "";
		lastNameWidget.style.borderColor = "";
	}
});

emailWidget.addEventListener("focusout", event => {
	let input = emailWidget.value.trim();

	if (!(input.length > 0 && input.length < 36 && isNaN(input))) {
		emailWidget.style.border = "2px solid";
		emailWidget.style.borderColor = "red";
	} else {
		emailWidget.style.border = "";
		emailWidget.style.borderColor = "";
	}

	if (!(emailConfirmationWidget.value.trim() === input)) {
		emailConfirmationWidget.style.border = "2px solid";
		emailConfirmationWidget.style.borderColor = "red";
	} else {
		emailConfirmationWidget.style.border = "";
		emailConfirmationWidget.style.borderColor = "";
	}
});

emailConfirmationWidget.addEventListener("focusout", event => {
	let input = emailConfirmationWidget.value.trim(),
		compare = emailWidget.value.trim();

	if (!(input === compare)) {
		emailConfirmationWidget.style.border = "2px solid";
		emailConfirmationWidget.style.borderColor = "red";
	} else {
		emailConfirmationWidget.style.border = "";
		emailConfirmationWidget.style.borderColor = "";
	}
});

messageWidget.addEventListener("focusout", event => {
	let input = messageWidget.value.trim();

	if (!(input.length > 0 && input.length < 360)) {
		messageWidget.style.border = "2px solid";
		messageWidget.style.borderColor = "red";
	} else {
		messageWidget.style.border = "";
		messageWidget.style.borderColor = "";
	}
});
