const firstNameWidget = document.querySelector("#firstName"),
	lastNameWidget = document.querySelector("#lastName"),
	emailWidget = document.querySelector("#email"),
	emailConfirmationWidget = document.querySelector("#emailConfirmation"),
	messageWidget = document.querySelector("#message"),
	submitBtnWidget = document.querySelector("#submitBtn");

firstNameWidget.addEventListener("focusout", event => {
	if (
		!(
			firstNameWidget.value.trim().length > 0 &&
			firstNameWidget.value.trim().length < 16 &&
			isNaN(firstNameWidget.value.trim())
		)
	) {
		firstNameWidget.style.border = "2px solid";
		firstNameWidget.style.borderColor = "red";
	} else {
		firstNameWidget.style.border = "";
		firstNameWidget.style.borderColor = "";
	}
});

lastNameWidget.addEventListener("focusout", event => {
	if (
		!(
			lastNameWidget.value.trim().length > 0 &&
			lastNameWidget.value.trim().length < 16 &&
			isNaN(lastNameWidget.value.trim())
		)
	) {
		lastNameWidget.style.border = "2px solid";
		lastNameWidget.style.borderColor = "red";
	} else {
		lastNameWidget.style.border = "";
		lastNameWidget.style.borderColor = "";
	}
});

emailWidget.addEventListener("focusout", event => {
	if (
		!(
			emailWidget.value.trim().length > 0 &&
			emailWidget.value.trim().length < 16 &&
			isNaN(emailWidget.value.trim())
		)
	) {
		emailWidget.style.border = "2px solid";
		emailWidget.style.borderColor = "red";
	} else {
		emailWidget.style.border = "";
		emailWidget.style.borderColor = "";
	}
});

emailConfirmationWidget.addEventListener("focusout", event => {
	if (!(emailConfirmationWidget.value.trim() === emailWidget.value.trim())) {
		emailConfirmationWidget.style.border = "2px solid";
		emailConfirmationWidget.style.borderColor = "red";
	} else {
		emailConfirmationWidget.style.border = "";
		emailConfirmationWidget.style.borderColor = "";
	}
});

messageWidget.addEventListener("focusout", event => {
	if (
		!(
			messageWidget.value.trim().length > 0 &&
			messageWidget.value.trim().length < 360
		)
	) {
		messageWidget.style.border = "2px solid";
		messageWidget.style.borderColor = "red";
	} else {
		messageWidget.style.border = "";
		messageWidget.style.borderColor = "";
	}
});
