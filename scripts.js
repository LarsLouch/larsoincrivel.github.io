let inputName = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputAssunto = document.querySelector("#assunto");
let inputMessage = document.querySelector("#mensagem");
let themeDark = document.querySelector(".dark");
let themeLight = document.querySelector(".light");
let root = document.querySelector(":root");
let skillCards = document.querySelectorAll(".skills__box");

skillCards.forEach(item => {
	item.addEventListener("click", () => {
		item.classList.add("animate__slow", "animate__flipOutY");
		item.addEventListener("animationend", () => {
			let p = document.createElement("p");
			item.firstElementChild.appendChild(p);
			item.classList.remove("animate__animated", "animate__flipOutX");
		});
		console.log(item);
	});
});


themeDark.addEventListener("click", () => {
	root.style.cssText =
		"--bg-white: #464646;" +
		"--text-color: #E5E5E5;" +
		"--bg-lightblue: #BB7711;" +
		"--pure-white: #1A1A1A70;" +
		"--btn-color: #D5851B;" +
		"--btn-hover-prim: #AA6A16;" +
		"--btn-hover-sec: #BB881120;" +
		"--academic-bg-img: none;" +
		"--menu-border-focus: #AA6A16;" +
		"--form-bg: #464646;";

	themeLight.classList.remove("none");
	themeDark.classList.add("none");
});

themeLight.addEventListener("click", () => {
	root.style.cssText =
		"--bg-white: #F5F5F5;" +
		"--bg-lightblue: #EAF2FD;" +
		"--text-color: #464646;" +
		"--btn-color: #2A7AE4;" +
		"--btn-hover-prim: #5595E9;" +
		"--btn-hover-sec: #D4E4FA;" +
		"--pure-white: #FFFFFF;" +
		"--academic-bg-img: #B20101;" +
		"--menu-border-focus: #2A7AE4;" +
		"--form-bg: ##EAF2FD;";

	themeDark.classList.remove("none");
	themeLight.classList.add("none");
});


inputName.addEventListener("input", () => {
	inputName.setAttribute("autocomplete", "on");
	if (inputName.value === "") {
		inputName.setAttribute("autocomplete", "off");
	}
	if (inputName.value.length > 50) {
		inputName.setCustomValidity("Precisa ter menos que 50 caracteres");
	} else {
		inputName.setCustomValidity("");
	}
	console.log(inputName.value.length);
});

inputEmail.addEventListener("input", () => {
	inputEmail.setAttribute("autocomplete", "on");
	if (inputEmail.value === "") {
		inputEmail.setAttribute("autocomplete", "off");
	}
});

inputAssunto.addEventListener("input", () => {
	if (inputAssunto.value.length > 50) {
		inputAssunto.setCustomValidity("Precisa ter menos que 50 caracteres");
	} else {
		inputAssunto.setCustomValidity("");
	}
});

inputMessage.addEventListener("input", () => {
	if (inputMessage.value.length > 300) {
		inputMessage.setCustomValidity("Precisa ter menos que 300 caracteres");
	} else {
		inputMessage.setCustomValidity("");
	}
});
