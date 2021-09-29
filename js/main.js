import Client from "./modules/Client.js";

//selection of form

let name = document.querySelector("#name");
let obsTech = document.querySelector("#obsTech");
let obsClient = document.querySelector("#obsClient");
let signatureTech = document.querySelector("#signatureTech");
let signatureClient = document.querySelector("#signatureClient");

//selection of form tag

let newClient = document.querySelector("#newClient");

function handleClick() {
	sessionStorage.setItem("NAME", name.value);
	sessionStorage.setItem("OBSTECH", obsTech.value);
	sessionStorage.setItem("OBSCLIENT", obsClient.value);
	sessionStorage.setItem("SIGNATURETECH", signatureTech.value);
	sessionStorage.setItem("SIGNATURECLIENT", signatureClient.value);
	return;
}

if (window.location.href.indexOf("index") > -1) {
	newClient.addEventListener("submit", (e) => {
		e.preventDefault();
		handleClick();
		// let client = new Client(
		// 	name.value,
		// 	dateTimeToday,
		// 	obsTech.value,
		// 	obsClient.value,
		// 	signatureTech.value,
		// 	signatureClient.value
		// );
		// clients.push(client);
		window.location.href = "../avis/avis.html";
		// console.log(clients);
	});
}
// export default clients;
