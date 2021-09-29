export default class Client {
	constructor(
		firstname,
		lastname,
		nights,
		chamber,
		breakfast = "oui",
		startDate = new Date(),
		endDate = "0"
	) {
		this.firstname = firstname.toUpperCase();
		this.lastname = lastname.toUpperCase();
		this.nights = nights;
		this.chamber = chamber;
		this.breakfast = breakfast;
		this.startDate = startDate;
		this.endDate = endDate;
	}
}
