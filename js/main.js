import Client from "./modules/Client.js";

//selection of form

let name = document.querySelector("#name");
let obsTech = document.querySelector("#obsTech");
let obsClient = document.querySelector("#obsClient");
let signatureTech = document.querySelector("#signatureTech");
let signatureClient = document.querySelector("#signatureClient");

//selection of avis

let dataName = document.querySelector(".data-name");
let dataDate = document.querySelector(".data-date");
let dataObsTech = document.querySelector(".data-obs-tech");
let dataObsClient = document.querySelector(".data-obs-client");
let dataNameTech = document.querySelector(".data-name-tech");
let dataNameClient = document.querySelector(".data-name-client");

//selection of form tag

let newClient = document.querySelector("#newClient");

//creating the date
let today = new Date();
let dateToday = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
let timeToday = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTimeToday = dateToday + " " + timeToday;

let clients = [];

newClient.addEventListener("submit", (e) => {
	e.preventDefault();
	let client = new Client(
		name.value,
		dateTimeToday,
		obsTech.value,
		obsClient.value,
		signatureTech.value,
		signatureClient.value
	);
	clients.push(client);
	console.log(clients);
});
