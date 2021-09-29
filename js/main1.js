// import clients from "./main.js";
// console.log(clients);

//selection of avis

let dataName = document.querySelector(".data-name");
let dataDate = document.querySelector(".data-date");
let dataObsTech = document.querySelector(".data-obs-tech");
let dataObsClient = document.querySelector(".data-obs-client");
let dataNameTech = document.querySelector(".data-name-tech");
let dataNameClient = document.querySelector(".data-name-client");

//creating the date
let today = new Date();
let dateToday = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
let timeToday = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTimeToday = dateToday + " " + timeToday;

window.addEventListener("load", () => {
	dataName.textContent = sessionStorage.getItem("NAME");
	dataDate.textContent = dateTimeToday;
	dataObsTech.textContent = sessionStorage.getItem("OBSTECH");
	dataObsClient.textContent = sessionStorage.getItem("OBSCLIENT");
	dataNameTech.textContent = sessionStorage.getItem("SIGNATURETECH");
	dataNameClient.textContent = sessionStorage.getItem("SIGNATURECLIENT");
});

// const fillDoc = () => {

// };

// window.onload = function () {
// 	fillDoc();
// };
