//selection of avis

let dataName = document.querySelector(".data-name");
let dataDate = document.querySelector(".data-date");
let dataObsTech = document.querySelector(".data-obs-tech");
let dataObsClient = document.querySelector(".data-obs-client");
let dataNameTech = document.querySelector(".data-name-tech");
let dataNameClient = document.querySelector(".data-name-client");

const fillDoc = () => {
	dataName.textContent = clients[0].name;
	dataDate.textContent = clients[0].date;
	dataObsTech.textContent = clients[0].obsTech;
	dataObsClient.textContent = clients[0].obsClient;
	dataNameTech.textContent = clients[0].nameTech;
	dataNameClient.textContent = clients[0].nameClient;
	console.log(dataName);
};

fillDoc;
