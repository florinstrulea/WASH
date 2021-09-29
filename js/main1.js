// import { jsPDF } from "jspdf";
// import clients from "./main.js";
// console.log(clients);

//selection of avis

let dataName = document.querySelector(".data-name");
let dataDate = document.querySelector(".data-date");
let dataObsTech = document.querySelector(".data-obs-tech");
let dataObsClient = document.querySelector(".data-obs-client");
let dataNameTech = document.querySelector(".data-name-tech");
let dataNameClient = document.querySelector(".data-name-client");
let buttonBack = document.querySelector(".button-back");
let pdfDownload = document.querySelector(".pdf-download");

//creating the date
let today = new Date();
let dateToday = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
let timeToday = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTimeToday = dateToday + " à " + timeToday;

//loading text in the fields

window.addEventListener("load", (e) => {
	dataName.textContent = sessionStorage.getItem("NAME");
	dataDate.textContent = dateTimeToday;
	dataObsTech.textContent = sessionStorage.getItem("OBSTECH");
	dataObsClient.textContent = sessionStorage.getItem("OBSCLIENT");
	dataNameTech.textContent = sessionStorage.getItem("SIGNATURETECH");
	dataNameClient.textContent = sessionStorage.getItem("SIGNATURECLIENT");

	dataName.classList.toggle("bold");
	dataDate.classList.toggle("bold");
	dataObsTech.classList.toggle("bold");
	dataObsClient.classList.toggle("bold");
	dataNameTech.classList.toggle("bold");
	dataNameClient.classList.toggle("bold");
});

// Default export is a4 paper, portrait, using millimeters for units

// pdfDownload.addEventListener("click", () => {
// 	const doc = new jsPDF();
// 	doc.text("Avis de passage", 10, 10);
// 	doc.save("Avis de passage.pdf");
// });

buttonBack.addEventListener("click", () => {
	sessionStorage.clear();
});
// pdfDownload.addEventListener("click", () => {
// 	function demoFromHTML() {
// 		var pdf = new jsPDF("p", "pt", "letter");
// 		// source can be HTML-formatted string, or a reference
// 		// to an actual DOM element from which the text will be scraped.
// 		source = $("#customers")[0];

// 		// we support special element handlers. Register them with jQuery-style
// 		// ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
// 		// There is no support for any other type of selectors
// 		// (class, of compound) at this time.
// 		specialElementHandlers = {
// 			// element with id of "bypass" - jQuery style selector
// 			"#bypassme": function (element, renderer) {
// 				// true = "handled elsewhere, bypass text extraction"
// 				return true;
// 			},
// 		};
// 		margins = {
// 			top: 80,
// 			bottom: 60,
// 			left: 40,
// 			width: 522,
// 		};
// 		// all coords and widths are in jsPDF instance's declared units
// 		// 'inches' in this case
// 		pdf.fromHTML(
// 			source, // HTML string or DOM elem ref.
// 			margins.left, // x coord
// 			margins.top,
// 			{
// 				// y coord
// 				width: margins.width, // max width of content on PDF
// 				elementHandlers: specialElementHandlers,
// 			},

// 			function (dispose) {
// 				// dispose: object with X, Y of the last line add to the PDF
// 				//          this allow the insertion of new lines after html
// 				pdf.save("Test.pdf");
// 			},
// 			margins
// 		);
// 	}
// });
